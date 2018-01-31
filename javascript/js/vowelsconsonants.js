function main () {
    let s = prompt("Enter string");
    vowelsAndConsonants(s);
}

function vowelsAndConsonants(s) {
    var prefix, suffix;
    prefix = suffix = '';
    
    for (let x of s){
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
            prefix += x + '\n';
        else
            suffix += x + '\n';
    }
    console.log(prefix+suffix);
}

main();
