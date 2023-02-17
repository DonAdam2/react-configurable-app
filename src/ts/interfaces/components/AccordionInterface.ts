import { ReactNode } from 'react';

export interface AccordionInterface {
  label: ReactNode | string;
  accordionIcon?: ReactNode;
  isAccordionOpen?: boolean;
}
