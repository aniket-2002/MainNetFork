//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

interface IERC20 {

    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract ERC20{
    function totalSupp(address _ERC20) external view returns(uint256){
       uint256 value = IERC20(_ERC20).totalSupply();
       return value;
    }

    function balanceOff(address _ERC20, address _DAI_WHALE) external view returns(uint256){
        uint256 value = IERC20(_ERC20).balanceOf(_DAI_WHALE);
        return value;
    }

    function transf(address _ERC20,address to, uint256 amount) external returns (bool){
        bool val = IERC20(_ERC20).transfer(to, amount);
        return val;
    }
    
}
