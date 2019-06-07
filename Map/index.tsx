import get from 'lodash/get';
import map from 'lodash/map';
import React, { ReactNode } from 'react';

interface Props<T> {
  collection: Collection<T>;
  children: (item: T, key: string, collection: Collection<T>) => ReactNode;
  keySelector?: string;
}

type Collection<T> = Record<string | number, T> | ArrayLike<T> | T[] | null | undefined;

const Map = <T extends {}>({ collection, children, keySelector }: Props<T>) => {
  return (
    <>
      {map(collection, (item: T, key) => {
        const uniqueKey = getUniqueKey(item, key, keySelector);

        return children(item, uniqueKey, collection);
      })}
    </>
  );
};

const getUniqueKey = <I extends {}>(item: I, key: string | number, keySelector = ""): string => {
  return get(item, keySelector) || get(item, "id", key);
};

export default Map;
