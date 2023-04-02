import React from 'react';

import styled from 'styled-components';

//npm i --save-dev @types/styled-components

export const h1 = styled.h1`
	width: 100%;
	height: 56px;
	text-align: center;
	line-height: 52px;
	background-color: var(--purple-500);
	color: var(--white);
	font-size: 24px;
	box-shadow: var(--shadow-card);
`;

const Header = () => {
	return (
		<div className="header">
			<h1>My Agora States</h1>
		</div>
	);
};

export default Header;