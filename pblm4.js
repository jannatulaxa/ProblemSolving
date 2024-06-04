//4. Implement a function that takes two sorted 
//arrays and merges them into a single sorted array 
//without using any built-in sorting functions.
function mergeSortedArrayUsingConcat(arr1,arr2){
    let srtArr = [], arr1Index = 0, arr2Index= 0;
while(
    arr1Index<arr1.length && 
    arr2Index<arr2.length
){
    if(sortFunc(
        arr1[arr1Index],
        arr2[arr2Index]
    )>0
    ){
        srtArr.push(arr2[arr2Index++]);
    }else{
        srtArr.push( arr1[arr1Index++]);
    }
}
if(arr2Index<arr2.length){
    srtArr = srtArr.concat(
        arr2.slice(arr2Index)
    );
}else{
    srtArr = srtArr.concat(
        arr1.slice(arr1Index)
    );
}
return srtArr;
}

function sortFunc(a,b){
    return a-b;
}
console.log(
    mergeSortedArrayUsingConcat(
        [1,2,3,5,9],
        [4,6,7,8]
    )
);

