const {ExpressError} = require('./error')

function checkAndReturn (arr) {
    try {
        out = [];
        let s = arr.split(',')
        if(!arr){
            throw new ExpressError('nums are required',400)
        }
        for (c of s){
            if (isNaN(c) && c !== ','){
                throw new ExpressError('Must be a number',400);
            }else {
                if(!isNaN(c)){
                    let int = parseInt(c) 
                    out.push(int)
                }
            }
        }
        return out;
    } catch (e) {
        return e
    }
}
function mean(arr) {
    let sum = 0
    console.log(arr)
    for(num of arr) {
        sum += num
        console.log(num)
    }
    return sum/arr.length
}

function mode(arr){
    const a = arr.sort(function(a, b) {
        return a - b;
    });
    console.log(a)
    let out = {}
    for(int of a) {
        if (out[int]){
            out[int] += 1
        }else {
            out[int] = 1
        }
    }
    console.log(out)
    k = Object.values(out)
    

    let high = 0
    

    for (int of k) {
        if (int > high) {
            high = int
        }
    }
    let end = []
    for (let key in out){
        let intKey = parseInt(key)
        
        if(parseInt(out[key]) === high){
           
            end.push(key)
            
        }
    }

    return end

    
}

function median(arr){
    const a = arr.sort(function(a, b) {
        return a - b;
    });
    if(a.length % 2 == 0) {
        x = a[a.length/2 + 1]
        y = a[a.length/2 - 1]
        console.log((x+y)/2)
        return (x+y)/2
    }
    return a[(a.length + 1)/2]
    
}


module.exports = {checkAndReturn,mean,mode,median}