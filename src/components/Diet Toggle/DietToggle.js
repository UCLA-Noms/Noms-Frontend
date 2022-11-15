import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'

const styles = {
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: '1rem',
    marginTop: '0.5rem',
    borderRadius: '0.5rem',
  },
  container: {
    backgroundColor: 'transparent',
    borderRadius: '0.5rem',
    width: '25vw',
    height: '25vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggledOn: {
    backgroundColor: 'powderblue',
    outline: '0.5rem solid powderblue',
  },
}

const DietToggle = ({
  title,
  value,
  handleChange,
  onPress,
  children,
  textStyle,
  style,
}) => {
  const [toggled, setToggled] = useState(value)

  return (
    <TouchableOpacity
      onPress={function () {
        setToggled(!toggled)
      }}
    >
      <View style={{ ...styles.container }}>
        <View
          style={{
            ...{
              width: '10vw',
              height: '10vw',
              borderRadius: '100%',
              borderWidth: '2px',
            },
            ...(toggled ? styles.toggledOn : {}),
          }}
        ></View>

        <Text style={{ ...styles.text, ...(toggled ? styles.toggledOn : {}) }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

DietToggle.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.string,
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
}

DietToggle.defaultProps = {
  title: null,
  width: 'auto',
  height: 'auto',
  color: 'black',
  backgroundColor: '#cacaca',
  onPress: () => {},
  children: null,
  textStyle: {},
  style: {},
}

export default DietToggle
