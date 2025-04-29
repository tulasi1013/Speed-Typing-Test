let para = document.getElementById("quoteDisplay");
let timerEl = document.getElementById("time");
let spinnerEl = document.getElementById("spinner");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let input = document.getElementById("quoteInput");
let result = document.getElementById("result");
let value;
spinnerEl.classList.remove("d-none");
let running = setInterval(function() {
    value = timerEl.textContent;
    value = parseInt(value) + 1;
    timerEl.textContent = value;
    if (value === 60) {
        clearInterval(running);
    }
}, 1000)
let options = {
    method: "GET"
};
let url = "https://apis.ccbp.in/random-quote";
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let {
            content
        } = jsonData;
        spinnerEl.classList.add("d-none");
        para.textContent = content;
    });

submitBtn.addEventListener("click", function() {
    console.log(para.textContent);
    console.log(input.value);
    if (para.textContent === input.value) {
        clearInterval(running);
        result.textContent = "You typed in " + value + " seconds";
    } else {
        result.textContent = "You typed incorrect sentence";
    }
});