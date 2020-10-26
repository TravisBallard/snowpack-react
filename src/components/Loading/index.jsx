import React from 'react'
import {Wrapper} from "./styles";
import Title from "antd/lib/typography/Title";

/**
 * Component to display a Loading message
 * @returns {JSX.Element}
 * @constructor
 */
const Loading = () => {
  /**
   * Render
   */
  return (
    <>
      <Wrapper>
        <Title level={3}>Loading&hellip;</Title>
      </Wrapper>
    </>
  )
}

export default Loading