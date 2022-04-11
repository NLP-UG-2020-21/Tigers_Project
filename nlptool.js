function getInputValue(){

    var inputVal = document.getElementById("myInput").value;
    let tokenizer = inputVal.split(/\W+/);
    var wordCount = inputVal.match(/(\w+)/g).length;
    
    document.getElementById('result').innerHTML = "Number of tokens: "+wordCount+" <br><br> Tokens:<br><br>"+tokenizer.join(' ');
}


function stem(){
    var     wordlist,
        ix,
        word,
        stem,
        result = [],
        test = document.getElementById('myInput').value;

    // dump non-words
    test = test.replace(/[^\w]/g, ' ');

    // dump multiple white-space
    test = test.replace(/\s+/g, ' ');

    // split
    wordlist = test.split(' ');

    for(ix in wordlist) {
        stem = stemmer(wordlist[ix]);
        result.push(stem);
    }
    document.getElementById('result').innerHTML = result.join(' ');
}


document.querySelector('#btn').addEventListener('click', () => {
  
    var valueSelect = document.querySelector('#selection').value;
    if (valueSelect === 'tokenizer') {
      getInputValue();
    } else if (valueSelect === 'stemmer') {
      stem();
    }
  
  });