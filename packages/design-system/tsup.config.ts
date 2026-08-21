import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: false,
  treeshake: true,
  external: ["react", "react/jsx-runtime"],
});
