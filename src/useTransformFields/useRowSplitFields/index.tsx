import { useMemo } from 'react';
import { DEFAULT_FORM_GUTTER } from '../../constants';
import { FieldDefinition, FormRow } from '../../types';

type FunctionDefinition = (fields: FieldDefinition[], formGlobalGutter?: number) => FormRow[];

const useRowSplitFields: FunctionDefinition = (fields, formGlobalGutter = DEFAULT_FORM_GUTTER) => {
    return useMemo(() => {
        const initialRowState = {
            gutter: formGlobalGutter,
            children: [],
        };

        const endRow = () => {
            formRows.push(currentRow);
            currentRow = { ...initialRowState };
            openRow = false;
        };

        const addFieldToRow = (field: FieldDefinition) => {
            const { row } = field;

            currentRow = {
                ...currentRow,
                ...row,
                children: currentRow.children.concat(field),
            };
        };

        const formRows: FormRow[] = [];

        let openRow = false;
        let currentRow: FormRow = { ...initialRowState };

        fields.map((field, key, collection) => {
            const { rowStart, rowEnd } = field;

            addFieldToRow(field);
            if (rowStart) {
                openRow = true;
            }

            const isLast = key + 1 === collection.length;
            const isOrphan = !rowStart && !openRow;
            if (rowEnd || isLast || isOrphan) {
                endRow();
            }
        });

        return formRows;
    }, [fields]);
};

export default useRowSplitFields;
