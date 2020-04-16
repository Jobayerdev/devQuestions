import React from "react";
import "./teacher-card.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import dearJobayer from "../../assets/Dear-Jobayer.jpg";

const TeacherCard = () => {
	return (
		<div className="teacher-card-wrapper">
			<div className="row py-5 mt-5">
				<div className="col-md-12 text-center">
					<CustomTitle thin="Jobayer Hossain" tagline="Contributors Profile" />
					<div className="teacher-card">
						<div className="teacher-avater">
							<img src={dearJobayer} alt="" />
							<div className="dark-overlay"></div>
							<div className="hover-content">
								<div className="teacher-link">
									{/* <a href="/">F</a>
									<a href="/">g</a>
									<a href="/">
										<i className="fa fa-github"></i>
									</a> */}
									<a href="https://www.jobayer.info" target="_blank">
										www.Jobayer.info
									</a>
								</div>
							</div>
						</div>
						<div className="teacher-meta">
							<p>Front-End Developer</p>
							<h4>
								I am Jobayer, I am a Front End Web developer. I specialize in
								pixel-perfect Responsive Design with HTML5 semantic conversion.
								I have professional experience working with HTML5, CSS3
								Bootstrap 4, ES6 Javascript/Jquery. I also have confident
								working with front-end framework React Redux and design tools
								such as Illustrator and Photoshop
							</h4>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeacherCard;
