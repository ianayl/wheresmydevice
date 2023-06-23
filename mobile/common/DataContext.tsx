import * as React from 'react';

import { Device } from '../entities/Device';
import * as Api from '../common/Api'

export type DataContextType = {
	devices: Devices[];
	currentDevice: string;
	reloadDevices: () => void;
}

export const DataContext =
	React.createContext<DataContextType | undefined>(undefined);

const DataContextProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [devices, setDevices] = React.useState<Devices[]>([]);
	const [currentDevice, setCurrentDevice] = React.useState<string>("cum");

	const reloadDevices = (): void => {
		console.log("Devices reload triggered");
		Api.getDevices().then(res => setDevices(res));
	}

	React.useEffect(() => {
		reloadDevices();
		// TODO production values, use secure store
		setCurrentDevice("XYZ420A");
	}, []);

	return (
		<DataContext.Provider value={{ devices, currentDevice, reloadDevices }}>
			{ children }
		</DataContext.Provider>
	);
}

export default DataContextProvider;
