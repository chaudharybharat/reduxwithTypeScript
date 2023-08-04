import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import SizeBox from '../utile/SizeBox';
import {RootState} from './redux/store';

type propsType = {
  handleClickUserList: () => void;
  handleClickCardItem: () => void;
};
const Header = (props: propsType) => {
  const [cardItem, setCardItem] = useState(0);
  const cardData = useSelector((state: RootState) => state.productReducer);

  useEffect(() => {
    setCardItem(cardData.length);
  }, [cardData]);

  return (
    <View style={styles.navBar}>
      <View style={styles.leftContainer}>
        <Text style={[styles.text, {textAlign: 'left'}]}>Back</Text>
      </View>
      <Text style={styles.title}>Product List</Text>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={props.handleClickUserList}>
          <Image
            source={require('../assets/userList.png')}
            style={styles.imgIcon}
          />
        </TouchableOpacity>
        <SizeBox width={8} />
        <TouchableOpacity onPress={props.handleClickCardItem}>
          <View style={styles.circle}>
            <Text style={styles.cardText}>{cardItem}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    height: 60,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  title: {
    textAlignVertical: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontFamily: 'bold',
    color: 'white',
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontFamily: 'bold',
    color: 'white',
  },
  imgIcon: {
    height: 45,
    width: 45,
    tintColor: 'red',
  },
  navBar: {
    height: 60,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //backgroundColor: 'green',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  circle: {
    alignItems: 'center',
    height: 28,
    width: 28,
    borderRadius: 28 / 2,
    backgroundColor: 'red',
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    // backgroundColor: 'white',
  },
});
