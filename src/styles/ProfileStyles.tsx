import { StyleSheet, Dimensions } from 'react-native';


export const styles = StyleSheet.create({
    profilecontainer:{
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingTop: 50, 

    },
    headerTitle:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        marginLeft: 10,
        
    },
    mainContainer:{
      flex: 1,
      backgroundColor: '#f8f8f8',
      paddingHorizontal: 10,
      paddingTop: 50, 
      alignItems: 'center',
      flexDirection: 'column',
      gap: 15
    },
    photoContainer:{
        borderRadius:25,
    },
    title:{
        fontSize:30,
        fontWeight: 'bold',
    },
    recentContainer:{
        borderTopWidth:1,
        borderColor:'grey',
        width: 300,
        alignItems: 'center',
        gap:10,
        paddingTop:20,

    }
})