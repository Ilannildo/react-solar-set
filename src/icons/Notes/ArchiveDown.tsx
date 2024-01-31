import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ArchiveDown = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828C18.157 21 16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293C2 3.586 2 4.057 2 5c0 .943 0 1.414.293 1.707C2.586 7 3.057 7 4 7h16c.943 0 1.414 0 1.707-.293C22 6.414 22 5.943 22 5c0-.943 0-1.414-.293-1.707C21.414 3 20.943 3 20 3h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 7v9m0 0 3-3.333M12 16l-3-3.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828C18.157 21 16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172C3.5 18.657 3.5 16.771 3.5 13V7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 7v9m0 0 3-3.333M12 16l-3-3.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828C18.157 21 16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172C3.5 18.657 3.5 16.771 3.5 13V7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 7v9m0 0 3-3.333M12 16l-3-3.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.955 2.25H20.045c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152-.048.356-.16.731-.47 1.04-.293.294-.647.41-.987.462v5.357c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-1.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V7.7c-.34-.052-.694-.168-.987-.462-.31-.309-.422-.684-.47-1.04-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043Zm.295 5.5V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h1c1.907 0 3.261-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289V7.75h-7v6.296l1.693-1.881a.75.75 0 0 1 1.114 1.003l-3 3.334a.75.75 0 0 1-1.114 0l-3-3.334a.75.75 0 0 1 1.114-1.003l1.693 1.88V7.75h-7ZM20 6.25c.493 0 .787-.002.997-.03a.704.704 0 0 0 .177-.042l.003-.001.001-.003a.703.703 0 0 0 .042-.177c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.703.703 0 0 0-.042-.177l-.001-.003-.003-.001a.704.704 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03H4c-.493 0-.787.002-.997.03a.706.706 0 0 0-.177.042l-.003.001-.001.003a.706.706 0 0 0-.042.177c-.028.21-.03.504-.03.997s.002.787.03.997a.706.706 0 0 0 .042.177l.001.003.003.001a.706.706 0 0 0 .177.042c.21.028.504.03.997.03h16ZM2.823 6.177Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5ZM20.069 8.5c.141 0 .286 0 .431-.002V13c0 3.771 0 5.657-1.172 6.828C18.157 21 16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172C3.5 18.657 3.5 16.771 3.5 13V8.498c.145.002.29.002.431.002h7.319v6.545l-1.693-1.88a.75.75 0 1 0-1.114 1.003l3 3.334a.75.75 0 0 0 1.114 0l3-3.334a.75.75 0 0 0-1.114-1.003l-1.693 1.88V8.5h7.319Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.557 17.502a.75.75 0 0 1-1.114 0l-3-3.334a.75.75 0 0 1 1.114-1.003l1.693 1.88V7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828C5.843 21 7.729 21 11.5 21h1c3.771 0 5.657 0 6.828-1.172C20.5 18.657 20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7h-7.25v8.046l1.693-1.881a.75.75 0 0 1 1.114 1.003l-3 3.334Z" fill="currentColor" /><path d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5Z" fill="currentColor" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ArchiveDown