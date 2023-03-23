import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: 'Normal' | 'OutLine'
  btnSize?: 'sm' | 'md'
}

export default function Button({ btnType = 'OutLine', btnSize = 'md', children, className, ...rest }: Props) {
  return (
    <div className={className}>
      <button
        className={classNames('text-white  rounded-[30px] font-[600]  cursor-pointer', {
          'py-1 px-6 border-[2px] text-[1rem] text-center': btnSize === 'sm',
          'px-[1.8rem] py-2 border-[2px] text-[1.5rem]': btnSize === 'md',
          'hover:text-primary hover:bg-white transition-colors duration-300 bg-transparent border-white':
            btnType === 'OutLine',
          'border-primary bg-primary shadow-before hover:shadow-after transition-shadow duration-300':
            btnType === 'Normal',
          'display: none': true
        })}
        {...rest}
      >
        {children}
      </button>
    </div>
  )
}
