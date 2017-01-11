function countLetters(str){
  var result = {
  }
  var inputCharacters = str.split(' ').join('').toLowerCase();
  inputCharacters = inputCharacters.split('')
  //console.log(inputCharacters)

  for(var i = 0; i < inputCharacters.length; i++ ){
    //console.log(inputCharacters[i])
    if(!result.hasOwnProperty(inputCharacters[i])) {
      //result[inputCharacters[i]] = inputCharacters[i];
      result[inputCharacters[i]] = 1

    }else{
      result[inputCharacters[i]] ++
    }
  }
  console.log(result)
  //return result
}
countLetters("lighthouse in the house")
// results wanted
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }