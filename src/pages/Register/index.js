
import React, {useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



import styles from './styles';
import logoImg from '../../assets/Mirant.png';
import Contagem13 from '../../assets/Contagem1-3.png';


export default function Register(){
    let navigation = useNavigation();
    let route = useRoute();
    
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [cpf, setCpf] = useState('');


    function navigateToRegister2() {
        let register1 = {
            'name': name,
            'email': email,
            'cpf': cpf
        }
        navigation.navigate('Register2', {register1});
    }
    function navigateGoBack() {
        navigation.goBack();
    }



    return (
        <View style={styles.container}>
            <Image style={styles.logoImg} source={logoImg} />
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigateGoBack()}>
                <MaterialCommunityIcons name="arrow-left" size={40} color="#90A4AE" />
            </TouchableOpacity>
            <Text style={styles.title} >Cadastro de Cidadão</Text>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nome Completo"
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <Text style={styles.InputIcon}>
                        <Feather name="user" size={30} color="#90A4AE" />
                </Text>
            </View>

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="CPF"
                    onChangeText={text => setCpf(text)}
                    value={cpf}
                />
                <Text style={styles.InputIcon}>
                        <FontAwesome name="id-card" size={30} color="#90A4AE" />
                </Text>
            </View>

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <Text style={styles.InputIcon}>
                        <Feather name="mail" size={30} color="#90A4AE" />
                </Text>
            </View>

            <TouchableOpacity onPress={() => navigateToRegister2()} >
                <View style={styles.Button}>
                <Text style={styles.ButtonText}>
                        Próxima
                    </Text>
                    <Text style={styles.ButtonIcon}>
                        <Feather name="chevron-right" size={30} color="#90A4AE" />
                    </Text>
                </View>
            </TouchableOpacity>
            <Image style={styles.Contagem13 } source={Contagem13} />
        </View>
            
    );
}