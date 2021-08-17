function commonChar(str1, str2) {
    var common = "";

    for(i = 0; i < str1.length; i++) {
        if(str1.includes(str2[i])) {
            common += str2[i].toLowerCase();            
        }

    }
    var oneLetter = [...new Set(common)];
    console.log("Common Letters: " + oneLetter.join(", "));

}