const reduceInner = (arr, anyFunction, startValue, startIndex) => {

    var result = startValue;
    for(i = startIndex; i < arr.length; i++)
        result = anyFunction(result,arr[i]);
    return result;

}

const reduce = (arr,anyFunction,initialValue) => {

   if(initialValue != undefined)
        return reduceInner(arr, anyFunction, initialValue, 0);
   else if(arr.length != 0)
        return reduceInner(arr, anyFunction, arr[0], 1);
   return undefined;


}


module.exports = reduce;
