import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    header: {
        paddingTop: Constants.statusBarHeight + 25,
        width: '100%',
        height: 120,
        backgroundColor: '#1565C0',
        alignItems: 'center'
    },
    logoHeader: {
        width: 150,
        height: 50,
        resizeMode: 'stretch',
    },
    headerMenu: {
        marginTop:-35,
        marginLeft: 280,
        flexDirection: 'row',
    },
    headerMenuIcon: {
        marginLeft: 13
    },
});