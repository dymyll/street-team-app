import React from 'react';
import PropTypes from 'prop-types';
import * as MaterialDesign from 'react-icons/md';
import * as Heroicons from 'react-icons/hi';
import * as FontAwesome from 'react-icons/fa';

// TEMPORARY back compat
const checkIconOld = name => {
  let icon;
  switch (name) {
    case 'Ticket':
      icon = FontAwesome.FaLock;
      break;
    case 'Trophy':
      icon = FontAwesome.FaTrophy;
      break;
    case 'Email':
      icon = Heroicons.HiOutlineMail;
      break;
    case 'Group':
      icon = Heroicons.HiUserGroup;
      break;
    case 'Music':
      icon = MaterialDesign.MdLibraryMusic;
      break;
    default:
      icon = MaterialDesign.MdLibraryMusic;
  }
  return icon;
};

// const checkIcon = name => {
//   let library = FontAwesome;
//   switch (name) {
//     case 'Md':
//       library = MaterialDesign;
//       break;
//     case 'Hi':
//       library = Heroicons;
//       break;
//     case 'Fa':
//       library = FontAwesome;
//       break;
//   }
//   return library;
// };

export const Icon = ({ name, size, color }) => {
  // const iconLibraryId = name.substring(0, 2);
  // const Library = checkIcon(iconLibraryId);
  // const Icon = Library[name];

  const IconElement = checkIconOld(name);

  return <IconElement size={size} style={{ color }} />;
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  name: null,
  size: 35,
  color: '#5E30B8',
};
