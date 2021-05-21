# ![LDC Logo](99_images/LDC_32_32.ico) Requirements

The DSCSA is a [FDA regulation](https://www.fda.gov/drugs/drug-supply-chain-security-act-dscsa/drug-supply-chain-security-act-law-and-policies) to track drug packages through the supply chain.  The FDA completed a DSCSA blockchain pilot in 2020: [FDA Blockchain Pilot Report](https://www.ibm.com/downloads/cas/9V2LRYG5).

The pharmaceutical supply chain of Trading Partners:
    Supplier->Manufacturer->Re-packagers->Distributor->Wholesaler->Dispensers

The DSCSA currently has an implementation due date of November 27, 2023.  That date might change due to COVID-19 impacts.

## Blockchain Business Case

An additive consortium blockchain implementation is the solution offered in this repository.  

The benefits of this approach are:

1. Encapsulates the DSCSA implementation with a consortium blockchain
    - Protects and reduces changes to the existing supply chain infrastructure
    - Future system infrastructure upgrades can be made without DSCSA constraints
    - Mergers and acquisitions of additional products can be done directly to the blockchain insulating infrastructure
2. Provides a common industrial solution for consortium trading partners
    - Avoids maintaining an API for trading partners
    - Avoids trading partners from having to implement multiple protocols across manufacturers
3. Reduces the risk for fraud due to multitude of systems used by trading partners
4. Creates a "digital twin" or "digital passport" of packages being shipped
5. Creates a self-service module allowing authorized consortium members to view data as needed
6. Provides key information that can be used to query additional package details
7. Eliminates anti-monopoly concerns about requiring smaller companies to comply with mandates from larger companies

## [High level Requirements](https://www.pharmexec.com/view/what-you-need-know-about-drug-supply-chain-security-act)

- The interoperable exchange of Transactional Information and Transactional Statements in a secure, electronic manner
- The interoperable verification of the Product Identifier, which includes the GTIN/NDC, serial number, lot number, and expiration date
- The interoperable tracing of Transactional Information and Transactional Statements back to the manufacturer for each saleable unit

### Transactional Information

includes the name of the product, its strength and dosage form, its National Drug Code, the container size, the number of containers, the lot number, the transaction date, the shipment date, and the name and address of the businesses from which and to which ownership is transferred. Providing Transactional Information at each change of ownership and provides requirements for trading partners in the event of a recall, or knowledge of illegitimate or counterfeit drugs.

Manufacturers and re-packagers can only sell to authorized trading partners, and the law establishes national license standards for wholesalers and third-party logistics providers. Trading partners must also verify returns before redistribution, and the law added requirements to provide for full tracing of products at the package level.

Estimated #s:
    - Manufacturers = 1,400
    - Distributors  = 70
    - Dispensers    = 166,000

## Simple version 1 [Requirements](https://pmg-production.s3.amazonaws.com/2020/HCP/Files/HCP2018_Serialization_NODATE.pdf)

Show traceability

- OwnerAddress
- Global Trade Item Number (GTIN)
- Expiration Date (EXP)
- Lot Number (LOT)
- Serial Number (S/N)
