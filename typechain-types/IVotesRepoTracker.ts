/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IVotesRepoTrackerInterface extends utils.Interface {
  contractName: "IVotesRepoTracker";
  functions: {
    "delegatesToken(uint256)": FunctionFragment;
    "getPastVotesForToken(uint256,uint256)": FunctionFragment;
    "getTargetContract()": FunctionFragment;
    "getVotesForToken(uint256)": FunctionFragment;
    "transferVotingUnits(uint256,uint256,int256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "delegatesToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastVotesForToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTargetContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVotesForToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferVotingUnits",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "delegatesToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPastVotesForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTargetContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotesForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferVotingUnits",
    data: BytesLike
  ): Result;

  events: {
    "DelegateChangedToken(uint256,uint256,uint256)": EventFragment;
    "DelegateVotesChangedToken(uint256,int256,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DelegateChangedToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegateVotesChangedToken"): EventFragment;
}

export type DelegateChangedTokenEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { delegator: BigNumber; fromDelegate: BigNumber; toDelegate: BigNumber }
>;

export type DelegateChangedTokenEventFilter =
  TypedEventFilter<DelegateChangedTokenEvent>;

export type DelegateVotesChangedTokenEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { delegate: BigNumber; previousBalance: BigNumber; newBalance: BigNumber }
>;

export type DelegateVotesChangedTokenEventFilter =
  TypedEventFilter<DelegateVotesChangedTokenEvent>;

export interface IVotesRepoTracker extends BaseContract {
  contractName: "IVotesRepoTracker";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVotesRepoTrackerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    delegatesToken(
      accountToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPastVotesForToken(
      account: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTargetContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getVotesForToken(
      account: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferVotingUnits(
      from: BigNumberish,
      to: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  delegatesToken(
    accountToken: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPastVotesForToken(
    account: BigNumberish,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTargetContract(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getVotesForToken(
    account: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferVotingUnits(
    from: BigNumberish,
    to: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    delegatesToken(
      accountToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotesForToken(
      account: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTargetContract(overrides?: CallOverrides): Promise<string>;

    getVotesForToken(
      account: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferVotingUnits(
      from: BigNumberish,
      to: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DelegateChangedToken(uint256,uint256,uint256)"(
      delegator?: BigNumberish | null,
      fromDelegate?: BigNumberish | null,
      toDelegate?: BigNumberish | null
    ): DelegateChangedTokenEventFilter;
    DelegateChangedToken(
      delegator?: BigNumberish | null,
      fromDelegate?: BigNumberish | null,
      toDelegate?: BigNumberish | null
    ): DelegateChangedTokenEventFilter;

    "DelegateVotesChangedToken(uint256,int256,int256)"(
      delegate?: BigNumberish | null,
      previousBalance?: null,
      newBalance?: null
    ): DelegateVotesChangedTokenEventFilter;
    DelegateVotesChangedToken(
      delegate?: BigNumberish | null,
      previousBalance?: null,
      newBalance?: null
    ): DelegateVotesChangedTokenEventFilter;
  };

  estimateGas: {
    delegatesToken(
      accountToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotesForToken(
      account: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTargetContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getVotesForToken(
      account: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferVotingUnits(
      from: BigNumberish,
      to: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    delegatesToken(
      accountToken: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastVotesForToken(
      account: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTargetContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getVotesForToken(
      account: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferVotingUnits(
      from: BigNumberish,
      to: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}