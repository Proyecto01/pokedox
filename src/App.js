import { useEffect } from 'react';
import { Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon, getPokemonDetails } from './api';
//import { setPokemons as setPokemonsActions } from './actions';
import { getPokemonsWithDetails } from './actions';
//import { connect } from 'react-redux';
import logo from './statics/logo.svg';
import './App.css';


//function App({pokemons, setPokemons}) {
function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      
      /*const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon =>
        getPokemonDetails(pokemon)));*/

    //  dispatch(setPokemons(pokemonsRes));
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };

    
    fetchPokemons();
  },[]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}
/*
const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/
export default App;