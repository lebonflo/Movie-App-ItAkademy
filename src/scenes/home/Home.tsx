import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { format, parseISO } from 'date-fns';
import api from '../../services/api';

import {
  Container,
  ThumbMovie,
  Header,
  Title,
  MovieImage,
  MovieDetails,
  NameMovie,
  Informations,
  Avalitions,
  Classification,
  Note,
  NoteText,
  Details,
  GenreView,
  Genre,
  GenreText,
  ShowMore,
  ShowMoreText,
  Filters,
  MoviesList,
  Search,
  Input,
  TitleList,
} from './Home.s';
const Home: React.FC = () => {
  const shadow = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 25,
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies(): Promise<void> {
      const response = await api.get('/movies');
      console.log(response);
      setMovies(response.data);
    }
    loadMovies();
  }, []);

  const navigation = useNavigation();

  return (
    <>
      <Container>
        <StatusBar barStyle="dark-content" translucent backgroundColor="#fff" />

        <Filters>
          <Search>
            <Icon
              name="search"
              size={20}
              color="#888"
              style={{ paddingLeft: 15 }}
            />
            <Input placeholder="Rechercher un film..." />
            <Icon
              name="mic"
              size={20}
              color="#888"
              style={{ paddingRight: 15 }}
            />
          </Search>

          <TitleList>Les meilleurs films.</TitleList>
        </Filters>

        <MoviesList
          data={movies}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ThumbMovie style={{ ...shadow }}>
              <MovieImage source={{ uri: item.image }} />
              <MovieDetails>
                <Avalitions>
                  <Note>
                    <NoteText>{item.imdb}</NoteText>
                  </Note>
                </Avalitions>

                <Details>
                  <NameMovie>{item.title}</NameMovie>
                  <Informations>
                    {item.duration} |
                    {format(parseISO(item.launch), " d MM 2020")}
                  </Informations>
                </Details>

                <Classification>
                  <Genre>
                    {item.genre.map((genreMovie: string) => (
                      <GenreView key={genreMovie}>
                        <GenreText>{genreMovie}</GenreText>
                      </GenreView>
                    ))}
                  </Genre>

                  <ShowMore>
                    <ShowMoreText
                      onPress={() => {
                        navigation.navigate('Details', { movieId: item.id });
                      }}
                    >
                      Voir la fiche
                    </ShowMoreText>
                  </ShowMore>
                </Classification>
              </MovieDetails>
            </ThumbMovie>
          )}
        />
      </Container>
    </>
  );
};

export default Home;
