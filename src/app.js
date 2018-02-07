import React, { Component } from 'react';
import { View } from 'react-native';
import Header from "./component/Header";
import Form from './component/Form';
import firebase from 'firebase';
import {Button,Spinner} from "./component/exportCompnent";
//import {Spinner} from "./component/Spinner";

class App extends Component
{
    state={loggedIn: false};

    componentWillMount(){
        firebase.initializeApp(
            {
                apiKey: "AIzaSyB00uqL8RDKi0iSSouK_3Qq7DTb_C3t8K8",
                authDomain: "auth-a8edb.firebaseapp.com",
                databaseURL: "https://auth-a8edb.firebaseio.com",
                projectId: "auth-a8edb",
                storageBucket: "auth-a8edb.appspot.com",
                messagingSenderId: "527401644792"
            }
        );

        firebase.auth().onAuthStateChanged((user)=>{
            if(user)
            {
                this.state.loggedIn=true;
            }
            else
            {
                this.state.loggedIn=false;
            }

        });
    }

    renderLog()
    {
        console.log(this.state.loggedIn);
        switch(this.state.loggedIn)
        {
            case true:
                return <Button> Logout </Button>;
            case false:
                return <Form/>;
            default:
                return <Spinner size='large'/>
        }
    }

    render(){
        return(
            <View>
                <Header title={'Authentication'}/>
                {this.renderLog()}
            </View>
        );
    }
}

export default App;