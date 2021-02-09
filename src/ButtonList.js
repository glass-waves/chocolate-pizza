import React from 'react';

export default class ButtonList extends React.Component {
	render() {
		return (
			<div>
				{ this.props.buttons.map(
					button =>
						<a href={button.href}><img src={button.image} alt="social-media link" /></a>
				)}
			</div>
		)
	}
}
