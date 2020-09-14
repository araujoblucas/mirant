
import React, {useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Platform, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';


import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/Mirant.png';


export default function Login(){
    let navigation = useNavigation();
    let route = useRoute();

    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');

    async function navigateToDashboard() {

        let data = {
            'email': email,
            'password': password
        }
        
        const response = await api.post('auth/login', data);
        
        store_token(response.data.access_token);
        console.log(response.status)
        if(response.status == 200) {
            navigation.navigate('Dashboard');
        }
    }

    function navigateToRegister1() {
        navigation.navigate('Register');
    }
    
    function navigateGoBack() {
        navigation.goBack();
    }

    async function store_token(token){
        try {
          await AsyncStorage.setItem(
            '@myToken',
             token
          );
        } catch (error) {}
      };



    return (
        <View style={styles.logoImg} style={styles.container}>
            <Image style={styles.logoImg} source={logoImg} />
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigateGoBack()}>
                <MaterialCommunityIcons name="arrow-left" size={40} color="#90A4AE" />
            </TouchableOpacity>
            <Text style={styles.title} >Login</Text>
            
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite Aqui"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
            </View>

            
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />

            </View>


            <TouchableOpacity onPress={() => navigateToDashboard()}>
                <View style={styles.Button}>
                <Text style={styles.ButtonText}>
                        Entrar
                    </Text>
                    <Text style={styles.ButtonIcon}>
                        
                    </Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigateToRegister1()}>
                <View style={[styles.Button, { marginTop: 10, backgroundColor: 'gray', }]}>
                <Text style={styles.ButtonText}>
                        Cadastrar
                    </Text>
                    <Text style={styles.ButtonIcon}>
                        
                    </Text>
                </View>
            </TouchableOpacity>
        </View>          
    );
}