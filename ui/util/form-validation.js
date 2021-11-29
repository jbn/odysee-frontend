// @flow
import * as REGEX from 'constants/regex';

export default function validateSendTx(address: string) {
  const errors = {
    address: '',
  };

  // All we need to check is if the address is valid
  // If values are missing, users wont' be able to submit the form
  if (!process.env.NO_ADDRESS_VALIDATION && !REGEX.WALLET_ADDRESS.test(address)) {
    errors.address = __('Not a valid LBRY address');
  }

  return errors;
}
