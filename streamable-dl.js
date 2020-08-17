document.body.onload =addElement();
function addElement(){
	//get video url
	var videoElement = document.getElementById("video-player-tag")
	var videoURL = videoElement.attributes["src"].value
	//build download div element
	var dlDiv = document.createElement("div")
	var dlButton = document.createElement("a");
	dlButton.setAttribute("id", "download-button");
	var content = document.createTextNode("Download");
	dlButton.title = "Download video";
	dlButton.href = videoURL;
	dlButton.appendChild(content);
	dlDiv.appendChild(dlButton);
	//Get streamable link and format css
	var footerDiv = document.getElementById("footer-content")
	var actionsDiv = footerDiv.getElementsByClassName("actions-section")[0]
	var streamableLinkElement = actionsDiv.children[0]
	var slDiv = document.createElement("div")
	slDiv.appendChild(streamableLinkElement)
	slDiv.style.float="left";
	dlDiv.style.float="right";
	var spacerDiv = document.createElement("div")
	spacerDiv.style.clear="both";
	//Rebuild the footer with downlaod button
	actionsDiv.appendChild(slDiv)
	actionsDiv.appendChild(dlDiv)
	actionsDiv.appendChild(spacerDiv)
}
