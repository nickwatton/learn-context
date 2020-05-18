import React, {useContext} from 'react';
import {MyContext} from '../context/MyContext';

const SubBody = () => {

	const [values, setValues] = useContext(MyContext);
	const contextValue = <p>This is a <strong>SubBody</strong> with useContext value: {values.map(v => `${v.thing}, `)}</p>;

	return(
		<div className='subbody'>
			{contextValue}
			<p>Note that this only worked when the component name started UPPERCASE</p>
		</div>
	)
}

export default SubBody;