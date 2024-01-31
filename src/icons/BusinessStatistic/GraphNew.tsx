import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const GraphNew = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.44.441-.749.963-.964 1.606" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m7 14 1.797-2.156c.712-.855 1.068-1.282 1.536-1.282.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282.468 0 .824-.427 1.536-1.282L17 10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m7 14 1.797-2.156c.712-.855 1.068-1.282 1.536-1.282.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282.468 0 .824-.427 1.536-1.282L17 10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m7 14 1.797-2.156c.712-.855 1.068-1.282 1.536-1.282.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282.468 0 .824-.427 1.536-1.282L17 10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.943 1.25H13.5a.75.75 0 0 1 0 1.5H12c-2.378 0-4.086.002-5.386.176-1.279.172-2.05.5-2.62 1.069-.569.57-.896 1.34-1.068 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386v-1.5a.75.75 0 0 1 1.5 0v1.557c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Z" fill="currentColor" /><path d="M17.48 9.424a.75.75 0 0 1 .096 1.056l-1.829 2.195c-.328.394-.624.75-.9 1-.302.27-.68.513-1.18.513-.5 0-.879-.242-1.18-.514-.276-.25-.572-.605-.901-1l-.292-.35c-.371-.445-.599-.716-.787-.885a.767.767 0 0 0-.163-.122l-.007-.003-.004-.002-.01.005a.764.764 0 0 0-.164.122c-.187.17-.415.44-.786.885L7.576 14.48a.75.75 0 0 1-1.152-.96l1.829-2.195c.328-.394.624-.75.9-1 .302-.27.68-.513 1.18-.513.5 0 .879.242 1.18.514.276.25.572.605.901 1l.292.35c.371.445.599.716.787.885.086.078.138.11.163.122l.01.005.005-.002.007-.003a.764.764 0 0 0 .163-.122c.187-.17.415-.44.786-.885l1.797-2.156a.75.75 0 0 1 1.056-.096Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19 1.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM16.75 5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.612 2.038C14.59 2 13.399 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.399 0-2.59-.038-3.612a4.5 4.5 0 0 1-6.35-6.35Zm1.868 7.386a.75.75 0 0 1 .096 1.056l-1.829 2.195c-.328.394-.624.75-.9 1-.302.27-.68.513-1.18.513-.5 0-.879-.242-1.18-.514-.276-.25-.572-.605-.901-1l-.292-.35c-.371-.445-.599-.716-.787-.885a.767.767 0 0 0-.163-.122l-.01-.005-.005.002-.007.003a.764.764 0 0 0-.163.122c-.187.17-.415.44-.786.885L7.576 14.48a.75.75 0 0 1-1.152-.96l1.829-2.195c.328-.394.624-.75.9-1 .302-.27.68-.513 1.18-.513.5 0 .879.242 1.18.514.276.25.572.605.901 1l.292.35c.371.445.599.716.787.885.086.078.138.11.163.122l.003.001a.158.158 0 0 0 .008.004l.01-.005a.764.764 0 0 0 .164-.122c.187-.17.415-.44.786-.885l1.797-2.156a.75.75 0 0 1 1.056-.096Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path d="M17.576 10.48a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.764.764 0 0 1-.163.122l-.011.005-.008-.004-.003-.001a.764.764 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.329-.395-.625-.75-.901-1-.301-.272-.68-.514-1.18-.514-.5 0-.878.242-1.18.514-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 0 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.769.769 0 0 1 .163-.122l.007-.003.004-.001c.003 0 .006.002.011.004a.768.768 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1 .301.272.68.514 1.18.514.5 0 .878-.242 1.18-.514.276-.25.572-.605.9-1l1.83-2.194ZM22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default GraphNew