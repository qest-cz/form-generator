import map from 'lodash/map';
import { useMemo } from 'react';

import { DEFAULT_FORM_GUTTER } from '../../constants';
import { FormField, FormRow } from '../../types';

const useRowSplitFields = (
    fields: FormField[],
    formGlobalGutter: number = DEFAULT_FORM_GUTTER,
): FormRow[] => {
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

        const addFieldToRow = (field: FormField) => {
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

        map(fields, (field, key, collection) => {
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
