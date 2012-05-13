function(newDoc, oldDoc, userCtx) {
  if (oldDoc){
    if (userCtx.roles.indexOf("_admin") == -1) {
      throw({forbidden: "Only database admins are allowed to update pastes/comments"});
    }
  } else {

    // verify well-formedness
    var malformed = false;
    if (typeof(newDoc.data) != "string") {
      malformed = true;
    } else if (["paste", "comment"].indexOf(newDoc.type) == -1) {
      malformed = true;
    }

    if (malformed == true) {
      throw({forbidden: "The document is malformed. Not accepting this."});
    }

    // verify size
    if (newDoc.data.length * 2 >= 2000000) {
      throw({forbidden: "Paste is limited to 2MB of encrypted data"});
    }
  }
} 
