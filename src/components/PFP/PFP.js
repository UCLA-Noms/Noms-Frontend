import { Image, StyleSheet, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import PropTypes from "prop-types"
import { images, colors } from "../../theme"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrayPurple,
  },
  bigtitle: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
  },
  smalltext: {
    fontSize: 20,
  },
  grid: {
    flex: 3, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
    backgroundColor: "red",
  },
  row: {
    flexDirection: "row",
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightGrayPurple,
    alignItems: "center",
    justifyContent: "center",
  },
  profilecircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    overflow: "hidden",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})

const PFP = ({
  size = 100, image, selected, select,
}) => {
  const pfps = [
    images.pfp1,
    images.pfp2,
    images.pfp3,
    images.pfp4,
    images.pfp5,
    images.pfp6,
  ]
  return (
    <TouchableOpacity onPress={() => select()}>
      <View
        style={[
          styles.profilecircle,
          {
            backgroundColor: selected
              ? colors.lightBlue
              : colors.lightGrayPurple,
          },
        ]}
      >
        <Image
          style={{ width: size, height: size, borderRadius: size / 2 }}
          source={pfps[image]}
        />
      </View>
    </TouchableOpacity>
  )
}

PFP.propTypes = {
  size: PropTypes.number,
  selected: PropTypes.bool,
  select: PropTypes.func,
  image: PropTypes.number,
}

PFP.defaultProps = {
  size: 100,
  selected: false,
  select: null,
  image: 0,
}

export default PFP
