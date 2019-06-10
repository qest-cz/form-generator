import { useMemo } from 'react';
import * as Yup from 'yup';

import { UNREGISTRED_COMPONENTS } from './constants';
import { FormField, RenderReadyFormField } from './types';

export const useCreateFormikParams = (
    fields: FormField[],
): {
    initialValues: Record<string, FormField['initialValue']>;
    validationSchema: any;
    renderReadyFields: RenderReadyFormField[];
} => {
    const initialValues: Record<string, FormField['initialValue']> = {};
    const validationSchemaShape: Record<string, Yup.Schema<{}>> = {};
    const renderReadyFields = useMemo(() => {
        return fields.map(({ initialValue, validation, name, component, ...rest }) => {
            const isUnregistredComponent = component && UNREGISTRED_COMPONENTS.includes(component);

            if (!isUnregistredComponent) {
                initialValues[name] = initialValue;
                if (!!validation) {
                    validationSchemaShape[name] = validation;
                }
            }

            return { name, component, ...rest };
        });
    }, [fields]);
    const validationSchema = Yup.object().shape({
        ...validationSchemaShape,
    });

    return { initialValues, validationSchema, renderReadyFields };
};
