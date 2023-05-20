import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as standardTags } from './StandardTags/router-data';
import { blockRouterMetaData as CssAnimations} from './CssAnimations/router-data';
import { blockRouterMetaData as blockRouterMetaData120520231 } from './Blok10/router-data';

export const blockRouterMetaData = [blockRouterMetaData121220231,blockRouterMetaData120520231, standardTags, CssAnimations];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
