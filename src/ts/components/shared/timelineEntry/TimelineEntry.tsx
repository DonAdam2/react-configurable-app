import React, { FC } from 'react';
//components
import Accordion from '../accordion/Accordion';
//interfaces
import { TimelineEntryInterface } from '../../../interfaces/components/TimelineEntryInterface';

const TimelineEntry: FC<TimelineEntryInterface> = ({
	children,
	label,
	isAccordionOpen,
	accordionIcon,
	createdAt,
	status,
}) => {
	const getActivityLogColor = () => {
		let name = '';

		switch (status) {
			case 'success':
				name = 'green';
				break;
			case 'danger':
				name = 'red';
				break;
			case 'primary':
				name = 'blue';
				break;
			case 'warning':
				name = 'yellow';
				break;
			case 'default':
				name = 'grey';
				break;
			default:
				name = '';
		}

		return name;
	};

	const renderHeader = () => (
		<div className="timeline-accordion-header">
			<span>{label}</span>
			<span className="timeline-date">{createdAt}</span>
		</div>
	);

	return (
		<li className="timeline-entry">
			<div className="timeline-header">
				<div className={`timeline-step-marker timeline-step-marker--${getActivityLogColor()}`} />
				<Accordion
					isAccordionOpen={isAccordionOpen}
					accordionIcon={accordionIcon}
					label={renderHeader()}
				>
					{children}
				</Accordion>
			</div>
		</li>
	);
};

export default TimelineEntry;
