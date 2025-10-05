const sum = (function() {
    let total = 0;
    return function(num) {
        total += num;
        return total;
    };
})();

const numInput = document.getElementById('numInput');
const addBtn = document.getElementById('addBtn');
const resultDiv = document.getElementById('result');

addBtn.onclick = function() {
    const num = Number(numInput.value);

    if (!isNaN(num) && num > 0 && Number.isInteger(num)) {
        const currentTotal = sum(num);
        resultDiv.textContent = `Result: ${currentTotal}`;
        numInput.value = '';
        numInput.focus();
    } else {
        alert("Please enter a valid positive integer");
        numInput.value = '';
        numInput.focus();
    }
};
