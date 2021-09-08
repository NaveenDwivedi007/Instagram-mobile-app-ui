import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, FlatList } from 'react-native';
import Post from '../component/post';
import Status from '../component/status';
import { users } from '../mockData/mockUserData';



function Home(){
  const [refreshEffect,setRefreshEffect]= useState(false)

  const fakeEffect = ()=>{
    setRefreshEffect(true)
    return setTimeout(()=>{
      setRefreshEffect(false)
    },2000)
  }
  return (
      <View>
           <FlatList
          ListHeaderComponent={()=>(
            <FlatList
          data={users}
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=>(<Status userName={item.user_name} userProfileImage={item.display_image}/>)}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          />
          )}
          data={users}
          showsVerticalScrollIndicator={false}
          refreshing={refreshEffect}
          onRefresh={fakeEffect}
          renderItem={({item})=>(
          <Post 
          userPic={item.display_image}
          userName={item.user_name}
          summary = {item.summary}
          postImage= {item.post_image}
          />
          )}
          keyExtractor={item=>item.id.toString()}

          />         
      </View>
  )
}



export default Home