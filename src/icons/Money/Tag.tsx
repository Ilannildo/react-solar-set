import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Tag = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.137 4.728c-1.546-1.545-2.318-2.318-3.321-2.605-1.003-.288-2.068-.042-4.197.45l-1.228.283c-1.792.413-2.688.62-3.302 1.233-.613.614-.82 1.51-1.233 3.302l-.284 1.228c-.491 2.13-.737 3.194-.45 4.197.288 1.003 1.061 1.775 2.606 3.32l1.83 1.83C9.248 20.657 10.592 22 12.262 22c1.671 0 3.015-1.345 5.704-4.034C20.657 15.277 22 13.933 22 12.262c0-1.342-.868-2.474-2.604-4.262" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8.607 10.879a2 2 0 1 0-2-2M11.542 18.5l1-1m5.979-5.98L15 15.043" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4.728 16.137c-1.545-1.546-2.318-2.318-2.605-3.321-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302.614-.613 1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45 1.003.288 1.775 1.061 3.32 2.606l1.83 1.83C20.657 9.248 22 10.592 22 12.262c0 1.671-1.345 3.015-4.034 5.704C15.277 20.657 13.933 22 12.262 22c-1.67 0-3.015-1.345-5.704-4.034l-1.83-1.83Z" stroke="currentColor" strokeWidth={1.5} /><circle opacity={0.5} cx={8.607} cy={8.879} r={2} transform="rotate(-45 8.607 8.879)" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m11.542 18.5 6.979-6.98" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4.728 16.137c-1.545-1.546-2.318-2.318-2.605-3.321-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302.614-.613 1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45 1.003.288 1.775 1.061 3.32 2.606l1.83 1.83C20.657 9.248 22 10.592 22 12.262c0 1.671-1.345 3.015-4.034 5.704C15.277 20.657 13.933 22 12.262 22c-1.67 0-3.015-1.345-5.704-4.034l-1.83-1.83Z" stroke="currentColor" strokeWidth={1.5} /><circle cx={8.607} cy={8.879} r={2} transform="rotate(-45 8.607 8.879)" stroke="currentColor" strokeWidth={1.5} /><path d="m11.542 18.5 6.979-6.98" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.238 2.799c-.614.081-1.372.255-2.45.504l-1.229.284c-.91.21-1.538.356-2.017.52-.463.159-.725.315-.922.513-.198.197-.354.459-.513.922-.164.479-.31 1.106-.52 2.017l-.284 1.228c-.249 1.079-.423 1.837-.504 2.451-.08.598-.061 1.003.045 1.371.105.368.304.721.688 1.186.395.478.944 1.029 1.727 1.812l1.83 1.83c1.359 1.359 2.326 2.324 3.158 2.958.814.622 1.41.855 2.015.855.606 0 1.201-.233 2.016-.855.831-.634 1.799-1.6 3.158-2.959 1.36-1.36 2.325-2.327 2.96-3.158.62-.815.854-1.41.854-2.016 0-.605-.233-1.2-.855-2.015-.634-.832-1.6-1.8-2.959-3.159l-1.83-1.83c-.782-.782-1.333-1.331-1.81-1.726-.466-.384-.819-.583-1.187-.688-.368-.106-.773-.124-1.37-.045Zm-.196-1.487c.717-.095 1.346-.092 1.98.09.635.182 1.17.513 1.728.973.54.446 1.14 1.046 1.891 1.797l1.896 1.896c1.31 1.31 2.348 2.348 3.05 3.27.724.947 1.163 1.859 1.163 2.924 0 1.066-.439 1.978-1.162 2.925-.703.922-1.74 1.96-3.051 3.27l-.08.08c-1.31 1.31-2.348 2.348-3.27 3.05-.947.724-1.86 1.163-2.925 1.163-1.065 0-1.977-.439-2.925-1.162-.921-.703-1.959-1.74-3.27-3.051L4.173 16.64c-.75-.75-1.351-1.351-1.797-1.89-.46-.559-.791-1.094-.973-1.728-.182-.635-.185-1.264-.09-1.981.091-.694.283-1.522.521-2.556l.3-1.303c.2-.863.362-1.567.555-2.128.202-.587.455-1.08.871-1.496.416-.416.91-.67 1.496-.87.561-.194 1.265-.356 2.128-.555l1.303-.3c1.034-.24 1.862-.43 2.556-.522ZM9.49 7.995a1.25 1.25 0 1 0-1.768 1.768 1.25 1.25 0 0 0 1.768-1.768Zm-2.828-1.06a2.75 2.75 0 1 1 3.889 3.889 2.75 2.75 0 0 1-3.89-3.89ZM19.05 10.99a.75.75 0 0 1 0 1.06l-6.979 6.98a.75.75 0 0 1-1.06-1.06l6.978-6.98a.75.75 0 0 1 1.061 0Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.123 12.816c.287 1.003 1.06 1.775 2.605 3.32l1.83 1.83C9.248 20.657 10.592 22 12.262 22c1.671 0 3.015-1.345 5.704-4.034C20.657 15.277 22 13.933 22 12.262c0-1.67-1.345-3.015-4.034-5.704l-1.83-1.83c-1.545-1.545-2.317-2.318-3.32-2.605-1.003-.288-2.068-.042-4.197.45l-1.228.283c-1.792.413-2.688.62-3.302 1.233-.613.614-.82 1.51-1.233 3.302l-.284 1.228c-.491 2.13-.737 3.194-.45 4.197Zm8-5.545a2.017 2.017 0 1 1-2.852 2.852 2.017 2.017 0 0 1 2.852-2.852Zm8.928 4.78-6.979 6.98a.75.75 0 0 1-1.06-1.061l6.978-6.98a.75.75 0 0 1 1.061 1.061Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M4.728 16.137c-1.545-1.546-2.318-2.318-2.605-3.321-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302.614-.613 1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45 1.003.288 1.775 1.061 3.32 2.606l1.83 1.83C20.657 9.248 22 10.592 22 12.262c0 1.671-1.345 3.015-4.034 5.704C15.277 20.657 13.933 22 12.262 22c-1.67 0-3.015-1.345-5.704-4.034l-1.83-1.83Z" fill="currentColor" /><path d="M10.123 7.271a2.017 2.017 0 1 1-2.852 2.852 2.017 2.017 0 0 1 2.853-2.852ZM19.051 12.051l-6.979 6.98a.75.75 0 1 1-1.06-1.06l6.979-6.98a.75.75 0 1 1 1.06 1.06Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Tag