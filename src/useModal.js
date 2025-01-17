import { useState, useCallback } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = useCallback(() => {
        setIsShowing((prev) => !prev);
    }, []);

    return {
        isShowing,
        toggle,
    };
};

export default useModal;
