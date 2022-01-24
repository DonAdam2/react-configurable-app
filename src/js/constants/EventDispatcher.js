//lodash
import { isEmpty } from 'lodash';
//constants
import { EventDictionary } from './Constants';

//Dispatches Events (callbacks) coming form the parent site
export const EventDispatcher = {};
export const Events = {};
export const setEvents = (events) => {
	if (!isEmpty(events)) {
		EventDictionary.forEach((dictionaryEvent) => {
			if (events.hasOwnProperty(dictionaryEvent)) {
				Events[dictionaryEvent] = events[dictionaryEvent];
			}
		});
	}
};
EventDispatcher.trigger = (eventName, payload) => {
	if (Events[eventName] && typeof Events[eventName] === 'function') Events[eventName](payload);
};
