import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card, Image } from "react-native-elements";
import { PostContext } from "../context/post_context";
import { UsuarioContext } from "../context/usuario_context";
import { getPhotos, getPosts } from "../services/posts_service";
import colors from "../styles/colors";

export default function PostScreen(props) {
  const [login, loginAction] = useContext(UsuarioContext);
  const [post, postAction] = useContext(PostContext);

  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPosts().then(
      (res) => {
        var postsUser = res.filter((el) => el.userId == login.usuario.id);

        getPhotos().then((resPhotos) => {
          var photosFilter = [];
          postsUser.forEach((post) => {
            photosFilter = resPhotos.filter((el) => el.id == post.id);
            post.thumbnailUrl = photosFilter[0].thumbnailUrl;
            post.url = photosFilter[0].url;
          });

          setPosts(postsUser);
          setPhotos(photosFilter);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  function goTo(post, route) {
    postAction({ type: "guardar_post", data: post });
    props.navigation.navigate(route);
  }

  return (
    <View style={{ paddingTop: 10, paddingBottom: 10 }}>
      <ScrollView>
        {posts.length > 0 ? (
          <></>
        ) : (
          <ActivityIndicator size="large" color={colors.primaryColor} />
        )}
        {posts.map((post, i) => (
          <Pressable onPress={() => goTo(post, "PostDetail")}>
            <Card containerStyle={{ padding: 0 }}>
              <View key={i} style={styles.container}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{
                    uri: post.thumbnailUrl,
                  }}
                />
                <Text style={styles.name}>{post.title}</Text>
              </View>
            </Card>
          </Pressable>
        ))}
      </ScrollView>
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
  name: {
    margin: 10,
    fontSize: 21,
  },
});
