const {MerkleTree} = require("merkletreejs");
const keccak256 = require("keccak256");

const { addresses } = require("./address.js");


// Hash leaves
let leaves = addresses.map(addr => keccak256(addr));

// Create tree
let merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true});
let rootHash = merkleTree.getRoot().toString('hex');

// Pretty-print tree
console.log("\n- MerkleTree\n", merkleTree.toString());
console.log("\n- rootHash\n", rootHash);

/************************************************************************************************/

// 'Serverside' code
let address = addresses[0]
let hashedAddress = keccak256(address)
let proof = merkleTree.getHexProof(hashedAddress)
console.log("\n- proof\n", proof)


// Check proof
let v = merkleTree.verify(proof, hashedAddress, rootHash)
console.log("\n- verify\n", v) // returns true
