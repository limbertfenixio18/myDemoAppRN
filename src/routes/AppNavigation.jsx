import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import PostScreen from "../screens/PostScreen";
import SearchScreen from "../screens/SearchScreen";
import colors from "../styles/colors";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  function goTo(navigation, route) {
    navigation.navigate(route);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            title: "Hola!",
            headerStyle: {
              backgroundColor: colors.primaryColor,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Feather
                name="search"
                size={25}
                color="white"
                onPress={() => goTo(navigation, "SearchUser")}
                style={{ marginLeft: 1 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="SearchUser"
          component={SearchScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({ navigation, route }) => ({
            title: "Mis Posts",
            headerStyle: {
              backgroundColor: colors.primaryColor,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
