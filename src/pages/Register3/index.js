
import React, {useEffect, useState } from 'react';
import { ScrollView, Text, Image, TouchableOpacity, TextInput, SafeAreaView, View } from 'react-native'
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

        const response = await api.post('/auth/register', register3,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'                
            }
        } ).catch(error => {console.log(error)});

        console.log(response)
    }

    
    function navigateToDashboard() {
        let old_data = route.params.register2;
        let cep = '00000000';
        const register3 = new FormData();
        register3.append('name', old_data.name)
        register3.append('email', old_data.email)
        register3.append('cpf', old_data.cpf)
        register3.append('phone',old_data.phone)
        register3.append('address',old_data.address)
        register3.append('password', password)
        register3.append('password_confirmation', confirm_password)
        register3.append('cep', '000000')

        register_post(register3);

        console.log(register3)
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
                    secureTextEntry={true}
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
                    secureTextEntry={true}
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