import React from 'react';
// styles
import classes from './HomePage.scss';
//components
import Parallax from '../../../components/shared/parallax/Parallax';
import PageProgressBar from '../../../components/shared/pageProgressBar/PageProgressBar';
import { themeOptions, viewsController } from '../../../constants/Constants';

const HomePage = () => {
	const { homePage } = viewsController;
	return (
		<div className={classes.homeWrapper}>
			{homePage?.progressBar?.show && (
				<PageProgressBar
					backgroundColor={themeOptions.palette.success.main}
					height={homePage.progressBar.height}
				/>
			)}
			{homePage?.parallax?.show && (
				<Parallax
					imageUrl={
						homePage.parallax.imageUrl
							? homePage.parallax.imageUrl
							: 'https://picsum.photos/1280/500/?image=50'
					}
					parallaxSpeed={homePage.parallax.speed ? homePage.parallax.speed : 3}
				>
					<div className={classes.content}>
						<h1>Speed ({homePage.parallax.speed})</h1>
					</div>
				</Parallax>
			)}
			<p>
				Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec
				pellentesque velit pede quis nunc. Etiam vitae tortor. Etiam ultricies nisi vel augue. Sed
				mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a
				orci. Sed in libero ut nibh placerat accumsan.
			</p>

			<p>
				Phasellus tempus. Donec sodales sagittis magna. Phasellus dolor. Aenean ut eros et nisl
				sagittis vestibulum. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
				sollicitudin urna dolor sagittis lacus.
			</p>

			<p>
				Vestibulum eu odio. Fusce fermentum. Praesent ut ligula non mi varius sagittis. Vestibulum
				volutpat pretium libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
				nisi.
			</p>
			<p>
				Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec
				pellentesque velit pede quis nunc. Etiam vitae tortor. Etiam ultricies nisi vel augue. Sed
				mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a
				orci. Sed in libero ut nibh placerat accumsan.
			</p>

			<p>
				Phasellus tempus. Donec sodales sagittis magna. Phasellus dolor. Aenean ut eros et nisl
				sagittis vestibulum. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
				sollicitudin urna dolor sagittis lacus.
			</p>

			<p>
				Vestibulum eu odio. Fusce fermentum. Praesent ut ligula non mi varius sagittis. Vestibulum
				volutpat pretium libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
				nisi.
			</p>
			<p>
				Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec
				pellentesque velit pede quis nunc. Etiam vitae tortor. Etiam ultricies nisi vel augue. Sed
				mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a
				orci. Sed in libero ut nibh placerat accumsan.
			</p>

			<p>
				Phasellus tempus. Donec sodales sagittis magna. Phasellus dolor. Aenean ut eros et nisl
				sagittis vestibulum. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
				sollicitudin urna dolor sagittis lacus.
			</p>

			<p>
				Vestibulum eu odio. Fusce fermentum. Praesent ut ligula non mi varius sagittis. Vestibulum
				volutpat pretium libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
				nisi.
			</p>
			<p>
				Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec
				pellentesque velit pede quis nunc. Etiam vitae tortor. Etiam ultricies nisi vel augue. Sed
				mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a
				orci. Sed in libero ut nibh placerat accumsan.
			</p>

			<p>
				Phasellus tempus. Donec sodales sagittis magna. Phasellus dolor. Aenean ut eros et nisl
				sagittis vestibulum. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
				sollicitudin urna dolor sagittis lacus.
			</p>

			<p>
				Vestibulum eu odio. Fusce fermentum. Praesent ut ligula non mi varius sagittis. Vestibulum
				volutpat pretium libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
				nisi.
			</p>
			<p>
				Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec
				pellentesque velit pede quis nunc. Etiam vitae tortor. Etiam ultricies nisi vel augue. Sed
				mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a
				orci. Sed in libero ut nibh placerat accumsan.
			</p>

			<p>
				Phasellus tempus. Donec sodales sagittis magna. Phasellus dolor. Aenean ut eros et nisl
				sagittis vestibulum. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
				sollicitudin urna dolor sagittis lacus.
			</p>

			<p>
				Vestibulum eu odio. Fusce fermentum. Praesent ut ligula non mi varius sagittis. Vestibulum
				volutpat pretium libero. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
				nisi.
			</p>
		</div>
	);
};

export default HomePage;
