import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Chandelier = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 4h6M20.8 10a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 1 1-6 0v-1.8a1.2 1.2 0 0 1 1.2-1.2M12 4v3m0 9.5a3.5 3.5 0 1 0 7 0v-.056m-7 .056a3.5 3.5 0 1 1-7 0v-.056m7 .056V11" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 10.857A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13a3 3 0 1 0 6 0v-2.143Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 4h6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M16 11.2a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 1 1-6 0v-1.8Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M12 4v12.5m0 0a3.5 3.5 0 1 0 7 0v-.056m-7 .056a3.5 3.5 0 1 1-7 0v-.056" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 10.857A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13a3 3 0 1 0 6 0v-2.143Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 4h6M12 4v12.5a3.5 3.5 0 1 0 7 0v-.056" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M16 11.2a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 1 1-6 0v-1.8Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 4v12.5a3.5 3.5 0 1 1-7 0v-.056" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 10.857A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13a3 3 0 1 0 6 0v-2.143Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 0 1.5h-2.25V16.5a2.75 2.75 0 0 0 5.495.174A3.751 3.751 0 0 1 15.25 13v-1.8a1.95 1.95 0 0 1 1.95-1.95h3.6a1.95 1.95 0 0 1 1.95 1.95V13c0 1.816-1.29 3.33-3.004 3.676A4.25 4.25 0 0 1 12 18.912a4.25 4.25 0 0 1-7.746-2.236A3.751 3.751 0 0 1 1.25 13v-2.143c0-.887.72-1.607 1.607-1.607h4.286c.887 0 1.607.72 1.607 1.607V13a3.751 3.751 0 0 1-2.995 3.674 2.75 2.75 0 0 0 5.495-.174V4.75H9A.75.75 0 0 1 8.25 4Zm-5.393 6.75a.107.107 0 0 0-.107.107V13a2.25 2.25 0 0 0 4.5 0v-2.143a.107.107 0 0 0-.107-.107H2.857Zm14.343 0a.45.45 0 0 0-.45.45V13a2.25 2.25 0 0 0 4.5 0v-1.8a.45.45 0 0 0-.45-.45h-3.6Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 0 1.5h-2.25V16.5a2.75 2.75 0 1 0 5.5 0v-.595A3.001 3.001 0 0 1 16 13v-1.8a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V13a3.001 3.001 0 0 1-2.25 2.905v.595A4.25 4.25 0 0 1 12 18.912 4.25 4.25 0 0 1 4.25 16.5v-.595A3.001 3.001 0 0 1 2 13v-2.143c0-.473.384-.857.857-.857h4.286c.473 0 .857.384.857.857V13a3.001 3.001 0 0 1-2.25 2.905v.595a2.75 2.75 0 1 0 5.5 0V4.75H9A.75.75 0 0 1 8.25 4Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M11.25 4.75V16.5a2.75 2.75 0 1 1-5.5 0v-.595h-1.5v.595A4.25 4.25 0 0 0 12 18.912a4.25 4.25 0 0 0 7.75-2.412v-.595h-1.5v.595a2.75 2.75 0 1 1-5.5 0V4.75h-1.5Z" fill="currentColor" /><path d="M9 3.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9ZM16 13c0 1.398.956 2.572 2.25 2.905h1.5A3.001 3.001 0 0 0 22 13v-1.8a1.2 1.2 0 0 0-1.2-1.2h-3.6a1.2 1.2 0 0 0-1.2 1.2V13ZM2 13c0 1.398.956 2.572 2.25 2.905h1.5A3.001 3.001 0 0 0 8 13v-2.143A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Chandelier