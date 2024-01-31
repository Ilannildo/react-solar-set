import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ArrowDown = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12 20-.53.53a.75.75 0 0 0 1.06 0L12 20Zm6.53-5.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-12-1.06a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM12.75 4a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5 3a.75.75 0 0 0-1.5 0h1.5Zm-.22 11.03 6-6-1.06-1.06-6 6 1.06 1.06Zm0-1.06-6-6-1.06 1.06 6 6 1.06-1.06ZM11.25 4v2.5h1.5V4h-1.5Zm0 5.5V20h1.5V9.5h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12.75 4a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v16h1.5V4h-1.5Z" fill="currentColor" /><path d="m12 20-.53.53a.75.75 0 0 0 1.06 0L12 20Zm6.53-5.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-12-1.06a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm6 7.06 6-6-1.06-1.06-6 6 1.06 1.06Zm0-1.06-6-6-1.06 1.06 6 6 1.06-1.06Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 4a.75.75 0 0 0-1.5 0h1.5ZM12 20l-.53.53a.75.75 0 0 0 1.06 0L12 20Zm6.53-5.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-12-1.06a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM11.25 4v16h1.5V4h-1.5Zm1.28 16.53 6-6-1.06-1.06-6 6 1.06 1.06Zm0-1.06-6-6-1.06 1.06 6 6 1.06-1.06Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 4a.75.75 0 0 0-1.5 0v9.25H6a.75.75 0 0 0-.53 1.28l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0-.53-1.28h-5.25V4Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v9.25h-1.5V4a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path d="M6 13.25a.75.75 0 0 0-.53 1.28l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0-.53-1.28H6Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ArrowDown