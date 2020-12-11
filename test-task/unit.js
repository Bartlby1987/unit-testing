const isNumber=(a,b)=> {
    let typeA=typeof a;
    let typeB=typeof b;
    if(typeA==="number"&&typeB==="number"){
        return "Number"
    }
};

const asyncFunction=async(a,b)=>a/b;

module.exports={isNumber,asyncFunction};

