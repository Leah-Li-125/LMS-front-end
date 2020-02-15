import React from "react";
import styled from "styled-components";
import { Link, NavLink, withRouter } from "react-router-dom";

const NavContainer = styled.ul`
	display: flex;
	list-style: none;

	a {
		text-decoration: none;
	}
`;

const TopNav = props => {
	return (
		<nav>
			<NavContainer>
				<li>
					<NavLink
						activeStyle={{ backgroundColor: "yellow" }}
						to="/courses"
					>
						Courses
					</NavLink>
				</li>
				<li>
					<NavLink
						activeStyle={{ backgroundColor: "yellow" }}
						to="/students"
					>
						Students
					</NavLink>
				</li>
				<li>
					<NavLink
						activeStyle={{ backgroundColor: "yellow" }}
						to="/lecturers"
					>
						Lecturers
					</NavLink>
				</li>
			</NavContainer>
		</nav>
	);
};

export default withRouter(TopNav);
