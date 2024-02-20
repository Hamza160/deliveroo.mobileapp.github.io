import * as React from 'react';
import {Button, StyleSheet, Text, View, Dimensions} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Link} from '@react-navigation/native';

export type Ref = BottomSheetModal;

const {width} = Dimensions.get('window');

const BottomSheet = React.forwardRef<Ref>((props, ref) => {
  const snapPoints = React.useMemo(() => ['50%'], []);
  const {dismiss} = useBottomSheetModal();
  const renderBackdrop = React.useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );
  return (
    <BottomSheetModal
      backgroundStyle={{backgroundColor: Colors.lightGrey, borderRadius: 0}}
      handleIndicatorStyle={{display: 'none'}}
      overDragResistanceFactor={0}
      backgroundComponent={renderBackdrop}
      ref={ref}
      snapPoints={snapPoints}>
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity
            style={styles.toggleActive}
            onPress={() => dismiss()}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toggleInactive}
            onPress={() => dismiss()}>
            <Text style={styles.inactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subheader}>Your Location</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name="location-outline" size={20} color={Colors.medium} />
            <Text style={{flex: 1}}>Use Current Location</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.medium} />
          </View>
        </TouchableOpacity>
        <Text style={styles.subheader}>Arrival Time</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons
              name="stopwatch-outline"
              size={20}
              color={Colors.medium}
            />
            <Text style={{flex: 1}}>Use Current Location</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.medium} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  toggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText: {
    color: '#fff',
    fontWeight: '700',
  },
  toggleInactive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  inactiveText: {
    color: Colors.primary,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 16,
    fontWeight: '600',
    margin: 16,
    color: '#000',
  },
  item: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
});
