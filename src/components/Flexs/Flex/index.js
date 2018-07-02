import styled from 'styled-components';
import PropTypes from 'prop-types';

const Flex = styled.div`
  ${({ height }) => height && `height: ${height};`};
  width: ${({ width }) => width ? `${width}` : '100%'};
  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
  flex-direction: ${({ column }) => column ? 'column' : 'row'};
  flex-wrap: ${({ wrap }) => wrap ? 'wrap' : 'nowrap'};

  ${({ alignEnd }) => alignEnd && 'align-items: flex-end;'}
  ${({ alignStart }) => alignStart && 'align-items: flex-start;'}
  ${({ alignStrech }) => alignStrech && 'align-items: strech;'}
  ${({ alignCenter }) => alignCenter && 'align-items: center;'}
  ${({ alignBaseline }) => alignBaseline && 'align-items: baseline;'}

  ${({ justifyEnd }) => justifyEnd && 'justify-content: flex-end;'}
  ${({ justifyStart }) => justifyStart && 'justify-content: flex-start;'}
  ${({ justifyCenter }) => justifyCenter && 'justify-content: center;'}
  ${({ justifyAround }) => justifyAround && 'justify-content: space-around;'}
  ${({ justifyBetween }) => justifyBetween && 'justify-content: space-between;'}
`;

Flex.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  inline: PropTypes.bool,
  column: PropTypes.bool,
  wrap: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  alignEnd: PropTypes.bool,
  alignStart: PropTypes.bool,
  alignStrech: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignBaseline: PropTypes.bool,
  justifyEnd: PropTypes.bool,
  justifyStart: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  justifyAround: PropTypes.bool,
  justifyBetween: PropTypes.bool
};

export default Flex;
