arr= ["a" , "b" , "c" , "d"]
const linearSearch = (list, item) => {
    for(const [index, element] of list.entries()) {
        if(element === item) {
                return `Item ${item} is on index ${index}`
        }
    }
}
console.log(linearSearch(arr, "d"));