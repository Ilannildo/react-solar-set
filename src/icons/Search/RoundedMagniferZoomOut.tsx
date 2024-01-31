import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RoundedMagniferZoomOut = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 11h4M21.812 20.975c-.063.095-.176.208-.403.434-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619ZM6.75 3.27a9.5 9.5 0 1 1-3.48 3.48" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={11} cy={11} r={9} stroke="#8E93A6" strokeWidth={1.5} /><path d="M9 11h4M21.812 20.975c-.063.095-.176.208-.403.434-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={11} cy={11} r={9} stroke="currentColor" strokeWidth={1.5} /><path d="M9 11h4M21.812 20.975c-.063.095-.176.208-.403.434-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11 2.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM1.25 11c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S1.25 16.385 1.25 11Zm7 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm11.908 8.751a.38.38 0 0 0-.407.407c0 .001.004.027.024.1.022.084.056.197.108.37.047.158.078.26.103.336.026.078.035.093.031.086a.38.38 0 0 0 .544.137c-.007.004.008-.005.067-.06.059-.056.134-.131.251-.248.117-.117.192-.192.247-.25.047-.05.06-.069.062-.07a.38.38 0 0 0-.137-.541c-.001 0-.022-.01-.087-.032a13.038 13.038 0 0 0-.336-.103 15.046 15.046 0 0 0-.37-.108c-.073-.02-.099-.024-.1-.024Zm-1.902.532a1.88 1.88 0 0 1 2.027-2.027c.2.017.442.09.703.168l.072.022.065.02c.24.07.465.138.635.229a1.88 1.88 0 0 1 .68 2.694c-.107.16-.273.326-.45.503l-.048.048-.048.048c-.177.177-.343.343-.503.45a1.88 1.88 0 0 1-2.694-.68c-.091-.17-.158-.395-.23-.635a26.824 26.824 0 0 1-.02-.065l-.02-.072c-.08-.26-.152-.503-.169-.703Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0 9.157 9.157 0 0 1 18.313 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.024 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 0 1 0 1.446h-4.82a.723.723 0 0 1-.723-.723Z" fill="#fff" /><path fillRule="evenodd" clipRule="evenodd" d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.82 19.7c-.09-1.094.816-2.008 1.9-1.918.189.016.414.085.643.154l.067.02.06.018c.21.064.42.127.58.213a1.786 1.786 0 0 1 .637 2.549c-.1.152-.255.308-.41.464l-.045.045-.044.045c-.155.157-.31.313-.46.414a1.754 1.754 0 0 1-2.527-.643c-.086-.161-.148-.373-.211-.585l-.018-.06-.02-.068c-.07-.231-.137-.458-.152-.648Z" fill="currentColor" /><path opacity={0.5} d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.023 11.156c0-.399.324-.722.723-.722h4.82a.723.723 0 1 1 0 1.445h-4.82a.723.723 0 0 1-.723-.723Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RoundedMagniferZoomOut