var parser = "InputString=%3Cstring%3E";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
     if(this.readyState === 4) {
          console.log(this.responseText);
     }
});

xhr.open("POST", "https://api.cloudmersive.com/nlp-v2/parse/tree");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Apikey", "18e12f46-790a-498d-8bc1-12f71866f149");

xhr.send(parser);



