
import React, {useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Platform, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


import styles from './styles';
import logoImg from '../../assets/Mirant.png';
import Contagem23 from '../../assets/Contagem2-3.png';


export default function Register(){
    let navigation = useNavigation();
    let route = useRoute();
    
    let [phone, setPhone] = useState('');
    let [address, setAddress] = useState('');

    let [image, setImage] = useState('');
    

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setImage(pickerResult);
        console.log(pickerResult);
      }


    function navigateToRegister3() {
        let old_data = route.params.register1;
        let register2 = {
            'name':old_data.name,
            'email':old_data.email,
            'cpf':old_data.cpf,
            'phone':phone,
            'address':address,
            'image': image,
        }
        console.log(register2)
        navigation.navigate('Register3', {register2});
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
                    placeholder="Telefone"
                    onChangeText={text => setPhone(text)}
                    value={phone}
                />
                <Text style={styles.InputIcon}>
                        <FontAwesome name="phone" size={30} color="#90A4AE" />
                </Text>
            </View>

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Endereço"
                    onChangeText={text => setAddress(text)}
                    value={address}
                />
                <Text style={styles.InputIcon}>
                        <Feather name="map-pin" size={30} color="#90A4AE" />
                </Text>
            </View>


            <TouchableOpacity onPress={openImagePickerAsync} style={styles.containerInputImage}>
                <View style={styles.containerInternalInputImage}>
                    <Text style={styles.InputImageText}>Enviar Foto</Text>
                </View>
                <Feather style={styles.InputImageIcon} name="upload" size={25} color="#90A4AE" />
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigateToRegister3()}>
                <View style={styles.Button}>
                <Text style={styles.ButtonText}>
                        Próxima
                    </Text>
                    <Text style={styles.ButtonIcon}>
                        <Feather name="chevron-right" size={30} color="#90A4AE" />
                    </Text>
                </View>
            </TouchableOpacity>
            <Image style={styles.Contagem13 } source={Contagem23} />
        </View>
            
    );
}