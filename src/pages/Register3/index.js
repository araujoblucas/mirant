
import React, {useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Platform, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/Mirant.png';
import Contagem33 from '../../assets/Contagem3-3.png';


export default function Register(){
    let navigation = useNavigation();
    let route = useRoute();
    
    let [password, setPassword] = useState('');
    let [confirm_password, setConfirm_password] = useState('');



    async function register_post(register3) {

        const response = await api.post('/auth/register',
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
                
            }
        }, register3);

        console.log(response)
    }

    
    function navigateToDashboard() {
        let old_data = route.params.register2;
        let cep = '00000000';
        const register3 = {
            name: old_data.name,
            email: old_data.email,
            cpf:old_data.cpf,
            phone:old_data.phone,
            address:old_data.address,
            profile: { uri: old_data.image.uri, },
            password: password,
            password_confirmation: confirm_password,
            cep
        }
        let formData = new FormData();
        formData.append('name', old_data.name);
        formData.append('email', old_data.email);
        formData.append('cpf', old_data.cpf); 
        formData.append('phone', old_data.phone);
        formData.append('address', old_data.address);
        formData.append('profile', { uri: old_data.image.uri, name: 'image.jpg', type: old_data.image.type});old_data.image
        formData.append('password', password);
        formData.append('password_confirmation', confirm_password);
        formData.append('cep', cep);



        register_post(formData);

        console.log(formData)
        //navigation.navigate('Dashboard');
    }

    function navigateGoBack() {
        navigation.goBack();
    }
    
    return (
        <View style={styles.logoImg} style={styles.container}>
            <Image style={styles.logoImg} source={logoImg} />
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigateGoBack()}>
                <MaterialCommunityIcons name="arrow-left" size={40} color="#90A4AE" />
            </TouchableOpacity>
            <Text style={styles.title} >Criar Senha</Text>
            
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite Aqui"
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <Text style={styles.InputIcon}>
                    <FontAwesome name="lock" size={30} color="#90A4AE" />             
                </Text>
            </View>

            <Text style={styles.label}>Repetir senha</Text>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Senha"
                    onChangeText={text => setConfirm_password(text)}
                    value={confirm_password}
                />
                <Text style={styles.InputIcon}>
                        <FontAwesome name="lock" size={30} color="#90A4AE" />
                </Text>
            </View>


            <TouchableOpacity onPress={() => navigateToDashboard()}>
                <View style={styles.Button}>
                <Text style={styles.ButtonText}>
                        Próxima
                    </Text>
                    <Text style={styles.ButtonIcon}>
                        <Feather name="chevron-right" size={30} color="#FFF" />
                    </Text>
                </View>
            </TouchableOpacity>
            <Image style={styles.Contagem13 } source={Contagem33} />
        </View>
            
    );
}