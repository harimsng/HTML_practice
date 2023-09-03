const btn = document.querySelector("button");
const container = document.querySelector(".hidden");
const video = document.querySelector("video");

let toggle = 0;

btn.addEventListener("click", () => container.classList.remove("hidden"));
video.addEventListener("click", (event) => {
	event.stopPropagation();
	if (toggle === 0) {
		video.play()
	} else {
		video.pause();
	}
	toggle ^= 1;
});
container.addEventListener("click", () => {
	video.pause();
	toggle = 0;
	container.classList.add("hidden")
});
