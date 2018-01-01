function isPal(str){    
    x = str.length-1;
    for (var i = 0; i < str.length-1; i++){
        if (str[x] != str[i]){
            console.log(str + " is NOT a palindrome.");
            return false;
        } x--;
    }   
    console.log("Congratulations! " + str + " is a palindrome!")
    return true;  
};





isPal ("ottox");


