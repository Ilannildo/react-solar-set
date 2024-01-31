import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const VideoLibrary = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" stroke="currentColor" strokeWidth={1.5} /><path d="M21.194 16.793c-.35 2.48-.525 3.721-1.422 4.464-.897.743-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743-.897-.743-1.072-1.983-1.422-4.464l-.422-3c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024.748.809.767 1.966.521 3.976" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14.581 13.616c.559.346.559 1.242 0 1.588l-3.371 2.09c-.543.337-1.21-.1-1.21-.794v-4.18c0-.693.667-1.13 1.21-.794l3.371 2.09Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" stroke="currentColor" strokeWidth={1.5} /><path d="M14.581 13.616c.559.346.559 1.242 0 1.588l-3.371 2.09c-.543.337-1.21-.1-1.21-.794v-4.18c0-.693.667-1.13 1.21-.794l3.371 2.09Z" stroke="currentColor" strokeWidth={1.5} /><path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024.947 1.024.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464-.897.743-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743-.897-.743-1.072-1.983-1.422-4.464l-.422-3Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496M14.581 13.616c.559.346.559 1.242 0 1.588l-3.371 2.09c-.543.337-1.21-.1-1.21-.794v-4.18c0-.693.667-1.13 1.21-.794l3.371 2.09Z" stroke="currentColor" strokeWidth={1.5} /><path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024.947 1.024.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464-.897.743-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743-.897-.743-1.072-1.983-1.422-4.464l-.422-3Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.99 10.91a1.485 1.485 0 0 1 1.615-.022l3.371 2.09c.538.334.774.91.774 1.432 0 .523-.236 1.099-.774 1.432l-3.371 2.09c-.54.334-1.157.28-1.615-.022a1.673 1.673 0 0 1-.74-1.41v-4.18c0-.593.289-1.114.74-1.41Zm.823 1.254c-.019.012-.063.056-.063.156v4.18c0 .1.044.144.063.156l.001.001 3.372-2.09c.021-.013.064-.059.064-.157s-.043-.143-.064-.157l-3.371-2.09h-.002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.7 1.25c-.22 0-.39 0-.536.016A2.75 2.75 0 0 0 5.71 3.87a2.888 2.888 0 0 0-2.055 2.721c-.6.18-1.119.465-1.543.923-.652.705-.854 1.572-.862 2.586-.007.975.167 2.207.382 3.736l.44 3.114c.168 1.196.305 2.168.518 2.929.223.797.552 1.452 1.16 1.956.604.5 1.32.715 2.166.817.819.098 1.849.098 3.13.098h5.907c1.282 0 2.312 0 3.13-.098.847-.102 1.563-.317 2.167-.817.608-.504.937-1.16 1.16-1.956.213-.761.35-1.733.519-2.93l.439-3.113c.216-1.53.39-2.761.382-3.736-.008-1.014-.21-1.881-.862-2.586-.424-.458-.943-.742-1.544-.923a2.888 2.888 0 0 0-2.054-2.72 2.75 2.75 0 0 0-2.454-2.605c-.147-.016-.316-.016-.536-.016H8.7Zm10.11 5.078a1.383 1.383 0 0 0-1.348-1.078H6.538c-.669 0-1.212.47-1.349 1.078.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078ZM16.769 3.75a1.25 1.25 0 0 0-1.092-.993 4.924 4.924 0 0 0-.417-.007H8.74c-.28 0-.361.001-.417.007a1.25 1.25 0 0 0-1.092.993h9.536ZM3.213 8.533c.303-.327.758-.544 1.643-.662.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121.885.118 1.34.335 1.643.662.296.32.457.755.463 1.579.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787-.177.63-.384.965-.673 1.204-.293.244-.687.4-1.388.484-.719.086-1.659.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087-.7-.085-1.095-.24-1.388-.483-.289-.24-.496-.576-.673-1.205-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576.006-.824.167-1.26.463-1.579Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.51 2h6.98c.232 0 .41 0 .566.015 1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2ZM6.31 4.723c-1.39 0-2.53.84-2.91 1.954a2.587 2.587 0 0 0-.024.07c.398-.12.813-.2 1.232-.253 1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139.42.054.834.132 1.232.253a2.173 2.173 0 0 0-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954H6.31Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987-.948.987-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716.897-.716 1.072-1.912 1.422-4.303l.422-2.891c.447-3.05.67-4.574-.278-5.561-.948-.987-2.636-.987-6.01-.987Zm-.747 8.252c.559-.346.559-1.242 0-1.588l-3.371-2.09c-.543-.337-1.21.101-1.21.794v4.18c0 .693.667 1.13 1.21.794l3.371-2.09Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987-.948.987-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716.897-.716 1.072-1.912 1.422-4.303l.422-2.892c.447-3.049.67-4.573-.278-5.56-.948-.987-2.636-.987-6.01-.987Zm-.747 8.252c.559-.346.559-1.242 0-1.588l-3.371-2.09c-.543-.337-1.21.101-1.21.794v4.18c0 .693.667 1.13 1.21.794l3.371-2.09Z" fill="currentColor" /><path opacity={0.4} d="M8.51 2h6.98c.232 0 .41 0 .566.015 1.108.109 2.015.775 2.4 1.672H5.543c.384-.897 1.291-1.563 2.399-1.672C8.099 2 8.277 2 8.51 2Z" fill="currentColor" /><path opacity={0.7} d="M6.31 4.723c-1.39 0-2.53.84-2.911 1.953a2.587 2.587 0 0 0-.023.07c.398-.12.812-.199 1.232-.253 1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.951 0 4.032.138.419.054.833.133 1.232.253a2.453 2.453 0 0 0-.023-.07c-.38-1.114-1.521-1.953-2.912-1.953H6.311Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default VideoLibrary