import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RoundTransferVertical = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.75 7a.75.75 0 0 0-1.5 0h1.5ZM10 17l-.565.493A.75.75 0 0 0 10.75 17H10Zm-2.435-3.93a.75.75 0 0 0-1.13.986l1.13-.987ZM9.25 7v10h1.5V7h-1.5Zm1.315 9.507-3-3.438-1.13.987 3 3.437 1.13-.986ZM14.75 17a.75.75 0 0 1-1.5 0h1.5ZM14 7h-.75a.75.75 0 0 1 1.315-.493L14 7Zm3.565 2.944a.75.75 0 0 1-1.13.987l1.13-.987ZM13.25 17V7h1.5v10h-1.5Zm1.315-10.493 3 3.437-1.13.987-3-3.438 1.13-.986Z" fill="currentColor" /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M10.75 7a.75.75 0 0 0-1.5 0h1.5ZM10 17l-.565.493A.75.75 0 0 0 10.75 17H10Zm-2.435-3.93a.75.75 0 0 0-1.13.986l1.13-.987ZM9.25 7v10h1.5V7h-1.5Zm1.315 9.507-3-3.438-1.13.987 3 3.437 1.13-.986ZM14.75 17a.75.75 0 0 1-1.5 0h1.5ZM14 7h-.75a.75.75 0 0 1 1.315-.493L14 7Zm3.565 2.944a.75.75 0 0 1-1.13.987l1.13-.987ZM13.25 17V7h1.5v10h-1.5Zm1.315-10.493 3 3.437-1.13.987-3-3.438 1.13-.986Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M10.75 7a.75.75 0 0 0-1.5 0h1.5ZM10 17l-.565.493A.75.75 0 0 0 10.75 17H10Zm-2.435-3.93a.75.75 0 0 0-1.13.986l1.13-.987ZM9.25 7v10h1.5V7h-1.5Zm1.315 9.507-3-3.438-1.13.987 3 3.437 1.13-.986ZM14.75 17a.75.75 0 0 1-1.5 0h1.5ZM14 7h-.75a.75.75 0 0 1 1.315-.493L14 7Zm3.565 2.944a.75.75 0 0 1-1.13.987l1.13-.987ZM13.25 17V7h1.5v10h-1.5Zm1.315-10.493 3 3.437-1.13.987-3-3.438 1.13-.986Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.507 12.997a.75.75 0 0 1 1.058.072L9.25 15V7a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.315.493l-3-3.437a.75.75 0 0 1 .072-1.059ZM13.737 6.298A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437a.75.75 0 0 0-.828-.21Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm2.75 15V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0Zm-8.243-4.003a.75.75 0 0 1 1.058.072L9.25 15V7a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.315.493l-3-3.437a.75.75 0 0 1 .072-1.059Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor" /><path d="M7.565 13.07a.75.75 0 1 0-1.13.986l3 3.437A.75.75 0 0 0 10.75 17V7a.75.75 0 0 0-1.5 0v8l-1.685-1.93ZM14.75 17V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RoundTransferVertical