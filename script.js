const sum = (function() {
    let total = 0;
    return function(num, callback) {
        total += num;
        if (callback && typeof callback === 'function') callback(total);
        return total;
    };
})();

function showResult(result) {
    alert(`Result: ${result}`);
}

sum(4, showResult);
sum(6, showResult);
sum(10, showResult);
sum(7, showResult);
