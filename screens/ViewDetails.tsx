import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Imp from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../routing/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';

type ViewDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ViewDetails'>;
const cardgap = 16;

const cardwidth = (Dimensions.get('window').width - cardgap * 3) / 2;

type ViewDetailScreenProps = {
  route: ViewDetailsScreenRouteProp;
  navigation: NativeStackScreenProps<
    RootStackParamList,
    'ViewDetails'
  >['navigation'];
};

const ViewDetails: React.FC<ViewDetailScreenProps> = (props: any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.card}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                props.navigation.navigate('Maps');
              }}>
              <Imp name="bus-marker" size={82} color="coral" />
              <Text style={styles.text}>Bus Location</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Imp name="bus-clock" size={82} color="coral" />
              <Text style={styles.text}>Bus Schedule</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.card, {marginTop: 50}]}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Imp name="routes" size={82} color="coral" />
              <Text style={styles.text}>Bus Routes</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.card, {marginTop: 50}]}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Imp name="bus-alert" size={82} color="coral" />
              <Text style={styles.text}>Bus Alerts</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default ViewDetails;

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
