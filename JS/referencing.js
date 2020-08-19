// JavaScript Document
function generateReference(){
	var today = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var date = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear();
	
	var reference = "Grice, X. 2020, Happy Cafe Home, viewed " + date + " " + months[month] + " " + year + ", <file:///Users/Xander/Desktop/HappyCafe/public/index.html>";
	
	
	navigator.clipboard.writeText(reference).then(reference => {
		alert("A reference has been copied to your clipboard.");
	});	
}