import * as React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { Container, Form, Item, Label, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import firebase from "../db/connect";

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      email: '',
      pass: '',
    }
  }

  singUpUser = (email, pass) => {
    try {
      if(pass.length < 6 && email !== '') {
        alert('Please enter atleast 6 characters for Password or valid E-mail');
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, pass);
    }
    catch(error) {
      alert(`Error! ${error.toString()}`);
    }
  }

  loginUser = (email, pass) => {
    if(pass.length < 6 && email !== '') {
      alert('Please enter atleast 6 characters for Password or valid E-mail');
      return;
    }
    Actions.load(); 
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(function(user) {
      Actions.greet();
      setTimeout(() => Actions.list(), 3000);
    })
    .catch(function(error) {
      Actions.error();
      setTimeout(() => Actions.home(), 3000);
    });
  }

  render() {
    return (
      <Container style={ styles.container }>
        <View >
          <Image style={ styles.logo } source={ require('../assets/logo.jpg') } />
        </View>
        <Form>
          <Item floatingLabel>
            <Label>E-mail</Label>
            <Input autoCorrent="false" autoCapitalize="none" onChangeText={( email ) => this.setState({ email })} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input autoCorrent="false" autoCapitalize="none" onChangeText={( pass ) => this.setState({ pass })} />
          </Item>
          <Button style={ styles.login } rounded success full onPress={ () => this.loginUser( this.state.email, this.state.pass ) } >
            <Text style={{ color: 'white' }}>Login</Text>
          </Button>
          <Button style={styles.singUp } rounded primary full onPress={ () => this.singUpUser(this.state.email, this.state.pass) } >
            <Text style={{ color: 'white' }}> Sing Up </Text>
          </Button>
        </Form>
      </Container>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  login: {
    marginTop:20,
    marginLeft:100,
    marginRight:100,
    backgroundColor: '#c10831',
    fontWeight: '700',
  },
  singUp: {
    marginTop:20,
    marginLeft:100,
    marginRight:100,
    fontWeight: '700',
    backgroundColor: 'blue'
  },
  logo: {
    marginLeft:'auto',
    marginRight:'auto',
  }
});