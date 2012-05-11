function (doc, req) {
    // !json templates.page

    var mustache = require("vendor/couchapp/lib/mustache");

    var path, cipherdata, errormessage;

    if (req.raw_path.substr(-4) == 'main') {
        path = "../";
    } else {
        path = "../../";
        if (doc) {
            cipherdata = doc.data;
        } else if (req.raw_path.substr(-1) != '/' ) {
            errormessage = "Wrong path : " + req.raw_path
        }
    }


    data = {
        attachment_path: path,
        version: 1.0,
        errormessage: errormessage,
        cipherdata: cipherdata
    }
    return mustache.to_html(this.templates.page, data);
}
