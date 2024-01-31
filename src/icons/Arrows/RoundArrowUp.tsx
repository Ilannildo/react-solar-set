import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RoundArrowUp = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.25 16a.75.75 0 0 0 1.5 0h-1.5ZM12 8l.53-.53a.75.75 0 0 0-1.06 0L12 8Zm2.47 3.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-6-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM12.75 16V8h-1.5v8h1.5Zm-1.28-7.47 3 3 1.06-1.06-3-3-1.06 1.06Zm0-1.06-3 3 1.06 1.06 3-3-1.06-1.06Z" fill="currentColor" /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M11.25 16a.75.75 0 0 0 1.5 0h-1.5ZM12 8l.53-.53a.75.75 0 0 0-1.06 0L12 8Zm2.47 3.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-6-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM12.75 16V8h-1.5v8h1.5Zm-1.28-7.47 3 3 1.06-1.06-3-3-1.06 1.06Zm0-1.06-3 3 1.06 1.06 3-3-1.06-1.06Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M11.25 16a.75.75 0 0 0 1.5 0h-1.5ZM12 8l.53-.53a.75.75 0 0 0-1.06 0L12 8Zm2.47 3.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-6-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM12.75 16V8h-1.5v8h1.5Zm-1.28-7.47 3 3 1.06-1.06-3-3-1.06 1.06Zm0-1.06-3 3 1.06 1.06 3-3-1.06-1.06Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm7.22-1.53 3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06-1.06Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Zm-13.53-.47a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" fill="currentColor" /><path d="M15.53 10.47a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RoundArrowUp