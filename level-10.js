function commonLetters(str1, str2) {
    let common = "";

    for(let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str2.length; j++) {
            if(str1.includes(str2[j])) {
                common += str2[j].toLowerCase();            
            }
        }
    }
    let oneLetter = [...new Set(common)];
    console.log(`Common Letters: ${oneLetter.join(", ")}`);
}
