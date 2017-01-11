function countLetters(str){
  var result = {
  }
  var noSpaces = str.split(' ').join('').toLowerCase();
  noSpaces = noSpaces.split('')
  //console.log(noSpaces)

  for(var i = 0; i < noSpaces.length; i++ ){
    //console.log(noSpaces[i])
    if(!result.hasOwnProperty(noSpaces[i])) {
      //result[noSpaces[i]] = noSpaces[i];
      result[noSpaces[i]] = 1

    }else{
      result[noSpaces[i]] ++
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