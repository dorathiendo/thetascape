// src/wasm-loader.js

let wasmModule;

export async function loadWasm() {
    if (!wasmModule) {
        const response = await fetch('example.wasm');
        const buffer = await response.arrayBuffer();
        const module = await WebAssembly.instantiate(buffer);
        wasmModule = module.instance.exports;
    }
    return wasmModule;
}
