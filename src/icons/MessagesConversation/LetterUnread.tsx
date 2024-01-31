import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const LetterUnread = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-.946.018-1.273 0-2m-9-6h-3C6.229 4 4.343 4 3.172 5.172 2.518 5.825 2.229 6.7 2.102 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m6 8 1.664 1.387m8.177.412c-1.836 1.53-2.755 2.296-3.841 2.296-.65 0-1.239-.274-2-.82" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 10c.018.727 0 1.054 0 2 0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m6 8 2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295 1.086 0 2.005-.765 3.841-2.296" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10c.018.727 0 1.054 0 2 0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m6 8 2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295 1.086 0 2.005-.765 3.841-2.296" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M19 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM9.944 3.25H13a.75.75 0 0 1 0 1.5h-3c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289 0 1.907.002 3.261.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.028.14-2.382.14-4.289 0-.373.003-.645.005-.88.004-.379.007-.658-.005-1.1a.75.75 0 0 1 1.5-.04c.012.467.009.785.005 1.187-.002.234-.005.497-.005.833v.056c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm-4.52 4.27a.75.75 0 0 1 1.056-.096L8.64 9.223c.933.777 1.58 1.315 2.128 1.667.529.34.888.455 1.233.455.345 0 .704-.114 1.233-.455.547-.352 1.195-.89 2.128-1.667a.75.75 0 1 1 .96 1.152l-.037.032c-.887.738-1.605 1.337-2.24 1.745-.66.425-1.303.693-2.044.693-.741 0-1.384-.269-2.045-.693-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1-.096-1.057Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14 5h-4C6.229 5 4.343 5 3.172 6.172 2 7.343 2 9.229 2 13c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13c0-1.453 0-2.627-.067-3.587A4.482 4.482 0 0 1 19 10.5c-.479 0-.94-.075-1.373-.213l-1.343 1.12c-.887.738-1.605 1.337-2.24 1.745-.66.425-1.303.693-2.044.693-.741 0-1.384-.269-2.045-.693-.634-.408-1.352-1.007-2.239-1.745L5.52 9.577a.75.75 0 0 1 .96-1.153l2.159 1.799c.933.777 1.58 1.315 2.128 1.667.529.34.888.455 1.233.455.345 0 .704-.114 1.233-.455.547-.352 1.195-.89 2.128-1.667l.84-.7A4.492 4.492 0 0 1 14.61 5H14Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M24 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM17.234 7.464l-1.537 1.28c-1.026.856-1.738 1.447-2.34 1.834-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.765a.825.825 0 0 0-1.056 1.268l2.416 2.014c.975.812 1.765 1.47 2.463 1.92.726.466 1.434.762 2.25.762.814 0 1.522-.296 2.248-.763.698-.448 1.488-1.107 2.463-1.92l1.666-1.388a4.524 4.524 0 0 1-1.144-1.194Z" fill="currentColor" /><path d="M18.454 6.587a.825.825 0 0 1 .958.959 3.015 3.015 0 0 1-.958-.959Z" fill="currentColor" /><path opacity={0.5} d="M16.958 3.021C16.156 3 15.244 3 14.2 3H9.8C5.652 3 3.577 3 2.289 4.318 1 5.636 1 7.758 1 12c0 4.243 0 6.364 1.289 7.682C3.577 21 5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318C23 18.364 23 16.242 23 12c0-1.067 0-2-.02-2.82a4.4 4.4 0 0 1-1.98.468c-2.485 0-4.5-2.06-4.5-4.603 0-.726.165-1.413.458-2.024Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default LetterUnread