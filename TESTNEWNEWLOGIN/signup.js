const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(signupForm);

  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const gender = formData.get('gender');
  const dob = formData.get('dob');
  const nationality = formData.get('nationality');
  const address = formData.get('address');
  const contact = formData.get('contact');
  const bio = formData.get('bio');

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem('gender', gender);
  localStorage.setItem('dob', dob);
  localStorage.setItem('nationality', nationality);
  localStorage.setItem('address', address);
  localStorage.setItem('contact', contact);
  localStorage.setItem('bio', bio);

  window.location.href = 'profile.html';
});
