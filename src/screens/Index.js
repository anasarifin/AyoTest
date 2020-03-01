// Library
import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Styles
import font from './Fonts';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          height: '100%',
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[font.Aquawax, {fontSize: 65, color: '#060709'}]}>
          ayo<Text style={{color: '#0FB63F'}}>test</Text>.
        </Text>
      </View>
    );
  }
}
