// object structure:
// {
//   title: "Samurai",
//   name: "Tomoe Gozen",
//   bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
//   image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
//   lifespan: {
//     birth: 1747,
//     death: 1797
//   }
// }

let people = [
	{
	title: "Samurai",
	name: "Tomoe Gozen",
	bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	lifespan: {
	    birth: 1747,
	    death: 1797
		}
	},
	{
		title: "Captain, the Tiger",
		name: "Mitsuo Fuchida",
		bio: "Captain of the imperial Japanese navy, and commander of the Akagi air squadron that led the attack on Pearl Harbor, Fuchida became one of imperial Japan's greatest warriors.",
		image: "http://static.wixstatic.com/media/123fd2_8b4f05879830b5c234fd3d6f2700bf03.jpeg_256",
		lifespan: {
			birth: 1902,
			death: 1976
		}
	}
];

let text = document.getElementById("input");
let container = document.getElementById("container");

function makeCard(){
	let card = 
	`<div class="container">
		<div>Title:${people.title}</div>
		<div>Name:${people.name}</div>
		<div>Bio:${people.bio}</div>
	</div>`;
	console.log("card", card);
	console.log("makeCard", makeCard);
	return card;
}
makeCard();

function popCard() {
	for (var i = 0; i < people.length; i++){
		console.log("people", people[i]);
		var makeIt = makeCard(people[i]);
		container.innerHTML += makeIt;
	}
}
popCard();





// you can use JavaScript to add an element to the DOM and then immediately attach an event listener to it.
	// var counter = 0;
	// var outputEl = document.getElementById("outputEl");
	// for (; counter < 5; counter++) {
//   // Give each person element a unique identifier
	//   outputEl.innerHTML += `<div class="person__container" id="person--${counter}"></div>`;
	// }

// // Now containerEl will have elements in it
	// var containerEl = document.getElementsByClassName("person__container");

// // Event listeners are created
	// for (var i = 0; i < containerEl.length; i++) {
	//   containerEl[i].addEventListener("click", function (event) {
//     // Logic to execute when the element is clicked
	//   });
	// });