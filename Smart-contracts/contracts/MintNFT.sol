// contracts/MintNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract MintNFT is ERC1155, Ownable, ERC1155Burnable {
    constructor(string memory url, uint256[] memory quantities) ERC1155(url) {
        uint256 i;
        uint256 length = quantities.length;
        for (i = 0; i < length; ) {
            _mint(msg.sender, i, quantities[i], "");
            unchecked {
                ++i;
            }
        }
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return (
            string(
                abi.encodePacked(super.uri(tokenId), Strings.toString(tokenId))
            )
        );
    }

    function setURI(string memory url) public onlyOwner {
        _setURI(url);
    }
}