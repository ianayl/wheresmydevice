import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import DeviceList from '../components/DeviceList';
import CurrentDevice from '../components/CurrentDevice';
import DataContextProvider from '../common/DataContext';

export default function Index() {
  return (
		<View style={styles.mainContainer}>
    <DataContextProvider>
      <Text>You are debil.</Text>
			<CurrentDevice />
			<DeviceList />
      <StatusBar style="auto" />
    </DataContextProvider>
		</View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
		width: '100%',
  },
});
