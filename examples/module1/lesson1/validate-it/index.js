var numberInput = document.getElementById('number-input');
var validateButton = document.getElementById('validate-button');
var clearButton = document.getElementById('clear-button');
var resultView = document.getElementById('result-view');
var ResultValue = {
    VALID: 'Valid',
    INVALID: 'Invalid'
};
// functions
var validateNumber = function (number, conditions) {
    if (!resultView)
        return;
    for (var _i = 0, conditions_1 = conditions; _i < conditions_1.length; _i++) {
        var condition = conditions_1[_i];
        if (condition(number) === false) {
            resultView.innerHTML = ResultValue.INVALID;
            return;
        }
    }
    resultView.innerHTML = ResultValue.VALID;
};
var clearResult = function () {
    if (!numberInput || !resultView)
        return;
    numberInput.value = '';
    resultView.innerHTML = '';
};
// listeners
validateButton === null || validateButton === void 0 ? void 0 : validateButton.addEventListener('click', function () {
    var value = (numberInput && numberInput.value !== '') ? +numberInput.value : NaN;
    var conditions = [
        function (number) { return number >= 0; },
        function (number) { return number <= 100; },
        function (number) { return Number.isInteger(number); },
    ];
    validateNumber(value, conditions);
});
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener('click', function () {
    clearResult();
});
