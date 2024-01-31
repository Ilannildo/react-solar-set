import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Paperclip2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.482 13.014c1.044-1 1.566-1.5 1.88-2.02a4.395 4.395 0 0 0 0-4.562c-.314-.52-.836-1.02-1.88-2.02-1.045-1-1.567-1.5-2.11-1.8a4.948 4.948 0 0 0-4.765 0c-.543.3-1.065.8-2.11 1.8m-1.39 13.005 7.38-7.066c.448-.429.672-.643.789-.876.21-.417.21-.903 0-1.32-.117-.233-.341-.447-.79-.876-.447-.43-.671-.644-.915-.756-.435-.2-.942-.2-1.378 0-.243.112-.467.327-.915.756l-7.326 7.015c-1.099 1.052-1.648 1.578-1.84 2.19-.15.475-.15.982 0 1.457.192.612.741 1.138 1.84 2.19C6.05 21.183 6.6 21.71 7.239 21.893a2.76 2.76 0 0 0 1.522 0c.639-.184 1.188-.71 2.287-1.762l3.717-3.558M3.508 10.146 6.503 7.28" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m8.107 17.417 7.38-7.066c.448-.429.672-.643.789-.876.21-.417.21-.903 0-1.32-.117-.233-.341-.447-.79-.876M3.509 10.146l5.99-5.735c1.044-1 1.566-1.5 2.109-1.8a4.948 4.948 0 0 1 4.765 0c.543.3 1.065.8 2.11 1.8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m18.482 13.014-.52-.541.52.541Zm-7.434 7.118-.518-.542.518.542Zm-6.096-5.838-.519-.541.519.541Zm7.326-7.014-.519-.542.52.542Zm2.293-.756-.313.681.314-.681Zm-1.378 0-.314-.681.314.68ZM4.952 20.132l-.519.541.519-.541Zm-1.84-2.19.715-.224-.715.224Zm0-1.458-.716-.224.716.224Zm5.65 5.41.206.72-.207-.72Zm-1.523 0 .207-.721-.207.72ZM19 3.87a.75.75 0 1 0-1.037 1.084L19 3.87Zm1.362 2.562.642-.387-.642.387Zm0 4.562.642.388-.642-.388Zm-2.4 1.479L10.53 19.59l1.037 1.084L19 13.556l-1.037-1.083ZM5.47 14.836l7.327-7.015-1.038-1.083-7.326 7.015 1.037 1.083Zm10.536-8.098c-.405-.387-.735-.717-1.12-.895l-.628 1.362c.1.046.218.145.71.616l1.038-1.083Zm-3.21 1.083c.493-.47.61-.57.711-.616l-.628-1.362c-.385.178-.715.508-1.12.895l1.038 1.083Zm2.09-1.978a2.402 2.402 0 0 0-2.007 0l.628 1.362a.902.902 0 0 1 .75 0l.629-1.362ZM5.47 19.59c-.558-.535-.943-.904-1.215-1.214-.267-.303-.376-.495-.428-.658l-1.43.448c.14.449.401.826.732 1.201.324.37.764.79 1.304 1.306L5.47 19.59Zm-1.037-5.837c-.54.517-.98.937-1.304 1.306-.33.376-.592.752-.733 1.2l1.431.45c.052-.163.16-.356.428-.66.272-.309.657-.678 1.215-1.213l-1.037-1.083Zm-.606 3.965a1.681 1.681 0 0 1 0-1.01l-1.43-.448a3.181 3.181 0 0 0 0 1.906l1.43-.448Zm6.703 1.872c-.56.535-.945.903-1.269 1.165-.316.254-.523.365-.707.418l.414 1.441c.455-.13.842-.375 1.235-.692.385-.31.824-.731 1.364-1.248L10.53 19.59Zm-6.097 1.084c.54.517.979.937 1.364 1.248.393.317.78.562 1.234.692l.415-1.441c-.184-.053-.391-.164-.707-.418-.324-.262-.71-.63-1.269-1.165l-1.037 1.084Zm4.121.499a2.008 2.008 0 0 1-1.108 0l-.415 1.441a3.509 3.509 0 0 0 1.937 0l-.414-1.441Zm9.409-16.22c1.08 1.035 1.507 1.453 1.756 1.867l1.285-.775c-.378-.627-.995-1.209-2.004-2.175l-1.037 1.084ZM19 13.557c1.009-.966 1.626-1.547 2.004-2.174l-1.285-.775c-.249.413-.676.832-1.756 1.866L19 13.556Zm.72-6.736a3.645 3.645 0 0 1 0 3.787l1.284.775a5.144 5.144 0 0 0 0-5.337l-1.285.775Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m8.107 17.417 7.38-7.066c.448-.429.672-.643.789-.876.21-.417.21-.903 0-1.32-.117-.233-.341-.447-.79-.876-.447-.43-.671-.644-.915-.756-.435-.2-.942-.2-1.378 0-.243.112-.467.327-.915.756l-7.326 7.015c-1.099 1.052-1.648 1.578-1.84 2.19-.15.475-.15.982 0 1.457.192.612.741 1.138 1.84 2.19C6.05 21.183 6.6 21.71 7.239 21.893a2.76 2.76 0 0 0 1.522 0c.639-.184 1.188-.71 2.287-1.762l7.434-7.117c1.044-1 1.566-1.5 1.88-2.02a4.395 4.395 0 0 0 0-4.562c-.314-.52-.836-1.02-1.88-2.02-1.045-1-1.567-1.5-2.11-1.8a4.948 4.948 0 0 0-4.765 0c-.543.3-1.065.8-2.11 1.8l-5.99 5.734" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.244 1.955c1.7-.94 3.79-.94 5.49 0 .63.348 1.218.91 2.173 1.825l.093.09.098.093c.95.91 1.54 1.475 1.906 2.081a5.144 5.144 0 0 1 0 5.337c-.366.607-.955 1.17-1.906 2.08l-.098.095-7.457 7.14c-.53.506-.96.92-1.34 1.226-.393.316-.78.561-1.235.692a3.51 3.51 0 0 1-1.937 0c-.454-.13-.841-.376-1.234-.692-.38-.307-.811-.72-1.34-1.226l-.048-.046c-.529-.507-.96-.92-1.28-1.283-.33-.376-.592-.753-.733-1.201a3.181 3.181 0 0 1 0-1.907c.14-.448.402-.825.733-1.2.32-.364.751-.777 1.28-1.284l7.35-7.038.079-.075c.369-.354.68-.654 1.041-.82a2.402 2.402 0 0 1 2.007 0c.36.166.672.466 1.041.82l.079.075.08.078c.367.35.683.651.86 1.003a2.213 2.213 0 0 1 0 1.994 2.331 2.331 0 0 1-.391.538c-.142.152-.323.326-.535.529l-7.394 7.08a.75.75 0 0 1-1.038-1.083l7.38-7.067c.23-.22.38-.364.488-.48a.906.906 0 0 0 .15-.191.712.712 0 0 0 0-.646c-.044-.088-.143-.198-.638-.671-.492-.471-.61-.57-.71-.617a.902.902 0 0 0-.75 0c-.101.047-.22.146-.711.617L5.47 14.836c-.558.535-.943.904-1.215 1.213-.267.304-.376.496-.428.66-.103.328-.103.679 0 1.008.052.163.16.355.428.659.272.31.657.678 1.215 1.213.56.535.945.904 1.269 1.165.316.255.523.365.707.418.361.104.747.104 1.108 0 .184-.053.391-.163.707-.418.324-.261.71-.63 1.269-1.165l7.433-7.117c1.08-1.034 1.507-1.453 1.756-1.866a3.645 3.645 0 0 0 0-3.787c-.249-.413-.676-.832-1.756-1.866-1.079-1.032-1.518-1.444-1.954-1.685a4.198 4.198 0 0 0-4.039 0c-.437.24-.876.653-1.954 1.685l-5.99 5.735A.75.75 0 0 1 2.99 9.605L8.98 3.87l.093-.09c.955-.914 1.543-1.477 2.172-1.825Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.244 1.955c1.7-.94 3.79-.94 5.49 0 .63.348 1.218.91 2.173 1.825l.093.09.098.093c.95.91 1.54 1.475 1.906 2.081a5.144 5.144 0 0 1 0 5.337c-.366.607-.955 1.17-1.906 2.08l-.098.095-7.457 7.14c-.53.506-.96.92-1.34 1.226-.393.316-.78.561-1.235.692a3.51 3.51 0 0 1-1.937 0c-.454-.13-.841-.376-1.234-.692-.38-.307-.811-.72-1.34-1.226l-.048-.046c-.529-.507-.96-.92-1.28-1.283-.33-.376-.592-.753-.733-1.201a3.181 3.181 0 0 1 0-1.907c.14-.448.402-.825.733-1.2.32-.364.751-.777 1.28-1.284l7.35-7.038.079-.075c.369-.354.68-.654 1.041-.82a2.402 2.402 0 0 1 2.007 0c.36.166.672.466 1.041.82l.079.075.08.078c.367.35.683.651.86 1.003a2.213 2.213 0 0 1 0 1.994 2.331 2.331 0 0 1-.391.538c-.142.152-.323.326-.535.529l-7.394 7.08a.75.75 0 0 1-1.038-1.083l7.38-7.067c.23-.22.38-.364.488-.48a.906.906 0 0 0 .15-.191.712.712 0 0 0 0-.646c-.044-.088-.143-.198-.638-.671-.492-.471-.61-.57-.71-.617a.902.902 0 0 0-.75 0c-.101.047-.22.146-.711.617L5.47 14.836c-.558.535-.943.904-1.215 1.213-.267.304-.376.496-.428.66-.103.328-.103.679 0 1.008.052.163.16.355.428.659.272.31.657.678 1.215 1.213.56.535.945.904 1.269 1.165.316.255.523.365.707.418.361.104.747.104 1.108 0 .184-.053.391-.163.707-.418.324-.261.71-.63 1.269-1.165l7.433-7.117c1.08-1.034 1.507-1.453 1.756-1.866a3.645 3.645 0 0 0 0-3.787c-.249-.413-.676-.832-1.756-1.866-1.079-1.032-1.518-1.444-1.954-1.685a4.198 4.198 0 0 0-4.039 0c-.437.24-.876.653-1.954 1.685l-5.99 5.735A.75.75 0 0 1 2.99 9.605L8.98 3.87l.093-.09c.955-.914 1.543-1.477 2.172-1.825Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.244 1.955c1.7-.94 3.79-.94 5.49 0 .63.348 1.218.91 2.172 1.825l.094.09a.75.75 0 1 1-1.037 1.083c-1.079-1.032-1.518-1.444-1.954-1.685a4.198 4.198 0 0 0-4.04 0c-.436.24-.875.653-1.953 1.685l-5.99 5.735A.75.75 0 0 1 2.99 9.605L8.98 3.87l.093-.09c.955-.914 1.543-1.477 2.172-1.825Zm3.701 4.805a.75.75 0 0 1 1.06-.023l.081.078c.367.35.683.651.86 1.003a2.213 2.213 0 0 1 0 1.994c-.177.352-.493.653-.86 1.004l-.08.077-7.38 7.066a.75.75 0 0 1-1.038-1.083l7.38-7.067c.495-.473.594-.583.638-.671a.712.712 0 0 0 0-.646c-.044-.088-.143-.198-.638-.671a.75.75 0 0 1-.023-1.06Z" fill="currentColor" /><path opacity={0.5} d="M17.963 4.954c1.08 1.034 1.507 1.452 1.756 1.865a3.645 3.645 0 0 1 0 3.788c-.249.413-.676.831-1.756 1.866l-7.434 7.117c-.558.535-.944.903-1.268 1.164-.316.255-.523.365-.707.418a2.01 2.01 0 0 1-1.108 0c-.184-.053-.391-.163-.707-.418-.324-.261-.71-.63-1.269-1.164-.558-.535-.943-.904-1.215-1.214-.267-.303-.376-.495-.428-.659a1.681 1.681 0 0 1 0-1.009c.052-.163.16-.355.428-.658.272-.31.657-.679 1.215-1.214l7.327-7.015c.492-.471.61-.57.71-.616a.902.902 0 0 1 .75 0c.101.046.22.145.711.616a.75.75 0 0 1 1.02-1.1l-.06-.058c-.37-.355-.682-.654-1.042-.82a2.402 2.402 0 0 0-2.007 0c-.36.166-.672.465-1.041.82l-7.429 7.113c-.529.506-.96.92-1.28 1.283-.33.376-.592.752-.733 1.2a3.181 3.181 0 0 0 0 1.907c.14.449.402.825.733 1.2.32.365.751.778 1.28 1.284l.048.046c.529.507.96.92 1.34 1.226.393.317.78.561 1.234.692a3.51 3.51 0 0 0 1.937 0c.455-.13.842-.375 1.235-.692.38-.306.81-.72 1.34-1.226l7.555-7.234c.95-.91 1.54-1.474 1.906-2.08a5.144 5.144 0 0 0 0-5.337c-.366-.607-.955-1.171-1.906-2.081l-.08-.077a.75.75 0 0 1-1.055 1.067Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Paperclip2