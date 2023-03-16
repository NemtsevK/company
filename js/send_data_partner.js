// функция для получения данных с сервера и вывода их на страницу
const getUsers = async (company_name, phone, email, description) => {
  let html = "";
  try {
    // использование метода fetch() для отправки асинхронного запроса на сервер
    let response = await fetch(
      `ajax.php?company_name=${company_name}&phone=${phone}&email=${email}&description=${description}`
    );
    if (response.ok) {
      // получаем ответ в формате JSON и сохраняем его в data
      let data = await response.json();
      // выполняем рендеринг полученных данных в элемент #result
      const text = data["data"];
      html += `<p>Data has been sent successfully</p>`;
      html += `<p><a href="table.php">View the list of partners</a></p>`;

      document.querySelector("#company_name").value = "";
      document.querySelector("#phone").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#description").value = "";
    }
  } catch (error) {
    console.log(error);
    html = `<p>Error</p>`;
  }
  document.querySelector("#result").innerHTML = html;
};
// при клике на #get-user
document.querySelector("#send-data-partner").onclick = () => {
  const company_name = document.querySelector("#company_name").value;
  const phone = document.querySelector("#phone").value;
  const email = document.querySelector("#email").value;
  const description = document.querySelector("#description").value;
  // вызовем функцию getUser и передадим ей id пользователя который нужно получить
  getUsers(company_name, phone, email, description);
};
