import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HighDefinition = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.25 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm6.315-8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm3.907-.8V8.8h-1.5v6.4h1.5Zm.213.05c-.1 0-.169-.034-.202-.061-.03-.026-.01-.025-.01.011h-1.5c0 .98.902 1.55 1.712 1.55v-1.5Zm0 1.5c2.937 0 5.565-2.002 5.565-4.75h-1.5c0 1.67-1.684 3.25-4.065 3.25v1.5Zm0-8c2.381 0 4.065 1.58 4.065 3.25h1.5c0-2.748-2.628-4.75-5.565-4.75v1.5Zm0-1.5c-.81 0-1.713.57-1.713 1.55h1.5c0 .036-.02.037.011.011a.321.321 0 0 1 .202-.061v-1.5ZM4.75 8v4h1.5V8h-1.5Zm0 4v4h1.5v-4h-1.5Zm4.815-4v4h1.5V8h-1.5Zm0 4v4h1.5v-4h-1.5Zm-4.065.75h4.815v-1.5H5.5v1.5Z" fill="currentColor" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6.25 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm6.315-8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm3.907-.8V8.8h-1.5v6.4h1.5Zm.213.05c-.1 0-.169-.034-.202-.061-.03-.026-.01-.025-.01.011h-1.5c0 .98.902 1.55 1.712 1.55v-1.5Zm0 1.5c2.937 0 5.565-2.002 5.565-4.75h-1.5c0 1.67-1.684 3.25-4.065 3.25v1.5Zm0-8c2.381 0 4.065 1.58 4.065 3.25h1.5c0-2.748-2.628-4.75-5.565-4.75v1.5Zm0-1.5c-.81 0-1.713.57-1.713 1.55h1.5c0 .036-.02.037.011.011a.321.321 0 0 1 .202-.061v-1.5ZM4.75 8v4h1.5V8h-1.5Zm0 4v4h1.5v-4h-1.5Zm4.815-4v4h1.5V8h-1.5Zm0 4v4h1.5v-4h-1.5Zm-4.065.75h4.815v-1.5H5.5v1.5Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6.25 8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm6.315-8a.75.75 0 0 0-1.5 0h1.5Zm-1.5 8a.75.75 0 0 0 1.5 0h-1.5Zm3.907-.8V8.8h-1.5v6.4h1.5Zm.213.05c-.1 0-.169-.034-.202-.061-.03-.026-.01-.025-.01.011h-1.5c0 .98.902 1.55 1.712 1.55v-1.5Zm0 1.5c2.937 0 5.565-2.002 5.565-4.75h-1.5c0 1.67-1.684 3.25-4.065 3.25v1.5Zm0-8c2.381 0 4.065 1.58 4.065 3.25h1.5c0-2.748-2.628-4.75-5.565-4.75v1.5Zm0-1.5c-.81 0-1.713.57-1.713 1.55h1.5c0 .036-.02.037.011.011a.321.321 0 0 1 .202-.061v-1.5ZM4.75 8v4h1.5V8h-1.5Zm0 4v4h1.5v-4h-1.5Zm4.815-4v4h1.5V8h-1.5Zm0 4v4h1.5v-4h-1.5Zm-4.065.75h4.815v-1.5H5.5v1.5Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.5 7.25a.75.75 0 0 1 .75.75v3.25h3.315V8a.75.75 0 1 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H6.25V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Zm6.472 1.55c0-.98.903-1.55 1.713-1.55 2.937 0 5.565 2.002 5.565 4.75s-2.628 4.75-5.565 4.75c-.81 0-1.713-.57-1.713-1.55V8.8Zm1.5.022a.321.321 0 0 1 .213-.072c2.381 0 4.065 1.58 4.065 3.25s-1.684 3.25-4.065 3.25a.321.321 0 0 1-.213-.072V8.822Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Zm4.25-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.315V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25H6.25V8Zm5.722.8c0-.98.903-1.55 1.713-1.55 2.937 0 5.565 2.002 5.565 4.75s-2.628 4.75-5.565 4.75c-.81 0-1.713-.57-1.713-1.55V8.8Zm1.5.022a.321.321 0 0 1 .213-.072c2.381 0 4.065 1.58 4.065 3.25s-1.684 3.25-4.065 3.25a.321.321 0 0 1-.213-.072V8.822Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z" fill="currentColor" /><path d="M5.5 7.25a.75.75 0 0 1 .75.75v3.25h3.315V8a.75.75 0 1 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H6.25V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.685 7.25c-.81 0-1.713.57-1.713 1.55v6.4c0 .98.903 1.55 1.713 1.55 2.937 0 5.565-2.002 5.565-4.75s-2.628-4.75-5.565-4.75Zm-.202 1.561a.148.148 0 0 0-.01.01v6.357a.321.321 0 0 0 .213.072c2.38 0 4.064-1.58 4.064-3.25s-1.684-3.25-4.065-3.25c-.1 0-.169.034-.202.061Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HighDefinition