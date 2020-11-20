const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        console.log(this.responseText);
        var Predict = JSON.parse(this.responseText);
        console.log(Predict.api.predictions[0].match_winner);
        console.log(Predict.api.predictions[0].advice);

        document.getElementById("win").innerHTML = "ชนะมาแล้ว "+ Predict.api.predictions[0].match_winner +" ครั้ง";
        document.getElementById("team").innerHTML = Predict.api.predictions[0].advice;
	}
});

xhr.open("GET", "https://api-football-v1.p.rapidapi.com/v2/predictions/157462",true);
xhr.setRequestHeader("x-rapidapi-key", "e65e6d3ee4msh395ed7d245d01f9p1e2a0ejsn7f193f1f07fe");
xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");
xhr.send();
