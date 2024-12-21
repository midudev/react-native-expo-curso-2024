import { ActivityIndicator, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { getLatestGames } from '../lib/metacritic';
import { AnimatedGameCard } from './GameCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo } from './Logo';

export function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets();
  useEffect (() => {
    getLatestGames().then((games) => {
      setGames(games)
    })
  }, []);


  
  return (
<View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
    <View style={{ marginBottom: 20, alignItems: 'center',}}>
      <Logo />
    </View>
      {games.length === 0 ? (
          <ActivityIndicator color={'red'} size={'large'}/>
      ) : (
     <FlatList // This only renders what we see, => better performance
        data={games}
        keyExtractor={game => game.id}  
        renderItem={({ item, index }) => 
        <AnimatedGameCard game={item} index={index} />} 
    />
      )}
</View>
  );
}
