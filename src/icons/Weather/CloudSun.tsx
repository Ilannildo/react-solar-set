import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CloudSun = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 14.353C22 17.472 19.442 20 16.286 20H11m3.381-10.973a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765 2 18.104 3.919 20 6.286 20H7m.116-8.391a5.577 5.577 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228A5.724 5.724 0 0 1 20 10.061" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M11 4a5 5 0 1 0-6 7.584" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.381 9.027a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765 2 18.104 3.919 20 6.286 20h10C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338M7.116 11.609a5.577 5.577 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M11 4a5 5 0 1 0-6 7.584" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.381 9.027a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765 2 18.104 3.919 20 6.286 20h10C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338M7.116 11.609a5.577 5.577 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M11 4a5 5 0 1 0-6 7.584" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7 2.75a4.25 4.25 0 0 0-1.734 8.132c.275-.056.558-.09.848-.1a6.367 6.367 0 0 1-.102-1.135c0-2.599 1.563-4.829 3.803-5.831A4.232 4.232 0 0 0 7 2.75Zm4.43.584a5.75 5.75 0 1 0-7.895 8.255 4.966 4.966 0 0 0-2.285 4.176c0 2.761 2.263 4.985 5.036 4.985h10c3.561 0 6.464-2.856 6.464-6.397 0-2.644-1.619-4.905-3.919-5.882-.559-2.977-3.197-5.221-6.355-5.221a6.57 6.57 0 0 0-1.046.084Zm5.728 4.68a4.962 4.962 0 0 0-4.682-3.264c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.331.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25 3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486 0 1.916 1.575 3.485 3.536 3.485h10c2.75 0 4.964-2.2 4.964-4.897 0-2.137-1.39-3.962-3.338-4.628a5.018 5.018 0 0 0-2.56-.183c-.407.077-.835-.124-.971-.515-.137-.39.07-.823.473-.914a6.549 6.549 0 0 1 2.304-.1Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.286 20C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338C17.837 6.194 15.415 4 12.476 4 9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765 2 18.104 3.919 20 6.286 20h10Z" fill="currentColor" /><path d="M9.94 2.955a5 5 0 0 0-6.327 7.723 5.788 5.788 0 0 1 1.664-.561 7.169 7.169 0 0 1-.015-.47c0-3.073 1.951-5.677 4.678-6.692Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={7} cy={7} r={5} fill="currentColor" /><path d="M16.286 20C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338C17.837 6.194 15.415 4 12.476 4 9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765 2 18.104 3.919 20 6.286 20h10Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CloudSun