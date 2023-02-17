import React, { FC } from 'react';
//styles
import classes from './Timeline.scss';
import TimelineEntry from '../timelineEntry/TimelineEntry';
import { TimelineInterface } from '@/ts/interfaces/components/TimelineEntryInterface';

const Timeline: FC<TimelineInterface> = ({ list }) => (
  <div className={classes.timelineWrapper}>
    <ul className={classes.timeline}>
      {list.map((el, i) => (
        <TimelineEntry
          key={i}
          label={el.label}
          isAccordionOpen={el.isAccordionOpen}
          accordionIcon={el.accordionIcon}
          createdAt={el.createdAt}
          status={el.status}
        >
          {el.content}
        </TimelineEntry>
      ))}
    </ul>
  </div>
);

export default Timeline;
