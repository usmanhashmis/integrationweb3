module.exports = {
    ContractAbi: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: 'address', name: 'user', type: 'address' },
          { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
          { indexed: false, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
        ],
        name: 'PaymentAdded',
        type: 'event',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'accountBalances',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'balance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'checkwithdrawbalance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '_confirms', type: 'address' }],
        name: 'confirmation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'confirmationAddress',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      { inputs: [], name: 'transfer', outputs: [], stateMutability: 'payable', type: 'function' },
      { inputs: [], name: 'withdraw', outputs: [], stateMutability: 'payable', type: 'function' },
    ],
  
    ContractAbiMatic: [
      { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [
          { indexed: false, internalType: 'address', name: 'user', type: 'address' },
          { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
          { indexed: false, internalType: 'uint256', name: 'timestamp', type: 'uint256' },
        ],
        name: 'PaymentAdded',
        type: 'event',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'accountBalances',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'balance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'checkwithdrawbalance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '_confirms', type: 'address' }],
        name: 'confirmation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'confirmationAddress',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
      { inputs: [], name: 'transfer', outputs: [], stateMutability: 'payable', type: 'function' },
      { inputs: [], name: 'withdraw', outputs: [], stateMutability: 'payable', type: 'function' },
    ],
  };
  