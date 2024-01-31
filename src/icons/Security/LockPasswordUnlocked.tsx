import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const LockPasswordUnlocked = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8c0-.34.028-.675.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z" stroke="currentColor" strokeWidth={1.5} /><g opacity={0.5} fill="currentColor"><path d="M9 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></g><path opacity={0.5} d="M6 10V8a6 6 0 0 1 11.811-1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6 10V8a6 6 0 0 1 11.811-1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 16h.009m3.982 0H12m3.991 0H16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v1.303c-.227.016-.44.036-.642.064-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h8.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117h-8.11c-.423 0-.821 0-1.195.003V8Zm-1.942 2.853c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4-.101.755-.103 1.756-.103 3.191 0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191 0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055c-1.115.083-1.84.293-2.371.824C2 11.757 2 13.172 2 16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8c-.452 0-.867 0-1.25.004V8ZM8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z" fill="currentColor" /><path d="M8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a5.25 5.25 0 0 1 10.335-1.313.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055a23.57 23.57 0 0 1 1.5-.051V8Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default LockPasswordUnlocked