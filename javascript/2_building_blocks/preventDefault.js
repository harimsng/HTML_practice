const submit = document.querySelector("#submit");
const firstName = document.querySelector("#field1");
const lastName = document.querySelector("#field2");
//const para = document.createElement("p");
const para = document.querySelector("p");

//document.head.appendChild(para);
submit.addEventListener("click", handleRequest);

function handleRequest(evt) {
	if (firstName.value === "" || lastName.value === "") {
		evt.preventDefault();

		para.textContent = "invalid input";
		return;
	}
	para.textContent = "request accepted";
}
