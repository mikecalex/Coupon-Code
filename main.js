let click = document.getElementById('click-here');

click.addEventListener('click', () => {
  let section = document.getElementById('coupon-code');
  let code = '50OFF-YOWZA!';
  section.innerHTML = code;
});
