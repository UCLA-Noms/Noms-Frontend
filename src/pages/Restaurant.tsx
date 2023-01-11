import React from "react"
import PropTypes from "prop-types"
import { Text, View, StatusBar, Image, SafeAreaView } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import EStyleSheet from "react-native-extended-stylesheet"
import { vw } from "react-native-expo-viewport-units"
import RestaurantItem from "../components/RestaurantItem"
import { images } from "../theme"

const styles = EStyleSheet.create({
  topImage: {
    width: "100%",
    height: vw(50),
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -10,
  },
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    marginTop: vw(55),
    fontWeight: "bold",
    width: "100%",
    textAlign: "left",
    paddingHorizontal: vw(10),
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1rem",
    width: "100%",
    textAlign: "left",
    paddingLeft: vw(5),
    fontStyle: "italic",
  },
  infoTextContainer: {
    width: "100%",
    textAlign: "left",
    paddingHorizontal: vw(10),
    display: "flex",
    flexDirection: "row",
  },
  restrictionGrid: {
    // display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr",
    // width: "100%",
    // paddingLeft: vw(6.25),
    // paddingRight: vw(6.25),
    // boxSixing: "border-box",
    // justifyContent: "space-between",
    // gridGap: vw(6.25),
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: vw(6.25),
  },
  image: {
    width: vw(30),
    height: vw(30),
  },
})

const Restaurant = () => (
  <SafeAreaView style={{ backgroundColor: "white" }}>
    <ScrollView>
      <View style={styles.root}>
        <Image
          style={{ ...styles.topImage }}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/323b/b6a5/f9ac0c42b6e48ecccccafff0770b5990?Expires=1670803200&Signature=LliePNfYw3oq-2s~y1OIfbnBgK5-R7Q09LpdRKWBg3mSc-u6a9FgT7L~~~YxAt~CWF-oRJQnfIa6F7sXEUNGfPIMG05QDhUPSlLhz6pr3KOoZr~kkuJk0am4FIg73~TUWQ5ZrESMyjqAsg~BhLA2q7vz4M5hYyrgIOVU2~fBNK5IPzEVi6ESTIlHh1xcM8B7CjcXT39Tn9q29-qG1IKIRvhbIhJvjaLSTbDHmIMOInnpJ0neHF08fJoY-xTuu-uzKA3YXD89soDM9mQy~BUNcc6SIfVB4xznnhciQgJpAXl1OA89GwOOzFt4SoUnWsUCuhh~NKe-ZIwbKDsXkHcxLw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          }}
        />
        <View
          style={{
            ...styles.topImage,
            background: "linear-gradient(#DDDDDD33, white)",
            outline: "3px solid white",
          }}
        />
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>The Drey</Text>
        <View style={{ ...styles.infoTextContainer }}>
          <Image source={images.bag} style={{ width: 20, height: 20 }} />
          <Text style={styles.text}>Drey Menu Perishable Items</Text>
        </View>
        <View style={{ ...styles.infoTextContainer }}>
          <Image source={images.timer1} style={{ width: 20, height: 20 }} />
          <Text style={styles.text}>Collection: 8:50 PM - 9:00 PM</Text>
        </View>
        <View style={{ ...styles.infoTextContainer }}>
          <Image source={images.clock} style={{ width: 20, height: 20 }} />
          <Text style={{ ...styles.text, color: "#04D200" }}>Open now</Text>
        </View>
        <RestaurantItem
          title="Mapo Tofu"
          imageUrl="https://s3-alpha-sig.figma.com/img/9518/2c45/66aeabaa164d9e69cead81c898bb1150?Expires=1670803200&Signature=Pch6TSN52gduaUhv829iXmmCAoBUv9QRVLXsntfij~HCJpAJLtGJ3hYInRSULVZZ~9DRGjnfC96iPsvXj55WBQSzekxyN2N1TcpOX2YLqRyXNZ6VIGXDmFG-MM1QPDuoEMkbg3tO9hU~exX2LT3GDk2Mi24m28zsbZcDa5ZFZlQpVG7uh1OZrrAK4dp0IzxxEG4LW2avIC~vlsx8zZebQw9cZIWmEpJmuquXycpo0Rbd0tb22FsfFP8xDzYMzR~APiu2JCTnf6gYy8UTmIhrg4u0uTszdqsM7Nh99tyd07ARKv9IlFqXgyM-PQw48llnQyjesMemAvRT4keRpMB5lA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          restrictions={["vegan", "treeNuts", "grain"]}
          price={5.99}
        />
        <RestaurantItem
          title="Drey Item"
          imageUrl="https://s3-alpha-sig.figma.com/img/4130/206e/fb50e0385d1c8481155291a2b437e3fc?Expires=1670803200&Signature=BgV5KR3j7cZQaPPKt52yJoEc9anywWoaesttjTbeB8R8wxysiwAmkU5gc2Hl0IsblludHjcn1Gk8IUMyDo7SFa-sCgyRYkUzLDOp5~bbf7v79ziTcE73kUj6OGwb-1vClDITd0IhEjO4HmHZEvkEDfz72JkHYcovbqUgFzicmuAxk-IIBBfmq~zDYN3JmzJ2wM6mwtisI5Qt0JTM1aIqsdUbxvcBVLPjZTe8VS82~lMtyN6tlg2ieerIPdONGcFWetCtyzPxaQqheHdI~6Ozn05iuexAIyQxV6H3uHnfwbVUssNng6IkmCcPBn3OeJZ1s1Ydtbb9uqxLsyXkIxQyAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          restrictions={["vegan", "halal"]}
          price={6.99}
        />
        <RestaurantItem
          title="Bulgogi Bento"
          imageUrl="https://s3-alpha-sig.figma.com/img/7ce6/9274/0e829e803dd4ab81f87f24b5db024939?Expires=1670803200&Signature=cI7qfaopYQi2qWOiZxB4iswq7x-li5yLOLnU-Owoz9-HzRoSahPD9FdfbVAFou9uX9~TFzb5g9g6TPsQxoM13rhYm2tH3qlgRIl2AUPEJdupA4KvFnnRyHH7qC5Ofrt-wtwBuVh4nlH6L3Bp~F-YmJ54nip98qwIiOQfaS0~N1LcuGPkjyKSizQFvPRet2Q9nX9UffzWr20mukMTqSHfMmQd~Qtjzvzb-3q9qzELD-Fwrpc8lYibaLKW0wXl7qW6Pqmuv25NXfeR0JPUxa7g2gkWSEH0jqzoQFKBAfiKbJw8DEvdhvGauYbOoXmBk1wI31csqeTyQSLeyaQuIxoDJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          restrictions={["shellfish", "eggs", "soy", "eggs"]}
          price={10.99}
        />
        <RestaurantItem
          title="Mapo Tofu"
          imageUrl="https://s3-alpha-sig.figma.com/img/9518/2c45/66aeabaa164d9e69cead81c898bb1150?Expires=1670803200&Signature=Pch6TSN52gduaUhv829iXmmCAoBUv9QRVLXsntfij~HCJpAJLtGJ3hYInRSULVZZ~9DRGjnfC96iPsvXj55WBQSzekxyN2N1TcpOX2YLqRyXNZ6VIGXDmFG-MM1QPDuoEMkbg3tO9hU~exX2LT3GDk2Mi24m28zsbZcDa5ZFZlQpVG7uh1OZrrAK4dp0IzxxEG4LW2avIC~vlsx8zZebQw9cZIWmEpJmuquXycpo0Rbd0tb22FsfFP8xDzYMzR~APiu2JCTnf6gYy8UTmIhrg4u0uTszdqsM7Nh99tyd07ARKv9IlFqXgyM-PQw48llnQyjesMemAvRT4keRpMB5lA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          restrictions={["vegan", "treeNuts", "grain"]}
          price={5.99}
        />
        <RestaurantItem
          title="Drey Item"
          imageUrl="https://s3-alpha-sig.figma.com/img/4130/206e/fb50e0385d1c8481155291a2b437e3fc?Expires=1670803200&Signature=BgV5KR3j7cZQaPPKt52yJoEc9anywWoaesttjTbeB8R8wxysiwAmkU5gc2Hl0IsblludHjcn1Gk8IUMyDo7SFa-sCgyRYkUzLDOp5~bbf7v79ziTcE73kUj6OGwb-1vClDITd0IhEjO4HmHZEvkEDfz72JkHYcovbqUgFzicmuAxk-IIBBfmq~zDYN3JmzJ2wM6mwtisI5Qt0JTM1aIqsdUbxvcBVLPjZTe8VS82~lMtyN6tlg2ieerIPdONGcFWetCtyzPxaQqheHdI~6Ozn05iuexAIyQxV6H3uHnfwbVUssNng6IkmCcPBn3OeJZ1s1Ydtbb9uqxLsyXkIxQyAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          restrictions={["vegan", "halal"]}
          price={6.99}
        />
        <RestaurantItem
          title="Bulgogi Bento"
          imageUrl="https://s3-alpha-sig.figma.com/img/7ce6/9274/0e829e803dd4ab81f87f24b5db024939?Expires=1670803200&Signature=cI7qfaopYQi2qWOiZxB4iswq7x-li5yLOLnU-Owoz9-HzRoSahPD9FdfbVAFou9uX9~TFzb5g9g6TPsQxoM13rhYm2tH3qlgRIl2AUPEJdupA4KvFnnRyHH7qC5Ofrt-wtwBuVh4nlH6L3Bp~F-YmJ54nip98qwIiOQfaS0~N1LcuGPkjyKSizQFvPRet2Q9nX9UffzWr20mukMTqSHfMmQd~Qtjzvzb-3q9qzELD-Fwrpc8lYibaLKW0wXl7qW6Pqmuv25NXfeR0JPUxa7g2gkWSEH0jqzoQFKBAfiKbJw8DEvdhvGauYbOoXmBk1wI31csqeTyQSLeyaQuIxoDJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          restrictions={["shellfish", "eggs", "soy", "eggs"]}
          price={10.99}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
)

Restaurant.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Restaurant.defaultProps = {
  navigation: { navigate: () => null },
}

export default Restaurant
