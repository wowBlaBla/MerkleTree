const {MerkleTree} = require("merkletreejs");
const keccak256 = require("keccak256");

// List of 7 public Ethereum addresses
let addresses = [
	"0x706Be40d1692f8a6dB29C872c10cCc68Cf2F7381",
	"0x494B712f00E69397d38cd00D6d10e6C1ae39bAF7",
	"0x67fC08959d92A401a23aEC526c0d0b77Aec76648",
	"0xAb524d6180b04CaC1179261f14106ec5a162d426"
];

// Hash leaves
let leaves = addresses.map(addr => keccak256(addr));

// Create tree
let merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true});
let rootHash = merkleTree.getRoot().toString('hex');

// Pretty-print tree
console.log(merkleTree.toString());
console.log(rootHash);
