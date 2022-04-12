import express from "express";
import cors from "cors";
import { PokemonClient } from 'pokenode-ts';
const api = new PokemonClient();
const LRU = require('lru-cache');

const options = {
  max: 1000000,
  // 5 minutes
  ttl: 1000 * 60 * 5,
};

const cache = new LRU(options);

const corsOptions = {
    exposedHeaders: 'x-authorization-token',
    origin : '*'
};

export const startExpressApp = () => {
    const app = express();
    const port = process.env.PORT || 8080;

    app.use(cors(corsOptions));
    app.use(express.json());

    app.route("/pokemon").get(async (req, res) => {
      let pokemonsByName = cache.get('pokemons');
      if(!pokemonsByName){
        console.log("Pokemons cache region is not loaded");

        const pokemons : any = await api.listPokemons(0, 1000000);

        pokemonsByName = pokemons.results.reduce((acc : any, value : any) => {
          acc[value.name] = value.url; 
          return acc;
        }, {});

        cache.set('pokemons', pokemonsByName);

        console.log(`${pokemons.results.length} pokemons loaded`);
      }

      const start = req.query.start || 0;
      const count = req.query.count || null;
      const name = req.query.filter || null;

      const pokemonNames = Object.keys(pokemonsByName).sort((p1,p2) => p1 > p2 ? 1 : -1);

      let result = pokemonNames.filter(pokemon => (name && pokemon.indexOf(name) != -1) || !name);
      const total = result.length;
      result = result.slice(start, (start + count));

      res.header("Content-Type", "application-json");

      res.end(JSON.stringify({
        start,
        count,
        total,
        results : result.map(name => ({
          name,
          url : pokemonsByName[name]
        }))
      }));
    });
    
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
}

startExpressApp();
