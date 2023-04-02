import './App.css';

import React, {
  useEffect,
  useState,
} from 'react';

import DiscussionsRender from './Components/DiscussionsRender';
import Form from './Components/Form';
import Header from './Components/Header';
import { agoraStatesDiscussions } from './Data';
import {
  Discussion,
  Discussions,
} from './TypeDiscussion';

const App = () => {
	/*const [discussionData, setDiscussionData] = useState<Discussions>([...agoraStatesDiscussions]);*/
	//localstorage기능 추가
	const [discussionData, setDiscussionData] = useState<Discussions>(() => 
  	JSON.parse(window.localStorage.getItem("discussionData")!) || [...agoraStatesDiscussions]);

  useEffect(() => {
    window.localStorage.setItem("discussionData", JSON.stringify(discussionData));
  }, [discussionData]);

  //새로운질문이 추가되면 전체discussions에 추가하기
	const handleSubmitClick = (newSingleData: Discussion): void => {
		setDiscussionData([newSingleData, ...discussionData]);
	};
	const handleDeleteClick = (discussionId: string) => {
		setDiscussionData(discussion => {
		  return discussion.filter(discussion => discussion.id !== discussionId);
		});
	  };

	return (
		<main>
			<div className="splash-screen">My Agora States</div>
			<Header />
			<Form handleSubmitClick={handleSubmitClick} />
			<DiscussionsRender discussionData={discussionData} handleDeleteClick={handleDeleteClick}/>
		</main>
	);
};

export default App;

