let all_symbols = /.*\S+./,
  email_pattern = /^([a-z0-9._-]+@[a-z0-9-]+\.[a-z]+)$/;

//--------------------------------
/**-------------------------------------------------
 * проверка каждого элемента ввода из списка в массиве
 * @param input:array объект полей ввода, который содержит элементы:
 */
function ValidInput(input) {
  for (let i = 0; i < input.length; i++) {
    ValidText(input[i]); //проверка каждого поля на допустимые символы
  }
}

/**-------------------------------------------------
 *
 * @param input:array объект полей ввода, который содержит элементы:
 * @param input.id: id
 * @param input.name:string
 * @param input.pattern:string шаблон проверки
 */
function ValidText(input) {
  // проверка на изменение поля ввода (также вставка с помощью мыши)
  $(input.id).on("input", function () {
    if (input.pattern.test($(input.id).val())) {
      $(input.id).removeClass("input-field_error");
      console.log(1);
    } else {
      $(input.id).addClass("input-field_error");
      console.log(2);
    }
  });
}
