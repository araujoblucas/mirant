
import React, {useEffect, useState } from 'react';
import { View, BackHandler, Alert, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather} from '@expo/vector-icons';


import styles from './Headerstyles';
import logoImg from '../../assets/WhiteLogo.png';
import { AsyncStorage } from 'react-native';


export default function Header() {
      let navigation = useNavigation();

      async function logout() {
        AsyncStorage.removeItem('@myToken')
        
        navigation.navigate('Login');
    }

    return (
            <View style={styles.header}>
            <Image source={logoImg} style={styles.logoHeader} />
            <View style={styles.headerMenu}>
              <TouchableOpacity>
                <Feather style={styles.headerMenuIcon} name="user" size={30} color="#00B0FF" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => logout()}>
                <Feather style={styles.headerMenuIcon} name="log-out" size={30} color="#00B0FF" />
              </TouchableOpacity>
            </View>
          </View>



                    
    );
}