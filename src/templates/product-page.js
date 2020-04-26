import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const ProductPageTemplate = ({
	image,
	title,
	heading,
	description,
	intro,
	main,
	testimonials,
	fullImage,
	pricing,
}) => (
	<div className="content">
		<div
			className="full-width-image-container margin-top-0"
			style={{
				backgroundImage: `url(${
					!!image.childImageSharp ? image.childImageSharp.fluid.src : image
				})`,
				backgroundAttachment: 'fixed',
			}}
		>
			<h2
				className="has-text-weight-bold is-size-1"
				style={{
					boxShadow: '0.5rem 0 0 gray, -0.5rem 0 0 gray',
					backgroundColor: 'gray',
					color: 'white',
					padding: '1rem',
				}}
			>
				{title}
			</h2>
		</div>
		<section className="section section--gradient">
			<div className="container">
				<div className="section">
					<div className="columns">
						<div className="column is-7 is-offset-1">
							<h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
							<p>{description}</p>
						</div>
						<div className="column is-5">
							<div
								className="column is-6 has-text-centered"
								style={{ padding: '2.5rem 0 2.5rem 0' }}
							>
								<Link className="btn" to="/contact">
									Contact Us{' '}
								</Link>{' '}
							</div>{' '}
						</div>
					</div>
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<Features gridItems={intro.blurbs} />
							<div className="columns">
								<div className="column is-12">
									<h3
										className="has-text-weight-semibold is-size-3"
										style={{ marginTop: '2rem' }}
									>
										{main.heading}
									</h3>
									<p>
										{main.description}&ensp;
										<div
											className="columns"
											style={{ padding: '2rem 0 2rem 0' }}
										>
											<div className="column is-3 has-text-centered">
												<Link className="btn" to="/contact">
													Register Now!{' '}
												</Link>{' '}
											</div>{' '}
											<div className="column is-3 has-text-centered">
												<Link className="btn" to="/contact/examples">
													Learn More{' '}
												</Link>{' '}
											</div>{' '}
										</div>{' '}
									</p>
								</div>
							</div>
							{/* first grid-----2 images */}
							<div className="tile is-ancestor">
								<div className="tile is-vertical">
									<div className="tile">
										<div className="tile is-parent is-vertical">
											<article className="tile is-child">
												<PreviewCompatibleImage imageInfo={main.image1} />
											</article>
										</div>
										<div className="tile is-parent">
											<article className="tile is-child">
												<PreviewCompatibleImage imageInfo={main.image2} />
											</article>
										</div>
									</div>
									{/* <div className="tile is-parent">
										<article className="tile is-child">
											<PreviewCompatibleImage imageInfo={main.image3} />
										</article>
									</div> */}
								</div>
							</div>
							{/* second grid------2 images */}
							<div className="tile is-ancestor">
								<div className="tile is-vertical">
									<div className="tile">
										<div className="tile is-parent is-vertical">
											<article className="tile is-child">
												<PreviewCompatibleImage imageInfo={main.image3} />
											</article>
										</div>
										<div className="tile is-parent is-danger">
											<article className="tile is-child">
												<div className="card">
													<header className="card-header">
														<p className="card-header-title has-text-centered">
															Customer centrism and business growth
														</p>
														<a
															href="#"
															className="card-header-icon"
															aria-label="more options"
														>
															<span className="icon">
																<i
																	className="fas fa-angle-down"
																	aria-hidden="true"
																></i>
															</span>
														</a>
													</header>
													<div className="card-content">
														<div className="content">
															<p>
																Your businness deserves the best attention and
																management it can get, like wise your customers.
																Question, how best do you manage these in this
																fast paced, customer centric and ever dynamic
																world? The good news is there are many new tool
																and technologies that have been designed to help
																you do just that efficiently and in real time.
																Let us empower your staffs to use these modern
																tools and your business will thank you forever!
															</p>
														</div>
													</div>
													<footer className="card-footer">
														<Link
															className="btn card-footer-item"
															to="/contact"
														>
															Register Now!
														</Link>
													</footer>
												</div>
											</article>
										</div>
									</div>
									{/* <div className="tile is-parent">
										<article className="tile is-child">
											<PreviewCompatibleImage imageInfo={main.image3} />
										</article>
									</div> */}
								</div>
							</div>
							<Testimonials testimonials={testimonials} />
							<div
								className="full-width-image-container"
								style={{
									backgroundImage: `url(${
										fullImage.childImageSharp
											? fullImage.childImageSharp.fluid.src
											: fullImage
									})`,
									backgroundAttachment: 'fixed',
								}}
							/>
							<h2 className="has-text-weight-semibold is-size-2">
								{pricing.heading}
							</h2>
							<p className="is-size-5">{pricing.description}</p>
							<p>
								<Pricing data={pricing.plans} />
							</p>
							<Link
								className="btn"
								to="/contact"
								style={{ marginLeft: '5rem' }}
							>
								Register
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

ProductPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
	main: PropTypes.shape({
		heading: PropTypes.string,
		description: PropTypes.string,
		image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
		image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
		image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	}),
	testimonials: PropTypes.array,
	fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	pricing: PropTypes.shape({
		heading: PropTypes.string,
		description: PropTypes.string,
		plans: PropTypes.array,
	}),
};

const ProductPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<ProductPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				description={frontmatter.description}
				intro={frontmatter.intro}
				main={frontmatter.main}
				testimonials={frontmatter.testimonials}
				fullImage={frontmatter.full_image}
				pricing={frontmatter.pricing}
			/>
		</Layout>
	);
};

ProductPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default ProductPage;

export const productPageQuery = graphql`
	query ProductPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 1000, quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
					}
					heading
					description
				}
				main {
					heading
					description
					image1 {
						alt
						image {
							childImageSharp {
								fluid(maxWidth: 1000, quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					image2 {
						alt
						image {
							childImageSharp {
								fluid(maxWidth: 1000, quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					image3 {
						alt
						image {
							childImageSharp {
								fluid(maxWidth: 1000, quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
				testimonials {
					author
					quote
				}
				full_image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				pricing {
					heading
					description
					plans {
						description
						items
						price
						plan
					}
				}
			}
		}
	}
`;
