import React, { FC, PropsWithChildren } from 'react';
import s from './ProductSlider.module.css';

const ProductSlider: FC<PropsWithChildren> = ({
    children,
}) => {
    return (
        <div className={s.root}>
            <div className="h-full transition-opacity">
                {children}
            </div>
        </div>
    );
};

export default ProductSlider;
