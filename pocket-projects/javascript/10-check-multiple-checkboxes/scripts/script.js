const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let firstChecked;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function handleCheck(e) {
	let inBetween = false;

	if (e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if (checkbox === firstChecked || checkbox === this) {
				console.log('checked');
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}

	firstChecked = this;
}