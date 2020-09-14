
import React, {useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


import styles from './styles';
import Header from '../../Components/Header';


export default function Dashboard(){
    let navigation = useNavigation();
    let route = useRoute();
    

    function navigateGoDenounce() {
      navigation.navigate('Denounce');
  }

    return (
        
        <LinearGradient
          colors={['#ECEFF1', '#ECEFF1' ,'#E8E8F0', '#ECEFF1']}
          start={[0, 0]}
          end={[1, 1]}
          location={[0, 0 , 0.1, 0.9]}
          style={styles.container}
          >
            <Header />

            <TouchableOpacity onPress={() => navigateGoDenounce()}>
              <View style={styles.blueButton} >
                <Text style={styles.blueButtonText}>
                  Fazer Denúncia
                </Text>
              </View>
              <Feather style={styles.blueButtonIcon} name="message-square" size={30} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.whiteButton}>
                <Text style={styles.whiteButtonText}>
                  Fale Conosco
                </Text>
              </View>
              <Feather style={styles.whiteButtonIcon} name="message-square" size={30} color="#1565C0" />
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.whiteButton}>
                <Text style={styles.whiteButtonText}>
                  Telefones Úteis
                </Text>
              </View>
              <Feather style={styles.whiteButtonIcon} name="phone" size={30} color="#1565C0" />
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.whiteButton}>
                <Text style={styles.whiteButtonText}>
                  Estatísticas
                </Text>
              
                </View>
              <Ionicons style={styles.whiteButtonIcon} name="ios-stats" size={30} color="#1565C0" />
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.whiteButton}>
                <Text style={styles.whiteButtonText}>
                  Últimas notícias
                </Text>
              </View>
              <Ionicons name="md-megaphone" style={styles.whiteButtonIcon} size={30} color="#1565C0" />
            </TouchableOpacity>
 
        </LinearGradient>
        
                    
    );
}