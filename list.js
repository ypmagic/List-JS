/* 
 Contract - arrayToList : Array -> List (a series of objects with the properties value and rest. Rest contains succeeding elements of the list,
 while the list variable contains the first element in the list).
 Purpose - Converts an array into a list.
 Example - [1, 2, 3] becomes
    var list = {
		value: 1,
		rest: {
			value: 2,
			rest: {
				value: 3,
				rest: null
			}
		}
  	}
*/

// The function returns a new list.
function arrayToList(arr) {
	var list = {
		value: arr[0],
		rest: null
	}
	for (var i = 1; i < arr.length; i++) {
		let rest = {
			value: arr[i],
			rest: null
		}
		search(list, rest);
	}
	return list;
}

/*
 Contract - search : List, Object -> Side-Effect
 Purpose - Finds the next null element in the new list in arrayToList and replaces it with the new element.
 The function does not return a value as the function modifies the passed list.
 Example - A list with 1 and a new element 2 becomes the list with elements 1 and 2.
*/

// The function goes through the list to find the next "null" element in the list, then replaces "null" with the new element.
function search(list, restObject) {
	if (list.rest === null) {
		list.rest = restObject;
	} else {
		search(list.rest, restObject);
	}
}

/* ------------------ TEST CODE --------------------
// Test: search() with list containing 1 and restObject with properties value: 2 and rest: null.
var list = {
	value: 1,
	rest: null
}
search(list, {
	value: 2,
	rest: null
});

// Test: arrayToList() with arr - [1, 2, 3, "hi", true]
arrayToList([1, 2, 3, "hi", true]); // should return a list containing 1, 2, 3, "hi", and true.
*/

// --------------------------------------------------------------------------------------------------------------------------------------------------

/*
 Contract - listToArray : List -> Array
 Purpose - Take a list and outputs an array containing the same elements.
 Example - If a list contains 1, 2, and 3, the resulting array contains [1, 2, 3].
*/

// Takes a list and outputs an array
function listToArray(list) {
	var arr = [];
	// gets the first length-2(th) elements.
	while (list.rest !== null) {
		arr.push(list.value);
		list = list.rest;
	}
	// gets the length-1(th) element.
	arr.push(list.value);
	return arr;
}

/* ------------------ TEST CODE --------------------
// Test: Take the list containing 1, 2, and 3, then output an array of the same elements.
var list2 = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
}
listToArray(list2) // -> [1, 2, 3]
*/

// --------------------------------------------------------------------------------------------------------------------------------------------------

/* 
 Contract - nth : List, Number -> Any
 Purpose - Gets the nth element in a list
 Example - Using the list from the example in arrayToList, the (Number)th element in the List is returned.
*/

// The function returns the nth element
function nth(list, num) {
	if (num == 0) {
		return list.value == undefined ? undefined : list.value;
	} else {
		return nth(list.rest, num-1);
	}
}

/* ------------------ TEST CODE --------------------
// Test: With a list containing 1, 2, 3, find the 2nd element (2).
var list3 = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
}
console.log(nth(list3, 2)); // should return 3.
*/

// --------------------------------------------------------------------------------------------------------------------------------------------------

/* 
 Contract - prepend : List, Any -> List
 Purpose - Adds an element to the beginning of the list.
 Example - With the list containing 2, 3, 4, adds the new element Any to the beginning of the list.
*/

// The function inserts an element at the beginning of the list.
function prepend(element, list) {
	return {
		value: element,
		rest: list
	}
}

/* ------------------ TEST CODE --------------------
// Test: With a list containing 2, 3, 4, add 1 to the beginning.
var list4 = {
	value: 2,
	rest: {
		value: 3,
		rest: {
			value: 4,
			rest: null
		}
	}
}
console.log(prepend(list4, 1))
*/