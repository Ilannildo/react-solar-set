import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ServerSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 3c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 12.75a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-16 1.5h12v-1.5H2v1.5Zm16 0h4v-1.5h-4v1.5Z" fill="currentColor" /><path d="M13.5 16.5H18M13.5 7.5H18M6 17.5v-2M6 8.5v-2M9 17.5v-2M9 8.5v-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M10 3.75h4v-1.5h-4v1.5ZM21.25 11v2h1.5v-2h-1.5ZM14 20.25h-4v1.5h4v-1.5ZM2.75 13v-2h-1.5v2h1.5ZM10 20.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5ZM1.25 13c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5Zm20 0c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869.155-1.15.153-2.625.153-4.489h-1.5ZM14 21.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5Zm0-18c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.239-1.15-.155-2.625-.153-4.489-.153v1.5ZM22.75 11c0-1.864.002-3.338-.153-4.489-.158-1.172-.49-2.121-1.238-2.87l-1.06 1.06c.422.424.676 1.004.811 2.01.138 1.028.14 2.382.14 4.289h1.5ZM10 2.25c-1.864 0-3.338-.002-4.489.153-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811 1.028-.138 2.382-.14 4.289-.14v-1.5ZM2.75 11c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 7.661 1.25 9.136 1.25 11h1.5ZM2 12.75h20v-1.5H2v1.5Z" fill="currentColor" /><path d="M13.5 16.5H18M13.5 7.5H18M6 17.5v-2M6 8.5v-2M9 17.5v-2M9 8.5v-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2ZM2 12h20" stroke="currentColor" strokeWidth={1.5} /><path d="M13.5 16.5H18M13.5 7.5H18M6 17.5v-2M6 8.5v-2M9 17.5v-2M9 8.5v-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.944 2.25h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153ZM5.71 3.89c-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.028-.14 2.382-.14 4.289v.25h18.5V11c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14Zm15.539 8.86H2.75V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-.25ZM6 5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 6 5.75Zm3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 9 5.75Zm3.75 1.75a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM6 14.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm3.75 1.75a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.172 4.172C2 5.343 2 7.229 2 11v.25h20V11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172ZM22 12.75H2V13c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13v-.25ZM5.25 17.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2Zm3.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Zm4.5-2.5a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5h-4.5ZM9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM5.25 8.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2Zm7.5-1a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g opacity={0.5} fill="currentColor"><path d="M14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-.25h20V13c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21ZM10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v.25H2V11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3Z" /></g><path fillRule="evenodd" clipRule="evenodd" d="M22 12.75H2v-1.5h20v1.5Z" fill="currentColor" /><path d="M12.75 16.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM12.75 7.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM6 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM9 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ServerSquare