import React from 'react';

import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
} from 'react-icons/ai';

//이 컴포넌트들의 style을 바꾸려면 className은 불가, size와 color속성만 가능하다!

interface DiscussionData {
	key: string,
	date: string,
	title: string,
	url: string,
	author: string,
	imgSrc: string,
	answer?: object | null,
	Delete?: (discussionId: string) => void;
	//discussion삭제하는 이벤트핸들러함수
	//내 질문은 imgSrc를 전부 하나로 지정해놨으므로, 지정한 url를 가졌다면 삭제함수를 가진 삭제버튼을 렌더링
  };


//discussion각각의 li컴포넌트
const SingleDiscussion: React.FC<DiscussionData> = props => {
	return (
		<li className="discussion__container">
			<div className="discussion__avatar--wrapper">
				<img
					className="discussion__avatar--image"
					src={props.imgSrc}
					alt={`avatar of ${props.author}`}
				/>
			</div>
			<div className="discussion__content">
				<h3 className="discussion__title">
					<a href={props.url}>{props.title}</a>
				</h3>
				<div className="discussion__information">{/*현지시간 구하기*/}
					{`${props.author} / ${new Date(props.date).getFullYear()}.${new Date(props.date).getMonth()+1}.${new Date(props.date).getDate()}`}
					{props.imgSrc==="https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDJfMjg0/MDAxNjI1MjM3MDEwMDEx.16ZkPZkXZmj6MQyJIpZlTidJmYGFnehv2QoiaIWVHAsg.louS2WVp9f5dzxMHdh1MdS-3bZgOIm68sJhcToobTPAg.JPEG.yyabbj/IMG_3332.JPG?type=w800"
				? <button className='deleteBtn' onClick={props.Delete?.bind(null,props.key)}>삭제</button>:null}				
				</div>
			</div>
			<div className="discussion__answered">
				{props.answer ? <AiFillCheckCircle size="20px" color="rgba(0,113,227,1)"/>:<AiOutlineCheckCircle size="20px" color="rgba(0,0,0,0.3)"/>}
			</div>
		</li>
	);
};

export default SingleDiscussion;
