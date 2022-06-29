/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type {
  ERC721_NFT,
  ERC721_NFTInterface,
} from "../../contracts/ERC721_NFT";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_baseUri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseUri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001fad38038062001fad8339810160408190526200003491620002d2565b6040805180820182526007815266135bd8dad3919560ca1b60208083019182528351808501909452600384526213519560ea1b9084015281519192916200007e9160009162000216565b5080516200009490600190602084019062000216565b505050620000b1620000ab620000eb60201b60201c565b620000ef565b8051620000c690600890602084019062000216565b506001600160a01b0382163314620000e357620000e38262000141565b50506200040e565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6007546001600160a01b03163314620001a15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b038116620002085760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000198565b6200021381620000ef565b50565b8280546200022490620003d2565b90600052602060002090601f01602090048101928262000248576000855562000293565b82601f106200026357805160ff191683800117855562000293565b8280016001018555821562000293579182015b828111156200029357825182559160200191906001019062000276565b50620002a1929150620002a5565b5090565b5b80821115620002a15760008155600101620002a6565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215620002e657600080fd5b82516001600160a01b0381168114620002fe57600080fd5b602084810151919350906001600160401b03808211156200031e57600080fd5b818601915086601f8301126200033357600080fd5b815181811115620003485762000348620002bc565b604051601f8201601f19908116603f01168101908382118183101715620003735762000373620002bc565b8160405282815289868487010111156200038c57600080fd5b600093505b82841015620003b0578484018601518185018701529285019262000391565b82841115620003c25760008684830101525b8096505050505050509250929050565b600181811c90821680620003e757607f821691505b6020821081036200040857634e487b7160e01b600052602260045260246000fd5b50919050565b611b8f806200041e6000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b88d4fde11610081578063cd279c7c11610066578063cd279c7c14610274578063e985e9c514610287578063f2fde38b146102c357600080fd5b8063b88d4fde1461024e578063c87b56dd1461026157600080fd5b80638da5cb5b1461021a57806395d89b411461022b5780639abc832014610233578063a22cb4651461023b57600080fd5b806323b872dd116101095780636352211e116100ee5780636352211e146101de57806370a08231146101f1578063715018a61461021257600080fd5b806323b872dd146101b857806342842e0e146101cb57600080fd5b806301ffc9a71461013b57806306fdde0314610163578063081812fc14610178578063095ea7b3146101a3575b600080fd5b61014e6101493660046116ee565b6102d6565b60405190151581526020015b60405180910390f35b61016b610328565b60405161015a9190611763565b61018b610186366004611776565b6103ba565b6040516001600160a01b03909116815260200161015a565b6101b66101b13660046117ab565b610454565b005b6101b66101c63660046117d5565b610569565b6101b66101d93660046117d5565b6105f0565b61018b6101ec366004611776565b61060b565b6102046101ff366004611811565b610696565b60405190815260200161015a565b6101b6610730565b6007546001600160a01b031661018b565b61016b610796565b61016b6107a5565b6101b661024936600461182c565b610833565b6101b661025c3660046118f4565b610842565b61016b61026f366004611776565b6108d0565b6101b6610282366004611970565b6108db565b61014e6102953660046119db565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101b66102d1366004611811565b610949565b60006001600160e01b031982166380ac58cd60e01b148061030757506001600160e01b03198216635b5e139f60e01b145b8061032257506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461033790611a0e565b80601f016020809104026020016040519081016040528092919081815260200182805461036390611a0e565b80156103b05780601f10610385576101008083540402835291602001916103b0565b820191906000526020600020905b81548152906001019060200180831161039357829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104385760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061045f8261060b565b9050806001600160a01b0316836001600160a01b0316036104cc5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161042f565b336001600160a01b03821614806104e857506104e88133610295565b61055a5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161042f565b6105648383610a2b565b505050565b6105733382610a99565b6105e55760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161042f565b610564838383610b90565b61056483838360405180602001604052806000815250610842565b6000818152600260205260408120546001600160a01b0316806103225760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161042f565b60006001600160a01b0382166107145760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161042f565b506001600160a01b031660009081526003602052604090205490565b6007546001600160a01b0316331461078a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161042f565b6107946000610d44565b565b60606001805461033790611a0e565b600880546107b290611a0e565b80601f01602080910402602001604051908101604052809291908181526020018280546107de90611a0e565b801561082b5780601f106108005761010080835404028352916020019161082b565b820191906000526020600020905b81548152906001019060200180831161080e57829003601f168201915b505050505081565b61083e338383610d96565b5050565b61084c3383610a99565b6108be5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161042f565b6108ca84848484610e64565b50505050565b606061032282610ee2565b6007546001600160a01b031633146109355760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161042f565b61093f838361105f565b6105648282611079565b6007546001600160a01b031633146109a35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161042f565b6001600160a01b038116610a1f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161042f565b610a2881610d44565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610a608261060b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610b125760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161042f565b6000610b1d8361060b565b9050806001600160a01b0316846001600160a01b03161480610b6457506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610b885750836001600160a01b0316610b7d846103ba565b6001600160a01b0316145b949350505050565b826001600160a01b0316610ba38261060b565b6001600160a01b031614610c1f5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e6572000000000000000000000000000000000000000000000000000000606482015260840161042f565b6001600160a01b038216610c815760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161042f565b610c8c600082610a2b565b6001600160a01b0383166000908152600360205260408120805460019290610cb5908490611a5e565b90915550506001600160a01b0382166000908152600360205260408120805460019290610ce3908490611a75565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031603610df75760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161042f565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e6f848484610b90565b610e7b84848484611122565b6108ca5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161042f565b6000818152600260205260409020546060906001600160a01b0316610f6f5760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f722060448201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000606482015260840161042f565b60008281526006602052604081208054610f8890611a0e565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb490611a0e565b80156110015780601f10610fd657610100808354040283529160200191611001565b820191906000526020600020905b815481529060010190602001808311610fe457829003601f168201915b50505050509050600061101261126e565b90508051600003611024575092915050565b81511561105657808260405160200161103e929190611a8d565b60405160208183030381529060405292505050919050565b610b888461127d565b61083e828260405180602001604052806000815250611366565b6000828152600260205260409020546001600160a01b03166111035760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201527f6578697374656e7420746f6b656e000000000000000000000000000000000000606482015260840161042f565b600082815260066020908152604090912082516105649284019061163f565b60006001600160a01b0384163b1561126357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611166903390899088908890600401611abc565b6020604051808303816000875af19250505080156111a1575060408051601f3d908101601f1916820190925261119e91810190611af8565b60015b611249573d8080156111cf576040519150601f19603f3d011682016040523d82523d6000602084013e6111d4565b606091505b5080516000036112415760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161042f565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b88565b506001949350505050565b60606008805461033790611a0e565b6000818152600260205260409020546060906001600160a01b031661130a5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161042f565b600061131461126e565b90506000815111611334576040518060200160405280600081525061135f565b8061133e846113e4565b60405160200161134f929190611a8d565b6040516020818303038152906040525b9392505050565b61137083836114fd565b61137d6000848484611122565b6105645760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161042f565b60608160000361140b5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611435578061141f81611b15565b915061142e9050600a83611b44565b915061140f565b60008167ffffffffffffffff81111561145057611450611868565b6040519080825280601f01601f19166020018201604052801561147a576020820181803683370190505b5090505b8415610b885761148f600183611a5e565b915061149c600a86611b58565b6114a7906030611a75565b60f81b8183815181106114bc576114bc611b6c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506114f6600a86611b44565b945061147e565b6001600160a01b0382166115535760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161042f565b6000818152600260205260409020546001600160a01b0316156115b85760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161042f565b6001600160a01b03821660009081526003602052604081208054600192906115e1908490611a75565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461164b90611a0e565b90600052602060002090601f01602090048101928261166d57600085556116b3565b82601f1061168657805160ff19168380011785556116b3565b828001600101855582156116b3579182015b828111156116b3578251825591602001919060010190611698565b506116bf9291506116c3565b5090565b5b808211156116bf57600081556001016116c4565b6001600160e01b031981168114610a2857600080fd5b60006020828403121561170057600080fd5b813561135f816116d8565b60005b8381101561172657818101518382015260200161170e565b838111156108ca5750506000910152565b6000815180845261174f81602086016020860161170b565b601f01601f19169290920160200192915050565b60208152600061135f6020830184611737565b60006020828403121561178857600080fd5b5035919050565b80356001600160a01b03811681146117a657600080fd5b919050565b600080604083850312156117be57600080fd5b6117c78361178f565b946020939093013593505050565b6000806000606084860312156117ea57600080fd5b6117f38461178f565b92506118016020850161178f565b9150604084013590509250925092565b60006020828403121561182357600080fd5b61135f8261178f565b6000806040838503121561183f57600080fd5b6118488361178f565b91506020830135801515811461185d57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561189957611899611868565b604051601f8501601f19908116603f011681019082821181831017156118c1576118c1611868565b816040528093508581528686860111156118da57600080fd5b858560208301376000602087830101525050509392505050565b6000806000806080858703121561190a57600080fd5b6119138561178f565b93506119216020860161178f565b925060408501359150606085013567ffffffffffffffff81111561194457600080fd5b8501601f8101871361195557600080fd5b6119648782356020840161187e565b91505092959194509250565b60008060006060848603121561198557600080fd5b61198e8461178f565b925060208401359150604084013567ffffffffffffffff8111156119b157600080fd5b8401601f810186136119c257600080fd5b6119d18682356020840161187e565b9150509250925092565b600080604083850312156119ee57600080fd5b6119f78361178f565b9150611a056020840161178f565b90509250929050565b600181811c90821680611a2257607f821691505b602082108103611a4257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015611a7057611a70611a48565b500390565b60008219821115611a8857611a88611a48565b500190565b60008351611a9f81846020880161170b565b835190830190611ab381836020880161170b565b01949350505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611aee6080830184611737565b9695505050505050565b600060208284031215611b0a57600080fd5b815161135f816116d8565b600060018201611b2757611b27611a48565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611b5357611b53611b2e565b500490565b600082611b6757611b67611b2e565b500690565b634e487b7160e01b600052603260045260246000fdfea164736f6c634300080d000a";

type ERC721_NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721_NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721_NFT__factory extends ContractFactory {
  constructor(...args: ERC721_NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _baseUri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721_NFT> {
    return super.deploy(
      _owner,
      _baseUri,
      overrides || {}
    ) as Promise<ERC721_NFT>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _baseUri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _baseUri, overrides || {});
  }
  override attach(address: string): ERC721_NFT {
    return super.attach(address) as ERC721_NFT;
  }
  override connect(signer: Signer): ERC721_NFT__factory {
    return super.connect(signer) as ERC721_NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721_NFTInterface {
    return new utils.Interface(_abi) as ERC721_NFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721_NFT {
    return new Contract(address, _abi, signerOrProvider) as ERC721_NFT;
  }
}
