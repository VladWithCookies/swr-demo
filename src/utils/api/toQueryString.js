import { stringify } from 'qs';
import { mapKeys, snakeCase } from 'lodash';

export const toQueryString = (params) => stringify(mapKeys(params, (_, key) => snakeCase(key)));
