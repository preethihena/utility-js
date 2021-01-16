const max = (arr) => {
    var length = arr.length;
    if(length == 0)
        return undefined;
    var maxElement = arr[0];
    for(i = 1; i < arr.length; i++)
        if(maxElement < arr[i])
            maxElement = arr[i];
    return maxElement;
}
module.exports = max;
