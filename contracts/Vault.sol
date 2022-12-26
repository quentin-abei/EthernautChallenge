// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 0x2356C46B99137BFc1a46D148096B4FEABC0614e8

// 0x412076657279207374726f6e67207365637265742070617373776f7264203a29

contract Vault {
  bool public locked;
  // get the password value in storage using 
  // await web3.eth.getStorageAt(contractAddress, 1(index of password variable))
  bytes32 private password;

  constructor(bytes32 _password) {
    locked = true;
    password = _password;
  }

  function unlock(bytes32 _password) public {
    if (password == _password) {
      locked = false;
    }
  }
}