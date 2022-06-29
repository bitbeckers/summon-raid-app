/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../common";
import type {
  Staking,
  StakingInterface,
} from "../../../contracts/Staking_Pool.sol/Staking";
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
        internalType: "address",
        name: "_stakeTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "added",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "AvailableRewardsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "slashed",
        type: "bool",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "CONFIG_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getStakedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "stakedBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getStakingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAvailable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
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
    name: "rewardToken",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeToken",
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
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260646009553480156200001657600080fd5b5060405162002683380380620026838339810160408190526200003991620001ee565b60016000819055805460ff19169055600380546001600160a01b0319166001600160a01b03831617905560405130906200007390620001c3565b6001600160a01b039091168152602001604051809103906000f080158015620000a0573d6000803e3d6000fd5b50600480546001600160a01b0319166001600160a01b0392909216919091179055620000ce6000336200010f565b620000db6000836200011f565b620001077f82db594318110a04b6349ce48645aa69f0892751bc893d15e61d9e2b9c4630f5836200011f565b505062000226565b6200011b82826200011f565b5050565b60008281526002602090815260408083206001600160a01b038516845290915290205460ff166200011b5760008281526002602090815260408083206001600160a01b03851684529091529020805460ff191660011790556200017f3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61119380620014f083390190565b80516001600160a01b0381168114620001e957600080fd5b919050565b600080604083850312156200020257600080fd5b6200020d83620001d1565b91506200021d60208401620001d1565b90509250929050565b6112ba80620002366000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c80637b0a47ee116100cd578063a4d19feb11610081578063d547741f11610066578063d547741f14610321578063f7b188a514610334578063f7c618c11461033c57600080fd5b8063a4d19feb146102e7578063a694fc3a1461030e57600080fd5b80638456cb59116100b25780638456cb591461029e57806391d14854146102a6578063a217fddf146102df57600080fd5b80637b0a47ee1461028e578063817b1cd21461029657600080fd5b8063372500ab1161012457806351ed6a301161010957806351ed6a30146102365780635c975abb1461025b57806378f4d4131461026657600080fd5b8063372500ab146102055780633a02a42d1461020d57600080fd5b80632e1a7d4d116101555780632e1a7d4d146101ca5780632f2ff15d146101df57806336568abe146101f257600080fd5b806301ffc9a714610171578063248a9ca314610199575b600080fd5b61018461017f366004611038565b61034d565b60405190151581526020015b60405180910390f35b6101bc6101a7366004611062565b60009081526002602052604090206001015490565b604051908152602001610190565b6101dd6101d8366004611062565b610384565b005b6101dd6101ed366004611097565b6105ca565b6101dd610200366004611097565b6105f4565b6101dd610680565b6101bc61021b3660046110c3565b6001600160a01b031660009081526005602052604090205490565b6003546001600160a01b03165b6040516001600160a01b039091168152602001610190565b60015460ff16610184565b6102796102743660046110c3565b610849565b60408051928352602083019190915201610190565b6009546101bc565b6006546101bc565b6101dd61085e565b6101846102b4366004611097565b60009182526002602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101bc600081565b6101bc7f82db594318110a04b6349ce48645aa69f0892751bc893d15e61d9e2b9c4630f581565b6101dd61031c366004611062565b610893565b6101dd61032f366004611097565b610a78565b6101dd610a9d565b6004546001600160a01b0316610243565b60006001600160e01b03198216637965db0b60e01b148061037e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6002600054036103db5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600055336103e9610acf565b600855426007556001600160a01b03811615610432576001600160a01b03811660009081526005602052604081209061042183610b2d565b506002830155506008546003909101555b600082116104825760405162461bcd60e51b815260206004820152601160248201527f43616e6e6f74207769746864726177203000000000000000000000000000000060448201526064016103d2565b33600090815260056020526040902080548311156104e25760405162461bcd60e51b815260206004820181905260248201527f43616e6e6f74207769746864726177206d6f7265207468616e207374616b656460448201526064016103d2565b828160000160008282546104f691906110f4565b92505081905550826006600082825461050f91906110f4565b909155505060035460405163a9059cbb60e01b8152336004820152602481018590526001600160a01b039091169063a9059cbb906044016020604051808303816000875af1158015610565573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610589919061110b565b5060405183815233907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5906020015b60405180910390a25050600160005550565b6000828152600260205260409020600101546105e581610bc4565b6105ef8383610bce565b505050565b6001600160a01b03811633146106725760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084016103d2565b61067c8282610c70565b5050565b6002600054036106d25760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103d2565b600260005560015460ff161561071d5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103d2565b33610726610acf565b600855426007556001600160a01b0381161561076f576001600160a01b03811660009081526005602052604081209061075e83610b2d565b506002830155506008546003909101555b60008061077b33610b2d565b33600081815260056020526040808220600201919091556004805491516340c10f1960e01b815290810192909252602482018390529294509092506001600160a01b03909116906340c10f1990604401600060405180830381600087803b1580156107e557600080fd5b505af11580156107f9573d6000803e3d6000fd5b505060408051338152602081018590528585148183015290517f16027d9cd5ffbfabaed8d9c40e1908fdeae11ae44ba883b5eab9c0bcbf1355b09350908190036060019150a15050600160005550565b60008061085583610b2d565b91509150915091565b7f82db594318110a04b6349ce48645aa69f0892751bc893d15e61d9e2b9c4630f561088881610bc4565b610890610cf3565b50565b6002600054036108e55760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103d2565b600260005560015460ff16156109305760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103d2565b33610939610acf565b600855426007556001600160a01b03811615610982576001600160a01b03811660009081526005602052604081209061097183610b2d565b506002830155506008546003909101555b3360009081526005602052604081208054909184918391906109a590849061112d565b9091555050426001820155600680548491906000906109c590849061112d565b90915550506003546040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610a21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a45919061110b565b5060405183815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d906020016105b8565b600082815260026020526040902060010154610a9381610bc4565b6105ef8383610c70565b7f82db594318110a04b6349ce48645aa69f0892751bc893d15e61d9e2b9c4630f5610ac781610bc4565b610890610d85565b6000600654600003610ae2575060085490565b600654600954600754610af590426110f4565b610aff9190611145565b610b1190670de0b6b3a7640000611145565b610b1b9190611164565b600854610b28919061112d565b905090565b6001600160a01b038116600090815260056020526040812060018101548291908290610b5990426110f4565b90508160020154670de0b6b3a76400008360030154610b76610acf565b610b8091906110f4565b8454610b8c9190611145565b610b969190611164565b610ba0919061112d565b935083925062278d008111610bbd57610bba600285611164565b92505b5050915091565b6108908133610e08565b60008281526002602090815260408083206001600160a01b038516845290915290205460ff1661067c5760008281526002602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610c2c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526002602090815260408083206001600160a01b038516845290915290205460ff161561067c5760008281526002602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60015460ff1615610d395760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103d2565b6001805460ff1916811790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258335b6040516001600160a01b03909116815260200160405180910390a1565b60015460ff16610dd75760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016103d2565b6001805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610d68565b60008281526002602090815260408083206001600160a01b038516845290915290205460ff1661067c57610e46816001600160a01b03166014610e88565b610e51836020610e88565b604051602001610e629291906111b6565b60408051601f198184030181529082905262461bcd60e51b82526103d291600401611237565b60606000610e97836002611145565b610ea290600261112d565b67ffffffffffffffff811115610eba57610eba61126a565b6040519080825280601f01601f191660200182016040528015610ee4576020820181803683370190505b509050600360fc1b81600081518110610eff57610eff611280565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f2e57610f2e611280565b60200101906001600160f81b031916908160001a9053506000610f52846002611145565b610f5d90600161112d565b90505b6001811115610fe2577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610f9e57610f9e611280565b1a60f81b828281518110610fb457610fb4611280565b60200101906001600160f81b031916908160001a90535060049490941c93610fdb81611296565b9050610f60565b5083156110315760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016103d2565b9392505050565b60006020828403121561104a57600080fd5b81356001600160e01b03198116811461103157600080fd5b60006020828403121561107457600080fd5b5035919050565b80356001600160a01b038116811461109257600080fd5b919050565b600080604083850312156110aa57600080fd5b823591506110ba6020840161107b565b90509250929050565b6000602082840312156110d557600080fd5b6110318261107b565b634e487b7160e01b600052601160045260246000fd5b600082821015611106576111066110de565b500390565b60006020828403121561111d57600080fd5b8151801515811461103157600080fd5b60008219821115611140576111406110de565b500190565b600081600019048311821515161561115f5761115f6110de565b500290565b60008261118157634e487b7160e01b600052601260045260246000fd5b500490565b60005b838110156111a1578181015183820152602001611189565b838111156111b0576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516111ee816017850160208801611186565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161122b816028840160208801611186565b01602801949350505050565b6020815260008251806020840152611256816040850160208701611186565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816112a5576112a56110de565b50600019019056fea164736f6c634300080d000a60806040523480156200001157600080fd5b5060405162001193380380620011938339810160408190526200003491620002b0565b60405180604001604052806008815260200167135bd8dad4985a5960c21b8152506040518060400160405280600381526020016213549160ea1b8152508160039080519060200190620000899291906200020a565b5080516200009f9060049060208401906200020a565b505050620000bc620000b6620000df60201b60201c565b620000e3565b6001600160a01b0381163314620000d857620000d88162000135565b506200031e565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6005546001600160a01b03163314620001955760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b038116620001fc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200018c565b6200020781620000e3565b50565b8280546200021890620002e2565b90600052602060002090601f0160209004810192826200023c576000855562000287565b82601f106200025757805160ff191683800117855562000287565b8280016001018555821562000287579182015b82811115620002875782518255916020019190600101906200026a565b506200029592915062000299565b5090565b5b808211156200029557600081556001016200029a565b600060208284031215620002c357600080fd5b81516001600160a01b0381168114620002db57600080fd5b9392505050565b600181811c90821680620002f757607f821691505b6020821081036200031857634e487b7160e01b600052602260045260246000fd5b50919050565b610e65806200032e6000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806370a08231116100b257806395d89b4111610081578063a9059cbb11610066578063a9059cbb1461024a578063dd62ed3e1461025d578063f2fde38b1461029657600080fd5b806395d89b411461022f578063a457c2d71461023757600080fd5b806370a08231146101d0578063715018a6146101f957806379cc6790146102015780638da5cb5b1461021457600080fd5b8063313ce567116100ee578063313ce56714610186578063395093511461019557806340c10f19146101a857806342966c68146101bd57600080fd5b806306fdde0314610120578063095ea7b31461013e57806318160ddd1461016157806323b872dd14610173575b600080fd5b6101286102a9565b6040516101359190610c94565b60405180910390f35b61015161014c366004610d05565b61033b565b6040519015158152602001610135565b6002545b604051908152602001610135565b610151610181366004610d2f565b610353565b60405160128152602001610135565b6101516101a3366004610d05565b610377565b6101bb6101b6366004610d05565b6103b6565b005b6101bb6101cb366004610d6b565b610423565b6101656101de366004610d84565b6001600160a01b031660009081526020819052604090205490565b6101bb610430565b6101bb61020f366004610d05565b610496565b6005546040516001600160a01b039091168152602001610135565b6101286104ab565b610151610245366004610d05565b6104ba565b610151610258366004610d05565b610564565b61016561026b366004610da6565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101bb6102a4366004610d84565b610572565b6060600380546102b890610dd9565b80601f01602080910402602001604051908101604052809291908181526020018280546102e490610dd9565b80156103315780601f1061030657610100808354040283529160200191610331565b820191906000526020600020905b81548152906001019060200180831161031457829003601f168201915b5050505050905090565b600033610349818585610651565b5060019392505050565b600033610361858285610776565b61036c858585610808565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061034990829086906103b1908790610e29565b610651565b6005546001600160a01b031633146104155760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61041f8282610a05565b5050565b61042d3382610ae4565b50565b6005546001600160a01b0316331461048a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040c565b6104946000610c2a565b565b6104a1823383610776565b61041f8282610ae4565b6060600480546102b890610dd9565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105575760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161040c565b61036c8286868403610651565b600033610349818585610808565b6005546001600160a01b031633146105cc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040c565b6001600160a01b0381166106485760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161040c565b61042d81610c2a565b6001600160a01b0383166106b35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161040c565b6001600160a01b0382166107145760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161040c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461080257818110156107f55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161040c565b6108028484848403610651565b50505050565b6001600160a01b0383166108845760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161040c565b6001600160a01b0382166108e65760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161040c565b6001600160a01b038316600090815260208190526040902054818110156109755760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161040c565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906109ac908490610e29565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109f891815260200190565b60405180910390a3610802565b6001600160a01b038216610a5b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161040c565b8060026000828254610a6d9190610e29565b90915550506001600160a01b03821660009081526020819052604081208054839290610a9a908490610e29565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610b445760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161040c565b6001600160a01b03821660009081526020819052604090205481811015610bb85760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161040c565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610be7908490610e41565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610769565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208083528351808285015260005b81811015610cc157858101830151858201604001528201610ca5565b81811115610cd3576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610d0057600080fd5b919050565b60008060408385031215610d1857600080fd5b610d2183610ce9565b946020939093013593505050565b600080600060608486031215610d4457600080fd5b610d4d84610ce9565b9250610d5b60208501610ce9565b9150604084013590509250925092565b600060208284031215610d7d57600080fd5b5035919050565b600060208284031215610d9657600080fd5b610d9f82610ce9565b9392505050565b60008060408385031215610db957600080fd5b610dc283610ce9565b9150610dd060208401610ce9565b90509250929050565b600181811c90821680610ded57607f821691505b602082108103610e0d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610e3c57610e3c610e13565b500190565b600082821015610e5357610e53610e13565b50039056fea164736f6c634300080d000a";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _stakeTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Staking> {
    return super.deploy(
      _owner,
      _stakeTokenAddress,
      overrides || {}
    ) as Promise<Staking>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _stakeTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _stakeTokenAddress,
      overrides || {}
    );
  }
  override attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  override connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
