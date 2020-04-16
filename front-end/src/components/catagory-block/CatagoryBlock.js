import React from "react";

import "./category-block.styles.css";
import { Link } from "react-router-dom";

const CatagoryBlock = ({ data }) => {
	const { _id, title, thumbnail, questions, description } = data;
	return (
		<div className="category-block">
			<div className="cat-img">
				<img src={thumbnail} alt="" />
			</div>
			<Link to={`/interview/${_id}`}>
				<div className="cat-content">
					<h1>{title}</h1>
					<p>{description}</p>
					<div className="meta text-right">
						<span>Question : {questions.length}</span>
						{/* <span>Enrolled : {""}</span> */}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CatagoryBlock;
