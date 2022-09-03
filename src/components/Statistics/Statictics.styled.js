import styled from "styled-components";

export const StatList = styled.ul`
text-align: left;
padding-left: ${p => p.theme.space[5]}px;
`

export const StatName = styled.li`
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.secondaryText};
&:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
}
`
export const StatValue = styled.span`
padding-left: ${p => p.theme.space[4]}px;
color: ${p => p.theme.colors.primaryText};
`