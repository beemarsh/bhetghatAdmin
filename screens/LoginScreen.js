import {Text, ScrollView} from 'react-native';
import React, {Component} from 'react';
import FormButton from '../components/Button';
import FormInput from '../components/FormInput';
import {AuthContext} from '../routes/AuthProvider';
import BigLogo from '../components/BigLogo';
import {loginScreenStyles as styles} from '../styles/AuthStyles';

export default class LoginScreen extends Component {
  static contextType = AuthContext;
  //
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      userName: '',
      password: '',
    };
  }

  render() {
    // Import different functions & properties from the context
    const {login, process} = this.context;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* The Logo of Login */}

        <BigLogo />

        {/* BIG LOGIN TEXT */}
        <Text style={styles.text}>LOGIN</Text>

        {/* Form Inputs */}
        {/* Username */}
        <FormInput
          placeholderText="E-mail Address"
          iconType="user"
          keyboardType="email-address"
          onChangeText={value => this.setState({userName: value})}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {/* Password */}
        <FormInput
          placeholderText="Password"
          iconType="unlock-alt"
          secureTextEntry={true}
          onChangeText={value => this.setState({password: value})}
        />

        {/* Login Button */}

        <FormButton
          buttonTitle="LOGIN"
          disabled={process == 'LOGIN' ? true : false}
        />
      </ScrollView>
    );
  }
}
