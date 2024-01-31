import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Devices = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2 10.23 2 8.343 2 7.172 3.172 6.229 4.115 6.045 5.52 6.009 8M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5v-4Z" stroke="currentColor" strokeWidth={1.5} /><path d="M17 19h-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.009 8c.036-2.48.22-3.885 1.163-4.828C8.343 2 10.229 2 14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5v-4Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M17 19h-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.009 8c.036-2.48.22-3.885 1.163-4.828C8.343 2 10.229 2 14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5v-4Z" stroke="currentColor" strokeWidth={1.5} /><path d="M17 19h-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.944 1.25h.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H12a.75.75 0 0 1 0-1.5h2c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.139-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14-1.907 0-3.261.002-4.289.14-1.006.135-1.586.389-2.009.812-.696.696-.907 1.777-.943 4.309a.75.75 0 1 1-1.5-.022c.035-2.427.192-4.158 1.382-5.348.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm-8.482 9h.076c.67 0 1.229 0 1.681.046.473.048.913.153 1.309.418.3.2.558.458.759.758.264.396.369.835.417 1.309.046.452.046 1.011.046 1.68v4.077c0 .67 0 1.229-.046 1.681-.048.473-.153.913-.417 1.309-.201.3-.459.558-.76.759-.395.264-.835.369-1.308.417-.452.046-1.011.046-1.68.046h-.077c-.67 0-1.229 0-1.681-.046-.473-.048-.913-.153-1.309-.418a2.75 2.75 0 0 1-.759-.758c-.264-.396-.369-.835-.417-1.309-.046-.452-.046-1.011-.046-1.68v-4.077c0-.67 0-1.229.046-1.681.048-.474.153-.913.417-1.309.201-.3.459-.558.76-.758.395-.265.835-.37 1.308-.418.452-.046 1.011-.046 1.68-.046Zm-1.53 1.538c-.354.036-.518.1-.626.173a1.251 1.251 0 0 0-.345.345c-.073.108-.137.272-.173.627-.037.367-.038.85-.038 1.567v4c0 .718 0 1.2.038 1.567.036.355.1.519.173.628.09.136.208.253.345.344.108.073.272.137.627.173.367.037.85.038 1.567.038.718 0 1.2 0 1.567-.038.355-.036.519-.1.627-.173.137-.09.254-.208.345-.345.073-.108.137-.272.173-.627.037-.367.038-.85.038-1.567v-4c0-.718 0-1.2-.038-1.567-.036-.355-.1-.519-.173-.627a1.251 1.251 0 0 0-.345-.345c-.108-.073-.272-.137-.627-.173-.367-.037-.85-.038-1.567-.038-.718 0-1.2 0-1.567.038ZM11.25 19a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5v-4Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22 10v4c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22c-1.7 0-3.015 0-4.056-.107.335-.525.454-1.082.506-1.598.05-.491.05-1.084.05-1.729v-4.132c0-.645 0-1.238-.05-1.729-.054-.533-.18-1.11-.54-1.65a3.499 3.499 0 0 0-.966-.965c-.54-.36-1.116-.486-1.65-.54A13.862 13.862 0 0 0 6 9.5c.002-3.44.053-5.21 1.172-6.328C8.343 2 10.229 2 14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10Zm-10.75 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M14.052 2c1.68 0 3.01 0 4.052.142 1.072.147 1.94.456 2.624 1.152.684.696.988 1.58 1.132 2.67.14 1.06.14 2.414.14 4.123v3.826c0 1.71 0 3.064-.14 4.123-.144 1.09-.448 1.974-1.132 2.67-.684.696-1.552 1.005-2.624 1.152-1.041.142-2.372.142-4.052.142h-.104c-1.68 0-3.01 0-4.052-.142-1.072-.147-1.94-.456-2.624-1.152-.684-.696-.988-1.58-1.132-2.67C6 16.976 6 15.622 6 13.913v-3.826c0-1.71 0-3.064.14-4.123.144-1.09.448-1.974 1.132-2.67.684-.696 1.552-1.005 2.624-1.152C10.937 2 12.268 2 13.948 2h.104Z" fill="currentColor" /><path d="M12 18.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5ZM2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5v-4Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Devices