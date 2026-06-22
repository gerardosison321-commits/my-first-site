document.getElementById('myButton').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value;

  fetch('/api/hello?name=' + name)
    .then(response => response.json())
    .then(data => {
      document.getElementById('message').textContent = data.message;
    });
});