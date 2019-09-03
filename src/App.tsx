import React from 'react'

import Section from './components/UI/Section'

const App: React.FC = (): JSX.Element => {
  return (
    <Section className="section" title="hello">
      <div className="App">Hollo World!</div>
    </Section>
  )
}

export default App
