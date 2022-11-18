import { useRouter } from "next/router";
import { useEffect } from "react";

export const useNavigation = (pages, { onNext, onPrevious } = {}) => {
	const {
		query: { page = "1" },
		push,
	} = useRouter();
	useEffect(() => {
		const pageNumber = Number.parseInt(page, 10);
		const goTo = async nextPage => {
			await push(`/${nextPage}`);
		};
		const handleKeyDown = async event_ => {
			switch (event_.code) {
				case "ArrowRight":
					if (pageNumber < pages) {
						await goTo(pageNumber + 1);
						if (onNext) {
							onNext();
						}
					}
					break;
				case "ArrowLeft":
					if (pageNumber > 1) {
						await goTo(pageNumber - 1);
						if (onPrevious) {
							onPrevious();
						}
					}
					break;
				default:
					break;
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [push, page, onNext, pages]);
	return Number.parseInt(page, 10);
};
