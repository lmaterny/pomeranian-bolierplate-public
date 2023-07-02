import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbersTrain } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBooleans } from './Exercise-js-booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMole } from './HitTheMole/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataPromises } from './Exercise-promises/router-data';
import { blockRouterMetaData as blockRouterMetaDataRedux } from './Redux/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsNumbersTrain,
  blockRouterMetaDataJsBooleans,
  blockRouterMetaDataHitTheMole,
  blockRouterMetaDataMemoGame,
  blockRouterMetaDataPromises,
  blockRouterMetaDataRedux,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
