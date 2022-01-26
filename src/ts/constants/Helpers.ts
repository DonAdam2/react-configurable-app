import { MouseEvent, TouchEvent } from 'react';

export const updateObject = <T extends object, U extends object>(
	oldObject: T,
	UpdatedValues: U
) => ({
	...oldObject,
	...UpdatedValues,
});

export const isTouchEvent = (e: TouchEvent | MouseEvent): e is TouchEvent => e && 'touches' in e;

export const isMouseEvent = (e: TouchEvent | MouseEvent): e is MouseEvent => e && 'screenX' in e;
