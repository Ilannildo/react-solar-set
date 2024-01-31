import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UploadTrack = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 15V9" stroke="currentColor" strokeWidth={1.5} /><path d="m14.058 11.03-1.316-.659c-.183-.091-.274-.137-.35-.194a1 1 0 0 1-.374-.607C12 9.477 12 9.375 12 9.171c0-.486 0-.728.06-.893a1 1 0 0 1 1.056-.653c.174.02.391.129.826.346l1.316.658c.183.092.274.137.35.195a1 1 0 0 1 .374.606c.018.093.018.195.018.4 0 .485 0 .728-.06.893a1 1 0 0 1-1.056.652c-.174-.02-.391-.129-.826-.346Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 21.8c-.646.131-1.315.2-2 .2-5.523 0-10-4.477-10-10 0-1.821.487-3.53 1.338-5M21.8 14c.131-.646.2-1.315.2-2 0-5.523-4.477-10-10-10-1.821 0-3.53.487-5 1.338" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17.25 22a.75.75 0 0 0 1.5 0h-1.5Zm.75-7 .53-.53a.75.75 0 0 0-1.06 0L18 15Zm1.97 3.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-5-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM18.75 22v-7h-1.5v7h1.5Zm-1.28-6.47 2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06Zm0-1.06-2.5 2.5 1.06 1.06 2.5-2.5-1.06-1.06Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 15V9" stroke="currentColor" strokeWidth={1.5} /><path d="m14.058 11.03-1.316-.659c-.183-.091-.274-.137-.35-.194a1 1 0 0 1-.374-.607C12 9.477 12 9.375 12 9.171c0-.486 0-.728.06-.893a1 1 0 0 1 1.056-.653c.174.02.391.129.826.346l1.316.658c.183.092.274.137.35.195a1 1 0 0 1 .374.606c.018.093.018.195.018.4 0 .485 0 .728-.06.893a1 1 0 0 1-1.056.652c-.174-.02-.391-.129-.826-.346Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17.25 22a.75.75 0 0 0 1.5 0h-1.5Zm.75-7 .53-.53a.75.75 0 0 0-1.06 0L18 15Zm1.97 3.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-5-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM18.75 22v-7h-1.5v7h1.5Zm-1.28-6.47 2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06Zm0-1.06-2.5 2.5 1.06 1.06 2.5-2.5-1.06-1.06Z" fill="currentColor" /><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 15V9" stroke="currentColor" strokeWidth={1.5} /><path d="m14.058 11.03-1.316-.659c-.183-.091-.274-.137-.35-.194a1 1 0 0 1-.374-.607C12 9.477 12 9.375 12 9.171c0-.486 0-.728.06-.893a1 1 0 0 1 1.056-.653c.174.02.391.129.826.346l1.316.658c.183.092.274.137.35.195a1 1 0 0 1 .374.606c.018.093.018.195.018.4 0 .485 0 .728-.06.893a1 1 0 0 1-1.056.652c-.174-.02-.391-.129-.826-.346Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 21.8c-.646.131-1.315.2-2 .2-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 .685-.069 1.354-.2 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17.25 22a.75.75 0 0 0 1.5 0h-1.5Zm.75-7 .53-.53a.75.75 0 0 0-1.06 0L18 15Zm1.97 3.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-5-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM18.75 22v-7h-1.5v7h1.5Zm-1.28-6.47 2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06Zm0-1.06-2.5 2.5 1.06 1.06 2.5-2.5-1.06-1.06Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 1.85 18.315.75.75 0 1 1 .3 1.47c-.696.141-1.415.215-2.15.215-5.937 0-10.75-4.813-10.75-10.75S6.063 1.25 12 1.25 22.75 6.063 22.75 12c0 .735-.074 1.454-.215 2.15a.75.75 0 0 1-1.47-.3A9.25 9.25 0 0 0 12 2.75Zm.768 5.776a.96.96 0 0 0-.012.117 11.44 11.44 0 0 0-.006.528 6.622 6.622 0 0 0 .005.259.25.25 0 0 0 .093.15 6.687 6.687 0 0 0 .23.12l1.316.658c.224.113.366.183.474.23.07.03.102.04.11.043a.25.25 0 0 0 .254-.157.964.964 0 0 0 .012-.117c.006-.118.006-.277.006-.528a6.622 6.622 0 0 0-.005-.259.25.25 0 0 0-.093-.15 6.714 6.714 0 0 0-.23-.12l-1.316-.658a11.449 11.449 0 0 0-.474-.23.974.974 0 0 0-.11-.043.25.25 0 0 0-.254.157Zm-.018 2.688.99.494c.203.102.38.19.529.255.15.066.33.134.528.157a1.75 1.75 0 0 0 1.848-1.142 1.87 1.87 0 0 0 .096-.543c.009-.162.009-.36.009-.587v-.059c0-.163 0-.334-.031-.5a1.75 1.75 0 0 0-.656-1.061 2.64 2.64 0 0 0-.433-.251l-.036-.019-1.334-.666a12.11 12.11 0 0 0-.529-.256 1.868 1.868 0 0 0-.528-.156 1.75 1.75 0 0 0-1.848 1.142 1.87 1.87 0 0 0-.097.543A8.912 8.912 0 0 0 11.25 9v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.787ZM11.25 15a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Zm6.22-.53a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.47 14.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5Z" fill="currentColor" /><path d="M12.756 8.644a.96.96 0 0 1 .012-.118.25.25 0 0 1 .253-.157c.008.003.04.012.11.043.109.047.25.118.475.23l1.317.658a6.714 6.714 0 0 1 .23.12.25.25 0 0 1 .092.15l.003.045a11.444 11.444 0 0 1-.005.742.963.963 0 0 1-.01.117.25.25 0 0 1-.255.157 1.003 1.003 0 0 1-.11-.042c-.108-.047-.25-.118-.474-.23L13.077 9.7a6.687 6.687 0 0 1-.23-.12.25.25 0 0 1-.092-.15 11.44 11.44 0 0 1 .002-.786ZM10 13.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.75 21.273A9.971 9.971 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.985 9.985 0 0 1-.547 3.27L19.59 13.41a2.25 2.25 0 0 0-3.182 0l-2.5 2.5a2.25 2.25 0 0 0 1.841 3.827v1.537Zm-3-10.06.99.496c.203.101.38.19.529.255.15.066.33.133.528.156a1.75 1.75 0 0 0 1.848-1.142 1.87 1.87 0 0 0 .096-.542c.009-.162.009-.361.009-.588v-.06c0-.161 0-.333-.031-.499a1.75 1.75 0 0 0-.656-1.061 2.642 2.642 0 0 0-.433-.251l-1.37-.685c-.203-.102-.38-.19-.529-.255a1.867 1.867 0 0 0-.528-.157 1.75 1.75 0 0 0-1.848 1.142 1.87 1.87 0 0 0-.097.543A8.912 8.912 0 0 0 11.25 9v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.786Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22a9.971 9.971 0 0 0 3.75-.727v-1.537a2.25 2.25 0 0 1-1.841-3.827l2.5-2.5a2.25 2.25 0 0 1 3.182 0l1.862 1.862A9.985 9.985 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.47 14.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5Z" fill="currentColor" /><path d="m12.75 11.214.99.495c.203.101.38.19.529.255.15.066.33.133.528.156a1.75 1.75 0 0 0 1.848-1.142 1.87 1.87 0 0 0 .096-.542c.009-.162.009-.361.009-.588v-.06c0-.161 0-.333-.031-.499a1.75 1.75 0 0 0-.656-1.061 2.642 2.642 0 0 0-.433-.251l-1.37-.685c-.203-.102-.38-.19-.529-.255a1.867 1.867 0 0 0-.528-.157 1.75 1.75 0 0 0-1.848 1.142 1.87 1.87 0 0 0-.097.543A8.912 8.912 0 0 0 11.25 9v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.786Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UploadTrack