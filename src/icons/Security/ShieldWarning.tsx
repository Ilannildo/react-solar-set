import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ShieldWarning = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 8v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={12} cy={15} r={1} fill="currentColor" /><path d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473.579-.252 1.231-.58 1.899-.994" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 8v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={12} cy={15} r={1} fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 8v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={12} cy={15} r={1} fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.723 2.051c1.444-.494 2.34-.801 3.277-.801.938 0 1.833.307 3.277.801l.727.25c1.481.506 2.625.898 3.443 1.23.412.167.767.33 1.052.495.275.16.55.359.737.626.185.263.281.587.341.9.063.324.1.713.125 1.16.048.886.048 2.102.048 3.678v1.601c0 6.101-4.608 9.026-7.348 10.224l-.027.011c-.34.149-.66.288-1.027.382-.387.1-.799.142-1.348.142-.55 0-.96-.042-1.348-.142-.367-.094-.687-.233-1.027-.382l-.027-.011C6.858 21.017 2.25 18.092 2.25 11.99V10.39c0-1.576 0-2.792.048-3.679.025-.446.062-.835.125-1.16.06-.312.156-.636.34-.9.188-.266.463-.465.738-.625.285-.165.64-.328 1.052-.495.818-.332 1.962-.724 3.443-1.23l.727-.25ZM12 2.75c-.658 0-1.305.212-2.92.764l-.572.196c-1.513.518-2.616.896-3.39 1.21a7.137 7.137 0 0 0-.864.404 1.648 1.648 0 0 0-.208.139.386.386 0 0 0-.055.05.409.409 0 0 0-.032.074c-.02.056-.042.136-.063.248a7.438 7.438 0 0 0-.1.958c-.046.841-.046 2.015-.046 3.624v1.574c0 5.175 3.87 7.723 6.449 8.849.371.162.586.254.825.315.228.059.506.095.976.095s.748-.036.976-.095c.24-.06.454-.153.825-.315 2.58-1.127 6.449-3.674 6.449-8.849v-1.574c0-1.609 0-2.783-.046-3.624a7.423 7.423 0 0 0-.1-.958 1.738 1.738 0 0 0-.063-.248.408.408 0 0 0-.032-.074.385.385 0 0 0-.055-.05 1.64 1.64 0 0 0-.208-.14 7.135 7.135 0 0 0-.864-.402c-.774-.315-1.877-.693-3.39-1.21l-.573-.197C13.305 2.962 12.658 2.75 12 2.75Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Zm9-3.167a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" fill="currentColor" /><path d="M12 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ShieldWarning