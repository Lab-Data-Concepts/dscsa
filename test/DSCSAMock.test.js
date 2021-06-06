// Load dependencies
const { accounts } = require('@openzeppelin/test-environment');
const [ manufacturer, repackagers, distributor, wholesaler, dispensers, testDataAddr ] = accounts;
const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;
const { expect, assert } = require('chai');

// Load compiled artifacts
const DSCSA = artifacts.require('ERC1155PresetMinterPauser');

/**-------------------------------------------------------------------------------------------------------------------
 *                                Define Global Test Variables and Constants                                         *
 ------------------------------------------------------------------------------------------------------------------ */
/**---------------------------
  *       Drugs              *
  --------------------------*/   
// Drug Name: Sildenafil citrate: Trade Names = Viagra & Revatio; Doses: 25, 50, & 100 mg
// PubChem CID: https://pubchem.ncbi.nlm.nih.gov/compound/Sildenafil-citrate
let SILDENAFIL_CITRATE_NFT_ID = new BN(135413523);  // Pfizer    

// Entity GLNs (i.e. Pfizer) https://www.gs1us.org/tools/gs1-company-database-gepir
let PFIZER_ENTITY_GLN_ID      = new BN(863772000001); 


/**---------------------------
  *       GS1 Standards      *
  --------------------------*/   
    //    BN public constant GS1_ID_KEY_GIAI = BN("GIAI"); // Shipping Container, Semi-trailer truck trailer, Wagon (Train Box Car) 
    //    BN public constant GS1_ID_KEY_GRAI = BN("GRAI"); // Returnable Transport Items 


/**-------------------------------------------------------------------------------------------------------------------
 *                                Internet Planetary File System (IPFS)                                              *
 * Pinned Files
 * QmewvFiS3Va2qdakvTzFFxpak4A8UAzMHUL4T1CedKH5H2
 * QmTKk8aVjTf77VJwRJGNJ8nLfA29nu3Y9ySzNafp2zPMXf
 *  `const ipfs = new IPFS({ host: ‘ipfs.infura.io’, port: 5001, protocol: ‘https’ });
 * const ipfsApi = require(‘ipfs-api’);
 * const ipfs = new ipfsApi(‘localhost’, ‘5001’, {protocol:‘http’});
 ------------------------------------------------------------------------------------------------------------------ */
const ipfsApiKey = "/ip4/127.0.0.1/tcp/5001";
const ipfsSecretApiKey = "12D3KooWQ7RmB4FgMGRiuj4MQcnbK1dRvytYffjzYr7G5LHXJrEC";

const IPFS = require('ipfs-http-client')


//export default ipfs;

/**
   captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };
 convertToBuffer = async(reader) => {
      //file is converted to a buffer for upload to IPFS
        const buffer = await Buffer.from(reader.result);
      //set this buffer -using es6 syntax
        this.setState({buffer});
    };
 */


//-----------------------------------------------------------------------------
// L-n-L: Large MAH sends 1 shipping container to 1 Large Dispenser
//-----------------------------------------------------------------------------
contract('L-n-L 1 Shipping Container (SC) with metadata', function () {

  // Deploy a new DSCSA contract for each test
  beforeEach(async function () {
    this.DSCSA = await DSCSA.new('file:///C:/dscsa/contracts/metadata/{id}.json');
  });

  // 1 Shipping Container shipped whole to dispenser
  it('L2L 1 Shipping Container', async function () {

    let node    = await IPFS.create()
    let version = await node.version()
    
    let SILDENAFIL_CITRATE_NFT_QTY = new BN(600);
    let tokenIDs    = [SILDENAFIL_CITRATE_NFT_ID];
    let quantities  = [SILDENAFIL_CITRATE_NFT_QTY];
    
    await this.DSCSA.mintBatch(manufacturer, tokenIDs, quantities, testDataAddr);

    //console.log('IPFS Version: ', version.version);
    //console.log('Metadata: ', manufacturer, tokenIDs, quantities);


    //assert( testHolderAddress > 0, 'owner is not empty');  

    // Store in IPFS
    const addOptions = {
      pin: true,
      wrapWithDirectory: true,
      timeout: 10000
    };

    const fileAdded = await node.add( '{SILDENAFIL_CITRATE_NFT_ID: ' + SILDENAFIL_CITRATE_NFT_ID + 
                                      ', SILDENAFIL_CITRATE_NFT_QTY: ' + SILDENAFIL_CITRATE_NFT_QTY + '}',
                                      addOptions
    )
/**
    const fileAdded = await node.add({
      path: '/l2l_1_sc.txt',
      content: '{SILDENAFIL_CITRATE_NFT_QTY: ' + SILDENAFIL_CITRATE_NFT_QTY + ', SILDENAFIL_CITRATE_NFT_ID: ' + SILDENAFIL_CITRATE_NFT_ID + '}',
      pin: true
    })
 */
    //console.log('Added file:', fileAdded.path, fileAdded.cid)
    console.log('https://ipfs.io/ipfs/' + fileAdded.cid)

    // Read from IPFS
    /**
    const chunks = []
    for await (const chunk of node.cat(fileAdded.cid)) {
        chunks.push(chunk)
    }
  
    console.log('Added file contents:', uint8ArrayConcat(chunks).toString())
    */

    /**  
    //save document to IPFS,return its hash#, and set hash# to state
    //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add 
    await ipfs.add(this.state.buffer, (err, ipfsHash) => {
      console.log(err,ipfsHash);
      //setState by setting ipfsHash to ipfsHash[0].hash 
      this.setState({ ipfsHash:ipfsHash[0].hash });
 // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract 
//return the transaction hash from the ethereum contract
//see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
      
      storehash.methods.sendHash(this.state.ipfsHash).send({
        from: accounts[0] 
      }, (error, transactionHash) => {
        console.log(transactionHash);
        this.setState({transactionHash});
      }); //storehash 
    }) //await ipfs.add 
  }; //onSubmit
 */
  });  
  
});
