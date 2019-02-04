import React from 'react';
import { Card, Container } from 'react-bootstrap'

import GlobalProvider from './components/GlobalProvider'

import GeneratorForm from './GeneratorForm'
import SentencePreview from './SentencePreview'

const App = props => {
  return (
    <GlobalProvider>
      <div className="App">
        <Container className="mt-4">
          <Card>
            <Card.Header as="h1" className="text-center">Surf's Up! <i className="fa fa-hand-rock-o"/></Card.Header>
            <Card.Body>
              <h4>Select a word type:</h4>
              <GeneratorForm />
              <SentencePreview />
            </Card.Body>
          </Card>

          <br />
          <br />
          <br />
          <h2>Instructions:</h2>
          <ul>
            <li><strong>Resources:</strong> <a href="https://lodash.com/">Lodash</a> (feel free to pull in others)</li>
            <li>The goal is to allow the user to generate a surfer sentence.</li>
            <li>The user should be able to control the number of words in the sentence by adding and removing dropdowns. The user should be able to control the types of words in the sentence by changing the value of the dropdowns.</li>
            <li><strong>Example:</strong> (article) (adjective) (noun) could generate "The boss surfari!" or "A bogus barrel!"</li>

            <li><strong>Your task:</strong> Wire up the interface
            <ul>
                <li>The "+" button should append a dropdown.</li>
                <li>The "-" button should remove the last dropdown.</li>
                <li>The "Go" button should generate the sentence in the provided space. Each word should be displayed in the correct order as it is loaded from the simulated API. The first word should be capitalized. The sentence should end with an exclamation
                  point.
                </li>
                <li>The "Stop" button should end sentence generation, but leave the portion of the sentence already displayed.</li>
                <li>Display a loading indicator within the sentence when a request is issued to the API and replace it with the resulting response.</li>
                <li>Put your style on it!</li>
              </ul>
            </li>
          </ul>
        </Container>
      </div>
    </GlobalProvider>
  );
}

export default App;
