import React from 'react'
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={styles.imageLayout}
      >
        <Text style={[styles.cityName, styles.cityText]}>Chicago</Text>
        <Text style={[styles.countryName, styles.cityText]}>United States</Text>
        <View style={styles.populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={'8000'}
            bodyTextSyles={styles.populationText}
          />
        </View>
        <View style={styles.riseSetWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'10:46:58am'}
            bodyTextStyles={styles.riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'17:28:15pm'}
            bodyTextStyles={styles.riseSetText}
          />
          <Text>17:28:15pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontsize: 25,
    marginLeft: 25,
    color: 'red'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  }
})
export default City