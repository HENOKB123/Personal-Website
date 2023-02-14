// Search Bar Functionality
const searchBar = document.querySelector("header input");

searchBar.addEventListener("keyup", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const sections = document.querySelectorAll("main section");

  sections.forEach((section) => {
    const header = section.querySelector("h2").textContent.toLowerCase();
    if (header.includes(searchTerm)) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
});

section form button[type="submit"].addEventListener("click", function() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;

  let formData = {
    name: name,
    email: email,
    message: message
  };

  fetch('/send-message', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let successElement = document.querySelector("#success");
    successElement.innerHTML = "Message sent successfully!";
    successElement.style.display = "block";
  });
});

// Add functionality to the submit button
const submitButton = document.querySelector("button[type='submit']");

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent the default form submission behavior
  console.log("Form submitted!");
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  // Get the values of the form fields
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});

