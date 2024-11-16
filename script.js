function firstWord(str) {
    
    let spl = str.trim().split(" ");
    

    return spl[0];
}

const s = prompt("Enter String:");
alert(firstWord(s));

