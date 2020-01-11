import React, { Component } from 'react';
import profilePicture from '../../../static/assets/images/bio/catmitch.jpg';

export default function() {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: 'url(' + profilePicture + ') no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			/>
			<div className="right-column">
				Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
				Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
				Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
				Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
			</div>
		</div>
	);
}
