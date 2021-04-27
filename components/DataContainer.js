import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DataContainer = ({response}) => {
	return (
		<>
			<View style={styles.container1}>
				<View style={styles.innerContainer}>
					<Text style={[styles.text, styles.bigFont]}>BTC/USD</Text>
				</View>
				<View style={styles.innerContainer}>
					<Text style={styles.text}>VOL {parseInt(response[7]) * parseInt(response[6])} USD</Text>
				</View>
				<View style={styles.innerContainer}>
					<Text style={styles.text}>LOW {parseInt(response[9])}</Text>
				</View>
			</View>
			<View style={styles.container2}>
				<View style={styles.innerContainer}>
					<Text style={[styles.text, styles.bigFont]}>{response[0]}</Text>
				</View>
				<View style={styles.innerContainer}>
					<Text style={[styles.text, styles.changeColor]}>
          {parseFloat(response[4]).toFixed(2)}{' '} 	({((response[5] / 100) * 10000).toFixed(2)}%)
					</Text>
				</View>
				<View style={styles.innerContainer}>
					<Text style={styles.text}>HIGH  {parseInt(response[8])}</Text>
				</View>
			</View>
		</>
	);
};

export default DataContainer;

const styles = StyleSheet.create({
	text: {
		color: 'white'
	},
	container1: {
		flexDirection: 'column',
		flex: 1,
		alignItems: 'flex-start',
		paddingLeft: 10
	},
	container2: {
		paddingRight: 10,
		flexDirection: 'column',
		flex: 1,
		alignItems: 'flex-end'
	},
	innerContainer: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bigFont: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	changeColor: {
		color: '#03CA9B'
	}
});
