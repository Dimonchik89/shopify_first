'use client';

import React, {
  FC,
  PropsWithChildren,
  Children,
  isValidElement,
  useState,
} from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import s from './ProductSlider.module.css';
import cn from 'classnames';

const ProductSlider: FC<PropsWithChildren> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  return (
    <div className={s.root}>
      <div ref={sliderRef} className="keen-slider h-full transition-opacity">
        {loaded && instanceRef.current && (
          <>
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              className={cn(s.leftControl, s.control)}
            />
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              className={cn(s.rightControl, s.control)}
            />
          </>
        )}
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${child.props.className ? `${child.props.className}` : ''} keen-slider__slide`,
              },
            };
          }

          return child;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
