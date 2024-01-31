import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Pills3 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11 9.472c0-1.151-.44-2.303-1.318-3.182A4.481 4.481 0 0 0 7 5m4 4.472a4.5 4.5 0 0 1-9 0m9 0H2m0 0c0-1.151.44-2.303 1.318-3.182M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242ZM17.381 20.905l3.524-3.524a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524A3.738 3.738 0 0 0 14 21.927" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 14s.281 1.46 1.911 3.09C17.541 18.718 19 19 19 19" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286l3.524-3.524Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M14 14s.281 1.46 1.911 3.09C17.541 18.718 19 19 19 19" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286l3.524-3.524Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14 14s.281 1.46 1.911 3.09C17.541 18.718 19 19 19 19" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M19.53 2.348a3.75 3.75 0 1 0-5.303 5.304 3.75 3.75 0 0 0 5.303-5.304ZM15.288 3.41a2.25 2.25 0 1 1 3.182 3.182 2.25 2.25 0 0 1-3.182-3.182ZM10.212 5.787a5.25 5.25 0 1 0-7.424 7.425 5.25 5.25 0 0 0 7.424-7.425ZM3.848 6.848a3.75 3.75 0 0 1 6.327 1.902h-7.35a3.73 3.73 0 0 1 1.023-1.902ZM2.825 10.25h7.35a3.75 3.75 0 0 1-7.35 0ZM21.436 11.564a4.488 4.488 0 0 0-6.347 0l-3.524 3.524a4.488 4.488 0 1 0 6.346 6.347l3.524-3.524a4.488 4.488 0 0 0 0-6.347Zm-5.287 1.06a2.988 2.988 0 1 1 4.226 4.226L19 18.224a4.539 4.539 0 0 1-.609-.244c-.5-.241-1.2-.672-1.95-1.421-.75-.75-1.181-1.452-1.422-1.951a4.534 4.534 0 0 1-.236-.583L14.775 14l1.374-1.374Zm-2.53 2.53.05.105c.307.637.832 1.48 1.712 2.36.88.88 1.723 1.405 2.36 1.712a6.6 6.6 0 0 0 .104.05l-.994.994a2.988 2.988 0 1 1-4.226-4.226l.995-.994Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.682 12.682a4.5 4.5 0 0 1-7.62-2.432h8.875a4.48 4.48 0 0 1-1.255 2.432ZM10.937 8.75H2.063a4.5 4.5 0 0 1 8.875 0ZM14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242ZM20.905 12.095a3.738 3.738 0 0 1 0 5.286l-1.027 1.027v-.003l-.732-.14a4.539 4.539 0 0 1-.754-.284c-.5-.242-1.2-.672-1.95-1.422-.75-.75-1.181-1.451-1.422-1.951-.12-.25-.194-.451-.236-.583a2.393 2.393 0 0 1-.048-.17l-.141-.733h-.003l1.027-1.027a3.738 3.738 0 0 1 5.286 0ZM13.326 14.388c.009.029.018.06.03.094.06.193.16.459.313.777.307.637.832 1.48 1.712 2.36.88.88 1.723 1.405 2.36 1.712a6.045 6.045 0 0 0 .871.343l-1.231 1.231a3.738 3.738 0 0 1-5.286-5.286l1.231-1.231Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242ZM20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286l3.524-3.524Z" fill="currentColor" /><path d="M19.878 18.408v-.003l-.732-.14a4.539 4.539 0 0 1-.754-.284c-.5-.242-1.2-.672-1.95-1.422-.75-.75-1.18-1.451-1.422-1.951-.12-.25-.194-.451-.236-.583a3.16 3.16 0 0 1-.048-.17l-.141-.733h-.003l-1.266 1.266c.009.029.018.06.03.094.06.193.16.459.313.777.307.637.832 1.48 1.712 2.36.88.88 1.723 1.405 2.36 1.712a6.04 6.04 0 0 0 .871.343l1.266-1.266ZM9.727 12.682a4.61 4.61 0 0 1-6.454 0A4.458 4.458 0 0 1 2 10.25h9a4.458 4.458 0 0 1-1.273 2.432ZM11 8.75H2a4.458 4.458 0 0 1 1.273-2.432 4.61 4.61 0 0 1 6.454 0A4.458 4.458 0 0 1 11 8.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Pills3