import React from 'react'
import { View,Image,Text,StyleSheet } from 'react-native'

const Post = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.post_header}>
                <View style={styles.post_owner} >
                    <Image
                    style={styles.displayPic}
                    source={{
                        uri:"https://robohash.org/quisdolorumsed.png?size=50x50&set=set1"
                    }}
                    />
                    <Text>Hello</Text>
                
                </View>
                <Image
                style={styles.icon}
                source={require("../assets/icon/more.png")}
                />
            </View>
            <Image 
            style={styles.image}
            source = {{
                uri:"https://images.unsplash.com/photo-1631051145846-f3d38c5e29f7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }}
            />
            <View style={styles.post_action}>
                <View style={styles.post_sub_action}>
                    <Image
                    style={styles.icon}
                    source={require("../assets/icon/heart.png")}
                    />
                    <Image
                    style={styles.icon}
                    source={require("../assets/icon/comment.png")}
                    />
                    <Image
                    style={[styles.icon, {
                        transform:[{skewY:"-30deg"}]
                    }]}
                    source={require("../assets/icon/send.png")}
                    />
                </View>
                <Image
                source={require("../assets/icon/bookmark.png")}
                />
            </View>
            <Text 
                numberOfLines={2}
            > 
                <Text style={{fontWeight:"bold"}}>UserName </Text>
                <Text>
                Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. 
                </Text>
            </Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        marginHorizontal:15

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
        width:100,
        marginVertical:5
    },
    displayPic:{
        height:50,
        width:50,
        borderRadius:50,
        borderColor:"#2D1906",
        borderWidth:.2
    },
    image:{
        height:500,
        width:"100%",
    },
    post_action:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:5,

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