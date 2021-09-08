import React, {FC, useEffect} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import ListView from '../../components/ListView';
import {background, primary} from '../../config/color';
import {EventLogic} from './EventLogic';

export interface EventsProps {
  navigation?: any;
}

const Events: FC<EventsProps> = ({navigation}) => {
  const {getData, events, loading} = EventLogic();

  useEffect(() => {
    if (events.length === 0) {
      getData();
    }
    console.log(events);
  });

  return (
    <Container testID="root">
      {loading ? (
        <LoaderView>
          <ActivityIndicator animating color={primary.main} size="large" />
        </LoaderView>
      ) : (
        <Container>
          <HomeHeader testID="home-header">
            <Title>SmarTrades</Title>
            <Text>
              Stay up to date with the list of the top sporting events around
              the globe.
            </Text>
          </HomeHeader>
          <MyList
            testID="myFlatlist"
            data={events}
            renderItem={({item}) => (
              <TouchableOpacity
                accessible={true}
                accessibilityLabel={(item as any).name}
                onPress={() => {
                  navigation.navigate('EventDetails', {item});
                }}>
                <ListView
                  name={(item as any).name}
                  dateCreated={(item as any).created}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => `${(item as any).id}`}
            ListEmptyComponent={<NoText>No Data found.</NoText>}
          />
        </Container>
      )}
    </Container>
  );
};

export default Events;

// Flatlist component
const MyList = styled.FlatList`
  width: 100%;
  margin-left: 10%;
`;

// View components
const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  background: ${background.main};
  width: 100%;
`;

const HomeHeader = styled.View`
  height: 140px;
  width: 90%;
  background: ${background.light};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: 5px;
  align-items: center;
`;

// Text Components
const Title = styled.Text`
  color: ${primary.text};
  font-weight: bold;
  font-size: 30px;
  margin-top: 7%;
`;

const Text = styled.Text`
  color: ${primary.text};
  text-align: center;
  width: 80%;
  margin-top: 10px;
  font-weight: 500;
`;

const NoText = styled.Text`
  margin-top: 50px;
  font-size: 20px;
  margin-right: 10%;
  color: ${primary.text};
  text-align: center;
`;

const LoaderView = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
`;
