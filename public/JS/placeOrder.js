function sendData(input){
	var input = input;
	const data = { input };
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'order/json'
		},	
		body: JSON.stringify(data)
	};
	
	console.log(JSON.stringify(data));
			
	fetch('orderAPI', options).then(response => {
		response = response.json().then(response => {
			console.log(response);
		});
	});
}