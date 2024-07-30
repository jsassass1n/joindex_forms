import { css } from 'styled-components';
import { CombinedCommonStyles } from './getMarginsFromProps';

export const commonStyles = css<CombinedCommonStyles>`
  ${(props) => props.mt && `margin-top: ${props.mt}`};
  ${(props) => props.mb && `margin-bittom: ${props.mb}`};
  ${(props) => props.mr && `margin-right: ${props.mr}`};
  ${(props) => props.ml && `margin-left: ${props.ml}`};

  ${(props) => props.pt && `padding-top: ${props.pt}`};
  ${(props) => props.pb && `padding-bottom: ${props.pb}`};
  ${(props) => props.pr && `padding-right: ${props.pr}`};
  ${(props) => props.pl && `padding-left: ${props.pl}`};
`;
