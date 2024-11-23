// Function to clear the input screen
function ac() {
    document.getElementById("res").value = "";
}

// Function to append input to the screen
function show(input) {
    document.getElementById("res").value += input;
}

// Function to evaluate the expression and show the result
function cal() {
    try {
        var output = eval(document.getElementById("res").value);
        document.getElementById("res").value = output;
        
        // Store calculation in history
        addToHistory(document.getElementById("res").value);
    } catch (e) {
        document.getElementById("res").value = "Error";
    }
}

// Function to add the calculation result to the history
function addToHistory(result) {
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);
    
    // Optional: Remove history after clicking on it
    listItem.addEventListener('click', function() {
        document.getElementById("res").value = result;
    });
}

