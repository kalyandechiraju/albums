// Import libraries for building the component
import React from 'react';
import { Text, View } from 'react-native';

// Build the component
const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 18
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    position: 'relative'
  }
};

// Make the component available for the rest of the app
export default Header;
