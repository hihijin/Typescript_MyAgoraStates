import React from 'react';

import { Discussion } from '../TypeDiscussion.d';
import SingleDiscussion from './SingleDiscussion';

type DiscussionData = {
	discussionData: Discussion[]; 
	//원래는 object[]로 타입 설정을 하고 item:object로 타입 설정했더니 item props부분에서 오류가 났다. 해당 키가 없다고 함
	//item:Discussion으로 타입 설정했더니 item props는 정상, 아래에 SingleDiscussionRender(el)의 el에서 얘는 타입이 object이고, Discussion타입이 아니다라는 오류발생
	//item은 object이면서 discussion타입인데 2가지 타입을 할당할수도 없었는데,,, 해결방법을 찾았다!
	//일단 자동으로 el이 object로 타입추론하게 된 이유는 위의 discussionData를 object[]로 타입설정했기때문에,
	//아래에서 map으로 풀어줬을 때 el은 object가 되는 것이다.
	//그럼 discussionData: Discussion[]로 설정하면 el의 타입은 Discussion이 될것이므로 오류가 안생긴다.
}
//item.createdAt.toLocaleString("ko-KR")


//Disscussion컴포넌트 : discussion섹션으로 ul element까지
const Discussions: React.FC<DiscussionData> = props => {
	const SingleDiscussionRender = (item: Discussion) => { //item매개변수타입이 object같은데 자꾸 오류가 남
		return (
			<SingleDiscussion
				key={item.id}
				date={item.createdAt}
				title={item.title}
				url={item.url}
				author={item.author}
				imgSrc={item.avatarUrl}
			/>
		);
	};
	return (
		<section className="discussion__wrapper">
			<h2>
				Discussions <span id="allItemNum"></span>
			</h2>
			<ul className="discussions__container">
					{props.discussionData.map((el) => SingleDiscussionRender(el))}
			</ul>
			<div className="pagination"></div>
		</section>
	);
};

export default Discussions;