import { loadOptions } from '@babel/core';
import {Text,View,Image,StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const AdvSwiper = () => {
  return (
    <View style={{ flex:1,display:'flex',justifyContent:'center',alignItems:'center' }}>
    {/* @ts-ignore */}
      <Swiper
        showButtons
        loop 
        autoplay
        active
        autoplayTimeout={3}
        rend
      >
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={{ uri: 'https://picsum.photos/400/300?random=1'}}></Image>
          <Image style={styles.img} source={{ uri:'https://picsum.photos/400/300?random=2' }}></Image>
          <Image style={styles.img} source={{ uri:'https://picsum.photos/400/300?random=3' }}></Image>
        </View>
      </Swiper>

    </View>
  )
}

const styles = StyleSheet.create({
  slide1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  },
  slide2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red'
  },
  slide3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green'
  },
  text:{
    color:'#333',
    fontSize:30,
    fontWeight:"bold"
  },
  img:{
    width:'100%',
    height:'100%',
    backgroundSize:'cover',
    backgroundPosition:'center'
  },

  imageContainer:{
    height:50,
    width:50,
    borderColor:'#333',
    borderWidth:2,
  }
})

export default AdvSwiper;