const $form = document.getElementById('form-email')
const $input = document.getElementById('email-address')
const $error = document.getElementById('error')

$form.addEventListener('submit', function(e){
  let styles = getComputedStyle(document.documentElement);
  let colorOriginal = styles.getPropertyValue('--paleBlue');
  let colorRed = styles.getPropertyValue('--lightRed');
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const value = $input.value;
  
  if(re.test(value)) {
    $input.style.borderColor = colorOriginal;
    $error.style.display = 'none';
    alert('Thank :)')
    $input.value = ''
  }
  else {
    $input.style.borderColor = colorRed;
    $error.style.display = 'block';
  }
  e.preventDefault();
})