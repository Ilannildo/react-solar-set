import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const LayersMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12s-.993.89-2.979 1.685l-2.808 1.123C14.227 15.604 13.233 16 12 16c-1.234 0-2.227-.397-4.213-1.191L4.98 13.684C2.993 12.891 2 12 2 12M2 16s.993.89 2.979 1.685l2.808 1.123C9.773 19.604 10.767 20 12 20c.954 0 1.764-.237 3-.712m4.021-1.603C21.007 16.891 22 16 22 16M4.979 6.315C2.993 7.109 2 7.506 2 8s.993.89 2.979 1.685l2.808 1.123C9.773 11.604 10.767 12 12 12c1.234 0 2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4c-.954 0-1.764.237-3 .712" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4c1.234 0 2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.123C14.227 11.604 13.233 12 12 12c-1.234 0-2.227-.397-4.213-1.191L4.98 9.684Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M22 12s-.993.89-2.979 1.685l-2.808 1.123C14.227 15.604 13.233 16 12 16c-1.234 0-2.227-.397-4.213-1.191L4.98 13.684C2.993 12.891 2 12 2 12M22 16s-.993.89-2.979 1.685l-2.808 1.123C14.227 19.604 13.233 20 12 20c-1.234 0-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4c1.234 0 2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.123C14.227 11.604 13.233 12 12 12c-1.234 0-2.227-.397-4.213-1.191L4.98 9.684Z" stroke="currentColor" strokeWidth={1.5} /><path d="M22 12s-.993.89-2.979 1.685l-2.808 1.123C14.227 15.604 13.233 16 12 16c-1.234 0-2.227-.397-4.213-1.191L4.98 13.684C2.993 12.891 2 12 2 12M22 16s-.993.89-2.979 1.685l-2.808 1.123C14.227 19.604 13.233 20 12 20c-1.234 0-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 4.75c-1.06 0-1.91.328-3.934 1.138L5.257 7.01c-1.01.404-1.71.686-2.164.924a4.11 4.11 0 0 0-.12.065l.12.065c.454.238 1.154.52 2.164.924l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123c1.01-.404 1.71-.686 2.164-.924l.12-.065a4.086 4.086 0 0 0-.12-.065c-.454-.238-1.154-.52-2.164-.924l-2.809-1.123C13.91 5.078 13.06 4.75 12 4.75Zm-4.376-.301C9.501 3.698 10.621 3.25 12 3.25c1.38 0 2.499.448 4.376 1.199l.115.046 2.854 1.142c.955.382 1.728.69 2.259.969.268.14.528.3.729.493.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493-.53.278-1.303.587-2.258.97l-2.854 1.14-.115.047c-1.877.751-2.997 1.199-4.376 1.199-1.38 0-2.499-.448-4.376-1.199l-.115-.046-2.854-1.142c-.955-.382-1.728-.69-2.259-.969a3.21 3.21 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493.53-.278 1.303-.587 2.258-.97l2.854-1.14.115-.047ZM2.5 11.44l.004.003.024.021a7.568 7.568 0 0 0 .626.451c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12.23 12.23 0 0 0 2.104-1.074 7.557 7.557 0 0 0 .65-.472l.003-.002.001-.001a.75.75 0 0 1 1 1.118L22 12l.5.558v.002l-.002.001-.005.004-.014.012c-.01.01-.026.023-.045.039a9.109 9.109 0 0 1-.77.558A13.72 13.72 0 0 1 19.3 14.38l-2.809 1.124-.115.046c-1.877.751-2.997 1.199-4.376 1.199-1.38 0-2.499-.448-4.376-1.199l-.115-.046L4.7 14.38a13.72 13.72 0 0 1-2.363-1.207 9.088 9.088 0 0 1-.771-.558 2.962 2.962 0 0 1-.045-.039l-.014-.012-.005-.004-.001-.002H1.5L2 12l-.5.559a.75.75 0 0 1 .999-1.119Zm19 4.001.002-.001a.75.75 0 0 1 1 1.118L22 16l.5.558v.002l-.002.001-.005.004-.014.012a5.337 5.337 0 0 1-.207.168c-.14.108-.342.256-.609.429A13.72 13.72 0 0 1 19.3 18.38l-2.809 1.124-.115.046c-1.877.751-2.997 1.199-4.376 1.199-1.38 0-2.499-.448-4.376-1.199l-.115-.046L4.7 18.38a13.72 13.72 0 0 1-2.363-1.207 9.088 9.088 0 0 1-.771-.558 2.962 2.962 0 0 1-.045-.039l-.014-.012-.005-.004-.001-.002H1.5L2 16l-.5.559a.75.75 0 0 1 .999-1.119l.001.001.003.002.024.021a7.568 7.568 0 0 0 .626.451c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12.23 12.23 0 0 0 2.104-1.074 7.557 7.557 0 0 0 .65-.472l.003-.002Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.624 4.449C9.501 3.698 10.621 3.25 12 3.25c1.38 0 2.499.448 4.376 1.199l2.97 1.188c.954.382 1.727.69 2.258.969.268.14.528.3.729.493.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493-.53.278-1.303.587-2.258.97l-2.97 1.187C14.5 12.302 13.38 12.75 12 12.75c-1.38 0-2.499-.448-4.376-1.199l-2.969-1.188c-.955-.382-1.728-.69-2.259-.969a3.21 3.21 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493.53-.278 1.303-.587 2.258-.97l2.97-1.187Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="m2.5 11.441.003.002.024.021a7.568 7.568 0 0 0 .626.451c.46.299 1.161.697 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12.222 12.222 0 0 0 2.104-1.074 7.557 7.557 0 0 0 .65-.472l.003-.002.001-.001a.75.75 0 0 1 1 1.118L22 12l.5.558v.002l-.002.001-.005.004-.014.012c-.01.01-.026.023-.045.039a9.109 9.109 0 0 1-.77.558A13.72 13.72 0 0 1 19.3 14.38l-2.809 1.124-.115.046c-1.877.751-2.997 1.199-4.376 1.199-1.38 0-2.499-.448-4.376-1.199l-.115-.046L4.7 14.38a13.72 13.72 0 0 1-2.363-1.207 9.088 9.088 0 0 1-.771-.558 2.962 2.962 0 0 1-.045-.039l-.014-.012-.005-.004-.001-.002H1.5L2 12l-.5.559a.75.75 0 0 1 1-1.119m0 .002ZM2.5 15.44a.75.75 0 0 0-1.057.06l1.057-.06Zm0 0 .004.003.024.021a7.568 7.568 0 0 0 .626.451c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12.23 12.23 0 0 0 2.104-1.074 7.557 7.557 0 0 0 .65-.472l.003-.002.001-.001a.75.75 0 0 1 1 1.118l-.484-.54.484.54-.002.002-.001.001-.005.004-.014.012a5.337 5.337 0 0 1-.207.168c-.14.108-.342.256-.609.429A13.72 13.72 0 0 1 19.3 18.38l-2.809 1.124-.115.046c-1.877.751-2.997 1.199-4.376 1.199-1.38 0-2.499-.448-4.376-1.199l-.115-.046L4.7 18.38a13.72 13.72 0 0 1-2.363-1.207 9.088 9.088 0 0 1-.771-.558 2.962 2.962 0 0 1-.045-.039l-.014-.012-.005-.004-.001-.002H1.5L2 16l-.5.559a.75.75 0 0 1-.058-1.06" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.624 4.449C9.501 3.698 10.621 3.25 12 3.25c1.38 0 2.499.448 4.376 1.199l2.97 1.188c.954.382 1.727.69 2.258.969.268.14.528.3.729.493.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493-.53.278-1.303.587-2.258.97l-2.97 1.187C14.5 12.302 13.38 12.75 12 12.75c-1.38 0-2.499-.448-4.376-1.199l-2.969-1.188c-.955-.382-1.728-.69-2.259-.969a3.21 3.21 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493.53-.278 1.303-.587 2.258-.97l2.97-1.187Z" fill="currentColor" /><path opacity={0.7} d="M2.502 11.443 2.5 11.44a.75.75 0 0 0-1 1.119L2 12l-.5.559H1.5l.002.002.005.004.014.012c.01.01.026.023.045.039a9.092 9.092 0 0 0 .77.558c.534.346 1.321.79 2.364 1.207l2.809 1.124.115.046c1.877.751 2.997 1.199 4.376 1.199 1.38 0 2.499-.448 4.375-1.199l.116-.046L19.3 14.38a13.715 13.715 0 0 0 2.363-1.207 9.09 9.09 0 0 0 .771-.558l.045-.039.014-.012.005-.004.001-.002h.002a.75.75 0 0 0-1-1.119l-.002.002-.002.001-.024.021-.118.094a7.583 7.583 0 0 1-.508.357c-.46.299-1.161.697-2.105 1.074l-2.808 1.123c-2.025.81-2.874 1.138-3.934 1.138s-1.91-.328-3.934-1.138L5.257 12.99a12.224 12.224 0 0 1-2.104-1.074 7.569 7.569 0 0 1-.65-.472Z" fill="currentColor" /><path opacity={0.4} d="M2.499 15.5a.75.75 0 0 0-1 1.118H1.5l.002.002.005.004.014.012c.01.01.026.023.045.039l.161.13c.14.107.343.255.61.428.533.346 1.32.79 2.363 1.207l2.809 1.124.115.046c1.877.751 2.997 1.2 4.376 1.2 1.38 0 2.499-.449 4.375-1.2l.116-.046L19.3 18.44a13.722 13.722 0 0 0 2.363-1.208 9.09 9.09 0 0 0 .771-.558 2.96 2.96 0 0 0 .045-.039l.014-.012.005-.004.001-.001.002-.002a.75.75 0 0 0-1-1.118l-.002.002-.002.001-.024.021-.118.094a7.583 7.583 0 0 1-.508.357c-.46.299-1.161.697-2.105 1.074l-2.808 1.123c-2.025.81-2.874 1.138-3.934 1.138s-1.91-.328-3.934-1.138l-2.809-1.123a12.231 12.231 0 0 1-2.104-1.073 7.569 7.569 0 0 1-.626-.452l-.025-.02-.003-.004Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default LayersMinimalistic