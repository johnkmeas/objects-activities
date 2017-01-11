function positionLetters(str){
  var result = {};
  var inputCharacters = str.toLowerCase().split('');

  //console.log(inputCharacters);
  for(var i = 0; i < inputCharacters.length; i++ ){
    //console.log('input: ',inputCharacters[i],inputCharacters )
    if(inputCharacters[i] == ' ') {
      //nothing in here
    }else if (!result.hasOwnProperty(inputCharacters[i])) {
      result[inputCharacters[i]] = [i];
    }else {
      //console.log(inputCharacters[i],'indexes',i)
      result[inputCharacters[i]].push(i);
    }
  }
  console.log(result);
  //return result
}

var inputString = "lighthouse in the house";
console.log('Index of each character in:','\n', inputString);
console.log('-------------------');
positionLetters(inputString);

// returning multiple numbers to represent all the places in the string that it shows up.
// { l: [ 0 ],
//   i: [ 1, 11 ],
//   g: [ 2 ],
//   h: [ 3, 5, 15, 18 ],
//   t: [ 4, 14 ],
//   o: [ 6, 19 ],
//   u: [ 7, 20 ],
//   s: [ 8, 21 ],
//   e: [ 9, 16, 22 ],
//   n: [ 12 ] }