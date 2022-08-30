import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

export const HighlightCard = () => {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 100,00</Amount>
        <LastTransaction>Ultima entrada dia 13 de agosto</LastTransaction>
      </Footer>
    </Container>
  );
};
