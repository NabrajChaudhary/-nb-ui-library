import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "@nb-ui-library",
  },
  external: [
    "react",
    "react-dom",
    "next/link",
    "@radix-ui/react-slot",
    "class-variance-authority",
  ],
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
