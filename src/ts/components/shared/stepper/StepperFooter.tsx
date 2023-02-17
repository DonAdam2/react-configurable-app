import React, { FC } from 'react';
//interfaces
import { StepperFooterInterface } from '@/ts/interfaces/components/StepperInterface';

const StepperFooter: FC<StepperFooterInterface> = ({
  isPrevBtn,
  previousStepHandler,
  isLastStep,
  nextStepHandler,
  submitHandler,
  stepperContent,
  currentTabIndex,
}) => {
  const submitCurrentStep = async () => {
    await stepperContent[currentTabIndex].clicked?.();
    nextStepHandler();
  };

  return (
    <div
      className="stepper-footer"
      style={{ justifyContent: isPrevBtn ? 'space-between' : 'flex-end' }}
    >
      {isPrevBtn && (
        <button className="stepper-footer-btn" onClick={previousStepHandler}>
          Back to {stepperContent[currentTabIndex - 1].label}
        </button>
      )}
      <button
        className={`stepper-footer-btn ${isLastStep ? 'success' : 'primary'}`}
        onClick={
          isLastStep
            ? submitHandler
            : stepperContent[currentTabIndex].clicked
            ? submitCurrentStep
            : nextStepHandler
        }
        disabled={
          (isLastStep
            ? stepperContent.some((el) => !el.isComplete)
            : !stepperContent[currentTabIndex].isComplete) ||
          stepperContent[currentTabIndex].isLoading
        }
      >
        {isLastStep ? 'Submit' : `Continue to ${stepperContent[currentTabIndex + 1].label}`}
      </button>
    </div>
  );
};

export default StepperFooter;
