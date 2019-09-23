import set from 'lodash/set';
import { useMemo } from 'react';
import { FormField } from '../../types';

type FunctionDefinition = (vals: FormField[]) => { [key: string]: FormField['initialValue'] };

const useGetIntialValues: FunctionDefinition = fields =>
    // @NOTE: sets initialValue based on nested or normal path. You must set undefined for all fields even tho no initial value!
    useMemo(() => fields.reduce((acc, { name, initialValue }) => set(acc, name, initialValue), {}), [fields]);

export default useGetIntialValues;
