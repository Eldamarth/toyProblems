module.exports = characterFrequencyClass = (string) => {
	console.log("ANALYZING: " + string);

	/* 
    In this file, we're going to look at a class-based solution to this problem.  
    
    It REALLY isn't necessary to solve this problem with a class at all, but it's interesting to experiment with how a class can be used to solve problems like this one - in fact there are several ways to go about it!  This example builds upon the logic in the first solution, but implements it with class based logic.
    */

	class AnalysisMachine {
		// Doesn't take arguments (in this form, we COULD also rewrite this to take the string as an argument, too!)
		constructor() {
			// Create a storage object for this class.  This will serve as our 'memory' and corresponds to 'collection' in the first solution.
			this.memState = {};
		}

		// Adds a letter to the memState if not there.  Increments it if it IS there.
		add(letter) {
			if (this.memState[letter] === undefined) {
				// We haven't seen this letter so far.
				this.memState[letter] = 1;
			} else {
				// We've seen this letter at least once, so let's add one to the count.
				this.memState[letter]++;
			}
		}

		// Getters are great - getters are a function that doesn't take an argument and which should return something.  In this case, we will use this to do the sorting of all the letter tuples in our memState and then return the result.
		get results() {
			// Remember the comparator function?  This is the same one, we're going to use it in the same way.
			let comparatorFunc = (arr1, arr2) => {
				if (arr1[1] === arr2[1]) {
					if (arr1[0] < arr2[0]) return -1;
					return 1;
				}
				return arr2[1] - arr1[1];
			};

			// Let's perform the same operation we did in the first solution, but this time within a class, acting on the memState object it contains.
			return Object.entries(this.memState).sort(comparatorFunc);
		}
	}

	// CREATE A NEW INSTANCE OF THE ANALYSISMACHINE CLASS
	let analysis = new AnalysisMachine();

	// ITERATE THROUGH THE INCOMING STRING
	for (let i = 0; i < string.length; i++) {
		// ADD EACH LETTER TO THE MEMSTATE
		analysis.add(string[i]);
	}

	// FINALLY, RETURN THE SORTED RESULTS VIA THE'RESULTS' GETTER WE MADE
	return analysis.results;
};
