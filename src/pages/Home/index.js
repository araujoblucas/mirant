
import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather} from '@expo/vector-icons';



import styles from './styles';
import logoImg from '../../assets/Mirant.png';



export default function Home(){
    const navigation = useNavigation();
    const route = useRoute();

    function navigateToRegister() {
        navigation.navigate('Login');
    }


    return (
        <View style={styles.container}>
            <Image source={logoImg} />
            <View style={styles.TextContainer}>
                <Text style={styles.textBold}>Segurança em suas mãos!</Text>
                <Text style={styles.textNormal}>Seja bem vindo a plataforma de segurança do Pacto Pelotas pela Paz. O cidadão e o poder público unindo forças em combate a violência e a desordem.</Text>
            </View>
            <TouchableOpacity onPress={() => navigateToRegister()}>
                <View style={styles.Button}>
                <Text style={styles.ButtonText}>
                        Começar
                    </Text>
                    <Text style={styles.ButtonIcon}>
                        <Feather name="chevron-right" size={30} color="#fff" />
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
            
    );
}