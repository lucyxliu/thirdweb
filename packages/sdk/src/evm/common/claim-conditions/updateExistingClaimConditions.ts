import {
  ClaimConditionInputSchema,
  ClaimConditionOutputSchema,
} from "../../schema/contracts/common/claim-conditions";
import { ClaimCondition, ClaimConditionInput } from "../../types";
import { ethers } from "ethers";

/**
 * @internal
 * @param index
 * @param claimConditionInput
 * @param existingConditions
 */
export async function updateExistingClaimConditions(
  index: number,
  claimConditionInput: ClaimConditionInput,
  existingConditions: ClaimCondition[],
): Promise<ClaimConditionInput[]> {
  if (index >= existingConditions.length) {
    throw Error(
      `Index out of bounds - got index: ${index} with ${existingConditions.length} conditions`,
    );
  }
  // merge input with existing claim condition
  const priceDecimals = existingConditions[index].currencyMetadata.decimals;
  const priceInWei = existingConditions[index].price;
  const priceInTokens = ethers.utils.formatUnits(priceInWei, priceDecimals);

  // merge existing (output format) with incoming (input format)
  const newConditionParsed = await ClaimConditionInputSchema.parseAsync({
    ...existingConditions[index],
    price: priceInTokens,
    ...claimConditionInput,
  });

  // convert to output claim condition
  const mergedConditionOutput = await ClaimConditionOutputSchema.parseAsync({
    ...newConditionParsed,
    price: priceInWei,
  });

  return existingConditions.map((existingOutput, i) => {
    let newConditionAtIndex;
    if (i === index) {
      newConditionAtIndex = mergedConditionOutput;
    } else {
      newConditionAtIndex = existingOutput;
    }
    const formattedPrice = ethers.utils.formatUnits(
      newConditionAtIndex.price,
      priceDecimals,
    );
    return {
      ...newConditionAtIndex,
      price: formattedPrice, // manually transform back to input price type
    };
  });
}
