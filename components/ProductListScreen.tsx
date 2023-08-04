/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from './Header';
import Product from './Product';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
//https://dummyjson.com/products/
var productList = [
  {
    id: 1,
    name: 'Mobile',
    price: '7000',
    oldPrice: '8600',
    img: 'https://i.dummyjson.com/data/products/1/3.jpg',
  },
  {
    id: 2,
    name: 'Tree Oil 30ml',
    price: '450',
    oldPrice: '500',
    img: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
  },
  {
    id: 3,
    name: 'MacBook Pro',
    price: '1500000',
    oldPrice: '1580000',
    img: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
  },
  {
    id: 4,
    name: 'Microsoft Surface Laptop 4',
    price: '30000',
    oldPrice: '4500',
    img: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
  },
  {
    id: 5,
    name: 'HP Pavilion 15-DK1056WM',
    price: '45000',
    oldPrice: '47000',
    img: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
  },
  {
    id: 6,
    name: 'Perfume Oil',
    price: '250',
    oldPrice: '380',
    img: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
  },
  {
    id: 7,
    name: 'Brown Perfume',
    price: '500',
    oldPrice: '870',
    img: 'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
  },
  {
    id: 8,
    name: 'Skin Beauty Serum',
    price: '700',
    oldPrice: '790',
    img: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
  },
  {
    id: 9,
    name: 'Daal Masoor 500 grams',
    price: '100',
    oldPrice: '130',
    img: 'https://i.dummyjson.com/data/products/21/thumbnail.png',
  },
  {
    id: 10,
    name: 'Orange Essence Food Flavou',
    price: '150',
    oldPrice: '280',
    img: 'https://i.dummyjson.com/data/products/23/thumbnail.jpg',
  },
  {
    id: 11,
    name: 'Gulab Powder 50 Gram',
    price: '90',
    oldPrice: '120',
    img: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
  },
  {
    id: 12,
    name: 'Flying Wooden Bird',
    price: '1000',
    oldPrice: '1300',
    img: 'https://i.dummyjson.com/data/products/27/thumbnail.webp',
  },
];
type propsType = NativeStackScreenProps<stackScreens>;
const ProductWapper = ({navigation}: {navigation: propsType}) => {
  const navigateToUserList = () => {
    navigation.navigate('UserListScreen');
  };
  const navigateToCardItem = () => {
    navigation.navigate('CardItemScreen');
  };

  return (
    <View style={styles.container}>
      <Header
        handleClickUserList={navigateToUserList}
        handleClickCardItem={navigateToCardItem}
      />
      <ScrollView>
        {productList.map(item => (
          <Product key={item.id.toString()} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
  },
});

export default ProductWapper;
