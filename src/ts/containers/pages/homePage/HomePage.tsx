import React from 'react';
import { useSelector } from 'react-redux';
// styles
import classes from './HomePage.scss';
//interfaces
import { State } from '../../../store/rootReducer';
//selectors
import { getAppConfig } from '../../../store/app/selectors/AppSelectors';
//components
import Parallax from '../../../components/shared/parallax/Parallax';
import PageProgressBar from '../../../components/shared/pageProgressBar/PageProgressBar';

const HomePage = () => {
	const { theme, views } = useSelector((state: State) => getAppConfig(state));

	return (
		<div className={classes.homeWrapper}>
			{views?.homePage?.progressBar?.show && (
				<PageProgressBar
					backgroundColor={theme?.palette?.success?.main}
					height={views?.homePage.progressBar.height}
				/>
			)}
			{views?.homePage?.parallax?.show && (
				<Parallax
					imageUrl={views?.homePage?.parallax?.imageUrl}
					parallaxSpeed={views?.homePage?.parallax?.speed}
				>
					<div className={classes.content}>
						<h1>Speed ({views?.homePage?.parallax?.speed})</h1>
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
