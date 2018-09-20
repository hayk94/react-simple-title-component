/**
 * @function Title Component
 */

import * as React from 'react'
export interface IProps {
  children?: React.ReactNode,
  textStyle?: React.CSSProperties,
  containerStyle?: React.CSSProperties
}

const styles: { [key: string]: React.CSSProperties } = {
  textStyle: {
    borderBottom: 2,
    borderColor: '#1890ff',
    borderBottomStyle: 'solid' as 'solid',
    fontWeight: 'bold' as 'bold',
    fontSize: 18
  }
}

const Title: React.SFC<IProps> = ({
  children,
  textStyle,
  containerStyle
}) => (
  <div
    style={containerStyle}
  >
    <span
      style={{ ...styles.textStyle, ...textStyle }}
    >
    {children}
    </span>
  </div>
)

Title.defaultProps = {
  children: 'Title'
}

export default Title
