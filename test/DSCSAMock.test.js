// Load dependencies: require
//      OpenZeppelin - ref: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/test/token/ERC1155/presets/ERC1155PresetMinterPauser.test.js
const { accounts } = require('@openzeppelin/test-environment');
const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
//const DSCSA = contract.fromArtifact('ERC1155PresetMinterPauser'); 
const DSCSA = artifacts.require('ERC1155PresetMinterPauser');

//      test assertions
const { expect, assert } = require('chai');

//      persist files
const fs = require('fs');
const yaml = require('js-yaml');
const IPFS = require('ipfs-http-client')

/**-------------------------------------------------------------------------------------------------------------------
 *                                Define Global Test Variables and Constants                                         *
 ------------------------------------------------------------------------------------------------------------------ */
 
 /**--------------------------
  *       Blockchain         *
  ---------------------------*/
 const [ manufacturer, repackagers, distributor, wholesaler, dispenser, testDataAddr ] = accounts;
 console.log('<=== accounts used ===>');
 accounts.forEach(addr => console.log('addr => ' + addr));
 

 const { ZERO_ADDRESS } = constants;
 const uri = 'https://token.com';

 /**--------------------------
  *       Drugs              *
  ---------------------------*/
// NFT_IDs = Token ID = PubChem CID: https://pubchem.ncbi.nlm.nih.gov/compound/Sildenafil-citrate
let SILDENAFIL_CITRATE_NFT_ID = new BN(135413523);                        // Sildenafil citrate    

// Entity GS1 GLNs (Global Location #):  https://www.gs1us.org/tools/gs1-company-database-gepir
let PFIZER_ENTITY_GLN_ID      = new BN(863772000001);                     // Pfizer

/**---------------------------
  *       GS1 Standards      *
  --------------------------*/   
    //    BN public constant GS1_ID_KEY_GIAI = BN("GIAI"); // Shipping Container, Semi-trailer truck trailer, Wagon (Train Box Car) 
    //    BN public constant GS1_ID_KEY_GRAI = BN("GRAI"); // Returnable Transport Items 


/**-------------------------------------------------------------------------------------------------------------------
 *                                Internet Planetary File System (IPFS)                                              *
 * Pinned Files
 ------------------------------------------------------------------------------------------------------------------ */
const ipfsApiKey = "/ip4/127.0.0.1/tcp/5001";
const ipfsSecretApiKey = "12D3KooWQ7RmB4FgMGRiuj4MQcnbK1dRvytYffjzYr7G5LHXJrEC";

//-----------------------------------------------------------------------------
// L-n-L: Large MAH sends 1 shipping container to 1 Large Dispenser
//-----------------------------------------------------------------------------
contract('L-n-L 1 Shipping Container (SC) with metadata', function () {

  // Deploy a new DSCSA contract for each test
  beforeEach(async function () {
    console.log('<=== beforeEach(async function () ===>');
    this.DSCSA = await DSCSA.new({ from: manufacturer });         // https://eattheblocks.com/how-to-use-ganache-gui-with-truffle-episode-14/
  });

  it('sets approval status which can be queried via isApprovedForAll', async function () {
    console.log('<=== setApprovalForAll ===>');
    await this.DSCSA.setApprovalForAll(distributor, true, { from: manufacturer });
  });

  it('sets approval status which can be queried via isApprovedForAll', async function () {
    console.log('<=== isApprovedForAll ===>');
    expect(await this.DSCSA.isApprovedForAll(manufacturer, distributor)).to.be.equal(true);
  });

  it('deployer has the default admin role', async function () {
    expect(await this.DSCSA.getRoleMemberCount(DEFAULT_ADMIN_ROLE)).to.be.bignumber.equal('1');
    expect(await this.DSCSA.getRoleMember(DEFAULT_ADMIN_ROLE, 0)).to.equal(deployer);
  });

  it('deployer has the minter role', async function () {
    expect(await this.DSCSA.getRoleMemberCount(MINTER_ROLE)).to.be.bignumber.equal('1');
    expect(await this.DSCSA.getRoleMember(MINTER_ROLE, 0)).to.equal(deployer);
  });

  it('deployer has the pauser role', async function () {
    expect(await this.DSCSA.getRoleMemberCount(PAUSER_ROLE)).to.be.bignumber.equal('1');
    expect(await this.DSCSA.getRoleMember(PAUSER_ROLE, 0)).to.equal(deployer);
  });

  it('minter and pauser role admin is the default admin', async function () {
    expect(await this.DSCSA.getRoleAdmin(MINTER_ROLE)).to.equal(DEFAULT_ADMIN_ROLE);
    expect(await this.DSCSA.getRoleAdmin(PAUSER_ROLE)).to.equal(DEFAULT_ADMIN_ROLE);
  });

  // 1 Shipping Container shipped whole to dispenser
  it('L2L 1 Shipping Container', async function () {
    try {
      // Batch create tokens
      let SILDENAFIL_CITRATE_NFT_QTY = new BN(600);
      let tokenIDs    = [SILDENAFIL_CITRATE_NFT_ID];
      let quantities  = [SILDENAFIL_CITRATE_NFT_QTY];

      /**-----------------------
        *       MAH Mints      *
        -----------------------*/       
      await this.DSCSA.mintBatch(manufacturer, tokenIDs, quantities, testDataAddr);

      // Run test before persisting file into IPFS
      //assert( testHolderAddress > 0, 'owner is not empty');

      // Persist on IPFS
      let node    = await IPFS.create()

      const addOptions = {
        pin: true,
        wrapWithDirectory: true,
        timeout: 100000
      };

      let fileContents = fs.readFileSync('./test/data/135413523_data_l2l_1sc.yaml', 'utf8');
      let metadata = yaml.load(fileContents);
/*
      console.log('<=== Before MAH node.add ===>');
      const MAHFile = await node.add( `l2l1sc-1-mah.yaml`, metadata, addOptions);

      console.log('MAH CID: ' + MAHFile.cid);
*/
      /**-----------------------
        *       MAH->DIST      *
        -----------------------*/     
      console.log('<=== Before grantRole(DIST) ===>');
      let role = await this.DSCSA.DEFAULT_ADMIN_ROLE();
      //console.log('role: ' + role);
      
      await this.DSCSA.grantRole(role, distributor);
      console.log('<=== Before setApprovalForAll ===>');
      await this.DSCSA.setApprovalForAll(manufacturer, true);
      await this.DSCSA.setApprovalForAll(distributor, true);
      console.log('<=== Before safeBatchTransferFrom ===>');
      await this.DSCSA.safeBatchTransferFrom(manufacturer, distributor, tokenIDs, quantities, testDataAddr);

      // Persist on IPFS
      console.log('<=== Before DIST node.add ===>');
      const DISTFile = await node.add( `l2l1sc-2-dist.yaml`, metadata, addOptions);

      console.log('DIST CID: ' + DISTFile.cid);

      /**-----------------------
        *       DIST->DISP     *
        -----------------------*/  
    } catch (e) {
      console.log(e);
    }
  });  
  
});
