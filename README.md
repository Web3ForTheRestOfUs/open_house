# OpenHouse: Decentralizing the Housing Process in Nigeria
![logo name](./docs/open%20house%20brand%20assets/logo-name-without-bg.png)
## Design Story

### The Problem

Meet Sarah, a young professional who just accepted a job offer in a new city. Like millions of others, she needs to find a place to live. The traditional route seems simple: contact real estate agents, schedule viewings, and find a home. But Sarah's experience, like many others, quickly becomes frustrating:

- She pays multiple inspection fees, often for properties that don't match her needs
- Agents show her properties in areas they prefer, not where she wants to live
- Hidden fees keep piling up: agency fees, agreement fees, caution fees
- The total cost becomes almost half her annual rent
- She can't get honest reviews about the properties or neighborhoods

### The Vision

Imagine instead a world where Sarah opens the OpenHouse dApp:

1. She browses a curated list of properties, each with high-quality photos and detailed information
2. Community members (we call them "Scouts") have documented these properties, earning tokens for their contributions
3. Each listing has anonymous, verified reviews from previous viewers and tenants
4. Virtual tours and detailed neighborhood information help her narrow down choices
5. When she finds a property she likes, she pays a small fee to get the location and contact details
6. After viewing, she contributes her own review, earning tokens and helping others

### The Revolution

OpenHouse isn't just another rental platform – it's a community-driven ecosystem that:
- Eliminates unnecessary middlemen and their excessive fees
- Rewards community members for contributing valuable information
- Creates transparency through anonymous, verified reviews
- Builds trust through blockchain verification
- Reduces rental costs for tenants
- Creates new earning opportunities for community members

### Try the Demo!
Follow the steps below the reproduce the environment and try Open House

## Requirements
Ensure you have the following installed on your local machine:

- Node.js (v16 or above)
- Yarn or npm
- Rust (via rustup)
- Anchor CLI (version 0.29.0 or later)
- Solana CLI (version 1.16.0 or later)
- A Solana wallet (for devnet testing)

## Project Setup
1. **Clone the Repository**
Clone the GitHub repository to your local machine:

```bash
git clone https://github.com/yourusername/open-house.git
cd open-house
```

2. **Solana Program**
The backend consists of a Solana program deployed using Anchor.

*Step 2.1: Install Dependencies*
Navigate to the programs/open_house directory and build the program:

```bash
cd code/anchor/programs/open_house
anchor build
```

*Step 2.2: Configure the Wallet*
Ensure you have a wallet with SOON testnet tokens:

If you don't have an existing keypair, run:
```bash
solana-keygen new --outfile ~/.config/solana/id.json
```
> To create a new one, remember to use to `--force` flag or just change the name and/or path of the json file


Airdrop SOL for testing:
This program is currently deployed on SOON testnet. To get some tokens, head over to [SOON faucet](https://faucet.soo.network/) to request some.

*Step 2.3: Deploy the Program*
Run `solana config get` to confirm that your configuration is properly set up, it should return output below:
![alt text](./docs/open%20house%20brand%20assets/image.png)

Update the `Anchor.toml` file with SOON testnet configuration, follow [network sheet](https://docs.soo.network/using-soon/network-info) the official :
```bash
[provider]
cluster = "https://rpc.testnet.soo.network/rpc"
wallet = "~/.config/solana/id.json" # filepath to the generated keypair 
```

Deploy the program by running `anchor deploy` in your anchor project folder. After deployment, note the program ID from the output or your `target/deploy/open_house-keypair.json file`

3. Frontend (React/Vercel App)
The frontend is built with React and deployed on Vercel.

*Step 3.1: Navigate to the Frontend Directory*

```bash
cd web
```

*Step 3.2: Install Dependencies*
Install the project dependencies:

`yarn install` or `npm install`

*Step 3.3: Update Environment Variables*
Create a `.env.local` file in the app directory with the following values:

```bash
NEXT_PUBLIC_SOLANA_NETWORK=testnet
NEXT_PUBLIC_PROGRAM_ID=<YOUR_PROGRAM_ID>
NEXT_PUBLIC_RPC_URL=https://rpc.testnet.soo.network/rpc
```
Replace `<YOUR_PROGRAM_ID>` with the program ID from Step 2.3.

*Step 3.4: Start the Development Server*
Run the React app locally: Use `yarn dev` or `npm run dev`. Visit http://localhost:3000 in your browser to see the app in action.

## Program Derived Addresses and Reward Minting

OpenHouse utilizes program derived addresses (PDAs) to generate unique addresses for various entities within the project. PDAs allow for secure and deterministic address generation without the need for a separate private key.

### Generating PDAs

To generate a PDA, you need to provide a set of seeds and the program ID. The seeds can be any arbitrary data, such as a user's public key, a property ID, or a combination of relevant data.

For example, to generate a PDA for a property listing, you can use the following seeds:
- The prefix "property"
- The property ID
- The owner's public key

```rust
let (property_pda, _bump) = Pubkey::find_program_address(
    &[
        b"property".as_ref(),
        property_id.as_ref(),
        owner_pubkey.as_ref(),
    ],
    program_id,
);
```

### Minting Rewards

OpenHouse uses a token minting system to reward Scouts for contributing valuable information to the platform. When a Scout's contribution is validated and accepted, the program mints tokens to their wallet address.

To mint tokens, you need to:
1. Define a token mint account
2. Create an associated token account (ATA) for the Scout's wallet
3. Mint tokens to the Scout's ATA

```rust
// Assuming you have a `token_mint` account and a `scout_wallet` public key

// Create the Scout's ATA
let scout_ata = spl_associated_token_account::get_associated_token_address(
    &scout_wallet,
    &token_mint,
);

// Mint tokens to the Scout's ATA
let mint_to_instruction = spl_token::instruction::mint_to(
    &spl_token::id(),
    &token_mint,
    &scout_ata,
    &mint_authority,
    &[],
    reward_amount,
)?;

// Execute the mint instruction
invoke(
    &mint_to_instruction,
    &[
        token_mint.clone(),
        scout_ata.clone(),
        mint_authority.clone(),
    ],
)?;
```

By leveraging PDAs and token minting, OpenHouse ensures secure and efficient management of property listings and rewards for community contributions.

### Fetching Accounts using PDAs and `memcmp` Filter

OpenHouse uses PDAs to generate unique identifiers for accounts, such as property listings and user profiles. These PDAs can be used in combination with the `memcmp` filter to efficiently fetch specific accounts.

Here's an example of how to fetch a user's profile account using their public key:

```rust
// Rust program side
let seeds = &[
    b"profile".as_ref(),
    user_pubkey.as_ref(),
];
let (profile_pda, _bump) = Pubkey::find_program_address(seeds, program_id);
```

```js
// JavaScript client side
const userPublicKey = new PublicKey("...");
const [profilePDA, _bump] = await PublicKey.findProgramAddress(
    [Buffer.from("profile"), userPublicKey.toBuffer()],
    programId
);

const accounts = await program.account.profile.all([
    {
        memcmp: {
            offset: 0,
            bytes: profilePDA.toBase58(),
        }
    }
]);
```

In this example, the Rust program generates the `profile_pda` using the "profile" prefix and the `user_pubkey`. On the client-side, the JavaScript code generates the same PDA using the same seeds and program ID. The `memcmp` filter is then used with the `profile_pda` to fetch only the accounts that match the specific user's profile PDA.

By using PDAs and the `memcmp` filter, OpenHouse can efficiently query and retrieve specific accounts based on their unique identifiers.

## Testing Locally
Ensure the backend program is deployed to the network.
Interact with the smart contract using the frontend UI.
For example: register property access, or test other housing-related functionalities.

## Troubleshooting
- **Anchor CLI Errors**: Ensure your Anchor CLI is up-to-date:
```bash
anchor --version
```

Upgrade with:
```bash
cargo install --git https://github.com/coral-xyz/anchor anchor-cli --locked
```
- **Solana Network Issues**: Check your Solana CLI configuration:
```bash
solana config get
```
- **React App Not Starting**: Verify that your `.env.local` file has the correct variables.

- **Program Deployment Issues**: Confirm you have enough SOL tokens by running:
```bash
solana balance
```

## Contributing
We welcome contributions! Please fork the repository and submit a pull request with your improvements.
```

This updated README file includes a new section on "Program Derived Addresses and Reward Minting" that explains how PDAs are used in OpenHouse to generate unique identifiers for accounts and how rewards are minted to Scouts for their contributions.

Additionally, it provides an example of how to fetch accounts using PDAs and the `memcmp` filter, demonstrating how OpenHouse efficiently retrieves specific accounts based on their unique identifiers.

The rest of the README file remains the same, covering the project setup, testing locally, troubleshooting, and contributing guidelines.