import "react-native"
import renderer from "react-test-renderer"
import App from "../App.tsx"

it("renders correctly", () => {
  renderer.create(<App />)
})
