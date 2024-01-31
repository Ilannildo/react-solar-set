import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Bowling = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={7} r={1.5} transform="rotate(-90 12 7)" stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={12} r={1.5} transform="rotate(-90 12 12)" stroke="currentColor" strokeWidth={1.5} /><path d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><circle opacity={0.5} cx={12} cy={7} r={1.5} transform="rotate(-90 12 7)" stroke="currentColor" strokeWidth={1.5} /><circle opacity={0.5} cx={12} cy={12} r={1.5} transform="rotate(-90 12 12)" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={7} r={1.5} transform="rotate(-90 12 7)" stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={12} r={1.5} transform="rotate(-90 12 12)" stroke="currentColor" strokeWidth={1.5} /><path d="M8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 6.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM9.75 7a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM8 8.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM12 11.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm1.5-10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-2.5 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="currentColor" /><path d="M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Bowling