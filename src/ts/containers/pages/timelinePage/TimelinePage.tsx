import React, { FC } from 'react';
import { format, addDays } from 'date-fns';
//component
import Timeline from '../../../components/shared/timeline/Timeline';
import { viewsController } from '../../../constants/Constants';

const TimelinePage: FC = (): JSX.Element => {
	const addOneDayToDate = (num: number) => format(addDays(new Date(), num), 'd MMMM yyy'),
		list = [
			{
				label: 'Success',
				createdAt: format(new Date(), 'd MMMM yyy'),
				status: 'success',
				content: <p>content of the current timeline entry</p>,
			},
			{
				label: 'Primary',
				createdAt: addOneDayToDate(1),
				status: 'primary',
				content: <p>content of the current timeline entry</p>,
			},
			{
				label: 'Warning',
				createdAt: addOneDayToDate(2),
				status: 'warning',
				content: <p>content of the current timeline entry</p>,
			},
			{
				label: 'Default',
				createdAt: addOneDayToDate(3),
				status: 'default',
				content: <p>content of the current timeline entry</p>,
			},
			{
				label: 'Danger',
				createdAt: addOneDayToDate(4),
				status: 'danger',
				content: <p>content of the current timeline entry</p>,
			},
		];
	return (
		<>
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
			{viewsController.timelinePage?.timeLine?.show && <Timeline list={list} />}
		</>
	);
};

export default TimelinePage;
