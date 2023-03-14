const form = document.querySelector('form');
const titleInput = document.getElementById('title');
const dateInput = document.getElementById('date');
const contentInput = document.getElementById('content');
const submitBtn = document.getElementById('submit-btn');
const entriesContainer = document.getElementById('entries-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const date = new Date(dateInput.value);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const content = contentInput.value;

  if (!title || !date || !content) {
    alert('Please fill in all fields');
    return;
  }

  const entry = `
    <div class="entry">
      <h3>${title}</h3>
      <p>${formattedDate}</p>
      <p>${content}</p>
    </div>
  `;

  entriesContainer.insertAdjacentHTML('afterbegin', entry);
  titleInput.value = '';
  dateInput.value = '';
  contentInput.value = '';
});
