import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import './featureStyle.scss';

const FeatureGrid = ({ gridItems }) => (
	<div className="columns is-multiline">
		{' '}
		{gridItems.map((item) => (
			<div key={item.text} className="column is-6 big feature-wrap">
				<div className="card card-shadow  feature-card">
					<div class="card-image">
						<figure>
							<PreviewCompatibleImage imageInfo={item} />
						</figure>
					</div>
					<div class="card-content">
						<div class="content">
							<p>{item.text} </p>
							<br />
						</div>
					</div>
				</div>
			</div>
		))}{' '}
	</div>
);

FeatureGrid.propTypes = {
	gridItems: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			text: PropTypes.string,
		})
	),
};

export default FeatureGrid;
