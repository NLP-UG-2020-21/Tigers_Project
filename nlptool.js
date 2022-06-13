function getInputValue(){

    var inputVal = document.getElementById("myInput").value;
    let tokenizer = inputVal.split(/\W+/);
    var wordCount = inputVal.match(/(\w+)/g).length;

    document.getElementById('result').innerHTML = "Number of tokens: "+wordCount+" <br><br> Tokens:<br><br>"+tokenizer.join('<br>');
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

const parser = async () => {
  let txt = document.getElementById('myInput').value;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Apikey': '18e12f46-790a-498d-8bc1-12f71866f149'
    },
    body: JSON.stringify({ InputString: txt })
  };

  fetch('https://api.cloudmersive.com/nlp-v2/parse/tree', requestOptions)
    .then(response => response.json())
    .then(response => response["ParseTree"])
    .then(response => response.replaceAll("\n", "<br>"))
    .then(response => document.getElementById('result').innerHTML = response);
}

const parse_pos_output = (arr) => {
  output = "<div><div class='left'>ITEM</div><div class='right'>POS TAG</div>";
  arr.forEach(sentence => {
    sentence["Words"].forEach(item => {
      output += `<div class="left">${item.Word}</div><div class="right">${item.Tag}</div>`;
    })
  });
  output += "</div>";
  return output;
}

const postag = () => {
  let txt = document.getElementById('myInput').value;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Apikey': '18e12f46-790a-498d-8bc1-12f71866f149'
    },
    body: JSON.stringify({ InputText: txt })
  };

  fetch('https://api.cloudmersive.com/nlp-v2/pos/tag/sentence', requestOptions)
    .then(response => response.json())
    .then(response => response["TaggedSentences"])
    .then(response => parse_pos_output(response))
    .then(response => document.getElementById('result').innerHTML = response);

}

document.querySelector('#btn').addEventListener('click', () => {

    var valueSelect = document.querySelector('#selection').value;
    if (valueSelect === 'tokenizer') {
      getInputValue();
    } else if (valueSelect === 'stemmer') {
      stem();
    } else if (valueSelect === 'parser') {
      parser();
    } else if (valueSelect === 'postag') {
      postag();
    }
  });
