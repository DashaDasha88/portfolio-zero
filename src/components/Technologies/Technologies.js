import React from 'react';
import { DiFirebase, DiReact, DiTrello } from 'react-icons/di';
import {
  SiMaterialUi
} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills & Technologies</SectionTitle>
    <SectionText>
      Here are all the cool technologies that I know.
    </SectionText>
    <List>

      <ListItem>
        <ListTitle>Column One</ListTitle>
        <DiFirebase size="3rem" />
          <ListContainer>
            <ListParagraph>
              One
              <br />
              Two
              <br />
              Three
              <br />
            </ListParagraph>
          </ListContainer>
      </ListItem>

      <ListItem>
        <ListTitle>Column Two</ListTitle>
        <DiFirebase size="3rem" />
          <ListContainer>
            <ListParagraph>
              One
              <br />
              Two
              <br />
              Three
              <br />
            </ListParagraph>
          </ListContainer>
      </ListItem>

      <ListItem>
        <ListTitle>Column Three</ListTitle>
        <DiFirebase size="3rem" />
          <ListContainer>
            <ListParagraph>
              One
              <br />
              Two
              <br />
              Three
              <br />
            </ListParagraph>
          </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
