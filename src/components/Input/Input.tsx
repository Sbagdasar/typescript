import React, {ChangeEvent} from 'react';

export type InputPropsType = {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Input = (prop: InputPropsType) => {
    return (
        <div>
            <input/>
        </div>
    );
};
