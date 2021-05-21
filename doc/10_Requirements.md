# ![LDC Logo](99_images/LDC_32_32.ico) Requirements

The DSCSA is a [FDA regulation](https://www.fda.gov/drugs/drug-supply-chain-security-act-dscsa/drug-supply-chain-security-act-law-and-policies) to track drug packages through the supply chain.  The FDA completed a DSCSA blockchain pilot in 2020: [FDA Blockchain Pilot Report](https://www.ibm.com/downloads/cas/9V2LRYG5).

The pharmaceutical supply chain of Trading Partners:
    Supplier->Manufacturer->Re-packagers->Distributor->Wholesaler->Dispensers

The DSCSA currently has an implementation due date of November 27, 2023.  That date might change due to COVID-19 impacts.

## Scope of the DSCSA

The DSCSA applies to the to the movement of product in the supply chain apply only to prescription drugs *“…in a finished dosage form for administration to a patient without substantial further manufacturing (such as capsules,
tablets, and lyophilized products before reconstitution)“*.

### Combination Products

Some devices are classified by the FDA as drug-device or biologic-device Combination Products (CPs). If the FDA has determined that the Primary Mode of Action (PMOA) of your product is as a drug or a biologic, then your
CP may not be exempt from the DSCSA.

## Business Scenarios

The following business scenarios indicate a highly flexible solution is needed.

### Mainline Pharmaceutical

These are the largest companies by revenue, top 10 to 50.  For example, J&J, Pfizer, Bayer, and Merck

### Research and Development

Smaller pharmaceutical companies that may not have any approved drugs on the market.  For example, [PharmaMar](https://pharmamar.com/?lang=en).

### Generic

Pharmaceutical companies do not work much on R&D but help bring patent-expired medicines to the market at lower costs.

### Active Pharmaceutical Ingredients

Pharmaceutical companies that supply the core medicines needed in the manufacturing of drugs.  For example, [Teva | API](https://www.teva-api.com/)

### Biological

These companies produce vaccines, serums and blood products.

### Mergers

Companies merge together taking the best parts of each and making a new company eliminating redundancies.  For example, GlaxoSmithKline (GSK) has [300 years of mergers](https://www.gsk.com/media/4573/300yrs-of-gsk.pdf).

### Acquisitions

One company buys another or its products.  Generally, products are added to the buying company's existing infrastructure.  For example, Warner-Lambert was purchased by Pfizer.  Pfizer then sold its consumer health division to J&J's McNeal Consumer Health.

Listerine was first marketed in 1914 by Lambert Pharmacal Company.  If the DSCSA was required then for Listerine, the detailed DSCSA records would have to be maintained during the merger with Warner-Hudnut, acquisition by Pfizer, and sale to J&J.

### Licensing Partners

Usually smaller companies operating in 1 country will partner with larger global mainline companies for international sales.  

For example, J&J's [Janssen](https://www.janssen.com/) markets PharmaMar's Yondelis® (trabectedin) in the United States per their [licensing agreement](http://pharmamar.com/wp-content/uploads/2019/08/PR_PhM_Janssen_agreement_Yondelis_DEF.pdf).

In situations where the drug is imported, the US company will have to meet the DSCSA requirements for the US while the foreign manufacture may not have the capability or desire to meet the requirements.  They might be focused on other standards like the DSCSA required by other markets.

### Reverse Mergers

Zeltia and [PharmaMar](https://pharmamar.com/?lang=en) split apart with a corporate restructuring.

### Secondary Business Scenarios

- Controlled Substance regulations (FDA Schedule 2)
- Adverse Events, Adverse Drug Reactions, Vaccine Adverse Event
- Product Complaints
- Medical Devices
- Safeguarding Pharmaceutical Supply Chains efforts in the US may lead to more regulation

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
7. Eliminates anti-monopoly concerns about requiring compliance from smaller companies

## High level Requirements

- **Exchange** of Transactional Information and Transactional Statements in a secure, electronic manner
- **Verification** of the Product Identifier, which includes the GTIN/NDC, serial number, lot number, and expiration date
- **Tracing** of Transactional Information back to the manufacturer for each saleable unit
- **Recall** all relevant information about a given pharmaceutical lot
- **Alert** the network about drugs flagged as under evaluation,under investigation, or recalled status
- **Metadata** keys for additional details on package

### Transactional Information and Transactional Statements

Transactional Information and Statements include the name of the product, its strength and dosage form, its National Drug Code, the container size, the number of containers, the lot number, the transaction date, the shipment date, and the name and address of the businesses from which and to which ownership is transferred. Providing Transactional Information at each change of ownership and provides requirements for trading partners in the event of a recall, or knowledge of illegitimate or counterfeit drugs.

Manufacturers and re-packagers can only sell to authorized trading partners, and the law establishes national license standards for wholesalers and third-party logistics providers. Trading partners must also verify returns before redistribution, and the law added requirements to provide for full tracing of products at the package level.

Estimated #s:
    - Manufacturers = 1,400
    - Distributors  = 70
    - Dispensers    = 166,000

### Metadata

The blockchain will include keys to get additional metadata from other systems (i.e. [IPFS](ipns://ipfs.io/)).  

| Metadata      | Definition                                                                                               |
| :---          | ---                                                                                                      |
| `GS1`         | [Supply Chain Standards,](https://www.gs1.org/)                                                          |
| `OPEN-SCS`    | [The Open Serialization Communication Standard (Open-SCS)](https://www.open-scs.org/)                    |
| `CDISC`       | [Clinical Trial Standards](https://www.cdisc.org/)                                                       |
| `E2B AE`      | [ICH E2B](https://ich.org/page/e2br3-individual-case-safety-report-icsr-specification-and-related-files) |
| `HL7`         | [Health Level 7](https://www.hl7.org/implement/standards/)                                               |
| `NCI-GDC`     | [Clinical Data Standardization](https://gdc.cancer.gov/about-data/gdc-data-processing/clinical-data-standardization) |

## Use Cases

| Use Case          | Definition                                                                                            |
| :---              | ---                                                                                                   |
| `SimpleObserver`  | Only the MAH updates blockchain as events happen in internal systems for external viewers             |
| `MixedObserver`   | Some authorized trading partners are able to update the blockchain                                    |
| `Nirvana`         | All trading partners are responsible for updating the blockchain                                      |
| `MultiChain`      | Product is transferred to a different consortium blockchain / ledger                                  |
| `ChainChanges`    | Key trading partner, technical, or metadata  changes in the consortium blockchain           |

## Functional Requirements

1. Show traceability

- OwnerAddress (MAH)
- HolderAddress (Possession of Package)
- Global Trade Item Number (GTIN)
- Expiration Date (EXP)
- Lot Number (LOT)
- Serial Number (S/N)

### Future Functional Requirements

- Product Return processing
- Authorized trading partner licensing
- Product divestitures
- Removal of quality samples during distribution
- Reverse distribution
- Handling partial containers
- Exceptions:
    1. Overage
    2. Shortage
    3. Transaction Serial# Discrepancy
    4. Transaction Lot# Discrepancy
    5. Transaction Serial# And Lot# Incorrect
    6. Product Inference Problem
    7. Quantity Inference Problem
    8. Physical Inventory Overage
    9. Physical Inventory Overage (Concealed Overage)
    10. Physical Inventory Shortage (Concealed Shortage)
    11. Transaction Contains Incorrect Customer/Location Information
    12. Transaction Contains Incorrect Product Information
    13. Transaction Contains Incorrect Reference# Information
    14. Transaction (Or EPCIS Ship Event) Not Received By Customer
    15. Exception 15: Undelivered Shipment
    16. Lost Shipment
    17. Received Physical Product From An Unidentified Sender
    18. Missing
    19. Could Not Read Transaction Data Due To Security Mismatch
    20. Transaction Data Not In Correct Format
    21. Good Product - Damaged Barcode Or RFID
    22. Damaged Product - Good Barcode Or RFID
    23. Damaged Product - Damaged Barcode Or RFID
    24. Damaged Shipment
    25. No ParentChild Aggregation
    26. Transaction Data Incomplete
    27. Transaction Data Has Broken Chain
    28. Shipped Product To Wrong Customer & Transaction Data To Correct Customer
    29. Customer Refuses Order
    30. Unauthorized Return
    31. Shipment For Wholesaler “Y” Arrives At Wholesaler “X”
