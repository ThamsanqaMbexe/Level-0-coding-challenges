function commonChar(str1, str2) {
    var common = "";

    for(i = 0; i < str1.length; i++) {
        for(j = 0; j < str2.length; j++) {
            if(str1.includes(str2[j])) {
                common += str2[j].toLowerCase();            
            }
        }
    }
    var oneLetter = [...new Set(common)];
    console.log("Common Letters: " + oneLetter.join(", "));
}
