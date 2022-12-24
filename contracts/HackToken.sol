// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;


contract Hack {
    address target;
    constructor(address _target) {
       target = _target;
       // Token(_target).transfer(msg.sender, 1);
    }
}


/*pragma solidity ^0.6.0;

// 0x2f5691Fae54AD60b5f790d6647064b5b7bD1065b

contract Token {

  mapping(address => uint) balances;
  uint public totalSupply;

  constructor(uint _initialSupply) public {
    balances[msg.sender] = totalSupply = _initialSupply;
  }

  function transfer(address _to, uint _value) public returns (bool) {
    require(balances[msg.sender] - _value >= 0);
    balances[msg.sender] -= _value;
    balances[_to] += _value;
    return true;
  }

  function balanceOf(address _owner) public view returns (uint balance) {
    return balances[_owner];
  }
}*/