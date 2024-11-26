const { Keypair } = require('@solana/web3.js');

function generateVanityAddress(prefix) {
  prefix = prefix.toLowerCase();
  let attempts = 0;

  while (true) {
    attempts++;
    const keypair = Keypair.generate();
    const publicKey = keypair.publicKey.toString();

    if (publicKey.toLowerCase().slice(0, prefix.length) === prefix) {
      return {
        publicKey: publicKey,
        secretKey: Buffer.from(keypair.secretKey).toString('hex'),
        attempts: attempts,
      };
    }

    if (attempts % 1000 === 0) {
      console.log(`Tried ${attempts} addresses...`);
    }
  }
}

// Usage example
const prefix = 'asaboro';
console.log(`Searching for address starting with: ${prefix}`);
const result = generateVanityAddress(prefix);
console.log(`Found matching address after ${result.attempts} attempts:`);
console.log(`Public Key: ${result.publicKey}`);
console.log(`Secret Key: ${result.secretKey}`);
