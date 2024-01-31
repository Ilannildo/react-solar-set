import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Accessibility = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M18 10s-3.537 1.5-6 1.5S6 10 6 10M12 12v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M14 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M18 10s-3.537 1.5-6 1.5S6 10 6 10M12 12v1.452a3 3 0 0 0 .476 1.623L15 19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 12v1.452a3 3 0 0 1-.476 1.623L9 19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M14 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M18 10s-3.537 1.5-6 1.5S6 10 6 10M12 12v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM12 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" fill="currentColor" /><path d="M5.31 9.707a.75.75 0 0 1 .983-.398l.001.001.006.003.027.011.11.045a26.572 26.572 0 0 0 1.864.666c1.179.37 2.588.715 3.699.715 1.111 0 2.52-.345 3.698-.715a26.569 26.569 0 0 0 1.974-.711l.028-.011.006-.003h.001a.75.75 0 0 1 .586 1.38l-.004.002-.01.004-.032.014-.123.05a28.085 28.085 0 0 1-1.976.706c-.988.31-2.236.639-3.398.747v1.24c0 .43.124.853.357 1.216l2.524 3.925a.75.75 0 0 1-1.262.812L12 15.72l-2.37 3.686a.75.75 0 1 1-1.26-.812l2.523-3.925a2.25 2.25 0 0 0 .357-1.217v-1.239c-1.162-.108-2.41-.436-3.399-.747a28.1 28.1 0 0 1-2.098-.756l-.033-.014-.009-.004-.004-.001a.75.75 0 0 1-.397-.984Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5.707.31a.75.75 0 0 0-.586 1.38l.002.001.002.001.01.004.032.014a15.047 15.047 0 0 0 .572.225c.38.145.914.338 1.527.53.988.312 2.236.64 3.398.748v1.24c0 .43-.124.853-.357 1.216l-2.524 3.925a.75.75 0 0 0 1.262.812l2.37-3.686 2.368 3.686a.75.75 0 0 0 1.262-.812l-2.524-3.925a2.25 2.25 0 0 1-.357-1.217v-1.239c1.162-.108 2.41-.436 3.399-.748a28.01 28.01 0 0 0 2.098-.755l.033-.014.01-.004.002-.001a.75.75 0 0 0-.585-1.381l-.007.003-.027.011-.11.045a26.576 26.576 0 0 1-1.864.666c-1.178.37-2.588.715-3.699.715-1.111 0-2.52-.345-3.698-.715a26.578 26.578 0 0 1-1.974-.711L6.3 9.313l-.006-.003h-.001Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" fill="currentColor" /><path d="M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6.293 9.31a.75.75 0 0 0-.586 1.38l.002.001.002.001.01.004.032.014a15.047 15.047 0 0 0 .572.225c.38.145.914.338 1.527.53.988.312 2.236.64 3.398.748v1.24c0 .43-.124.853-.357 1.216l-2.524 3.925a.75.75 0 0 0 1.262.812l2.37-3.686 2.368 3.686a.75.75 0 0 0 1.262-.812l-2.524-3.925a2.25 2.25 0 0 1-.357-1.217v-1.239c1.162-.108 2.41-.436 3.399-.748a28.01 28.01 0 0 0 2.098-.755l.033-.014.01-.004.002-.001a.75.75 0 0 0-.585-1.381l-.007.003-.027.011-.11.045a26.576 26.576 0 0 1-1.864.666c-1.178.37-2.588.715-3.699.715-1.111 0-2.52-.345-3.698-.715a26.578 26.578 0 0 1-1.974-.711L6.3 9.313l-.006-.003h-.001Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Accessibility