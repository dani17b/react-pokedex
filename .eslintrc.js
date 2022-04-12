module.exports = {
    "extends": [
        "eslint:recommended",
        "react-app"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    // Variables disponibles a nivel global
    "globals": {
        "Promise" : true
    },
    "parser": "babel-eslint",
    "rules": {
        // Punto y coma al final de cada sentencia
        "semi": "error",

        // Comillas simples para los strings
        "quotes" : ["error", "single"],

        // Evitar espacios adicionales
        "no-multi-spaces" : "error",
        "key-spacing" : "error",

        // Variables no utilizadas
        "no-unused-vars" : "error",

        // Comprobacion de identaciones
        "indent": ["error", 2, { "SwitchCase": 1 }],

        // Complejidad ciclomatica
        "complexity": ["error", 30],

        // Definicion de variables para el scope necesario
        "block-scoped-var" : "error",

        // Numeros magicos
        "no-magic-numbers" : ["error", { "ignoreArrayIndexes": true, "ignore": [-1, 0, 1, 1000] }], 

        // Variables con nomenclatura correcta en camelCase
        "camelcase" : ["error", {"properties": "never"}],

        // Validacion de propiedades
        "react/no-deprecated" : "never",

        // Tamano de archivos, funciones y anidamientos
        "max-depth": ["error", 4],
        "max-len": ["error", { "code": 100, "ignoreStrings" : true }],
        "max-lines" : ["error", {"max": 400, "skipBlankLines": true}],
        "max-lines-per-function": ["error", {"max": 200, "skipBlankLines": true}],
        "max-nested-callbacks": ["error", 3],
        "max-params": ["error", 4],

        // Reglas para warnings de elementos permitidos en depuracion
        "no-console" : "warn",
        "no-debugger" : "warn"
    }
}