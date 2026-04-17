import { useCallback, useState } from 'react';
import useDebounce from './useDebounce';

export type IType =
    | string
    | number
    | Record<string, number | string>
    | Array<string | number>;

const useLazyInput = <IType = string>(
    callback: (value: IType) => void,
    initial: IType,
    delay = 600
) => {
    const [value, setValue] = useState<IType>(initial);
    const { clear } = useDebounce(() => callback?.(value), delay, [value]);

    const update = useCallback((value: IType, withoutDelay = false) => {
        setValue(value);
        if (withoutDelay) {
            clear();
            callback?.(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const forceUpdate = useCallback(() => {
        clear();
        callback?.(value);
    }, [callback, clear, value]);

    return {
        update,
        value,
        forceUpdate,
    };
};

export default useLazyInput;
