import React from "react"
import PropTypes from "prop-types"
import { TouchableOpacity, Text, Image, View, SearchBar} from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"

const styles = EStyleSheet.create({
  restaurantName: {
    margin: "2.5rem",
  },
})

const SearchFilterBar = (placeholder,onChangeText,value) => {
  return (
   <SearchBar
    placeholder="Type Here..."
    onChangeText={()=>{}}
    value={"test"}
/>
  )
}


export default SearchFilterBar
