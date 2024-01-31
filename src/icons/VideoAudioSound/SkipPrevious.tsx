import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SkipPrevious = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 11v7.967c0 2.31-2.134 3.769-3.87 2.648L7.34 14.646c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968C19.865 1.264 22 2.724 22 5.033V7M2 5v7m0 7v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.34 9.353c-1.787 1.154-1.787 4.14 0 5.294l10.79 6.967c1.736 1.122 3.87-.338 3.87-2.647V5.033c0-2.31-2.134-3.769-3.87-2.648L7.34 9.353Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M2 5v14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.34 9.353c-1.787 1.154-1.787 4.14 0 5.294l10.79 6.967c1.736 1.122 3.87-.338 3.87-2.647V5.033c0-2.31-2.134-3.769-3.87-2.648L7.34 9.353Z" stroke="currentColor" strokeWidth={1.5} /><path d="M2 5v14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M21.14 1.804c.966.66 1.61 1.841 1.61 3.229v13.934c0 1.388-.644 2.568-1.61 3.23-.98.669-2.275.786-3.418.048L6.933 15.277C5.783 14.535 5.25 13.235 5.25 12s.533-2.535 1.683-3.277l10.79-6.968c1.142-.738 2.437-.62 3.416.049Zm-.848 1.238c-.522-.358-1.162-.41-1.756-.026L7.747 9.983c-.637.41-.997 1.18-.997 2.017 0 .836.36 1.606.997 2.017l10.789 6.968c.594.383 1.234.33 1.756-.027.535-.365.958-1.07.958-1.99V5.032c0-.921-.423-1.625-.958-1.991ZM2 4.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 2 4.25Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648L8.09 14.646ZM2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19V5Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19V5Z" fill="currentColor" /><path d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648L8.09 14.646Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SkipPrevious