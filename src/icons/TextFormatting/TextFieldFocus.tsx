import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const TextFieldFocus = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.25 15.5a.75.75 0 0 0 1.5 0h-1.5Zm3.414-6.748.498-.56-.498.56Zm-.414 1.673a.75.75 0 0 0 1.5 0h-1.5Zm.498-1.59.56-.497-.56.498Zm-5.412-.083-.498-.56.498.56ZM5.25 10.425a.75.75 0 0 0 1.5 0h-1.5Zm1.002-1.59-.56-.497.56.498ZM7 14.75a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-3.075-7H9v-1.5H7.925v1.5ZM9 9.25h1.075v-1.5H9v1.5Zm.75 6.25v-7h-1.5v7h1.5Zm.325-6.25c.455 0 .726.001.921.026.178.022.187.052.17.037l.996-1.121c-.3-.268-.651-.364-.98-.405-.31-.038-.691-.037-1.107-.037v1.5Zm2.675 1.175c0-.416.001-.797-.037-1.107-.041-.329-.137-.68-.405-.98l-1.121.996c-.015-.017.015-.008.037.17.025.195.026.466.026.921h1.5Zm-1.584-1.112a.25.25 0 0 1 .02.02l1.122-.995a1.737 1.737 0 0 0-.146-.146l-.996 1.121ZM7.925 7.75c-.416 0-.797-.001-1.107.037-.329.041-.68.137-.98.405l.996 1.121c-.017.015-.008-.015.17-.037.195-.025.466-.026.921-.026v-1.5ZM6.75 10.425c0-.455.001-.726.026-.922.022-.177.052-.186.037-.17l-1.121-.995c-.268.3-.364.651-.405.98-.038.31-.037.691-.037 1.107h1.5Zm-.912-2.233c-.052.046-.1.094-.146.146l1.121.996a.252.252 0 0 1 .02-.02l-.995-1.122ZM7 16.25h4v-1.5H7v1.5Z" fill="currentColor" /><path d="M22 12c0 3.771 0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20M12 4h-2C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172.654.653.943 1.528 1.07 2.828M15 2v20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.25 15.5a.75.75 0 0 0 1.5 0h-1.5Zm3.414-6.748.498-.56-.498.56Zm-.414 1.673a.75.75 0 0 0 1.5 0h-1.5Zm.498-1.59.56-.497-.56.498Zm-5.412-.083-.498-.56.498.56ZM5.25 10.425a.75.75 0 0 0 1.5 0h-1.5Zm1.002-1.59-.56-.497.56.498ZM7 14.75a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-3.075-7H9v-1.5H7.925v1.5ZM9 9.25h1.075v-1.5H9v1.5Zm.75 6.25v-7h-1.5v7h1.5Zm.325-6.25c.455 0 .726.001.921.026.178.022.187.052.17.037l.996-1.121c-.3-.268-.651-.364-.98-.405-.31-.038-.691-.037-1.107-.037v1.5Zm2.675 1.175c0-.416.001-.797-.037-1.107-.041-.329-.137-.68-.405-.98l-1.121.996c-.015-.017.015-.008.037.17.025.195.026.466.026.921h1.5Zm-1.584-1.112a.25.25 0 0 1 .02.02l1.122-.995a1.737 1.737 0 0 0-.146-.146l-.996 1.121ZM7.925 7.75c-.416 0-.797-.001-1.107.037-.329.041-.68.137-.98.405l.996 1.121c-.017.015-.008-.015.17-.037.195-.025.466-.026.921-.026v-1.5ZM6.75 10.425c0-.455.001-.726.026-.922.022-.177.052-.186.037-.17l-1.121-.995c-.268.3-.364.651-.405.98-.038.31-.037.691-.037 1.107h1.5Zm-.912-2.233c-.052.046-.1.094-.146.146l1.121.996a.252.252 0 0 1 .02-.02l-.995-1.122ZM7 16.25h4v-1.5H7v1.5Z" fill="currentColor" /><path opacity={0.5} d="M12 4h-2C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M15 2v20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.25 15.5a.75.75 0 0 0 1.5 0h-1.5Zm3.414-6.748.498-.56-.498.56Zm-.414 1.673a.75.75 0 0 0 1.5 0h-1.5Zm.498-1.59.56-.497-.56.498Zm-5.412-.083-.498-.56.498.56ZM5.25 10.425a.75.75 0 0 0 1.5 0h-1.5Zm1.002-1.59-.56-.497.56.498ZM7 14.75a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-3.075-7H9v-1.5H7.925v1.5ZM9 9.25h1.075v-1.5H9v1.5Zm.75 6.25v-7h-1.5v7h1.5Zm.325-6.25c.455 0 .726.001.921.026.178.022.187.052.17.037l.996-1.121c-.3-.268-.651-.364-.98-.405-.31-.038-.691-.037-1.107-.037v1.5Zm2.675 1.175c0-.416.001-.797-.037-1.107-.041-.329-.137-.68-.405-.98l-1.121.996c-.015-.017.015-.008.037.17.025.195.026.466.026.921h1.5Zm-1.584-1.112a.25.25 0 0 1 .02.02l1.122-.995a1.737 1.737 0 0 0-.146-.146l-.996 1.121ZM7.925 7.75c-.416 0-.797-.001-1.107.037-.329.041-.68.137-.98.405l.996 1.121c-.017.015-.008-.015.17-.037.195-.025.466-.026.921-.026v-1.5ZM6.75 10.425c0-.455.001-.726.026-.922.022-.177.052-.186.037-.17l-1.121-.995c-.268.3-.364.651-.405.98-.038.31-.037.691-.037 1.107h1.5Zm-.912-2.233c-.052.046-.1.094-.146.146l1.121.996a.252.252 0 0 1 .02-.02l-.995-1.122ZM7 16.25h4v-1.5H7v1.5Z" fill="currentColor" /><path d="M12 4h-2C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20M15 2v20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15 1.25a.75.75 0 0 1 .75.75v1.256c1.21.012 2.22.053 3.059.196 1.028.174 1.872.511 2.55 1.19.748.748 1.08 1.697 1.238 2.869.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.678.678-1.522 1.015-2.55 1.19-.839.142-1.85.183-3.059.195V22a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm.75 17.994V4.756c1.186.012 2.09.052 2.808.174.842.143 1.355.387 1.74.772.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289 0 1.907-.002 3.261-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.385.385-.898.629-1.74.772-.719.122-1.622.162-2.808.174Z" fill="currentColor" /><path d="M9.944 3.25H12a.75.75 0 0 1 0 1.5h-2c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289 0 1.907.002 3.261.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Z" fill="currentColor" /><path d="M6.818 7.787c.3-.037.666-.037 1.066-.037h2.232c.4 0 .766 0 1.066.037.329.041.68.137.98.405.052.046.1.094.146.146.268.3.364.651.405.98.037.3.037.666.037 1.066v.041a.75.75 0 0 1-1.5 0c0-.455-.001-.726-.026-.922-.024-.195-.228-.227-.228-.227-.195-.025-.466-.026-.921-.026H9.75v5.5H11a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h1.25v-5.5h-.325c-.455 0-.726.001-.922.026 0 0-.203.032-.227.227-.025.196-.026.467-.026.922a.75.75 0 0 1-1.5 0v-.041c0-.4 0-.766.037-1.066.041-.329.137-.68.405-.98.046-.052.094-.1.146-.146.3-.268.651-.364.98-.405Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2.006c2.636-.027 4.104-.191 5.078-1.166C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828-.974-.975-2.442-1.139-5.078-1.166V2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10 20c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h3v16h-3ZM6.818 7.787c.3-.037.666-.037 1.066-.037h2.232c.4 0 .766 0 1.066.037.329.041.68.137.98.405.052.046.1.094.146.146.268.3.364.651.405.98.037.3.037.666.037 1.066v.041a.75.75 0 0 1-1.5 0c0-.455-.001-.726-.026-.922-.024-.195-.228-.227-.228-.227-.195-.025-.466-.026-.921-.026H9.75v5.5H11a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h1.25v-5.5h-.325c-.455 0-.726.001-.922.026 0 0-.203.032-.227.227-.025.196-.026.467-.026.922a.75.75 0 0 1-1.5 0v-.041c0-.4 0-.766.037-1.066.041-.329.137-.68.405-.98.046-.052.094-.1.146-.146.3-.268.651-.364.98-.405Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.172 18.828C4.343 20 6.229 20 10 20l5.75-.006c2.636-.027 4.104-.191 5.078-1.166C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828-.974-.975-2.454-1.144-5.09-1.172H10C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path d="M6.818 7.787c.3-.037.666-.037 1.066-.037h2.232c.4 0 .766 0 1.066.037.329.041.68.137.98.405.052.046.1.094.146.146.268.3.364.651.405.98.037.3.037.666.037 1.066v.041a.75.75 0 0 1-1.5 0c0-.455-.001-.726-.026-.922-.024-.195-.228-.227-.228-.227-.195-.025-.466-.026-.921-.026H9.75v5.5H11a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h1.25v-5.5h-.325c-.455 0-.726.001-.922.026 0 0-.203.032-.227.227-.025.196-.026.467-.026.922a.75.75 0 0 1-1.5 0v-.041c0-.4 0-.766.037-1.066.041-.329.137-.68.405-.98.046-.052.094-.1.146-.146.3-.268.651-.364.98-.405Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TextFieldFocus