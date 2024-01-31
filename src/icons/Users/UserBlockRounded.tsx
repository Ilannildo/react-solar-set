import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UserBlockRounded = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="m19.95 16.05-3.9 3.9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M13 20.96c-.327.026-.66.04-1 .04-3.866 0-7-1.79-7-4 0-.345.077-.68.22-1m9.28-2.737c-.776-.17-1.62-.263-2.5-.263-1.074 0-2.09.138-3 .385" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><circle cx={17} cy={18} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="m20 15-6 6" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M14 20.834c-.634.108-1.305.166-2 .166-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><circle cx={17} cy={18} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="m20 15-6 6M14 20.834c-.634.108-1.305.166-2 .166-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm1.72.97 3-3a2.25 2.25 0 0 0-3 3ZM18 20.25a2.24 2.24 0 0 1-.97-.22l3-3A2.25 2.25 0 0 1 18 20.25Z" fill="currentColor" /><path d="M5.75 17c0-.72.517-1.517 1.672-2.177 1.134-.648 2.751-1.073 4.578-1.073.829 0 1.618.088 2.34.245a.75.75 0 1 0 .32-1.465 12.5 12.5 0 0 0-2.66-.28c-2.04 0-3.922.47-5.322 1.27C5.3 14.308 4.25 15.51 4.25 17s1.05 2.692 2.428 3.48c1.4.8 3.283 1.27 5.322 1.27.36 0 .714-.015 1.061-.043a.75.75 0 1 0-.122-1.495c-.306.025-.62.038-.939.038-1.827 0-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={6} r={4} fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18 15.75a2.25 2.25 0 0 0-2.03 3.22l3-3a2.24 2.24 0 0 0-.97-.22Zm2.03 1.28-3 3a2.25 2.25 0 0 0 3-3Zm-5.78.97a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" fill="currentColor" /><path d="M15.327 13.48A5.247 5.247 0 0 0 12.75 18c0 1.07.32 2.064.869 2.893-.52.07-1.062.108-1.619.108-3.866 0-7-1.79-7-4s3.134-4 7-4c1.204 0 2.337.174 3.327.48Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={6} r={4} fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18 15.75a2.25 2.25 0 0 0-2.03 3.22l3-3a2.24 2.24 0 0 0-.97-.22Zm2.03 1.28-3 3a2.25 2.25 0 0 0 3-3Zm-5.78.97a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" fill="currentColor" /><path opacity={0.5} d="M17.216 14.332a3.751 3.751 0 0 0-1.97 6.213c-.97.29-2.075.455-3.246.455-3.866 0-7-1.79-7-4s3.134-4 7-4c2.072 0 3.934.514 5.216 1.332Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UserBlockRounded