var regex = /^[\s\n\t]+$/,//одни пробелы
    all_symbols = /^[A-zА-Яа-яЁё0-9-.,!@#$%^&*()№?+~_=;:}{«»\n\t\s]+$/,
    email_pattern = /^([a-z0-9]+@[a-z]+\.[a-z]+)$/;

//--------------------------------
/**-------------------------------------------------
 * проверка каждого элемента ввода из списка в массиве
 * @param input:array объект полей ввода, который содержит элементы:
 * @param button:string кнопка
 */
function ValidInput(input, button) {

    ValidArray(input, button);//проверка текущих значений полей для активизации кнопки

    for (var i = 0; i < input.length; i++) {
        ValidText(input[i]);//проверка каждого поля на допустимые символы
    }
    $(button).on('enable_btn', function () {//событие активизации кнопки
        ValidArray(input, button);//проверка изменённых значений полей для активизации кнопки
    });
}

/**-------------------------------------------------
 *
 * @param input:array объект полей ввода, который содержит элементы:
 * @param input.id: id
 * @param input.name:string
 * @param input.pattern:string шаблон проверки
 * @param input.min:int минимальное кол-во символов
 * @param input.max:int максимальное кол-во символов
 * @param input.required:bool обязательное поле
 * @param input.type:string
 * @param input.button:string
 * @param input.text:string
 */
function ValidText(input) {

    switch (input.type) {
        case 'input_text':
        case 'text_area':
            //если длина строки удовлетворяет условию у обязательного поля
            ValidInputField(input);
            // проверка на изменение поля ввода (также вставка с помощью мыши)
            $(input.id).on('input', function () {
                ValidInputField(input);
                $(input.button).trigger('enable_btn');
            });
            break;
    }
}


function ValidInputField(input) {
    //если поле пустое и обязательное
    if ($(input.id).val() == '' && input.required) {
        $(input.id).addClass("input-field_error");
    }
    //проверка на интервал длину строки, если задано max и min
    else if (!IsBetween($(input.id).val().length, input.min, input.max) && input.min != null && input.max != null) {
        $(input.id).addClass("input-field_error");
    }
    // проверка на символы
    else if (input.pattern != null && !input.pattern.test($(input.id).val()) && ($(input.id).val() != '' && !input.required || input.required)) {
        $(input.id).addClass("input-field_error");
    }
    //проверка на пробелы
    else if (regex.test($(input.id).val())) {
        $(input.id).addClass("input-field_error");
    }

    else {
        $(input.id).removeClass("input-field_error");
    }
}

/**-------------------------------------------------
 *
 * @param input_array:array объект полей ввода, который содержит элементы:
 * @param button:string кнопка
 */
function ValidArray(input_array, button) {
    var enable;
    for (var i = 0; i < input_array.length; i++) {
        var input = input_array[i];
        //проверка input text
        if (input.type == 'input_text' || input.type == 'text_area') {
            enable = (input.pattern.test($(input.id).val())
                && (IsBetween($(input.id).val().length, input.min, input.max) || input.min == null && input.max == null)
                && !regex.test($(input.id).val())
                && ($(input.id).val() != '' && !input.required || input.required) || $(input.id).val() == '' && !input.required
            );
        }
        if (!enable) { break; }
    }

    if (enable) {
        $(button).removeAttr('disabled');
    } else {
        $(button).attr('disabled', 'disabled');
    }
}


function IsBetween(n, a, b) {
    return (n - a) * (n - b) <= 0;
}





