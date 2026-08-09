#!/usr/bin/env node
/* Pre-bakes the clip list from clips.js into writing.html as static HTML, so
 * visitors without javascript still see the full, current list of clips
 * (newest first, grouped by year) plus year anchor links in place of the tag
 * buttons. When javascript runs, the page script wipes and repopulates these
 * sections, so nothing changes for javascript-enabled visitors.
 *
 * All clip-to-HTML rendering comes from render-clips.js (shared with the
 * browser), so the baked output can't drift from the live rendering.
 *
 * Run from the repo root:  node build-writing.js
 */

const fs = require("fs");
const path = require("path");
const render = require("./render-clips.js");

const root = __dirname;
const writingPath = path.join(root, "writing.html");

// clips.js is a plain browser script (no exports), so evaluate it and pull out its variables
const clipsSrc = fs.readFileSync(path.join(root, "clips.js"), "utf8");
const { clips } = new Function(clipsSrc + "; return { tags, clips };")();

clips.sort(render.clip_sort);

// featured section: the same image boxes show_featured() would render, wide-screen and narrow-screen
const featuredHtml = render.featured_boxes_html(clips.filter(render.is_featured));

// results section: ALL non-featured clips (not just the first 20), grouped by year
const all = render.filter_by_tag(clips, "all");
let resultsHtml = "";
let currentYear = null;
for (const clip of all) {
  const year = clip.date.substring(0, 4);
  if (year !== currentYear) {
    if (currentYear !== null) resultsHtml += "\n  </ul>\n  ";
    resultsHtml += render.year_header_html(year) + "\n  <ul>";
    currentYear = year;
  }
  resultsHtml += "\n  " + render.clip_li_html(clip);
}
if (currentYear !== null) resultsHtml += "\n  </ul>";

// taglist section: year anchor links, standing in for the tag buttons.
// buildTagButtons() clears #taglist on load, so these are only ever seen
// when javascript is disabled or fails.
const years = [...new Set(all.map(clip => clip.date.substring(0, 4)))];
const taglistHtml = years.map(y => '<a href="#y' + y + '">' + y + "</a>").join(" / ");

/* Splice generated content into writing.html between marker comments like
 * <!-- baked:results:start --> ... <!-- baked:results:end -->.
 * On the first run (no markers yet) it matches the bare element by its id
 * and writes the markers, so every later run is fully deterministic. Sections
 * that generate their own container elements pass a null openTag, since there's
 * no pre-existing element to match -- for those the markers are required. */
function splice(html, name, openTag, closeTag, content) {
  const marked = "<!-- baked:" + name + ":start -->\n  " + content + "\n  <!-- baked:" + name + ":end -->";
  const markerRe = new RegExp("<!-- baked:" + name + ":start -->[\\s\\S]*?<!-- baked:" + name + ":end -->");
  if (markerRe.test(html)) {
    return html.replace(markerRe, () => marked);
  }
  if (openTag === null) {
    throw new Error("build-writing.js: writing.html is missing the <!-- baked:" + name + ":start/end --> markers");
  }
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const elementRe = new RegExp("(" + esc(openTag) + ")[\\s\\S]*?(" + esc(closeTag) + ")");
  if (!elementRe.test(html)) {
    throw new Error("build-writing.js: couldn't find the " + name + " section in writing.html");
  }
  return html.replace(elementRe, (m, open, close) => open + "\n  " + marked + "\n  " + close);
}

let html = fs.readFileSync(writingPath, "utf8");
html = splice(html, "featured", null, null, featuredHtml);
html = splice(html, "taglist", '<span role="tablist" id="taglist">', "</span>", taglistHtml);
html = splice(html, "results", '<div style="padding-bottom:20px" id="results">', "</div>", resultsHtml);

fs.writeFileSync(writingPath, html);
console.log("build-writing.js: baked " + clips.length + " clips (" + all.length + " listed + "
  + (clips.length - all.length) + " featured, " + years.length + " years) into writing.html");
