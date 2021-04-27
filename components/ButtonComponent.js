import React from 'react';
import { StyleSheet ,View,Text, TouchableOpacity } from 'react-native';

const ButtonComponent = ({ onPress, label }) => {
	return (
   <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text>{label}</Text>
      </TouchableOpacity>
    
	);
};

export default ButtonComponent;

const styles = StyleSheet.create({
	buttonStyle: {
	   marginTop:10,
    backgroundColor:"#03CA9B",
    paddingVertical:9,
    paddingHorizontal:25,
    borderRadius:3
	}
});
