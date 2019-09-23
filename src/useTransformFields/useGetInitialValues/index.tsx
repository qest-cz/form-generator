import get from 'lodash/get';
import set from 'lodash/set';
import { useMemo } from 'react';
import { FieldDefinition } from '../../types';

const useGetIntialValues = (fields: FieldDefinition[], initVals: any) =>
    // @NOTE: sets initialValue based on nested or normal path. You must set undefined for all fields even tho no initial value!
    useMemo(
        () =>
            fields.reduce((acc, { name, initialValue }) => set(acc, name, initialValue || get(initVals, name)), {} as {
                [key: string]: FieldDefinition['initialValue'];
            }),
        [fields],
    );

export default useGetIntialValues;
