function tamagotchi() {
  this.name = name;
  this.hearth = 100;
  this.food = 100;
  this.power = 100;
  this.happy = 100;
  this.toilet = 100;

}

function timer () {

}

var tamagotchi = new tamagotchi("Picachu");

// ф-ції для підвищення показників

function hearth () {
	if (this.hearth < 25) {
		this.hearth++;
	};
}

function feed () {
	if (this.food < 25) {
		this.food++;
	};
}

function power () {
	if (this.power < 25) {
		this.power++;
	};
}

function happy () {
	if (this.happy < 25) {
		this.happy++;
	};
}

function toilet () {
	if (this.toilet < 25) {
		this.toilet++;
	};
}


// ф-ції "предсмертного" стану тамагочі



document.getElementById('....')