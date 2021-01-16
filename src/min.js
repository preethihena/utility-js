const min = (arr) => {
    var length = arr.length;
    if(length == 0)
        return undefined;
    var minElement = arr[0];
    for(i = 1; i < arr.length; i++)
        if(minElement > arr[i])
            minElement = arr[i];
    return minElement;
}
module.exports = min;
