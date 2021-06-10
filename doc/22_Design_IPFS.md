# IPFS Basics from [ProtoSchool: Interactive tutorials on decentralized web protocols](https://proto.school/)

Some notes on IPFS from the web tutorial.

## Content Identifiers (CID)

Cryptographic hashes can be derived from the content of the data itself, meaning that anyone using the same algorithm on the same data will arrive at the same hash. If Ada and Grace are both using the same decentralized web protocol, such as IPFS, to share the exact same photo of a kitten, both images will have exactly the same hash.

Cryptographic hashes are unique. If Grace uses Photoshop to remove a single whisker from that kitty, the updated image will have a new hash. Simply by looking at that hash, even without access to the file itself, it will be easy to tell that the file now contains different data.

The cryptographic algorithm used must generate hashes that have the following characteristics:

- Deterministic: The same input should always produce the same hash.
- Uncorrelated: A small change in the input should generate a completely different hash.
- One-way: It should be infeasible to reconstruct the data from the hash.
- Unique: Only one file can produce one specific hash.

[The CID inspector](https://cid.ipfs.io/)
### CID

[multicodec][multihash]

[multicodec] = [dag-pb][sha2][32]

### CIDv1: Version prefix

[cid-version][multicodec][multihash]


