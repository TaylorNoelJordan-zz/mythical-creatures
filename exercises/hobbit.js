class Hobbit {
	constructor(name) {
		this.name = name;
		this.disposition = 'homebody';
		this.age = 0;
		this.adult = false;
		this.isShort = true;
		this.old = false;
		this.hasRing = false;
		if(this.name === 'Frodo') {
			this.hasRing = true;
		}
	}

	celebrateBirthday() {
		this.age++
		this.adult = this.age >= 33;
		this.old = this.age >= 101;
		}
}

module.exports = Hobbit;