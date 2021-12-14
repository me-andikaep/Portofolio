import React from 'react';
import propTypes from 'prop-types';
import 'splashscreen.scss';

const Splashscreen = ({ children, text }) => {
	return <div className='container-splashscreen'>{children}</div>;
};

Splashscreen.propTypes = {
	text: propTypes.string,
};

export default Splashscreen;
