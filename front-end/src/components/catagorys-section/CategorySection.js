import React from "react";
import "./catagory.styles.css";
import { connect } from "react-redux";
import CatagoryBlock from "../catagory-block/CatagoryBlock";
import Alert from "../utils/Alert";
import { SyncLoaderSpinner } from "../utils/Spinner";

const CategorySection = ({ categoryState }) => {
	return categoryState.loading ? (
		<SyncLoaderSpinner loading={categoryState.loading} />
	) : (
		<div className="catagories-section">
			<Alert />
			<div className="row">
				{categoryState.category.map((x, i) => (
					<div className="col-md-4" key={i}>
						<CatagoryBlock data={x} />
					</div>
				))}
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	categoryState: state.categoryReducer,
});
export default connect(mapStateToProps)(CategorySection);
