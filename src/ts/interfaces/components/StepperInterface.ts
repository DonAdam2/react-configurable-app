import { ReactNode } from 'react';

export interface StepInterface {
  indicator: number | ReactNode;
  label: string;
  navigateToStepHandler: (index: number) => void;
  index: number;
  isActive?: boolean;
  isComplete?: boolean;
  isWarning?: boolean;
  isError?: boolean;
  isRightToLeftLanguage?: boolean;
}

export type StepperContent = {
  label: string;
  content: ReactNode;
  clicked?: () => void;
  isWarning?: boolean;
  isError?: boolean;
  isComplete?: boolean;
  isLoading?: boolean;
};

export interface StepperHeadInterface {
  stepperContent: StepperContent[];
  navigateToStepHandler: (index: number) => void;
  currentTabIndex: number;
  isInline?: boolean;
  isVertical?: boolean;
  isRightToLeftLanguage?: boolean;
}

export interface StepperFooterInterface {
  isPrevBtn: boolean;
  previousStepHandler: () => void;
  isLastStep: boolean;
  nextStepHandler: () => void;
  submitHandler: () => void;
  currentTabIndex: number;
  stepperContent: StepperContent[];
}

export interface StepperInterface {
  stepperContent: StepperContent[];
  submitStepper: () => void;
  isInline?: boolean;
  isVertical?: boolean;
  isRightToLeftLanguage?: boolean;
}
