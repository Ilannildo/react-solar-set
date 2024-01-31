import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const TextSelection = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 9h6M12 15V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M18 4H6M20 18v-6m0-6v2M18 20h-6m-6 0h2M4 6v12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 9h6M12 15V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M6 20h12M18 4H6M20 18V6M4 6v12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 9h6M12 15V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6 20h12M18 4H6M20 18V6M4 6v12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 8.25a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0V9.75H15a.75.75 0 0 0 0-1.5H9Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.25 6.646A2.751 2.751 0 1 1 6.646 3.25h10.707a2.751 2.751 0 1 1 3.397 3.396v10.707a2.751 2.751 0 1 1-3.396 3.397H6.646a2.751 2.751 0 1 1-3.396-3.396V6.646ZM4 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm.75 14.604V6.646A2.756 2.756 0 0 0 6.646 4.75h10.707c.26.916.981 1.637 1.897 1.896v10.707a2.756 2.756 0 0 0-1.896 1.897H6.646a2.756 2.756 0 0 0-1.896-1.896ZM4 18.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM21.25 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-2.5 16a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.86 3.263A2 2 0 1 0 3.263 5.86.754.754 0 0 0 3.25 6v12c0 .048.004.095.013.14a2 2 0 1 0 2.597 2.597.752.752 0 0 0 .14.013h12a.752.752 0 0 0 .14-.013 2 2 0 1 0 2.597-2.597.752.752 0 0 0 .013-.14V6a.752.752 0 0 0-.013-.14 2 2 0 1 0-2.597-2.597.754.754 0 0 0-.14-.013H6a.754.754 0 0 0-.14.013ZM4.737 5.86A.754.754 0 0 1 4.75 6v12a.754.754 0 0 1-.013.14c.512.203.92.611 1.123 1.123A.752.752 0 0 1 6 19.25h12c.048 0 .095.005.14.013.203-.512.611-.92 1.123-1.123a.752.752 0 0 1-.013-.14V6c0-.048.005-.095.013-.14a2.007 2.007 0 0 1-1.123-1.123.754.754 0 0 1-.14.013H6a.754.754 0 0 1-.14-.013c-.203.512-.611.92-1.123 1.123Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9Z" fill="currentColor" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M4.75 5.855a1.994 1.994 0 0 1-1.5 0v12.29a1.993 1.993 0 0 1 1.5 0V5.855ZM5.855 4.75h12.29a1.993 1.993 0 0 1 0-1.5H5.855a1.994 1.994 0 0 1 0 1.5ZM19.25 5.855a1.994 1.994 0 0 0 1.5 0v12.29a1.994 1.994 0 0 0-1.5 0V5.855ZM18.145 19.25H5.855a1.994 1.994 0 0 1 0 1.5h12.29a1.994 1.994 0 0 1 0-1.5Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TextSelection