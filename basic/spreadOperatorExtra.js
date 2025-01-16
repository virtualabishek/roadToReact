const user = {
	fname: "Abishek",
	lname: "Neupane",
	age: 21,
	country: "Nepal",
	district: "Gorkha",
	city: "Gorkhaa",
	street: "Nayabasti",
	zip: 34000,
	favSong: "Buttifuri by Baaja",
	favArtist: "The Strumbellas"
}


const {fname, lname, age, favSong, favArtist, ...userInfoWithAddress} = user;


console.log(userInfoWithAddress)
