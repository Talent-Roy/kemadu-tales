import React from 'react';
import PropTypes from 'prop-types';

const Pricing = ({ data }) => (
	<div className="columns">
		{' '}
		{data.map((pricing) => (
			<div key={pricing.plan} className="column">
				<section className="section">
					<h4 className="has-text-centered has-text-weight-semibold">
						{' '}
						{pricing.plan}{' '}
					</h4>{' '}
					<h2 className="is-size-1 has-text-weight-bold has-text-secondary has-text-centered">
						{pricing.price}{' '}
					</h2>{' '}
					<p className="has-text-weight-semibold"> {pricing.description} </p>{' '}
					<ul>
						{' '}
						{pricing.items.map((item) => (
							<li key={item} className="is-size-5">
								{' '}
								{item}{' '}
							</li>
						))}{' '}
					</ul>{' '}
				</section>{' '}
			</div>
		))}{' '}
	</div>
);

Pricing.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			plan: PropTypes.string,
			pricing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			description: PropTypes.string,
			items: PropTypes.array,
		})
	),
};

export default Pricing;
