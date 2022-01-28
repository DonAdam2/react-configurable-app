import React, { FC, useCallback, useEffect, useState } from 'react';
//interfaces
import { PageProgressBarInterface } from '../../../interfaces/components/PageProgressBarInterface';
//styles
import classes from './PageProgressBar.scss';

const PageProgressBar: FC<PageProgressBarInterface> = ({ backgroundColor, height }) => {
	const [width, setWidth] = useState(0);

	const showHideScroll = useCallback(() => {
		//scrollTop: is the number of pixels scrolled
		//scrollHeight: is the minimum height required to fit in all its children
		//clientHeight: is the inner height of the element
		const scrolledPercentage =
			(scrollContainer().scrollTop /
				(scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
			100;

		if (!isNaN(scrolledPercentage)) {
			setWidth(scrolledPercentage);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', showHideScroll);
		window.addEventListener('load', showHideScroll);

		return () => {
			window.removeEventListener('scroll', showHideScroll);
		};
	}, [showHideScroll]);

	const scrollContainer = () => document.documentElement || document.body;

	return (
		<div
			className={classes.progressBar}
			style={{
				width: `${width}%`,
				backgroundColor: backgroundColor ? backgroundColor : '#dc3545',
				height: height ? height : '1rem',
			}}
		/>
	);
};

export default PageProgressBar;
