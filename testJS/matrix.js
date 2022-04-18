
function transpose(matrix) {
    arr=[];
   for(var i=0; i<matrix[0].length; i++) {
       for(var j=0; j<matrix.length; j++) {
        arr.push(matrix[j][i]);
       }
       console.log(arr);
       arr=[]
   }
    }

transpose([[1,2,3],[4,5,6]])
transpose([[1,2,3,4],[4,5,6,7],[6,7,8,9]])