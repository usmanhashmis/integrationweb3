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
  
  //import WalletConnectProvider from '@walletconnect/react-native-dapp';
  //import AsyncStorage from '@react-native-async-storage/async-storage';
  
import { ContractAbi , ContractAbiMatic } from "./abi.js";
import {contractAddress , contractAddressMatic,polygonProvider} from "./contractAddress";
//import Walletconnection from './Walletconnection.js';
const SCHEME_FROM_APP_JSON = 'walletconnect-ecomobooster';

function Depositassets() {
    const isDarkMode = useColorScheme() === 'dark';
    const Web3 = require('web3');
    const web3 = new Web3(new Web3.providers.HttpProvider(polygonProvider,),);

const connectWallet =()=>{}

const data = async () => {
    console.log('hey hey');
    let contract = new web3.eth.Contract(ContractAbiMatic,contractAddressMatic,);
    console.log('dd', await contract.methods.balance().call());
    alert(await contract.methods.balance().call());
  };

  return (    
    <SafeAreaView >
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  
      <Button onPress={() => data()} title="Press Me" />
      {/* <WalletConnectProvider
      redirectUrl={
        Platform.OS === 'web'
          ? window.location.origin
          : `${SCHEME_FROM_APP_JSON}://`
      }
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}>
      <View style={styles.container}>
        <Walletconnection />
      </View>
    </WalletConnectProvider> */}
  </SafeAreaView>
  )
}

export default Depositassets