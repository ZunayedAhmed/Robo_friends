import React from 'react';
//import './Hello.css';

function Card({name,email,id}) {

	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
			<img alt='robots' src={`https://robohash.org/${id}100x100`} />
				<div>
					<h1> {name} </h1>
		 			<p> {email}</p>
				</div>
		</div>
	)

}

export default Card;