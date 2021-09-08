import React  from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Activity from '../screen/activity';
import Home from '../screen/home';
import Profile from '../screen/profile';
import Reel from '../screen/reel';
import Search from '../screen/search';
import { View,Image,StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();
function MyTab(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
        }}
        >
      <Tab.Screen name="Home" component={Home} 
        options={{
            tabBarIcon:({focused})=>{
                return(
                   focused ?  
                   <View>
                        <Image
                            style={styles.icon}
                            source={require("../assets/icon/home-filled.png")}
                        />
                    </View> 
               : 
                        <View>
                            <Image
                            style={styles.icon}
                            source={require("../assets/icon/home.png")}
                            />
                        </View>
                )
            },
            headerTitle:()=>{
                return(
                    <View style={[styles.home]}>
                        <Image
                         source={require("../assets/icon/logo.png")}
                        />
                    </View>
                )
            },
            headerRight: () => (
                <View style={styles.homeIcon}>
                    <Image
                source={require("../assets/icon/add-post.png")}
               />
                    <Image
                source={require("../assets/icon/msg.png")}
               />
                </View>
              ),
        }}
      />
      <Tab.Screen name="Search" component={Search}
      
      options={{
        tabBarIcon:()=>{
            return(
                <View>
                    <Image
                     style={styles.icon}
                     source={require("../assets/icon/search.png")}
                    />
                   
                </View>
            )
        }
    }}
      />
      <Tab.Screen name="Reel" component={Reel} 
          options={{
            tabBarIcon:({focused})=>{
                return(
                    focused ? 
                    <View>
                        <Image
                            style={styles.icon}
                            source={require("../assets/icon/reel-filled.png")}
                        />
                       
                    </View>
                    :
                    <View>
                        <Image
                            style={styles.icon}
                            source={require("../assets/icon/reel.png")}
                        />
                       
                    </View>
                )
            }
        }}

      />
      <Tab.Screen name="Activity" component={Activity}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    focused ? 
                    <View>
                        <Image
                        style={styles.icon}
                         source={require("../assets/icon/heart-filled.png")}
                        />
                       
                    </View>
                    :
                    <View>
                        <Image
                         style={styles.icon}
                         source={require("../assets/icon/heart.png")}
                        />
                       
                    </View>
                )
            }
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
            tabBarIcon:()=>{
                return(
                    <View>
                        <Image
                        style={styles.profile}
                         source={
                             {uri:"https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"}
                         }
                        />
                    </View>
                )
            }
        }}
      />
    </Tab.Navigator>
    )
    
}
const styles = StyleSheet.create({
    profile:{
        borderRadius:50,
        height:30,
        width:30,
    },
    home:{
        margin:-20,
    },
    homeIcon:{
        flexDirection:'row',
        width:60,
        justifyContent:"space-between"
    },
    icon:{
        height:30,
        width:30,
    }
})



export default MyTab