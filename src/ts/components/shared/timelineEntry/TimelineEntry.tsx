import React, { FC, PropsWithChildren } from 'react';
//interfaces
import { TimelineEntryInterface } from '@/ts/interfaces/components/TimelineEntryInterface';
//styles
import classes from './TimelineEntry.scss';
//components
import Accordion from '../accordion/Accordion';

const TimelineEntry: FC<PropsWithChildren<TimelineEntryInterface>> = ({
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
        name = classes.timelineStepMarkerGreen;
        break;
      case 'danger':
        name = classes.timelineStepMarkerRed;
        break;
      case 'primary':
        name = classes.timelineStepMarkerBlue;
        break;
      case 'warning':
        name = classes.timelineStepMarkerYellow;
        break;
      case 'default':
        name = classes.timelineStepMarkerGrey;
        break;
      default:
        name = '';
    }

    return name;
  };

  const renderHeader = () => (
    <div className={classes.timelineAccordionHeader}>
      <span>{label}</span>
      <span className={classes.timelineDate}>{createdAt}</span>
    </div>
  );

  return (
    <li className={classes.timelineEntry}>
      <div className={classes.timelineHeader}>
        <div className={`${classes.timelineStepMarker} ${getActivityLogColor()}`} />
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
