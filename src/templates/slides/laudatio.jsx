import React from "react";
import Cover from "../cover";
import { coaches } from "../../ions/data";

const Slide = () => <Cover title="Laudatio" subtitle={coaches[0].name} />;

export default Slide;
