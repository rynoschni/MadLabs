const myButton = document.getElementById('clickMe');
const noun1 = document.getElementById('noun1');
const noun1Input = document.getElementById('noun1Input');
const noun2 = document.getElementById('noun2');
const noun2Input = document.getElementById('noun2Input');
const verb1 = document.getElementById('verb1');
const verb1Input = document.getElementById('verb1Input');





myButton.addEventListener('click', function (event) {
  event.preventDefault();

  noun1.innerHTML = noun1Input.value;
  noun1.classList.add("filled")
  verb1.innerHTML = verb1Input.value;
  verb1.classList.add("filled")
  noun2.innerHTML = noun2Input.value;
  noun2.classList.add("filled")
});