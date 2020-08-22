// validation script here
const inputs = document.querySelectorAll('input')
const pattern = {
  telephone: /^\d{11}$/g,
  username: /^[a-z\d]{5,12}$/gi,
  password: /^[\w@-]{8,20}$/gi,
  slug: /^[a-z\d-]{8,20}$/g,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g
}

/** Validate Regex */
const isValidRegex = (field, regex) => {
  return regex.test(field.value);
}


inputs.forEach(input => {
  input.addEventListener('keyup', (e) => {
    if (isValidRegex(e.target, pattern[e.target.attributes.name.value])) {
      e.target.className = "valid"
    } else {
      e.target.className = "invalid"
    }
  })
})

