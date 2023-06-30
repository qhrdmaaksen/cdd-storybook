import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * 사용자 상호 작용을 위한 기본 UI 구성 요소
 */
export const Button = ({color, backgroundColor, label, ...props}) => {
    return (
        <DefaultButton $color={color} $backgroundColor={backgroundColor} {...props}>
            {label}
        </DefaultButton>
    );
};

const DefaultButton = styled.button`
  color: ${(props) => (props.$color ? props.$color : '#000')};
  background-color: ${(props) => 
  props.$backgroundColor ? props.$backgroundColor : '#BF4F74'};
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
     * 이것이 페이지의 주요 클릭 유도문안입니까?
     */
    color: PropTypes.string,
    /**
     * 사용할 배경색
     */
    backgroundColor: PropTypes.string,
    /**
     * 버튼 내용
     */
    label: PropTypes.string.isRequired,
    /**
     * 선택적 클릭 핸들러
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    color: null,
    onClick: undefined,
};
