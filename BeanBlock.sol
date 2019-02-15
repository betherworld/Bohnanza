//This was the first version of a BeanBlock for Etherium or BurrowHyperledger, however we afterwars switched to Hyperledger Composer
//Implementation of a BeanBlock in Solidity which could be used in combination with BurrowHyperledger


pragma solidity ^0.5.0;


contract BeanBlock{
    struct BeanBlockStruct{
        uint256 id;
        string ownerCert;
        string source;
        uint256 amount;
        string cropType;
        string dataHash;
        bool valid;
        bool exists;
    }

    mapping(uint256 => BeanBlockStruct) public beanBlocks;
    uint256[] public beanBlockIds;

    function exsists(uint256 id) view public returns (bool doesIt){
        return beanBlocks[id].exists;
    }

    function newBeanBlocks(
        uint256 s_id,
        string memory s_ownerCert,
        string memory s_source,
        uint256 s_amount,
        string memory s_cropType,
        string memory s_dataHash,
        bool s_valid) public returns ( uint256 row_number){
            require(!beanBlocks[s_id].exists);
            beanBlocks[s_id].id = s_id;
            beanBlocks[s_id].ownerCert = s_ownerCert;
            beanBlocks[s_id].source = s_source;
            beanBlocks[s_id].amount = s_amount;
            beanBlocks[s_id].cropType = s_cropType;
            beanBlocks[s_id].dataHash = s_dataHash;
            beanBlocks[s_id].valid  = s_valid;
            beanBlocks[s_id].exists = true;

            return (beanBlockIds.push(s_id)-1);
    }

    function getBeanBlocks() view public returns (uint256[] memory){
        return beanBlockIds;
    }

    function getBeanBlock(uint256 id) view public returns (
        uint256,
        string memory,
        string memory,
        uint256,
        string memory,
        string memory,
        bool) {
            require(beanBlocks[id].exists);
            return (
                beanBlocks[id].id,
                beanBlocks[id].ownerCert,
                beanBlocks[id].source,
                beanBlocks[id].amount,
                beanBlocks[id].cropType,
                beanBlocks[id].dataHash,
                beanBlocks[id].valid);

    }

    function isValid(uint256 id) view public returns(bool validity){
        return beanBlocks[id].valid;
    }

}
