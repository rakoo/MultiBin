function (doc) {
	if (doc.type == 'paste') {
		emit(doc._id, null);
    }
	else if (doc.type == 'comment') {
		emit(doc.paste_ref,null);
  }
}
