import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Simpl from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SchoolDashboard() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.card}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Simpl name="book-open-page-variant" size={82} color="coral" />
              <Text style={styles.text}>List Of Bus</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Fontisto name="checkbox-active" size={82} color="coral" />
              <Text style={styles.text}>Update Record</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <MaterialIcons name="manage-accounts" size={82} color="coral" />
              <Text style={styles.text}>Manage Drivers</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Simpl name="store" size={82} color="coral" />
              <Text style={styles.text}>Store Details</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <MaterialIcons name="contact-emergency" size={82} color="coral" />
              <Text style={styles.text}>Emergency </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
    // marginTop: cardgap,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  card: {
    width: 165,
    padding: 0,
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    marginTop: 10,
    fontWeight: '400',
    color: 'black',
    textTransform: 'uppercase',
    fontSize: 18,
  },
});
