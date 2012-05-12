function(newDoc, oldDoc, userCtx) {
  
  if (oldDoc){
    if (userCtx.roles.indexOf("_admin") == -1) {
      throw({forbidden: "Only database admins are allowed to update pastes/comments"});
    }
  }
} 
