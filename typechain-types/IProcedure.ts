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

export interface IProcedureInterface extends utils.Interface {
  contractName: "IProcedure";
  functions: {
    "initialize(string)": FunctionFragment;
    "post(string,uint256,string)": FunctionFragment;
    "setParentCTX(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "post",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setParentCTX",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "post", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setParentCTX",
    data: BytesLike
  ): Result;

  events: {
    "Cancelled(string,address)": EventFragment;
    "Executed(address)": EventFragment;
    "Stage(uint8)": EventFragment;
    "Verdict(string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Cancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Verdict"): EventFragment;
}

export type CancelledEvent = TypedEvent<
  [string, string],
  { uri: string; account: string }
>;

export type CancelledEventFilter = TypedEventFilter<CancelledEvent>;

export type ExecutedEvent = TypedEvent<[string], { account: string }>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export type StageEvent = TypedEvent<[number], { stage: number }>;

export type StageEventFilter = TypedEventFilter<StageEvent>;

export type VerdictEvent = TypedEvent<
  [string, string],
  { uri: string; account: string }
>;

export type VerdictEventFilter = TypedEventFilter<VerdictEvent>;

export interface IProcedure extends BaseContract {
  contractName: "IProcedure";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IProcedureInterface;

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
    initialize(
      name_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    post(
      entRole: string,
      tokenId: BigNumberish,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setParentCTX(
      container: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  initialize(
    name_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  post(
    entRole: string,
    tokenId: BigNumberish,
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setParentCTX(
    container: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initialize(name_: string, overrides?: CallOverrides): Promise<void>;

    post(
      entRole: string,
      tokenId: BigNumberish,
      uri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setParentCTX(container: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Cancelled(string,address)"(
      uri?: null,
      account?: null
    ): CancelledEventFilter;
    Cancelled(uri?: null, account?: null): CancelledEventFilter;

    "Executed(address)"(account?: null): ExecutedEventFilter;
    Executed(account?: null): ExecutedEventFilter;

    "Stage(uint8)"(stage?: null): StageEventFilter;
    Stage(stage?: null): StageEventFilter;

    "Verdict(string,address)"(uri?: null, account?: null): VerdictEventFilter;
    Verdict(uri?: null, account?: null): VerdictEventFilter;
  };

  estimateGas: {
    initialize(
      name_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    post(
      entRole: string,
      tokenId: BigNumberish,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setParentCTX(
      container: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      name_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    post(
      entRole: string,
      tokenId: BigNumberish,
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setParentCTX(
      container: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}