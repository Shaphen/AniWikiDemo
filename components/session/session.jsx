import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import styles from './session_style';
import IconE from 'react-native-vector-icons/Entypo';
import { loginUser, signUpUser } from '../assets/js/sessions';

const Session = () => {
    const [isLoginSession, setIsLoginSession] = useState(true);
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [hidePass, setHidePass] = useState(true);
    const [iconName, setIconName] = useState("eye-with-line")

    changeIcon = () => {
        const flipped = !hidePass;
        const newIconName = iconName === "eye" ? "eye-with-line" : "eye";
        setHidePass(flipped);
        setIconName(newIconName);
    }

    toggleSession = () => {
        const toggled = !isLoginSession;
        setIsLoginSession(toggled);
        onChangeEmail("");
        onChangePassword("");
    }

    submitSession = () => {
        if(isLoginSession) {
            loginUser(email, password);
        } else {
            signUpUser(email, password);
        }
    }

    return (
        <View style={ styles.sessionContainer }>
            { isLoginSession ? (<Text style={ styles.title }>Login</Text>) 
            : (<Text style={ styles.title }>Create an Account</Text>) }

            <View style={ styles.sessionForm }>
                <TextInput 
                    style={ styles.input }
                    onChangeText={ onChangeEmail }
                    value={ email }
                    placeholder="Enter email address"
                    placeholderTextColor="white" />

                <View style={ styles.passwordFilter }>
                    <TextInput
                        style={styles.input}
                        onChangeText={ onChangePassword }
                        value={password}
                        secureTextEntry={ hidePass }
                        placeholder="Enter password"
                        placeholderTextColor="white" />
                    
                    <IconE onPress={ changeIcon } style={ styles.eye } name={ iconName } size={ 26 }/>
                </View>

                <Pressable 
                    onPress={ submitSession }
                    style={({ pressed }) => [
                        {
                        opacity: pressed
                            ? 0.3
                            : 1
                        },
                        styles.submit
                    ]} >
                    
                    { isLoginSession ? (
                        <Text style={ styles.submitButtonText }>Login</Text>
                    ) : (
                        <Text style={ styles.submitButtonText }>Sign Up</Text>
                    )}
                </Pressable>
                <View>
                    {
                        isLoginSession ? (
                            <Pressable onPress={ toggleSession }>
                                <Text style={ styles.switchSessionButton }>
                                    Create New Account
                                </Text>
                            </Pressable>
                        ) : (
                            <Pressable onPress={ toggleSession }>
                                <Text style={ styles.switchSessionButton }>
                                    Already have an account? Log in
                                </Text>
                            </Pressable>
                        )
                    }
                </View>
            </View>
        
        </View>
    )
}

export default Session;