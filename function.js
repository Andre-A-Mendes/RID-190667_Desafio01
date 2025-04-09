const handleSubmit = (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;

  fetch('https://api.sheetmonkey.io/form/sanff8bXPVahtsrYEKE4Kr', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ Name: name, Email: email })

};


document.querySelector("#formulario").addEventListener('submit', handleSubmit);
