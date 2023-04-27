import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    return(
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return (
                    <PokemonCard 
                        name={pokemon.name} 
                        image={pokemon.sprites.front_default}
                        key={pokemon.name}
                    />
                );
            
            })}
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}
export default PokemonList;
