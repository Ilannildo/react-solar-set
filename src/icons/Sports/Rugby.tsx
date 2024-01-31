import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Rugby = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.38 5.38c-2.128 2.13-2.993 5.194-3.27 8.077M13.457 2.11c1.67-.16 3.28-.125 4.612-.023a4.136 4.136 0 0 1 3.844 3.844 27.13 27.13 0 0 1-.023 4.612M13.457 2.11l8.433 8.433M13.457 2.11c-1.489.143-3.026.443-4.457.992m12.89 7.44c-.277 2.884-1.142 5.949-3.27 8.077m-8.077 3.271c-1.67.16-3.28.125-4.612.023a4.136 4.136 0 0 1-3.844-3.844 27.141 27.141 0 0 1 .023-4.612m8.433 8.433L2.11 13.457m8.433 8.433c1.489-.143 3.026-.443 4.457-.992M15.31 8.69l-6.62 6.62m0-2.837 2.837 2.837m-.945-4.728 2.836 2.836m-.945-4.728 2.837 2.837" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.457 2.11c-2.883.277-5.948 1.142-8.076 3.27-2.13 2.13-2.994 5.194-3.271 8.077M13.457 2.11c1.67-.16 3.28-.125 4.612-.023a4.136 4.136 0 0 1 3.844 3.844 27.13 27.13 0 0 1-.023 4.612M13.457 2.11l8.433 8.433m0 0c-.277 2.883-1.142 5.948-3.27 8.076-2.13 2.13-5.194 2.994-8.077 3.271m0 0c-1.67.16-3.28.125-4.612.023a4.136 4.136 0 0 1-3.844-3.844 27.141 27.141 0 0 1 .023-4.612m8.433 8.433L2.11 13.457" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m15.31 8.69-6.62 6.62m0-2.837 2.837 2.837m-.945-4.728 2.836 2.836m-.945-4.728 2.837 2.837" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.457 2.11c-2.883.277-5.948 1.142-8.076 3.27-2.13 2.13-2.994 5.194-3.271 8.077M13.457 2.11c1.67-.16 3.28-.125 4.612-.023a4.136 4.136 0 0 1 3.844 3.844 27.13 27.13 0 0 1-.023 4.612M13.457 2.11l8.433 8.433m0 0c-.277 2.883-1.142 5.948-3.27 8.076-2.13 2.13-5.194 2.994-8.077 3.271m0 0c-1.67.16-3.28.125-4.612.023a4.136 4.136 0 0 1-3.844-3.844 27.141 27.141 0 0 1 .023-4.612m8.433 8.433L2.11 13.457M15.31 8.69l-6.62 6.62m0-2.837 2.837 2.837m-.945-4.728 2.836 2.836m-.945-4.728 2.837 2.837" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m15.166 2.758 6.076 6.076a28.099 28.099 0 0 0-.077-2.845 3.386 3.386 0 0 0-3.154-3.154 28.122 28.122 0 0 0-2.845-.077Zm5.941 8.062L13.18 2.893c-2.697.305-5.4 1.15-7.269 3.018-1.869 1.869-2.713 4.572-3.018 7.269l7.927 7.927c2.697-.305 5.4-1.15 7.269-3.018 1.869-1.869 2.713-4.572 3.018-7.269ZM8.834 21.242l-6.076-6.076c-.026 1.022.012 1.99.077 2.845a3.386 3.386 0 0 0 3.154 3.154c.855.065 1.823.103 2.845.077Zm4.551-19.879a27.886 27.886 0 0 1 4.74-.024 4.886 4.886 0 0 1 4.536 4.535 27.89 27.89 0 0 1-.024 4.74c-.285 2.957-1.18 6.227-3.487 8.536-2.309 2.308-5.58 3.202-8.535 3.487a27.89 27.89 0 0 1-4.74.024 4.886 4.886 0 0 1-4.536-4.535 27.886 27.886 0 0 1 .024-4.74c.285-2.957 1.18-6.227 3.487-8.536 2.309-2.308 5.58-3.202 8.535-3.487ZM11.943 8.16a.75.75 0 0 1 1.06 0l.888.888.889-.888a.75.75 0 1 1 1.06 1.06l-.888.889.888.888a.75.75 0 1 1-1.06 1.06l-.889-.888-.83.831.888.888a.75.75 0 0 1-1.06 1.06L12 13.062l-.83.83.888.889a.75.75 0 1 1-1.061 1.06l-.888-.888-.888.888a.75.75 0 0 1-1.06-1.06l.887-.889-.888-.888a.75.75 0 1 1 1.06-1.06l.889.888.83-.83-.888-.889a.75.75 0 0 1 1.061-1.06l.888.887.83-.83-.887-.888a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.913 5.931a4.136 4.136 0 0 0-3.844-3.844 28.185 28.185 0 0 0-3.624-.05l7.519 7.518c.07-1.312.03-2.557-.051-3.624ZM2.087 18.069a4.136 4.136 0 0 0 3.844 3.844c1.068.081 2.313.12 3.625.05l-7.52-7.52c-.07 1.313-.03 2.558.051 3.626Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.222 12.509c.369-2.593 1.262-5.232 3.159-7.128 1.896-1.897 4.536-2.79 7.128-3.159l9.269 9.269c-.369 2.592-1.262 5.232-3.159 7.128-1.896 1.897-4.535 2.79-7.128 3.159l-9.269-9.27Zm9.72-4.349a.75.75 0 0 1 1.061 0l.888.888.889-.888a.75.75 0 1 1 1.06 1.06l-.888.889.888.888a.75.75 0 1 1-1.06 1.06l-.889-.888-.83.831.888.888a.75.75 0 0 1-1.06 1.06L12 13.062l-.83.83.888.889a.75.75 0 1 1-1.061 1.06l-.888-.888-.888.888a.75.75 0 0 1-1.06-1.06l.887-.889-.888-.888a.75.75 0 1 1 1.06-1.06l.889.888.83-.83-.888-.889a.75.75 0 0 1 1.061-1.06l.888.887.83-.83-.887-.888a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M13.457 2.11c-2.884.277-5.948 1.141-8.077 3.27-2.129 2.13-2.993 5.193-3.27 8.077l8.432 8.433c2.884-.278 5.948-1.142 8.077-3.271 2.129-2.129 2.993-5.193 3.27-8.077L13.458 2.11Z" fill="currentColor" /><path d="M18.069 2.087a27.141 27.141 0 0 0-4.612.023l8.433 8.433c.16-1.67.125-3.28.023-4.612a4.136 4.136 0 0 0-3.844-3.844ZM5.931 21.913a27.13 27.13 0 0 0 4.612-.023L2.11 13.457c-.16 1.67-.125 3.28-.023 4.612a4.136 4.136 0 0 0 3.844 3.844Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.943 8.16a.75.75 0 0 1 1.06 0l.888.888.889-.888a.75.75 0 1 1 1.06 1.06l-.888.889.888.888a.75.75 0 1 1-1.06 1.06l-.889-.888-.83.831.888.888a.75.75 0 0 1-1.06 1.06L12 13.062l-.83.83.888.889a.75.75 0 1 1-1.061 1.06l-.888-.888-.888.888a.75.75 0 0 1-1.06-1.06l.887-.889-.888-.888a.75.75 0 1 1 1.06-1.06l.889.888.83-.83-.888-.889a.75.75 0 0 1 1.061-1.06l.888.887.83-.83-.887-.888a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Rugby