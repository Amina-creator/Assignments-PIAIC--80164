// Assignment 4 > 7

var name = "The quick brown fox jumps over the lazy dog",
    lowercase = name.toLowerCase();
    split = lowercase.split(" "),
    console.log(split);
    j = 1;

for(i=0; i<split.length; i++){
    if(split[i] === "the"){
        console.log("There are "+ j++ + " occurence(s) of word the")
    }
}
