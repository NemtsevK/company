$(document).ready(function () {
  var button = "#send-data-partner",
    company_name = {
      id: "#company_name",
      pattern: all_symbols,
      min: 1,
      max: 100,
      button: button,
      required: true,
      type: "input_text",
    },
    phone = {
      id: "#phone",
      button: button,
      pattern: all_symbols,
      min: 1,
      max: 30,
      required: true,
      type: "input_text",
    },
    email = {
      id: "#email",
      pattern: email_pattern,
      min: 1,
      max: 100,
      button: button,
      required: true,
      type: "input_text",
    },
    description = {
      id: "#description",
      pattern: all_symbols,
      min: 1,
      max: 200,
      button: button,
      required: true,
      type: "text_area",
    },
    input = [company_name, phone, email, description];
  ValidInput(input, button);
});
