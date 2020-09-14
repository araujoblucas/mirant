import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    titleBox: {
        width:'100%',
        backgroundColor: '#00B0FF'

    },
    titleBoxText: {
        padding:20,
        fontSize: 22
    },
    whiteButtonBox: {
        marginTop: 30,
        width: 330,
        borderWidth: 2,
        borderColor: '#90A4AE',
        borderRadius: 8,        
    },
    whiteButton: {
        width: 330,
        borderWidth: 2,
        borderColor: '#0ff',
        borderRadius: 8,
        fontSize: 30
    },
    whiteButtonText: {
        color:'#1565C0',
        fontSize: 30
    },
    whiteButtonIcon: {
        marginLeft: 40,
        marginTop: -57
    },

    containerInputImage:{
        width: 330,
        
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
        fontSize: 25,
        fontWeight: '100'
    },
    InputImageIcon: {
        position: 'absolute',
        marginLeft: 30,
        marginTop: 47
    },
    containerInput:{
        width: 330,
        height: 70,
        marginTop: 20,
        backgroundColor: '#ECEFF1',
        borderBottomColor: '#90A4AE',
        borderBottomWidth:2,
    },
    textInput: {
        marginTop:10,
        marginLeft: 20,
        fontSize: 30,
        fontWeight: '100',
        color: 'black',
    },
    InputIcon: {
        position: 'absolute',
        marginLeft: 290,
        marginTop:20
    },

    containerInputMultiline:{
        width: 330,
        height: 140,
        marginTop: 20,
        backgroundColor: '#ECEFF1',
        borderBottomColor: '#90A4AE',
        borderBottomWidth:2,
    },
    textInputMultiline: {
        marginTop: 0,
        marginLeft: 20,
        fontSize: 30,
        fontWeight: '100',
        color: 'black',
    },

    Button: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1565C0',
        paddingLeft: 140,
        paddingRight: 140,
        borderRadius: 8,
        padding: 15,
    },
    ButtonText: {
        color:'#FFF',
        fontSize: 20,
    },
    ButtonIcon: {
        position: 'absolute',
        marginLeft: 280,
    },

});