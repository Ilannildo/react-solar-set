import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CrownLine = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.838 11.126c.18-1.912.27-2.869-.057-3.264a.992.992 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998-.618.704-.927 1.055-1.271 1.11-.191.03-.386-.001-.562-.09-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2c-.61 0-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.925.925 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11-1.195-1.36-1.792-2.04-2.268-1.998a.992.992 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21.914-.935 1.234-2.345 1.507-4.79M9 18h6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m21.609 13.562.23-2.436c.18-1.912.27-2.869-.058-3.264a.992.992 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998-.618.704-.927 1.055-1.271 1.11-.191.03-.386-.001-.562-.09-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2c-.61 0-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.925.925 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11-1.195-1.36-1.792-2.04-2.268-1.998a.992.992 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21 1.183-1.21 1.371-3.216 1.749-7.228Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M9 18h6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m21.609 13.562.23-2.436c.18-1.912.27-2.869-.058-3.264a.992.992 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998-.618.704-.927 1.055-1.271 1.11-.191.03-.386-.001-.562-.09-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2c-.61 0-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.925.925 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11-1.195-1.36-1.792-2.04-2.268-1.998a.992.992 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21 1.183-1.21 1.371-3.216 1.749-7.228Z" stroke="currentColor" strokeWidth={1.5} /><path d="M9 18h6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5H9Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25c-.706 0-1.155.5-1.457.947-.306.455-.625 1.11-1.004 1.886L7.276 8.72c-.219.448-.36.735-.482.934a.88.88 0 0 1-.142.192.175.175 0 0 1-.087.017.891.891 0 0 1-.156-.122c-.162-.15-.364-.379-.684-.743l-.029-.033C5.124 8.313 4.656 7.78 4.27 7.42a3.303 3.303 0 0 0-.623-.477 1.416 1.416 0 0 0-.819-.196c-.473.042-.892.281-1.187.637-.355.429-.395 1.029-.39 1.547.004.56.074 1.303.16 2.227l.238 2.522c.185 1.966.33 3.505.58 4.701.256 1.218.64 2.183 1.375 2.933.745.763 1.66 1.111 2.792 1.277 1.088.159 2.463.159 4.185.159h2.838c1.722 0 3.097 0 4.185-.16 1.132-.165 2.047-.513 2.792-1.276.734-.75 1.119-1.715 1.374-2.933.251-1.196.396-2.736.581-4.701l.238-2.522c.087-.924.157-1.667.16-2.227.005-.518-.035-1.118-.39-1.547a1.742 1.742 0 0 0-1.187-.637 1.416 1.416 0 0 0-.819.196 3.303 3.303 0 0 0-.623.477c-.386.36-.854.893-1.426 1.545l-.03.033c-.32.364-.521.593-.683.743a.895.895 0 0 1-.155.122.175.175 0 0 1-.088-.017.876.876 0 0 1-.142-.192c-.122-.199-.263-.486-.482-.934l-2.263-4.637c-.379-.777-.698-1.431-1.004-1.886-.302-.448-.75-.947-1.457-.947Zm-1.139 3.544c.412-.844.686-1.402.926-1.759.102-.15.172-.226.213-.263.04.037.11.112.213.263.24.357.514.915.926 1.759l2.253 4.616c.198.407.371.76.536 1.03.17.275.392.568.74.743.313.158.666.216 1.016.16.393-.062.691-.285.925-.501.227-.21.48-.498.768-.826l.025-.028c.608-.693 1.027-1.169 1.352-1.472.16-.15.266-.227.331-.263a.274.274 0 0 1 .113.08l.001.007c.01.03.054.172.05.58-.003.487-.066 1.165-.157 2.136l-.23 2.435c-.19 2.024-.328 3.479-.56 4.582-.229 1.09-.53 1.734-.978 2.193-.438.448-1 .704-1.937.84-.967.142-2.232.144-4.027.144h-2.72c-1.795 0-3.06-.002-4.027-.143-.937-.137-1.499-.393-1.937-.841-.448-.459-.75-1.103-.978-2.193-.232-1.103-.37-2.558-.56-4.582l-.23-2.435c-.09-.971-.154-1.65-.158-2.137-.003-.407.042-.55.05-.58l.003-.005a.274.274 0 0 1 .111-.082h.001c.065.037.17.114.331.264.325.303.744.779 1.352 1.472l.025.028c.288.328.541.617.768.826.234.216.532.44.925.502.35.055.703-.003 1.016-.161.348-.175.57-.468.74-.743.165-.27.338-.623.536-1.03l2.253-4.616Zm10.337 3.54.005.006-.005-.006ZM12.044 2.74l-.01.004c.007-.004.01-.005.01-.004Zm-.079.004-.009-.004s.003 0 .01.004Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m21.838 11.126-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22H10.64c-3.545 0-5.317 0-6.5-1.21-1.183-1.21-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a.992.992 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998.618.704.927 1.055 1.271 1.11.191.03.386-.001.562-.09.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2c.61 0 1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464.176.089.37.12.562.09.344-.055.653-.406 1.271-1.11 1.195-1.36 1.792-2.04 2.268-1.998a.992.992 0 0 1 .675.367c.327.395.237 1.352.057 3.264ZM8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="m21.838 11.126-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22H10.64c-3.545 0-5.317 0-6.5-1.21-1.183-1.21-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a.992.992 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998.618.704.927 1.055 1.271 1.11.191.03.386-.001.562-.09.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2c.61 0 1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464.176.089.37.12.562.09.344-.055.653-.406 1.271-1.11 1.195-1.36 1.792-2.04 2.268-1.998a.992.992 0 0 1 .675.367c.327.395.237 1.352.057 3.264Z" fill="currentColor" /><path d="M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CrownLine