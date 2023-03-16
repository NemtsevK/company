$(document).ready(function () {
  let email_pattern = /^([a-z0-9]+@[a-z]+\.[a-z]+)$/;
  let company_name = $(".box-input__input-field[name=company_name]");
  let phone = $(".box-input__input-field[name=phone]");
  let email = $(".box-input__input-field[name=email]");
  let description = $(".box-input__text-area[name=description]");
  let email_for_news = $(".subscribe__input-field[name=email_for_news]");

  ValidTextField(company_name);
  ValidTextField(phone);
  ValidTextField(email, email_pattern);
  ValidTextField(description);
  ValidTextField(email_for_news, email_pattern);
});

function ValidTextField(text_field, pattern) {
  let regex = /^[\s\n\t]+$/;
  if (pattern === undefined) {
    pattern = null;
  }
  // CheckingValue(text_field);
  text_field.on("input", function () {
    if ($(this).val() == "" || regex.test($(this).val())) {
      $(this).addClass("input-field_error");
    } else if (
      (pattern != null && pattern.test($(this).val())) ||
      pattern == null
    ) {
      $(this).removeClass("input-field_error");
    } else {
      $(this).addClass("input-field_error");
    }
  });
}
