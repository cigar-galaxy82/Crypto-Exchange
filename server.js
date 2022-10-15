const { SuperfaceClient } = require('@superfaceai/one-sdk');

const sdk = new SuperfaceClient();

async function run(firstCyp, secondCyp) {
  // Load the profile
  const profile = await sdk.getProfile('crypto/exchange-rate@1.0.1');

  // Use the profile
  const result = await profile
    .getUseCase('GetExchangeRate')
    .perform({
      from: firstCyp,
      to: secondCyp
    }, {
      provider: 'binance'
    });

  // Handle the result
  try {
    const data = result.unwrap();
    console.log(`From ${firstCyp} to ${secondCyp}`)
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

	run("BTC", "DOGE");