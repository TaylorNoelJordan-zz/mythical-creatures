class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.crankOmeter = 0;
		this.standing = true;
		this.layingDown = false;
	}

	shoot() {
		this.crankOmeter++
		if(this.crankOmeter > 2) {
			this.cranky = true;
			return 'NO!'
		} else {
			this.cranky = false;
			return "Twang!!!"	
			}
		}

	run() {
		this.crankOmeter++
		if(this.crankOmeter > 2) {
			this.cranky = true;
			this.layingDown = true;
			return 'NO!'
		} else {
			this.cranky = false;
			return 'Clop clop clop clop!!!'
		}
		
	}

	sleep() {
		if(this.standing === true) {
			return 'NO!';
		} else {
			this.cranky = false;
		return 'ZZZZ'
		}
	}

	layDown() {
	 this.standing = false;
	 this.layingDown = true;
	}

	standUp() {
		this.standing = true;
		this.layingDown = false;
	}

	drinkPotion() {
		this.cranky = false;
		if(this.standing = true) {
			return 'Not while I\'m laying down!'
		} else {
			this.cranky = true;
		}
	}
}

module.exports = Centaur;