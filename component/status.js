import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Status=({userName="Bat-man", userProfileImage="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" })=>{

    return(
        <View style={styles.status_container}>
             <LinearGradient
        
                    style={styles.status_border}
                     colors={["#d53e38", "#e16c34", "#eb932d", "#f4b81e"]}>
                    <Image
                    style={styles.status}
                    source={{
                        uri:userProfileImage
                    }}
                    />
            </LinearGradient>
            <Text>{userName}</Text>
           
        </View>
    )
}
const styles = StyleSheet.create({
    status_container:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10

    },
    status:{
        borderRadius:50,
        height:65,
        width:65,
        backgroundColor:"#ffffff"
       
    },
    status_border:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        height:70,
        width:70,
        margin:5,
        
    },
})

export default Status