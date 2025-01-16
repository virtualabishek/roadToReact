const profile = {
	name: "Abi",
	age: 21
}

const address = {
	district: "Gorkha",
	street: "NayaBasti"
}


const user = {
	...profile,
	geder: 'male',
	...address
}

console.log(user);
