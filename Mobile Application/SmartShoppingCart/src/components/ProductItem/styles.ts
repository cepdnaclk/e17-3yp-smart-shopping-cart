import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page:{
    padding:10,
  },
  root: {
    flexDirection:'row',
    marginVertical:5,
    borderWidth:1,
    borderColor:'#d1d1d1',
    borderRadius:10,
    backgroundColor:'#fff',


  },
  rightContainer:{
    padding:10,
     flex:3,
  },
  image: {
    flex:2,
    height: 150,
    marginLeft:5,
    resizeMode:'contain'
  },
  title:{
    fontSize:18,
  },
  price:{
    fontSize:18,
    fontWeight:'bold',
  },
  oldPrice:{
    fontSize:12,
    fontWeight:'normal',
    paddingLeft:5,
    textDecorationLine:'line-through',
  },
  ratingContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:5,
    
  },
  star:{
    margin:2,
  },
});
export default styles;