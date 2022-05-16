import { useContext } from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "react-native-elements";
import { PostContext } from "../context/post_context";

export default function PostDetailScreen(props) {
  const [post, postAction] = useContext(PostContext);

  return (
    <View>
      <StatusBar
        animated={true}
        hidden={false}
        backgroundColor="#BA4C0000"
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <Image
        source={{ uri: post.post.url }}
        style={{ width: "100%", height: 300 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.title}>{post.post.title}</Text>
      <Text style={styles.body}>{post.post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },

  title: {
    margin: 10,
    fontSize: 21,
    fontWeight: "300",
  },

  body: {
    margin: 10,
    fontSize: 14,
  },
});
