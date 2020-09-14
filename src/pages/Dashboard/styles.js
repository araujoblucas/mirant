import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Directions } from 'react-native-gesture-handler';


export default StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    blueButton: {
        marginTop:40,
        width: 330,
        alignItems: 'center',
        backgroundColor: '#1565C0',
        paddingTop: 25,
        borderRadius: 8,
        padding: 30,
        position: 'relative',
    },
    blueButtonText: {
        color:'#FFF',
        fontSize: 20,
    },
    blueButtonIcon: {
        marginLeft: 40,
        marginTop: -57
    },

    whiteButton: {
        marginTop:40,
        width: 330,
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#1565C0',
        paddingTop: 25,
        borderRadius: 8,
        padding: 30,
        position: 'relative',
    },
    whiteButtonText: {
        color:'#1565C0',
        fontSize: 20,
    },
    whiteButtonIcon: {
        marginLeft: 40,
        marginTop: -57
    },

    logoPelotas: {
        marginTop: 70
    },
    
});