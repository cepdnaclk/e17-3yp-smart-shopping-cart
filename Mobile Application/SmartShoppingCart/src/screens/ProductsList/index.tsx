/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image,FlatList} from 'react-native';
import  FontAwesome  from "react-native-vector-icons/FontAwesome";
import ProductItem from "../../components/ProductItem";
import products from '../../data/products'
const ProductsList = () => {
  return (
    <View style={styles.page}>
      
      {/* <ProductItem item={products[1]}/> */}
      <FlatList 
        data={products}
        renderItem={
          ({item})=><ProductItem item={item}/>
          }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page:{
    padding:10,
  },
  
});
export default ProductsList;
