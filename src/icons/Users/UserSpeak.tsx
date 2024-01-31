import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UserSpeak = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={10} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2M17.997 18c.003-.164.003-.331.003-.5 0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S2 22 10 22c2.231 0 3.84-.157 5-.437" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={10} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5Z" stroke="currentColor" strokeWidth={1.5} /><path d="M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={10} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5Z" stroke="currentColor" strokeWidth={1.5} /><path d="M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.357 1.614a.75.75 0 0 1 1.029-.257L19 2l.386-.643h.001l.002.002.004.002.01.006a2.216 2.216 0 0 1 .113.076c.07.049.166.12.277.212.222.185.512.462.802.838.582.757 1.155 1.914 1.155 3.507 0 1.593-.573 2.75-1.155 3.507-.29.376-.58.653-.802.838a4.16 4.16 0 0 1-.363.27l-.028.018-.01.006-.003.002-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004.041-.027a2.7 2.7 0 0 0 .177-.136c.152-.128.362-.326.573-.6.417-.543.844-1.386.844-2.593s-.427-2.05-.844-2.593a3.809 3.809 0 0 0-.573-.6 2.704 2.704 0 0 0-.218-.163l-.005-.004a.75.75 0 0 1-.253-1.026Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM6.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM10 12.25c-2.313 0-4.445.526-6.024 1.414C2.42 14.54 1.25 15.866 1.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662.629.512 1.51.877 2.7 1.117 1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117 1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836-1.58-.888-3.711-1.414-6.025-1.414ZM2.75 17.5c0-.851.622-1.775 1.961-2.528 1.316-.74 3.184-1.222 5.29-1.222 2.104 0 3.972.482 5.288 1.222 1.34.753 1.961 1.677 1.961 2.528 0 1.308-.04 2.044-.724 2.6-.37.302-.99.597-2.05.811-1.057.214-2.502.339-4.476.339-1.974 0-3.42-.125-4.476-.339-1.06-.214-1.68-.509-2.05-.81-.684-.557-.724-1.293-.724-2.601Z" fill="currentColor" /><path d="M17.386 3.357a.75.75 0 0 0-1.029.257l.248 1.024.008.005a1.529 1.529 0 0 1 .293.29c.167.217.344.56.344 1.067 0 .507-.177.85-.344 1.068a1.53 1.53 0 0 1-.293.29l-.008.004a.75.75 0 0 0 .781 1.281L17 8l.386.643h.001l.002-.002.003-.001.007-.005.02-.012.054-.037a3.027 3.027 0 0 0 .621-.604A3.2 3.2 0 0 0 18.75 6a3.2 3.2 0 0 0-.655-1.982 3.027 3.027 0 0 0-.622-.604 1.749 1.749 0 0 0-.054-.037l-.02-.012-.007-.005-.003-.001-.002-.001S17.386 3.357 17 4l.386-.643Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.357 1.614a.75.75 0 0 1 1.029-.257L19 2l.386-.643h.001l.002.002.003.002.01.006a1.658 1.658 0 0 1 .114.076c.07.049.165.12.277.212.222.185.512.462.802.838.582.757 1.155 1.914 1.155 3.507 0 1.593-.573 2.75-1.155 3.507-.29.376-.58.653-.802.838a4.16 4.16 0 0 1-.378.28l-.013.008-.01.006-.003.002-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004.04-.027c.04-.028.101-.073.177-.136.153-.128.363-.326.573-.6.418-.543.845-1.386.845-2.593s-.427-2.05-.845-2.593a3.805 3.805 0 0 0-.573-.6 2.673 2.673 0 0 0-.217-.163l-.005-.004a.75.75 0 0 1-.253-1.026ZM10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 17.5c0 2.485 0 4.5 8 4.5s8-2.015 8-4.5-3.582-4.5-8-4.5-8 2.015-8 4.5Z" fill="currentColor" /><path d="M17.386 3.357a.75.75 0 0 0-1.03.257l.25 1.024.007.005a1.524 1.524 0 0 1 .293.29A1.7 1.7 0 0 1 17.25 6a1.7 1.7 0 0 1-.345 1.068 1.525 1.525 0 0 1-.292.29l-.008.004a.75.75 0 0 0 .78 1.281L17 8l.386.643h.001l.002-.002.003-.001.007-.005.02-.012a1.88 1.88 0 0 0 .217-.162c.129-.107.294-.265.459-.479A3.2 3.2 0 0 0 18.75 6a3.2 3.2 0 0 0-.655-1.982 3.031 3.031 0 0 0-.622-.604 1.876 1.876 0 0 0-.054-.037l-.02-.012-.007-.005-.003-.001-.002-.001S17.386 3.357 17 4l.386-.643Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.357 1.364a.75.75 0 0 1 1.029-.257L19 1.75l.386-.643h.001l.002.002.003.002.01.006a1.716 1.716 0 0 1 .114.076c.07.049.165.12.277.212.222.185.512.462.802.838.582.758 1.155 1.914 1.155 3.507 0 1.593-.573 2.75-1.155 3.507-.29.376-.58.653-.802.838a4.16 4.16 0 0 1-.378.28l-.013.008-.01.006-.003.002-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004.04-.027c.04-.028.101-.073.177-.136.153-.128.363-.326.573-.6.418-.542.845-1.386.845-2.593s-.427-2.05-.845-2.593a3.805 3.805 0 0 0-.573-.6 2.67 2.67 0 0 0-.217-.163l-.005-.003a.75.75 0 0 1-.253-1.027ZM10 9.75a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="currentColor" /><path d="M17.386 3.107a.75.75 0 0 0-1.03.257l.25 1.024.007.005a1.525 1.525 0 0 1 .293.29 1.7 1.7 0 0 1 .344 1.067 1.7 1.7 0 0 1-.345 1.068 1.524 1.524 0 0 1-.292.29l-.008.004a.75.75 0 0 0 .78 1.281L17 7.75l.386.643h.001l.002-.001.003-.002.007-.005.02-.012a1.876 1.876 0 0 0 .217-.162c.129-.107.294-.265.459-.479a3.2 3.2 0 0 0 .655-1.982 3.2 3.2 0 0 0-.655-1.982 3.032 3.032 0 0 0-.622-.604 1.897 1.897 0 0 0-.054-.037l-.02-.012-.007-.004-.003-.002-.002-.001s-.001-.001-.387.642l.386-.643Z" fill="currentColor" /><path opacity={0.5} d="M2 17.25c0 2.485 0 4.5 8 4.5s8-2.015 8-4.5-3.582-4.5-8-4.5-8 2.015-8 4.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UserSpeak