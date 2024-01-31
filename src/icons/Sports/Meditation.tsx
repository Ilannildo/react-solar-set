import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Meditation = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="m3 17 2.589-1.308A.752.752 0 0 0 6 15.02c0-2.94 2.138-5.454 5.007-5.938A6.02 6.02 0 0 1 14 9.345M21 17l-2.589-1.308A.752.752 0 0 1 18 15.02a6 6 0 0 0-.814-3.02M9.5 16l-1.042 1.389-.063.084a2 2 0 0 1-1.034.686l-.102.026-1.485.371A2.342 2.342 0 0 0 4 20.83C4 21.476 4.524 22 5.171 22h1.556c.6 0 .9 0 1.19-.034a5 5 0 0 0 1.929-.643c.253-.147.493-.327.972-.687L11 20.5m0 0 2-1.5m-2 1.5 2.54.952c.61.229.914.343 1.229.417.163.038.328.068.493.09.321.041.647.041 1.298.041h2.269c.647 0 1.171-.524 1.171-1.171a2.342 2.342 0 0 0-1.774-2.273l-1.485-.37-.102-.027a2 2 0 0 1-1.034-.686l-.063-.084L14.5 16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m3 17 2.589-1.308A.752.752 0 0 0 6 15.02c0-2.94 2.138-5.454 5.007-5.938a6.02 6.02 0 0 1 1.986 0C15.863 9.566 18 12.08 18 15.02c0 .284.16.545.411.672L21 17" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="m9.5 16-1.042 1.389-.063.084a2 2 0 0 1-1.034.686l-.102.026-1.485.371A2.342 2.342 0 0 0 4 20.83C4 21.476 4.524 22 5.171 22h1.556c.6 0 .9 0 1.19-.034a5 5 0 0 0 1.929-.643c.253-.147.493-.327.972-.687L11 20.5m0 0 2-1.5m-2 1.5 2.54.952c.61.229.914.343 1.229.417.163.038.328.068.493.09.321.041.647.041 1.298.041h2.269c.647 0 1.171-.524 1.171-1.171a2.342 2.342 0 0 0-1.774-2.273l-1.485-.37-.102-.027a2 2 0 0 1-1.034-.686l-.063-.084L14.5 16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="m3 17 2.589-1.308A.752.752 0 0 0 6 15.02c0-2.94 2.138-5.454 5.007-5.938a6.02 6.02 0 0 1 1.986 0C15.863 9.566 18 12.08 18 15.02c0 .284.16.545.411.672L21 17" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="m9.5 16-1.042 1.389-.063.084a2 2 0 0 1-1.034.686l-.102.026-1.485.371A2.342 2.342 0 0 0 4 20.83C4 21.476 4.524 22 5.171 22h1.556c.6 0 .9 0 1.19-.034a5 5 0 0 0 1.929-.643c.253-.147.493-.327.972-.687L11 20.5m0 0 2-1.5m-2 1.5 2.54.952c.61.229.914.343 1.229.417.163.038.328.068.493.09.321.041.647.041 1.298.041h2.269c.647 0 1.171-.524 1.171-1.171a2.342 2.342 0 0 0-1.774-2.273l-1.485-.37-.102-.027a2 2 0 0 1-1.034-.686l-.063-.084L14.5 16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM8.75 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm4.119 5.322a5.271 5.271 0 0 0-1.738 0c-2.507.423-4.38 2.624-4.38 5.198 0 .564-.317 1.085-.824 1.341L3.338 17.67a.75.75 0 0 1-.676-1.338l2.587-1.308.001-.003c0-3.306 2.402-6.133 5.632-6.677a6.771 6.771 0 0 1 2.236 0c3.23.544 5.632 3.371 5.632 6.677v.003l2.588 1.308a.75.75 0 1 1-.676 1.338l-2.589-1.308a1.502 1.502 0 0 1-.823-1.341c0-2.574-1.873-4.775-4.381-5.198ZM9.95 15.4a.75.75 0 0 1 .15 1.05l-1.046 1.395-.071.093a2.75 2.75 0 0 1-1.534.973l-.008.002-1.485.371a1.592 1.592 0 0 0-1.206 1.545c0 .232.189.421.421.421h1.556c.617 0 .865-.001 1.103-.03a4.248 4.248 0 0 0 1.64-.546c.206-.12.405-.268.898-.638l.182-.136 2-1.5a.75.75 0 0 1 .9 1.2l-.904.678 1.257.472c.627.235.88.328 1.137.389.138.032.278.057.42.076.261.034.53.035 1.2.035h2.269a.421.421 0 0 0 .421-.421c0-.73-.497-1.368-1.206-1.545l-1.493-.373-.112-.03a2.75 2.75 0 0 1-1.492-1.036l-.005-.006L13.9 16.45a.75.75 0 1 1 1.2-.9l1.042 1.389.052.069a1.25 1.25 0 0 0 .729.45l1.485.37a3.092 3.092 0 0 1 2.342 3c0 1.062-.86 1.922-1.921 1.922h-2.32c-.603 0-.974 0-1.343-.048a5.75 5.75 0 0 1-.568-.103c-.362-.085-.71-.215-1.273-.426l-2.204-.826c-.38.285-.631.47-.898.624a5.75 5.75 0 0 1-2.218.74c-.335.04-.676.039-1.23.039H5.172a1.921 1.921 0 0 1-1.92-1.921c0-1.42.965-2.656 2.341-3l1.485-.371.084-.022a1.25 1.25 0 0 0 .697-.497L8.9 15.55a.75.75 0 0 1 1.05-.15Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.869 9.822a5.271 5.271 0 0 0-1.738 0c-2.507.423-4.38 2.624-4.38 5.198 0 .564-.317 1.085-.824 1.341L3.338 17.67a.75.75 0 0 1-.676-1.338l2.587-1.308.001-.003c0-3.306 2.402-6.133 5.632-6.677a6.771 6.771 0 0 1 2.236 0c3.23.544 5.632 3.371 5.632 6.677v.002l2.588 1.309a.75.75 0 1 1-.676 1.338l-2.589-1.308a1.502 1.502 0 0 1-.823-1.341c0-2.574-1.873-4.775-4.381-5.198ZM9.95 15.4a.75.75 0 0 1 .15 1.05l-1.046 1.395-.071.093a2.75 2.75 0 0 1-1.421.944l-.113.029-.008.002-1.485.371a1.592 1.592 0 0 0-1.206 1.545c0 .232.189.421.421.421h1.556c.617 0 .865-.001 1.103-.03a4.248 4.248 0 0 0 1.64-.546c.206-.12.405-.268.898-.638L12.55 18.4a.75.75 0 0 1 .9 1.2l-.904.678 1.257.472c.627.235.88.328 1.137.389.138.032.278.057.42.076.261.034.53.035 1.2.035h2.269a.421.421 0 0 0 .421-.421c0-.73-.497-1.368-1.206-1.545l-1.493-.373-.112-.03a2.75 2.75 0 0 1-1.422-.943l-.07-.093L13.9 16.45a.75.75 0 1 1 1.2-.9l1.042 1.389.052.069a1.25 1.25 0 0 0 .729.45l1.485.37a3.092 3.092 0 0 1 2.342 3c0 1.062-.86 1.922-1.921 1.922h-2.321c-.602 0-.973 0-1.342-.048a5.75 5.75 0 0 1-.568-.103c-.362-.085-.71-.215-1.273-.426l-2.204-.826c-.38.285-.631.47-.898.624a5.75 5.75 0 0 1-2.218.74c-.335.04-.676.039-1.23.039H5.172a1.921 1.921 0 0 1-1.92-1.921c0-1.42.965-2.656 2.341-3l1.485-.371a1.25 1.25 0 0 0 .781-.519L8.9 15.55a.75.75 0 0 1 1.05-.15Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.95 15.4a.75.75 0 0 1 .15 1.05l-1.047 1.395-.07.093a2.75 2.75 0 0 1-1.421.944l-.113.029-.008.002-1.485.371a1.592 1.592 0 0 0-1.206 1.545c0 .232.189.421.421.421h1.556c.617 0 .865-.001 1.102-.03a4.248 4.248 0 0 0 1.64-.546c.206-.12.406-.268.9-.638L12.55 18.4a.75.75 0 1 1 .9 1.2l-.905.678 1.258.472c.627.235.88.328 1.136.389.139.032.28.057.42.076.262.034.531.035 1.2.035h2.27a.421.421 0 0 0 .421-.421c0-.73-.497-1.368-1.206-1.545l-1.493-.373-.113-.03a2.749 2.749 0 0 1-1.42-.943c-.023-.028-.044-.057-.072-.093L13.9 16.45a.75.75 0 1 1 1.2-.9l1.042 1.389.052.069a1.25 1.25 0 0 0 .729.45l1.485.37a3.092 3.092 0 0 1 2.342 3c0 1.062-.86 1.922-1.921 1.922h-2.321c-.602 0-.973 0-1.342-.048-.191-.025-.38-.06-.568-.103-.363-.085-.71-.215-1.273-.426l-2.204-.826c-.38.285-.631.47-.898.624a5.751 5.751 0 0 1-2.218.74c-.335.04-.676.039-1.23.039H5.171a1.921 1.921 0 0 1-1.921-1.921c0-1.42.966-2.656 2.342-3l1.485-.371a1.25 1.25 0 0 0 .781-.519L8.9 15.55a.75.75 0 0 1 1.05-.15Z" fill="currentColor" /><path d="M12.869 9.822a5.271 5.271 0 0 0-1.738 0c-2.507.423-4.38 2.624-4.38 5.198 0 .564-.317 1.085-.824 1.341L3.338 17.67a.75.75 0 0 1-.676-1.338l2.587-1.308.001-.003c0-3.306 2.402-6.133 5.632-6.677a6.771 6.771 0 0 1 2.236 0c3.23.544 5.632 3.371 5.632 6.677v.002l2.588 1.309a.75.75 0 1 1-.676 1.338l-2.589-1.308a1.502 1.502 0 0 1-.823-1.341c0-2.574-1.873-4.775-4.381-5.198Z" fill="currentColor" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Meditation