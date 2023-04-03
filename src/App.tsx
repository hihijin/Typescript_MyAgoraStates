import './App.css';

import React, {
  useEffect,
  useState,
} from 'react';

import DiscussionsRender from './Components/DiscussionsRender';
import Form from './Components/Form';
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

	//삭제클릭한 discussion의 id와 동일한 id를 가진 discussion을 discussion목록에서 지운다.
	const handleDeleteClick = (discussionId: string) => {
		setDiscussionData(discussion => {
		  return discussion.filter(discussion => discussion.id !== discussionId);
		});
	  };

	return (
		<div className='container'>
			<div><img className='cloud1' alt="" src="/images/cloud.png"/></div>
			<div><img className='cloud2' alt="" src="/images/cloud.png"/></div>
			<div><img className='cloud3' alt="" src="/images/cloud.png"/></div>
		<main>
			<div className="splash-screen">My Agora States</div>{/*첫화면 로고 띄우는 컴포넌트*/}
			<h1>My Agora States</h1>{/*header 컴포넌트*/}
			<Form handleSubmitClick={handleSubmitClick} />{/*질문하기 컴포넌트*/}
			<DiscussionsRender discussionData={discussionData} handleDeleteClick={handleDeleteClick}/>{/*Q&A 컴포넌트*/}
		</main>
		</div>
	);
};

export default App;

