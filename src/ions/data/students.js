const students = [
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "",
		// Name displayed on slide
		name: "",
		app: "",
		// Optional. If set, the Domain will be shown on the slide, e.g. https://my-capstone.herokuapp.com
		domain: "",
		// Will be printed as written here
		techStack: [],
		commits: 0,
		pullRequests: 0,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile/desktop",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "hunjoon_rhee",
		// Name displayed on slide
		name: "Hunjoon Rhee",
		app: "Running Route Advisor",
		// Optional. If set, the Domain will be shown on the slide, e.g. https://my-capstone.herokuapp.com
		domain: "https://rra-capstone.herokuapp.com/",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Maven", "TypeScript", "React", "Git", "MongoDB", "Rest API", "JUnit", "Docker", "Mockito", "CSS", "CI", "Sonar"],
		commits: 91,
		pullRequests: 22,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile/desktop",
	},
];

export default students;
