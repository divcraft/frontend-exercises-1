const numberInput = document.getElementById('number-input') as HTMLInputElement | null;
const validateButton = document.getElementById('validate-button');
const clearButton = document.getElementById('clear-button');
const resultView = document.getElementById('result-view');

type ConditionType = (number: number) => boolean;
const ResultValue = {
    VALID: 'Valid',
    INVALID: 'Invalid'
};

// functions

const validateNumber = (number: number, conditions: Array<ConditionType>): void => {
    if (!resultView) return;

    for (const condition of conditions) {
        if (condition(number) === false) {
            resultView.innerHTML = ResultValue.INVALID;
            return;
        }
    }

    resultView.innerHTML = ResultValue.VALID;
}

const clearResult = (): void => {
    if (!numberInput || !resultView) return;
    numberInput.value = '';
    resultView.innerHTML = '';
}

// listeners

validateButton?.addEventListener('click', () => {
  let value: number = (numberInput && numberInput.value !== '') ? +numberInput.value : NaN;
  const conditions: Array<ConditionType> = [
      (number) => number >= 0,
      (number) => number <= 100,
      (number) => Number.isInteger(number),
  ]

  validateNumber(value, conditions);
});

clearButton?.addEventListener('click', () => {
  clearResult();
});
