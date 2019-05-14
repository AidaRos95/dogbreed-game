import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom'
import DetailPageContainer from './components/DetailPageContainer';
import Game1Container from './components/Game1Container';
import ProgressBarContainer from './components/ProgressBarContainer';

function App() {
  return (
    <div className="App">
     {/* In progress... */}
     <ProgressBarContainer/>


     <Route exact path="/" component={DogsListContainer} />
     <Route path="/detailpage/:breed" component={DetailPageContainer} />
     <Route exact path="/game1/" component={Game1Container} />
    </div>
  );
}

export default App;
