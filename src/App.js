
import './App.css';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widgets from './Widgets.js';

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      <Feed/>
      {/* widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
