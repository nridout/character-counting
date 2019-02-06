//function that takes a phrase and returns an object with each of the letters
//in the phrase and how many times they appear
function countLetters(phrase) {
  //sets the input phrase to a string variable, removes spaces and joins the remaining letters
  var phraseAsString = phrase.split(" ").join("");
  //creates an empty object lettercount
  var letterCount = {};
  //for each letter in the phrase string
  for (var i = 0; i < phraseAsString.length; i++) {
    //set individual letter to variabe "letter"
    var letter = phraseAsString[i];
    //if letter is a key in letterCount object
    if (letter in letterCount) {
      //increase the letter count value for that object
      letterCount[letter] += 1;
    //else
    } else {
      //add the letter to the object and set the value to 1
      letterCount[letter]= 1;
    }
  }
//return the letterCount object
return letterCount;
}
console.log(countLetters("Lighthouse in the house"));