import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const AirbudsCaseMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 13v-2c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106c-.531-.731-.767-1.635-.871-2.939M7 9h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 9h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 9h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.955 1.25h.09c1.837 0 3.276 0 4.418.124 1.166.126 2.11.388 2.917.974a5.75 5.75 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916.124 1.143.124 2.582.124 4.419v2.09c0 1.837 0 3.276-.124 4.418-.126 1.166-.388 2.11-.974 2.917a5.749 5.749 0 0 1-1.272 1.272c-.807.586-1.75.848-2.916.974-1.143.124-2.582.124-4.419.124h-.09c-1.837 0-3.276 0-4.419-.124-1.165-.126-2.11-.388-2.916-.974a5.75 5.75 0 0 1-1.272-1.272c-.586-.807-.848-1.75-.974-2.916-.124-1.143-.124-2.582-.124-4.419v-2.09c0-1.837 0-3.276.124-4.419.126-1.165.388-2.11.974-2.916A5.75 5.75 0 0 1 4.62 2.348c.807-.586 1.75-.848 2.916-.974 1.143-.124 2.582-.124 4.419-.124ZM7.698 2.865c-1.038.112-1.688.328-2.196.697a4.25 4.25 0 0 0-.94.94c-.37.508-.585 1.158-.697 2.196C3.751 7.75 3.75 9.108 3.75 11v2c0 1.892.001 3.25.115 4.302.112 1.038.328 1.688.697 2.196.262.36.58.678.94.94.508.37 1.158.585 2.196.697 1.052.114 2.41.115 4.302.115 1.892 0 3.25-.001 4.302-.115 1.038-.113 1.688-.328 2.196-.697.36-.262.678-.58.94-.94.37-.508.585-1.158.697-2.196.114-1.052.115-2.41.115-4.302v-2c0-1.892-.001-3.25-.115-4.302-.113-1.038-.328-1.688-.697-2.196a4.25 4.25 0 0 0-.94-.94c-.508-.37-1.158-.585-2.196-.697-1.052-.114-2.41-.115-4.302-.115-1.892 0-3.25.001-4.302.115ZM6.25 9A.75.75 0 0 1 7 8.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.955 4.061C3 5.375 3 7.251 3 11v2c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 2 15.749 2 12 2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06ZM7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13v-2Z" fill="currentColor" /><path d="M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default AirbudsCaseMinimalistic