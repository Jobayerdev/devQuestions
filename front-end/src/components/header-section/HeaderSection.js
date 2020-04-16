import React from "react";
import "./header-section.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import { Link } from "react-router-dom";

const HeaderSection = () => {
	return (
		<div className="header-section text-center mb-5">
			<div className="container">
				<div className="row  py-5">
					<div className="col-md-12">
						<Link to="/">
							<CustomTitle
								tagline="Now it's your turn get ready  to  hired as a web developer"
								thin="Codeing Interview Question"
								medium
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderSection;
