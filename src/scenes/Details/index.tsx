import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { format, parseISO } from 'date-fns';
import api from '../../services/api';

import {
    Container,
    Header,
    MovieImage,
    MovieDetails,
    NameMovie,
    Informations,
    Classification,
    Note,
    NoteText,
    DetailsMovie,
    GenreView,
    Genre,
    GenreText,
    Content,
    Synopsis,
    Title,
    SynopsisText,
    Production,
    Actors,
    Profile,
    ProfileImage,
    NameActor,
    Director,
    WatchButton,
    WatchButtonText,
    AvalitionsReturn,
    Return,
    Watch,
} from './styles';

const Details: React.FC = props => {
    const { route } = props;
    const { movieId } = route.params;

    const shadow = {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 25,
    };

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function loadMovie(): Promise<void> {
            const response = await api.get(`movies/${movieId}`);
            console.log(response);
            setMovie([response.data]);
        }
        loadMovie();
    }, [movieId]);

    const navigation = useNavigation();

    return (
        <>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="rgba(0, 0, 0, .4)"
            />
            <Container
                data={movie}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <>
                        <Header>
                            <MovieImage source={{ uri: item.image }} />
                            <MovieDetails>
                                <AvalitionsReturn>
                                    <Return onPress={() => navigation.goBack()}>
                                        <Icon name="arrow-left" size={20} color="#fff" />
                                    </Return>
                                    <Note>
                                        <NoteText>{item.imdb}</NoteText>
                                    </Note>
                                </AvalitionsReturn>

                                <DetailsMovie>
                                    <NameMovie>{item.title}</NameMovie>
                                    <Informations>
                                        {item.duration} |{' '}
                                        {format(parseISO(item.launch), " d 'de' MMM")}
                                    </Informations>

                                    <Classification>
                                        <Genre>
                                            {item.genre.map((genreMovie: string) => (
                                                <GenreView key={genreMovie}>
                                                    <GenreText>{genreMovie}</GenreText>
                                                </GenreView>
                                            ))}
                                        </Genre>
                                    </Classification>
                                </DetailsMovie>
                            </MovieDetails>
                        </Header>

                        <Content>
                            <Synopsis>
                                <Title>Résumé</Title>
                                <SynopsisText>{item.synopsis}</SynopsisText>
                            </Synopsis>

                            <Production>
                                <Title>Acteurs</Title>
                                <Actors
                                    horizontal
                                    contentContainerStyle={{
                                        width: `${45 * 5}%`,
                                        height: '100%',
                                    }}
                                    showsHorizontalScrollIndicator={false}
                                    scrollEventThrottle={200}
                                    decelerationRate="fast"
                                    pagingEnabled
                                >
                                    {item.actors.map(actor => (
                                        <Profile key={actor.name}>
                                            <ProfileImage source={{ uri: actor.profile_avatar }} />
                                            <NameActor>{actor.name}</NameActor>
                                        </Profile>
                                    ))}
                                </Actors>

                                <Director>
                                    <Title>Directeur</Title>
                                    <Profile>
                                        <ProfileImage
                                            source={{ uri: item.director.profile_avatar }}
                                        />
                                        <NameActor>{item.director.name}</NameActor>
                                    </Profile>
                                </Director>
                            </Production>
                        </Content>
                    </>
                )}
            />

            <Watch>
                <WatchButton style={{ ...shadow }}>
                    <WatchButtonText>Regarder maintenant</WatchButtonText>
                </WatchButton>
            </Watch>
        </>
    );
};

export default Details;