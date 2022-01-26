import React, { FC } from 'react';
import { format, addDays } from 'date-fns';
//component
import Timeline from '../../../components/shared/timeline/Timeline';

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
	return <Timeline list={list} />;
};

export default TimelinePage;
