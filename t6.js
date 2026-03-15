arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
function fun(arr){
    myObj = {}
    for (let i=0;i<arr.length;i++){
        myObj[arr[0]]=arr[arr.length-1]
    }
    return myObj
}
console.log(fun(arr))