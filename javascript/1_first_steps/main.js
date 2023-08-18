const customName = document.querySelector("#customname");
const button = document.querySelector(".randomize");
const para = document.querySelector(".story");
const unit = document.getElementById("us");

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = "Willy the Goblin\nBig Daddy\nFather Christmas";
const insertY = "the soup kitchen\nDisneyland\nthe White House";
const insertZ = "spontaneously combusted\nmelted into a puddle on the sidewalk\nturned into a slug and crawled away";

button.addEventListener("click", generateStory);

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function generateStory() {
	const itemX = randomValueFromArray(insertX.split("\n"));
	const itemY = randomValueFromArray(insertY.split("\n"));
	const itemZ = randomValueFromArray(insertZ.split("\n"));

	let newStory = storyText;

	newStory = newStory.replace(":insertx:", itemX);
	newStory = newStory.replace(":insertz:", itemY);
	newStory = newStory.replace(":inserty:", itemZ);

	if (customName.value !== '') {
		const name = customName.value;

		newStory = newStory.replace("Bob", name);
	}

	if (unit.checked === false) {
		const stones = Math.round(300 / 14) + " stones";
		const celsius = Math.round((94 - 32) * 5 / 9) + " celsius";

		newStory = newStory.replace("94 fahrenheit", stones);
		newStory = newStory.replace("300 pounds", celsius);
	}
	para.textContent = newStory;
	para.style.visibility = "visible";
}
