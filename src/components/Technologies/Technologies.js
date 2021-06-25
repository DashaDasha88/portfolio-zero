import React from 'react';
import { 
  DiBootstrap,
  DiGit, 
  DiGithub, 
  DiGoogleAnalytics, 
  DiHtml5, 
  DiJavascript1, 
  DiJira, 
  DiJqueryLogo, 
  DiLinux, 
  DiMailchimp,
  DiNodejs,
  DiNpm,
  DiPhotoshop,
  DiPostgresql,
  DiReact, 
  DiSass,
  DiScrum,
  DiTrello,
  DiUbuntu,
  DiWordpress
} from 'react-icons/di';
import {
  SiMaterialUi
} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Here's all the tech that I know.
    </SectionText>
    <List>

      <ListItem>
        <DiBootstrap size="3rem" />
        <ListContainer>
          <ListParagraph>
            Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListParagraph>
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGithub size="3rem" />
        <ListContainer>
          <ListParagraph>
            GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGoogleAnalytics size="3rem" />
        <ListContainer>
          <ListParagraph>
            Google Analytics
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListParagraph>
            HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript1 size="3rem" />
        <ListContainer>
          <ListParagraph>
            JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJira size="3rem" />
        <ListContainer>
          <ListParagraph>
            Jira
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJqueryLogo size="3rem" />
        <ListContainer>
          <ListParagraph>
            jQuery
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiLinux size="3rem" />
        <ListContainer>
          <ListParagraph>
            Linux
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiMailchimp size="3rem" />
        <ListContainer>
          <ListParagraph>
            Mailchimp
          </ListParagraph>
        </ListContainer>
      </ListItem>
{/* 
      <ListItem>
        <SiMaterialUI size="3rem" />
        <ListContainer>
          <ListParagraph>
            MaterialUi
          </ListParagraph>
        </ListContainer>
      </ListItem> */}

      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListParagraph>
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNpm size="3rem" />
        <ListContainer>
          <ListParagraph>
            npm
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListParagraph>
            Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPostgresql size="3rem" />
        <ListContainer>
          <ListParagraph>
            PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListParagraph>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiSass size="3rem" />
        <ListContainer>
          <ListParagraph>
            Sass
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiScrum size="3rem" />
        <ListContainer>
          <ListParagraph>
            Scrum
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiTrello size="3rem" />
        <ListContainer>
          <ListParagraph>
            Trello
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiTrello size="3rem" />
        <ListContainer>
          <ListParagraph>
            Trello
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiUbuntu size="3rem" />
        <ListContainer>
          <ListParagraph>
            Ubuntu
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiWordpress size="3rem" />
        <ListContainer>
          <ListParagraph>
            WordPress
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
