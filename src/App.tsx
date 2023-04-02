import './App.css';

import React, { useState } from 'react';

import Discussions from './Components/Discussions';
import Form from './Components/Form';
import Header from './Components/Header';
import { agoraStatesDiscussions } from './Data';

const App = () => {
	const [discussionData, setDiscussionData] = useState([...agoraStatesDiscussions]);

	const handleSubmitClick = (newSingleData: any): void => {
		setDiscussionData([newSingleData, ...discussionData]);
	};
	return (
		<main>
			<Header />
			<Form handleSubmitClick={handleSubmitClick} />
			<Discussions discussionData={discussionData} />
		</main>
	);
};

export default App;

