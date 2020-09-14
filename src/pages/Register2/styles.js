import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Directions } from 'react-native-gesture-handler';


export default StyleSheet.create({
    container: {
        flex:1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    buttonBack: {
        marginTop: -45,
        marginLeft: -300
    },
    logoImg: {
        width: 150,
        height: 50,
        resizeMode: 'stretch',
    },
    title: {
        color: '#263238',
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 30,
        fontSize: 28,
    },
    containerInput:{
        width: '90%',
        height: 80,
        marginTop: 20,
        backgroundColor: '#ECEFF1',
        borderBottomColor: '#90A4AE',
        borderBottomWidth:2,
    },
    textInput: {
        marginTop:20,
        marginLeft: 20,
        fontSize: 30,
        fontWeight: '100'
    },
    InputIcon: {
        position: 'absolute',
        marginLeft: 310,
        marginTop:26
    },

    containerInputImage:{
        width: '90%',
        height: 80,
    },
    containerInternalInputImage:{
        width: '100%',
        height: 80,
        marginTop: 20,
        backgroundColor: '#FFF',
        borderColor: '#90A4AE',
        borderWidth:2,
        borderRadius:4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    InputImageText: {
        marginLeft: 20,
        fontSize: 30,
        fontWeight: '100'
    },
    InputImageIcon: {
        position: 'absolute',
        marginLeft: 50,
        marginTop: 47
    },

    Button: {
        marginTop:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#DCE0E0',
        paddingLeft: 130,
        paddingTop: 30,
        paddingRight: 130,
        borderRadius: 8,
        padding: 30,
    },
    ButtonText: {
        color:'#90A4AE',
        fontSize: 20,
    },
    ButtonIcon: {
        position: 'absolute',
        marginLeft: 280,
    },
    logoPelotas: {
        marginTop: 50
    },
    
    logoPelotas: {
        marginTop: 50
    },
    Contagem13: {
        marginTop: 55,
        marginLeft: 280
    }
});