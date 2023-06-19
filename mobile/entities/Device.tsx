export enum DeviceType {
	unknown = 0,
	server,
	phone,
	laptop,
	desktop,
};

export type Device = {
	id:           string,
	name:         string,
	type:         DeviceType,
	hasCellular:  boolean,
	hasGPS:       boolean,
	lastSeen?:    Date,
	lastBattery?: number,
};
