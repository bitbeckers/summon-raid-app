import { Transfer as TransferEvent } from "../generated/Token/ERC20_Token";
import { User, TransactionReceipt, Transaction } from "../generated/schema";
import { handleTransfer, createTransferEvent } from "../src/mapping";
import { Address, Value, BigInt, ethereum } from "@graphprotocol/graph-ts";
import {
  afterEach,
  describe,
  clearStore,
  test,
  assert,
  newMockEvent,
} from "matchstick-as";

function newParams(): ethereum.EventParam[] {
  const fromAddress = "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7";
  const toAddress = "0x6E4f821eD0a4a99Fc0061FCE01246490505Ddc91";
  const from = Address.fromString(fromAddress);
  const to = Address.fromString(toAddress);
  const value = BigInt.fromString("2000000000000000000000");

  let params: ethereum.EventParam[] = [];
  let fromP = new ethereum.EventParam("from", ethereum.Value.fromAddress(from));
  let toP = new ethereum.EventParam("to", ethereum.Value.fromAddress(to));
  let valueP = new ethereum.EventParam(
    "value",
    ethereum.Value.fromUnsignedBigInt(value)
  );

  params.push(fromP);
  params.push(toP);
  params.push(valueP);
  return params;
}

describe("handleTransfer()", () => {
  afterEach(() => {
    clearStore();
  });

  test("stores transaction", () => {
    const fromAddress = "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7";
    const toAddress = "0x6E4f821eD0a4a99Fc0061FCE01246490505Ddc91";

    let tEvent = changetype<TransferEvent>(newMockEvent());
    tEvent.parameters = newParams();
    handleTransfer(tEvent);

    const transferId =
      tEvent.transaction.hash.toHexString() + "-" + tEvent.logIndex.toString();


    assert.entityCount("Transaction", 1);

    assert.fieldEquals("Transaction", transferId, "id", transferId);
    assert.fieldEquals(
      "Transaction",
      transferId,
      "userFrom",
      fromAddress.toLowerCase()
    );
    assert.fieldEquals(
      "Transaction",
      transferId,
      "userTo",
      toAddress.toLowerCase()
    );
  });
});
