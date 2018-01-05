import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { prefixClass } from '../Context';

const LeftAddon = props => (
  <div
    className={classnames({
      [prefixClass('text-field-left-addon')]: true,
    })}
  >
    {props.children}
  </div>
);

LeftAddon.defaultProps = {};
LeftAddon.propTypes = {
  focus: PropTypes.bool,
  hover: PropTypes.bool,
  children: PropTypes.any,
};
LeftAddon.displayName = 'LeftAddon';

export default LeftAddon;
