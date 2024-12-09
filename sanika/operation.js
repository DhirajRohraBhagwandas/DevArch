export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return b-a;
}

export function multiply(a, b){
    return a * b;
}

export function divide(a,b){
    if(b==0){
        console.log("Error: Divide by 0");
    }
    return a/b;
}