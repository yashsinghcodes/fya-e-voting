// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract vote {
    
    uint public candidateCount;


    // participating candidates
    
    struct Candidate{
        string party_name;
        uint64 voteCount;
        string img_url;
        uint id;
    }
    mapping(uint => Candidate) public candDetails;

    function addCandidate(string memory _name, string memory _img_url) public{
        Candidate memory newCandidate = Candidate(_name, 0, _img_url, candidateCount);
        candDetails[candidateCount] = newCandidate;
        candidateCount += 1;
    }

    // voters

    struct Voter{
        string name;
        string aadhar;
        bool hasVoted;
    }
    mapping(address => Voter) public voterDetails;

    function addVoters(string memory _name, string memory _aadhar, address _user) public{
        Voter memory newVoter = Voter(_name, _aadhar, false);
        voterDetails[_user] = newVoter;
    }

    // sample voters (address are relative to ganache) and participants
    constructor(){
        addCandidate("BJP","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png");
        addCandidate("INC","https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian_National_Congress_logo.svg/800px-Indian_National_Congress_logo.svg.png");
        addCandidate("NDA","https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/National_Democratic_Alliance_logo.svg/800px-National_Democratic_Alliance_logo.svg.png");
        addCandidate("NOTA","https://upload.wikimedia.org/wikipedia/commons/f/f6/NOTA_Option_Logo.svg");
    
        // voters
        addVoters("Raja","12345678912", 0x12123B2c064b62c54D00a691D84778A1944bC401);
        addVoters("Asmi", "666", 0x5E212f598a5c7C4566ae54214aA10dbf53525777);
        addVoters("Preeti", "0987654321", 0x307b19dC0F1c677bee88D28FAC8760dF77e6b8a4);
    }


    // voting function

    function voting(uint candId) public{
        require(voterDetails[msg.sender].hasVoted == false);
        candDetails[candId].voteCount += 1;
        voterDetails[msg.sender].hasVoted = true;
    }

    // return style top to bottom style - i.e accourding to the result in 

    function getResult() public view returns(uint [][] memory){
        uint[][] memory result;
        for (uint i = 0; i <= candidateCount; i++){
            result[i][0] = candDetails[i].id;
            result[i][1] = candDetails[i].voteCount;
        }
        return result;
    }

    /*
        TODO OR MAY REQUIRED
        
        [-] Making addCandidate and addVoters to admin only function
        [-] Create a separate dashboard for admin to add users and verify votes
    */
}