import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MapPointWave = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.875 12.573C5.308 11.25 5 9.84 5 8.515 5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.277 3.277 0 0 1-2.56 0c-1.113-.476-2.099-1.225-2.925-2.14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M20.96 15.5c.666.602 1.04 1.282 1.04 2 0 .925-.62 1.785-1.684 2.5M3.04 15.5C2.374 16.102 2 16.782 2 17.5 2 19.985 6.477 22 12 22c1.653 0 3.212-.18 4.586-.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.277 3.277 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M20.96 15.5c.666.602 1.04 1.282 1.04 2 0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-.718.374-1.398 1.04-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.277 3.277 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M20.96 15.5c.666.602 1.04 1.282 1.04 2 0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-.718.374-1.398 1.04-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.515C4.25 4.453 7.771 1.25 12 1.25s7.75 3.203 7.75 7.265c0 3.81-2.363 8.285-6.175 9.914-1.001.428-2.149.428-3.15 0C6.613 16.8 4.25 12.326 4.25 8.515ZM12 2.75c-3.503 0-6.25 2.63-6.25 5.765 0 3.328 2.105 7.185 5.265 8.535a2.526 2.526 0 0 0 1.97 0c3.16-1.35 5.265-5.207 5.265-8.535 0-3.134-2.747-5.765-6.25-5.765Zm0 5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM9.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm-5.655 5.997a.75.75 0 0 1-.052 1.059c-.568.514-.793 1.006-.793 1.444 0 .764.724 1.705 2.487 2.498C6.929 20.76 9.32 21.25 12 21.25c2.68 0 5.071-.49 6.763-1.252 1.763-.793 2.487-1.734 2.487-2.498 0-.438-.225-.93-.793-1.444a.75.75 0 0 1 1.007-1.112c.763.691 1.286 1.557 1.286 2.556 0 1.722-1.515 3.03-3.371 3.866-1.927.867-4.537 1.384-7.379 1.384-2.842 0-5.452-.517-7.379-1.384C2.765 20.53 1.25 19.222 1.25 17.5c0-.999.523-1.865 1.286-2.556a.75.75 0 0 1 1.06.053Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22c5.523 0 10-2.014 10-4.5 0-1.266-1.163-2.41-3.035-3.229-1.142 2.096-2.883 3.903-5.095 4.848a4.775 4.775 0 0 1-3.74 0c-2.212-.945-3.953-2.752-5.095-4.848C3.163 15.09 2 16.235 2 17.502 2 19.985 6.477 22 12 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.277 3.277 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515ZM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M19.716 20.362C21.143 19.585 22 18.587 22 17.5c0-1.152-.963-2.204-2.546-3C17.623 13.58 14.962 13 12 13c-2.962 0-5.623.58-7.454 1.5C2.963 15.296 2 16.348 2 17.5s.963 2.204 2.546 3C6.377 21.42 9.038 22 12 22c3.107 0 5.882-.637 7.716-1.638Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.277 3.277 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515ZM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MapPointWave