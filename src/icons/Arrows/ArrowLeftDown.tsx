import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ArrowLeftDown = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 18h9m-9 0V9m0 9 6.5-6.5M18 6l-2.5 2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-1.06-1.06-12 12 1.06 1.06 12-12-1.06-1.06Z" fill="currentColor" /><path d="M6 9v9h9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 6 6 18m0 0V9m0 9h9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18.53 5.47a.75.75 0 0 1 0 1.06L7.81 17.25H15a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v7.19L17.47 5.47a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-6.97 6.97-3.97-3.97A.75.75 0 0 0 5.25 9v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .53-1.28l-3.97-3.97 6.97-6.97Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m11.56 13.5-1.06-1.06-3.97-3.97A.75.75 0 0 0 5.25 9v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .53-1.28l-3.97-3.97Z" fill="currentColor" /><path opacity={0.5} d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-6.97 6.97 1.06 1.06 6.97-6.97Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ArrowLeftDown