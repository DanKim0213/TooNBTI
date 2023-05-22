import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    "https://k8a7051.p.ssafy.io/apis",
    "https://k8a7051.p.ssafy.io/apid/graphql",
  ],
  documents: ["src/**/*.ts"],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};
export default config;
