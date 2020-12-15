import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  TextInput,
  RadioButton,
  Text,
  IconButton,
  Colors,
} from 'react-native-paper';

const Phone = () => {
  return (
    <ScrollView 
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.main}>
      <View style={{width: '100%', height: '100%'}}>
        <View style={styles.top}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logoImage}
          />
          <Image
            source={require('../../assets/Passenger.png')}
            style={styles.infoImage}
          />
        </View>
        <View style={styles.bottom}>
          <TextInput
            style={styles.inputField}
            label="Phone"
            value=""
            onChangeText={() => {}}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              mode="contained"
              style={{
                backgroundColor: '#157EFB',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 6,
              }}
              onPress={() => {}}>
              <Text style={{fontSize: 20, color: 'white'}}>
                  Next</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:2}}>
        </View>
      </View>
    </ScrollView>
  );
};

export default Phone;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    flex: 3,
    width: 180,
    height: null,
    resizeMode: 'contain',
  },
  infoImage: {
    flex: 1,
    width: 80,
    resizeMode: 'contain',
  },
  bottom: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  inputField: {
    width: '80%',
    flex: 1,
    backgroundColor: '#fafafa',
    marginBottom: 20,
    marginTop: 100,
  },
  buttonContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'space-around',
  },
});
