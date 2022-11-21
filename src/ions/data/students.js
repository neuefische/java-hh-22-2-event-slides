const students = [

	{
		// The ID is used to find images and videos: firstname_lastname
		id: "amir_tafkhimi",
		// Name displayed on slide
		name: "Amir Tafkhimi",
		app: "Travel App",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "am-capstone-travel.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Maven", "TypeScript", "React", "Git", "MongoDB", "Rest API", "JUnit", "Docker", "Mockito"],
		commits: 49,
		pullRequests: 13,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "jens-falco_marecek",
		// Name displayed on slide
		name: "Jens-Falco Marecek",
		app: "Das Gefahrometer",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "gefahrometer-capstone.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Maven", "TypeScript", "React", "Git", "MongoDB", "Rest API", "JUnit", "Docker", "Mockito","CSS","Postman"],
		commits: 117,
		pullRequests: 25,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "galina_kolesnikova",
		// Name displayed on slide
		name: "Galina Kolesnikova",
		app: "Sights from Hamburg",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "sehenswuerdigkeiten-hamburg.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "TypeScript", "Spring", "React", "MongoDB", "JUnit", "Axios", "Maven", "Heroku", "HTML", "CSS", "Bootstrap", "Postman", "Git", "Docker", "Mockito", "Rest-API", "CI"],
		commits: 74,
		pullRequests: 11,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "desktop",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "hunjoon_rhee",
		// Name displayed on slide
		name: "Hunjoon Rhee",
		app: "Running Route Advisor",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "rra-capstone.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Maven", "TypeScript", "React", "Git", "MongoDB", "Rest API", "JUnit", "Docker", "Mockito", "CSS", "CI", "Sonar"],
		commits: 91,
		pullRequests: 22,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile/desktop",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "ilker_yildirim",
		// Name displayed on slide
		name: "Ilker Yildirim",
		app: "Check & Computify",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "check-computify.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring Boot", "React", "MongoDB", "JUnit", "CSS", "HTML", "Maven", "TypeScript", "Postman", "Git", "GitHub", "Docker", "Bootstrap", "SQL", "Mockito"],
		commits: 172,
		pullRequests: 50,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile/desktop",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "leon_maar",
		// Name displayed on slide
		name: "Leon Maar",
		app: "dev_MAID",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "",
		// Will be printed as written here
		techStack: ["Java", "Spring", "React", "MongoDB", "JUnit", "Maven", "TypeScript", "Postman", "Git", "Docker", "Rest-API"],
		commits: 40,
		pullRequests: 10,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "desktop",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "marek_schuetze",
		// Name displayed on slide
		name: "Marek Schütze",
		app: "YouLearners",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "youlearners.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring Boot", "React", "MongoDB", "JUnit", "CSS", "HTML", "Maven", "TypeScript", "Postman", "Git", "Docker", "CI/CD", "Bootstrap"],
		commits: 49,
		pullRequests: 13,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile/desktop", //looks better on full-desktop
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "mirko_vöbel",
		// Name displayed on slide
		name: "Mirko Vöbel",
		app: "Fancy Party App",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "fancy-party-app.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "React", "MongoDB", "JUnit", "CSS", "HTML", "Maven", "TypeScript", "Postman", "Git", "Docker"],
		commits: 63,
		pullRequests: 18,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile/desktop",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "nina_guo",
		// Name displayed on slide
		name: "Nina Guo",
		app: "capstone-NFT-2022",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "capstone-nft-2022.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Maven", "TypeScript", "React", "Git", "MongoDB", "Rest API", "JUnit", "Docker", "Mockito","CSS","Postman"],
		commits: 53,
		pullRequests: 16,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "desktop",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "nina_michalski",
		// Name displayed on slide
		name: "Nina Michalski",
		app: "Snoople",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "capstone-michalski.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Rest API", "React", "Docker", "MongoDB", "Heroku", "Maven", "TypeScript", "Git", "JUnit", "Postman"],
		commits: 35,
		pullRequests: 13,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile",
	},

	{
		// The ID is used to find images and videos: firstname_lastname
		id: "ryan_shade",
		// Name displayed on slide
		name: "Ryan Shade",
		app: "MotoGP World",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "motogp-world.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Maven", "TypeScript", "React", "Git", "MongoDB", "Rest API", "JUnit", "Docker", "Mockito", "Bootstrap", "Swiper", "Font-awesome", "Postman", "Axios", "TypeScript", "JavaScript", "HTML", "CSS", "GitHub"],
		commits: 94,
		pullRequests: 30,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile/desktop", //looks better on full-desktop
	},


	{
		// The ID is used to find images and videos: firstname_lastname
		id: "sebastian_taeufer",
		// Name displayed on slide
		name: "Sebastian Täufer",
		app: "Garbicz Barmanagement App",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "garbicz-barmanagement-capstone.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "Maven", "TypeScript", "React", "Git", "MongoDB", "Rest API", "JUnit", "Docker", "Mockito", "Postman", "Bootstrap", ],
		commits: 107,
		pullRequests: 21,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "desktop",
	},
	{
		// The ID is used to find images and videos: firstname_lastname
		id: "sebastian_witt",
		// Name displayed on slide
		name: "Sebastian Witt",
		app: "Make It Take It",
		// Optional. If set, the Domain will be shown on the slide, e.g. my-capstone.herokuapp.com
		domain: "capstone-michalski.herokuapp.com",
		// Will be printed as written here
		techStack: ["Java", "Spring", "React", "CSS", "HTML", "React", "Docker", "MongoDB", "Heroku", "Maven", "TypeScript", "Git", "JUnit", "Postman"],
		commits: 60,
		pullRequests: 13,
		//'mobile', 'tablet_portrait', 'tablet_landscape', 'desktop'
		device: "mobile",
	},
];


export default students;
