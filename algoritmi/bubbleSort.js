function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j + 1] < arr[j]){
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
            console.log(arr);
        }
    };
    return arr;
};

arr = [1,5,4,66,-2,443];

console.log(bubbleSort(arr));