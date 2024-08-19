import './App.css'
import Dashboard from './Pages/Dashboard'
// import data from '../src/Data/dummyData.json';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </>
  )
}

export default App
