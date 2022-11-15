import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import DietToggle from '../../components/Diet Toggle'
import { ScrollView } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1rem',
    width: '100%',
    paddingLeft: '6.25vw',
    paddingRight: '6.25vw',
    boxSixing: 'border-box',
    marginTop: '1rem',
  },
  restrictionGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    width: '100%',
    paddingLeft: '6.25vw',
    paddingRight: '6.25vw',
    boxSixing: 'border-box',
    justifyContent: 'space-between',
    gridGap: '6.25vw',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '6.25vw',
  },
})

const DietaryRestrictions = ({ navigation }) => (
  <ScrollView>
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Almost Done!</Text>
      {/* placeholder for component for profile picture */}
      <Image
        style={{ width: '30vw', height: '30vw' }}
        source={{
          uri: 'http://www.clker.com/cliparts/t/O/b/8/F/F/lime-slice-md.png',
        }}
      ></Image>
      <Text style={styles.text}>
        Add your dietary restrictions or preferences for a better NOMS
        experience!
      </Text>

      <View style={styles.buttonContainer}>
        <View style={{ flex: 1 }}></View>
        <Button title="Skip"></Button>
      </View>

      <View style={styles.restrictionGrid}>
        <DietToggle title={'Vegetarian'} value={false}></DietToggle>
        <DietToggle title={'Vegan'} value={false}></DietToggle>
        <DietToggle title={'Halal'} value={false}></DietToggle>
        <DietToggle title={'Dairy'} value={false}></DietToggle>
        <DietToggle title={'Shellfish'} value={false}></DietToggle>
        <DietToggle title={'Wheat'} value={false}></DietToggle>
        <DietToggle title={'Vegetarian'} value={false}></DietToggle>
        <DietToggle title={'Vegan'} value={false}></DietToggle>
        <DietToggle title={'Halal'} value={false}></DietToggle>
        <DietToggle title={'Dairy'} value={false}></DietToggle>
        <DietToggle title={'Shellfish'} value={false}></DietToggle>
        <DietToggle title={'Wheat'} value={false}></DietToggle>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Back"></Button>
        <View style={{ flex: 1 }}></View>
        <Button title="Finish"></Button>
      </View>
    </View>
  </ScrollView>
)

DietaryRestrictions.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

DietaryRestrictions.defaultProps = {
  navigation: { navigate: () => null },
}

export default DietaryRestrictions
