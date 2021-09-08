import React, {FC} from 'react';
import styled from 'styled-components/native';
import {background, primary} from '../../config/color';
import moment from 'moment';

export interface EventDetailsProps {
  navigation?: any;
}

const EventDetails: FC<EventDetailsProps> = ({navigation}) => {
  const {name, description, created, type, start_datetime} =
    navigation.state.params.item;
  return (
    <Container>
      <CardView>
        <NameTxt testID="event-name">{name}</NameTxt>
        <Row>
          <Hint>Date Added: </Hint>
          <Text testID="date-added">{moment(created).format('LL')}</Text>
        </Row>
        <Row>
          <Hint>Start time: </Hint>
          {start_datetime === null ? (
            <Text>Not available</Text>
          ) : (
            <Text testID="start-time">
              {moment(start_datetime).format('MMMM Do YYYY, h:mm a')}
            </Text>
          )}
        </Row>
        <Row>
          <Hint>Description: </Hint>
          {description === null || description === '' ? (
            <Text>No description available</Text>
          ) : (
            <Text testID="description">{description}</Text>
          )}
        </Row>
        <Row>
          <Hint>Type: </Hint>
          <Text testID="event-type">{type}</Text>
        </Row>
      </CardView>
    </Container>
  );
};

export default EventDetails;

// View components
const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  background: ${background.main};
`;

const CardView = styled.View`
  width: 90%;
  background: ${background.light};
  border-radius: 30px;
  margin-top: 10%;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 5%;
`;

const Row = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 5px;
`;

// Text Components
const NameTxt = styled.Text`
  color: ${primary.text};
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
`;

const Hint = styled.Text`
  color: ${primary.text};
  font-weight: 300;
  font-size: 13px;
  margin-top: 10px;
`;

const Text = styled.Text`
  color: ${primary.text};
  font-weight: bold;
  font-size: 13px;
  margin-top: 10px;
`;
