import React, { useState } from 'react';

type FormSubmitProps = {
    handleSubmitClick: (todoText: object) => void 
  };

const Form: React.FC<FormSubmitProps> = props => {
	const [username, setUsername] = useState("");
	const [userTitle, setUserTitle] = useState("");
	const [msg, setMsg] = useState("");
	const handleChangeName = (event: any) => {
		setUsername(event.target.value);
	};
	const handleChangeTitle = (event: any) => {
		setUserTitle(event.target.value);
	};
	const handleChangeMsg = (event: any) => {
		setMsg(event.target.value);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.handleSubmitClick({
			id: Math.random().toString(),
      		createdAt: `${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()}`,
      		title: userTitle,
      		url: "https://github.com/codestates-seb/agora-states-fe/discussions/",
      		author: username,
	  		avatarUrl: "https://mblogthumb-phinf.pstatic.net/MjAyMTA3MDJfMjg0/MDAxNjI1MjM3MDEwMDEx.16ZkPZkXZmj6MQyJIpZlTidJmYGFnehv2QoiaIWVHAsg.louS2WVp9f5dzxMHdh1MdS-3bZgOIm68sJhcToobTPAg.JPEG.yyabbj/IMG_3332.JPG?type=w800",
		});
	};
	return (
		<section className="form__container">
			<h2>New discussions</h2>
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
					<button type = "submit">SUBMIT</button>
				</div>
			</form>
		</section>
	);
};

export default Form;