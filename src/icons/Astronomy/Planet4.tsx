import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Planet4 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 20.93A8 8 0 1 0 3.07 18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M3 11.005S5.284 13 8.784 13c2.383 0 3.647-1.182 4.716-1.496 2.009-.59 3.5-.499 3.5-.499M3 16.005s1.6-.091 3.757.499C7.905 16.818 9.262 18 11.82 18c2.308 0 4.124-.753 5.181-1.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path fillRule="evenodd" clipRule="evenodd" d="M20.53 4.045a2.006 2.006 0 0 0-.306-.53c.326-.091.549-.097.606.003.058.1-.058.29-.3.527ZM17.106 6.02c-.326.091-.548.097-.606-.003-.058-.1.058-.29.3-.527a2.018 2.018 0 0 0 .306.53Zm0 0c.455-.126 1.113-.418 1.81-.82.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976Zm-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82-.696.403-1.278.826-1.615 1.157Z" fill="currentColor" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M3 11.005S5.284 13 8.784 13c2.383 0 3.647-1.182 4.716-1.496 2.009-.59 3.5-.499 3.5-.499M3 16.005s1.6-.091 3.757.499C7.905 16.818 9.262 18 11.82 18c2.308 0 4.124-.753 5.181-1.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M20.53 4.045a2.006 2.006 0 0 0-.306-.53c.326-.091.549-.097.606.003.058.1-.058.29-.3.527ZM17.106 6.02c-.326.091-.548.097-.606-.003-.058-.1.058-.29.3-.527a2.018 2.018 0 0 0 .306.53Zm0 0c.455-.126 1.113-.418 1.81-.82.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976Zm-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82-.696.403-1.278.826-1.615 1.157Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M3 11.005S5.284 13 8.784 13c2.383 0 3.647-1.182 4.716-1.496 2.009-.59 3.5-.499 3.5-.499M3 16.005s1.6-.091 3.757.499C7.905 16.818 9.262 18 11.82 18c2.308 0 4.124-.753 5.181-1.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path fillRule="evenodd" clipRule="evenodd" d="M20.53 4.045a2.006 2.006 0 0 0-.306-.53c.326-.091.549-.097.606.003.058.1-.058.29-.3.527ZM17.106 6.02c-.326.091-.548.097-.606-.003-.058-.1.058-.29.3-.527a2.018 2.018 0 0 0 .306.53Zm0 0c.455-.126 1.113-.418 1.81-.82.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976Zm-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82-.696.403-1.278.826-1.615 1.157Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10 5.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5ZM4.013 16.78a10.18 10.18 0 0 0-.723-.03 7.252 7.252 0 0 0 12.81 1.169c-1.11.444-2.567.83-4.28.83a8.432 8.432 0 0 1-3.35-.687c-.332-.14-.642-.287-.91-.415l-.207-.099c-.329-.154-.576-.261-.794-.32a13.643 13.643 0 0 0-2.546-.447ZM2.75 14c0-.705.1-1.386.288-2.03.292.2.7.453 1.21.705a10.256 10.256 0 0 0 4.536 1.075c1.326 0 2.344-.332 3.157-.696.313-.14.603-.289.854-.417l.191-.098c.306-.155.531-.259.725-.316.947-.278 1.77-.395 2.353-.443a8.8 8.8 0 0 1 .83-.028c.231.707.356 1.463.356 2.248 0 .663-.09 1.306-.256 1.916-.12.001-.242.031-.355.093-.984.54-2.675 1.24-4.82 1.24a6.934 6.934 0 0 1-2.77-.572 17.52 17.52 0 0 1-.826-.376 55.73 55.73 0 0 0-.23-.11c-.33-.154-.682-.313-1.038-.41a15.149 15.149 0 0 0-2.828-.496 11.684 11.684 0 0 0-1.075-.033l-.066.003h-.019l-.006.001h-.004a.747.747 0 0 0-.096.012A7.294 7.294 0 0 1 2.75 14Zm.875-3.455a8.438 8.438 0 0 0 1.287.785c.934.462 2.266.92 3.872.92 1.057 0 1.862-.26 2.544-.565.273-.122.518-.247.764-.374l.216-.11c.306-.155.64-.317.98-.417a13.335 13.335 0 0 1 2.928-.518A7.246 7.246 0 0 0 10 6.75a7.248 7.248 0 0 0-6.375 3.795ZM20.53 4.045a2.018 2.018 0 0 0-.306-.53c.326-.091.549-.097.606.003.058.1-.058.29-.3.527ZM17.106 6.02c-.326.091-.548.097-.606-.003-.058-.1.058-.29.3-.527a2.006 2.006 0 0 0 .306.53Zm0 0c.455-.126 1.113-.418 1.81-.82.695-.402 1.277-.826 1.614-1.156a2 2 0 0 1-3.424 1.976Zm-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82-.696.403-1.278.826-1.615 1.157Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.846 15.572a8.04 8.04 0 0 0-.152-3.773l-.738-.045h-.008l-.039-.002a8.8 8.8 0 0 0-.845.029c-.582.047-1.406.164-2.353.442-.194.057-.419.161-.725.316l-.191.098c-.25.128-.541.277-.854.417-.813.364-1.83.696-3.157.696-1.893 0-3.453-.54-4.537-1.075a9.953 9.953 0 0 1-1.264-.743 7.206 7.206 0 0 1-.436-.328l-.027-.022-.008-.008-.003-.002-.001-.001.484-.557-.485.556-.102-.089a8.059 8.059 0 0 0-.305 3.784l.37-.015.03.75-.03-.75h.031a7.124 7.124 0 0 1 .365-.005c.243.002.588.01 1.003.037a15.84 15.84 0 0 1 3.086.498c.356.098.709.257 1.038.412l.23.11c.265.126.53.253.825.375a6.934 6.934 0 0 0 2.771.573c2.142 0 4.332-.864 5.32-1.407l.657-.361.05.09Z" fill="currentColor" /><path d="M17.202 17.486c-1.273.585-3.316 1.264-5.383 1.264a8.432 8.432 0 0 1-3.348-.688c-.333-.14-.643-.287-.912-.415l-.206-.099c-.329-.154-.576-.261-.794-.32a14.35 14.35 0 0 0-2.788-.45 15.196 15.196 0 0 0-1.224-.03l-.014.001h-.002l-.045.002a8.003 8.003 0 0 0 14.716.735ZM3.043 10.047l.449.392.001.001.013.01.063.052c.058.046.15.115.27.2.244.168.607.398 1.073.628.934.462 2.266.92 3.872.92 1.057 0 1.862-.26 2.544-.565.273-.122.518-.247.764-.374l.216-.11c.306-.155.64-.317.98-.417a13.33 13.33 0 0 1 2.654-.498 10.238 10.238 0 0 1 1.013-.033l.062.002.019.001h.01l-.046.748.046-.747.027.001A7.999 7.999 0 0 0 10 6c-2.98 0-5.58 1.63-6.957 4.047Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M20.53 4.045a2.006 2.006 0 0 0-.306-.53c.326-.091.549-.097.606.003.058.1-.058.29-.3.527ZM17.106 6.02c-.326.091-.548.097-.606-.003-.058-.1.058-.29.3-.527a2.018 2.018 0 0 0 .306.53Zm0 0c.455-.126 1.113-.418 1.81-.82.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976Zm-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82-.696.403-1.278.826-1.615 1.157Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.202 17.486c-1.273.585-3.317 1.264-5.383 1.264a8.432 8.432 0 0 1-3.348-.688c-.334-.14-.643-.287-.912-.415l-.207-.099c-.328-.154-.575-.261-.793-.32a14.35 14.35 0 0 0-2.788-.45 15.197 15.197 0 0 0-1.224-.03l-.014.001H2.53l-.046.002a8.003 8.003 0 0 0 14.717.735ZM3.043 10.047l.449.392v.001l.014.01a5.72 5.72 0 0 0 .334.25c.243.17.606.4 1.072.63.934.462 2.266.92 3.872.92 1.057 0 1.862-.26 2.544-.565.273-.122.517-.247.764-.374l.216-.11c.306-.155.64-.317.98-.417a13.33 13.33 0 0 1 2.654-.498 10.238 10.238 0 0 1 1.012-.033l.063.002.019.001H17.045l.028.002A7.999 7.999 0 0 0 10 6c-2.98 0-5.58 1.63-6.957 4.047Z" fill="currentColor" /><path opacity={0.5} d="M17.846 15.571a8.04 8.04 0 0 0-.152-3.772l-.738-.046h-.008c-.007 0-.02 0-.039-.002a8.698 8.698 0 0 0-.845.029c-.582.048-1.406.165-2.353.443-.194.057-.419.16-.725.316l-.191.097c-.25.129-.541.278-.854.418-.813.364-1.83.695-3.157.695-1.893 0-3.453-.539-4.537-1.075a9.953 9.953 0 0 1-1.264-.742 7.206 7.206 0 0 1-.436-.328l-.027-.023-.008-.007-.003-.003h-.001s-.001-.001.484-.557l-.485.556-.102-.09a8.06 8.06 0 0 0-.305 3.785l.37-.015.03.75-.03-.75H2.48l.022-.001.079-.002a16.66 16.66 0 0 1 1.29.035c.825.054 1.943.185 3.085.498.356.098.709.256 1.038.411l.23.11c.265.126.53.253.825.376a6.936 6.936 0 0 0 2.771.573c2.142 0 4.332-.865 5.32-1.408l.657-.36.05.089ZM20.224 3.514c.326-.09.548-.096.606.004.058.1-.058.29-.3.527a2 2 0 0 1-3.424 1.976c-.326.091-.548.097-.606-.003-.058-.1.058-.29.3-.527a2 2 0 0 1 3.424-1.977Z" fill="currentColor" /><path d="M20.53 4.045a2.006 2.006 0 0 0-.306-.53c-.455.126-1.113.418-1.81.82-.696.402-1.277.826-1.614 1.156a2.018 2.018 0 0 0 .306.53c.455-.126 1.112-.418 1.809-.82.696-.402 1.278-.825 1.615-1.156Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Planet4