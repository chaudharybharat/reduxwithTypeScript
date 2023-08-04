import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, Button, Dimensions} from 'react-native';
import SizeBox from '../utile/SizeBox';
import {addToCard, removeFromCard} from './redux/domin/action';
import {useDispatch, useSelector} from 'react-redux';
import {ProductType, ProductPropsType} from './redux/type';
import {RootState} from './redux/store';
import CommonSyle from '../utile/commonStyle';
const Product = (props: ProductPropsType) => {
  const item = props.item;
  const dispatch = useDispatch();

  const handlerAddToCard = (itemData: ProductType) => {
    dispatch(addToCard(itemData));
  };
  const handlerRemoveToCard = (itemData: ProductType) => {
    dispatch(removeFromCard(itemData));
  };
  const [isAdded, setIsAdded] = useState(false);
  const cardItem = useSelector((state: RootState) => state.productReducer);

  useEffect(() => {
    if (cardItem != null && cardItem.length) {
      let result = cardItem.filter((element: ProductType) => {
        return element.id === item.id;
      });
      if (result.length) {
        setIsAdded(true);
      } else {
        setIsAdded(false);
      }
    } else {
      setIsAdded(false);
    }
  }, [cardItem]);
  return (
    <View key={item.id.toString()} style={styles.card}>
      <Image
        source={{
          uri: item.img,
        }}
        style={styles.img}
      />
      <SizeBox height={10} />
      <Text style={styles.title}>{item.name}</Text>
      <SizeBox height={5} />
      <Text style={styles.text}>Priec:{item.price}</Text>
      <Text style={CommonSyle.stickText}>Old Price: {item.oldPrice}</Text>
      <SizeBox height={10} />
      {isAdded ? (
        <Button
          title="Remove To Card"
          onPress={() => handlerRemoveToCard(item)}
        />
      ) : (
        <Button title="Add TO Card" onPress={() => handlerAddToCard(item)} />
      )}
    </View>
  );
};
export default Product;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('screen').width - 100,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },

  container: {
    backgroundColor: '#ffffff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'bold',
    color: '#000000',
  },
  text: {
    fontSize: 14,
    fontFamily: 'bold',
    color: '#000000',
  },
  img: {
    height: 100,
    width: 150,
  },
 
});
