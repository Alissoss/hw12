/*Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри - стартове значення лічильника і його крок.
 Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення.
  Лічильник повинен мати методи increment, decrement і reset, які збільшують або зменшують значення на step і скидають
   значення до стартового, відповідно.
*/
function counter(startValue, step) {
    let currentValue = startValue;

    function count() {
        return (currentValue += step);
    }

    count.increment = function() {
        return count();
    };

    count.decrement = function() {
        currentValue -= step;
        return currentValue;
    };

    function reset() {
        currentValue = startValue;
        return currentValue;
    }

    count.reset = function() {
        return reset();
    };

    return count;
}

const myCounter = counter(10, 2);
console.log(myCounter());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());