import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Pulse = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 15h1.394c.786 0 1.18 0 1.511.177.332.178.55.505.986 1.159l.16.24c.422.633.633.95.92.933.286-.017.459-.356.803-1.036l1.966-3.877c.359-.706.538-1.06.831-1.071.293-.012.5.326.914 1.001l.637 1.04c.43.701.644 1.051.985 1.243.342.19.752.19 1.573.19H19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 15h1.394c.786 0 1.18 0 1.511.177.332.178.55.505.986 1.159l.16.24c.422.633.633.95.92.933.286-.017.459-.356.803-1.036l1.966-3.877c.359-.706.538-1.06.831-1.071.293-.012.5.326.914 1.001l.637 1.04c.43.701.644 1.051.985 1.243.342.19.752.19 1.573.19H19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 15h1.394c.786 0 1.18 0 1.511.177.332.178.55.505.986 1.159l.16.24c.422.633.633.95.92.933.286-.017.459-.356.803-1.036l1.966-3.877c.359-.706.538-1.06.831-1.071.293-.012.5.326.914 1.001l.637 1.04c.43.701.644 1.051.985 1.243.342.19.752.19 1.573.19H19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.1 12.094c-.185-.302-.366-.597-.542-.807-.187-.224-.515-.532-1.017-.512-.502.02-.804.353-.973.591-.159.225-.315.532-.475.848l-1.988 3.92c-.075.148-.137.271-.193.377a23.575 23.575 0 0 1-.238-.351l-.176-.266a11.045 11.045 0 0 0-.557-.788 2.224 2.224 0 0 0-.682-.59 2.226 2.226 0 0 0-.87-.24c-.272-.026-.597-.026-.964-.026H5a.75.75 0 0 0 0 1.5h1.394c.407 0 .661 0 .856.019.18.017.254.044.301.07.047.025.111.07.225.211.123.152.265.363.49.702l.187.279c.188.283.373.56.553.759.192.213.522.497 1.01.468.486-.029.78-.35.947-.584.154-.219.305-.517.459-.82l1.987-3.918c.079-.155.144-.284.203-.395.067.106.143.23.233.377l.654 1.068c.2.327.378.616.55.844.186.247.399.469.692.633.293.164.593.23.901.26.284.027.623.027 1.006.027H19a.75.75 0 0 0 0-1.5h-1.32c-.424 0-.69 0-.894-.02-.188-.019-.264-.049-.312-.076-.049-.027-.114-.076-.227-.227-.124-.163-.263-.39-.485-.752l-.663-1.082Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm11.635 8.63c-.184-.302-.365-.597-.541-.807-.187-.224-.515-.532-1.017-.512-.502.02-.804.353-.973.591-.159.225-.315.532-.475.848l-1.988 3.92c-.075.148-.137.271-.193.377a23.575 23.575 0 0 1-.238-.351l-.176-.266a11.045 11.045 0 0 0-.557-.788 2.224 2.224 0 0 0-.682-.59 2.226 2.226 0 0 0-.87-.24c-.272-.026-.597-.026-.964-.026H5a.75.75 0 0 0 0 1.5h1.394c.407 0 .661 0 .856.019.18.017.254.044.301.07.047.025.111.07.225.211.123.152.265.363.49.702l.187.279c.188.283.373.56.553.759.192.213.522.497 1.01.468.486-.029.78-.35.947-.584.154-.219.305-.517.459-.82l1.987-3.918c.079-.155.144-.284.203-.395.067.106.143.23.233.377l.654 1.068c.2.327.378.616.55.844.186.247.399.469.692.633.293.164.593.23.901.26.284.027.623.027 1.006.027H19a.75.75 0 0 0 0-1.5h-1.32c-.424 0-.69 0-.894-.02-.188-.019-.264-.049-.312-.076-.049-.027-.114-.076-.227-.227-.124-.163-.263-.39-.485-.752l-.663-1.082Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path d="M15.1 12.094c-.185-.302-.366-.597-.542-.807-.187-.224-.515-.532-1.017-.512-.502.02-.804.353-.973.591-.159.225-.315.532-.475.848l-1.988 3.92c-.075.148-.137.271-.193.377a23.641 23.641 0 0 1-.238-.351l-.176-.266a11.045 11.045 0 0 0-.557-.788 2.223 2.223 0 0 0-.682-.59 2.222 2.222 0 0 0-.87-.24 11.008 11.008 0 0 0-.964-.026H5a.75.75 0 1 0 0 1.5h1.394c.407 0 .661 0 .856.019.18.017.254.044.301.07.047.025.111.07.225.211.123.152.265.363.49.702l.187.279c.188.283.373.56.553.759.192.213.522.497 1.01.468.486-.029.78-.35.947-.584.154-.219.305-.517.459-.82l1.987-3.918c.079-.155.144-.284.203-.395.067.106.143.23.233.377l.654 1.068c.2.327.378.616.55.844.186.247.399.469.692.633.293.164.593.23.901.26.284.027.623.027 1.006.027H19a.75.75 0 0 0 0-1.5h-1.32c-.424 0-.69 0-.894-.02-.188-.019-.264-.049-.312-.076-.049-.027-.114-.076-.227-.227a10.45 10.45 0 0 1-.485-.752l-.663-1.081Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Pulse