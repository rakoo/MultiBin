function (doc, req) {
  // !json templates.page

  var mustache = require("vendor/couchapp/lib/mustache");
  return mustache.to_html(this.templates.moge, data);
  return Mustache.template(template.page,{
    version: 1.0,
    errormessage: "hey",
    cipherdata: "test"
  })


}
