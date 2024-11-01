import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		rules: {
			// ... any rules you want
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			// Enforzar el uso de triple igual para comparaciones
			eqeqeq: ['error', 'always'], // Asegura el uso de === y !== en lugar de == y !=

			// Deshabilitar el uso de console
			//'no-console': 'warn', // Muestra una advertencia si se usa console.log u otras funciones de consola

			// Deshabilitar variables no utilizadas
			'@typescript-eslint/no-unused-vars': ['error'], // Marca variables no utilizadas como errores

			// Enforzar el uso de punto y coma
			semi: ['error', 'always'], // Asegura que se usen punto y coma al final de las sentencias

			// Enforzar el uso de comillas simples
			quotes: ['error', 'single'], // Asegura que se utilicen comillas simples en lugar de comillas dobles

			// Limitar la longitud de línea
			'max-len': ['warn', { code: 80 }], // Muestra una advertencia si una línea supera los 80 caracteres

			// Requiere que las funciones tengan un espacio entre el nombre y los paréntesis
			'space-before-function-paren': ['error', 'always'], // Asegura que haya un espacio antes de los paréntesis en funciones

			'react/react-in-jsx-scope': 'off', // Desactiva la necesidad de tener React en el ámbito al usar JSX
		},
	},
	eslintConfigPrettier,
];
