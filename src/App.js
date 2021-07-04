import './App.css';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import SiteConfigurationContext from './components/SiteConfigurationContext';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  const headerLinks={
    items: [
      {
        label:'My Dashboard',
        key:'dashboard',
        href:'/dashboard',
      }
    ]
  };

  return (
    <SiteConfigurationContext.Provider value={{ headerLinks }}>
      <BrowserRouter basename="/all-ride-rental-ui">
        <Switch>
          <Redirect exact from="/" to="/dashboard"/>
            <Route 
            path="/dashboard"
            component={() => <Dashboard />}/>
        </Switch>
      </BrowserRouter>
    </SiteConfigurationContext.Provider>
  );
}

export default App;
