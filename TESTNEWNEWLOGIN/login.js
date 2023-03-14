const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);

  const email = formData.get('email');
  const password = formData.get('password');

  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  if (email === storedEmail && password === storedPassword) {
    window.location.href = 'profile.html';
  } else {
    alert('Incorrect email or password');
  }
});
