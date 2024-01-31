import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MirrorRight = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 21c4.243 0 6.364 0 7.682-1.318C21 18.364 21 16.242 21 12m-9-9c4.243 0 6.364 0 7.682 1.318.816.816 1.127 1.939 1.245 3.682" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2.5 3" /><path d="M12 22V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 21h1c3.771 0 5.657 0 6.828-1.172C21 18.657 21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828C18.657 3 16.771 3 13 3h-1" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2.5 3" /><path d="M12 22V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 21h1c3.771 0 5.657 0 6.828-1.172C21 18.657 21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828C18.657 3 16.771 3 13 3h-1" stroke="currentColor" strokeWidth={1.5} /><path d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2.5 3" /><path d="M12 22V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9 3.75c-.436 0-.835 0-1.202.003a.75.75 0 0 1-.013-1.5c.374-.003.779-.003 1.213-.003h.911a.75.75 0 0 1 0 1.5H9Zm-3.371-.695a.75.75 0 0 1-.494.938c-.321.1-.545.235-.726.416-.181.181-.316.405-.416.726a.75.75 0 0 1-1.432-.445c.16-.515.408-.962.787-1.342.38-.38.827-.627 1.342-.787a.75.75 0 0 1 .939.494ZM3.009 7.04a.75.75 0 0 1 .744.757C3.75 8.165 3.75 8.564 3.75 9v1.364a.75.75 0 1 1-1.5 0V8.998c0-.434 0-.839.003-1.213a.75.75 0 0 1 .757-.744ZM3 12.886a.75.75 0 0 1 .75.75V15c0 .436 0 .835.003 1.202a.75.75 0 0 1-1.5.013c-.003-.374-.003-.78-.003-1.213v-1.366a.75.75 0 0 1 .75-.75Zm.055 5.485a.75.75 0 0 1 .938.494c.1.321.235.545.416.726.181.181.405.316.726.416a.75.75 0 1 1-.445 1.432 3.176 3.176 0 0 1-1.342-.787 3.176 3.176 0 0 1-.787-1.342.75.75 0 0 1 .494-.939Zm3.986 2.62a.75.75 0 0 1 .757-.744c.367.003.766.003 1.202.003h.91a.75.75 0 0 1 0 1.5h-.912c-.434 0-.839 0-1.213-.003a.75.75 0 0 1-.744-.757ZM12 1.25a.75.75 0 0 1 .75.75v.25h.306c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-.306V22a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm.75 2.5v16.5H13c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-.25Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.66 2.75a.75.75 0 0 1-.75.75H10c-.436 0-.835 0-1.202.003a.75.75 0 0 1-.013-1.5C9.159 2 9.564 2 9.998 2h.911a.75.75 0 0 1 .75.75Zm0 18a.75.75 0 0 1-.75.75h-.912c-.434 0-.839 0-1.213-.003a.75.75 0 0 1 .013-1.5C9.165 20 9.564 20 10 20h.91a.75.75 0 0 1 .75.75ZM6.628 2.805a.75.75 0 0 1-.494.938c-.321.1-.545.235-.726.416-.181.181-.316.405-.416.726a.75.75 0 0 1-1.432-.445c.16-.515.408-.962.787-1.342.38-.38.827-.627 1.342-.787a.75.75 0 0 1 .939.494Zm0 17.89a.75.75 0 0 1-.939.494 3.176 3.176 0 0 1-1.342-.787 3.176 3.176 0 0 1-.787-1.342.75.75 0 1 1 1.432-.445c.1.321.235.545.416.726.181.181.405.316.726.416a.75.75 0 0 1 .494.938ZM4.009 6.791a.75.75 0 0 1 .744.757c-.003.367-.003.766-.003 1.202v1.364a.75.75 0 0 1-1.5 0V8.748c0-.434 0-.839.003-1.213a.75.75 0 0 1 .757-.744Zm0 9.918a.75.75 0 0 1-.756-.744c-.003-.374-.003-.779-.003-1.213v-1.366a.75.75 0 0 1 1.5 0v1.364c0 .436 0 .835.003 1.202a.75.75 0 0 1-.743.757Z" fill="currentColor" /><path d="M22 12.75v-2c0-3.771 0-5.657-1.172-6.828-1.092-1.093-3.676-1.167-7.078-1.172a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0c3.402-.005 5.986-.079 7.078-1.172C22 18.407 22 16.521 22 12.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12.75v-2c0-3.771 0-5.657-1.172-6.828-1.092-1.093-3.676-1.167-7.078-1.172a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0c3.402-.005 5.986-.079 7.078-1.172C22 18.407 22 16.521 22 12.75Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M11.66 2.75a.75.75 0 0 1-.75.75H10c-.436 0-.835 0-1.202.003a.75.75 0 0 1-.013-1.5C9.159 2 9.564 2 9.998 2h.911a.75.75 0 0 1 .75.75Zm0 18a.75.75 0 0 1-.75.75h-.912c-.434 0-.839 0-1.213-.003a.75.75 0 0 1 .013-1.5C9.165 20 9.564 20 10 20h.91a.75.75 0 0 1 .75.75ZM6.628 2.805a.75.75 0 0 1-.494.938c-.321.1-.545.235-.726.416-.181.181-.316.405-.416.726a.75.75 0 0 1-1.432-.445c.16-.515.408-.962.787-1.342.38-.38.827-.627 1.342-.787a.75.75 0 0 1 .939.494Zm0 17.89a.75.75 0 0 1-.939.494 3.176 3.176 0 0 1-1.342-.787 3.176 3.176 0 0 1-.787-1.342.75.75 0 1 1 1.432-.445c.1.321.235.545.416.726.181.181.405.316.726.416a.75.75 0 0 1 .494.938ZM4.009 6.791a.75.75 0 0 1 .744.757c-.003.367-.003.766-.003 1.202v1.364a.75.75 0 0 1-1.5 0V8.748c0-.434 0-.839.003-1.213a.75.75 0 0 1 .757-.744Zm0 9.918a.75.75 0 0 1-.756-.744c-.003-.374-.003-.779-.003-1.213v-1.366a.75.75 0 0 1 1.5 0v1.364c0 .436 0 .835.003 1.202a.75.75 0 0 1-.743.757Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MirrorRight