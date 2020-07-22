import React from 'react';


function Searchbox({Searchfield, searchChange}){
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-ligthest-blue' 
				type =' search' 
				placeholder ='search robots'
				onChange={searchChange}
			/>
		</div>
	);
}

export default Searchbox;