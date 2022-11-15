import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Button from 'components/Button'
import RestaurantCard from 'components/Restaurant Card'
import { colors } from 'theme'
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
    fontSize: 24,
    marginBottom: 20,
  },
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <ScrollView style={{ width: '100%' }}>
      <RestaurantCard
        restaurantName="Egg Truck"
        closingTime={new Date()}
        rating={2.3}
        price={4}
        distance={1.5}
        liked={false}
      />
      <RestaurantCard
        restaurantName="Egg Truck"
        closingTime={new Date()}
        rating={2.3}
        price={4}
        distance={1.5}
        liked={false}
      />
      <RestaurantCard
        restaurantName="Egg Truck"
        closingTime={new Date()}
        rating={2.3}
        price={4}
        distance={1.5}
        liked={false}
      />
      <RestaurantCard
        restaurantName="Egg Truck"
        closingTime={new Date()}
        rating={2.3}
        price={4}
        distance={1.5}
        liked={false}
      />
    </ScrollView>
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
