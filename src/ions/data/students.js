const students = [
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "ryan_shade",
		// Name displayed on slide
		name: "Ryan Shade",
		app: "MotoGP World",
		// Optional. If set, the Domain will be shown on the slide, e.g. https://my-capstone.herokuapp.com
		domain: "https://motogp-world.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Maven", "TypeScript", "React", "Git", "MongoDB", "Rest API", "JUnit", "Docker", "Mockito", "Bootstrap", "Swiper", "Font-awesome", "Postman", "Axios", "TypeScript", "JavaScript", "HTML", "CSS", "GitHub"],
		commits: 90,
		pullRequests: 30,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile/desktop", //looks better on full-desktop
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "max_muster",
		// Name displayed on slide
		name: "Max Muster",
		app: "Capstone 9000",
		// Optional. If set, the Domain will be shown on the slide, e.g. https://my-capstone.herokuapp.com
		domain: "https://my-capstone.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Maven", "TypeScript", "React", "Git", "MongoDB", "Rest API", "JUnit", "Docker", "Mockito"],
		commits: 12,
		pullRequests: 2,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile/desktop",
	},
];

export default students;
