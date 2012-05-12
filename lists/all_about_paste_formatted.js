function(head, req) {
    var row;
    var ret = [];
    while (row = getRow()) {
      var tmp_doc = row.doc;
      delete tmp_doc['_id'];
      delete tmp_doc['_rev'];
      delete tmp_doc['type'];

    ret.push(tmp_doc);
  }
  send(JSON.stringify(ret));
}
