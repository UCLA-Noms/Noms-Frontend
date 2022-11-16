// https://react-native-async-storage.github.io/async-storage/docs/advanced/jest/

import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock"

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage)
