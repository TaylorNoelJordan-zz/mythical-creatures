class Sphinx {
	constructor() {
	this.name;
	this.riddles = [];
	}
	collectRiddle(riddle){
		this.riddles.push(riddle);
		if(this.riddles > 3) {
			this.riddles.pop(riddle);
		}
	}
}

module.exports = Sphinx;