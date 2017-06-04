module.exports = {
    hooks: {
        "page:before": function (page) {
            function triple(str, prefix, text, postfix, offset, s) {
              return '<em><u>' + text + '</u></em>';
            }
            function double(str, prefix, text, postfix, offset, s) {
              return '<u>' + text + '</u>';
            }
            page.content = page.content.replace( /(___)(.*?)(___)/gi, triple);
            page.content = page.content.replace( /(__)(.*?)(__)/gi, double);
            return page;
        }
    }
};
