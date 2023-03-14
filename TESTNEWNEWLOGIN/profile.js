const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const gender = localStorage.getItem('gender');
const dob = localStorage.getItem('dob');
const nationality = localStorage.getItem('nationality');
const address = localStorage.getItem('address');
const contact = localStorage.getItem('contact');
const bio = localStorage.getItem('bio');

const profileInfo = document.getElementById('profile-info');

profileInfo.innerHTML += `
<p><strong>Name:</strong> ${name}</p><br>
<p><strong>Email:</strong> ${email}</p><br>
<p><strong>Date of Birth:</strong> ${dob}</p><br>
  <p><strong>Nationality:</strong> ${nationality}</p><br>
  <p><strong>Address:</strong> ${address}</p><br>
  <p><strong>Contact No.:</strong> ${contact}</p><br>
  <p><strong>Bio:</strong> ${bio}</p>
`;

