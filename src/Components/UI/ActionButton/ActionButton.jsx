import Color from 'color';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from '../Button';
import { MdLibraryMusic } from 'react-icons/md';
import { Icon } from '../Icon';
import styled from 'styled-components';
import { cleanUrl } from '../../../utils/sharedUtils';

const ActionButtonContainer = styled(Button)(({ color, textColor }) => {
  const fontColor = Color(textColor);
  const regularColor = Color(color);
  const lighterColor = regularColor.lighten(0.05);
  const darkerColor = regularColor.darken(0.4);
  const gradientColor = `linear-gradient(90deg, ${lighterColor} 0%, ${regularColor} 75%, ${darkerColor} 100%)`;
  const hoverGradientColor = `linear-gradient(90deg,
    ${lighterColor.darken(0.2)} 0%,
    ${regularColor} 75%,
    ${darkerColor.darken(0.2)} 100%
  )`;

  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: '0px',
    background: gradientColor,
    border: 'none',
    padding: 0,
    margin: 0,
    height: '71px',
    color: fontColor.hex(),
    '&:hover': {
      color: fontColor,
      background: hoverGradientColor,
      [PointsContainer]: {
        background: regularColor.darken(0.1),
      },
    },
  };
});

const PointsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: ({ color }) => color,
  padding: '0px 25px 5px 25px',
  color: 'inherit',
  fontSize: ({ theme }) => theme.fontSizes.sm,
  minHeight: '100%',
});

const ContentContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding: '15px',
  minHeight: '100%',
});

const Points = styled.p(({ theme }) => {
  return {
    fontFamily: theme.fonts.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.xxl,
    margin: 0,
    color: 'inherit',
  };
});

const Title = styled.p(({ theme }) => {
  return {
    textAlign: 'left',
    wordWrap: 'break-word',
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.bold,
    margin: 0,
    marginLeft: '15px',
    color: 'inherit',
  };
});

const ButtonIcon = styled(Icon)(({ textColor }) => {
  const color = Color(textColor);
  return {
    color: color.hex(),
    '&:hover': {
      color: color.negate().hex(),
    },
  };
});

export const ActionButton = ({
  backgroundColor,
  preActionText,
  postActionText,
  targetURL,
  buttonIcon,
  pointValue,
  textColor,
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false);
  console.log('props', props);
  const handleOnClick = () => {
    setIsClicked(true);
    if (targetURL !== undefined) {
      const cleanUrlString = cleanUrl(targetURL);
      window.open(cleanUrlString, '_blank');
    }
  };

  return (
    <ActionButtonContainer
      color={backgroundColor}
      textColor={textColor}
      disabled={isClicked}
      onClick={handleOnClick}
    >
      <ContentContainer>
        {buttonIcon ? (
          <ButtonIcon size={35} name={buttonIcon} textColor={textColor} />
        ) : (
          <ButtonIcon as={MdLibraryMusic} />
        )}
        <Title>{isClicked ? postActionText : preActionText}</Title>
      </ContentContainer>
      <PointsContainer color={backgroundColor}>
        <Points>{pointValue}</Points>
        points
      </PointsContainer>
    </ActionButtonContainer>
  );
};

ActionButton.propTypes = {
  buttonIcon: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  targetURL: PropTypes.string,
  postActionText: PropTypes.string,
  preActionText: PropTypes.string,
  pointValue: PropTypes.number,
};

ActionButton.defaultProps = {
  buttonIcon: null,
  backgroundColor: 'rgb(151, 79, 248)',
  textColor: null,
  targetURL: null,
  postActionText: null,
  preActionText: null,
  pointValue: 0,
};
