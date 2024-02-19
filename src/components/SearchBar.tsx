import {Link} from '@react-navigation/native';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            name="search"
            style={styles.searchIcon}
            size={20}
            color={Colors.medium}
          />
          <TextInput
            style={styles.input}
            placeholder="Resturants, groceries, dishes"
          />
        </View>
        <Link to={{screen: 'Home'}}>
          <TouchableOpacity style={styles.optionbutton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
    paddingHorizontal: 20,
  },
  searchField: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
  },
  searchIcon: {
    paddingLeft: 5,
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  optionbutton: {
    padding: 10,
  },
});
