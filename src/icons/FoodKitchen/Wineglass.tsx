import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Wineglass = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 15.286a.75.75 0 0 0-1.5 0h1.5Zm3 6.464a.75.75 0 0 0 0-1.5v1.5Zm-7.5-1.5a.75.75 0 0 0 0 1.5v-1.5ZM8 3.75a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-.75 13.036V21h1.5v-5.714h-1.5Zm4.5 4.964H12v1.5h3.75v-1.5Zm-3.75 0H8.25v1.5H12v-1.5Zm6.25-15.355V8h1.5V4.895h-1.5ZM5.75 8V4.895h-1.5V8h1.5ZM12 14.25A6.25 6.25 0 0 1 5.75 8h-1.5A7.75 7.75 0 0 0 12 15.75v-1.5ZM18.25 8A6.25 6.25 0 0 1 12 14.25v1.5A7.75 7.75 0 0 0 19.75 8h-1.5Zm-1.145-4.25c.633 0 1.145.513 1.145 1.145h1.5a2.645 2.645 0 0 0-2.645-2.645v1.5Zm-10.21-1.5A2.645 2.645 0 0 0 4.25 4.895h1.5c0-.632.513-1.145 1.145-1.145v-1.5Zm0 1.5H8v-1.5H6.895v1.5Zm5.105 0h5.105v-1.5H12v1.5Z" fill="currentColor" /><path d="M5.5 9S7.581 8.087 9 8c1.233-.076 2.116.462 3 1m6.5 0s-2.081.913-3.5 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.75 21.75a.75.75 0 0 0 0-1.5v1.5Zm-7.5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm7.5 0H12v1.5h3.75v-1.5Zm-3.75 0H8.25v1.5H12v-1.5ZM6.895 3.75h10.21v-1.5H6.895v1.5ZM18.25 4.895V8h1.5V4.895h-1.5ZM5.75 8V4.895h-1.5V8h1.5ZM12 14.25A6.25 6.25 0 0 1 5.75 8h-1.5A7.75 7.75 0 0 0 12 15.75v-1.5ZM18.25 8A6.25 6.25 0 0 1 12 14.25v1.5A7.75 7.75 0 0 0 19.75 8h-1.5Zm-1.145-4.25c.633 0 1.145.513 1.145 1.145h1.5a2.645 2.645 0 0 0-2.645-2.645v1.5Zm-10.21-1.5A2.645 2.645 0 0 0 4.25 4.895h1.5c0-.632.513-1.145 1.145-1.145v-1.5Z" fill="currentColor" /><path opacity={0.5} d="M12.75 15.286a.75.75 0 0 0-1.5 0h1.5ZM11.25 21a.75.75 0 0 0 1.5 0h-1.5Zm0-5.714V21h1.5v-5.714h-1.5Z" fill="currentColor" /><path opacity={0.5} d="M5.5 9S7.581 8.087 9 8c2.465-.152 3.535 2.152 6 2 1.419-.087 3.5-1 3.5-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 15.286a.75.75 0 0 0-1.5 0h1.5Zm3 6.464a.75.75 0 0 0 0-1.5v1.5Zm-7.5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3-4.964V21h1.5v-5.714h-1.5Zm4.5 4.964H12v1.5h3.75v-1.5Zm-3.75 0H8.25v1.5H12v-1.5ZM6.895 3.75h10.21v-1.5H6.895v1.5ZM18.25 4.895V8h1.5V4.895h-1.5ZM5.75 8V4.895h-1.5V8h1.5ZM12 14.25A6.25 6.25 0 0 1 5.75 8h-1.5A7.75 7.75 0 0 0 12 15.75v-1.5ZM18.25 8A6.25 6.25 0 0 1 12 14.25v1.5A7.75 7.75 0 0 0 19.75 8h-1.5Zm-1.145-4.25c.633 0 1.145.513 1.145 1.145h1.5a2.645 2.645 0 0 0-2.645-2.645v1.5Zm-10.21-1.5A2.645 2.645 0 0 0 4.25 4.895h1.5c0-.632.513-1.145 1.145-1.145v-1.5Z" fill="currentColor" /><path d="M5.5 9S7.581 8.087 9 8c2.465-.152 3.535 2.152 6 2 1.419-.087 3.5-1 3.5-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.25 4.895A2.645 2.645 0 0 1 6.895 2.25h10.21a2.645 2.645 0 0 1 2.645 2.645V8a7.751 7.751 0 0 1-7 7.714v4.536h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-4.536A7.751 7.751 0 0 1 4.25 8V4.895ZM6.895 3.75c-.632 0-1.145.513-1.145 1.145v3.193c.203-.078.45-.17.725-.265.708-.243 1.663-.521 2.479-.572 1.469-.09 2.528.555 3.389 1.08l.047.028c.898.547 1.594.952 2.564.892.603-.037 1.398-.258 2.085-.493a17.933 17.933 0 0 0 1.14-.437l.016-.006.003-.002a.802.802 0 0 1 .045-.018A6.29 6.29 0 0 0 18.25 8V4.895c0-.632-.512-1.145-1.145-1.145H6.895Zm11.014 6.29a6.253 6.253 0 0 1-11.947-.42l.164-.068c.208-.083.5-.195.835-.31.687-.235 1.482-.456 2.085-.493.97-.06 1.666.345 2.564.892l.047.028c.86.524 1.92 1.17 3.389 1.08.816-.05 1.77-.33 2.48-.572.134-.047.263-.092.383-.137Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 4.895C5 3.848 5.848 3 6.895 3h10.21C18.152 3 19 3.848 19 4.895V8c0 .084-.002.167-.004.25a.75.75 0 0 0-.277.055l-.004.001-.017.007a9.71 9.71 0 0 1-.331.126 20.47 20.47 0 0 1-.904.31c-.741.234-1.609.457-2.275.495-1.084.062-1.86-.358-2.82-.898l-.044-.024c-.933-.524-2.05-1.151-3.597-1.064-.862.05-1.88.322-2.641.563a21.942 21.942 0 0 0-1.083.374A7.143 7.143 0 0 1 5 8V4.895ZM5.213 9.72a7.006 7.006 0 0 0 6.037 5.24v5.29H8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-3.25v-5.29a7.006 7.006 0 0 0 5.99-5.06c-.226.081-.51.18-.825.279-.762.24-1.78.514-2.642.563-1.546.087-2.664-.54-3.597-1.064l-.043-.024c-.961-.54-1.737-.96-2.821-.898-.666.038-1.534.261-2.274.495a20.452 20.452 0 0 0-1.236.436l-.016.007-.004.001a.76.76 0 0 1-.07.024Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M5 4.895C5 3.848 5.848 3 6.895 3h10.21C18.152 3 19 3.848 19 4.895V8A7 7 0 1 1 5 8V4.895Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.25 20.25h-3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-4.5ZM12 15a7.002 7.002 0 0 0 6.925-5.97c-.402.157-2.332.886-3.694.963-1.327.075-2.28-.459-3.23-.993-.952-.534-1.904-1.068-3.232-.993-1.371.078-3.318.816-3.702.966A7.001 7.001 0 0 0 12 15Z" fill="currentColor" /><path opacity={0.5} d="M12.75 14.96a7.087 7.087 0 0 1-1.5 0v5.29h1.5v-5.29Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Wineglass