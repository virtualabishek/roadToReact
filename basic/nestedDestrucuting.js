const user = {
    fname: "Abi",
    pet: {
        name: "kiddy",
        color: "white"
    }
};

// Without object destructuring
const firstName = user.fname;
const petName = user.pet.name;
console.log(firstName);
console.log(petName);

// with nested object Destruring

const { fname, pet: { name } } = user;

console.log(fname + " " + name)
