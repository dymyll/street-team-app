// import '.../App.css';

import { Link } from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import styled from 'styled-components';

// import Background from './Background';
// import Countdown from '../Countdown';
import ReactDeadline from '../ReactDeadline';
import PointsBox from '../PointsBox';
import ActionPointsButton from '../ActionPointsButton';
// import EmailForm from '../EmailForm';
import ProgressBox from '../ProgressBox';
import SpotifyPlayBox from '../SpotifyPlayBox';
import ContestActionsBuilder from '../ContestActionsBuilder';

// import { IoIosCheckbox } from 'react-icons/io';
import { FaSpotify } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
import { MdLibraryMusic } from 'react-icons/md';

function ContestPage1Card({
  contestHeadline,
  contestDescription,
  buttonText,
  contestDeadline,
  contestImg,
  actionSpotifyPlay,
  actionSpotifyFollow,
  actionSpotifySave,
  actionStreetTeam,
  encouragementHeadline,
  encouragementDescription,
  actions,
  completedActions,
}) {
  // define some default values if nothing is assigned
  contestHeadline = contestHeadline == '' ? 'Win a Baby' : contestHeadline;
  contestDescription =
    contestDescription == ''
      ? 'Enter for a chance to win a happy, healthy baby girl!'
      : contestDescription;
  buttonText = buttonText == '' ? 'Enter to Win >' : buttonText;
  contestDeadline = contestDeadline == '' ? '4/13/2021' : contestDeadline;
  contestImg = contestImg == '' ? '../baby.png' : contestImg;
  actions =
    actions == undefined
      ? {
          items: [
            {
              id: 'anitemid',
              content: 'actionText1',
              pointValue: '1',
              contestID: 'somecontestid',
              url: 'https://google.com',
              // createdAt
              // updatedAt
            },
          ],
        }
      : actions;
  completedActions =
    completedActions == undefined ? { items: [] } : completedActions;

  const [showSpotifyBox, setDisplay] = useState(false);
  const [buttonClickedSpotifyPlay, setClickedSpotifyPlay] = useState(false);
  const [buttonClickedSpotifyFollow, setClickedSpotifyFollow] = useState(false);
  const [buttonClickedSpotifySave, setClickedSpotifySave] = useState(false);
  const [buttonClickedJoinStreetTeam, setClickedJoinStreetTeam] = useState(
    false
  );

  const spotifyPlayButton = actionSpotifyPlay ? null : 'hide';
  const spotifyFollowButton = actionSpotifyFollow ? null : 'hide';
  const spotifySaveButton = actionSpotifySave ? null : 'hide';
  const streetTeamButton = actionStreetTeam ? null : 'hide';

  const search1 = window.location.href;
  const a1 = search1.search('#');
  const first1 = search1.substr(a1);

  return (
    <div>
      <Card>
        <div className="headline-top margin-reset">
          <div className="flex-top-headline">
            <div className="left-align top-left-headline">
              {contestHeadline}
            </div>
            <div className="top-right-countdown center">
              <ReactDeadline startDate={contestDeadline} />
            </div>
          </div>
        </div>

        <div>
          <ProgressBox progressStep={3} />
        </div>

        <Card.Body>
          <div className="card-container-text">
            <Card.Title className="register-headline">
              <h3>{encouragementHeadline} </h3>
              {/* <h3> Increase Your Chances of Winning </h3> */}
              <hr width="76%" align="left" margin-top="0" fontWeight="bold" />
              <h4>
                {encouragementDescription}
                {/* {' '}
                Get to the top of the list by completing the following
                supportive actions{' '} */}
              </h4>
            </Card.Title>
            <div className="register-button-box">
              <ContestActionsBuilder
                actions={actions}
                completedActions={completedActions}
              />
              {/*
            Now we need to engineer the playing of the song and it returning a number that says it was played by this person,
            and the way for this to be accomplished is to have spotify go and pull recently played with the api call.
            
          */}
              {/* TODO need to map actionsList to creating the ActionPointsButton components*/}
              {/* Not sure how this will work, but we need to make sure that the path doesn't change the URL when the spotify play button is selected.*/}

              {/* <div
                onClick={() => {
                  setDisplay(!showSpotifyBox);
                }}
              >
                <ActionPointsButton
                  text={
                    buttonClickedSpotifyPlay
                      ? 'Played on Spotify'
                      : 'Play on Spotify'
                  }
                  icon={buttonClickedSpotifyPlay ? FaCheckCircle : FaSpotify}
                  path=""
                  points={20}
                  textBoxColor={
                    buttonClickedSpotifyPlay
                      ? 'spotify-color-gradient clicked'
                      : 'spotify-color-gradient'
                  }
                  pointsBoxColor={
                    buttonClickedSpotifyPlay
                      ? 'spotify-color clicked'
                      : 'spotify-color'
                  }
                  buttonTextStyle={
                    buttonClickedSpotifyPlay ? 'light clicked-text ' : 'light '
                  }
                  buttonIconStyle={
                    buttonClickedSpotifyPlay ? 'light clicked-text ' : 'light '
                  }
                  heightclassName="button-small-height"
                  pointsSize="button-points-total-action"
                />
              </div>
              {showSpotifyBox ? (
                <div
                  onClick={() => {
                    setClickedSpotifyPlay(true);
                  }}
                >
                  {' '}
                  <SpotifyPlayBox />{' '}
                </div>
              ) : null}
              <div
                onClick={() => {
                  setClickedSpotifyFollow(true);
                }}
              > */}
              {/* <ActionPointsButton
                  text={
                    buttonClickedSpotifyFollow
                      ? 'Followed on Spotify'
                      : 'Follow on Spotify'
                  }
                  icon={buttonClickedSpotifyFollow ? FaCheckCircle : FaSpotify}
                  path="/spotify-follow-artist"
                  points={50}
                  textBoxColor={
                    buttonClickedSpotifyFollow
                      ? 'spotify-color-gradient clicked'
                      : 'spotify-color-gradient'
                  }
                  pointsBoxColor={
                    buttonClickedSpotifyFollow
                      ? 'spotify-color clicked'
                      : 'spotify-color'
                  }
                  buttonTextStyle={
                    buttonClickedSpotifyFollow
                      ? 'light clicked-text '
                      : 'light '
                  }
                  buttonIconStyle={
                    buttonClickedSpotifyFollow
                      ? 'light clicked-text '
                      : 'light '
                  }
                  heightClass="button-small-height"
                  pointsSize="button-points-total-action"
                />
              </div>
              <div
                onClick={() => {
                  setClickedSpotifySave(true);
                }}
              >
                <ActionPointsButton
                  text={
                    buttonClickedSpotifySave
                      ? 'Saved on Spotify'
                      : 'Save on Spotify'
                  }
                  icon={buttonClickedSpotifySave ? FaCheckCircle : FaSpotify}
                  path="/spotify-save-song"
                  points={50}
                  textBoxColor={
                    buttonClickedSpotifySave
                      ? 'spotify-color-gradient clicked'
                      : 'spotify-color-gradient'
                  }
                  pointsBoxColor={
                    buttonClickedSpotifySave
                      ? 'spotify-color clicked'
                      : 'spotify-color'
                  }
                  buttonTextStyle={
                    buttonClickedSpotifySave ? 'light clicked-text ' : 'light '
                  }
                  buttonIconStyle={
                    buttonClickedSpotifySave ? 'light clicked-text ' : 'light '
                  }
                  heightClass="button-small-height"
                  pointsSize="button-points-total-action"
                />
              </div>
              <div
                onClick={() => {
                  setClickedJoinStreetTeam(true);
                }}
              >
                <ActionPointsButton
                  text={
                    buttonClickedJoinStreetTeam
                      ? 'Joined Street Team'
                      : 'Join Street Team'
                  }
                  icon={
                    buttonClickedJoinStreetTeam ? FaCheckCircle : MdLibraryMusic
                  }
                  path=""
                  points={100}
                  textBoxColor={
                    buttonClickedJoinStreetTeam
                      ? 'complete-registration-color-gradient clicked'
                      : 'complete-registration-color-gradient'
                  }
                  pointsBoxColor={
                    buttonClickedJoinStreetTeam
                      ? 'complete-registration-color clicked'
                      : 'complete-registration-color'
                  }
                  buttonTextStyle={
                    buttonClickedJoinStreetTeam
                      ? 'light clicked-text '
                      : 'dark '
                  }
                  buttonIconStyle={
                    buttonClickedJoinStreetTeam
                      ? 'light clicked-text '
                      : 'dark '
                  }
                  heightClass="button-small-height"
                  pointsSize="button-points-total-action"
                />
              </div>
            </div>
            <hr className="fade-light" />
            */}
              <Link className="link-button" to="/referral">
                <Button className="btn active btn-default card-container-button button-continue">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
          <PointsBox
            totalPoints={40}
            includeText={true}
            userName="Michael Walker"
            totalReferrals={0}
            bonusPoints={0}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContestPage1Card;
