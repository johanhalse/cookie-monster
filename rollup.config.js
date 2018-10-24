import buble from "rollup-plugin-buble";

// rollup.config.js
export default {
  input: "cookie-monster.js",
  output: {
    file: "dist/cookie-monster.js",
    format: "cjs"
  },
  plugins: [buble()]
};
