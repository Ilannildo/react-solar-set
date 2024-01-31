import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SmartSpeakerMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 12a46.819 46.819 0 0 1-.288 5.22l-.017.154a4.838 4.838 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a24.88 24.88 0 0 1-5.169 0 51.167 51.167 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137 46.932 46.932 0 0 1 0-10.689l.016-.137a4.833 4.833 0 0 1 3.918-4.197l.215-.04a24.736 24.736 0 0 1 9.091 0l.323.06a4.701 4.701 0 0 1 3.81 4.067c.056.483.106.967.148 1.452" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.321 6.658a4.833 4.833 0 0 1 3.918-4.197l.215-.04a24.736 24.736 0 0 1 9.091 0l.323.06a4.701 4.701 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.838 4.838 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a24.88 24.88 0 0 1-5.169 0 51.167 51.167 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137 46.932 46.932 0 0 1 0-10.689l.016-.137Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.321 6.658a4.833 4.833 0 0 1 3.918-4.197l.215-.04a24.736 24.736 0 0 1 9.091 0l.323.06a4.701 4.701 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.838 4.838 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a24.88 24.88 0 0 1-5.169 0 51.167 51.167 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137 46.932 46.932 0 0 1 0-10.689l.016-.137Z" stroke="currentColor" strokeWidth={1.5} /><path d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M16.407 3.158a23.987 23.987 0 0 0-8.815 0l-.215.04a4.084 4.084 0 0 0-3.31 3.546l-.017.137c-.4 3.494-.4 7.023 0 10.518a3.964 3.964 0 0 0 3.453 3.477l1.015.127c.498.062.737.092.975.116 1.667.175 3.347.175 5.014 0 .238-.024.476-.054.974-.116l.906-.113a4.088 4.088 0 0 0 3.562-3.6l.018-.153c.389-3.49.377-7.013-.034-10.501a3.951 3.951 0 0 0-3.203-3.417l-.323-.06Zm-9.09-1.474a25.486 25.486 0 0 1 9.366 0l.323.06a5.451 5.451 0 0 1 4.416 4.716c.425 3.601.437 7.24.035 10.843l-.017.154a5.588 5.588 0 0 1-4.867 4.921l-.917.115c-.485.06-.74.092-.994.118-1.77.185-3.555.185-5.325 0-.254-.026-.508-.058-.994-.118l-1.026-.128A5.464 5.464 0 0 1 2.56 17.57a47.681 47.681 0 0 1 0-10.86l.016-.137a5.583 5.583 0 0 1 4.526-4.849l.215-.04Zm-.892 3.834a.75.75 0 0 1 1.057-.093C8.059 5.908 9.676 6.75 12 6.75s3.941-.842 4.518-1.325a.75.75 0 1 1 .963 1.15C16.62 7.297 14.657 8.25 12 8.25c-2.656 0-4.62-.953-5.482-1.675a.75.75 0 0 1-.093-1.057Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.24 2.461A4.833 4.833 0 0 0 3.32 6.658l-.016.137a46.932 46.932 0 0 0 0 10.69A4.714 4.714 0 0 0 7.41 21.62l1.016.126c.495.062.742.093.99.118 1.717.18 3.45.18 5.168 0 .248-.025.495-.056.99-.118l.906-.113a4.838 4.838 0 0 0 4.215-4.26l.017-.154a46.818 46.818 0 0 0-.035-10.672 4.701 4.701 0 0 0-3.809-4.066l-.323-.06a24.736 24.736 0 0 0-9.09 0l-.216.04Zm-.815 3.057a.75.75 0 0 1 1.057-.093C8.059 5.908 9.676 6.75 12 6.75s3.941-.842 4.518-1.325a.75.75 0 1 1 .963 1.15C16.62 7.297 14.657 8.25 12 8.25c-2.656 0-4.62-.953-5.482-1.675a.75.75 0 0 1-.093-1.057Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="m7.454 2.421-.215.04a4.833 4.833 0 0 0-3.918 4.197l-.016.137a46.932 46.932 0 0 0 0 10.69A4.714 4.714 0 0 0 7.41 21.62l1.016.126c.495.062.742.093.99.118 1.717.18 3.45.18 5.168 0 .248-.025.495-.056.99-.118l.906-.113a4.838 4.838 0 0 0 4.215-4.26l.017-.154a46.818 46.818 0 0 0-.035-10.672 4.701 4.701 0 0 0-3.809-4.066l-.323-.06a24.736 24.736 0 0 0-9.09 0Z" fill="currentColor" /><path d="M7.482 5.425a.75.75 0 1 0-.964 1.15C7.38 7.297 9.344 8.25 12 8.25s4.62-.953 5.482-1.675a.75.75 0 0 0-.963-1.15C15.94 5.908 14.323 6.75 12 6.75c-2.324 0-3.941-.842-4.518-1.325Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SmartSpeakerMinimalistic