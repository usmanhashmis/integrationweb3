import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
  } from 'react-native';
  
function Depositassets() {
    const isDarkMode = useColorScheme() === 'dark';
    const Web3 = require('web3');
    const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://polygon-mumbai.g.alchemy.com/v2/tNMnFd0YDejjHxonOBaX4gmnDORXp7ka',
  ),
);

const ovoContractAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"PaymentAdded","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accountBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkwithdrawbalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_confirms","type":"address"}],"name":"confirmation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"confirmationAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"transfer","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];

const CONTRACT_ADDRESS = '0xabD247d01cCd3a4c1f74f1e9894A4EaE5c776778';

const data = async () => {
    console.log('hey hey');
    let contract = new web3.eth.Contract(ovoContractAbi,'0xabD247d01cCd3a4c1f74f1e9894A4EaE5c776778',);
    console.log('dd', await contract.methods.balance().call());
    alert()
  };

  return (    
    <SafeAreaView >
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  
      <Button onPress={() => data()} title="Press Me" />
  </SafeAreaView>
  )
}

export default Depositassets