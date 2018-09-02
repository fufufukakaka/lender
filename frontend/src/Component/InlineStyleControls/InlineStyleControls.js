import React from 'react'
import StyleButton from '../StyleButton/StyleButton'
import PropTypes from 'prop-types'
import '../MdEditor/MdEditor.css'

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' }
]

const InlineStyleControls = props => {
  const propsprops = props
  const editorState = propsprops.editorState
  const currentStyle = editorState.getCurrentInlineStyle()
  return (
    <div styleName="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={propsprops.onToggle}
          style={type.style}
        />
      ))}
    </div>
  )
}

InlineStyleControls.proptypes = {
  props: PropTypes.object
}

export default InlineStyleControls
