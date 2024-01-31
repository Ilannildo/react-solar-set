import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MapPointSchool = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.224 6.636a2.278 2.278 0 0 1 1.552 0l2.342.856c.51.186.51.83 0 1.016l-2.342.856a2.278 2.278 0 0 1-1.552 0l-2.342-.856c-.51-.186-.51-.83 0-1.016l2.342-.856Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14.5 9v2.7a.923.923 0 0 1-.59.879c-.514.189-1.273.421-1.91.421s-1.396-.232-1.91-.421a.923.923 0 0 1-.59-.879V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.144Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11.224 6.636a2.278 2.278 0 0 1 1.552 0l2.342.856c.51.186.51.83 0 1.016l-2.342.856a2.278 2.278 0 0 1-1.552 0l-2.342-.856c-.51-.186-.51-.83 0-1.016l2.342-.856Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14.5 9v2.7a.923.923 0 0 1-.59.879c-.514.189-1.273.421-1.91.421s-1.396-.232-1.91-.421a.923.923 0 0 1-.59-.879V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.144Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11.224 6.636a2.278 2.278 0 0 1 1.552 0l2.342.856c.51.186.51.83 0 1.016l-2.342.856a2.278 2.278 0 0 1-1.552 0l-2.342-.856c-.51-.186-.51-.83 0-1.016l2.342-.856Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14.5 9v2.7a.923.923 0 0 1-.59.879c-.514.189-1.273.421-1.91.421s-1.396-.232-1.91-.421a.923.923 0 0 1-.59-.879V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.25 10.143C3.25 5.244 7.155 1.25 12 1.25c4.845 0 8.75 3.994 8.75 8.893 0 2.365-.674 4.905-1.866 7.099-1.19 2.191-2.928 4.095-5.104 5.112a4.2 4.2 0 0 1-3.56 0c-2.176-1.017-3.914-2.92-5.104-5.112-1.192-2.194-1.866-4.734-1.866-7.099ZM12 2.75c-3.992 0-7.25 3.297-7.25 7.393 0 2.097.603 4.392 1.684 6.383 1.082 1.993 2.612 3.624 4.42 4.469a2.7 2.7 0 0 0 2.291 0c1.809-.845 3.339-2.476 4.421-4.469 1.081-1.99 1.684-4.286 1.684-6.383 0-4.096-3.258-7.393-7.25-7.393Zm-1.033 3.182a3.028 3.028 0 0 1 2.066 0l2.342.855c.541.198.875.68.875 1.213s-.334 1.015-.875 1.213l-.125.045V11.7c0 .673-.394 1.329-1.08 1.582-.526.194-1.391.468-2.17.468-.779 0-1.644-.274-2.17-.468-.686-.253-1.08-.909-1.08-1.582V9.258l-.125-.045C8.084 9.015 7.75 8.533 7.75 8s.334-1.015.875-1.213l2.342-.855Zm-.717 3.874V11.7c0 .105.057.159.1.175.501.185 1.154.375 1.65.375s1.149-.19 1.65-.375c.043-.016.1-.07.1-.175V9.806l-.717.262a3.028 3.028 0 0 1-2.066 0l-.717-.262Zm2.269-2.465a1.528 1.528 0 0 0-1.038 0L9.677 8l1.804.66c.332.12.707.12 1.038 0L14.323 8l-1.804-.66Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.463 21.674a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.144 4 5.645 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531ZM10.967 5.932a3.028 3.028 0 0 1 2.066 0l2.342.855c.541.198.875.68.875 1.213s-.334 1.015-.875 1.213l-.125.045V11.7c0 .673-.394 1.329-1.08 1.582-.526.194-1.391.468-2.17.468-.779 0-1.644-.274-2.17-.468-.686-.253-1.08-.909-1.08-1.582V9.258l-.125-.045C8.084 9.015 7.75 8.533 7.75 8s.334-1.015.875-1.213l2.342-.855Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.481 7.34a1.528 1.528 0 0 1 1.038 0l1.804.66-1.804.66a1.528 1.528 0 0 1-1.038 0L9.677 8l1.804-.66Z" fill="currentColor" /><path d="M10.25 11.7V9.806l.717.262a3.028 3.028 0 0 0 2.066 0l.717-.262V11.7c0 .105-.057.159-.1.175-.501.185-1.154.375-1.65.375s-1.149-.19-1.65-.375c-.043-.016-.1-.07-.1-.175Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.605 20 10.144 20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.033 5.932a3.028 3.028 0 0 0-2.066 0l-2.342.855c-.541.198-.875.68-.875 1.213s.334 1.015.875 1.213l.125.045V11.7c0 .673.394 1.329 1.08 1.582.526.194 1.391.468 2.17.468.779 0 1.644-.274 2.17-.468.686-.253 1.08-.909 1.08-1.582V9.258l.125-.045c.541-.198.875-.68.875-1.213s-.334-1.015-.875-1.213l-2.342-.855ZM10.25 9.806V11.7c0 .105.057.159.1.175.501.185 1.154.375 1.65.375s1.149-.19 1.65-.375c.043-.016.1-.07.1-.175V9.806l-.717.262a3.028 3.028 0 0 1-2.066 0l-.717-.262Zm2.269-2.465a1.528 1.528 0 0 0-1.038 0L9.677 8l1.804.66c.332.12.707.12 1.038 0L14.323 8l-1.804-.66Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MapPointSchool