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
    inputs: [],
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
  "0x60806040523480156200001157600080fd5b506040805180820182526007815266135bd8dad3919560ca1b60208083019182528351808501909452600384526213519560ea1b9084015281519192916200005c91600091620000eb565b50805162000072906001906020840190620000eb565b5050506200008f620000896200009560201b60201c565b62000099565b620001cd565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000f99062000191565b90600052602060002090601f0160209004810192826200011d576000855562000168565b82601f106200013857805160ff191683800117855562000168565b8280016001018555821562000168579182015b82811115620001685782518255916020019190600101906200014b565b50620001769291506200017a565b5090565b5b808211156200017657600081556001016200017b565b600181811c90821680620001a657607f821691505b602082108103620001c757634e487b7160e01b600052602260045260246000fd5b50919050565b611afb80620001dd6000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c8063715018a6116100b2578063b88d4fde11610081578063d204c45e11610066578063d204c45e14610251578063e985e9c514610264578063f2fde38b146102a057600080fd5b8063b88d4fde1461022b578063c87b56dd1461023e57600080fd5b8063715018a6146101f75780638da5cb5b146101ff57806395d89b4114610210578063a22cb4651461021857600080fd5b806323b872dd116100ee57806323b872dd1461019d57806342842e0e146101b05780636352211e146101c357806370a08231146101d657600080fd5b806301ffc9a71461012057806306fdde0314610148578063081812fc1461015d578063095ea7b314610188575b600080fd5b61013361012e366004611663565b6102b3565b60405190151581526020015b60405180910390f35b610150610305565b60405161013f91906116d8565b61017061016b3660046116eb565b610397565b6040516001600160a01b03909116815260200161013f565b61019b610196366004611720565b610431565b005b61019b6101ab36600461174a565b610546565b61019b6101be36600461174a565b6105cd565b6101706101d13660046116eb565b6105e8565b6101e96101e4366004611786565b610673565b60405190815260200161013f565b61019b61070d565b6007546001600160a01b0316610170565b610150610773565b61019b6102263660046117a1565b610782565b61019b610239366004611869565b610791565b61015061024c3660046116eb565b61081f565b61019b61025f3660046118e5565b61082a565b610133610272366004611947565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61019b6102ae366004611786565b6108b3565b60006001600160e01b031982166380ac58cd60e01b14806102e457506001600160e01b03198216635b5e139f60e01b145b806102ff57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546103149061197a565b80601f01602080910402602001604051908101604052809291908181526020018280546103409061197a565b801561038d5780601f106103625761010080835404028352916020019161038d565b820191906000526020600020905b81548152906001019060200180831161037057829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104155760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061043c826105e8565b9050806001600160a01b0316836001600160a01b0316036104a95760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161040c565b336001600160a01b03821614806104c557506104c58133610272565b6105375760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161040c565b6105418383610995565b505050565b6105503382610a03565b6105c25760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161040c565b610541838383610afa565b61054183838360405180602001604052806000815250610791565b6000818152600260205260408120546001600160a01b0316806102ff5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161040c565b60006001600160a01b0382166106f15760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161040c565b506001600160a01b031660009081526003602052604090205490565b6007546001600160a01b031633146107675760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040c565b6107716000610cae565b565b6060600180546103149061197a565b61078d338383610d00565b5050565b61079b3383610a03565b61080d5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161040c565b61081984848484610dce565b50505050565b60606102ff82610e4c565b6007546001600160a01b031633146108845760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040c565b600061088f60085490565b905061089f600880546001019055565b6108a98382610fd6565b6105418183610ff0565b6007546001600160a01b0316331461090d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040c565b6001600160a01b0381166109895760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161040c565b61099281610cae565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906109ca826105e8565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610a7c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161040c565b6000610a87836105e8565b9050806001600160a01b0316846001600160a01b03161480610ace57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610af25750836001600160a01b0316610ae784610397565b6001600160a01b0316145b949350505050565b826001600160a01b0316610b0d826105e8565b6001600160a01b031614610b895760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e6572000000000000000000000000000000000000000000000000000000606482015260840161040c565b6001600160a01b038216610beb5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161040c565b610bf6600082610995565b6001600160a01b0383166000908152600360205260408120805460019290610c1f9084906119ca565b90915550506001600160a01b0382166000908152600360205260408120805460019290610c4d9084906119e1565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031603610d615760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161040c565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610dd9848484610afa565b610de584848484611099565b6108195760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161040c565b6000818152600260205260409020546060906001600160a01b0316610ed95760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f722060448201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000606482015260840161040c565b60008281526006602052604081208054610ef29061197a565b80601f0160208091040260200160405190810160405280929190818152602001828054610f1e9061197a565b8015610f6b5780601f10610f4057610100808354040283529160200191610f6b565b820191906000526020600020905b815481529060010190602001808311610f4e57829003601f168201915b505050505090506000610f8960408051602081019091526000815290565b90508051600003610f9b575092915050565b815115610fcd578082604051602001610fb59291906119f9565b60405160208183030381529060405292505050919050565b610af2846111e5565b61078d8282604051806020016040528060008152506112db565b6000828152600260205260409020546001600160a01b031661107a5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201527f6578697374656e7420746f6b656e000000000000000000000000000000000000606482015260840161040c565b60008281526006602090815260409091208251610541928401906115b4565b60006001600160a01b0384163b156111da57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906110dd903390899088908890600401611a28565b6020604051808303816000875af1925050508015611118575060408051601f3d908101601f1916820190925261111591810190611a64565b60015b6111c0573d808015611146576040519150601f19603f3d011682016040523d82523d6000602084013e61114b565b606091505b5080516000036111b85760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161040c565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610af2565b506001949350505050565b6000818152600260205260409020546060906001600160a01b03166112725760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161040c565b600061128960408051602081019091526000815290565b905060008151116112a957604051806020016040528060008152506112d4565b806112b384611359565b6040516020016112c49291906119f9565b6040516020818303038152906040525b9392505050565b6112e58383611472565b6112f26000848484611099565b6105415760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161040c565b6060816000036113805750506040805180820190915260018152600360fc1b602082015290565b8160005b81156113aa578061139481611a81565b91506113a39050600a83611ab0565b9150611384565b60008167ffffffffffffffff8111156113c5576113c56117dd565b6040519080825280601f01601f1916602001820160405280156113ef576020820181803683370190505b5090505b8415610af2576114046001836119ca565b9150611411600a86611ac4565b61141c9060306119e1565b60f81b81838151811061143157611431611ad8565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061146b600a86611ab0565b94506113f3565b6001600160a01b0382166114c85760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161040c565b6000818152600260205260409020546001600160a01b03161561152d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161040c565b6001600160a01b03821660009081526003602052604081208054600192906115569084906119e1565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8280546115c09061197a565b90600052602060002090601f0160209004810192826115e25760008555611628565b82601f106115fb57805160ff1916838001178555611628565b82800160010185558215611628579182015b8281111561162857825182559160200191906001019061160d565b50611634929150611638565b5090565b5b808211156116345760008155600101611639565b6001600160e01b03198116811461099257600080fd5b60006020828403121561167557600080fd5b81356112d48161164d565b60005b8381101561169b578181015183820152602001611683565b838111156108195750506000910152565b600081518084526116c4816020860160208601611680565b601f01601f19169290920160200192915050565b6020815260006112d460208301846116ac565b6000602082840312156116fd57600080fd5b5035919050565b80356001600160a01b038116811461171b57600080fd5b919050565b6000806040838503121561173357600080fd5b61173c83611704565b946020939093013593505050565b60008060006060848603121561175f57600080fd5b61176884611704565b925061177660208501611704565b9150604084013590509250925092565b60006020828403121561179857600080fd5b6112d482611704565b600080604083850312156117b457600080fd5b6117bd83611704565b9150602083013580151581146117d257600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561180e5761180e6117dd565b604051601f8501601f19908116603f01168101908282118183101715611836576118366117dd565b8160405280935085815286868601111561184f57600080fd5b858560208301376000602087830101525050509392505050565b6000806000806080858703121561187f57600080fd5b61188885611704565b935061189660208601611704565b925060408501359150606085013567ffffffffffffffff8111156118b957600080fd5b8501601f810187136118ca57600080fd5b6118d9878235602084016117f3565b91505092959194509250565b600080604083850312156118f857600080fd5b61190183611704565b9150602083013567ffffffffffffffff81111561191d57600080fd5b8301601f8101851361192e57600080fd5b61193d858235602084016117f3565b9150509250929050565b6000806040838503121561195a57600080fd5b61196383611704565b915061197160208401611704565b90509250929050565b600181811c9082168061198e57607f821691505b6020821081036119ae57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156119dc576119dc6119b4565b500390565b600082198211156119f4576119f46119b4565b500190565b60008351611a0b818460208801611680565b835190830190611a1f818360208801611680565b01949350505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611a5a60808301846116ac565b9695505050505050565b600060208284031215611a7657600080fd5b81516112d48161164d565b600060018201611a9357611a936119b4565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611abf57611abf611a9a565b500490565b600082611ad357611ad3611a9a565b500690565b634e487b7160e01b600052603260045260246000fdfea164736f6c634300080d000a";

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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721_NFT> {
    return super.deploy(overrides || {}) as Promise<ERC721_NFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
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
