

import './index.css'
import { LeftLogo } from './components/LeftLogo'
import { Main } from './components/Main'

function App() {
  return (
    <div style={{ height: '100%', display: 'flex' }}>
      <LeftLogo />
      <Main />
    </div>
  );
}

export default App;
