import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { DataContextType, DataContext } from '../common/DataContext'
import { formatLastSeenShort } from '../common/Utils'
import { Device, DeviceType } from '../entities/Device'

const CurrentDevice = () => {
	const { devices, currentDevice } = React.useContext(DataContext) as DataContextType;
	
	const DisplayCurrentDevice = (): React.FC<React.ReactNode> => {
		const current: Device = devices.find((d: Device) => d.id === currentDevice);
		if (current === undefined) return (
			<View> 
				<Text>Device ({currentDevice}) not found!</Text>
			</View>
		); 
		else return (
			<View>
				<Text>{current.name}</Text>
				<Text>{current.id}</Text>
				<Text>{current.type}</Text>
				<Text>{current.hasCellular}</Text>
				<Text>{current.hasGPS}</Text>
			</View>
		);
	} 

  return (
    <View style={styles.currentDeviceContainer}>
			<View style={styles.currentDeviceHeader}>
				<Text style={styles.currentDeviceTitle}>This Device</Text>
			</View>
			<DisplayCurrentDevice />
    </View>
  );
};

const styles = StyleSheet.create({
	currentDeviceContainer: {
		padding: '5px',
	},

	currentDeviceHeader: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	currentDeviceTitle: {
		fontSize: 20,
	},
});

export default CurrentDevice;
