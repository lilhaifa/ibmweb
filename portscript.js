var divIdPfx = "rec_div_";
var recCtr = 0;

function upload_rec() {
	var submitter = document.getElementById("recauth").value;
	console.log("author is: ",submitter);
	var recText = document.getElementById("rectext").value;
	console.log("feedack is: ",recText);
	var contDivRef = document.getElementById("div-recs");
    var newRecRef = document.createElement("div");
	var newRecId = divIdPfx + recCtr.toString();
	newRecRef.Id = newRecId;
	console.log("new Id = ",newRecId,"Id ctr = ",recCtr);
	recCtr++;
	newRecRef.style.border = "2px solid #969696";
	newRecRef.style.textAlign = "left";
	newRecRef.style.width = "400px";
	newRecRef.style.height = "200px";
	newRecRef.style.background = "#d9dbda";
	newRecRef.style.margin = "10px";
	newRecRef.style.float = "left";
	newRecRef.innerHTML += recText;
	var newBr = document.createElement("br");
	newRecRef.appendChild(newBr);
	newRecRef.innerHTML += "- " + submitter;
	contDivRef.appendChild(newRecRef);
}