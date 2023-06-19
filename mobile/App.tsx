import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Device, DeviceType } from './entities/Device'
import { getDevices } from './common/Api'
import DeviceList from './components/DeviceList'

export default function App() {
	const [devices, setDevices] = useState<Device[]>([
		{ 
			id: "smthbroke",
			name: "qutebrowser shill",
			type: DeviceType.phone,
			hasCellular: false,
			hasGPS: false,
			lastSeen: new Date(2022,1),
			lastBattery: 69,
		}, 
	]);

	useEffect(() => {
    reloadDeviceList();
  }, []);

	const reloadDeviceList = () => {
		console.log("reload triggered");
		getDevices().then(res => setDevices(res));
	};

  return (
    <View style={styles.container}>
      <Text>You are debil.</Text>
			<DeviceList devices={devices}/>
			<Button onPress={reloadDeviceList}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
