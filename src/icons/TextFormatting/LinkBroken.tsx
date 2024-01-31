import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const LinkBroken = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m2 8 6 2M6 4l2 3M11 6.563l3.7-3.625c1.46-1.43 4.063-1.199 5.815.517M18.135 12l2.908-2.848c.59-.578.902-1.338.95-2.152M15 15.587 10.965 20c-1.392 1.524-3.876 1.277-5.548-.552-1.67-1.828-1.897-4.546-.504-6.07L6.173 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m2 8 6 2M6 4l2 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m11 6.563 3.7-3.625c1.46-1.43 4.063-1.199 5.815.517 1.751 1.716 1.988 4.267.528 5.697L18.136 12M15 15.587 10.965 20c-1.392 1.524-3.876 1.277-5.548-.552-1.67-1.828-1.897-4.546-.504-6.07L6.173 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m2 8 6 2M6 4l2 3M11 6.563l3.7-3.625c1.46-1.43 4.063-1.199 5.815.517 1.751 1.716 1.988 4.267.528 5.697L18.136 12M15 15.587 10.965 20c-1.392 1.524-3.876 1.277-5.548-.552-1.67-1.828-1.897-4.546-.504-6.07L6.173 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.99 3.991c-1.553-1.521-3.681-1.58-4.765-.518l-3.7 3.625a.75.75 0 0 1-1.05-1.071l3.7-3.625c1.836-1.799 4.914-1.393 6.864.518 1.954 1.913 2.379 4.955.53 6.768l-2.908 2.848a.75.75 0 1 1-1.05-1.072l2.907-2.848c1.07-1.048 1.022-3.106-.528-4.625ZM6.624 3.584a.75.75 0 1 0-1.248.832l2 3a.75.75 0 0 0 1.248-.832l-2-3ZM2.237 7.288a.75.75 0 1 0-.474 1.424l6 2a.75.75 0 0 0 .474-1.423l-6-2ZM6.728 12.506a.75.75 0 0 0-1.107-1.012l-1.261 1.38c-1.727 1.889-1.35 5.053.504 7.081 1.865 2.04 4.87 2.505 6.655.552l4.035-4.414a.75.75 0 0 0-1.107-1.012l-4.035 4.414c-1.001 1.095-2.963 1.065-4.44-.552-1.49-1.628-1.564-3.9-.505-5.058l1.26-1.379Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.99 3.991c-1.553-1.521-3.681-1.58-4.765-.518l-3.7 3.625a.75.75 0 0 1-1.05-1.071l3.7-3.625c1.836-1.799 4.914-1.393 6.864.518 1.954 1.913 2.379 4.955.53 6.768l-2.908 2.848a.75.75 0 1 1-1.05-1.072l2.907-2.848c1.07-1.048 1.022-3.106-.528-4.625ZM6.624 3.584a.75.75 0 1 0-1.248.832l2 3a.75.75 0 0 0 1.248-.832l-2-3ZM2.237 7.288a.75.75 0 1 0-.474 1.424l6 2a.75.75 0 0 0 .474-1.423l-6-2ZM6.728 12.506a.75.75 0 0 0-1.107-1.012l-1.261 1.38c-1.727 1.889-1.35 5.053.504 7.081 1.865 2.04 4.87 2.505 6.655.552l4.035-4.414a.75.75 0 0 0-1.107-1.012l-4.035 4.414c-1.001 1.095-2.963 1.065-4.44-.552-1.49-1.628-1.564-3.9-.505-5.058l1.26-1.379Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g opacity={0.5} fill="currentColor"><path d="M19.99 3.991c-1.553-1.521-3.681-1.58-4.765-.518l-3.7 3.625a.75.75 0 1 1-1.05-1.071l3.7-3.625c1.837-1.799 4.914-1.393 6.865.518 1.953 1.913 2.378 4.955.528 6.768l-2.907 2.848a.75.75 0 1 1-1.05-1.072l2.907-2.848c1.07-1.048 1.022-3.106-.528-4.625ZM6.728 12.506a.75.75 0 0 0-1.107-1.012l-1.261 1.38c-1.727 1.889-1.35 5.053.504 7.081 1.865 2.04 4.87 2.505 6.655.552l4.035-4.414a.75.75 0 0 0-1.107-1.012l-4.035 4.414c-1 1.095-2.963 1.065-4.44-.552-1.49-1.628-1.564-3.9-.505-5.058l1.26-1.379Z" /></g><path d="M6.624 3.584a.75.75 0 0 0-1.248.832l2 3a.75.75 0 1 0 1.248-.832l-2-3ZM2.237 7.288a.75.75 0 1 0-.474 1.423l6 2a.75.75 0 0 0 .474-1.423l-6-2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default LinkBroken