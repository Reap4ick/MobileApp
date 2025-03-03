import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/VanGogh_1887_Selbstbildnis.jpg/274px-VanGogh_1887_Selbstbildnis.jpg" }} 
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Ван Гог</Text>
          <Text style={styles.description}>
            Він був одним з найвідоміших художників-постімпресіоністів, чия творчість
            мала величезний вплив на мистецтво XX століття. Він створив понад 2 100
            робіт, серед яких близько 860 картин маслом.
          </Text>
        </View>
      </View>

      <Text style={styles.description}>
        Народився Ван Гог 30 березня 1853 року в Голландії, а помер 29 липня 1890 року
        у Франції. Його роботи вплинули на багато художників і стали символами
        постімпресіонізму.
      </Text>
      <Link href="/gallery" style={styles.link}>Переглянути галерею картин</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: "#9b59b6",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 10,
    textAlign: "center",
  },
  link: {
    textDecorationLine: "underline",
    color: "#f39c12",
    fontSize: 18,
    marginTop: 10,
  },
});
