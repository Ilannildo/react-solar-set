import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UFO2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.731 9c.876-.75 2.274-1.373 3.996-1.79m-3.996 5.442C4.355 14.042 7.774 15 11.73 15c5.524 0 10.002-1.869 10.002-4.174 0-1.167-1.148-2.223-3-2.98a13.96 13.96 0 0 0-2.001-.635M11.729 9c-3.191 0-4.388-.532-4.802-.82-.146-.1-.2-.274-.2-.451A4.73 4.73 0 0 1 11.457 3H12a4.73 4.73 0 0 1 4.73 4.729c0 .177-.054.35-.2.452-.281.195-.922.502-2.3.68M11.729 21v-3m6.001 2v-3M5.727 20v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17.5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 7.21c2.989.723 5 2.071 5 3.616C22 13.131 17.523 15 12 15S2 13.13 2 10.826c0-1.545 2.011-2.893 5-3.615" stroke="currentColor" strokeWidth={1.5} /><path d="M7 7.729A4.729 4.729 0 0 1 11.729 3h.542A4.729 4.729 0 0 1 17 7.729c0 .177-.054.35-.2.451-.414.288-1.61.82-4.8.82-3.19 0-4.386-.532-4.8-.82-.146-.1-.2-.274-.2-.451Z" stroke="#8E93A6" strokeWidth={1.5} /><circle cx={12} cy={12} r={1} fill="#8E93A6" /><circle cx={7} cy={11} r={1} fill="currentColor" /><circle cx={17} cy={11} r={1} fill="currentColor" /><path d="M12 21v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M18 20v-3M6 20v-3" stroke="#8E93A6" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 7.21c2.989.723 5 2.071 5 3.616C22 13.131 17.523 15 12 15S2 13.13 2 10.826c0-1.545 2.011-2.893 5-3.615" stroke="currentColor" strokeWidth={1.5} /><path d="M7 7.729A4.729 4.729 0 0 1 11.729 3h.542A4.729 4.729 0 0 1 17 7.729c0 .177-.054.35-.2.451-.414.288-1.61.82-4.8.82-3.19 0-4.386-.532-4.8-.82-.146-.1-.2-.274-.2-.451Z" stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={12} r={1} fill="currentColor" /><circle cx={7} cy={11} r={1} fill="currentColor" /><circle cx={17} cy={11} r={1} fill="currentColor" /><path d="M12 21v-3M18 20v-3M6 20v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.367 6.599a5.48 5.48 0 0 1 5.362-4.349h.542a5.48 5.48 0 0 1 5.362 4.349c1.358.368 2.54.874 3.421 1.499.966.684 1.696 1.604 1.696 2.728 0 .837-.41 1.567-1.01 2.159-.596.588-1.42 1.084-2.38 1.485-1.922.801-4.524 1.28-7.36 1.28-2.836 0-5.438-.479-7.36-1.28-.96-.4-1.784-.897-2.38-1.485-.6-.592-1.01-1.322-1.01-2.159 0-1.124.73-2.044 1.696-2.728.882-.625 2.063-1.131 3.42-1.5Zm-.05 1.575c-1.042.318-1.892.714-2.504 1.148-.788.557-1.063 1.084-1.063 1.504 0 .316.15.684.563 1.09.415.41 1.054.814 1.905 1.17 1.698.708 4.095 1.164 6.782 1.164 2.687 0 5.084-.456 6.782-1.165.85-.355 1.49-.758 1.905-1.168.413-.407.563-.775.563-1.09 0-.421-.275-.948-1.063-1.505-.612-.434-1.462-.83-2.505-1.148-.07.221-.206.45-.453.622-.602.418-1.983.954-5.229.954s-4.627-.536-5.229-.954a1.176 1.176 0 0 1-.453-.622Zm1.434-.535c.387.206 1.503.611 4.249.611 2.746 0 3.862-.405 4.249-.611a3.979 3.979 0 0 0-3.978-3.889h-.542A3.979 3.979 0 0 0 7.75 7.639Zm8.499.097v-.001ZM6 16.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm12 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm-6 1a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.675 7.593C3.432 8.36 2 9.523 2 10.826 2 13.131 6.477 15 12 15s10-1.869 10-4.174c0-1.303-1.432-2.467-3.675-3.233-.124.29-.331.584-.668.819C16.869 8.96 15.3 9.5 12 9.5s-4.869-.54-5.657-1.088a1.893 1.893 0 0 1-.668-.819ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /><path d="M7.055 7.005A4.73 4.73 0 0 1 11.729 3h.542a4.73 4.73 0 0 1 4.674 4.005.429.429 0 0 1-.145.175c-.414.288-1.61.82-4.8.82-3.19 0-4.386-.532-4.8-.82a.429.429 0 0 1-.145-.175ZM6 16.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM18.75 17a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3ZM12 17.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.675 7.594C3.432 8.359 2 9.523 2 10.826 2 13.133 6.477 15 12 15s10-1.868 10-4.174c0-1.303-1.432-2.467-3.675-3.232-.124.29-.331.584-.668.818C16.869 8.96 15.3 9.5 12 9.5s-4.869-.54-5.657-1.088a1.893 1.893 0 0 1-.668-.818ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /><path d="M12 17.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M7.055 7.005A4.73 4.73 0 0 1 11.729 3h.542a4.73 4.73 0 0 1 4.674 4.005.429.429 0 0 1-.145.175c-.414.288-1.61.82-4.8.82-3.19 0-4.386-.532-4.8-.82a.429.429 0 0 1-.145-.175ZM6 16.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM18.75 17a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UFO2