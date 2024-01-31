import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HeartLock = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m9.266 20.615.455-.596-.455.596ZM12 8.931l-.532.528a.75.75 0 0 0 1.064 0L12 8.931Zm2.734 11.684.456.597-.456-.597ZM7.54 18.364a.75.75 0 1 0-.935 1.173l.935-1.173Zm-4.292-2.485a.75.75 0 0 0 1.306-.738l-1.306.738Zm.503-3.78c0-1.824 1.065-3.364 2.535-4.015 1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1h1.5Zm5.06 9.113c.461.351.96.73 1.466 1.016.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328-.402-.227-.82-.541-1.294-.903l-.91 1.193Zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517 1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582-1.177 1.283-2.66 2.293-4.029 3.338l.91 1.193Zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375 1.47.65 2.535 2.19 2.535 4.015h1.5Zm-7.47 7.92c-.475.362-.893.676-1.295.903-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522.506-.287 1.005-.665 1.466-1.016l-.91-1.193Zm-4.56 0c-.719-.549-1.443-1.067-2.181-1.655l-.935 1.173c.748.596 1.54 1.166 2.207 1.675l.91-1.193Zm-5.167-4.878A6.05 6.05 0 0 1 3.75 12.1h-1.5c0 1.45.384 2.695.997 3.78l1.306-.738Z" fill="currentColor" /><path d="M17 7c0-3.314-1.988-5-5-5S7 3.686 7 7M12 12v2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M17 7c0-3.314-1.988-5-5-5S7 3.686 7 7M12 12v2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m9.266 20.615.455-.596-.455.596ZM12 8.931l-.532.528a.75.75 0 0 0 1.064 0L12 8.931Zm2.734 11.684.456.597-.456-.597Zm-5.013-.596c-1.37-1.045-2.852-2.055-4.029-3.338-1.15-1.254-1.942-2.705-1.942-4.582h-1.5c0 2.361 1.017 4.157 2.337 5.596 1.294 1.411 2.945 2.54 4.224 3.517l.91-1.193ZM3.75 12.1c0-1.824 1.065-3.364 2.535-4.015 1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1h1.5Zm5.06 9.113c.461.351.96.73 1.466 1.016.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328-.402-.227-.82-.541-1.294-.903l-.91 1.193Zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517 1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582-1.177 1.283-2.66 2.293-4.029 3.338l.91 1.193Zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375 1.47.65 2.535 2.19 2.535 4.015h1.5Zm-7.47 7.92c-.475.362-.893.676-1.295.903-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522.506-.287 1.005-.665 1.466-1.016l-.91-1.193Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 7c0-3.314-1.988-5-5-5S7 3.686 7 7M12 12v2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m9.266 20.615.455-.596-.455.596ZM12 8.931l-.532.528a.75.75 0 0 0 1.064 0L12 8.931Zm2.734 11.684.456.597-.456-.597Zm-5.013-.596c-1.37-1.045-2.852-2.055-4.029-3.338-1.15-1.254-1.942-2.705-1.942-4.582h-1.5c0 2.361 1.017 4.157 2.337 5.596 1.294 1.411 2.945 2.54 4.224 3.517l.91-1.193ZM3.75 12.1c0-1.824 1.065-3.364 2.535-4.015 1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1h1.5Zm5.06 9.113c.461.351.96.73 1.466 1.016.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328-.402-.227-.82-.541-1.294-.903l-.91 1.193Zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517 1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582-1.177 1.283-2.66 2.293-4.029 3.338l.91 1.193Zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375 1.47.65 2.535 2.19 2.535 4.015h1.5Zm-7.47 7.92c-.475.362-.893.676-1.295.903-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522.506-.287 1.005-.665 1.466-1.016l-.91-1.193Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.265 6.492c-.2.062-.396.136-.587.22C3.66 7.606 2.25 9.687 2.25 12.1c0 2.361 1.017 4.157 2.337 5.596 1.056 1.151 2.348 2.114 3.483 2.96.256.191.505.377.74.557.461.351.96.73 1.466 1.016.507.287 1.09.522 1.724.522.634 0 1.217-.235 1.724-.522.506-.287 1.005-.665 1.466-1.016.235-.18.484-.366.74-.557 1.135-.846 2.427-1.809 3.483-2.96 1.32-1.439 2.337-3.235 2.337-5.596 0-2.413-1.41-4.494-3.428-5.386a5.45 5.45 0 0 0-.587-.221c-.094-1.576-.632-2.863-1.587-3.777C15.098 1.711 13.642 1.25 12 1.25s-3.098.461-4.148 1.465c-.955.914-1.493 2.2-1.587 3.777ZM7.79 6.25c1.381-.018 2.847.492 4.21 1.658 1.363-1.166 2.829-1.676 4.21-1.658-.125-1.107-.529-1.905-1.099-2.45-.697-.668-1.74-1.05-3.111-1.05-1.37 0-2.414.382-3.111 1.05-.57.545-.974 1.343-1.099 2.45ZM3.75 12.1c0-1.825 1.065-3.365 2.535-4.016 1.429-.632 3.352-.466 5.183 1.375a.75.75 0 0 0 1.064 0c1.83-1.841 3.754-2.007 5.183-1.375 1.47.65 2.535 2.19 2.535 4.015 0 1.877-.792 3.328-1.942 4.582-.95 1.036-2.1 1.894-3.229 2.737-.269.2-.536.4-.8.601-.474.362-.892.676-1.294.903-.402.228-.72.328-.985.328-.266 0-.583-.1-.985-.328-.402-.227-.82-.541-1.294-.903a93.6 93.6 0 0 0-.8-.601c-1.128-.842-2.278-1.7-3.229-2.737-1.15-1.254-1.942-2.705-1.942-4.582Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.25 7.29V7c0-1.809.546-3.275 1.602-4.285C8.902 1.711 10.358 1.25 12 1.25s3.098.461 4.148 1.465C17.204 3.725 17.75 5.191 17.75 7v.29C19.634 7.986 21 9.872 21 12.1c0 3.838-2.968 6.052-5.496 7.937-.262.196-.52.388-.77.578C13.8 21.328 12.9 22 12 22c-.9 0-1.8-.672-2.734-1.385a87.24 87.24 0 0 0-.77-.578C5.968 18.152 3 15.937 3 12.099c0-2.226 1.366-4.112 3.25-4.81ZM7.75 7c0-1.505.447-2.539 1.139-3.2.697-.668 1.74-1.05 3.111-1.05 1.37 0 2.414.382 3.111 1.05.692.661 1.139 1.695 1.139 3.2v.001c-1.365-.032-2.86.532-4.25 1.93C10.61 7.533 9.115 6.969 7.75 7V7ZM12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M8.496 20.037C5.968 18.152 3 15.937 3 12.099c0-4.237 4.95-7.242 9-3.168 4.05-4.074 9-1.069 9 3.168 0 3.838-2.968 6.053-5.496 7.938-.262.196-.52.388-.77.578C13.8 21.328 12.9 22 12 22c-.9 0-1.8-.672-2.734-1.385-.25-.19-.508-.382-.77-.578Z" fill="currentColor" /><path d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75ZM7.75 7c0-1.505.447-2.539 1.139-3.2.697-.668 1.74-1.05 3.111-1.05 1.37 0 2.414.382 3.111 1.05.692.661 1.139 1.695 1.139 3.2v.001a4.627 4.627 0 0 1 1.5.288V7c0-1.809-.546-3.275-1.602-4.285C15.098 1.711 13.642 1.25 12 1.25s-3.098.461-4.148 1.465C6.796 3.725 6.25 5.191 6.25 7v.29A4.627 4.627 0 0 1 7.75 7V7Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HeartLock