const tail = (arr) => {
    var length =  arr.length;
    if(length >= 1)
        arr.shift();
    return arr;

}
module.exports = tail;
