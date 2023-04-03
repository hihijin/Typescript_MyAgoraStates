import React, { useState } from 'react';

import { Discussion } from '../TypeDiscussion';
import SingleDiscussion from './SingleDiscussion';

type DiscussionData = {
	discussionData: Discussion[]; 
	//원래는 object[]로 타입 설정을 하고 item:object로 타입 설정했더니 item props부분에서 오류가 났다. 해당 키가 없다고 함
	//item:Discussion으로 타입 설정했더니 item props는 정상, 아래에 SingleDiscussionRender(el)의 el에서 얘는 타입이 object이고, Discussion타입이 아니다라는 오류발생
	//item은 object이면서 discussion타입인데 2가지 타입을 할당할수도 없었는데,,, 해결방법을 찾았다!
	//일단 자동으로 el이 object로 타입추론하게 된 이유는 위의 discussionData를 object[]로 타입설정했기때문에,
	//아래에서 map으로 풀어줬을 때 el은 object가 되는 것이다.
	//그럼 discussionData: Discussion[]로 설정하면 el의 타입은 Discussion이 될것이므로 오류가 안생긴다.
	handleDeleteClick:(discussionId: string) => void;
}
//item.createdAt.toLocaleString("ko-KR")

//<button className='deleteBtn' onClick={props.onDeleteTodo.bind(null, todo.id)}>
//Disscussion컴포넌트 : discussion섹션으로 ul element까지
const DiscussionsRender: React.FC<DiscussionData> = props => {
	const SingleDiscussionRender = (item: Discussion) => { //매개변수 item은 아래의 el을 전달인자로 받는다.
		return ( //하나의 discussion을 만들기 위해 props로 Discussion의 키들을 내려준다.
			<SingleDiscussion
				key={item.id}
				date={item.createdAt}
				title={item.title}
				url={item.url}
				author={item.author}
				imgSrc={item.avatarUrl}
				answer={item.answer}
				Delete={props.handleDeleteClick.bind(null,item.id)}
			/>
		);
	};

	const [show, setShow] = useState(false);
	const showDiscussionClick = () => {
		//클릭 시 true일때 내려오는 style이 있는 className추가
		const ul = document.querySelector("ul")!;
		const btn = document.querySelector(".clickDown")!;
		const body = document.querySelector("body")!;
		if(show===false){
			body.classList.add("paddingLeft");
			btn.textContent = "질문 닫기";
			ul.classList.remove("hidden");
			setShow(!show);
		}
		else{
			body.classList.remove("paddingLeft");
			btn.textContent = "질문 보기";
			ul?.classList.add("hidden");
			setShow(!show);
		}
	}
	return (
		<section className="discussion__wrapper">
			<h2>
				Q&A <button className='clickDown' onClick={showDiscussionClick}>질문 보기</button>
			</h2>
			<ul className="discussions__container hidden">
					{props.discussionData.map((el) => SingleDiscussionRender(el))}{/*li태그로 discussion을 하나씩 만들 컴포넌트*/}
			</ul>
			<div className="pagination">1 2 3 4 5</div>
		</section>
	);
};

export default DiscussionsRender;