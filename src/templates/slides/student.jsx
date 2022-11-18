import React from "react";
import Cover from "../cover";

const Student = ({ student }) => <Cover graduate title={student.name} subtitle={student.app} />;
export default Student;
