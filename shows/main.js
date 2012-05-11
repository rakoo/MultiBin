function (doc, req) {
    // !json templates.page

    var mustache = require("vendor/couchapp/lib/mustache");

    var path;
    if (typeof(req.path[5]) === 'undefined') {
        path = "../"
    } else {
        path = "../../"
    }

    data = {
        attachment_path: path,
        version: 1.0,
        errormessage: "hey",
        cipherdata: typeof(req.path[5])
    }
    return mustache.to_html(this.templates.page, data);
}
