import React, { FC, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
// styles
import classes from './Accordion.scss';
//interfaces
import { AccordionInterface } from '@/ts/interfaces/components/AccordionInterface';

const Accordion: FC<PropsWithChildren<AccordionInterface>> = ({
  label,
  accordionIcon,
  isAccordionOpen,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false),
    duration = 200,
    ref = useRef<HTMLDivElement>(null);

  const expandAccordion = useCallback(() => {
    const start = performance.now(),
      element = ref.current;

    requestAnimationFrame(function animate(time) {
      const runtime = time - start,
        relativeProgress = runtime / duration,
        process = Math.min(relativeProgress, 1);

      if (process < 1) {
        incrementHeight(process);
        requestAnimationFrame(animate);
      }

      if (process === 1 && element) {
        element.style.height = 'auto';
        element.style.overflow = 'initial';
      }
    });
  }, []);

  const collapseAccordion = useCallback(() => {
    const start = performance.now(),
      element = ref.current;

    requestAnimationFrame(function animate(time) {
      const runtime = time - start,
        relativeProgress = runtime / duration,
        process = Math.min(relativeProgress, 1);

      if (process < 1) {
        decrementHeight(process);
        requestAnimationFrame(animate);
      }
      if (process === 1 && element) {
        element.style.height = '';
        element.style.overflow = '';
      }
    });
  }, []);

  const toggleAccordion = useCallback(() => {
    const expanded = !isExpanded;

    if (expanded) {
      expandAccordion();
    } else {
      collapseAccordion();
    }
    setIsExpanded(expanded);
  }, [expandAccordion, collapseAccordion, isExpanded]);

  useEffect(() => {
    if (isAccordionOpen) {
      expandAccordion();
      setIsExpanded(true);
    }
  }, [isAccordionOpen, expandAccordion]);

  const incrementHeight = (progress: number) => {
    const element = ref.current;

    if (element) {
      const sectionHeight = progress * element.scrollHeight;
      element.style.height = `${sectionHeight}px`;
    }
  };

  const decrementHeight = (progress: number) => {
    const element = ref.current;

    if (element) {
      const sectionHeight = element.scrollHeight - progress * element.scrollHeight;

      element.style.height = `${
        sectionHeight > element.scrollHeight ? element.scrollHeight : sectionHeight
      }px`;
      element.style.overflow = 'hidden';
    }
  };

  return (
    <div
      className={`${classes.accordionWrapper} ${
        isExpanded ? classes.accordionExpanded : classes.accordionCollapsed
      }`}
    >
      <div className={classes.accordion}>
        <div className={classes.accordionHeader} onClick={toggleAccordion}>
          <span className={classes.accordionHeaderTitle}>{label}</span>
          <span className={classes.accordionHeaderIcon}>
            {accordionIcon ? (
              accordionIcon
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 512">
                <path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
              </svg>
            )}
          </span>
        </div>
        <div className={classes.accordionContent} ref={ref}>
          <div className={classes.accordionInnerContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
