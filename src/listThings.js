var listThings=(str, arr, c)=> {
    let newstr = '';
    if (!c) {
        for (let i in arr) {
            newstr = newstr + '<' + str + '>' + (+i + 1) + '.' + arr[i] + '</' + str + '>';

        }
    } else {
        for (let i in arr) {
            newstr = newstr + '<' + str + '>' + c + '.' + arr[i] + '</' + str + '>';
        }
    }
    return newstr;
}

export default listThings;