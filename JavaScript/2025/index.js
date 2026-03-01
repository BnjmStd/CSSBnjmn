// import attribute

import config from "./config.json" with { type: "json" };

import module from "./module.js" with { type: "javascript" };

const data = await import(".config.json", { with: { type: "json" } });

// re exportar

export { data } from ".data.js" with { type: "json" };

// web worker

new Worker("processor.wasm", {
  type: "module",
  with: { type: "webassembly" },
});
