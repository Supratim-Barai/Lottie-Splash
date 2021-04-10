import React, {useState} from 'react';
import {TextInput, Dimensions,View, TouchableOpacity,Text,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('123456');

  const onLoginPress = () => {
    console.log(email, password);

  };

  return (
    <LinearGradient
      colors={['rgba(238,252,252,1)', '#E5566D']}
      style={styles.image}>
      <View style={{marginTop: 20}}>
        <TextInput
          mode={'flat'}
          style={styles.textInput}
          onChangeText={value => setEmail(value)}
          placeholder="Email"
          value={email}
        />

        <TextInput
          mode={'flat'}
          style={[styles.textInput, {marginTop: 10}]}
          onChangeText={value => setPassword(value)}
          selectionColor="red"
          placeholder="Password"
          value={password}
          secureTextEntry={true}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 15,
          }}>
          <TouchableOpacity style={styles.loginBtn} onPress={onLoginPress}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.signupView}>
        <Text style={{textAlign: 'center', fontSize: 20}}>
          Don't Have Account{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signup}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginText: {
    color: '#F5F5F5',
  },
  loginBtn: {
    height: 55,
    width: Devicewidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38BDDC',
    borderRadius: 10,
  },
  textInput: {
    height: Deviceheight / 15,
    width: Devicewidth / 1.3,
    fontSize: 17,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF52',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    color: '#f6f6f6',
    fontWeight: 'bold',
  },
  signupView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 40,
  },
});
