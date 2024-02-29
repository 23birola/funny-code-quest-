import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Challenge = ({ onSubmit, currentQuestion }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const answer = event.target.answer.value;
		onSubmit(answer);
		event.target.reset();
	};

	return (
		<div>
			<div key={currentQuestion.id}>
				<h2>{currentQuestion.name}</h2>
				<img src={currentQuestion.image} alt={currentQuestion.name} />
				<p>{currentQuestion.description}</p>
				<p>{currentQuestion.instruction}</p>
			</div>
			<br></br>
			<h2>{currentQuestion.question}</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" name="answer" className="bg-white text-dark p-2 m-4"/>
				<Button className="m-2" type="submit">Submit</Button>
			</form>
		</div>
	);
};

export default Challenge;
