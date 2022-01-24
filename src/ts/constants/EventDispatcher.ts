//lodash
import { isEmpty } from 'lodash';
//constants
import { EventDictionary } from './Constants';
//interfaces
import { EventDispatcherInterface, EventsInterface } from '../interfaces/AppInterfaces';

//Dispatches Events (callbacks) coming form the parent site
export const EventDispatcher: EventDispatcherInterface = {};
export const Events: EventsInterface = {};
export const setEvents = (events: EventsInterface) => {
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
