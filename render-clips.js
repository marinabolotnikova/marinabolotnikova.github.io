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

// the single source of truth for how one clip renders as a list item
function clip_li_html(clip) {
  let html = "<li>";
  if (clip.hed == undefined) {
    html += 'On <a href="' + clip.link + '" target="_blank">' + strip_links(clip.topic) + "</a>";
  }
  else {
    html += '<a href="' + clip.link + '" target="_blank">' + strip_links(clip.hed) + "</a> •";
  }
  if (clip.dek == undefined) { html += " "; }
  else { html += " <span>" + clip.dek + "</span> "; }
  let outlet_tag = (clip["outlet-ital"] === false || clip["outlet-ital"] === "false") ? "span" : "i";
  html += "<" + outlet_tag + ">" + clip.outlet + "</" + outlet_tag + ">";
  html += ", " + get_month(clip.date.substr(5)) + " " + clip.date.substr(0, 4);
  html += "</li>";
  return html;
}

// year header with an anchor id, so links like #y2026 can jump to it
function year_header_html(year) {
  return '<h4 id="y' + year + '">- ' + year + " -</h4>";
}

// lets build-writing.js load this file with require(); browsers ignore this
if (typeof module !== "undefined") {
  module.exports = { month, get_month, clip_sort, strip_links, clip_tags, is_featured, filter_by_tag, clip_li_html, year_header_html };
}
