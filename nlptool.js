function getInputValue(){
    
    var inputVal = document.getElementById("myInput").value;
    let tokenizer = inputVal.split(/\W+/);
    var wordCount = inputVal.match(/(\w+)/g).length;
    
    document.getElementById('nlptool').innerHTML = "Tokens: "+tokenizer+" | Number of tokens: "+wordCount;
}