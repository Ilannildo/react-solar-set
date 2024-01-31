import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const TextSquare2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 3C7.749 3 5.623 3 4.303 4.318 3.298 5.321 3.058 6.788 3 9.3m18 0c-.058-2.512-.298-3.98-1.303-4.982-.818-.817-1.946-1.127-3.697-1.246M21 14.7c-.058 2.512-.298 3.98-1.303 4.982C18.377 21 16.251 21 12 21c-4.251 0-6.377 0-7.697-1.318C3.298 18.679 3.058 17.212 3 14.7M8 8h8M12 16V8M22 12h-2M4 12H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M21 9.3c-.058-2.512-.298-3.98-1.303-4.982C18.377 3 16.251 3 12 3 7.749 3 5.623 3 4.303 4.318 3.298 5.321 3.058 6.788 3 9.3m18 5.4c-.058 2.512-.298 3.98-1.303 4.982C18.377 21 16.251 21 12 21c-4.251 0-6.377 0-7.697-1.318C3.298 18.679 3.058 17.212 3 14.7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 8h8M12 16V8M22 12h-2M4 12H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 9.3c-.058-2.512-.298-3.98-1.303-4.982C18.377 3 16.251 3 12 3 7.749 3 5.623 3 4.303 4.318 3.298 5.321 3.058 6.788 3 9.3m18 5.4c-.058 2.512-.298 3.98-1.303 4.982C18.377 21 16.251 21 12 21c-4.251 0-6.377 0-7.697-1.318C3.298 18.679 3.058 17.212 3 14.7M8 8h8M12 16V8M22 12h-2M4 12H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.943 2.25h.114c2.077 0 3.713 0 4.99.171 1.311.176 2.357.545 3.18 1.366 1.243 1.24 1.466 3.011 1.523 5.496a.75.75 0 1 1-1.5.034c-.058-2.54-.316-3.703-1.082-4.468-.498-.497-1.175-.787-2.32-.94-1.166-.157-2.701-.159-4.848-.159s-3.682.002-4.848.158c-1.145.154-1.822.444-2.32.94-.766.766-1.024 1.93-1.082 4.47a.75.75 0 1 1-1.5-.035c.057-2.485.28-4.255 1.523-5.496.823-.821 1.869-1.19 3.18-1.366 1.277-.171 2.913-.171 4.99-.171ZM2.983 13.95a.75.75 0 0 1 .767.733c.058 2.54.316 3.703 1.082 4.468.498.497 1.175.787 2.32.94 1.166.157 2.701.159 4.848.159s3.681-.002 4.848-.158c1.145-.154 1.822-.444 2.32-.94.766-.766 1.024-1.93 1.082-4.47a.75.75 0 0 1 1.5.035c-.057 2.485-.28 4.255-1.523 5.496-.823.821-1.869 1.19-3.18 1.366-1.277.171-2.913.171-4.99.171h-.114c-2.077 0-3.713 0-4.99-.171-1.311-.176-2.357-.545-3.18-1.366-1.243-1.24-1.466-3.011-1.523-5.496a.75.75 0 0 1 .733-.767Z" fill="currentColor" /><path d="M7.25 8A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5h-3.25V16a.75.75 0 0 1-1.5 0V8.75H8A.75.75 0 0 1 7.25 8ZM19.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM2 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H2Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.467 2a.752.752 0 0 0-.165.015C13.552 2 12.722 2 11.807 2h-.114c-.915 0-1.744 0-2.495.015A.752.752 0 0 0 9.033 2c-2.485.057-4.255.28-5.496 1.523l-.007.007-.007.007C2.28 4.777 2.057 6.548 2 9.033a.752.752 0 0 0 .015.165L2.01 9.5h1.74a2.25 2.25 0 0 1 0 4.5H2.01l.005.302a.752.752 0 0 0-.015.165c.057 2.485.28 4.255 1.523 5.496l.007.007.007.007c1.24 1.243 3.011 1.466 5.496 1.523a.753.753 0 0 0 .165-.015c.75.015 1.58.015 2.495.015h.114c.915 0 1.744 0 2.495-.015.053.011.109.016.165.015 2.485-.057 4.255-.28 5.496-1.523l.007-.007.007-.007c1.243-1.24 1.466-3.011 1.523-5.496a.753.753 0 0 0-.015-.165L21.49 14h-1.74a2.25 2.25 0 0 1 0-4.5h1.74a55.652 55.652 0 0 0-.005-.302.753.753 0 0 0 .015-.165c-.057-2.485-.28-4.255-1.523-5.496l-.007-.007-.007-.007C18.723 2.28 16.952 2.057 14.467 2ZM7.75 7a.75.75 0 0 0 0 1.5H11v7.25a.75.75 0 0 0 1.5 0V8.5h3.25a.75.75 0 0 0 0-1.5h-8Z" fill="currentColor" /><path d="M19 11.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM1.75 11a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.75 7a.75.75 0 0 0 0 1.5H11v7.25a.75.75 0 0 0 1.5 0V8.5h3.25a.75.75 0 0 0 0-1.5h-8ZM20 11.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75ZM.75 11a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5H.75Z" fill="currentColor" /><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TextSquare2