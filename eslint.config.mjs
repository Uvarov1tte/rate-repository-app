import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended", "plugin:react/recommended"),

    plugins: {
        react,
        "react-native": reactNative,
    },

    languageOptions: {
        globals: {
            ...reactNative.environments["react-native"]["react-native"],
        },
        ecmaVersion: "latest",
        sourceType: "module",
        parser: babelParser,
        parserOptions: {
            requireConfigFile: false,
            ecmaFeatures: {
                jsx: true,
            },
        }
    },

    ignores: ["dist", "eslint.config.js", "babel.config.js", ".expo/**"],

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "eqeqeq": "error",
        "no-trailing-spaces": "error",
        "object-curly-spacing": ["error", "always"],
        "arrow-spacing": [
            "error", { "before": true, "after": true }
        ],
        "no-console": 0,
        "react/react-in-jsx-scope": "off",
        "react/prop-types": 0,
        "no-unused-vars": "warn"
    },
}]);