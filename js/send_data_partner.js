const getUsers = async (company_name, phone, email, description) => {
  let text_result = "";
  try {
    let response = await fetch(
      `ajax.php?company_name=${company_name}&phone=${phone}&email=${email}&description=${description}`
    );
    if (response.ok) {
      text_result += `<p>Thank You! Your company information has been sent successfully.</p>`;
      text_result += `<p><a class="text-link" href="table.php?email=${email}">View the list of your requests</a></p>`;

      $("#company_name").addClass("input-field_error").val("");
      $("#phone").addClass("input-field_error").val("");
      $("#email").addClass("input-field_error").val("");
      $("#description").addClass("input-field_error").val("");
      $("#send-data-partner").attr("disabled", "disabled");
    }
  } catch (error) {
    console.log(error);
    text_result = `<p>Error! Information not added</p>`;
  }
  $(".box-input-wrapper").html(text_result);
};

document.querySelector(".send-data-partner").onsubmit = function (evt) {
  evt.preventDefault();
  const company_name = document.querySelector("#company_name").value;
  const phone = document.querySelector("#phone").value;
  const email = document.querySelector("#email").value;
  const description = document.querySelector("#description").value;
  getUsers(company_name, phone, email, description);
};
