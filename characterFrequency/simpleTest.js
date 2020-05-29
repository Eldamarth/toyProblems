// LET'S REQUIRE OUR FUNCTIONS FROM OUR SOLUTION(S)
const characterFrequency = require("./characterFrequency");
const characterFrequency2 = require("./characterFrequency2");
const characterFrequencyClass = require("./characterFrequencyClass");

// LET'S SET UP SOME TEST STRINGS!
const testStrings = [
	"mississippi",
	"miaaiaaippi",
	"mmmaaaiiibbb",
	"1223344556677778889",
];

// LET'S STORE OUR FUNCTIONS IN AN ARRAY SO WE CAN TEST *ALL* OF THEM
const funcs = [
	characterFrequency,
	characterFrequency2,
	characterFrequencyClass,
];

// LET'S WRITE A SHORT TEST TO RUN VIA THE CODE RUNNER TO TEST EACH FUNCTION
funcs.forEach((func) => {
	// THIS PRINTS THE NAME OF THE FUNCTION, SO WE KNOW WHICH IS BEING TESTED
	console.log(`\n${func.name}\n###############\n`);
	testStrings.forEach((word) => {
		console.log(func(word));
	});
});
