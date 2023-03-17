// select button
// when button is clicked, add show-modal to class
// select modal buttons
// when modal button are click, add display to response
// add text to span

// display modal
const clickMe = document.querySelector(".click-me");
const modal = document.querySelector(".modal-overlay");

clickMe.addEventListener("click", () => {
	modal.classList.add("show-modal");
});

// find out response and display it
const modalButtons = document.querySelectorAll(".btn");
const displayAnswer = document.querySelector(".response");
const answer = document.querySelector(".answer");

const removeModal = () => {
	modal.classList.remove("show-modal");
	displayAnswer.classList.add("display-response");
};

modalButtons.forEach((btn) => {
	//console.log(btn);
	//console.log(btn.classList);

	btn.addEventListener("click", () => {
		if (btn.classList.contains("btn-yes")) {
			//modal.classList.remove("show-modal");
			answer.textContent = `"yes"`;
			//displayAnswer.classList.add("display-response");
			removeModal();
		} else {
			answer.textContent = `"cancel"`;
			removeModal();
		}
	});
});
