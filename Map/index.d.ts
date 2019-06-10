import { ReactNode } from 'react';
interface Props<T> {
    collection: Collection<T>;
    children: (item: T, key: string, collection: Collection<T>) => ReactNode;
    keySelector?: string;
}
declare type Collection<T> = Record<string | number, T> | ArrayLike<T> | T[] | null | undefined;
declare const Map: <T extends {}>({ collection, children, keySelector }: Props<T>) => JSX.Element;
export default Map;
