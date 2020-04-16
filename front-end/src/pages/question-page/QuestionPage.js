import React, { useEffect } from "react";
import "./question-page.styles.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CreateQuestionForm from "../../components/create-question-form/CreateQuestionForm";
import { connect } from "react-redux";
import { getCategoryById } from "../../redux/category/category.actions";
import { useParams } from "react-router-dom";
import { SyncLoaderSpinner } from "../../components/utils/Spinner";

const QuestionPage = ({ getCategoryById, categoryState }) => {
	const categoryId = useParams();
	useEffect(() => {
		getCategoryById(categoryId);
		window.scrollTo({ top: 150, behavior: "smooth" });
	}, [getCategoryById]);
	const scrollToCreatFrom = () => {
		window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
	};

	const getItems = categoryState.category.find(
		(x) => x._id === categoryId.categoryId
	);
	const getQuestions =
		getItems && getItems.questions.filter((x) => x.status === "approved");
	return categoryState.loading ? (
		<SyncLoaderSpinner loading={categoryState.loading} />
	) : (
		<div className="question-page">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="question-block-intro">
							<h1>{getItems && getItems.title}</h1>
							<button onClick={scrollToCreatFrom}>Set a Question</button>
						</div>
					</div>
				</div>
				<div className="question-answer-block py-5 mt-5">
					<div className="row">
						<div className="col-md-10 offset-1">
							<Accordion defaultActiveKey="0">
								{getQuestions.map((x, i) => (
									<Card key={i}>
										<Accordion.Toggle as={Card.Header} eventKey={i + 1}>
											<span className="question-number">{i + 1}</span>
											{x.questionTitle}
										</Accordion.Toggle>
										<Accordion.Collapse eventKey={i + 1}>
											<Card.Body>
												<span className="question-ans">
													<strong>Ans: </strong>
												</span>
												{x.answer}
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								))}
							</Accordion>
						</div>
					</div>
				</div>
				<div className="create-question-block">
					<CreateQuestionForm catId={categoryId} />
				</div>
			</div>
		</div>
	);
};

const mapStatToProps = (state) => ({
	categoryState: state.categoryReducer,
});

export default connect(mapStatToProps, { getCategoryById })(QuestionPage);
