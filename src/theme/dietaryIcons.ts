import { Asset } from "expo-asset"

const dietaryIcons = {
  dairy: require("../../assets/images/dietaryRestrictionIcons/Dairy.png"),
  eggs: require("../../assets/images/dietaryRestrictionIcons/Eggs.png"),
  fish: require("../../assets/images/dietaryRestrictionIcons/Fish.png"),
  glutenFree: require("../../assets/images/dietaryRestrictionIcons/Gluten Free.png"),
  grain: require("../../assets/images/dietaryRestrictionIcons/Grain.png"),
  halal: require("../../assets/images/dietaryRestrictionIcons/Halal.png"),
  nuts: require("../../assets/images/dietaryRestrictionIcons/Nuts.png"),
  shellfish: require("../../assets/images/dietaryRestrictionIcons/Shellfish.png"),
  soy: require("../../assets/images/dietaryRestrictionIcons/Soy.png"),
  treeNuts: require("../../assets/images/dietaryRestrictionIcons/Tree Nuts.png"),
  vegan: require("../../assets/images/dietaryRestrictionIcons/Vegan.png"),
  vegetarian: require("../../assets/images/dietaryRestrictionIcons/Vegetarian.png"),
}

// image preloading
export const imageAssets = Object.keys(dietaryIcons).map((key) =>
  Asset.fromModule(dietaryIcons[key]).downloadAsync(),
)

export default dietaryIcons
