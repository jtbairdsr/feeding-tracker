import * as mongoose from 'mongoose';

// Mongoose Model the typescript way
// create interface to specift the type
interface IFeeding extends mongoose.Document {
	goalVolume: number;        //  mL
	iron: boolean;
	thickening: boolean;
	oral?: {
		startTime: Date;
		endTime?: Date;
		volume?: number;       //  mL
	};
	gavage?: {
		startVolume: number;   //  mL
		endVolume?: number;    //  mL
		rate: number;          //  mL/hr
		neededVolume: number;  //  mL
	};
	prune: {
		administered: boolean;
		volume?: number;       //  mL
	};
}

let OralSchema: mongoose.Schema = new mongoose.Schema({
	startTime: {
		type: Date,
		required: 'An oral feeding can\'t be saved without a startTime',
		default: Date.now
	},
	endTime: Date,
	volume: Number
});

let GavageSchema: mongoose.Schema = new mongoose.Schema({
	startVolume: {
		type: Number,
		required: 'A gavage feeding can\'t be saved without a startVolume'
	},
	endVolume: Number,
	rate: {
		type: Number,
		required: 'A gavage feeding can\'t be saved without a rate'
	},
	neededVolume: {
		type: Number,
		required: 'A gavage feeding can\'t be saved without a neededVolume'
	},
});

let PruneSchema: mongoose.Schema = new mongoose.Schema({
	administered: Boolean,
	volume: Number
});

// Mongoose schema like usual
let FeedingSchema: mongoose.Schema = new mongoose.Schema({
	goalVolume: {
		type: Number,
		required: 'A feeding needs a goalVolume'
	},
	iron: Boolean,
	thickening: Boolean,
	oral: OralSchema,
	gavage: GavageSchema,
	prune: PruneSchema
});

// export default using es6 to import in other files
export default mongoose.model < IFeeding > ('Feeding', FeedingSchema, null, null);
