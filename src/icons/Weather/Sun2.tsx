import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Sun2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.285 10.333a5 5 0 1 0 3.049-3.049M12 2v2M12 20v2M4 12H2M22 12h-2M19.778 4.223l-2.222 2.031M4.222 4.223l2.222 2.031M6.444 17.556l-2.222 2.222M19.778 19.777l-2.222-2.222" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={5} stroke="currentColor" strokeWidth={1.5} /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m19.778 4.223-2.222 2.031M4.222 4.223l2.222 2.031M6.444 17.556l-2.222 2.222M19.778 19.777l-2.222-2.222" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={5} stroke="currentColor" strokeWidth={1.5} /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M19.778 4.223l-2.222 2.031M4.222 4.223l2.222 2.031M6.444 17.556l-2.222 2.222M19.778 19.777l-2.222-2.222" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM3.669 3.716a.75.75 0 0 1 1.06-.047L6.95 5.7a.75.75 0 1 1-1.012 1.107L3.716 4.776a.75.75 0 0 1-.047-1.06Zm16.662 0a.75.75 0 0 1-.047 1.06l-2.222 2.031A.75.75 0 0 1 17.05 5.7l2.222-2.031a.75.75 0 0 1 1.06.047ZM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5ZM6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Zm-5 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm-2.224 5.025a.75.75 0 0 1 1.06 0l2.222 2.223a.75.75 0 0 1-1.06 1.06l-2.223-2.222a.75.75 0 0 1 0-1.06Zm-10.051 0a.75.75 0 0 1 0 1.061l-2.223 2.222a.75.75 0 0 1-1.06-1.06l2.222-2.223a.75.75 0 0 1 1.06 0ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM3.669 3.716a.75.75 0 0 1 1.06-.047L6.95 5.7a.75.75 0 1 1-1.012 1.107L3.716 4.776a.75.75 0 0 1-.047-1.06Zm16.662 0a.75.75 0 0 1-.047 1.06l-2.222 2.031A.75.75 0 0 1 17.05 5.7l2.222-2.031a.75.75 0 0 1 1.06.047ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm-2.224 5.025a.75.75 0 0 1 1.06 0l2.222 2.223a.75.75 0 0 1-1.06 1.06l-2.223-2.222a.75.75 0 0 1 0-1.06Zm-10.051 0a.75.75 0 0 1 0 1.061l-2.223 2.222a.75.75 0 0 1-1.06-1.06l2.222-2.223a.75.75 0 0 1 1.06 0ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M3.67 3.716a.75.75 0 0 1 1.059-.048L6.95 5.7a.75.75 0 0 1-1.012 1.107L3.717 4.775a.75.75 0 0 1-.048-1.06ZM20.332 3.716a.75.75 0 0 1-.047 1.06l-2.223 2.03A.75.75 0 1 1 17.05 5.7l2.222-2.032a.75.75 0 0 1 1.06.048ZM17.026 17.025a.75.75 0 0 1 1.06 0l2.223 2.222a.75.75 0 1 1-1.061 1.06l-2.222-2.222a.75.75 0 0 1 0-1.06ZM6.975 17.025a.75.75 0 0 1 0 1.06l-2.222 2.223a.75.75 0 0 1-1.06-1.06l2.222-2.223a.75.75 0 0 1 1.06 0Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Sun2