import React, { FC, Fragment, useState } from 'react';
//interfaces
import { StepperContent, StepperInterface } from '@/ts/interfaces/components/StepperInterface';
//components
import StepperHead from './StepperHead';
import StepperFooter from './StepperFooter';

const Stepper: FC<StepperInterface> = ({
  isRightToLeftLanguage,
  isVertical,
  isInline,
  stepperContent,
  submitStepper,
}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0),
    isLastStep = currentTabIndex === stepperContent.length - 1,
    isPrevBtn = currentTabIndex !== 0;

  const navigateToStepHandler = (index: number) => {
    if (index !== currentTabIndex) {
      setCurrentTabIndex(index);
    }
  };

  const nextStepHandler = () => {
    setCurrentTabIndex((prev) => {
      if (prev !== stepperContent.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const previousStepHandler = () => {
    setCurrentTabIndex((prev) => prev - 1);
  };

  const submitHandler = () => {
    submitStepper();
  };

  return (
    <div className="stepper-wrapper">
      <div style={{ display: isVertical ? 'flex' : 'block' }}>
        <StepperHead
          stepperContent={stepperContent}
          navigateToStepHandler={navigateToStepHandler}
          isVertical={isVertical}
          isInline={isInline}
          currentTabIndex={currentTabIndex}
          isRightToLeftLanguage={isRightToLeftLanguage}
        />
        <div className="stepper-body">
          {stepperContent.map((el: StepperContent, i: number) => (
            <Fragment key={i}>{i === currentTabIndex && el.content}</Fragment>
          ))}
        </div>
      </div>
      <StepperFooter
        isPrevBtn={isPrevBtn}
        previousStepHandler={previousStepHandler}
        isLastStep={isLastStep}
        nextStepHandler={nextStepHandler}
        submitHandler={submitHandler}
        stepperContent={stepperContent}
        currentTabIndex={currentTabIndex}
      />
    </div>
  );
};

export default Stepper;
