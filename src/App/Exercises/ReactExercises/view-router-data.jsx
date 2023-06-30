import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Blok8MetaData } from './Blok 8/router-data';
import { Blok9MetaData } from './Blok 9/router-data';
import { forms } from './Forms/router-data';
import { basicForms } from './BasicForms/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Blok8MetaData,
  Blok9MetaData,
  forms,
  basicForms,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
