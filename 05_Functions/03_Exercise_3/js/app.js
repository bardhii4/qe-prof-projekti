function calculateTip(amount, rating) {
	if (amount == 100 && rating.includes('Very good service')) {
		return 25;
	} else if (amount == 75 && rating.includes('Good service')) {
		return 20;
	} else if (amount == 50 && rating.includes('Average service')) {
		return 15;
	} else if (amount == 25 && rating.includes('Bad service')) {
		return 0;
	} else {
		console.log('Unreadable description');
	}
}

console.log(calculateTip(75, 'Good service'));
