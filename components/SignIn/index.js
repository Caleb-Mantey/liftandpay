import React, {useState} from 'react';
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
  Button,
  Text,
  IconButton,
  Colors,
} from 'react-native-paper';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkRadio, setcheckRadio] = useState(false);
  const [hidePassword, sethidePassword] = useState(true);

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
          <TextInput
            style={styles.inputField}
            label="Email"
            value={email}
            onChangeText={val => {
              setEmail(val);
            }}
          />
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
          <View style={styles.belowInput}>
            <View style={styles.radio}>
              <RadioButton
                value="remember"
                status={checkRadio ? 'checked' : 'unchecked'}
                onPress={() => {
                  setcheckRadio(!checkRadio);
                }}
                style={{flex: 1}}
              />
              <Text
                style={{
                  flex: 1,
                  paddingTop: 6,
                  fontSize: 15,
                  color: '#C7C7C7',
                }}>
                Remember me
              </Text>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity style={{paddingLeft: 35}}
                onPress={() => navigation.navigate("PasswordReset")}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#C7C7C7',
                    textDecorationLine: 'underline',
                  }}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
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
              <Text style={{fontSize: 20, color: 'white'}}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={{paddingTop: 5}}
              onPress={() => navigation.navigate("Phone")}>
              <Text
                style={{
                  fontSize: 18,
                  textDecorationLine: 'underline',
                  color: '#C7C7C7',
                }}>
                Sign In with phone
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
              }}>
              Not a passenger?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#CD4146',
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={[styles.socialButtons, styles.facebook]}>
              <IconButton icon="facebook" color={Colors.white} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButtons, styles.google]}>
              <IconButton icon="google" color={Colors.red500} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButtons, styles.twitter]}>
              <IconButton icon="twitter" color={Colors.white} size={20} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

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
    flex: 1,
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
  belowInput: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
  },
  radio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: '75%',
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
