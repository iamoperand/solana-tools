const bs58 = require("bs58")
const fs = require("fs")
const commandLineArgs = require("command-line-args")

const optionDefinitions = [
    { name: "privateKey", alias: "p", type: String },
    { name: "output", alias: "o", type: String },
]
const options = commandLineArgs(optionDefinitions)

const decoded = bs58.decode(options.privateKey)
const bytes = new Uint8Array(
    decoded.buffer,
    decoded.byteOffset,
    decoded.byteLength / Uint8Array.BYTES_PER_ELEMENT
)

fs.writeFileSync(options.output, `[${bytes}]`)
