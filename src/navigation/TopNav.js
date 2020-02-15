import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const NavContainer = styled.ul`
	display: flex;
	list-style: none;

	a {
		text-decoration: none;
	}
`;

const NavItem = styled(Link)`
	background-color: ${props => props.isActive && "yellow"};
`;

const TopNav = props => {
	//have to write too many, to use NavLink
	const path = props.location.pathname;
	const isOnCourses = path === "/courses";
	const isOnStudents = path === "/students";
	const isOnLecturers = path === "/lecturers";

	return (
		<nav>
			<NavContainer>
				<li>
					<NavItem isActive={isOnCourses} to="/courses">
						Courses
					</NavItem>
				</li>
				<li>
					<NavItem isActive={isOnStudents} to="/students">
						Students
					</NavItem>
				</li>
				<li>
					<NavItem isActive={isOnLecturers} to="/lecturers">
						Lecturers
					</NavItem>
				</li>
			</NavContainer>
		</nav>
	);
};

export default withRouter(TopNav);
