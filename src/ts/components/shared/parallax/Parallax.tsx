import React, { FC, useCallback, useEffect, useRef } from 'react';
//styles
import classes from './Parallax.scss';
//interfaces
import { ParallaxInterface } from '../../../interfaces/components/ParallaxInterface';

const Parallax: FC<ParallaxInterface> = ({ parallaxSpeed, children, imageUrl }) => {
	const parallaxDiv = useRef<HTMLDivElement>(null);

	const onParallax = useCallback(() => {
		if (parallaxDiv.current) {
			const speed = parallaxSpeed ? parallaxSpeed : 3,
				windowScrollTop = window.pageYOffset || document.body.scrollTop,
				parallaxDivOffsetTop = parallaxDiv.current.offsetTop,
				parallaxDivHeight = parallaxDiv.current.offsetHeight,
				parallaxDivLimit = parallaxDivOffsetTop + parallaxDivHeight;

			if (windowScrollTop > parallaxDivOffsetTop && windowScrollTop <= parallaxDivLimit) {
				parallaxDiv.current.style.backgroundPosition =
					'50% ' + (windowScrollTop - parallaxDivOffsetTop) / speed + 'px';
			} else {
				parallaxDiv.current.style.backgroundPositionY = '50% 0';
			}
		}
	}, [parallaxSpeed]);

	useEffect(() => {
		// add the onParallax method on scroll
		window.addEventListener('scroll', onParallax);

		return () => {
			// remove the onParallax method
			window.removeEventListener('scroll', onParallax);
		};
	}, [onParallax]);

	return (
		<div
			className={classes.parallax}
			style={{
				backgroundImage: `url(${imageUrl ? imageUrl : 'https://picsum.photos/1280/500/?image=50'})`,
			}}
			ref={parallaxDiv}
		>
			{children}
		</div>
	);
};

export default Parallax;
