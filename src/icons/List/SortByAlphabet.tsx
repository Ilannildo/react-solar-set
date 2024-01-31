import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SortByAlphabet = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 7H3M10 12H3M8 17H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M11.316 16.692a.75.75 0 1 0 1.368.616l-1.368-.616ZM16.5 7l.684-.308a.75.75 0 0 0-1.368 0L16.5 7Zm3.816 10.308a.75.75 0 1 0 1.368-.616l-1.368.616Zm-.952-3.944.684-.308-.684.308Zm-5.728-.75a.75.75 0 0 0 0 1.5v-1.5Zm-.952 4.694 4.5-10-1.368-.616-4.5 10 1.368.616Zm9-.616-1.636-3.636-1.368.615 1.636 3.637 1.368-.616Zm-1.636-3.636-2.864-6.364-1.368.616 2.864 6.363 1.368-.615Zm-.684-.442h-5.728v1.5h5.728v-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M13 7H3M10 12H3M8 17H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M11.316 16.692a.75.75 0 1 0 1.368.616l-1.368-.616ZM16.5 7l.684-.308a.75.75 0 0 0-1.368 0L16.5 7Zm3.816 10.308a.75.75 0 1 0 1.368-.616l-1.368.616Zm-.952-3.944.684-.308-.684.308Zm-5.728-.75a.75.75 0 0 0 0 1.5v-1.5Zm-.952 4.694 4.5-10-1.368-.616-4.5 10 1.368.616Zm9-.616-1.636-3.636-1.368.615 1.636 3.637 1.368-.616Zm-1.636-3.636-2.864-6.364-1.368.616 2.864 6.363 1.368-.615Zm-.684-.442h-5.728v1.5h5.728v-1.5Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 7H3M10 12H3M8 17H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M11.316 16.692a.75.75 0 1 0 1.368.616l-1.368-.616ZM16.5 7l.684-.308a.75.75 0 0 0-1.368 0L16.5 7Zm3.816 10.308a.75.75 0 1 0 1.368-.616l-1.368.616Zm-.952-3.944.684-.308-.684.308Zm-5.728-.75a.75.75 0 0 0 0 1.5v-1.5Zm-.952 4.694 4.5-10-1.368-.616-4.5 10 1.368.616Zm9-.616-1.636-3.636-1.368.615 1.636 3.637 1.368-.616Zm-1.636-3.636-2.864-6.364-1.368.616 2.864 6.363 1.368-.615Zm-.684-.442h-5.728v1.5h5.728v-1.5Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7Zm14.25-.75a.75.75 0 0 1 .684.442l4.5 10a.75.75 0 1 1-1.368.616l-1.437-3.194H14.12l-1.437 3.194a.75.75 0 1 1-1.368-.616l4.5-10a.75.75 0 0 1 .684-.442Zm-1.704 6.364h3.408L16.5 8.828l-1.704 3.786ZM2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7Zm14.25-.75a.75.75 0 0 1 .684.442l4.5 10a.75.75 0 1 1-1.368.616l-1.437-3.194H14.12l-1.437 3.194a.75.75 0 1 1-1.368-.616l4.5-10a.75.75 0 0 1 .684-.442Zm-1.704 6.364h3.408L16.5 8.828l-1.704 3.786ZM2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.184 6.692a.75.75 0 0 0-1.368 0l-4.5 10a.75.75 0 0 0 1.368.616l1.438-3.194h4.757l1.437 3.194a.75.75 0 0 0 1.368-.616l-4.5-10ZM16.5 8.828l-1.704 3.786h3.408L16.5 8.828Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7Z" fill="currentColor" /><path opacity={0.5} d="M2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM2.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SortByAlphabet