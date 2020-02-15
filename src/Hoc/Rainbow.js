import React from 'react'

const Rainbow = (WrappedComponent) => {
	const colours = ['red', 'pink', 'orange', 'blue', 'yellow', 'green'];
	const randomColour = colours[Math.floor(Math.random()*6)];
	const className = randomColour + '-text';

	return (props) => (
		<div className = {className}>
			<WrappedComponent {...props} />
		</div>
	)

}

export default Rainbow