import React, { useState } from 'react';

// import { Link } from '@reach/router';
// import { FaAngleRight } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { FaTrophy } from 'react-icons/fa';
import { MdLaunch } from 'react-icons/md';
import { FaFire } from 'react-icons/fa';
// import { FaCheckSquare } from 'react-icons/fa';
// import { AiOutlineCheck } from 'react-icons/ai';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import styled from 'styled-components';

import NavbarSteps from './NavbarSteps';

// const CONNECTSTATUS = {
//   complete: 'step-complete',
//   active: 'step-active',
//   inactive: 'step-inactive',
//   warning: 'step-warning',
// };

const NavbarCreateProject = ({
  setSelectedTab,
  selectedTab,
  activeStep,
  setActiveStep,
}) => {
  const [connectStepStatus, setConnectStepStatus] = useState('');
  const [detailsStepStatus, setDetailsStepStatus] = useState('');
  const [fanActionsStepStatus, setFanActionsStepStatus] = useState('');
  const [integrationsStepStatus, setIntegrationsStepStatus] = useState('');
  const [reviewStepStatus, setReviewStepStatus] = useState('');

  return (
    <div>
      <div className="sidebar-header">
        <div className="sidebar-title"> Your Contest </div>
        <div className="sidebar-description"> Grow Your Fanbase </div>
      </div>
      <div className="sidebar-progress-box">
        <div className="sidebar-progress-section">
          <div className="sidebar-progress-section-title-box">
            <div className="sidebar-title-box-icon">
              {' '}
              <MdSettings />{' '}
            </div>
            <div className="sidebar-title-box-text"> Initial Setup </div>
          </div>
          <NavbarSteps
            stepIcon={FaFacebook}
            stepText="Get Started"
            stepStatus="step-complete"
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            isComplete={activeStep > 0}
          />
          <NavbarSteps
            handleOnClick={() => {
              setSelectedTab('connect-account');
              setActiveStep(1);
            }}
            stepIcon={FaFacebook}
            stepText="Connect Accounts"
            stepStatus={connectStepStatus}
            setStepStatus={setConnectStepStatus}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            isSelected={selectedTab === 'connect-account'}
            isActive={activeStep === 1}
            isComplete={activeStep > 1}
            isInactive={connectStepStatus === 'inactive'}
            isWarning={connectStepStatus === 'warning'}
          />
        </div>
        <div className="sidebar-progress-section">
          <div className="sidebar-progress-section-title-box">
            <div className="sidebar-title-box-icon ">
              {' '}
              <FaTrophy />{' '}
            </div>
            {/*
            <div class="sidebar-progress-section"> 
              <div class="sidebar-progress-section-title-box">
                <div class="sidebar-title-box-icon "> <FaFire /> </div>
                <div class="sidebar-title-box-text"> Advanced Tools </div>
              </div>
              <NavbarSteps 
              handleOnClick={() => {setSelectedTab('add-integrations'); {setActiveStep(4)}}}
              stepIcon= {FaFacebook}
              stepText= "Add Integrations"
              setStepStatus= {setIntegrationsStepStatus}
              stepStatus = {integrationsStepStatus}
              setSelectedTab= {setSelectedTab}
              selectedTab= {selectedTab}
              isActive= {activeStep===4}
              isComplete= {activeStep > 4}
              isInactive= {connectStepStatus==='inactive'}
              isWarning= {connectStepStatus==='warning'}
              />
            </div>
            */}
            <div class="sidebar-progress-section">
              <div class="sidebar-progress-section-title-box">
                <div class="sidebar-title-box-icon ">
                  {' '}
                  <MdLaunch />{' '}
                </div>
                <div class="sidebar-title-box-text"> Launch Campaign </div>
              </div>
              <NavbarSteps
                handleOnClick={() => {
                  setSelectedTab('review-contest');
                  {
                    setActiveStep(5);
                  }
                }}
                stepIcon={FaFacebook}
                stepText="Review Contest"
                setStepStatus={setReviewStepStatus}
                stepStatus={reviewStepStatus}
                setSelectedTab={setSelectedTab}
                selectedTab={selectedTab}
                isActive={activeStep === 5}
                isComplete={activeStep > 5}
                isInactive={connectStepStatus === 'inactive'}
                isWarning={connectStepStatus === 'warning'}
              />
            </div>
            <div className="sidebar-title-box-text"> Launch Campaign </div>
          </div>
          <NavbarSteps
            handleOnClick={() => {
              setSelectedTab('review-contest');
              {
                setActiveStep(5);
              }
            }}
            stepIcon={FaFacebook}
            stepText="Review Contest"
            setStepStatus={setReviewStepStatus}
            stepStatus={reviewStepStatus}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            isActive={activeStep === 5}
            isComplete={activeStep > 5}
            isInactive={connectStepStatus === 'inactive'}
            isWarning={connectStepStatus === 'warning'}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarCreateProject;
