import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Microphone2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V8Z" stroke="currentColor" strokeWidth={1.5} /><path d="M13.5 8H17M13.5 11H17M7 8h2M7 11h2M12 19v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M20.75 10a.75.75 0 0 0-1.5 0h1.5Zm-16 0a.75.75 0 0 0-1.5 0h1.5Zm10.762 7.344a.75.75 0 1 0 .728 1.312l-.728-1.312ZM19.25 10v1h1.5v-1h-1.5Zm-14.5 1v-1h-1.5v1h1.5ZM12 18.25A7.25 7.25 0 0 1 4.75 11h-1.5A8.75 8.75 0 0 0 12 19.75v-1.5ZM19.25 11a7.248 7.248 0 0 1-3.738 6.344l.728 1.312A8.748 8.748 0 0 0 20.75 11h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V8Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M13.5 8H17M13.5 11H17M7 8h2M7 11h2M20 10v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0V8Z" stroke="currentColor" strokeWidth={1.5} /><path d="M13.5 8H17M13.5 11H17M7 8h2M7 11h2M20 10v1a8 8 0 1 1-16 0v-1M12 19v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.25 8a5.75 5.75 0 1 1 11.5 0v3a5.75 5.75 0 0 1-11.5 0V8Zm1.566-.75H9a.75.75 0 0 1 0 1.5H7.75v1.5H9a.75.75 0 0 1 0 1.5H7.816a4.251 4.251 0 0 0 8.368 0H13.5a.75.75 0 0 1 0-1.5h2.75v-1.5H13.5a.75.75 0 0 1 0-1.5h2.684a4.251 4.251 0 0 0-8.368 0ZM4 9.25a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718V22a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9.25Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.75 7.75A.75.75 0 0 0 9 7H6.298a5.751 5.751 0 0 1 11.403 0H13.5a.75.75 0 0 0 0 1.5h4.25V10H13.5a.75.75 0 0 0 0 1.5H17.701a5.751 5.751 0 0 1-11.403 0H9A.75.75 0 0 0 9 10H6.25V8.5H9a.75.75 0 0 0 .75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9Z" fill="currentColor" /><path opacity={0.5} d="M9.75 7.75A.75.75 0 0 0 9 7H6.298a5.751 5.751 0 0 1 11.403 0H13.5a.75.75 0 0 0 0 1.5h4.25V10H13.5a.75.75 0 0 0 0 1.5H17.701a5.751 5.751 0 0 1-11.403 0H9A.75.75 0 0 0 9 10H6.25V8.5H9a.75.75 0 0 0 .75-.75Z" fill="currentColor" /><path d="M12.75 10.75c0 .414.336.75.75.75H17.701l.049-1.5H13.5a.75.75 0 0 0-.75.75ZM12.75 7.75c0 .414.336.75.75.75h4.25L17.701 7H13.5a.75.75 0 0 0-.75.75ZM9.75 7.75A.75.75 0 0 0 9 7H6.298L6.25 8.5H9a.75.75 0 0 0 .75-.75ZM9.75 10.75A.75.75 0 0 0 9 10H6.25l.048 1.5H9a.75.75 0 0 0 .75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Microphone2