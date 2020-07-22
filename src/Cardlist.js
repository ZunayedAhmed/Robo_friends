import React from 'react';
import Card from './Card';


function Cardlist ({Robots})  {


	const CardComponent = Robots.map((user,i) =>{
		return (<Card 
			Key={i} 
			id={Robots[i].id} 
			name={Robots[i].name} 
			email={Robots[i].email} 
			/>
		);	
	})
	return(
		<div>  
    		{CardComponent}
    	</div>
	);

}

export default Cardlist;