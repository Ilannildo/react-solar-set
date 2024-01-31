import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Pill = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.6 6a6.796 6.796 0 0 1 11.002-2.01l6.407 6.408A6.765 6.765 0 0 1 21.893 14M2.107 10a6.765 6.765 0 0 0 1.884 3.602l6.407 6.407A6.796 6.796 0 0 0 21.4 18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M16.806 7.194s-.541 2.806-3.674 5.939C10 16.265 7.194 16.806 7.194 16.806" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611L3.99 13.602Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M16.806 7.194s-.541 2.806-3.674 5.939C10 16.265 7.194 16.806 7.194 16.806" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611L3.99 13.602Z" stroke="currentColor" strokeWidth={1.5} /><path d="M16.806 7.194s-.541 2.806-3.674 5.939C10 16.265 7.194 16.806 7.194 16.806" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.132 3.46A7.546 7.546 0 1 0 3.46 14.132l6.408 6.408A7.546 7.546 0 0 0 20.54 9.868L14.132 3.46ZM4.521 4.52a6.046 6.046 0 0 1 8.55 0l2.898 2.898-.011.035c-.09.282-.243.698-.49 1.21-.494 1.024-1.365 2.438-2.866 3.94-1.502 1.5-2.915 2.372-3.94 2.865-.512.247-.927.4-1.209.49l-.035.01-2.897-2.896a6.046 6.046 0 0 1 0-8.551ZM8.59 17.14l2.338 2.34a6.046 6.046 0 0 0 8.551-8.552L17.14 8.59c-.088.218-.194.461-.32.724-.56 1.162-1.526 2.718-3.158 4.349-1.63 1.631-3.186 2.597-4.348 3.157-.263.126-.506.232-.724.32Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.99 3.99a6.796 6.796 0 0 0 0 9.612l2.564 2.563.495-.095h.001l.014-.003.074-.018c.068-.017.175-.046.315-.091.282-.09.697-.243 1.21-.49 1.024-.493 2.438-1.364 3.939-2.866 1.501-1.501 2.372-2.915 2.866-3.939.247-.512.4-.928.49-1.21a5.388 5.388 0 0 0 .109-.389l.003-.014.095-.496-2.563-2.563a6.796 6.796 0 0 0-9.611 0ZM17.419 7.807l-.032.103c-.11.343-.288.824-.568 1.404-.56 1.162-1.525 2.718-3.156 4.349-1.632 1.631-3.187 2.597-4.349 3.157a10.893 10.893 0 0 1-1.507.599l2.591 2.59a6.796 6.796 0 1 0 9.611-9.61l-2.59-2.592Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611L3.99 13.602Z" fill="currentColor" /><path d="m7.807 17.419-1.253-1.254.495-.095h.001l.014-.004c.014-.003.04-.008.073-.017.069-.017.176-.046.316-.091.281-.09.697-.243 1.21-.49 1.024-.493 2.437-1.364 3.939-2.866 1.5-1.501 2.372-2.915 2.866-3.94.247-.512.4-.927.49-1.209a5.31 5.31 0 0 0 .108-.389l.003-.014s0-.001 0 0l.096-.496 1.253 1.253-.032.103a10.9 10.9 0 0 1-.567 1.404c-.56 1.162-1.525 2.717-3.157 4.349-1.631 1.631-3.187 2.597-4.348 3.156a10.922 10.922 0 0 1-1.507.6Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Pill