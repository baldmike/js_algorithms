function pal(word) {
    j = word.length-1;
    isPal = false;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == word[j]) {
            isPal = true;
            j--
        } else {
            isPal = false;
            console.log(isPal + "! This ain't no PALINDROME.");
            return isPal
        }
    }
    console.log(isPal + "! This is, by all means, god dammit, a fricken PALINDROME.");
    return isPal
}

pal("kissing777gnissi")

