(function () {

  // ============
  // scrapbox (=sb) nodes
  // ============

  class SbNodePage { }

  // ============
  // scrapbox parsers
  // ============

  function parse(doc) {
    return new SbNodePage();
  }

  // ============
  // markdown (=md) nodes
  // ============

  class MdNodeDocument {
    toString() {
      return 'foo';
    }
  }

  // ============
  // scrapbox to markdown converters
  // ============

  function convert(sbPage) {
    return new MdNodeDocument();
  }

  // ============
  // main
  // ============

  const sbPage = parse(document);
  const mdDoc = convert(sbPage);

  // output
  const newDoc = window.open(
    '', // url
  ).document;
  // newDoc.title = 'conversion result'; // failed
  setTimeout(() => newDoc.title = 'conversion result', 0);
  const textNode = newDoc.createTextNode(mdDoc.toString());
  newDoc.body.appendChild(textNode);
})();
