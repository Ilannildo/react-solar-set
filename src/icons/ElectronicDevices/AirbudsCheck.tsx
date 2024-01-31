import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const AirbudsCheck = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 11.5v-.2a1 1 0 0 1 1-1 3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0H6m4.5 0v-5M6 19v-5.7a1 1 0 0 0-1-1 3 3 0 0 1-3-3V7.187c0-.174 0-.26.004-.334a3 3 0 0 1 2.849-2.85C4.926 4 5.013 4 5.188 4c.29 0 .435 0 .557.006a5 5 0 0 1 4.749 4.749c.006.122.006.267.006.557V10M19.5 5v2.5M4.5 7v2.5M22 18a4 4 0 1 0-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m16.5 18.2.857.8 2.143-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 11.5v-.2a1 1 0 0 1 1-1 3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0V9.312c0-.29 0-.435-.006-.557a5 5 0 0 0-4.749-4.749C5.623 4 5.478 4 5.187 4c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 6.926 2 7.013 2 7.188V9.3a3 3 0 0 0 3 3 1 1 0 0 1 1 1V19m4.5 0H6" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M19.5 5v2.5M4.5 7v2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle opacity={0.5} cx={18} cy={18} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="m16.5 18.2.857.8 2.143-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 11.5v-.2a1 1 0 0 1 1-1 3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0V9.312c0-.29 0-.435-.006-.557a5 5 0 0 0-4.749-4.749C5.623 4 5.478 4 5.187 4c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 6.926 2 7.013 2 7.188V9.3a3 3 0 0 0 3 3 1 1 0 0 1 1 1V19m4.5 0H6" stroke="currentColor" strokeWidth={1.5} /><path d="M19.5 5v2.5M4.5 7v2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={18} cy={18} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="m16.5 18.2.857.8 2.143-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M19.11 2.753a7.136 7.136 0 0 0-.297-.003c-.3 0-.422 0-.521.005a4.25 4.25 0 0 0-4.037 4.036c-.005.1-.005.222-.005.521V13.5a.75.75 0 0 1-1.5 0V7.287c0-.266 0-.428.007-.57a5.75 5.75 0 0 1 5.46-5.46c.142-.007.304-.007.57-.007h.047c.153 0 .258 0 .35.005a3.75 3.75 0 0 1 3.561 3.561c.005.092.005.197.005.35V7.3A3.75 3.75 0 0 1 19 11.05a.25.25 0 0 0-.25.25v.2a.75.75 0 0 1-1.5 0v-.2c0-.966.784-1.75 1.75-1.75a2.25 2.25 0 0 0 2.25-2.25V5.188c0-.184 0-.248-.003-.298a2.25 2.25 0 0 0-2.137-2.137ZM5.166 3.25h.047c.266 0 .428 0 .57.007a5.75 5.75 0 0 1 5.46 5.46c.007.142.007.304.007.57V19.75a3 3 0 1 1-6 0V13.3a.25.25 0 0 0-.25-.25A3.75 3.75 0 0 1 1.25 9.3V7.166c0-.153 0-.258.005-.35a3.75 3.75 0 0 1 3.561-3.561c.092-.005.197-.005.35-.005Zm.021 1.5c-.183 0-.247 0-.297.003A2.25 2.25 0 0 0 2.753 6.89c-.003.05-.003.115-.003.298V9.3A2.25 2.25 0 0 0 5 11.55c.966 0 1.75.784 1.75 1.75v4.95h3V9.312c0-.299 0-.421-.005-.52a4.25 4.25 0 0 0-4.036-4.037c-.1-.005-.222-.005-.521-.005Zm4.563 15h-3a1.5 1.5 0 0 0 3 0Zm9.75-15.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm-15 2a.75.75 0 0 1 .75.75v2.5a.75.75 0 1 1-1.5 0V7a.75.75 0 0 1 .75-.75Zm13.5 8.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM13.25 18a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Zm6.798-1.512a.75.75 0 0 1-.036 1.06l-2.143 2a.75.75 0 0 1-1.024 0l-.857-.8a.75.75 0 0 1 1.024-1.096l.345.322 1.631-1.522a.75.75 0 0 1 1.06.036Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2 7.188V9.3c0 1.657 1.422 3 3.176 3 .585 0 1.06.448 1.06 1v4.95H11V9.312c0-.29 0-.435-.006-.557-.134-2.569-2.309-4.623-5.028-4.749C5.836 4 5.682 4 5.375 4c-.184 0-.277 0-.354.004-1.632.075-2.937 1.308-3.017 2.849C2 6.926 2 7.013 2 7.188ZM3.75 7a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0V7Z" fill="currentColor" /><path d="M8.618 22C9.933 22 11 20.993 11 19.75H6.235c0 1.243 1.067 2.25 2.383 2.25Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm2.012-4.452a.75.75 0 1 0-1.024-1.096l-1.63 1.522-.346-.322a.75.75 0 0 0-1.024 1.096l.857.8a.75.75 0 0 0 1.024 0l2.143-2ZM22 7.3V5.188c0-.175 0-.262-.004-.335-.08-1.541-1.385-2.774-3.017-2.85C18.901 2 18.81 2 18.625 2c-.307 0-.46 0-.59.006-2.72.126-4.895 2.18-5.029 4.749-.006.122-.006.267-.006.558v8.393a5.502 5.502 0 0 1 4.765-3.201V11.3c0-.552.474-1 1.058-1 1.755 0 3.177-1.343 3.177-3Zm-2.5-3.05a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="currentColor" /><path d="M20.012 17.548a.75.75 0 1 0-1.024-1.096l-1.63 1.522-.346-.322a.75.75 0 0 0-1.024 1.096l.857.8a.75.75 0 0 0 1.024 0l2.143-2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22 7.3V5.188c0-.175 0-.262-.004-.335-.08-1.541-1.385-2.774-3.017-2.85C18.901 2 18.81 2 18.625 2c-.307 0-.46 0-.59.006-2.72.126-4.895 2.18-5.029 4.749-.006.122-.006.267-.006.558v8.393a5.502 5.502 0 0 1 4.765-3.201V11.3c0-.552.474-1 1.058-1 1.755 0 3.177-1.343 3.177-3ZM20.25 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0V5Z" fill="currentColor" /><path opacity={0.5} d="M2 9.3V7.187c0-.174 0-.26.004-.334.08-1.541 1.385-2.774 3.017-2.85C5.098 4 5.19 4 5.375 4c.307 0 .46 0 .59.006 2.72.126 4.895 2.18 5.029 4.749.006.122.006.267.006.557V19.75C11 20.993 9.933 22 8.618 22c-1.316 0-2.383-1.007-2.383-2.25V13.3c0-.552-.474-1-1.059-1C3.422 12.3 2 10.957 2 9.3Z" fill="currentColor" /><path d="M11 18.25H6.235v1.5H11v-1.5ZM4.5 6.25a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default AirbudsCheck