import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex:1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextContainer: {
        marginLeft: 40,
        marginRight: 40
    },

    textBold: {
        marginTop: 32,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 44,
        letterSpacing: 0.25,
        color: '#263238'
    },
    textNormal: {
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 30,
        letterSpacing: 0.25,
        color: '#263238'
    },
    Button: {
        marginTop:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1565C0',
        paddingLeft: 130,
        paddingTop: 30,
        paddingRight: 130,
        borderRadius: 8,
        padding: 30,
    },
    ButtonText: {
        color:'#fff',
        fontSize: 20,
    },
    ButtonIcon: {
        position: 'absolute',
        marginLeft: 280,
    },
    logoPelotas: {
        marginTop: 50
    }
});