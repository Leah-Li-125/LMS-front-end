import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Courses from "../course/Courses";
import Lectures from "../lecturer/Lecturers";
import Students from "../student/Students";
import CoursesDetails from "../course/CourseDetails";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" render={() => <Redirect to="/courses" />} />
			<Route exact path="/courses" component={Courses} />
			<Route exact path="/courses/:courseId" component={CoursesDetails} />
			<Route exact path="/students" component={Students} />
			<Route exact path="/lecturers" component={Lectures} />
		</Switch>
	);
};

export default Routes;
