import React, { FC } from 'react';
// styles
import classes from './HomePage.scss';
//components
import Parallax from '../../../components/shared/parallax/Parallax';

const HomePage: FC = (): JSX.Element => {
	return (
		<div className={classes.homeWrapper}>
			<Parallax imageUrl="https://picsum.photos/1280/500/?image=50" parallaxSpeed={3}>
				<div className={classes.content}>
					<h1>Speed (3)</h1>
				</div>
			</Parallax>
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
