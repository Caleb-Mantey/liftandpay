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
  Checkbox,
  RadioButton,
  Button,
  Text,
  IconButton,
  Colors,
} from 'react-native-paper';

class SignUp extends React.Component {
  state = {
    radioValue: false,
    checkValue: false,
    passwordShow: true,
    confirmPasswordShow: true,
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  render() {
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
              label="Name"
              value={this.state.name}
              onChangeText={val => {
                this.setState({name: val});
              }}
            />
            <TextInput
              style={styles.inputField}
              label="Email"
              value={this.state.email}
              onChangeText={val => {
                this.setState({email: val});
              }}
            />
            <View style={styles.passwordView}>
              <TextInput
                style={styles.passwordInput}
                label="Password"
                value={this.state.password}
                secureTextEntry={this.state.passwordShow}
                onChangeText={val => {
                  this.setState({password: val});
                }}
              />
              <IconButton
                icon={this.state.passwordShow ? 'eye' : 'eye-off'}
                color={Colors.grey500}
                size={20}
                style={styles.passwordIcon}
                onPress={() =>
                  this.setState({passwordShow: !this.state.passwordShow})
                }
              />
            </View>
            <View style={styles.passwordView}>
              <TextInput
                style={styles.passwordInput}
                label="Confirm Password"
                value={this.state.confirm_password}
                secureTextEntry={this.state.confirmPasswordShow}
                onChangeText={val => {
                  this.setState({confirm_password: val});
                }}
              />
              <IconButton
                icon={this.state.confirmPasswordShow ? 'eye' : 'eye-off'}
                color={Colors.grey500}
                size={20}
                style={styles.passwordIcon}
                onPress={() =>
                  this.setState({
                    confirmPasswordShow: !this.state.confirmPasswordShow,
                  })
                }
              />
            </View>
            <View style={styles.belowInput}>
              <View style={styles.radio}>
                <RadioButton
                  value="remember"
                  status={this.state.radioValue ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({radioValue: !this.state.radioValue});
                  }}
                  style={{flex: 1}}
                />
                <Text
                  style={{
                    flex: 1,
                    paddingTop: 6,
                    fontSize: 16,
                    color: '#C7C7C7',
                  }}>
                  Remember me
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <Checkbox
                  status={this.state.checkValue ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checkValue: !this.state.checkValue});
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    paddingTop: 8,
                  }}>
                  <Text style={{fontSize: 15, flexWrap: 'wrap'}}>
                    Please read and check the box to agree to
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>our </Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 15,
                          textDecorationLine: 'underline',
                          color: '#167EFB',
                        }}>
                        Terms
                      </Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 15}}> and </Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 15,
                          textDecorationLine: 'underline',
                          color: '#167EFB',
                        }}>
                        Privacy Policy
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#157EFB',
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 6,
                }}
                onPress={() => {}}>
                <Text style={{fontSize: 20, color: 'white'}}>Sign up</Text>
              </TouchableOpacity>
              <View
                style={{
                  paddingTop: 10,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                  }}>
                  Already a passenger?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Signin')}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: '#CD4146',
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
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
            <View style={{flex: 2}} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 60,
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
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  inputField: {
    width: '80%',
    flex: 2,
    backgroundColor: '#fafafa',
  },
  belowInput: {
    flexDirection: 'column',
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '88%',
    marginTop: 20,
  },
  radio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 5.5,
    width: '80%',
    justifyContent: 'space-around',
    marginTop: 20,
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
    flex: 2,
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
