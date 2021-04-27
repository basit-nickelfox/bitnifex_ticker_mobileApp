import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataContainer from './DataContainer';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import createSocket from '../socket/webSocket';
import ButtonComponent from './ButtonComponent';

const Ticker = () => {
  const [buttonLabel, setButtonLabel] = useState('Stop');
  const response = useSelector(state => state.bitnifex_data.data);
  
	const socketRef = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (buttonLabel === 'Stop') {
			createSocket(socketRef, dispatch, buttonLabel);
		} else {
			socketRef.current.close();
		}
	}, [socketRef, dispatch, buttonLabel]);

	const handleClick = () => {
		setButtonLabel(buttonLabel === 'Stop' ? 'Start' : 'Stop');
	};

	if (!response) return <Text>Loading...</Text>;
	if (response === 'error') return <Text>Error</Text>;

	return (
    <>
		<View style={styles.parent}>
			<View style={styles.container}>
				<Logo />
			</View>
			<DataContainer response={response}/>
		</View>
     <ButtonComponent label={buttonLabel} onPress={handleClick}/>
     </>
	);
};

export default Ticker;

const styles = StyleSheet.create({
	parent: {
		width: '90%',
		backgroundColor: '#1B262D',
		flex: 0.2,
		flexDirection: 'row'
	},
	container: {
		flexDirection: 'column',
		flex: 1
	}
});
