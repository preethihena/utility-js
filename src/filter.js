const filter = (arr,anyFunction) => {

    var list = []
    for(i = 0; i < arr.length; i++)
        if(anyFunction(arr[i]))
            list.push(arr[i]);

    return list;

}


module.exports = filter;
