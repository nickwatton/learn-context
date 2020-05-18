import React from 'react';
import SubBody from './SubBody';

const MainBody = () => {
	return(
		<div className='mainbody'>
			<p>This is <strong>mainBody</strong></p>
			<p>Context provider wraps this (in App.js), but isn't used or even referenced.<br />
			Rather the wrapping is to enable Context access by sub-components.</p>
			<SubBody />
		</div>
	)
}
export default MainBody;