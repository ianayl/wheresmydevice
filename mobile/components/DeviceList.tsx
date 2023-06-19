import { StyleSheet, Text, View } from 'react-native';
import { Device, DeviceType } from '../entities/Device'

type DeviceListProps = {
	devices: Device[],
};

const DeviceList = ({ devices }: DeviceListProps) => {
  return (
    <View>
			{ devices.map((d: Device) => (
				<View>
					<Text>{d.name}</Text>
					<Text>{d.lastBattery}%</Text>
					<Text>5 min</Text>
				</View>
			)) }
    </View>
  );
};

export default DeviceList;

const styles = StyleSheet.create({
});
