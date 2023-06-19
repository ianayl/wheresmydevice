const config = require('../config.json');
import { Device, DeviceType } from '../entities/Device'

export const getDevices = async (): Promise<Device[]> => {
	try {
		const res = await fetch(`${config.api.url}:${config.api.port}/devices`);
		if (!res.ok) throw new Error(`Response ${res.status}`);
		const data = await res.json<Device[]>();
		return data.map(dev => {
			if (!!dev.lastSeen) {
				dev.lastSeen = new Date(dev.lastSeen);
				return dev;
			} else return dev;
		});

	} catch (err: Error) {
		alert(err.toString());
		// TODO don't do this dingus
		return [{ 
				id: "smthbroke",
				name: err.toString(),
				type: DeviceType.phone,
				hasCellular: false,
				hasGPS: false,
				lastSeen: new Date(2022,1),
				lastBattery: 69,
		}];
	}
}
