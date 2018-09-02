import React from 'react'
import PropTypes from 'prop-types'

class StyleButton extends React.Component {
  constructor() {
    super()
    this.onToggle = e => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }
  render() {
    let className = 'RichEditor-styleButton'
    if (this.props.active) {
      className += ' RichEditor-activeButton'
    }
    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    )
  }
}

StyleButton.propTypes = {
  onToggle: PropTypes.func,
  active: PropTypes.string,
  style: PropTypes.string,
  label: PropTypes.string
}

export default StyleButton
