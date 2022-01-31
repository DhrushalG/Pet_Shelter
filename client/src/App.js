import NewPetForm from './components/NewPetForm';
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import './App.css';
import SinglePet from './components/SinglePet';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className='d-inline-block'>Pet Shelter</h1>
        <Switch>
          <Route exact path='/'>
            <AllPets></AllPets>
          </Route>

          <Route exact path='/pets/new'>
            <NewPetForm></NewPetForm>
          </Route>
          
          <Route exact path='/pets/:id/edit'>
            <EditPet></EditPet>
          </Route>
          
          <Route exat path='/pets/:id'>
            <SinglePet></SinglePet>
          </Route>

          
        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
