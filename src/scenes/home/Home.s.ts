import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 60px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;

export const Filters = styled.View`
  margin: 5px 0 0px;
  padding: 0 30px;
  display: flex;
`;

export const Search = styled.View`
  width: 100%;
  border-radius: 10px;
  background: #efefef;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  flex: 1;
  border-radius: 10px;
  padding: 10px 20px;
`;

export const TitleList = styled.Text`
  font-size: 19px;
  font-weight: bold;
  margin: 30px 0 15px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  margin-left: 25px;
`;

export const ThumbMovie = styled.View`
  margin: 0 30px;
  /* width: 100%; */
  height: 250px;
  border-radius: 15px;
  margin-bottom: 30px;
`;

export const MovieImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

export const MovieDetails = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 15px 22px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
`;

export const Details = styled.View`
  align-items: center;
  flex: 1;
`;

export const NameMovie = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 0 30px;
  text-align: center;
`;

export const Informations = styled.Text`
  color: #d9d9d9;
  font-size: 15px;
`;

export const Avalitions = styled.View`
  margin-bottom: 0px;
`;

export const Note = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 55px;
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
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  line-height: 40px;
`;

export const Classification = styled.View`
  width: 100%;
  bottom: 0;
  padding: 15px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Genre = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const GenreView = styled.View`
  margin-right: 5px;
  padding: 3px 13px;
  border: 1px;
  border-color: #d9d9d9;
  border-radius: 2px;
`;

export const GenreText = styled.Text`
  color: #d9d9d9;
`;

export const ShowMore = styled.TouchableOpacity`
  padding: 10px 30px;
  background: #f7a716;
  border-radius: 2px;
`;

export const ShowMoreText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const MoviesList = styled(FlatList as new () => FlatList).attrs({
  numColumns: 1,
})`
  flex: 1;
`;