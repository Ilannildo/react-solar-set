import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const AltArrowRight = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.57 4.512a.75.75 0 1 0-1.14.976l1.14-.976ZM15 12l.57.488a.75.75 0 0 0 0-.976L15 12Zm-6.57 6.512a.75.75 0 1 0 1.14.976l-1.14-.976Zm2-10.69a.75.75 0 1 0 1.14-.977l-1.14.976Zm3.64 1.94a.75.75 0 1 0-1.14.976l1.14-.976Zm.36 1.75-6 7 1.14.976 6-7-1.14-.976Zm-6-6.024 2 2.333 1.14-.976-2-2.333-1.14.976Zm4.5 5.25 1.5 1.75 1.14-.976-1.5-1.75-1.14.976Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.57 4.512a.75.75 0 1 0-1.14.976l1.14-.976ZM15 12l.57.488a.75.75 0 0 0 0-.976L15 12Zm-6.57 6.512a.75.75 0 1 0 1.14.976l-1.14-.976Zm0-13.024 6 7 1.14-.976-6-7-1.14.976Zm6 6.024-6 7 1.14.976 6-7-1.14-.976Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.57 4.512a.75.75 0 1 0-1.14.976l1.14-.976ZM15 12l.57.488a.75.75 0 0 0 0-.976L15 12Zm-6.57 6.512a.75.75 0 1 0 1.14.976l-1.14-.976Zm0-13.024 6 7 1.14-.976-6-7-1.14.976Zm6 6.024-6 7 1.14.976 6-7-1.14-.976Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12 8.431 5.488a.75.75 0 0 1 .08-1.057Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.835 11.63 9.205 5.2C8.79 4.799 8 5.042 8 5.57v12.86c0 .528.79.771 1.205.37l6.63-6.43a.498.498 0 0 0 0-.74Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.404 8.303 3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723l4.404-4.404Z" fill="currentColor" /><path opacity={0.5} d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406L8 11.293Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default AltArrowRight