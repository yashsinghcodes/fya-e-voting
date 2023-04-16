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
    mapping(uint => Candidate)  public candDetails;

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
        addVoters("Raja","12345678912", 0xCACF608D8697480fb31c1767Dc02F6F72E35bC98);
        addVoters("Asmi", "666", 0xe9E9f64b8760f543F4bD71a3fd1e163A0e9beBc9);
        addVoters("Preeti", "0987654321", 0x3b1e8cCC9C02d03753E85A620df04AaC70B5BA02);
        addVoters("Yash", "34243434", 0x53b3e1F292E86f32806BEdF2986B9378EA88C53a);
    }


    // voting function

    function voting(uint candId) public{
        require(voterDetails[msg.sender].hasVoted == false);
        candDetails[candId].voteCount += 1;
        voterDetails[msg.sender].hasVoted = true;
    }

    function checkVoted(address addr) public view returns(bool){
        return voterDetails[addr].hasVoted;
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

    function getCandid(uint id) public view returns(Candidate memory){
        return candDetails[id];
    }
    
    /*
        TODO OR MAY REQUIRED
        
        [-] Making addCandidate and addVoters to admin only function
        [-] Create a separate dashboard for admin to add users and verify votes
    */
}