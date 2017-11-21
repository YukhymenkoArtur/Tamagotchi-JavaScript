var tamagotchi = Object({
  	name : name,
  	hearth : 100,
  	food : 100,
	power : 100,
	happy : 100,
  	shower : 100,
	isDead: function () {
			this.hearth--;
	},
	isHungry: function () {
			this.food--;
	},
	isWantSleep: function () {
			this.power--;
	},
	isNotPlay: function () {
			this.happy--;
	},
	isNeedShower: function () {
			this.shower--;
	}

});
// рівень життя з таймером
var tamaTimer = setTimeout(function tamaTimer(){
	document.getElementById('hearlthLevel').innerHTML = tamagotchi.hearth;
    if (tamagotchi.hearth) {
    	tamagotchi.isDead();
    	setTimeout(tamaTimer, 100);}
}, 1000);


document.getElementById('food').addEventListener('click', function () {
	tamagotchi.hearth = 100;
});



// рівень голоду з таймером
var tamaTimer = setTimeout(function tamaTimer(){
	document.getElementById('foodLevel').innerHTML = tamagotchi.food;
    if (tamagotchi.food) {
    	tamagotchi.isHungry();
    	setTimeout(tamaTimer, 100);}
}, 1000);


document.getElementById('food').addEventListener('click', function () {
	tamagotchi.food = 100;
});


// рівень сили / сна
var tamaTimer = setTimeout(function tamaTimer(){
	document.getElementById('powerLevel').innerHTML = tamagotchi.power;
    if (tamagotchi.power) {
    	tamagotchi.isWantSleep();
    	setTimeout(tamaTimer, 100);}
}, 1000);


document.getElementById('power').addEventListener('click', function () {
	tamagotchi.power = 100;
});



// рівень щастя
var tamaTimer = setTimeout(function tamaTimer(){
	document.getElementById('happyLevel').innerHTML = tamagotchi.happy;
    if (tamagotchi.happy) {
    	tamagotchi.isNotPlay();
    	setTimeout(tamaTimer, 100);}
}, 1000);


document.getElementById('happy').addEventListener('click', function () {
	tamagotchi.happy = 100;
});


// рівень необхідності прийняти душ
var tamaTimer = setTimeout(function tamaTimer(){
	document.getElementById('showerLevel').innerHTML = tamagotchi.shower;
    if (tamagotchi.shower) {
    	tamagotchi.isNeedShower();
    	setTimeout(tamaTimer, 100);}
}, 1000);


document.getElementById('shower').addEventListener('click', function () {
	tamagotchi.shower = 100;
});




function tamagotchi() {
  this.name = name;
  this.hearth = 100;
  this.food = 100;
  this.power = 100;
  this.happy = 100;
  this.shower = 100;

}

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
};




