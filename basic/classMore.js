class Person {
	constructor(fname, lname) {
		this.fname = fname, 
		this.lname = lname
	}
	greetMe() {
		return "Hello " + this.fname + " " + this.lname + "! How you doing?";
	}
}

const me = new Person("Abi", "Shek");

const myMom = new Person("Bhagawati", "Devkota");

console.log(myMom.greetMe());

console.log(me.greetMe());


