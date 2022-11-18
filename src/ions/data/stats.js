import { countByKey } from "../utils/array";
import students from "./students";

const stats = {
	messages: { value: 7650, label: "Slack Messages", prefix: "> ", slide: "bootcamp" },
	hours: { value: 720, label: "Hours", prefix: "> ", slide: "bootcamp" },
	// onOnOnes: { value: 150, label: "One on ones", prefix: "> ", slide: "bootcamp" },
	// starRating: { value: "5 / 5", label: "Average Ratings", slide: "bootcamp" },
	// ratings: { value: 0, label: "Ratings", slide: "bootcamp" },
	commits: { value: countByKey(students, "commits"), label: "Commits", slide: "graduation" },
	pullRequests: {
		value: countByKey(students, "pullRequests"),
		label: "Pull Requests",
		slide: "graduation",
	},
	standUps: { value: 20, label: "Stand ups", slide: "graduation" },
};

export default stats;
