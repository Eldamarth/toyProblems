module.exports = characterFrequency2 = (string) => {
	console.log("ANALYZING: " + string);

	/* 

    In this file, we're going to create a different solution to the problem.  This isn't necessarily EFFICIENT, but it approaches the entirely from another direction, and does not make use of an OBJECT with letters as keys.

    The concept here is that we are creating an array called STORAGE that represents letter frequencies.  If a letter is counted and is not present in the STORAGE, it will be pushed to the array at STORAGE[1], indicating a count of 1.  As other letters get counted, if that letter is present, it will get pushed up one rung on the array to a higher address, and the current address's array will be filtered so it no longer is there.

    Once all letters have been entered, the STORAGE array will contain all the letters at an address whose numerical index represents their final tally!  Then, all we have to do is format this information into the expected output format!  We'll still use Array.prototype.sort(), but the comparator will be absent, as we only need an alphabetical sort, and this is the default for strings, which the letters are.
    
    */

	// Create a storage array and a results array that will eventually get returned (it's where we'll create a proper-formatted array from the storage info we collect)
	let storage = [];
	let result = [];

	// Iterate through our word
	for (let i = 0; i < string.length; i++) {
		// let letter = `` + string[i]; // Coerce to a string, just in case.
		let letter = string[i];

		// We are using findIndex instead of indexOf because we want to analyze the contents of that cell with a comparator to see if a letter is present at that address already, rather than simply seek strict equivalency of the cell's contents with a preset value.
		let currentIndex = storage.findIndex((cell) => {
			if (Array.isArray(cell)) {
				let truth = cell.some((item) => item === letter);
				return truth;
			}
			return;
		});
		if (currentIndex === -1) {
			if (!storage[1]) storage[1] = [];
			storage[1].push(letter);
		} else {
			if (!storage[currentIndex + 1]) storage[currentIndex + 1] = [];
			storage[currentIndex + 1].push(letter);
			storage[currentIndex] = storage[currentIndex].filter(
				(item) => item !== letter
			);
		}
	}

	// USE A REVERSE FOR LOOP, BECAUSE THESE ARE JUST PLAIN FUN
	for (let i = storage.length; i > 0; i--) {
		let letterArray = storage[i];
		// FIND OUT IF THERE ARE ANY LETTERS AT THIS INDEX (i.e. with this count)
		if (letterArray !== undefined) {
			// SORT THE LETTERS ALPHABETICALLY, i.e. DEFAULT, NO COMPARATOR NECESSARY
			letterArray = letterArray.sort();

			// ITERATE THROUGH, PUSH PROPER FORMATTED TUPLE TO RESULT
			letterArray.forEach((letter) => result.push([letter, i]));
		}
	}

	return result;
};
