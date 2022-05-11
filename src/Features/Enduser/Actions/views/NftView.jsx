import React, { useEffect, useState } from 'react';
import { toFlowContractAddress } from '@rarible/flow-sdk';
import { toFlowAddress, toBigNumber } from '@rarible/types';
import * as fcl from '@onflow/fcl';

export const NftView = () => {
  toFlowContractAddress('A.0x631e88ae7f1d7c20.MMNFT');
  const royalties = [
    { account: toFlowAddress('0x631e88ae7f1d7c20'), value: toBigNumber('0.1') },
  ];
  const newfcl = fcl;
  const metaData = 'Test this metadata';
  newfcl.config({
    'accessNode.api': 'https://rest-testnet.onflow.org/v1/', //"https://rest-testnet.onflow.org", // Mainnet: "https://rest-mainnet.onflow.org"
    'discovery.wallet': 'https://fcl-discovery.onflow.org/testnet/authn', // Mainnet: "https://fcl-discovery.onflow.org/authn"
    'service.OpenId.scopes': ['profile']
});
const [user, setUser] = useState();

const fclAuthenticate = () => {
  newfcl.authenticate().then(res => {
      console.log("Res: ", res)
      setUser(res);
  });
  newfcl.getAccount();
  console.log('Current User: ', newfcl.currentUser());
}

const fclUnauthenticate = async() => {
      newfcl.unauthenticate();
      setUser();
      const account = await newfcl.getAccount();
      console.log("Get Account: " , account);
}

const fclGetCurrentUser = async () => {
    const currentUser = await fcl.currentUser.snapshot()
    console.log("The Current User", currentUser)
}

const fclSubscribeUser = () => {
    // Returns an unsubscribe function
    const unsubscribe = fcl.currentUser.subscribe(currentUser => {
    console.log("The Current User", currentUser)
  });
  unsubscribe();
}


useEffect(() => {
    if(!user){
        fclAuthenticate();
    }
}, [user]);

  return (
    <>
      <h1>Hello  
        {user != '' ? ' ' + user?.services[4]?.data?.email?.email : ' User'}
      </h1>

        {user ?  
            <button onClick={fclUnauthenticate}> Sign Out Flow</button> : 
            <button onClick={fclAuthenticate}> Sign In Flow</button>
        }
        <button onClick={fclGetCurrentUser}>Get User Info</button>
        <button onClick={fclSubscribeUser}>Subscribe</button>
      {/* <button onClick={fclUnauthenticate}> Sign Out Flow</button> */}
    </>
  );
};
