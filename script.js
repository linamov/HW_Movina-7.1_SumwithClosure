const sum = (function() {
    let total = 0;
    return function(num) {
        total += num;
        return total;
    };
})();

function askNumber() {
    const input = prompt("Enter a positive integer (Cancel to finish):");

    if (input === null) {
        alert(`Final total: ${sum(0)}`);
        return;
    }

    const num = Number(input);

    if (!isNaN(num) && num > 0 && Number.isInteger(num)) {
        alert(`Current total: ${sum(num)}`);
        askNumber();
    } else {
        alert("Please enter a valid positive integer");
        askNumber();
    }
}

function startSum() {
    askNumber();
}
