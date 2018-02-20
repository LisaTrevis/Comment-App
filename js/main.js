// create elements and add values to them
function addComment() {
	// create variable to capture user name from input value
	var username = document.getElementById("username").value
	// create variable to capture comment from textarea value
	var comment = document.getElementById("comment").value

	// create text node variable with "User" plus the value of username variable
	var userNameText = document.createTextNode("User: " + username)
	// create text node variable with comment value
	var commentText = document.createTextNode(comment)

	// create new li element as a variable
	var newListItem = document.createElement("li")
	// create new class name for newListItem variable
	newListItem.className = "list-item"

	// create new h2 element as a variable
	var newUserName = document.createElement("h2")
	// append text node variable userNameText to newUserName h2 element
	newUserName.appendChild(userNameText)

	// create new p element as a variable
	var newComment = document.createElement("p")
	// append text node variable commentText to newComment p element
	newComment.appendChild(commentText)

	// create button element variable called deleteButton
	var deleteButton = document.createElement("button")
	// add Delete text to deleteButton button element
	deleteButton.innerHTML = "Delete"
	// set type=button attribute to deleteButton button element
	deleteButton.setAttribute("type", "button")
	// set id=deletebtn attribute to deleteButton button element
	deleteButton.setAttribute("id", "deletebtn")
	// add function addClass to onclick event 
	deleteButton.onclick = function() {removeComment();}

	// function that removes list item including deleteButton button element, newUserName h2 element, and newComment p element
	function removeComment() {
		document.getElementById("commentList").removeChild(newListItem)
	}

	// append newUserName h2 element to newListItem li element
	newListItem.appendChild(newUserName)
	// append newComment h2 element to newListItem li element
	newListItem.appendChild(newComment)
	// append deleteButton h2 element to newListItem li element
	newListItem.appendChild(deleteButton)
	// append newListItem li element to ul element with id commentList
	document.getElementById("commentList").appendChild(newListItem)
	// resets form for additional usernames/comments
	document.forms["commentForm"].reset();

}

