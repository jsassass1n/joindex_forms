export interface Margins {
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
}

export interface Paddings {
  pt?: string;
  pb?: string;
  pr?: string;
  pl?: string;
}

export interface CombinedCommonStyles extends Margins, Paddings {}

export const getMarginsFromProps = ({
  mb,
  mt,
  ml,
  mr,
  pr,
  pl,
  pt,
  pb,
}: Partial<CombinedCommonStyles>) => {
  return { ml, mt, mr, mb, pr, pl, pt, pb };
};
