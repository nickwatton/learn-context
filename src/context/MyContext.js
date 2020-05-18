import React, { useState, createContext } from 'react';

export const MyContext = createContext();

export const MyProvider = (props) => {
	
	const [values, setValues] = useState([
		{thing: 111},
		{thing: 222},
		{thing: 333}]
	);

	return (
		<MyContext.Provider value={[values, setValues]}>
			{props.children}
		</MyContext.Provider>
		)
	
};
