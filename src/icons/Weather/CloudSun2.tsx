import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CloudSun2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 16.353C22 19.472 19.442 22 16.286 22H11m3.381-10.973a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765 2 20.104 3.919 22 6.286 22H7m.116-8.391a5.576 5.576 0 0 1-.354-1.962C6.762 8.528 9.32 6 12.476 6c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228A5.724 5.724 0 0 1 20 12.061" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 4.5a3.5 3.5 0 0 0-1.5 6.663M8 4.5c.744 0 1.433.232 2 .627M8 4.5c-.744 0-1.433.232-2 .627M8 4.5c.954 0 1.818.381 2.45 1M8 4.5c-.954 0-1.818.381-2.45 1M8 4.5c1.273 0 2.388.68 3 1.696" stroke="currentColor" strokeWidth={1.5} /><path d="M7.5 2v.5M2.5 7.5H2M11.389 3.611l-.216.216M3.827 11.173l-.216.216M3.827 3.827l-.216-.216" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.381 11.027a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765 2 20.104 3.919 22 6.286 22h10C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338M7.116 13.609a5.576 5.576 0 0 1-.354-1.962C6.762 8.528 9.32 6 12.476 6c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M8 4.5a3.5 3.5 0 0 0-1.5 6.663M8 4.5c.744 0 1.433.232 2 .627M8 4.5c-.744 0-1.433.232-2 .627M8 4.5c.954 0 1.818.381 2.45 1M8 4.5c-.954 0-1.818.381-2.45 1M8 4.5c1.273 0 2.388.68 3 1.696" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M7.5 2v.5M2.5 7.5H2M11.389 3.611l-.216.216M3.827 11.173l-.216.216M3.827 3.827l-.216-.216" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.381 11.027a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765 2 20.104 3.919 22 6.286 22h10C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338M7.116 13.609a5.576 5.576 0 0 1-.354-1.962C6.762 8.528 9.32 6 12.476 6c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 4.5a3.5 3.5 0 0 0-1.5 6.663M8 4.5c.744 0 1.433.232 2 .627M8 4.5c-.744 0-1.433.232-2 .627M8 4.5c.954 0 1.818.381 2.45 1M8 4.5c-.954 0-1.818.381-2.45 1M8 4.5c1.273 0 2.388.68 3 1.696" stroke="currentColor" strokeWidth={1.5} /><path d="M7.5 2v.5M2.5 7.5H2M11.389 3.611l-.216.216M3.827 11.173l-.216.216M3.827 3.827l-.216-.216" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.5 1.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM3.08 3.08a.75.75 0 0 1 1.062 0l.216.217a.75.75 0 0 1-1.061 1.06l-.216-.216a.75.75 0 0 1 0-1.06Zm8.839 0a.75.75 0 0 1 0 1.061l-.216.216a.75.75 0 1 1-1.06-1.06l.215-.216a.75.75 0 0 1 1.061 0ZM8 5.25a2.734 2.734 0 0 0-1.925.786A2.74 2.74 0 0 0 5.25 8c0 .833.37 1.58.956 2.084a6.425 6.425 0 0 1 3.518-4.227A2.734 2.734 0 0 0 8 5.25Zm3.324.101a4.268 4.268 0 0 0-.895-.839A4.234 4.234 0 0 0 8 3.75a4.234 4.234 0 0 0-2.974 1.214 4.25 4.25 0 0 0 .987 6.793c.006.35.04.692.1 1.025-2.693.09-4.863 2.278-4.863 4.983 0 2.761 2.263 4.985 5.036 4.985h10c3.561 0 6.464-2.856 6.464-6.397 0-2.644-1.619-4.906-3.919-5.882-.559-2.977-3.197-5.221-6.355-5.221-.393 0-.778.035-1.152.101Zm5.834 4.663a4.962 4.962 0 0 0-4.682-3.264c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.331.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25 3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486 0 1.916 1.575 3.485 3.536 3.485h10c2.75 0 4.964-2.2 4.964-4.897 0-2.137-1.39-3.962-3.338-4.628a5.018 5.018 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416 6.515 6.515 0 0 1 3.024-.305ZM1.25 7.5A.75.75 0 0 1 2 6.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm3.108 3.143a.75.75 0 0 1 0 1.06l-.216.216a.75.75 0 0 1-1.061-1.06l.216-.216a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.5 1.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM3.08 3.08a.75.75 0 0 1 1.062 0l.216.217a.75.75 0 0 1-1.061 1.06l-.216-.216a.75.75 0 0 1 0-1.06Zm8.839 0a.75.75 0 0 1 0 1.061l-.216.216a.75.75 0 1 1-1.06-1.06l.215-.216a.75.75 0 0 1 1.061 0ZM1.25 7.5A.75.75 0 0 1 2 6.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm3.108 3.143a.75.75 0 0 1 0 1.06l-.216.216a.75.75 0 0 1-1.061-1.06l.216-.216a.75.75 0 0 1 1.06 0Z" fill="currentColor" /><path d="M16.286 22C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338C17.837 8.194 15.415 6 12.476 6 9.32 6 6.762 8.528 6.762 11.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765 2 20.104 3.919 22 6.286 22h10ZM9.81 5.004a3.5 3.5 0 0 0-4.426 5.322c.46-2.437 2.165-4.43 4.427-5.322Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M11.5 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M7.5 1.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM3.08 3.08a.75.75 0 0 1 1.062 0l.216.217a.75.75 0 0 1-1.061 1.06l-.216-.216a.75.75 0 0 1 0-1.06Zm8.839 0a.75.75 0 0 1 0 1.061l-.216.216a.75.75 0 1 1-1.06-1.06l.215-.216a.75.75 0 0 1 1.061 0ZM1.25 7.5A.75.75 0 0 1 2 6.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm3.108 3.143a.75.75 0 0 1 0 1.06l-.216.216a.75.75 0 0 1-1.061-1.06l.216-.216a.75.75 0 0 1 1.06 0Z" fill="currentColor" /><path d="M16.286 22C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338C17.837 8.194 15.415 6 12.476 6 9.32 6 6.762 8.528 6.762 11.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765 2 20.104 3.919 22 6.286 22h10Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CloudSun2