import { css } from "@emotion/react";
import styled from "@emotion/styled";
import NextImage from "next/image";

export const StyledImage = styled(NextImage)`
	${({ mask, objectFit = "cover", objectPosition = "center" }) =>
		css`
			${mask &&
			css`
				mask-image: url("/images/bubble-mask.png");
				mask-size: contain;
			`};
			object-fit: ${objectFit};
			object-position: ${objectPosition};
			pointer-events: none;
			user-select: none;
		`}
`;
