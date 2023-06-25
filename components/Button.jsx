import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

/**
 * Primary UI component for user interaction
 */
export const Button = ({backgroundColor, label, ...props}) => {
    return (
        <DefaultButton $backgroundColor={backgroundColor} {...props}>
            {label}
        </DefaultButton>
    );
};

const DefaultButton = styled.button`
  background-color: ${(props) => props.$backgroundColor ? props.$backgroundColor : '#BF4F74'}
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
};
