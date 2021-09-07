import React, {FC} from 'react';
import styled from 'styled-components/native';

export interface EventsProps {
  navigation?: any;
}

const Events: FC<EventsProps> = () => {
  return (
    <Container>
      <Title>This is the events screen</Title>
    </Container>
  );
};

export default Events;

const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Title = styled.Text``;
