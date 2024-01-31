import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SafeCircle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 8v1m0 7v-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="m16 10 1-1M11 15l1-1M12 10l-1-1M17 15l-1-1M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M7 8v8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m16 10 1-1M11 15l1-1M12 10l-1-1M17 15l-1-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 8v8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="m16 10 1-1M11 15l1-1M12 10l-1-1M17 15l-1-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm-5 4.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 7 7.25Zm3.47 1.22a.75.75 0 0 1 1.06 0l1 1c.043.043.08.09.11.14.401-.23.865-.36 1.36-.36.495 0 .959.13 1.36.36a.752.752 0 0 1 .11-.14l1-1a.75.75 0 1 1 1.06 1.06l-1 1a.751.751 0 0 1-.14.11c.23.401.36.865.36 1.36 0 .495-.13.959-.36 1.36.05.03.097.067.14.11l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.751.751 0 0 1-.11-.14c-.401.23-.865.36-1.36.36-.495 0-.959-.13-1.36-.36a.751.751 0 0 1-.11.14l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.751.751 0 0 1 .14-.11 2.738 2.738 0 0 1-.36-1.36c0-.495.13-.959.36-1.36a.751.751 0 0 1-.14-.11l-1-1a.75.75 0 0 1 0-1.06ZM14 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM7.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V8Zm3.78.47a.75.75 0 1 0-1.06 1.06l1 1c.043.043.09.08.14.11-.23.401-.36.865-.36 1.36 0 .495.13.959.36 1.36a.751.751 0 0 0-.14.11l-1 1a.75.75 0 1 0 1.06 1.06l1-1a.751.751 0 0 0 .11-.14c.401.23.865.36 1.36.36.495 0 .959-.13 1.36-.36.03.05.067.097.11.14l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.751.751 0 0 0-.14-.11c.23-.401.36-.865.36-1.36 0-.495-.13-.959-.36-1.36a.751.751 0 0 0 .14-.11l1-1a.75.75 0 0 0-1.06-1.06l-1 1a.752.752 0 0 0-.11.14A2.737 2.737 0 0 0 14 9.25c-.495 0-.959.13-1.36.36a.752.752 0 0 0-.11-.14l-1-1Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.47 8.47a.75.75 0 0 1 1.06 0l1 1c.043.043.08.09.11.14.401-.23.865-.36 1.36-.36.495 0 .959.13 1.36.36a.752.752 0 0 1 .11-.14l1-1a.75.75 0 1 1 1.06 1.06l-1 1a.751.751 0 0 1-.14.11c.23.401.36.865.36 1.36 0 .495-.13.959-.36 1.36.05.03.097.067.14.11l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.751.751 0 0 1-.11-.14c-.401.23-.865.36-1.36.36-.495 0-.959-.13-1.36-.36a.751.751 0 0 1-.11.14l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.751.751 0 0 1 .14-.11 2.738 2.738 0 0 1-.36-1.36c0-.495.13-.959.36-1.36a.751.751 0 0 1-.14-.11l-1-1a.75.75 0 0 1 0-1.06ZM12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z" fill="currentColor" /><path d="M7 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 7 7.25Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SafeCircle