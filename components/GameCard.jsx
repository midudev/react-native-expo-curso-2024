import { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native"
export const GameCard = ({ game }) => {
  return (
        <View key={game.id} style={styles.card}>
          <Image source={{ uri: game.thumbnail }} style={styles.image}/>
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.description}>{game.short_description}</Text>
          <Text style={styles.platform}>{game.platform}</Text>
          <Text style={styles.releasedate}>{game.release_date}</Text>
        </View>  )
}

export function AnimatedGameCard({game, index}) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 250,
            useNativeDriver: true,
        }).start();
    }, [ opacity, index ])

    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game}/>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fontColor: {
      color: '#fff'
    },
    card: {
      margin: 5,
      padding: 5,
      alignSelf: 'flex-start',
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    title: {
      color: 'green',
      fontSize: 24,
    },
    description: {
      color: 'white',
      fontSize: 18,
    },
    platform: {
      color: 'grey',
    },
    releasedate: {
      color: 'orange',
    }
  });