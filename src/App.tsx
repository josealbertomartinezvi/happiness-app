import { Provider } from 'react-redux/es/exports'
import './App.css'
import { Navbar } from './components'
import { Home } from './pages/Home'
import store from './redux/store'
import { LayoutContainer } from './styledComponents'

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  )
}

export default App
