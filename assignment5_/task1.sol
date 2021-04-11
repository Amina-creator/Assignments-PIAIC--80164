 pragma solidity ^0.5.0;

contract Studentenrollment{
    
    address  payable private myAddress;
    
    
    struct Student{
        string name;
        uint age;
        address addr;
        bool degree;
        uint rollNumber;
    }
    uint public numberofstudents;
    
    mapping(uint => Student)studentData;
    
    function setMyAddress(address payable _myAddress)public{
        myAddress = _myAddress;
    }
    
    function enrollStudent(string memory _name, uint _age, address _address, bool _haveDegree, uint _rollNumber)public payable{
        
        require(msg.value >= 2 ether);
       
        Student memory myStudent = Student(_name, _age, _address, _haveDegree, _rollNumber);
        
        myAddress.transfer(msg.value);
        
        studentData[_rollNumber] = myStudent;
        numberofstudents++;
    }
    
    function getStudentData(uint _rollNumber)public view returns(string memory, uint, address, bool,uint){
        return(
            studentData[_rollNumber].name,
            studentData[_rollNumber].age,
            studentData[_rollNumber].addr,
            studentData[_rollNumber].class,
            studentData[_rollNumber].rollNumber
             );
    }
    
    function balance()public view returns(uint){
        return myAddress.balance;
    }

    function hasDegree(uint _rollNumber)public view returns(bool){
        return studentData[_rollNumber].degree;
    }
    
}
