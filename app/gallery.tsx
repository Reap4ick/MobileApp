import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

export default function Gallery() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Галерея картин</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: "https://print4you.com.ua/upload/resize_cache/iblock/030/444_480_1/03043f5375e71b7cd896870b5f9b3c2c.jpg" }} 
          style={styles.image}
        />
        <Text style={styles.imageTitle}>"Зоряна ніч"</Text>
      </View>


      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: "https://lh6.googleusercontent.com/proxy/RobCWTgESCMosEDee1pbRRrO2MqweIu5wPtTQulQdh_x1QO6YLqhcACtnxMv_ZPJlbIOKVzcbO34nWyKbfJU0FqVGvRn-8o" }} 
          style={styles.image}
        />
        <Text style={styles.imageTitle}>"Крик"</Text>
      </View>
      
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: "https://images.prom.ua/307685986_w600_h600_307685986.jpg" }} 
          style={styles.image}
        />
        <Text style={styles.imageTitle}>"Нічна тераса кафе"</Text>
      </View>
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "#9b59b6",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  imageTitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
});
