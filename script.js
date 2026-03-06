const button = document.getElementById('button1');

button.addEventListener('click', (e) => {
    e.preventDefault();
    
  alert('Sign-in complete!');

  document.getElementById('pizza-sec').style.display = "block";
});
