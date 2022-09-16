// formulario
const elementForm = document.querySelector('#form-result');

//Input
const elementInput = document.querySelector('#number');

const elementResult = document.querySelector('#result-content');

//Array donde se almacenan los nombres
let studentsNumber = [];

elementForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const inputNumber = elementInput.value;
	studentsNumber = [];

	elementResult.innerHTML = '';
	let n = 1;

	if (!inputNumber) {
		return swal({
			text: 'Escribe al menos un número',
			icon: 'error',
			button: 'Cerrar',
			dangerMode: true,
		});
	}

	for (let i = 1; i <= inputNumber; i++) {
		let nameStudent = prompt(`Alumno numero ${i}`, 'Falta nombre.');

		studentsNumber.push(nameStudent);
	}
	studentsNumber.forEach((student) => {
		elementResult.innerHTML += `<span>Alumno N° ${n++}: ${student}</span>`;
	});

	elementInput.value = '';
});
