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
		id: "nina_guo",
		// Name displayed on slide
		name: "Nina Guo",
		app: "capstone-NFT-2022",
		// Optional. If set, the Domain will be shown on the slide, e.g. https://my-capstone.herokuapp.com
		domain: "https://capstone-nft-2022.herokuapp.com/",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Maven", "TypeScript", "React", "Git", "MongoDB", "Rest API", "JUnit", "Docker", "Mockito","CSS","Postman"],
		commits: 53,
		pullRequests: 16,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "desktop",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "mirko_vöbel",
		// Name displayed on slide
		name: "Mirko Vöbel",
		app: "Fancy Party App",
		// Optional. If set, the Domain will be shown on the slide, e.g. https://my-capstone.herokuapp.com
		domain: "https://fancy-party-app.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "React", "MongoDB", "JUnit", "CSS", "HTML", "Maven", "TypeScript", "Postman", "Git", "Docker"],
		commits: 63,
		pullRequests: 18,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile/desktop",
	},
];

export default students;
