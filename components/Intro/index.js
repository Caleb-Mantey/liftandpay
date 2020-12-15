import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

class Intro extends Component {
  render() {
    return (
      <>
       <StatusBar translucent backgroundColor="transparent"/>
        <Image
          source={require('../../assets/background.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.container}>
          <View>
            <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
              {' '}
              Welcome to LiftnPay{' '}
            </Text>
          </View>
          <View style={styles.col2}>
            <Text style={{fontSize: 18, textAlign: 'center', color: 'white',fontWeight: '800'}}>
              Save more on fuel and income by sharing a ride with someone with
              the same or similar route
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('Signin')}>
          </TouchableOpacity>
          <Text style={styles.btnText}>Get Started</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 140
  },
  col2: {
    width: 240,
    alignItems: 'center',
    paddingTop: 16,
  },
  footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 60,
    paddingHorizontal: 40
  },
  button: {
    flex: 1,
    width: '100%',
    height: 80,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 45,
    left: '12%',
    borderRadius: 10,
    opacity: .15,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    backgroundColor: 'black',
  },
  btnText:{
      color: 'white', 
      fontSize: 20,
      textAlign:'center',
      fontWeight: '600'
    }
});

export default Intro;
