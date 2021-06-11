import { ContentChooser } from "./contnetntChooser";
import './index.css'

function App() {
  return (
    <div style={{ height: '100%', display: 'flex' }}>
      <div style={{ width: 284 }}>
        left
      </div>
      <div>
        <ContentChooser />
      </div>
    </div>
  );
}

export default App;
