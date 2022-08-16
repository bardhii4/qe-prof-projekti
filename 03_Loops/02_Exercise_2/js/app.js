function sumOfRange(startRange, endRange) {
	let total = 0;
	for (let x = startRange; x <= endRange; x++) {
		total += x;
	}
	console.log(total);
}

sumOfRange(5, 10);
