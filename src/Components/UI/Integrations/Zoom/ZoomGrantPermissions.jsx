import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Auth } from 'aws-amplify';
import { Button } from '../../Button';
import { SelectList } from '../../SelectList';
import { useTheme } from '../../../../Hooks/useTheme';
import { getBackendApiUrl, facebookAppId } from '../../../../utils/sharedUtils';
import { Spinner } from '../../Spinner';
import { Icon } from '../../../../Components/UI/Icon';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { zoomLoginUrl } from './ZoomUrl';


// import { ConsoleLogger } from '@aws-amplify/core';

// todo this should be done using environment variables, but for now this works -2021-11-11 SG
const apiUrl = getBackendApiUrl();

const OrContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const IconContainer = styled(Col)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const OrText = styled.p({
  marginTop: ({ theme }) => `${theme.spacing.md} !important`,
  marginBottom: ({ theme }) => `${theme.spacing.md} !important`,
  fontSize: ({ theme }) => `${theme.fontSizes.xl} !important`,
  fontWeight: ({ theme }) => `${theme.fontWeights.bold} !important`,
});

// login with Zoom to grant ad management permissions
// TODO -- there's a lot of re-used code here from the FacebookGrantPagePermissions.jsx page that could really be cleaned up into shared compnonents
// TODO -- out of scope for this dev cylce, but we should create a better user experience with being able to search for accounts, use the friendly account names etc
export const ZoomGrantPermissions = ({
  userId,
  artistId,
  zoomAuth,
  zoomAccessToken,
  zoomRefreshToken,
  zoomExpiresIn,
}) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [zoomAccount, setZoomAccount] = useState();
  const [zoomLoginObject, setZoomLoginObject] = useState();
  const [formValue, setFormValue] = useState({
    ZoomAccount: '',
  });

  zoomRefreshToken = zoomRefreshToken ?? localStorage.getItem('zoomRefreshToken') ?? null;
  zoomAccessToken = zoomAccessToken ?? localStorage.getItem('zoomAccessToken') ?? null;
  zoomExpiresIn = zoomExpiresIn ?? localStorage.getItem('zoomExpiresIn') ?? null;
  
  const zoomStorage = {
    zoomRefreshToken,
    zoomAccessToken,
    zoomExpiresIn,
    userId,
    artistId,
  };

  useEffect(() => {
    // if Zoom auth exists in database, use it
    if (zoomAuth) {
      console.log(`setting formValue to ${zoomAuth}`);
      setFormValue({ ZoomAccount: zoomAuth });
      console.log(`zoomAuth is: ${zoomAuth}`);
    }
    // if not, if their Zoom auth exists in local storage, save to database
    else if (userId && artistId && zoomRefreshToken) {
      console.log(zoomStorage)
    }
  }, [zoomRefreshToken]);

    const updateDatabase = async zoomRefreshToken => {
      // console.log(`facebookLoginObjectIs`, facebookLoginObject);
      // TODO this should be a PUT eventually got to change the API first though
      // these values come from the API response from the fb.login response (response.authResponse)
      try {
        if (zoomRefreshToken) {
          // console.log(`facebookAdAccountId`, facebookAdAccountId);
          console.log(
            `updating database with these values`,
            userId,
            artistId,
            zoomAccessToken,
            zoomRefreshToken,
            zoomExpiresIn
          );
          let updateUrl = `${apiUrl}/zoom-artist-integration`;
          let updateBody = {
            userId,
            artistId,
            zoomAccessToken,
            zoomRefreshToken,
            zoomExpiresIn,
          };
          await fetch(updateUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateBody),
          })
            .then(rsp => rsp.json())
            .then(json => {
              if (json.error && json.error.message) {
                console.error(json.error.message);
              } else {
                console.log(json);
              }
            });
        }
      } catch (err) {
        console.error(err);
      }
    };


  return (
    <div>
      {!zoomRefreshToken ? (
        <Button
          onClick={() => {
            //go to the Zoom auth login
            window.location.href = zoomLoginUrl;
          }}
          style={{
            fontWeight: theme.fontWeights.semibold,
            fontFamily: theme.fonts.heading,
            backgroundColor: theme.colors.secondary,
          }}
        >
          <Icon
            name="IoVideocam"
            color="black"
            size={20}
            style={{ marginRight: 10 }}
          />
          Connect With Zoom
        </Button>
      ) : (
        <div>
          <OrContainer>
            <OrText>You are connected!</OrText>
          </OrContainer>
          <Button
            onClick={() => {
              //go to the Zoom auth login
              window.location.href = zoomLoginUrl;
            }}
            style={{
              fontWeight: theme.fontWeights.semibold,
              fontFamily: theme.fonts.heading,
              backgroundColor: theme.colors.gray,
            }}
          >
            Re-connect Zoom Account
          </Button>
        </div>
      )}
    </div>
  );
};
  
ZoomGrantPermissions.propTypes = {
  userId: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
};