import React from 'react';
//styles
import classes from './LoadingIcon.scss';

const LoadingIcon = () => (
	<div className={classes.loaderWrapper}>
		<div className={classes.ldsRing}>
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
);

export default LoadingIcon;
