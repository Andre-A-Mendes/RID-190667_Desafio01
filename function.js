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
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    alert("Formulário enviado com sucesso!");
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Formulario enviado com Sucesso.");
  });
};


document.querySelector("#formulario").addEventListener('submit', handleSubmit);
