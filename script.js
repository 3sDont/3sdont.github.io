const wave = document.querySelector('.wave');
for (let i = 0; i < 48; i++) {
  const bar = document.createElement('i');
  bar.style.height = `${10 + Math.abs(Math.sin(i * .63) * Math.cos(i * .21)) * 62}px`;
  wave.appendChild(bar);
}
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('tranbadong9471@gmail.com');
    status.textContent = 'Email copied!';
  } catch {
    status.textContent = 'Please select and copy the email address above.';
  }
});
