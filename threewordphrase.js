(function () {
    var dictionary;

    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "dictionary.json", true);
    oReq.send();


    function reqListener(e) {
        dictionary = JSON.parse(this.responseText);
        words = Object.keys(dictionary);

        phrase = "";
        for (x = 0; x < 3; x++) {
            phrase = phrase + words[Math.floor(Math.random()*(words.length-1))] + " ";
        }

        document.getElementById("threewordphrase").innerHTML = phrase;
    }

}());
