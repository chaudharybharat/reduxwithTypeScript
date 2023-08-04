import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserDataList} from './redux/domin/action';
import {RootState} from './redux/store';
import {UserType} from './redux/type';
import AppLoader from '../utile/loader_view';

const UserListScreen = () => {
  const renderItem = ({item}: {item: UserType}) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.id} </Text>
      <View style={styles.rowView}>
        <Image style={styles.img} source={{uri: item.image}} />
        <View style={{flex: 1}}>
          <Text style={styles.title}>
            {item.firstName} {item.lastName}{' '}
          </Text>
          <Text numberOfLines={3} style={styles.labelSmall}>
            {item.university}
          </Text>
          <Text numberOfLines={3} style={styles.labelSmall}>
            {item.address.address}
          </Text>
        </View>
      </View>
    </View>
  );
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const userList = useSelector((state: RootState) => state.userReducer);
  useEffect(() => {
    setLoading(true);
    dispatch(getUserDataList());
    setLoading(false);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {userList.length ? (
        <FlatList
          data={userList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : !isLoading ? (
        <AppLoader />
      ) : (
        <Text style={styles.loading}>Not found user list</Text>
      )}
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 15,
    margin: 12,
    borderRadius: 10,
    flex: 1,
  },
  rowView: {flexDirection: 'row', flex: 1, flexWrap: 'wrap'},
  img: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 18,
    fontFamily: 'bold',
    color: 'black',
    flexWrap: 'wrap',
  },
  loading: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'bold',
    color: 'black',
    flex: 1,
    alignSelf: 'center',
  },
  labelSmall: {
    fontSize: 16,
    fontFamily: 'bold',
    color: 'black',
  },
});
