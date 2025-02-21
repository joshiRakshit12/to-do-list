const button = document.getElementById('button');
const inputfiled = document.getElementById('input-type');
const list = document.getElementById('list');

button.addEventListener('click', function (e) {
	if (inputfiled !== '') {
		e.preventDefault();
		const li = document.createElement('li');
		li.style.marginBottom = '20px';
		li.style.listStyle = 'none';
		li.textContent = inputfiled.value;

		// Delete

		const deletebtn = document.createElement('button');
		deletebtn.textContent = 'remove';

		// deletebtn.classList.add('delete-btn');
		deletebtn.addEventListener('click', function () {
			li.remove();
		});

		li.appendChild(deletebtn);
		li.addEventListener('click', function () {
			li.classList.toggle('completed');
		});
		list.appendChild(li);

		inputfiled.value = '';
	} else {
		alert('plesse eneter a task');
	}
});
