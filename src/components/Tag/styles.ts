import styled from 'styled-components'

import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline-block;
  align-items: center;
  height: 24px;
  padding: 6px 4px;
  margin-left: 8px;
  font-size: 12px;
  background-color: ${colors.red};
  color: ${colors.white};
`
