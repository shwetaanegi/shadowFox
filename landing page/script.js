const dialog = document.querySelector('#appointment-dialog');
document.querySelectorAll('.appointment').forEach(button => button.addEventListener('click', () => dialog.showModal()));
document.querySelectorAll('.close, .close-button').forEach(button => button.addEventListener('click', () => dialog.close()));
document.querySelector('.menu').addEventListener('click', event => {
  const nav = document.querySelector('.nav');
  const expanded = nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', expanded);
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => document.querySelector('.nav').classList.remove('open')));
const quotes = [...document.querySelectorAll('.quote')]; let currentQuote = 0;
function moveQuote(direction) { quotes[currentQuote].classList.remove('active'); currentQuote = (currentQuote + direction + quotes.length) % quotes.length; quotes[currentQuote].classList.add('active'); }
document.querySelector('.prev').addEventListener('click', () => moveQuote(-1));
document.querySelector('.next').addEventListener('click', () => moveQuote(1));
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault(); const form = event.currentTarget; const status = form.querySelector('.form-status');
  if (!form.checkValidity()) { status.textContent = 'Please complete your name, a valid email, and phone number.'; form.reportValidity(); return; }
  status.style.color = '#38715e'; status.textContent = 'Thank you - your message is ready to be sent to our team.'; form.reset();
});
