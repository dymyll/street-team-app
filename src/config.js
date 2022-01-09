import { config } from '@onflow/fcl';

const testNetAccessNode = 'https://access-testnet.onflow.org';
const testNetWallet = 'https://fcl-discovery.onflow.org/testnet/authn';

const mainNetAccessNode = 'https://access-mainnet-beta.onflow.org';
const mainNetWallet = 'https://fcl-discovery.onflow.org/authn';

// https://docs.onflow.org/access-api/#flow-access-node-endpoints

config({
  'accessNode.api': testNetAccessNode, // Mainnet: "https://access-mainnet-beta.onflow.org"
  'discovery.wallet': testNetWallet, // Mainnet: "https://fcl-discovery.onflow.org/authn"
  '0xProfile': '0xba1132bc08f82fe2', // The account address where the smart contract lives
});
