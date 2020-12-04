import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Header = styled.View`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const MovieImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const MovieDetails = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px 30px 80px;
  background: rgba(0, 0, 0, 0.4);
`;

export const DetailsMovie = styled.View`
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1;
`;

export const NameMovie = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
`;

export const Informations = styled.Text`
  color: #d9d9d9;
  font-size: 15px;
  margin: 3px 0 30px;
`;

export const AvalitionsReturn = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Return = styled.TouchableOpacity`
  margin-right: 10px;
  padding: 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
`;

export const Note = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: transparent;
  border: 1px;
  border-color: rgba(255, 255, 255, 0.5);
  align-items: center;
  justify-content: center;
`;

export const NoteText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 15px;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  line-height: 45px;
`;

export const Classification = styled.View`
  width: 100%;
  bottom: 0;
  padding: 0px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Genre = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const GenreView = styled.View`
  margin-right: 10px;
  padding: 3px 13px;
  border: 1px;
  border-color: #d9d9d9;
  border-radius: 2px;
`;

export const GenreText = styled.Text`
  color: #d9d9d9;
`;

export const Content = styled.View`
  padding: 30px 0 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background: #fff;
  top: -50px;
`;

export const Synopsis = styled.View`
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 8px;
`;

export const SynopsisText = styled.Text`
  font-size: 17px;
  line-height: 22px;
  color: #333;
  margin-top: 7px;
`;

export const Production = styled.View`
  padding: 30px 0 30px 30px;
  width: 100%;
  background: #f7f7f7;
  margin: 40px 0 0;
`;

export const Actors = styled.ScrollView`
  display: flex;
  flex-direction: row;
`;

export const Profile = styled.View`
  margin-right: 10px;
`;

export const ProfileImage = styled.Image`
  width: 140px;
  height: 180px;
  margin-bottom: 8px;
  border-radius: 5px;
`;

export const NameActor = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Director = styled.View`
  margin: 35px 0 60px;
`;

export const WatchButton = styled.TouchableOpacity`
  height: 60px;
  width: 80%;
  background: #ffb72f;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
`;

export const WatchButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
`;

export const Watch = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  align-items: center;
`;

export const Container = styled(FlatList as new () => FlatList)`
  flex: 1;
  background: #f7f7f7;
`;