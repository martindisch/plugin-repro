module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
          experimental: {
            plugins: [["@swc/plugin-styled-components", {}]],
          },
        },
      },
    ],
  },
  modulePathIgnorePatterns: ["dist"],
};
