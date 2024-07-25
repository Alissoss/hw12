/*Вам необхідно написати функцію sequence(fn, fn), яка приймає на вхід дві або більше функції і повертає нову функцію,
 яка викликає їх послідовно з результатом попереднього виклику. Результат останньої функції має бути повернутий новою функцією.
  Кожна функція повинна мати доступ до результату попередньої функції через замикання.
*/
function sequence(...funcs) {
    if (funcs.length < 2) {
      throw new Error('Додайте мінімум 2 функції');
    }
    return function(initialValue) {
      return funcs.reduce((accumulator, currentFunc) => currentFunc(accumulator), initialValue);
    };
  }

  function multiply3(x) {
    return x * 3;
  }

  function addPI(x) {
    return x + Math.PI;
  }
  
  function subtract4(x) {
    return x - 4;
  }

 
  const seq = sequence(multiply3, addPI, subtract4); 
  console.log(seq(5));