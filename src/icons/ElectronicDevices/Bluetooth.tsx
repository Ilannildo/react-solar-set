import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Bluetooth = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.263 4.655C17.421 5.477 18 5.888 18 6.46c0 .57-.579.981-1.737 1.803L11 12V5.225c0-1.887 0-2.83.605-3.14.362-.185.784-.062 1.395.3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m16.263 19.345-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C11 21.605 11 20.662 11 18.775V12l5.263 3.738C17.421 16.56 18 16.97 18 17.54c0 .57-.579.982-1.737 1.804Z" stroke="currentColor" strokeWidth={1.5} /><path d="M5.57 14.886a.75.75 0 1 0 .86 1.228l-.86-1.228Zm.86 1.228 5-3.5-.86-1.228-5 3.5.86 1.228Z" fill="currentColor" /><path d="M5.57 9.114a.75.75 0 0 1 .86-1.228l-.86 1.228Zm.86-1.228 5 3.5-.86 1.228-5-3.5.86-1.228Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.263 8.262 11 12V5.225c0-1.887 0-2.83.605-3.14.604-.309 1.376.24 2.92 1.336l1.738 1.234C17.421 5.477 18 5.888 18 6.46c0 .57-.579.981-1.737 1.803ZM16.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C11 21.605 11 20.662 11 18.775V12l5.263 3.738C17.421 16.56 18 16.97 18 17.54c0 .57-.579.982-1.737 1.804Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m6 15.5 5-3.5-5-3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.263 8.262 11 12V5.225c0-1.887 0-2.83.605-3.14.604-.309 1.376.24 2.92 1.336l1.738 1.234C17.421 5.477 18 5.888 18 6.46c0 .57-.579.981-1.737 1.803ZM16.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C11 21.605 11 20.662 11 18.775V12l5.263 3.738C17.421 16.56 18 16.97 18 17.54c0 .57-.579.982-1.737 1.804Z" stroke="currentColor" strokeWidth={1.5} /><path d="M5.57 14.886a.75.75 0 1 0 .86 1.228l-.86-1.228Zm.86 1.228 5-3.5-.86-1.228-5 3.5.86 1.228Z" fill="currentColor" /><path d="M5.57 9.114a.75.75 0 0 1 .86-1.228l-.86 1.228Zm.86-1.228 5 3.5-.86 1.228-5-3.5.86-1.228Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m14.91 2.774 1.833 1.301c.54.384 1.012.719 1.341 1.034.351.335.666.764.666 1.35 0 .584-.315 1.013-.666 1.349-.33.315-.801.65-1.341 1.033L12.295 12l4.448 3.158c.54.383 1.012.718 1.341 1.034.351.335.666.764.666 1.349s-.315 1.014-.666 1.35c-.33.314-.801.65-1.341 1.033l-1.833 1.302c-.73.518-1.345.955-1.856 1.216-.52.265-1.156.465-1.79.14-.638-.326-.845-.96-.93-1.536-.084-.566-.084-1.319-.084-2.21V13.44l-3.82 2.674a.75.75 0 1 1-.86-1.229L9.692 12 5.57 9.114a.75.75 0 1 1 .86-1.229l3.82 2.674V5.163c0-.891 0-1.644.084-2.21.085-.576.292-1.21.93-1.535.634-.325 1.27-.126 1.79.14.51.26 1.126.698 1.856 1.216Zm-3.16 10.678v5.323c0 .969.002 1.609.068 2.051.031.214.071.327.1.383.014.024.022.033.023.034l.005.003a.019.019 0 0 0 .007.003c.002 0 .015.002.044-.002.064-.009.181-.043.375-.142.4-.204.926-.575 1.72-1.138l1.737-1.234c.599-.425.978-.697 1.218-.927a1 1 0 0 0 .187-.22c.016-.029.016-.039.016-.044v-.002c0-.006 0-.016-.016-.044a.998.998 0 0 0-.187-.22c-.24-.23-.62-.502-1.218-.927l-4.079-2.897Zm0-2.905V5.224c0-.969.002-1.609.068-2.05.031-.215.071-.327.1-.384a.153.153 0 0 1 .023-.034l.005-.003.007-.003a.16.16 0 0 1 .044.002c.064.01.181.043.375.142.4.204.926.575 1.72 1.138l1.737 1.234c.599.425.978.697 1.218.927a1 1 0 0 1 .187.22c.016.029.016.039.016.044v.002c0 .006 0 .016-.016.045a1 1 0 0 1-.187.22c-.24.23-.62.501-1.218.926l-4.079 2.897Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m16.743 15.158-4.441-3.154.006-.004-.007-.005 4.442-3.154c.54-.383 1.012-.718 1.341-1.033.351-.336.666-.765.666-1.35 0-.585-.315-1.014-.666-1.349-.33-.315-.801-.65-1.341-1.034L14.91 2.774c-.73-.518-1.346-.956-1.857-1.216-.52-.266-1.155-.465-1.79-.14-.637.325-.844.959-.93 1.535-.083.566-.083 1.319-.083 2.21v5.396L6.43 7.886a.75.75 0 1 0-.86 1.228L9.692 12 5.57 14.886a.75.75 0 0 0 .86 1.229l3.82-2.674v5.396c0 .89 0 1.643.084 2.209.085.577.292 1.21.93 1.536.634.325 1.27.125 1.79-.14.51-.261 1.126-.698 1.856-1.216l1.832-1.302c.54-.384 1.013-.719 1.342-1.034.351-.335.666-.764.666-1.35 0-.584-.315-1.013-.666-1.348-.33-.316-.801-.65-1.341-1.034Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m12.302 12.004 4.44 3.154c.54.383 1.013.718 1.342 1.034.351.335.666.764.666 1.349s-.315 1.014-.666 1.35c-.33.314-.801.65-1.341 1.033l-1.833 1.302c-.73.518-1.346.955-1.857 1.216-.52.265-1.155.465-1.79.14-.637-.326-.844-.96-.93-1.536-.083-.566-.083-1.319-.083-2.21V5.164c0-.891 0-1.644.084-2.21.085-.576.292-1.21.929-1.535.635-.325 1.27-.126 1.79.14.511.26 1.127.698 1.857 1.216l1.833 1.301c.54.384 1.012.719 1.341 1.034.351.335.666.764.666 1.35 0 .584-.315 1.013-.666 1.349-.33.315-.801.65-1.341 1.033L12.3 11.995l.007.005-.006.004Z" fill="currentColor" /><path opacity={0.5} d="M10.25 10.56 6.43 7.886a.75.75 0 1 0-.86 1.228L9.692 12 5.57 14.886a.75.75 0 0 0 .86 1.229l3.82-2.674v-2.882Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Bluetooth