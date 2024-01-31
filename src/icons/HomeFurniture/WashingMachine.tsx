import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const WashingMachine = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 22v-1M18 22v-1M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3.108 18.765 3.01 17.114 3 14M3 9h9m9 0h-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6.5 5.5h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M6 22v-1M18 22v-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-3Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M3 9h18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6.5 5.5h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 22v-1M18 22v-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-3Z" stroke="currentColor" strokeWidth={1.5} /><path d="M3 9h18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6.5 5.5h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.125.928.148 2.067.152 3.45a.698.698 0 0 1 0 .073l.001.91v3.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.46.459-.994.761-1.609.963V22a.75.75 0 0 1-1.5 0v-.374c-1.102.124-2.482.124-4.194.124h-2.112c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-.678c-.615-.202-1.15-.504-1.609-.963-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.034a.768.768 0 0 1 .001-.072c.004-1.384.027-2.523.152-3.451.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153ZM3.75 9.75V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289V9.75H3.75Zm16.494-1.5H3.756c.01-1.034.042-1.858.134-2.54.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h2c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.092.68.123 1.505.134 2.539ZM5.75 5.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM12 12.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 15a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" fill="currentColor" /><path d="M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M20.994 8.25H3.006c.027-2.636.191-4.104 1.166-5.078C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172.975.974 1.139 2.442 1.166 5.078ZM5.75 5.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm8.75 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M9.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3 9.75h18V13c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-1.129C16.18 21 14.806 21 13 21h-2c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697C3 18.657 3 16.771 3 13V9.75Zm9 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3 9h18v4c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-1.129C16.18 21 14.806 21 13 21h-2c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697C3 18.657 3 16.771 3 13V9Zm9 2.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" fill="currentColor" /><path opacity={0.5} d="M4.172 3.172c-.974.974-1.139 2.442-1.166 5.078V9H21v-.75c-.028-2.636-.197-4.104-1.171-5.078C18.657 2 16.77 2 13 2h-2C7.23 2 5.343 2 4.172 3.172Z" fill="currentColor" /><path d="M6.5 4.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default WashingMachine