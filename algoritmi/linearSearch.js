// arr= ["a" , "b" , "c" , "d"]
// const linearSearch = (list, item) => {
//     for(const [index, element] of list.entries()) {
//         if(element === item) {
//                 return `Item ${item} is on index ${index}`
//         }
//     }
// }
// console.log(linearSearch(arr, "d"));



if (mainPrefix !== 'zs' && testPrefix !== 'ztest') {
  const version = words[0]
  if (version !== 0) {
    console.log('Unsupported version')
    return false
  }
}

if (mainPrefix === 'zs' && testPrefix === 'ztest') {
  const data = encode(words)
  if (data.length !== 43) {	
    console.log(`Invalid length: ${data.length}`)	
    return false	
  }
}
else {
  const data = encode(words.splice(1))
  if (data.length !== 20 && data.length !== 32) {	
    console.log(`Invalid length: ${data.length}`)	
    return false	
  }
}