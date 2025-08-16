  // Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Add new <h1> below from input text
document.getElementById('addH1').addEventListener('click', () => {
  const txt = document.getElementById('headingInput').value.trim();
  if (!txt) return alert('Please enter a heading text');
  const h = document.createElement('h1');
  h.textContent = txt;
  h.style.fontSize = '20px';
  h.style.margin = '8px 0';
  document.getElementById('demoContainer').appendChild(h);
  document.getElementById('headingInput').value = '';
});

// Fake contact form submit with a thank you message
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Thanks! (demo only — not really sent)';
  setTimeout(() => (status.textContent = ''), 4000);
  e.target.reset();
});

// Replace displayed name if ?name= is in URL
(function applyNameFromURL() {
  try {
    const params = new URLSearchParams(window.location.search);
    const n = params.get('name');
    if (n) document.getElementById('namePlace').textContent = n;
  } catch (err) {}
})();
