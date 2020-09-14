
import React, {useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import api from '../../services/api';

import {Picker} from '@react-native-community/picker';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import styles from './styles';
import Header from '../../Components/Header';


export default function Denounce(){
    let navigation = useNavigation();
    let route = useRoute();
    
    const [ category, setCategory] = useState('Tipo de Denúncia')
    const [ categories, setCategories] = useState([])
    const [ local, setLocal] = useState('')
    const [ desc, setDesc] = useState('')
    const [loading, setLoading] = useState(false);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
    }


    function consolelist () {
        console.log(category);
    }

    async function loadCategories() {

        setLoading(true);
        const response = await api.get('category',{
            headers: {
                Accept: 'application/json'
            }
        });
        setCategories(response['data'])


        console.log(categories)
    }

    useEffect(()=> {
        loadCategories();
    }, []);

    return (
        
        <View
          style={styles.container}
          >
            <Header />
            <View style={styles.titleBox}>
                <Text style={styles.titleBoxText}>
                    Fazer Denúncia
                </Text>
            </View>


        <View style={styles.whiteButtonBox}>
            <Picker          
                selectedValue={category} 
                style={styles.whiteButton}
                itemStyle={styles.whiteButtonText}
                onValueChange={(itemValue, itemIndex) => setCategory(itemValue)
                }>
                <Picker.Item label="Tipo de Denúncia" value="invalid" />
                <Picker.Item label="Maria da Penha" value="5" />
                <Picker.Item label="Perturbação da ordem" value="1" />
                <Picker.Item label="Roubo qualificado" value="3" />
                <Picker.Item label="Roubo simples" value="2" />
                <Picker.Item label="Furto" value="4" />                        
            </Picker>  
        </View>






        <TouchableOpacity onPress={openImagePickerAsync} style={styles.containerInputImage}>
            <View style={styles.containerInternalInputImage}>
                <Text style={styles.InputImageText}>Enviar Imagem</Text>
            </View>
            <Feather style={styles.InputImageIcon} name="upload" size={25} color="#90A4AE" />
        </TouchableOpacity>
          
        <View style={styles.containerInput}>
            <TextInput
                style={styles.textInput}
                placeholder="Local"
                onChangeText={text => setLocal(text)}
                value={local}
            />
            <Text style={styles.InputIcon}>
                <Feather name="map-pin" size={28} color="#90A4AE" />             
            </Text>
        </View>

        <View style={styles.containerInputMultiline}>
            <TextInput
                style={styles.textInputMultiline}
                placeholder="Descrição"
                onChangeText={text => setDesc(text)}
                value={desc}
                numberOfLines={5}
            />
        </View>

        <TouchableOpacity>
                <View style={styles.Button}>
                <Text style={styles.ButtonText}>
                        Enviar
                    </Text>
                    <Text style={styles.ButtonIcon}>
                        <Ionicons name="ios-send" size={25} color="#FFF" />
                    </Text>
                </View>
        </TouchableOpacity>
    </View>
        
                    
    );
}