import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function Post() {
  return (
    <View style={Styles.mainParent}>
      <View style={Styles.userBar}>
        <View style={Styles.userInfo}>
          <Image source={require('../assets/photos/dad.jpg')
          } style={Styles.userPics} />
          <Text style={Styles.userName}>Vitalis Ogbonna</Text>
        </View>
        <Image source={require('../more.png')} style={Styles.postOption}/>
      </View>
      <Text style={{paddingLeft:10,paddingRight:10}}>Dream stadium</Text>
      <Image source={require('../assets/realImage.jpg')}
      style={Styles.realImage}/>
    </View>
    
  );
}
        export function Post1() {
  return (
    <View style={Styles.mainParent}>
      <View style={Styles.userBar}>
        <View style={Styles.userInfo}>
          <Image source={require('../girl.jpg')
          } style={Styles.userPics} />
          <Text style={Styles.userName}>Vitalis Ogbonna</Text>
        </View>
        <Image source={require('../more.png')} style={Styles.postOption}/>
      </View>
      <Text style={{paddingLeft:10,paddingRight:10}}>Another great day without sine, cosine or tangent</Text>
      <Image source={require('../new3.jpg')}
      style={Styles.realImage}/>
    </View>
    
  );
}

const Styles = StyleSheet.create({
  mainParent: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  userBar:{ 
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems: 'center'
  },
  userInfo:{
    flexDirection:'row',
    alignItems: 'center',
    marginLeft:5,
    marginTop:5
    

  },
  userPics:{
    width:36,
    height:36,
    borderRadius:50
  },
  userName:{
    fontWeight:'bold',
    marginLeft:10,
  
  },
  postOption:{
    width:20,
    height:20,
    marginRight:10
  },
  realImage:{
    height:500,
    width:350,
    marginTop:15
  }
});
