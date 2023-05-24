import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as standardTags } from './StandardTags/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as blockRouterMetaData120520231 } from './Blok10/router-data';
import { blockRouterMetaData as FloatsAndPositioning } from './FloatsAndPositioning/router-data';
import { blockRouterMetaData as ExerciseMultimedia } from './Exercise-multimedia/router-data';
import { blockRouterMetaData as Exerciseimages } from './Exercise-images/router-data';
import { blockRouterMetaData as BoxModel } from './BoxModel/router-data';
export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaData120520231,
  standardTags,
  FloatsAndPositioning,
  CssAnimations,
  ExerciseMultimedia,
  Exerciseimages,
  BoxModel,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
