import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCardDataList, removeFromCard, clearCard} from './redux/domin/action';
import {RootState} from './redux/store';
import {ProductType} from './redux/type';
import SizeBox from '../utile/SizeBox';
import {stackScreens} from './StackRoot';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import CommonSyle from '../utile/commonStyle';

type propsType = NativeStackScreenProps<stackScreens>;
const AddToCardScreen = ({navigation}: {navigation: propsType}) => {
  const nav = useNavigation();

  const dispatch = useDispatch();
  const cardList = useSelector((state: RootState) => state.productReducer);
  useEffect(() => {
    nav.setOptions({
      headerTitle: 'Card Item',
      headerRight: () => (
        <TouchableOpacity onPress={() => clearCardAll()}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.imgIconSmall}
          />
        </TouchableOpacity>
      ),
    });
    dispatch(getCardDataList());
  }, [dispatch]);

  const removeItem = item => {
    dispatch(removeFromCard(item));
  };
  const clearCardAll = () => {
    dispatch(clearCard());
  };

  const renderItem = ({item}: {item: ProductType}) => (
    <View style={styles.card}>
      <View style={styles.rowView}>
        <Image style={styles.imgProduct} source={{uri: item.img}} />
        <SizeBox width={20} />
        <View style={{flex: 1}}>
          <Text style={styles.title}>{item.name}</Text>
          <Text numberOfLines={3} style={styles.labelSmall}>
            {'Price:'} {item.price}
          </Text>
          <Text style={CommonSyle.stickText}>Old Price: {item.oldPrice}</Text>
        </View>
        <TouchableOpacity onPress={() => removeItem(item)}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.imgIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cardList.length ? (
        <FlatList
          style={styles.flatListStyle}
          data={cardList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text style={styles.noData}>Your card it empty!</Text>
      )}
      {/*   <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

export default AddToCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  flatListStyle: {flex: 1, backgroundColor: 'white'},
  card: {
    //width: '100%',
    // width: Dimensions.get('screen').width - 50,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 4,
    borderRadius: 10,
    flex: 1,
  },
  rowView: {flexDirection: 'row', flex: 1, flexWrap: 'wrap'},
  imgProduct: {
    height: 70,
    width: 70,
  },
  imgIcon: {
    height: 30,
    width: 30,
  },
  imgIconSmall: {
    height: 25,
    width: 25,
    tintColor: 'red',
  },
  title: {
    fontSize: 18,
    fontFamily: 'bold',
    color: 'black',
    flexWrap: 'wrap',
  },
  noData: {
    fontSize: 20,
    fontFamily: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  labelSmall: {
    fontSize: 16,
    fontFamily: 'bold',
    color: 'black',
  },
  stickText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
