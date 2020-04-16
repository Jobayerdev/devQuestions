import React from "react";
import CategorySection from "../../components/catagorys-section/CategorySection";
import TeacherCard from "../../components/teacher-card/TeacherCard";
import { connect } from "react-redux";

const HomePage = ({ categoryState }) => {
	return (
		<div className="home-page">
			<div className="container">
				<CategorySection />
				<TeacherCard />
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	categoryState: state.categoryReducer,
});
export default connect(mapStateToProps)(HomePage);
