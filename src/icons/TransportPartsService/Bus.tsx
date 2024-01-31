import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Bus = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 2.009c-2.48.036-3.885.22-4.828 1.163C4 4.343 4 6.229 4 10v2c0 3.771 0 5.657 1.172 6.828C6.343 20 8.229 20 12 20c3.771 0 5.657 0 6.828-1.172C20 17.657 20 15.771 20 12v-2c0-3.771 0-5.657-1.172-6.828-.943-.943-2.348-1.127-4.828-1.163" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M20 13h-4M4 13h8M15.5 16H17M7 16h1.5M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1M18 19.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 5h3.75M19.5 5H12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12v-2Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M4 13h16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.5 16H17M7 16h1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1M18 19.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M19.5 5h-15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M4 13h16M15.5 16H17M7 16h1.5M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1M18 19.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.5 5h-15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.944 1.25h.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.103.764.136 1.67.147 2.739H21c.966 0 1.75.784 1.75 1.75v1c0 .55-.26 1.07-.7 1.4l-1.303.977c-.007 1.232-.036 2.26-.15 3.112-.158 1.172-.49 2.121-1.238 2.87-.19.19-.393.353-.609.493V21A1.75 1.75 0 0 1 17 22.75h-1.5A1.75 1.75 0 0 1 13.75 21v-.256c-.525.006-1.088.006-1.694.006h-.112c-.606 0-1.17 0-1.694-.006V21a1.75 1.75 0 0 1-1.75 1.75H7A1.75 1.75 0 0 1 5.25 21v-1.148a3.733 3.733 0 0 1-.609-.493c-.748-.749-1.08-1.698-1.238-2.87-.114-.852-.143-1.88-.15-3.112L1.95 12.4c-.44-.33-.7-.85-.7-1.4v-1c0-.966.784-1.75 1.75-1.75h.255c.012-1.069.045-1.975.148-2.739.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153ZM3.25 9.75H3a.25.25 0 0 0-.25.25v1a.25.25 0 0 0 .1.2l.4.3V9.75Zm1.506 4c.01 1.034.042 1.858.134 2.54.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14 1.907 0 3.261-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.092-.68.123-1.505.134-2.539H4.756Zm14.494-1.5H4.75V10c0-1.883.002-3.227.135-4.25h14.23c.133 1.023.135 2.367.135 4.25v2.25Zm1.5-.75.4-.3a.25.25 0 0 0 .1-.2v-1a.25.25 0 0 0-.25-.25h-.25v1.75Zm-2.049-7.25a2.251 2.251 0 0 0-.403-.548c-.423-.423-1.003-.677-2.009-.812-1.028-.138-2.382-.14-4.289-.14-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.157.157-.29.335-.403.548h13.402ZM6.75 20.46V21c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-.296a15.1 15.1 0 0 1-1.239-.107 8.248 8.248 0 0 1-.761-.137Zm8.5.244V21c0 .138.112.25.25.25H17a.25.25 0 0 0 .25-.25v-.54c-.242.057-.496.101-.761.137a15.1 15.1 0 0 1-1.239.107ZM6.25 16a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm8.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2C8.229 2 6.343 2 5.172 3.172 4.108 4.235 4.01 5.886 4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13c.01 3.114.108 4.765 1.172 5.828.242.243.514.435.828.587V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1.018C10.227 20 11.054 20 12 20s1.773 0 2.5-.018V21a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1v-1.585a3.02 3.02 0 0 0 .828-.587C19.892 17.765 19.991 16.114 20 13l1.6-1.2a1 1 0 0 0 .4-.8v-1a1 1 0 0 0-1-1h-1c-.01-3.114-.108-4.765-1.172-5.828C17.657 2 15.771 2 12 2ZM5.5 9.5c0 1.414 0 2.121.44 2.56.439.44 1.146.44 2.56.44h7c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56V7c0-1.414 0-2.121-.44-2.56C17.622 4 16.915 4 15.5 4h-7c-1.414 0-2.121 0-2.56.44C5.5 4.878 5.5 5.585 5.5 7v2.5Zm.75 6.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm11.5 0a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 19.982c1.573-.04 2.677-.167 3.5-.567V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1.018ZM6 19.415c.823.4 1.927.527 3.5.567V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.585Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M5.172 3.172C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C19.892 4.235 19.99 5.886 20 9L20 13c-.01 3.114-.108 4.765-1.172 5.828a3.02 3.02 0 0 1-.828.587c-.823.4-1.927.527-3.5.567C13.773 20 12.946 20 12 20s-1.773 0-2.5-.018c-1.573-.04-2.677-.167-3.5-.567a3.02 3.02 0 0 1-.828-.587C4.108 17.765 4.009 16.114 4 13V9c.01-3.114.108-4.765 1.172-5.828Z" fill="currentColor" /><path d="M17.75 16a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75ZM6.25 16a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM5.5 9.5c0 1.414 0 2.121.44 2.56.439.44 1.146.44 2.56.44h7c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56V7c0-1.414 0-2.121-.44-2.56C17.622 4 16.915 4 15.5 4h-7c-1.414 0-2.121 0-2.56.44C5.5 4.878 5.5 5.585 5.5 7v2.5ZM2.4 11.8 4 13V9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8ZM21 9h-1.001L20 13l1.6-1.2a1 1 0 0 0 .4-.8v-1a1 1 0 0 0-1-1Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Bus