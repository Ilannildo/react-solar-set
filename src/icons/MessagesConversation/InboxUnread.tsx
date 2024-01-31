import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const InboxUnread = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M2 13h3.16c.905 0 1.358 0 1.756.183.398.183.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214.398.183.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183.398-.183.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214.398-.183.85-.183 1.756-.183H22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.72 0-1.385-.005-2M14 2.005C13.385 2 12.72 2 12 2 7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 2.005C13.385 2 12.72 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.72 0-1.385-.005-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M2 13h3.16c.905 0 1.358 0 1.756.183.398.183.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214.398.183.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183.398-.183.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214.398-.183.85-.183 1.756-.183H22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 2.005C13.385 2 12.72 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.72 0-1.385-.005-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M2 13h3.16c.905 0 1.358 0 1.756.183.398.183.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214.398.183.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183.398-.183.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214.398-.183.85-.183 1.756-.183H22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25h.06c.717 0 1.385 0 2.003.005a.75.75 0 1 1-.012 1.5A242.02 242.02 0 0 0 12 2.75c-2.378 0-4.086.002-5.386.176-1.279.172-2.05.5-2.62 1.069-.569.57-.896 1.34-1.068 2.619-.174 1.3-.176 3.008-.176 5.386v.25h2.545c.772 0 1.384-.002 1.934.252.55.253.948.718 1.45 1.305.03.033.058.067.088.102l.605.706c.634.74.812.922 1.026 1.02.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114.214-.099.392-.282 1.026-1.02l.605-.707.088-.102c.502-.587.9-1.052 1.45-1.305.55-.254 1.162-.253 1.934-.252h2.545V12c0-.72 0-1.382-.005-1.994a.75.75 0 1 1 1.5-.012c.005.618.005 1.285.005 2.004V12.973a.8.8 0 0 1 0 .057c-.004 1.852-.027 3.35-.19 4.556-.194 1.445-.6 2.585-1.494 3.48-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.163-1.207-.186-2.704-.19-4.556a.76.76 0 0 1 0-.057v-1.03c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-9.19 12.5c.01 1.503.045 2.68.173 3.636.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.128-.956.163-2.133.172-3.636H18.84c-.974 0-1.229.016-1.442.114-.214.099-.392.282-1.026 1.02l-.605.707-.088.102c-.502.587-.9 1.052-1.45 1.305-.55.253-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252-.55-.253-.948-.718-1.45-1.305-.03-.033-.058-.067-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02-.213-.099-.468-.115-1.442-.115H2.753ZM19 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465 1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114-.214.099-.392.282-1.026 1.02l-.693.81c-.502.586-.9 1.051-1.45 1.304-.55.253-1.162.253-1.934.252h-.59c-.772 0-1.384.002-1.934-.252-.55-.253-.948-.718-1.45-1.305l-.693-.808c-.634-.74-.812-.922-1.026-1.02-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785Z" fill="currentColor" /><path d="M12 2C7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12v.25h3.295c.772 0 1.384-.002 1.934.252.55.253.948.718 1.45 1.305l.693.808c.634.74.812.922 1.026 1.02.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114.214-.099.392-.282 1.026-1.02l.693-.81c.502-.586.9-1.051 1.45-1.304.55-.254 1.162-.253 1.934-.252H22V12c0-1.122 0-2.11-.02-2.985a5 5 0 0 1-6.995-6.995C14.11 2 13.122 2 12 2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" /><path opacity={0.5} d="M15.612 2.038C14.59 2 13.399 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.399 0-2.59-.038-3.612a4.5 4.5 0 0 1-6.35-6.35Z" fill="currentColor" /><path d="M3.465 20.535C4.929 22 7.286 22 12 22c4.715 0 7.072 0 8.536-1.465C21.893 19.178 21.993 17.055 22 13h-3.16c-.905 0-1.358 0-1.755.183-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214-.398.183-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183-.397-.183-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214C6.518 13 6.066 13 5.16 13H2c.007 4.055.107 6.178 1.465 7.535Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default InboxUnread