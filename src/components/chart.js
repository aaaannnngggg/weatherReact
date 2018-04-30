import React from 'react'; 
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average (data) {
	let sum = 0; 

	data.forEach((num) => (sum += num)); 
	return parseFloat(Math.round(sum / data.length * 100) / 100).toFixed(2);
	//return .toFixed(2); 
}

export default (props) => {
	return (
		<div> 
			<Sparklines data={props.data} svgHeight={120} svgWidth={180}>
				<SparklinesLine color = {props.color}/>
				<SparklinesReferenceLine type = 'avg'/>
			</Sparklines>
			<div>
				{average(props.data)}
			</div>
		</div> 

	); 
}