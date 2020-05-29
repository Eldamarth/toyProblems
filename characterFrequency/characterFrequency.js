module.exports = characterFrequency = (string) => {
	console.log("ANALYZING: " + string);
	/* 
    NOTES:

        INPUT  
            A string - likely to be one word, but what if it wasn't?

        OUTPUT  
            An array of tuples.  Each tuple's two entries are thus: the first is a letter as a string, the second is the frequency with which that character appears in the overall string.  These are sorted first in descending order by frequency and then by alphabetical order in the case that frequencies should matches.

        CONSTRAINTS
            Do we need this to run in a specific time complexity?  Other constraints?  Nothing jumps out.
        
        EDGE CASES
			Empty string?  
				Won't be a problem - will return an empty array.
			String with numbers in it?
				Will be evaluated by their unicode value because they have been coerced to strings by being written as object keys and returned that way via Object.entries
			Spaces in a string?
				We could use a conditional to eliminate these during the count. i.e. if (letter === ' ') {don't count it} 
			Capital letters different or same as lowercase - i.e. does 'Madam' have 2 'm's or 1 'M' and 1 'm'
				This would depend on whether or not this is desired by or necessary the end user.  If not, all letters could be converted toUpperCase or toLowerCase before counting.
			Foreign letters, Cyrillic Alphabet, etc.
				If a different sorting order than the Unicode assignments of these letters is desired, this would have to be allowed for within the comparatorFunc, as it performs the final alphabetical sorting.

    */

	// THIS IS A COMPARATOR FUNCTION WE WILL USE AT THE END
	// We need to define it before we need to use it, so reading through this will be easier once you have examined the for loop below.
	let comparatorFunc = (arr1, arr2) => {
		// This function takes two arguments: arr1 and arr2. Each is one of the arrays returned by the Object.entries(collection) below and have the format [letter, frequency]
		//  This is a comparator function for use with Array.prototype.sort, and it follows the format defined on MDN for use with Array.prototype.sort() - i.e. it returns a numeric value that tells sort where it needs to go.

		// First, let's check if the frequencies are equivalent, since then we would need to sort them in alphabetical order.
		if (arr1[1] === arr2[1]) {
			//If the frequencies are the same, let's compare them by the UNICODE values of the letters.  Since we used an object to collect information, there will never a case in which the same letter needs to be compared to itself for frequency, ergo we do not need to ever return a 0, which would indicate a precise equivalency to the sort function.

			if (arr1[0] < arr2[0]) return -1; // if we want something to evaluate as LESS than something else via this function, we need to return -1 or some other sub-zero number

			// else we want to return 1 or some other above-zero number.
			return 1;
		}
		return arr2[1] - arr1[1];
	};

	// THIS IS AN OBJECT WE WILL BE USING TO STORE LETTERS AND COUNT THEIR FREQUENCY
	let collection = {};

	// YOU CAN ITERATE THROUGH A STRING MUCH IN THE SAME WAY AS AN ARRAY, I.E. BY USING BRACKET NOTATION
	for (let i = 0; i < string.length; i++) {
		// Grab the letter at this point in the string
		const letter = string[i];

		// Check if we've counted the letter before - if we have, collection[letter] won't return undefined, so let's check this via that.
		if (collection[letter] === undefined) {
			// We haven't seen this letter so far, so we now know that we have seen it ONE time, let's set the count to that for this letter to initialize it.
			collection[letter] = 1;
		} else {
			// We've seen this letter at least once, so let's add one to the count.  It's tempting to JUST use the code below, but unless we initialize it as a number on the first encounter of that letter, it will never be a number to get incremented and all of the letters will end up having a count that evaluates to NaN.
			collection[letter]++;
		}
	}
	// Let's access the Object.entries array for collecton, as this resembles the return format we want already (an array of tuples that we have made sure are letters (the keys), paired with counts (the values))
	// Then we can return it sorted by the comparatorFunc we wrote
	return Object.entries(collection).sort(comparatorFunc);
};
