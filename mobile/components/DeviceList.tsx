import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { DataContextType, DataContext } from '../common/DataContext'
import { formatLastSeenShort } from '../common/Utils'
import { Device } from '../entities/Device'

const DeviceList = () => {
	const { devices, currentDevice, reloadDevices } =
		React.useContext(DataContext) as DataContextType;

  return (
    <View style={styles.deviceListContainer}>
			<View style={styles.deviceListHeader}>
				<Text style={styles.deviceListTitle}>All Devices</Text>
				<Button title="refresh" onPress={reloadDevices}/>
			</View>
			{
				/* Don't include current device */
				devices.filter((d: Device) => d.id !== currentDevice)
								.map((d: Device) => (
								<View key={d.id} style={styles.deviceEntry}>
									<Text>{d.name}</Text>
									<View style={styles.deviceEntryStats}>
										<Text style={styles.deviceEntryStat}>
											Battery: {(!d.lastBattery) ? "n/a" : d.lastBattery + "%"}
										</Text>
										<Text style={styles.deviceEntryStat}>
											Last seen: {formatLastSeenShort(d.lastSeen)}
										</Text>
									</View>
								</View>
								))
			}
    </View>
  );
};

const styles = StyleSheet.create({
	deviceListContainer: {
		padding: '5px',
	},

	deviceListHeader: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	deviceListTitle: {
		fontSize: 20,
	},

	deviceEntry: {
		width: '100%',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: '10px'
	},

	deviceEntryStats: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},

	deviceEntryStat: {
		display: 'block',
		width: '100px',
	}
});

export default DeviceList;
