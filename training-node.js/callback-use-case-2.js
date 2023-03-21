const exampleArray = [5,2,7,3,9,324,66,43]
function minVlaue(array,callback){
    let min = array[0]
    for(let i =1;i<array.length;i++){
        if(array[i]<min){
            min=array[i]
        }
    }
    return callback(min)
}
const minValueExample = minVlaue(exampleArray,function(result){
    return result * 2;
})
console.log(minValueExample)