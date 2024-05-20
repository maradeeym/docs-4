import clsx from "clsx";
import { SVGProps } from "react";

const IconBug = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-500 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.43032 1.51054C8.15999 1.1967 7.68643 1.16143 7.37259 1.43176C7.05875 1.70209 7.02348 2.17565 7.2938 2.48949L8.66767 4.08449C7.91278 4.89908 7.48174 5.96305 7.45795 7.07513C6.77046 7.66822 6.20028 8.39355 5.78692 9.21163L4.37413 8.40421L3.76209 5.95605C3.66163 5.5542 3.25443 5.30988 2.85258 5.41035C2.45074 5.51081 2.20642 5.91801 2.30688 6.31985L2.99653 9.07847L3.07415 9.38894L3.352 9.54773L5.25473 10.6352C5.11652 11.1821 5.04309 11.7549 5.04309 12.3448V13.319H2C1.58579 13.319 1.25 13.6548 1.25 14.069C1.25 14.4832 1.58579 14.819 2 14.819H5.04309V15.7931C5.04309 16.383 5.11652 16.9558 5.25472 17.5028L3.352 18.5902L3.07415 18.749L2.99653 19.0595L2.30688 21.8181C2.20642 22.2199 2.45074 22.6271 2.85258 22.7276C3.25443 22.8281 3.66163 22.5837 3.76209 22.1819L4.37413 19.7337L5.78691 18.9263C6.93306 21.1947 9.28489 22.75 12 22.75C14.7151 22.75 17.0669 21.1947 18.2131 18.9263L19.6259 19.7337L20.2379 22.1819C20.3384 22.5837 20.7456 22.8281 21.1474 22.7276C21.5493 22.6271 21.7936 22.2199 21.6931 21.8181L21.0035 19.0595L20.9258 18.749L20.648 18.5902L18.7453 17.5028C18.8835 16.9558 18.9569 16.383 18.9569 15.7931V14.819H22C22.4142 14.819 22.75 14.4832 22.75 14.069C22.75 13.6548 22.4142 13.319 22 13.319H18.9569V12.3448C18.9569 11.7549 18.8835 11.1822 18.7452 10.6352L20.648 9.54773L20.9258 9.38894L21.0035 9.07847L21.6931 6.31985C21.7936 5.91801 21.5493 5.51081 21.1474 5.41035C20.7456 5.30988 20.3384 5.5542 20.2379 5.95605L19.6259 8.40421L18.2131 9.21163C17.7997 8.39358 17.2295 7.66826 16.5421 7.07518C16.5183 5.96307 16.0873 4.89907 15.3323 4.08447L16.7062 2.48949C16.9765 2.17565 16.9412 1.70209 16.6274 1.43176C16.3136 1.16143 15.84 1.1967 15.5697 1.51054L14.1432 3.1666C13.4898 2.81703 12.7546 2.62932 12 2.62932C11.2454 2.62932 10.5102 2.81704 9.8568 3.16661L8.43032 1.51054ZM14.7968 5.97297C14.6457 5.62075 14.4281 5.29687 14.1518 5.02062C14.0648 4.93365 13.9731 4.85249 13.8773 4.77738C13.8498 4.75936 13.8231 4.73932 13.7974 4.71724L13.7945 4.71469C13.2767 4.33667 12.6491 4.12932 12 4.12932C11.3509 4.12932 10.7231 4.33672 10.2053 4.71484L10.2026 4.71724C10.177 4.73926 10.1504 4.75926 10.1229 4.77725C10.027 4.85239 9.93524 4.9336 9.84821 5.02062C9.57198 5.29686 9.35433 5.62074 9.20328 5.97294C10.0591 5.59676 11.0052 5.38795 12 5.38795C12.9948 5.38795 13.9409 5.59677 14.7968 5.97297ZM11.25 6.93907C10.2913 7.07084 9.41205 7.45164 8.67956 8.01409C8.67704 8.01605 8.67451 8.018 8.67196 8.01993C7.37724 9.0177 6.54309 10.5839 6.54309 12.3448V14.0645C6.5431 14.066 6.5431 14.0675 6.5431 14.069C6.5431 14.0705 6.5431 14.0719 6.54309 14.0734V15.7931C6.54309 18.5524 8.59111 20.8334 11.25 21.1989V6.93907ZM12.75 21.1989V6.93907C15.4089 7.30456 17.4569 9.58554 17.4569 12.3448V15.7931C17.4569 18.5524 15.4089 20.8334 12.75 21.1989Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconBug };
