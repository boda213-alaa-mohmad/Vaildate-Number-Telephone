let userInput = document.getElementById('user-input');
let check = document.getElementById('check-btn');
let clear = document.getElementById('clear-btn');
let pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/
let parentResult = document.querySelector('#results-div')
let results;


check.addEventListener('click', (e) => {
    e.preventDefault();
    if (userInput.value === "")
    {
        alert('Please provide a phone number');
        return;
    }

    results = document.createElement('div');
    results.style.cssText = `
        font-size: 2em;
        padding: 10px;
        `;
    if (pattern.test(userInput.value)) {
        results.textContent = `Valid US number: ${userInput.value}`;
        results.style.color = 'brown';
    } else {
        results.textContent = `Invalid US number: ${userInput.value}`;
        results.style.color = 'green'; 
    }
    parentResult.appendChild(results);
    userInput.value = "";
    e.preventDefault();      
});


clear.addEventListener('click', function(e) {
    parentResult.innerHTML = "";
    userInput.value = "";
    e.preventDefault();
})