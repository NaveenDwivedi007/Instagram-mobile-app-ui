import React, { useState } from 'react'
import { View,Image,Text,StyleSheet,TouchableOpacity } from 'react-native'

const Post = ({
    userPic,
    userName="John", 
    summary="Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    postImage="https://images.unsplash.com/photo-1630735988588-bda27d58bfd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"

})=>{
    const [like,setLike]=useState(false)
    const [num,SetNum]= useState(2)

    const liking = ()=>{
        return setLike(!like)
    }
    return(
        <View style={styles.container}>
            <View style={styles.post_header}>
                <View style={styles.post_owner} >
                    <Image
                    style={styles.displayPic}
                    source={{
                        uri:userPic
                    }}
                    />
                    <Text> {userName}</Text>
                
                </View>
                <Image
                style={styles.icon}
                source={require("../assets/icon/more.png")}
                />
            </View>
                <Image 
                progressiveRenderingEnabled ={true}
                style={styles.image}
                source = {{
                    uri:postImage
                }}
                />
            
            <View style={styles.post_action}>
                <View style={styles.post_sub_action}>
                    <TouchableOpacity 
                        onPress={liking}
                    >
                    {like ? <Image
                        style={[styles.icon,{
                            tintColor:"#F83E37"
                        }]}
                        source={require("../assets/icon/heart-filled.png")}
                        /> : 
                    <Image
                        style={[styles.icon],{
                                tintColor:"#000000",
                                height:30,
                                width:30,
                            }}
                        source={require("../assets/icon/heart.png")}
                        />
            }
                    </TouchableOpacity>
                    <Image
                    style={styles.icon}
                    source={require("../assets/icon/comment.png")}
                    />
                    <Image
                    style={[styles.icon, {
                        transform:[{skewY:"-30deg"},{skewX:"40deg"}]
                    }]}
                    source={require("../assets/icon/send.png")}
                    />
                </View>
                <Image
                style={styles.icon}
                source={require("../assets/icon/bookmark.png")}
                />
            </View>
            <Text 
                numberOfLines={num}
                onPress={()=>{
                    return num<2 ? SetNum(2) : SetNum(0)
                }}
            > 
                <Text style={{fontWeight:"bold"}}>{userName} </Text>
                <Text>
                 {summary}
                </Text>
            </Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        marginHorizontal:15,
        marginVertical:7
    },
    post_header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    post_owner:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:5,
    },
    displayPic:{
        height:50,
        width:50,
        borderRadius:50,
        borderColor:"#2D1906",
        borderWidth:.2,
        marginRight:5,
    },
    image:{
        height:500,
        width:"100%",
    },
    post_action:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:5

    },
    post_sub_action:{
        flexDirection:"row",
        width:110,
        justifyContent:"space-between"
    },
    icon:{
        height:30,
        width:30,
    },
   
})

export default Post