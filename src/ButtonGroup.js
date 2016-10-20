import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames';
// import Button from 'bee-button';


const propTypes = {
  /**
   * 是否垂直排列
  */
  vertical: React.PropTypes.bool,
  /**
   * 是否对齐
   */
  justified: React.PropTypes.bool,

  /**
   * 垂直时是否为块状元素
   */
  block: React.PropTypes.bool
};

const defaultProps = {
  block: false,
  justified: false,
  vertical: false
};

const clsPrefix = "u-button-group";

class ButtonGroup extends React.Component {
  render() {
    const { block, justified, vertical, classes, ...others } = this.props;
    const tbClass = {
        [`${clsPrefix}`]: vertical ? false : true,
        [`${clsPrefix}-block`]: vertical ? block : false,
        [`${clsPrefix}-vertical`]: vertical,
        [`${clsPrefix}-justified`]: justified
    };

    return (
      <div
        {...others}
        className={classNames(tbClass, classes)}
      >
      { this.props.children }
      </div>
    );
  }
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
