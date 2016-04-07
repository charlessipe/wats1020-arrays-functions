// This is the file where you will write the Truncate Words function and related code.



// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.

"use strict";

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var originalText2 = "We don't beat the reaper by living longer, but by living well, and living fully — for the reaper will come for all of us. The question is: what do we do between the time we’re born and the time he shows up."
var wordLimit = 8;

function truncateWords(longText, numWords){
  var textArray = longText.split(" ");  // split string into array of strings
  console.log(textArray);
  var arrayLength = textArray.length;  // get length of array of strings
  var removeWordNum = arrayLength - wordLimit;  // calculate number of words to remove
  console.log("Remove " + removeWordNum + " Words");
  textArray.splice(arrayLength - removeWordNum, removeWordNum); // splice array 
  console.log(textArray);
  textArray.push("..."); // add ellipses to end of array
  console.log(textArray);
  var myString = textArray.join(" "); // combine array into new string
  return myString;
}

var shortText = truncateWords(originalText, wordLimit);
var shortText2 = truncateWords(originalText2, wordLimit);

console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
console.log('shortText2: ' + shortText2);

// Stretch goals

var charLimit = 50;

function truncateCharacters(longText, numChar){
  var characterArray = longText.split("");
  console.log(characterArray);
  var charArrayLength = characterArray.length;
  console.log(charArrayLength);
  var removeCharNum = charArrayLength - numChar;
  console.log("Remove " + removeCharNum + " Characters");
  characterArray.splice(charArrayLength - removeCharNum, removeCharNum);
  console.log(characterArray);
  characterArray.push("...");
  console.log(characterArray);
  var newString = characterArray.join("");
  return newString;  
}

var shortSnippet = truncateCharacters(originalText, charLimit);

console.log('Shortened Snippet: ' + shortSnippet);






