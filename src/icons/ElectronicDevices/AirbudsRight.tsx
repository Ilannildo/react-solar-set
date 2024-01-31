import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const AirbudsRight = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 18.667v.833c0 .14 0 .209-.003.268a2.35 2.35 0 0 1-2.23 2.229C18.71 22 18.64 22 18.5 22c-.14 0-.209 0-.268-.003a2.35 2.35 0 0 1-2.229-2.23C16 19.71 16 19.64 16 19.5v-.833m5 0h-5m5 0L20.997 13M16 18.667V12a1 1 0 0 0-1-1 3 3 0 0 1-3-3V5.335A3.353 3.353 0 0 1 15.336 2H15.44A5.588 5.588 0 0 1 21 7.56V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15 5v3" stroke="currentColor" strokeWidth={1.676} strokeLinecap="round" /><path d="M7.5 22A5.5 5.5 0 1 0 2 16.5M9 5.1A5.006 5.006 0 0 0 5.1 9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6 14v-.75a.75.75 0 0 0-.75.75H6Zm-.75 5a.75.75 0 0 0 1.5 0h-1.5ZM6 16.5h-.75v.75H6v-.75Zm2.357 2.886a.75.75 0 1 0 1.286-.772l-1.286.772ZM6 14.75h1.5v-1.5H6v1.5Zm.75 1.75V14h-1.5v2.5h1.5Zm1.5-1.25c0 .154-.202.5-.75.5v1.5c1.109 0 2.25-.773 2.25-2h-1.5Zm-.75-.5c.548 0 .75.346.75.5h1.5c0-1.227-1.141-2-2.25-2v1.5ZM5.25 14v5h1.5v-5h-1.5Zm2.25 1.75H6v1.5h1.5v-1.5Zm-.643 1.136 1.5 2.5 1.286-.772-1.5-2.5-1.286.772Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 18.667v.833c0 .14 0 .209-.003.268a2.35 2.35 0 0 1-2.23 2.229C18.71 22 18.64 22 18.5 22c-.14 0-.209 0-.268-.003a2.35 2.35 0 0 1-2.229-2.23C16 19.71 16 19.64 16 19.5v-.833m5 0V7.559A5.588 5.588 0 0 0 15.44 2H15.336A3.353 3.353 0 0 0 12 5.336V8a3 3 0 0 0 3 3 1 1 0 0 1 1 1v6.667m5 0h-5" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M15 5v3" stroke="currentColor" strokeWidth={1.676} strokeLinecap="round" /><circle opacity={0.5} cx={7.5} cy={16.5} r={5.5} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M9 5.1A5.006 5.006 0 0 0 5.1 9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6 14v-.75a.75.75 0 0 0-.75.75H6Zm-.75 5a.75.75 0 0 0 1.5 0h-1.5ZM6 16.5h-.75v.75H6v-.75Zm2.357 2.886a.75.75 0 1 0 1.286-.772l-1.286.772ZM6 14.75h1.5v-1.5H6v1.5Zm.75 1.75V14h-1.5v2.5h1.5Zm1.5-1.25c0 .154-.202.5-.75.5v1.5c1.109 0 2.25-.773 2.25-2h-1.5Zm-.75-.5c.548 0 .75.346.75.5h1.5c0-1.227-1.141-2-2.25-2v1.5ZM5.25 14v5h1.5v-5h-1.5Zm2.25 1.75H6v1.5h1.5v-1.5Zm-.643 1.136 1.5 2.5 1.286-.772-1.5-2.5-1.286.772Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 18.667v.833c0 .14 0 .209-.003.268a2.35 2.35 0 0 1-2.23 2.229C18.71 22 18.64 22 18.5 22c-.14 0-.209 0-.268-.003a2.35 2.35 0 0 1-2.229-2.23C16 19.71 16 19.64 16 19.5v-.833m5 0V7.559A5.588 5.588 0 0 0 15.44 2H15.336A3.353 3.353 0 0 0 12 5.336V8a3 3 0 0 0 3 3 1 1 0 0 1 1 1v6.667m5 0h-5" stroke="currentColor" strokeWidth={1.5} /><path d="M15 5v3" stroke="currentColor" strokeWidth={1.676} strokeLinecap="round" /><circle cx={7.5} cy={16.5} r={5.5} stroke="currentColor" strokeWidth={1.5} /><path d="M9 5.1A5.006 5.006 0 0 0 5.1 9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6 14v-.75a.75.75 0 0 0-.75.75H6Zm-.75 5a.75.75 0 0 0 1.5 0h-1.5ZM6 16.5h-.75v.75H6v-.75Zm2.357 2.886a.75.75 0 1 0 1.286-.772l-1.286.772ZM6 14.75h1.5v-1.5H6v1.5Zm.75 1.75V14h-1.5v2.5h1.5Zm1.5-1.25c0 .154-.202.5-.75.5v1.5c1.109 0 2.25-.773 2.25-2h-1.5Zm-.75-.5c.548 0 .75.346.75.5h1.5c0-1.227-1.141-2-2.25-2v1.5ZM5.25 14v5h1.5v-5h-1.5Zm2.25 1.75H6v1.5h1.5v-1.5Zm-.643 1.136 1.5 2.5 1.286-.772-1.5-2.5-1.286.772Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15.376 1.25h.069a6.338 6.338 0 0 1 6.305 6.305V19.52c0 .12 0 .207-.004.285a3.1 3.1 0 0 1-2.94 2.941c-.079.004-.166.004-.286.004h-.04c-.12 0-.207 0-.285-.004a3.1 3.1 0 0 1-2.941-2.94c-.004-.079-.004-.166-.004-.286V12a.25.25 0 0 0-.25-.25A3.75 3.75 0 0 1 11.25 8V5.332a4.103 4.103 0 0 1 4.082-4.082H15.375Zm-.037 1.5a2.603 2.603 0 0 0-2.589 2.588V8A2.25 2.25 0 0 0 15 10.25c.966 0 1.75.784 1.75 1.75v5.917h3.5V7.562a4.838 4.838 0 0 0-4.812-4.812h-.099Zm4.911 16.667h-3.5v.083c0 .148 0 .195.002.23a1.6 1.6 0 0 0 1.518 1.518c.035.002.082.002.23.002.148 0 .195 0 .23-.002a1.6 1.6 0 0 0 1.518-1.518c.002-.035.002-.082.002-.23v-.083ZM15 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm-5.265.7a.75.75 0 0 1-.586.885 4.256 4.256 0 0 0-3.314 3.314.75.75 0 1 1-1.47-.298 5.756 5.756 0 0 1 4.486-4.486.75.75 0 0 1 .884.586ZM7.5 11.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM1.25 16.5a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Zm4-2.5a.75.75 0 0 1 .75-.75h1.5c1.109 0 2.25.773 2.25 2 0 .786-.468 1.386-1.096 1.715l.99 1.65a.75.75 0 0 1-1.287.77L7.075 17.25H6.75V19a.75.75 0 0 1-1.5 0v-5Zm1.5.75v1h.75c.548 0 .75-.346.75-.5 0-.154-.202-.5-.75-.5h-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.735 4.95a.75.75 0 0 1-.586.885 4.256 4.256 0 0 0-3.314 3.314.75.75 0 0 1-1.47-.298 5.756 5.756 0 0 1 4.486-4.486.75.75 0 0 1 .884.586ZM7.5 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm-2.25-8a.75.75 0 0 1 .75-.75h1.5c1.109 0 2.25.773 2.25 2 0 .786-.468 1.386-1.096 1.715l.99 1.65a.75.75 0 0 1-1.287.77L7.075 17.25H6.75V19a.75.75 0 0 1-1.5 0v-5Zm1.5 1.75v-1h.75c.548 0 .75.346.75.5 0 .154-.202.5-.75.5h-.75Z" fill="currentColor" /><path d="M19.618 22C20.933 22 22 20.88 22 19.5h-4.765c0 1.38 1.067 2.5 2.383 2.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13 7.889V5.542c0-.194 0-.29.004-.372.08-1.713 1.385-3.082 3.017-3.166.078-.004.17-.004.354-.004.307 0 .46 0 .59.007 2.72.14 4.895 2.422 5.029 5.276.006.136.006.297.006.62v9.93h-4.765v-5.5c0-.613-.474-1.11-1.058-1.11C14.422 11.222 13 9.73 13 7.888Zm1.677-2.764c0-.46.335-.833.75-.833.414 0 .75.373.75.833v2.778c0 .46-.336.833-.75.833-.415 0-.75-.373-.75-.833V5.125Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.618 22C20.933 22 22 20.88 22 19.5h-4.765c0 1.38 1.067 2.5 2.383 2.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13 7.889V5.542c0-.194 0-.29.004-.372.08-1.713 1.385-3.082 3.017-3.166.078-.004.17-.004.354-.004.307 0 .46 0 .59.007 2.72.14 4.895 2.422 5.029 5.276.006.136.006.297.006.62v9.93h-4.765v-5.5c0-.613-.474-1.11-1.058-1.11C14.422 11.222 13 9.73 13 7.888Zm1.677-2.764c0-.46.335-.833.75-.833.414 0 .75.373.75.833v2.778c0 .46-.336.833-.75.833-.415 0-.75-.373-.75-.833V5.125Z" fill="currentColor" /><path opacity={0.5} d="M13 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M10.735 4.95a.75.75 0 0 1-.586.885 4.256 4.256 0 0 0-3.314 3.314.75.75 0 0 1-1.47-.298A5.756 5.756 0 0 1 9.85 4.365a.75.75 0 0 1 .884.586Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-1.75h.325l1.282 2.136a.75.75 0 1 0 1.286-.772l-.99-1.649c.629-.33 1.097-.93 1.097-1.715 0-1.227-1.141-2-2.25-2H6Zm.75 1.5v1h.75c.548 0 .75-.346.75-.5 0-.154-.202-.5-.75-.5h-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default AirbudsRight