import React, {useContext} from 'react';
import {MyContext} from '../context/MyContext';

const SubBody = () => {
	const [values] = useContext(MyContext);
	const contextValue = <p>This is a <strong>SubBody</strong> with useContext value: {values.map(v => `${v.thing}, `)}</p>;

	return(
		<div className='subbody'>
			{contextValue}
			<p>Note that this only works when the component name starts with UPPERCASE character.</p>
		</div>
	)
}

export default SubBody;