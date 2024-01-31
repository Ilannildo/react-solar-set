import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RecordCircle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M16 12a4 4 0 1 1-2-3.465" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-14.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Zm1.5 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RecordCircle