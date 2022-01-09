import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { FanMagnetButton } from '../Components/UI';
import styled from 'styled-components';
import { TextField } from '../Components/UI/TextField';

import '../config';
import * as fcl from '@onflow/fcl';
import { input } from 'aws-amplify';

const NFTButton = styled(Button)`
width: 100%;
height: 100%;
`;

const NFTColumn = styled(Col)`
padding: 0;
`;

const BlockchainForm = styled(Form)`
  width: 50%;
  margin: 15px auto;
  color: white;
`;

const ButtonContainer = styled(Container)`
  margin-top: 15px;
  width: 50%;
`;

const ProfileContainer = styled(Container)`
  margin-top: 15px;
  width: 50%;
`;

const QueryContainer = styled(Container)`
  margin-top: 15px;
  width: 50%;
`;

const CenteredRow = styled(Row)`
  justify-content: center;
  margin-top: 5px;
`;



export const NFTMarketplace = () => {
  const [user, setUser] = useState({ loggedIn: null });
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [avatar, setAvatar] = useState('');
  const [color, setColor] = useState('');

  const [transactionStatus, setTransactionStatus] = useState(null);
  const transactionDescription =
    transactionStatus == 0
      ? 'Initiated'
      : transactionStatus == 1
      ? 'Pending'
      : transactionStatus == 2
      ? 'Finalized'
      : transactionStatus == 3
      ? 'Executing'
      : transactionStatus == 4
      ? 'Sealed'
      : '--';
  // const [transactionDescription, setTransactionDescription] = useState(null);

  useEffect(() => fcl.currentUser.subscribe(setUser), []);

  const sendQuery = async () => {
    const profile = await fcl.query({
      cadence: `
        import Profile from 0xProfile

        pub fun main(address: Address): Profile.ReadOnly? {
          return Profile.read(address)
        }
      `,
      args: (arg, t) => [arg(user.addr, t.Address)],
    });

    setName(profile?.name ?? 'No Profile');
    setInfo(profile?.info ?? 'No Info');
    setAvatar(profile?.avatar ?? 'No Avatar');
    setColor(profile?.color ?? 'No Color');
    console.log('Profile Query: ' + JSON.stringify(profile));
  };

  const initAccount = async () => {
    const transactionId = await fcl.mutate({
      cadence: `
        import Profile from 0xProfile

        transaction {
          prepare(account: AuthAccount) {
            // Only initialize the account if it hasn't already been initialized
            if (!Profile.check(account.address)) {
              // This creates and stores the profile in the user's account
              account.save(<- Profile.new(), to: Profile.privatePath)

              // This creates the public capability that lets applications read the profile's info
              account.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)
            }
          }
        }
      `,
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50,
    });

    const transaction = await fcl.tx(transactionId).onceSealed();
    console.log(transaction);
  };

  const executeMultipleTransactions = async (inputName,inputInfo,inputAvatar,inputColor) => {
    const transactionId = await fcl.mutate({
      cadence: `
        import Profile from 0xProfile

        transaction(name: String, info: String, avatar: String, color: String) {
          prepare(account: AuthAccount) {
            account
              .borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!
              .setName(name)
            account
              .borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!
              .setInfo(info)
            account
              .borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!
              .setAvatar(avatar)
            account
              .borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!
              .setColor(color)
          }
        }

      `,
      args: (arg, t) => [
        arg(inputName, t.String),
        arg(inputInfo, t.String),
        arg(inputAvatar, t.String),
        arg(inputColor, t.String),
      ],
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50,
    });

    fcl.tx(transactionId).subscribe(res => setTransactionStatus(res.status));
    const transaction = await fcl.tx(transactionId).onceSealed();
    console.log(transaction);
  };

  const AuthedState = () => {
  const [inputName, setInputName] = useState('');
  const [inputInfo, setInputInfo] = useState('');
  const [inputAvatar, setInputAvatar] = useState('');
  const [inputColor, setInputColor] = useState('');
    
  const updateBlockchain = () => {
    executeMultipleTransactions(inputName,inputInfo,inputAvatar,inputColor);
  };

    return (
      <div>
        {name ? (
          <ProfileContainer>
            {avatar ? (
              <Row className="mb-3">
                <img src={avatar} width="20%" height="20%" />
              </Row>
            ) : null}
            <Row>
              <h6>
                <b> Blockchain Address: </b> {user?.addr ?? 'No Address'}
              </h6>
            </Row>
            <Row>
              <h6>
                <b>Profile Name:</b> {name ?? '--'}
              </h6>
            </Row>
            <Row>
              <h6>
                <b>Info:</b> {info ?? '--'}
              </h6>
            </Row>
            <Row>
              <h6>
                <b>Color:</b> {color ?? '--'}
              </h6>
            </Row>
          </ProfileContainer>
        ) : null}
        <QueryContainer>
          <Row>
            <NFTColumn>
              <NFTButton onClick={initAccount}> Initialize Account </NFTButton>
            </NFTColumn>
            <NFTColumn>
              <NFTButton onClick={sendQuery}> Query the Blockchain </NFTButton>
            </NFTColumn>
            <NFTColumn>
              <NFTButton onClick={fcl.unauthenticate}> Log Out </NFTButton>
            </NFTColumn>
          </Row>
        </QueryContainer>
        <BlockchainForm onSubmit={updateBlockchain}>
          <Form.Group className="mb-3" controlId="NFTForm.inputName">
            <Form.Label>Profile Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter profile name"
              value={name?? inputName}
              onChange={e => {
                setInputName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="NFTForm.inputInfo">
            <Form.Label>Info</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description of profile"
              value={info?? inputInfo}
              onChange={e => {
                setInputInfo(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="NFTForm.inputAvatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="url"
              placeholder="URL of your avatar picture"
              value={avatar?? inputAvatar}
              onChange={e => {
                setInputAvatar(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="NFTForm.inputColor">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Choose your ideal color"
              value={color?? inputColor}
              onChange={e => {
                setInputColor(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" onClick={updateBlockchain}>
            Update the Blockchain
          </Button>
        </BlockchainForm>
        <QueryContainer>
          <Row>
            <h6>
              <b>Transaction Status:</b> {transactionDescription ?? '--'}
            </h6>
          </Row>
        </QueryContainer>
      </div>
    );
  };

  const UnauthenticatedState = () => {
    return (
      <div>
        <ButtonContainer>
          <CenteredRow>
            <NFTButton onClick={fcl.signUp}> Sign Up </NFTButton>
          </CenteredRow>
          <CenteredRow>
            <NFTButton onClick={fcl.logIn}> Log In </NFTButton>
          </CenteredRow>
        </ButtonContainer>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Container>
        <h1 className="text-center"> Modern Musician </h1>
        <h3 className="text-center"> NFT Marketplace </h3>
        {user.loggedIn ? <AuthedState /> : <UnauthenticatedState />}
      </Container>
    </React.Fragment>
  );
};
