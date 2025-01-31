import React, { FC } from 'react';
import s from './Swatch.module.css';
import { Check } from '@components/icons';
import cn from 'classnames';
import { isDark } from '@lib/color';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  label?: string;
  active?: boolean;
  variant?: 'size' | 'color' | string;
  onClick: () => void;
}

const Swatch: FC<Props> = ({
  size = 'md',
  color,
  label,
  variant,
  active,
  ...rest
}) => {
  label = label?.toLowerCase();
  variant = variant?.toLowerCase();

  const rootClassName = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === 'size',
    [s.dark]: color && isDark(color),
    [s.sm]: size === 'sm',
  });

  return (
    <button
      className={rootClassName}
      style={color ? { backgroundColor: color } : {}}
      {...rest}
    >
      {active && variant === 'color' && (
        <span>
          <Check />
        </span>
      )}
      {variant === 'size' ? label : null}
    </button>
  );
};

export default Swatch;
