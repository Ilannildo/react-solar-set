import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Fridge = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 10v3c0 3.771 0 5.657 1.172 6.828C6.343 21 8.229 21 12 21c3.771 0 5.657 0 6.828-1.172C20 18.657 20 16.771 20 13v-3c0-3.771 0-5.657-1.172-6.828C17.657 2 15.771 2 12 2 8.229 2 6.343 2 5.172 3.172 4.518 3.825 4.229 4.7 4.102 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 21v1h-1v-1m-8 0v1H7v-1" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /><path d="M20 11.5h-5m-11 0h7M17 7v2M17 14v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v3c0 3.771 0 5.657-1.172 6.828C17.657 21 15.771 21 12 21c-3.771 0-5.657 0-6.828-1.172C4 18.657 4 16.771 4 13v-3Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M17 21v1h-1v-1m-8 0v1H7v-1" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /><path opacity={0.5} d="M20 11.5H4" stroke="currentColor" strokeWidth={1.5} /><path d="M17 7v2M17 14v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v3c0 3.771 0 5.657-1.172 6.828C17.657 21 15.771 21 12 21c-3.771 0-5.657 0-6.828-1.172C4 18.657 4 16.771 4 13v-3Z" stroke="currentColor" strokeWidth={1.5} /><path d="M17 21v1h-1v-1m-8 0v1H7v-1" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /><path d="M20 11.5H4" stroke="currentColor" strokeWidth={1.5} /><path d="M17 7v2M17 14v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.75 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V7ZM17.75 14a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.056 1.25h-.112c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v3.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.46.459.994.761 1.609.963V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-.296c.907.046 1.965.046 3.194.046h.112c1.23 0 2.287 0 3.194-.046V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-.678c.615-.202 1.15-.504 1.609-.963.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433V9.944c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153ZM5.702 3.702c.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14 1.907 0 3.261.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289v.75H4.75V10c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008ZM4.75 12.25h14.5V13c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812-1.028.138-2.382.14-4.289.14-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.027-.14-2.382-.14-4.289v-.75Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.172 3.172C4 4.343 4 6.229 4 10v.75h16V10c0-3.771 0-5.657-1.172-6.828C17.657 2 15.771 2 12 2 8.229 2 6.343 2 5.172 3.172ZM17 6.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75ZM4 12.25V13c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.047C9.645 21 10.712 21 12 21s2.355 0 3.25-.047V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.475a3.1 3.1 0 0 0 1.078-.697C20 18.657 20 16.771 20 13v-.75H4Zm13 1a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4 11.5V13c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.047C9.645 21 10.712 21 12 21s2.355 0 3.25-.047V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.475a3.1 3.1 0 0 0 1.078-.697C20 18.657 20 16.771 20 13v-1.5H4Zm13 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path opacity={0.5} d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v1.5H4V10Z" fill="currentColor" /><path d="M17.75 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V7Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Fridge