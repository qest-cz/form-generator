import { FormField, RenderReadyFormField } from './types';
export declare const useCreateFormikParams: (fields: FormField[]) => {
    initialValues: Record<string, string | number | boolean | undefined>;
    validationSchema: any;
    renderReadyFields: RenderReadyFormField[];
};
