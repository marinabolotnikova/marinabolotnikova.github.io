/* Shared clip-rendering helpers, used in two places:
 *   1. the browser script in writing.html, which renders clips.js interactively
 *   2. build-writing.js, which pre-bakes a static copy of the full clip list into
 *      writing.html as a fallback for visitors without javascript
 * Keeping all clip-to-HTML logic here means the two can't drift apart.
 * Everything in this file builds plain HTML strings -- no document/DOM access. */

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// helper to parse the month a story is posted
function get_month(s) {
  let n = parseInt(s);
  return month[n - 1];
}

// sort comparator: newest first, comparing "YYYY-MM" / "YYYY-MM-DD" date strings
function clip_sort(a, b) {
  return (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0);
}

// heds and topics must not contain <a> tags — the story link is set via clip.link
function strip_links(text) {
  if (/<a[\s>]/i.test(text)) {
    console.log("Warning: removed link markup from hed/topic (set the link with the clip's \"link\" attribute): " + text);
    return text.replace(/<a\b[^>]*>/gi, "").replace(/<\/a>/gi, "");
  }
  return text;
}

// the clip's comma-separated "tags" attribute, as a trimmed list
function clip_tags(clip) {
  return clip.tags ? clip.tags.split(",").map(t => t.trim()) : [];
}

function is_featured(clip) {
  return clip_tags(clip).includes("featured");
}

// non-featured clips matching a tag; "all" matches every non-featured clip
function filter_by_tag(clips, tag) {
  return clips.filter(clip => !is_featured(clip) && (tag === "all" || clip_tags(clip).includes(tag)));
}

// the dek (if there is one) followed by the outlet and date, e.g.
// "<span>Some dek.</span> <i>Vox</i>, April 2026" -- shared by the list and featured renderings
function clip_meta_html(clip) {
  let html = "";
  if (clip.dek != undefined) { html += "<span>" + clip.dek + "</span> "; }
  let outlet_tag = (clip["outlet-ital"] === false || clip["outlet-ital"] === "false") ? "span" : "i";
  html += "<" + outlet_tag + ">" + clip.outlet + "</" + outlet_tag + ">";
  html += ", " + get_month(clip.date.substr(5)) + " " + clip.date.substr(0, 4);
  return html;
}

// the single source of truth for how one clip renders as a list item
function clip_li_html(clip) {
  let html = "<li>";
  if (clip.hed == undefined) {
    html += 'On <a href="' + clip.link + '" target="_blank">' + strip_links(clip.topic) + "</a>";
  }
  else {
    html += '<a href="' + clip.link + '" target="_blank">' + strip_links(clip.hed) + "</a> •";
  }
  html += " " + clip_meta_html(clip) + "</li>";
  return html;
}

// one featured story as an image cell. `prefix` is "f" for the wide-screen grid or "m" for the
// narrow-screen stack; the two share their content and differ only in markup and css classes.
function featured_cell_html(clip, prefix) {
  const title = strip_links(clip.hed == undefined ? clip.topic : clip.hed);
  let inner = "";
  // a featured clip with no "image" still gets a cell, just without a picture
  if (clip.image) { inner += '\n      <img class="' + prefix + '-img" src="' + clip.image + '" alt="">'; }
  inner += '\n      <p class="' + prefix + '-hed">' + title + "</p>";
  inner += '\n      <p class="' + prefix + '-dek">' + clip_meta_html(clip) + "</p>\n    ";
  const link_class = (prefix === "f") ? ' class="f-cell"' : "";
  const link = "<a" + link_class + ' href="' + clip.link + '" target="_blank">' + inner + "</a>";
  return (prefix === "f") ? link : '<div class="m-cell">\n    ' + link + "\n    </div>";
}

// both featured boxes: an image grid for wide screens and a stack of cards for narrow ones.
// both are always filled in, so switching between them is purely a matter of css.
function featured_boxes_html(featured) {
  const cells = prefix => featured.map(clip => featured_cell_html(clip, prefix)).join("\n    ");
  return '<div id="f-box" class="w3-hide-small">\n    ' + cells("f") + "\n  </div>\n  "
    + '<div id="m-box" class="w3-hide-medium w3-hide-large">\n    ' + cells("m") + "\n  </div>";
}

// year header with an anchor id, so links like #y2026 can jump to it
function year_header_html(year) {
  return '<h4 id="y' + year + '">- ' + year + " -</h4>";
}

// lets build-writing.js load this file with require(); browsers ignore this
if (typeof module !== "undefined") {
  module.exports = { month, get_month, clip_sort, strip_links, clip_tags, is_featured, filter_by_tag,
    clip_meta_html, clip_li_html, featured_cell_html, featured_boxes_html, year_header_html };
}
