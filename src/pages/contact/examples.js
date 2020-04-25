import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../components/Layout';
import codeImg from '../../../static/img/home-kids.jpg';
import './contact.scss';

export default class Index extends React.Component {
	render() {
		return (
			<Layout>
				<p className="has-text-centered kids-club-header">
					<strong>
						Kids{' '}
						<img
							src="https://lh3.googleusercontent.com/proxy/gdlGMEFF_4906R3FATFV91tUd08rglxEBDeGcGCwuPMclywQeeRgXJhOxT34mnUzcyQnO1l9Jt5gwofCQqjKCcBGf-E3AFkBZMSWQfx0YghBrB603Ms"
							alt="kids code club"
							className="is-fluid code-club-img"
						/>
						code club
					</strong>
				</p>

				<section className="section code-club-wrap">
					<div className="container">
						<div className="container">
							<img src={codeImg} alt="kids code club" className=" club-img" />
						</div>
						<article className="write-up container is-fluid">
							<p>
								Teaching Kids to code is no longer novel, parents have
								discovered the benefits and are already taking actions. The pros
								out weighs the cons, not only do they acquire a great skill that
								is very relevant in our modern society today and the future,
								they also become better in other of their subjects as studies
								have shown, and I quite agree, coding equips you with soft
								skills like perseverance in the face of difficult situations,
								this is because in programming you'll always face bugs and
								errors and some might take you hours or even days to fix and it
								is in fixing them that these skills are developed. Ultimately
								they become better learners as they improve in their problem
								solving skill.
							</p>
							&emsp;
							<p>
								<em>Techgrade</em> kids code club gives school pupils the
								opportunity to learn programming through fun and interesting
								lessons in school. They learn by building things that appeal to
								them like games, and fun apps which they get to enjoy with their
								friends, and also show to their parents, while also acquiring an
								indept knowledge of fundamental programming concepts and
								technologies. They also get involved in competitions both
								internally and externally with their counterparts from other
								schools, thereby giving them exposure. There is a grading
								system, and at the end of each term, results would be issued
								based on performance. There are written, presentational, and
								pactical tests aimed at solidifying what has been learnt. <br />{' '}
								Even though you don't want your kid to become a programmer, it
								is still not a bad skill to have in this &nbsp;
								<i>age of the internet.</i>
							</p>{' '}
							&emsp;
							<hr />
							<h4 className="subtitle has-text-weight-bold	">
								Students will be working with modern technologies that are
								relevant in the tech world. they include:
							</h4>
							<br />
							<p>
								<strong className="links has-text-weight-bold	">
									<a href="https://scratch.mit.edu/" target="blank">
										scratch:
									</a>
								</strong>{' '}
								&ensp; Scratch is a block based visual programming language
								developed by Mitch Resnick and patented by the Lifelong
								Kindergarten Group at the Massachusetts Institute of Technology
								(MIT), it's an online community targeted primarily at children
								between the ages of 6 to 16. With Scratch children can create
								online projects using block like interface. Scratch has been
								translated into over 70 languages and has over 40 million users
								from around the world, thats how huge it is! and thats why
								educators use it to teach children the fundamentals of
								programming.
							</p>{' '}
							&emsp;
							<p>
								<strong className="links has-text-weight-bold	">
									<a href="https://www.python.org/" target="blank">
										Python:
									</a>
								</strong>{' '}
								Python is a powerful multi-purpose text-based programming
								language created by Guido van Rossum which kids as young as age
								8 can easily use to express themselves. It’s simple easy-to-use
								syntax, makes it the perfect language for someone trying to
								learn computer programming for the first time. It can serve as
								both a jump off point for mastering other languages, and a
								strong enough tool for serious game/web/app development and
								programming for kids. <br />
								Drawing shapes and patterns with Python turtle module will help
								kids overcome their first barriers with animation and game
								design. In a short time, they’ll be able code their own apps for
								Mac, PC, or Linux.
							</p>
							&emsp;
							<p>
								<strong className="links has-text-weight-bold	">
									JavaScript:
								</strong>{' '}
								&ensp; Almost everything on the web now runs on JavaScript,
								which makes the language a great choice for kids. With
								javaScript they'll learn how to transform web documents into
								amazing games and interactive apps. Even though it is widely
								used for web development, javaScript isn't just about building
								web pages, it can also be used to control other hardware types
								like robots; making it a very powerful language. <br />
								JavaScript usually comes as a level-up skill for kids who
								already have some level of experience coding in Scratch or
								Python. Usually, it’s recommended for kids older than ten.
							</p>{' '}
							&emsp;
							<h4 className="title has-text-centered is-capitalized	has-text-weight-bold	">
								what are your kids to gain from learning programming:
							</h4>
							<ol className="container is-fluid">
								<li>It gives them a competitive edge over their peers.</li>
								<hr />
								<li>
									They become equipedwith a very powerful skill that is very
									relevant today and will be even much more relevant in future.
								</li>
								<hr />
								<li>
									It helps them master subjects like matematics, computer
									science and other science based subjects.
								</li>
								<hr />
								<li>
									Coding helps to build soft skills like communication,
									collaboration, and leadership.
								</li>
								<hr />
								<li>
									Besides generating soft skills, coding for kids produces
									computational thinking: this is the ability of a child to
									collect data, determine the actual problem, and breaking it
									into solvable components, thereby making them better problem
									solvers.
								</li>
								<hr />
								<li>
									It encourages creativity. Talking about creativity, children
									can get creative and fine tune projects to go inline with
									their career choice.
								</li>
								<hr />
								<li>And much more...</li>
								<hr />
							</ol>
						</article>
						<Link className="btn" to="/contact" style={{ marginLeft: '5rem' }}>
							Register
						</Link>
					</div>
				</section>
			</Layout>
		);
	}
}
