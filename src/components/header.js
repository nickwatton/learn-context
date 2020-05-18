import React from 'react';

const header = () => {
	return (
		<header>
			<h1>Header</h1>
			<p>Not wrapped by Context provider (in App.js), so doesn't have access to it.</p>
		</header>
	)
}

export default header;