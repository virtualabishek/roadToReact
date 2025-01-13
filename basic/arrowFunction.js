const greetMe = () => {
  console.log(
    "I am a arrow function. I don't need return or other fancy things."
  );
};

greetMe();

// Tempelete Iterals.

function getGreeting(what) {
  return "Welcome to " + what;
}

console.log(getGreeting("JavaScript"));

// OR
const greeting = getGreeting("JS");

console.log(greeting);

// Template Literals:

function getGreetings(what) {
  return `Welcome to ${what}`;
}

console.log(getGreetings("bun js"));
