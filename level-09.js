function vowelOutput(str) {
    let vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowels = "";

    for(i = 0; i < str.length; i++) {
        if(vowelArray.includes(str[i])) {
            vowels += str[i].toLowerCase();            
        }
    }
    let oneLetter = [...new Set(vowels)];
    console.log(`Vowels: ${oneLetter.join(", ")}`);
}