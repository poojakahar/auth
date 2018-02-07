import React, {Component} from 'react';
import { Text } from 'react-native';
import {Card, CardSection, Button, Input, Spinner} from './exportCompnent';
import firebase from 'firebase';

class Form extends Component
{
    state={ email:'',pwd:'', error:'', loading:false};

    onButtonPress(){
        this.setState({error:'',loading:true});

        const {email,pwd}=this.state;

        firebase.auth().signInWithEmailAndPassword(email,pwd).then(()=>{
            this.loginSucess();
        }).catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email,pwd).then(()=>{
                    this.loginSucess();
                }).catch(()=>{
                    this.loginFail();
                });
        });
    }

    loginFail()
    {
        this.setState({error: 'Authentication Failed', loading:false})
    }

    loginSucess()
    {
        this.setState({
            email: '',
            pwd:'',
            error:'Sucess',
            loading: false
        });
        console.log(this.state.loading);

    }

    renderSpinner()
    {
        if(this.state.loading)
        {
            return <Spinner/>
        }
        else
        {
            return(
                <Button onPress={this.onButtonPress.bind(this)}/>
            );
        }
    }

    render()
    {
       return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@gmail.com'
                        onChangeText={email=>this.setState({email})}
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='Password'
                        onChangeText={pwd=>this.setState({pwd})}
                        value={this.state.pwd}
                    />
                </CardSection>

                    <Text style={styles.errorStyle}> { this.state.error } </Text>

                <CardSection>
                    {this.renderSpinner()}
                </CardSection>
            </Card>
        );
    }
}

const styles={
    errorStyle:{
        fontSize: 20,
        color: '#ff1d34',
        fontWeight: '700',
        borderColor: '#ff1d34',
        padding: 5
    }
};

export default Form;