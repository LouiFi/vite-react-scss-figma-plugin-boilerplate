import { Plugin } from "vite";

const compileFigmaPlugin = (entrypoints: string[]): Plugin => {
  return {
    name: "vite-compile-figma-plugin",

    async buildEnd() {
      await Bun.build({
        entrypoints: entrypoints,
        outdir: "./dist",
      });
    },
  };
};
export default compileFigmaPlugin;
