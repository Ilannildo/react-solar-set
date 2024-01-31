import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const KeyMinimalistic2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.064 12.5A7 7 0 1 0 18 15.326" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={15} cy={9} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="m3.5 20.5 6-6M6 21l-1.5-1.5m2-2L8 19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={15} cy={9} r={7} stroke="currentColor" strokeWidth={1.5} /><circle opacity={0.5} cx={15} cy={9} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="m3.5 20.5 6-6M6 21l-1.5-1.5m2-2L8 19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={15} cy={9} r={7} stroke="currentColor" strokeWidth={1.5} /><circle cx={15} cy={9} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="m3.5 20.5 6-6M6 21l-1.5-1.5m2-2L8 19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5ZM7.25 9a7.75 7.75 0 1 1 2.824 5.983.711.711 0 0 1-.044.047L7.56 17.5l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.94.94.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.47.47a.75.75 0 0 1-1.06-1.06l1-1 5-5a.73.73 0 0 1 .047-.044A7.718 7.718 0 0 1 7.25 9ZM15 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15 16a7 7 0 1 0-5.452-2.609L3.97 18.97l-1 1a.75.75 0 1 0 1.06 1.061l.47-.47.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97.94-.94.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97 3.049-3.048A6.971 6.971 0 0 0 15 16Zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" /><path opacity={0.5} d="M10.609 14.452a7.045 7.045 0 0 1-1.06-1.06l-6.58 6.578a.75.75 0 1 0 1.061 1.06l.47-.47.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97.94-.94.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97 3.049-3.048Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default KeyMinimalistic2