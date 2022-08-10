const form = document.querySelector("form");

form.addEventListener("submit", handleSumbit);

function handleSumbit(event) {
  event.preventDefault();

  let name = form.elements.name.value;
  let email = form.elements.email.value;
  let message = form.elements.message.value;

  if (!name && !email && !message) {
    console.warn("Submit with no data");
  } else {
    let emtpyInput = "no data entered";

    console.log("========== Message ==========");
    console.log(`Name: ${name ? name : emtpyInput}`);
    console.log(`Email: ${email ? email : emtpyInput}`);
    console.log(`Message: ${message ? message : emptyInput}`);
  }

  form.elements.name.value = "";
  form.elements.email.value = "";
  form.elements.message.value = "";
}
