import { ReactNode } from 'react';
//interfaces
import { AccordionInterface } from './AccordionInterface';

export interface TimelineEntryInterface extends AccordionInterface {
  createdAt: string;
  status: string;
  content?: ReactNode;
}

export interface TimelineInterface {
  list: TimelineEntryInterface[];
}
