import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Text, IconButton, Colors} from 'react-native-paper';

const PasswordReset = props => {
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, sethidePassword] = useState(true);
  const [hidePasswordConfirm, sethidePasswordConfirm] = useState(true);

  const navigation = props.navigation;

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
          <View style={styles.passwordView}>
            <TextInput
              style={styles.passwordInput}
              label="Password"
              value={password}
              secureTextEntry={hidePassword}
              onChangeText={val => {
                setPassword(val);
              }}
            />
            <IconButton
              icon={hidePassword ? 'eye' : 'eye-off'}
              color={Colors.grey500}
              size={20}
              style={styles.passwordIcon}
              onPress={() => sethidePassword(!hidePassword)}
            />
          </View>
          <View style={styles.passwordView}>
            <TextInput
              style={styles.passwordInput}
              label="Confirm Password"
              value={passwordConfirm}
              secureTextEntry={hidePasswordConfirm}
              onChangeText={val => {
                setpasswordConfirm(val);
              }}
            />
            <IconButton
              icon={hidePasswordConfirm ? 'eye' : 'eye-off'}
              color={Colors.grey500}
              size={20}
              style={styles.passwordIcon}
              onPress={() => sethidePasswordConfirm(!hidePasswordConfirm)}
            />
          </View>

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
              <Text style={{fontSize: 20, color: 'white'}}>Reset</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
              }}>
              Already a passenger?&nbsp;
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#CD4146',
                }}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PasswordReset;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 100,
  },
  top: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoImage: {
    flex: 2,
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
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  inputField: {
    width: '80%',
    flex: 1,
    backgroundColor: '#fafafa',
  },
  buttonContainer: {
    flex: 2,
    width: '80%',
    justifyContent: 'space-around',
  },
  socialLoginContainer: {
    flex: 1,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialButtons: {
    borderRadius: 8,
    width: 55,
    alignItems: 'center',
  },
  twitter: {backgroundColor: '#00ACED'},
  facebook: {backgroundColor: '#3B5998'},
  google: {backgroundColor: '#ffffff'},
  passwordView: {
    flex: 1,
    width: '80%',
    flexDirection: 'row',
  },
  passwordInput: {
    flex: 3,
    backgroundColor: '#fafafa',
  },
  passwordIcon: {
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
  },
});
