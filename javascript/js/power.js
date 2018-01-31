function pow(b,e){
    let x = 1;
    if (e == 1){
        return b;
    }

    while (e != 0){
        x = x * b;
        e--;
    }
    return x;
}

let a = pow(2,5);
console.log(a);