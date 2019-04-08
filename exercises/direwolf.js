class Direwolf {
	constructor(name, home, size) {
		this.name = name;
		this.home = home;
		if(this.home === undefined) {
			this.home = 'Beyond the Wall';
		}
		this.size = size;
		if(this.size === undefined) {
			this.size = 'Massive';
		}
		this.starksToProtect = [];	
		this.huntsWhiteWalkers = true;
	}
	protect(stark) {
		if(this.home === stark.location) {
			this.starksToProtect.push(stark);
			stark.safe = true;
			this.huntsWhiteWalkers = false;
		}
		if(this.starksToProtect.length > 2) {
			this.starksToProtect.pop()
		}
	}
	leave(stark) {
		this.starksToProtect = [];
		stark.safe = false;
	}

}




module.exports = Direwolf;