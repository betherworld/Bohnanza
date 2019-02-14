# Bohnanza

## Objective:
How can Distributed ledger Technology (DLT) help to ensure full traceability of organic-certified soybeans produced in Ukraine and transported to Switzerland?

## Goals:
- Volumes recorded for all units 
- Link of harvested soybeans to specific area/field 
- Farmer sells only what he harvests  
- Trader sells only certified soybeans to Buyer 
- Buyer has traceability to certified farms


## Verification:

Requirements
- Identify the amount and origin of beans
- Tracing beans
- Scalability
- Verify the harvesting process

IoT
- GPS/time on harvest machine + trucks
- volumetric sensors on trucks and warehouses + timestamp

Database
- GPS positions of warehouses and fields
- field data: crop, area, time for harvesting
- farmer data: contract, organic

Plausibility checks (IoTs match up):
- Harvesting: GPS positions near, time for harvesting, time of harvest, GPS trace, volumetric
- Transport: Truck route/time, “handover” time
- Warehouse: volumetric, handover time



## BeanPool System
 
1. Farmer generates a BeanBlock and links his verification Data to the BeanBlock.
- Each Farmer uses his private key to encrypt the the BeanBlock.
- A trader verifies the Volume and Product received and puts his “Signature” (Transition certificate) on the VerificationPackage.
2. The BeanBlock, together with the public key of the farmer who signed it, is put into a VerificationPackage.
- Depending on the reputation of the Farmer, his VerificationPackage is assigned a VerificationValue.
3. A Verifier (Farmer, Peterson Control or other) is assigned a VerificationPackage at random from the BeanPool.
- While the BeanBlock contained in the VerificationPackage is being verified by the Verifier by means of the verification data, it remains inaccessible in the BeanPool.
- The Verifier unlocks the BeanBlock with the attached public key.

- He looks at the verification Data from IoT devices and can decide if the data matches the claim in the BeanBlock.

   i) If the data matches the claim, the VerificationPackage, VerificationValue is raised by an amount proportional to the reputation of the Verifier.

   ii) If the data does not match the claim the VerificationPackage, VerificationValue is lowered by an amount proportional to the reputation of the Verifier.

- Before the VerificationPackage can be returned to the BeanPool, the following conditions are checked

   i) If the VerificationPackage VerificationValue is below a determined lower threshold, the BeanBlock is marked as invalid and the reputation of the original Farmer and all Verifiers who marked the Block as valid is lowered. The BeanBlock is still added to the BeanChain.
   
   ii) If the VerificationPackage VerificationValue is above a certain upper threshold, the BeanBlock is marked as Valid and added to the BeanChain. Additionally, the reputation of the original Farmer and all who verified correctly is raised.
   
   iii) If the VerificationPackage VerificationValue does not pass the lower nor the upper threshold, it is returned to the BeanPool.
   
- When the VerificationPackage is returned to the BeanPool the vote and id of the Verifier is added to the VerrificationList of the VerificationPackage. This enables the continuous tracking of how each Verifier voted. Finally the Verifier encrypts the BeanBlock with his personal private key and together with the new public key, the VerificationPackage is thrown back into the BeanPool.


## Definition of the BeanBlock
- BeanBlock ID
- Amount (e.g. 300T)
- Type (e.g. Organic Bean)
- Source (Field or previous BeanBlock)
- Owner (e.g. Farmer 1, Trader X)
- Data hash (links to the verification data)
- Verification bit

## Definition of the VerificationPackage
- encrypted BeanBlock
- public key
- verification list
- verificationValue
- Transition certificate


## Scalability
Because subcontractors work as their own entity and will thus be treated in similar manner as the farmers, blocks can either be added or removed based on the complexity of the supply chain. The verification procedure i.e BeanPool remains the same.  
