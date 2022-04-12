# react-pokedex
Proyecto de ejemplo en react con integración con pokeapi.

El proyecto está compuesto de dos bloques:

Un primer bloque en nodejs que se encarga de proxificar y cachear a pokeapi para extender el mecanismo de búsquedas por nombre manteniendo un ritmo de respuesta alto.

Un segundo bloque con una web en React + Redux encargada de mostrar las dos pantallas que se pueden ver a continuación.

Para lanzarlo, es necesario arrancar primero el server con:
cd server && yarn start

Posteriormente la web con:
yarn start
