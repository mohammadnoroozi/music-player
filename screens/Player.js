import React from "react";
import { Image, StyleSheet, Text, View, Slider, TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

const gray = "#91A1BD";

const Player = () => {


  const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {
                width: size || 40,
                height: size || 40,
                borderRadius: size / 2 || 40 / 2,
              },
              style,
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "stretch" }}>
        <View style={{ marginHorizontal: 32, marginTop: 50 }}>
          <View style={styles.topContainer}>
            <TouchableOpacity>
              <NeuMorph size={45}>
                <Ionicons name="cloud-download-outline" size={20} color={gray} />
              </NeuMorph>
            </TouchableOpacity>
            <View>
              <Text style={styles.playing}>PLAYING NOW</Text>
            </View>

            <NeuMorph size={45}>
              <Entypo name="menu" size={24} color={gray} />
            </NeuMorph>
          </View>

          <View style={styles.songArtContainer}>
            <NeuMorph size={260}>
              <Image
                source={require("../assets/cover.jpg")}
                style={styles.songArt}
              />
            </NeuMorph>
          </View>

          <View style={styles.songContainer}>
            <Text style={styles.title}>Lost it</Text>
            <Text style={styles.artist}>Flume ft. Vic Mensa</Text>
          </View>

          <View style={styles.trackContainer}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.time}>1.21</Text>
              <Text style={styles.time}>3.46</Text>
            </View>
            <Slider minimumValue={0} maximumValue={1} minimumTrackTintColor="#8AAAFF" maximumTrackTintColor="#fff" thumbTintColor="#7B9BFF" />
          </View>

          <View style={styles.controlContainer}>
            <TouchableOpacity>
              <NeuMorph size={70}>
                <Ionicons name="play-forward" size={24} color={gray} style={{ marginRight: 3 }} />
              </NeuMorph>
            </TouchableOpacity>

            <TouchableOpacity>
              <NeuMorph size={70} style={{ backgroundColor: "#8AAAFF", borderColor: "#8AAAFF", alignItems: "center", justifyContent: "center" }}>
                <Ionicons name={"play"} size={32} color="#FFF" style={{ marginLeft: 5 }} />
              </NeuMorph>
            </TouchableOpacity>

            <TouchableOpacity>
              <NeuMorph size={70}>
                <Ionicons name="play-back" size={24} color={gray} style={{ marginRight: -3 }} />
              </NeuMorph>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}


export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE9FD",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inner: {
    backgroundColor: "#DEE9F7",
    borderColor: "#E2ECFD",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#FBFFFF",
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD",
  },
  playing: {
    color: gray,
    fontWeight: "800",
  },
  songArtContainer: {
    alignItems: "center",
    marginVertical: 20,
    paddingTop: 70
  },
  songArt: {
    width: 260,
    height: 260,
    borderRadius: 135,
    borderColor: "#D7E1F3",
    borderWidth: 10,
  },
  songContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#6C7A93",
    fontWeight: "600"
  },
  artist: {
    marginTop: 6,
    fontSize: 14,
    color: gray,
    fontWeight: "500"
  },
  trackContainer: {
    marginTop: 20,
    marginBottom: 14,
    direction: "ltr"
  },
  time: {
    fontSize: 10,
    color: gray,
    fontWeight: "500"
  },
  controlContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
