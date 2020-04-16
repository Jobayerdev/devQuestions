import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import HeaderSection from "./components/header-section/HeaderSection";
import QuestionPage from "./pages/question-page/QuestionPage";
import { connect } from "react-redux";
import { getCategory } from "./redux/category/category.actions";

function App({ getCategory }) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};
	useEffect(() => {
		getCategory();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [getCategory]);
	const scrollToCreatFrom = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<Fragment>
			<HeaderSection />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/interview/:categoryId" component={QuestionPage} />
			</Switch>
			{scrollPosition > 150 ? (
				<button onClick={scrollToCreatFrom} className="jump-top-top-btn">
					&#8593;
				</button>
			) : (
				""
			)}
		</Fragment>
	);
}

export default connect(null, { getCategory })(App);
