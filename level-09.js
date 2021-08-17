function vowelOutput(str) {
    var vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var vowels = "";

    for(i = 0; i < str.length; i++) {
        if(vowelArray.includes(str[i])) {
            vowels += str[i].toLowerCase();            
        }
    }
    var oneLetter = [...new Set(vowels)];
    console.log("Vowels: " + oneLetter.join(", "));
}
