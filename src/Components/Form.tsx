import React, { useState } from 'react';

import { Discussion } from '../TypeDiscussion';

type FormSubmitProps = {
    handleSubmitClick: (todoText: Discussion) => void 
  };

const Form: React.FC<FormSubmitProps> = props => {
	const [username, setUsername] = useState("");
	const [userTitle, setUserTitle] = useState("");
	const [msg, setMsg] = useState("");

	//새로운 discussion의 이름 저장
	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};
	//새로운 discussion의 제목 저장
	const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserTitle(event.target.value);
	};
	//새로운 discussion의 내용 저장
	const handleChangeMsg = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMsg(event.target.value);
	};
	//새로운 discussion의 form을 저장해서 App.tsx의 handleSubmitClick으로 전달인자를 보낸다.
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.handleSubmitClick({
			id: Math.random().toString(),
      		createdAt: new Date().toString(),
      		title: userTitle,
      		url: "https://github.com/codestates-seb/agora-states-fe/discussions/",
      		author: username,
			bodyHTML: msg,
	  		avatarUrl: "https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDJfMjg0/MDAxNjI1MjM3MDEwMDEx.16ZkPZkXZmj6MQyJIpZlTidJmYGFnehv2QoiaIWVHAsg.louS2WVp9f5dzxMHdh1MdS-3bZgOIm68sJhcToobTPAg.JPEG.yyabbj/IMG_3332.JPG?type=w800",
		});
	};
	return (
		<section className="form__container">
			<h2>질문하기</h2>
			<form action="" method="get" className="form" onSubmit={handleSubmit}>
				<div className="form__input--wrapper">
					<div className="form__input--name">
						<label htmlFor="name">Enter your name: </label>
						<input
							type="text"
							name="name"
							id="name"
							value={username}
							onChange={handleChangeName}
							required
						/>
					</div>
					<div className="form__input--title">
						<label htmlFor="name">Enter your title: </label>
						<input
							type="text"
							name="title"
							id="title"
							value={userTitle}
							onChange={handleChangeTitle}
							required
						/>
					</div>
					<div className="form__textbox">
						<label htmlFor="story">Your question: </label>
						<textarea
							id="story"
							name="story"
							placeholder="질문을 작성하세요"
							value={msg}
							onChange={handleChangeMsg}
							required
						></textarea>
					</div>
				</div>
				<div className="form__submit">
					<button type="submit">질문 등록하기</button>
				</div>
			</form>
		</section>
	);
};

export default Form;