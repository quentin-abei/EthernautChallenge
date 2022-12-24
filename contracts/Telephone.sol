// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//0x0A4d2d031318F153f043AD0B689162D2ca127329

contract Telephone {

  address public owner;

  constructor() {
    owner = msg.sender;
  }

  function changeOwner(address _owner) public {
    if (tx.origin != msg.sender) {
      owner = _owner;
    }
  }
}
