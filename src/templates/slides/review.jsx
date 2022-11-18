import React, {useEffect, useRef, useState} from "react";
import {Global, css} from '@emotion/react'
import Text from "../../atoms/text";
import Layer from "../../organisms/layer";

export const Slide = () => {


	return (

		<div className="review">
			<Layer>
				<Text variant="h4" sx={{ paddingTop: "1rem" }}>
					Rückblick
				</Text>
				<img height="800px" src={"/images/students.png"} />
			</Layer>

		</div>


	);
}


export default Slide;
