const map = (arr,anyFunction) => {

    for(i = 0; i < arr.length; i++)
        arr[i] = anyFunction(arr[i]);
    return arr;

}


module.exports = map;
