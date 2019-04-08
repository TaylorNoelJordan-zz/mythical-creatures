class Wizard {
	constructor({name, bearded}) {
		this.name = name;
		this.bearded = bearded;
		this.isRested = true;
		this.spells = 0;
		if(this.bearded === undefined) {
			this.bearded = true;
		}
	}
	incantation(spell) {
		return spell.toUpperCase();
	}
	cast() {
		this.spells++
		if(this.spells >= 3) {
			this.isRested = false;
		// console.log(this.isRested)
		return 'I SHALL NOT CAST!';
		} else {
			return 'MAGIC BULLET';
		}
	}
}

module.exports = Wizard;