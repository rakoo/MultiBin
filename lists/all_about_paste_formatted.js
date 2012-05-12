function(head, req) {
    var row;
    var ret = [];
    while (row = getRow()) {
      var tmp_doc = row.doc;
      delete tmp_doc['_id'];
      delete tmp_doc['_rev'];
      delete tmp_doc['type'];

      if (row.doc.type == 'comment') {
          tmp_doc.meta.commentid = row.id;
      }

    ret.push(tmp_doc);
  }
  send(JSON.stringify(ret));
}
