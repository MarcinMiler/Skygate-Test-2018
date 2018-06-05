import React from 'react'
import { SpinnerWrapper, SpinnerBounce, SpinnerBounceWrap } from './style'

const Spinner = () => (
    <SpinnerWrapper>
        <SpinnerBounceWrap>
            <SpinnerBounce />
            <SpinnerBounce />
            <SpinnerBounce />
        </SpinnerBounceWrap>
    </SpinnerWrapper>
)

export default Spinner
