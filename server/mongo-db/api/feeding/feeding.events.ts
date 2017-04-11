/**
 * Feeding model events
 */
import Feeding from './feeding.model';

let EventEmitter = require('events').EventEmitter;
let FeedingEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FeedingEvents.setMaxListeners(0);

// Model events
let events = {
	'save': 'save',
	'remove': 'remove'
};

// Register the event emitter to the model events
for (let e in events) {
	let event = events[e];
	Feeding.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
	return function (doc) {
		FeedingEvents.emit(event + ':' + doc._id, doc);
		FeedingEvents.emit(event, doc);
	};
}

export default FeedingEvents;