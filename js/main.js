function addComment() {
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value

	var userNameText = document.createTextNode("User: " + username)
	var commentText = document.createTextNode(comment)

	var newListItem = document.createElement("li")
	newListItem.className = "list-item"

	var newUserName = document.createElement("h2")
	newUserName.appendChild(userNameText)

	var newComment = document.createElement("p")	
	newComment.appendChild(commentText)

	var deleteButton = document.createElement("button")
	deleteButton.innerHTML = "Delete"
	deleteButton.setAttribute("type", "button")
	deleteButton.setAttribute("id", "deletebtn")
	deleteButton.onclick = function() {addClass();}

	function addClass() {
		deleteButton.className = "hide"
		newUserName.className = "hide"
		newComment.className = "hide"
	}

	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	newListItem.appendChild(deleteButton)
	document.getElementById("commentList").appendChild(newListItem)
	document.forms["commentForm"].reset();

}

