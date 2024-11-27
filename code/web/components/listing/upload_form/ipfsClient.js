import { create } from 'ipfs-http-client';

// Connect to a public IPFS gateway
const ipfsClient = create({
  host: 'dweb.link',
  port: 443,
  protocol: 'https',
});

export default ipfsClient;

