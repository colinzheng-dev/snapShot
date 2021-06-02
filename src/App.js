import React from 'react';
import { HashRouter, Route, Switch,  Redirect } from 'react-router-dom';
import PhotoContextProvider from './context/PhotoContext.component';
import Header from './component/Header.component';
import Item from './component/Item.component';
import Search from './component/Search.component';
import NotFound from './component/NotFound.component';

const App = () => { 
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return(
    <PhotoContextProvider>
      <HashRouter>
        <div className='container'>
          <Route  
            render={props => {
              console.log(props)
              return(
              <Header
                handleSubmit={handleSubmit}
                history={props.history}
              />
            )}}
          />
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/mountain' />} />
            <Route  path='/mountain' render={() => <Item searchTerm='mountain' />} />
            <Route  path='/beach' render={() => <Item searchTerm='beach' />} />
            <Route  path='/bird' render={() => <Item searchTerm='bird' />} />
            <Route  path='/food' render={() => <Item searchTerm='food' />} />
            <Route path='/search' render={
              props => (
                <Search searchTerm ={props.match.params.searchInput} />
              )}
            />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </HashRouter>
  
    </PhotoContextProvider>
  );
}

export default App;