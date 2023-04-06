//SPDX-License-Identifier: Unlicensed
pragma solidity >= 0.8.0;

contract vote{
    bool public isVoted = false;

    function set(bool val) public{
        isVoted = val;
    }
    function get() public view returns(bool){
        return isVoted;
    }
}