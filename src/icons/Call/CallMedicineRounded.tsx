import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CallMedicineRounded = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 12a5 5 0 1 0-4.478-2.774.817.817 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.817.817 0 0 1 .574.067A4.98 4.98 0 0 0 17 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15 7h4m-2 2V5M2.007 9.933c-.073 1.908.41 5.149 3.66 8.4A14.156 14.156 0 0 0 8 20.232M3.538 6.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-.814.031-1.87-.039-3.067-.382" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 12a5 5 0 1 0-4.478-2.774.817.817 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.817.817 0 0 1 .574.067A4.98 4.98 0 0 0 17 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15 7h4m-2 2V5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m8.038 7.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 12a5 5 0 1 0-4.478-2.774.817.817 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.817.817 0 0 1 .574.067A4.98 4.98 0 0 0 17 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15 7h4m-2 2V5M8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0 0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91 0 0 0 0 0 0 .923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22.75 7a5.75 5.75 0 1 0-10.9 2.56.129.129 0 0 1 .013.04v.007l-.297 1.113a1.4 1.4 0 0 0 1.714 1.714l1.113-.298c-.002 0-.001 0 0 0h.007a.126.126 0 0 1 .04.014A5.75 5.75 0 0 0 22.75 7Zm-8.357 5.136ZM17 2.75a4.25 4.25 0 1 1-1.892 8.057 1.567 1.567 0 0 0-1.102-.12l-.946.253.253-.946a1.566 1.566 0 0 0-.12-1.102A4.25 4.25 0 0 1 17 2.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17 4.25a.75.75 0 0 1 .75.75v1.25H19a.75.75 0 0 1 0 1.5h-1.25V9a.75.75 0 0 1-1.5 0V7.75H15a.75.75 0 0 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75ZM3.007 6.407c1.68-1.68 4.516-1.552 5.685.544l.65 1.163c.763 1.368.438 3.095-.68 4.227a.63.63 0 0 0-.104.337c-.013.256.078.849.997 1.767.918.918 1.51 1.01 1.767.997a.63.63 0 0 0 .337-.104c1.131-1.118 2.859-1.443 4.227-.68l1.163.65c2.096 1.17 2.224 4.005.544 5.684-.899.9-2.094 1.698-3.498 1.75-2.08.08-5.536-.458-8.958-3.88-3.421-3.421-3.959-6.876-3.88-8.957.053-1.405.852-2.6 1.75-3.498Zm4.376 1.275c-.6-1.074-2.21-1.32-3.315-.214-.775.775-1.28 1.63-1.312 2.493-.066 1.736.363 4.762 3.442 7.841 3.08 3.08 6.105 3.508 7.84 3.442.863-.033 1.72-.537 2.494-1.312 1.106-1.106.86-2.716-.214-3.315l-1.163-.649c-.723-.403-1.74-.266-2.452.448-.07.07-.517.486-1.308.524-.81.04-1.791-.324-2.9-1.434-1.111-1.11-1.475-2.091-1.435-2.902.038-.791.455-1.237.524-1.306.714-.714.851-1.73.448-2.453l-.65-1.163Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 7a5 5 0 0 1-7.226 4.478.817.817 0 0 0-.574-.067l-1.113.298a.65.65 0 0 1-.796-.796l.298-1.113a.817.817 0 0 0-.067-.574A5 5 0 1 1 22 7Zm-5-2.188c.518 0 .938.42.938.938v.313h.312a.937.937 0 1 1 0 1.875h-.313v.312a.937.937 0 1 1-1.875 0v-.313h-.312a.937.937 0 1 1 0-1.875h.313V5.75c0-.518.42-.938.937-.938Z" fill="currentColor" /><path d="m8.038 7.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.027 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 7a5 5 0 0 1-7.226 4.478.817.817 0 0 0-.574-.067l-1.113.298a.65.65 0 0 1-.796-.796l.298-1.113a.817.817 0 0 0-.067-.574A5 5 0 1 1 22 7Zm-5-2.188c.518 0 .938.42.938.938v.313h.312a.937.937 0 1 1 0 1.875h-.313v.312a.937.937 0 1 1-1.875 0v-.313h-.312a.937.937 0 1 1 0-1.875h.313V5.75c0-.518.42-.938.937-.938Z" fill="currentColor" /><path opacity={0.5} d="m8.038 7.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.027 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CallMedicineRounded