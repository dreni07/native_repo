import {View,Text,StyleSheet} from 'react-native';
// import Swiper from 'react-native-swiper';
// import Swiper from 'react-native-swiper';
// import Swiper from 'react-native-swiper';
// import Swiper from 'react-native-swiper';
import Swiper from 'react-native-swiper';
const BasicSwipper = () => {
  return(
    <View>
      {/* @ts-ignore */}
      <Swiper
        showButtons
        loop
        autoplay
        autoplayTimeout={3}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>Slide1</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Slide2</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Slide3</Text>
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
 
})

export default BasicSwipper;