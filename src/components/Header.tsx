import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BikeImage from '../../assets/images/bike.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import SearchBar from './SearchBar';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const Header = () => {
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef}/>
      <View style={styles.container}>
        {/* Bike */}
        <TouchableOpacity onPress={openModal}>
          <Image source={BikeImage} style={styles.bike} />
        </TouchableOpacity>
        {/*  */}
        <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
          <Text style={styles.title}>Delivery . Now</Text>
          <View style={styles.locationWrapper}>
            <Text style={styles.subTitle}>Gujranwala</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        {/* Pofile Button */}
        <TouchableOpacity style={styles.profileButton} onPress={openModal}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
});
