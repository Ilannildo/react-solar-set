import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Planet3 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 8.008S5.937 11 10.437 11M21 8.008s-1.917-.138-4.5.748c-.797.273-1.303.695-2.5 1.244M3 14.008s.768-.05 2 .107m2.903.64C9.401 15.228 11.172 17 14.51 17c3.012 0 5.381-1.129 6.761-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3 8.008S5.937 11 10.437 11c3.063 0 4.689-1.773 6.063-2.244 2.583-.886 4.5-.748 4.5-.748M3 14.008s2.089-.138 4.903.748C9.401 15.226 11.172 17 14.51 17c3.012 0 5.381-1.129 6.761-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="currentColor" strokeWidth={1.5} /><path d="M3 8.008S5.937 11 10.437 11c3.063 0 4.689-1.773 6.063-2.244 2.583-.886 4.5-.748 4.5-.748M3 14.008s2.089-.138 4.903.748C9.401 15.226 11.172 17 14.51 17c3.012 0 5.381-1.129 6.761-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.192 9.166a9.244 9.244 0 0 0-.355 4.11.754.754 0 0 1 .114-.017l.049.748-.05-.748H2.964l.024-.002a5.372 5.372 0 0 1 .386-.007c.259.001.629.012 1.088.053.919.08 2.2.275 3.667.737.451.142.9.374 1.327.606l.299.163c.346.19.697.383 1.087.57.98.47 2.144.871 3.668.871 2.824 0 5.055-1.06 6.36-1.884a.764.764 0 0 1 .088-.048c.191-.74.293-1.517.293-2.318a9.232 9.232 0 0 0-.587-3.25c-.2 0-.497.01-.873.046-.754.072-1.82.249-3.047.67-.263.09-.563.252-.958.485l-.248.148c-.323.193-.69.413-1.088.62-1.03.539-2.323 1.031-4.012 1.031-2.418 0-4.406-.804-5.78-1.597a12.447 12.447 0 0 1-1.465-.987Zm.605-1.445a10.847 10.847 0 0 0 1.609 1.133c1.22.704 2.95 1.396 5.031 1.396 1.374 0 2.425-.394 3.317-.86.356-.186.675-.377.993-.567l.275-.164c.392-.231.81-.467 1.235-.613a14.872 14.872 0 0 1 3.698-.768A9.245 9.245 0 0 0 12 2.75a9.249 9.249 0 0 0-8.203 4.971Zm16.288 8.776a13.246 13.246 0 0 1-5.576 1.253c-1.813 0-3.202-.485-4.317-1.02-.43-.206-.828-.424-1.18-.617l-.272-.149c-.429-.232-.764-.399-1.062-.493a15.836 15.836 0 0 0-3.347-.674 11.668 11.668 0 0 0-1.165-.045 9.254 9.254 0 0 0 16.92 1.745ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.775 14.118c.148-.683.225-1.391.225-2.118a9.99 9.99 0 0 0-.525-3.206l-.527-.038h-.011l-.051-.003a9.753 9.753 0 0 0-1.096.043c-.754.072-1.82.249-3.047.67-.263.09-.563.252-.958.485l-.248.148c-.322.192-.69.413-1.088.62-1.03.539-2.323 1.031-4.012 1.031-2.418 0-4.407-.804-5.78-1.596a12.35 12.35 0 0 1-1.6-1.096 9.329 9.329 0 0 1-.48-.415 10.098 10.098 0 0 0-.498 4.628l.385-.02h.011l.027-.001a8.595 8.595 0 0 1 .45-.006c.303.002.733.014 1.253.054 1.037.082 2.447.278 3.923.742.45.142.899.374 1.327.606l.299.163c.346.19.697.383 1.087.57.98.47 2.144.871 3.668.871 1.383 0 2.662-.344 3.802-.766.571-.21 1.099-.438 1.591-.65l.018-.007c.475-.204.937-.403 1.343-.538l.512-.171Z" fill="currentColor" /><path d="M21.206 15.912c-.214.087-.45.188-.711.3l-.01.005c-.487.21-1.045.45-1.654.674-1.226.454-2.693.86-4.322.86-1.813 0-3.203-.486-4.317-1.02a23.92 23.92 0 0 1-1.18-.617l-.272-.15c-.43-.232-.764-.399-1.062-.493a16.416 16.416 0 0 0-3.59-.677 15.935 15.935 0 0 0-1.453-.048l-.077.003H2.538l-.153.008C3.582 18.94 7.433 22 12 22c4.135 0 7.683-2.51 9.206-6.088ZM2.71 8.293l.285-.28-.285.28ZM3.237 7.179l.297.302.003.004.019.018.086.081c.079.072.2.18.36.31.32.26.795.61 1.404.96 1.219.704 2.95 1.396 5.031 1.396 1.374 0 2.425-.394 3.317-.86.355-.186.675-.377.993-.567l.275-.163c.392-.232.81-.468 1.235-.614a14.872 14.872 0 0 1 3.39-.743 11.247 11.247 0 0 1 1.155-.052A9.998 9.998 0 0 0 12 2a9.998 9.998 0 0 0-8.763 5.179ZM21.023 7.683 21 8.006l.023-.323Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.206 15.912a40.5 40.5 0 0 0-.711.3l-.01.005c-.487.21-1.045.45-1.654.674-1.226.454-2.693.86-4.322.86-1.813 0-3.203-.486-4.317-1.02-.43-.206-.829-.425-1.18-.617a59.682 59.682 0 0 0-.272-.15c-.43-.232-.764-.399-1.062-.493a16.416 16.416 0 0 0-3.59-.677 15.935 15.935 0 0 0-1.453-.048l-.077.003H2.537l-.152.008C3.582 18.94 7.433 22 12 22c4.134 0 7.683-2.51 9.206-6.088ZM3.237 7.179l.297.302.003.004.019.018.086.081c.079.072.2.18.36.31.32.26.795.61 1.404.96 1.219.704 2.949 1.396 5.03 1.396 1.374 0 2.426-.394 3.318-.86.355-.186.675-.377.993-.567l.275-.163c.392-.232.81-.468 1.234-.614a14.872 14.872 0 0 1 3.391-.743 11.243 11.243 0 0 1 1.155-.052A9.998 9.998 0 0 0 12 2a9.998 9.998 0 0 0-8.763 5.179Z" fill="currentColor" /><path opacity={0.5} d="M21.775 14.118c.148-.683.225-1.391.225-2.118a9.99 9.99 0 0 0-.525-3.206l-.527-.038h-.011l-.051-.003a9.753 9.753 0 0 0-1.096.043c-.754.072-1.82.249-3.047.67-.263.09-.563.252-.958.485l-.248.148c-.322.193-.69.413-1.088.62-1.03.539-2.323 1.031-4.012 1.031-2.418 0-4.407-.803-5.78-1.596a12.342 12.342 0 0 1-1.6-1.096 9.329 9.329 0 0 1-.48-.415 10.098 10.098 0 0 0-.498 4.628l.385-.02h.011l.027-.001a8.595 8.595 0 0 1 .45-.006c.303.002.733.014 1.253.055 1.037.08 2.447.277 3.923.742.45.141.899.373 1.327.605l.299.163c.346.19.697.383 1.087.57.98.47 2.144.871 3.668.871 1.383 0 2.662-.344 3.802-.766.571-.21 1.099-.438 1.591-.65l.018-.007c.475-.204.937-.403 1.343-.538l.512-.171Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Planet3