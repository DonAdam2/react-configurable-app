import React, { FC } from 'react';
//components
import Step from './Step';
//interfaces
import { StepperHeadInterface } from '../../../interfaces/components/StepperInterface';

const StepperHead: FC<StepperHeadInterface> = ({
	stepperContent,
	navigateToStepHandler,
	isVertical,
	isInline,
	isRightToLeftLanguage,
	currentTabIndex,
}) => (
	<div
		className={`stepper-head ${isVertical ? 'vertical-stepper-head' : ''} ${
			isInline ? 'inline-stepper-head' : ''
		}`}
	>
		{stepperContent.map((el, i) => (
			<Step
				key={i}
				index={i}
				navigateToStepHandler={navigateToStepHandler}
				isActive={i === currentTabIndex}
				isComplete={el.isComplete}
				isWarning={el.isWarning}
				isError={el.isError}
				isRightToLeftLanguage={isRightToLeftLanguage}
				indicator={i + 1}
				label={el.label}
			/>
		))}
	</div>
);

export default StepperHead;
