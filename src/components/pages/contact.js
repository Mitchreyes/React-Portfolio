import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactPagePicture from '../../../static/assets/images/auth/login.jpg';

export default function() {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: 'url(' + contactPagePicture + ') no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			/>
			<div className="right-column">
				<div className="contact-bullet-points">
					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="phone" />
						</div>

						<div className="text">808-393-3569</div>
					</div>
				</div>

				<div className="contact-bullet-points">
					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="envelope" />
						</div>

						<div className="text">mitchreyes@gmail.com</div>
					</div>
				</div>

				<div className="contact-bullet-points">
					<div className="bullet-point-group">
						<div className="icon">
							<FontAwesomeIcon icon="map-marked-alt" />
						</div>

						<div className="text">Portland, OR</div>
					</div>
				</div>
			</div>
		</div>
	);
}
