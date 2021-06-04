// Load dependencies
const { accounts } = require('@openzeppelin/test-environment');
const [ manufacturer, repackagers, distributor, wholesaler, dispensers, testDataAddr ] = accounts;
const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;
const { expect, assert } = require('chai');

// Load compiled artifacts
//import "node_modules/@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";
const DSCSA = artifacts.require('ERC1155PresetMinterPauser');

// Define Global Test Variables and Constants
let SILDENAFIL_CITRATE_NFT_ID = new BN(135413523);    // PubChem CID: https://pubchem.ncbi.nlm.nih.gov/compound/Sildenafil-citrate
let PFIZER_ENTITY_GLN_ID      = new BN(863772000001); // Entity GLN https://www.gs1us.org/tools/gs1-company-database-gepir
    // Sildenafil citrate: Trade Names = Viagra & Revatio; 25, 50, & 100 mg doses
    // GS1 Standards:
    //    BN public constant GS1_ID_KEY_GIAI = BN("GIAI"); // Shipping Container, Semi-trailer truck trailer, Wagon (Train Box Car) 
    //    BN public constant GS1_ID_KEY_GRAI = BN("GRAI"); // Returnable Transport Items 

//-----------------------------------------------------------------------------
// L-n-L: Large MAH sends 1 shipping container to 1 Large Dispenser
//-----------------------------------------------------------------------------
contract('L-n-L 1 Shipping Container (SC) with metadata', function () {

  // Deploy a new DSCSA contract for each test
  beforeEach(async function () {
    this.DSCSA = await DSCSA.new('file:///C:/dscsa/contracts/metadata/{id}.json');
  });

  // 1 Shipping Container shipped whole to dispenser
  it('L-n-L 1 SC', async function () {

    let SILDENAFIL_CITRATE_NFT_QTY = new BN(600);
    let tokenIDs    = [SILDENAFIL_CITRATE_NFT_ID];
    let quantities  = [SILDENAFIL_CITRATE_NFT_QTY];
    
    await this.DSCSA.mintBatch(manufacturer, tokenIDs, quantities, testDataAddr);

    //assert( testHolderAddress > 0, 'owner is not empty');

  });  
  
});
