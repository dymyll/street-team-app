import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../Icon';

const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #333333;
  color: ${({ color }) => color};
  font-size: 40px;
  font-weight: 500;
  margin: 60px 0 45px;
  padding: 37px 47px;
`;

const StyledButtonInner = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 18px;
  }
`;

export const FanMagnetButton = ({
  active,
  activeBgColor,
  ctaText,
  color,
  handleClick,
  inactiveBgColor,
  iconName,
}) => {
  return (
    <StyledButton
      bgColor={active ? activeBgColor : inactiveBgColor}
      color={color}
      disabled={!active}
      type="button"
      onClick={handleClick}
    >
      <StyledButtonInner>
        <span>
          <Icon color="#202021" name={iconName} size={70} />
        </span>
        <div>{ctaText}</div>
      </StyledButtonInner>
    </StyledButton>
  );
};

FanMagnetButton.defaultProps = {
  inactiveBgColor: '#544c2e',
};

FanMagnetButton.propTypes = {
  activeBgColor: PropTypes.string.isRequired,
  inactiveBgColor: PropTypes.string,
  ctaText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
};
