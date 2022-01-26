//interfaces
import { AccordionInterface } from './AccordionInterface';

export interface TimelineEntryInterface extends AccordionInterface {
	createdAt: string;
	status: string;
}
