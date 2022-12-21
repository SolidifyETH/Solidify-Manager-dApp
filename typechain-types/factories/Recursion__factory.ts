/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Recursion, RecursionInterface } from "../Recursion";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "ParentAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "ParentRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "isParent",
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
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "isParentRec",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610280806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630814ff131461003b5780639b33893f14610062575b600080fd5b61004e6100493660046101d5565b610075565b604051901515815260200160405180910390f35b61004e6100703660046101d5565b6100eb565b6000805b6001548110156100e257826001600160a01b0316600182815481106100ae57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031614156100d25750600192915050565b6100db81610223565b9050610079565b50600092915050565b60006100f682610075565b1561010357506001919050565b60005b6001548110156100e2576001818154811061013157634e487b7160e01b600052603260045260246000fd5b600091825260209091200154604051630814ff1360e01b81526001600160a01b03858116600483015290911690630814ff139060240160206040518083038186803b15801561017f57600080fd5b505afa158015610193573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b79190610203565b156101c55750600192915050565b6101ce81610223565b9050610106565b6000602082840312156101e6578081fd5b81356001600160a01b03811681146101fc578182fd5b9392505050565b600060208284031215610214578081fd5b815180151581146101fc578182fd5b600060001982141561024357634e487b7160e01b81526011600452602481fd5b506001019056fea26469706673582212207085be850b667ae6a44eb2d019d109c949f28f06397d114b0bdc5019f3f6726764736f6c63430008040033";

type RecursionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RecursionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Recursion__factory extends ContractFactory {
  constructor(...args: RecursionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Recursion";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Recursion> {
    return super.deploy(overrides || {}) as Promise<Recursion>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Recursion {
    return super.attach(address) as Recursion;
  }
  connect(signer: Signer): Recursion__factory {
    return super.connect(signer) as Recursion__factory;
  }
  static readonly contractName: "Recursion";
  public readonly contractName: "Recursion";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RecursionInterface {
    return new utils.Interface(_abi) as RecursionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Recursion {
    return new Contract(address, _abi, signerOrProvider) as Recursion;
  }
}