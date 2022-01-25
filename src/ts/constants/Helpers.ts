export const updateObject = <T extends object, U extends object>(
	oldObject: T,
	UpdatedValues: U
) => ({
	...oldObject,
	...UpdatedValues,
});
