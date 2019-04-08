class Fairy {
	constructor(name) {
		this.name = name;
		this.dust = 10;
		this.clothes = {
			dresses: ['Iris']
		}
		this.disposition = 'Good natured';
		// this.replaceInfant = {
		// 	name: name,
		// 	eyes: eyes,
		// 	disposition: disposition;
		// }
	}
	receiveBelief() {
			this.dust +=1;
	}
	believe() {
		this.dust +=10;
	}
	makeDresses(dresses) {
		this.clothes.dresses.splice(1, 0);
	}
	provoke() {
		this.disposition = 'Vengeful';
	}
}

module.exports = Fairy;