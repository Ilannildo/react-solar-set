import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Suspension = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 6.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C19.197 2 18.965 2 18.5 2s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C16 3.803 16 4.035 16 4.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C21 7.197 21 6.965 21 6.5ZM8 19.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C6.197 15 5.965 15 5.5 15s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C3 16.803 3 17.035 3 17.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C8 20.197 8 19.965 8 19.5ZM16 18.5H8M16 5.5H8M12 18.5V14m0-8.5V10M3 4.5c0-.465 0-.697.038-.89A2 2 0 0 1 4.61 2.038C4.803 2 5.035 2 5.5 2s.697 0 .89.038A2 2 0 0 1 7.962 3.61C8 3.803 8 4.035 8 4.5v2c0 .465 0 .697-.038.89A2 2 0 0 1 6.39 8.962C6.197 9 5.965 9 5.5 9s-.697 0-.89-.038A2 2 0 0 1 3.038 7.39M21 19.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038s-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C16 20.197 16 19.965 16 19.5v-2c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572c.193-.038.425-.038.89-.038s.697 0 .89.038a2 2 0 0 1 1.572 1.572" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 6.5v-2c0-.465 0-.697-.038-.89A2 2 0 0 0 6.39 2.038C6.197 2 5.965 2 5.5 2s-.697 0-.89.038A2 2 0 0 0 3.038 3.61C3 3.803 3 4.035 3 4.5v2c0 .465 0 .697.038.89A2 2 0 0 0 4.61 8.962C4.803 9 5.035 9 5.5 9s.697 0 .89-.038A2 2 0 0 0 7.962 7.39C8 7.197 8 6.965 8 6.5ZM21 6.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C19.197 2 18.965 2 18.5 2s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C16 3.803 16 4.035 16 4.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C21 7.197 21 6.965 21 6.5ZM8 19.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C6.197 15 5.965 15 5.5 15s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C3 16.803 3 17.035 3 17.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C8 20.197 8 19.965 8 19.5ZM21 19.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C19.197 15 18.965 15 18.5 15s-.697 0-.89.038a2 2 0 0 0-1.572 1.572c-.038.193-.038.425-.038.89v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M16 18.5H8m8-13H8m4 13v-13" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 6.5v-2c0-.465 0-.697-.038-.89A2 2 0 0 0 6.39 2.038C6.197 2 5.965 2 5.5 2s-.697 0-.89.038A2 2 0 0 0 3.038 3.61C3 3.803 3 4.035 3 4.5v2c0 .465 0 .697.038.89A2 2 0 0 0 4.61 8.962C4.803 9 5.035 9 5.5 9s.697 0 .89-.038A2 2 0 0 0 7.962 7.39C8 7.197 8 6.965 8 6.5ZM21 6.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C19.197 2 18.965 2 18.5 2s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C16 3.803 16 4.035 16 4.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C21 7.197 21 6.965 21 6.5ZM8 19.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C6.197 15 5.965 15 5.5 15s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C3 16.803 3 17.035 3 17.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C8 20.197 8 19.965 8 19.5ZM21 19.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C19.197 15 18.965 15 18.5 15s-.697 0-.89.038a2 2 0 0 0-1.572 1.572c-.038.193-.038.425-.038.89v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89ZM16 18.5H8M16 5.5H8M12 18.5v-13" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.427 1.25a88.266 88.266 0 0 0 .146 0c.393 0 .696 0 .964.053a2.75 2.75 0 0 1 2.16 2.16c.053.268.053.571.053.964v.323h6.5v-.323c0-.393 0-.696.053-.963a2.75 2.75 0 0 1 2.16-2.161c.268-.053.571-.053.964-.053a88.216 88.216 0 0 0 .146 0c.393 0 .696 0 .963.053a2.75 2.75 0 0 1 2.161 2.16c.053.268.053.571.053.964v2.146c0 .393 0 .696-.053.964a2.75 2.75 0 0 1-2.16 2.16c-.268.053-.571.053-.964.053a175.73 175.73 0 0 0-.146 0c-.393 0-.696 0-.963-.053a2.75 2.75 0 0 1-2.161-2.16c-.053-.268-.053-.57-.053-.964V6.25h-2.5v11.5h2.5v-.323c0-.393 0-.696.053-.963a2.75 2.75 0 0 1 2.16-2.161c.268-.053.571-.053.964-.053h.146c.393 0 .696 0 .963.053a2.75 2.75 0 0 1 2.161 2.16c.053.268.053.571.053.964v2.146c0 .393 0 .696-.053.963a2.75 2.75 0 0 1-2.16 2.161c-.268.053-.57.053-.964.053h-.146c-.393 0-.696 0-.963-.053a2.75 2.75 0 0 1-2.161-2.16c-.053-.268-.053-.571-.053-.964v-.323h-6.5v.323c0 .393 0 .696-.053.963a2.75 2.75 0 0 1-2.16 2.161c-.268.053-.57.053-.964.053h-.146c-.393 0-.696 0-.963-.053a2.75 2.75 0 0 1-2.161-2.16c-.053-.268-.053-.57-.053-.964v-2.146c0-.393 0-.696.053-.963a2.75 2.75 0 0 1 2.16-2.161c.268-.053.571-.053.964-.053h.146c.393 0 .696 0 .964.053a2.75 2.75 0 0 1 2.16 2.16c.053.268.053.571.053.964v.323h2.5V6.25h-2.5v.323c0 .393 0 .696-.053.964a2.75 2.75 0 0 1-2.16 2.16c-.268.053-.57.053-.964.053a175.633 175.633 0 0 0-.146 0c-.393 0-.696 0-.963-.053a2.75 2.75 0 0 1-2.161-2.16c-.053-.268-.053-.57-.053-.964V4.427c0-.393 0-.696.053-.963a2.75 2.75 0 0 1 2.16-2.161c.268-.053.571-.053.964-.053ZM7.25 4.5c0-.5-.004-.641-.024-.744a1.25 1.25 0 0 0-.982-.982C6.14 2.754 6 2.75 5.5 2.75c-.5 0-.641.004-.744.024a1.25 1.25 0 0 0-.982.982c-.02.103-.024.243-.024.744v2c0 .5.004.641.024.744.099.496.486.883.982.982.103.02.243.024.744.024.5 0 .641-.004.744-.024a1.25 1.25 0 0 0 .982-.982c.02-.103.024-.243.024-.744v-2Zm0 13c0-.5-.004-.641-.024-.744a1.25 1.25 0 0 0-.982-.982c-.103-.02-.243-.024-.744-.024-.5 0-.641.004-.744.024a1.25 1.25 0 0 0-.982.982c-.02.103-.024.243-.024.744v2c0 .5.004.641.024.744.099.496.486.883.982.982.103.02.243.024.744.024.5 0 .641-.004.744-.024a1.25 1.25 0 0 0 .982-.982c.02-.103.024-.243.024-.744v-2Zm9.5 2c0 .5.004.641.024.744.099.496.486.883.982.982.103.02.243.024.744.024.5 0 .641-.004.744-.024a1.25 1.25 0 0 0 .982-.982c.02-.103.024-.243.024-.744v-2c0-.5-.004-.641-.024-.744a1.25 1.25 0 0 0-.982-.982c-.103-.02-.243-.024-.744-.024-.5 0-.641.004-.744.024a1.25 1.25 0 0 0-.982.982c-.02.103-.024.243-.024.744v2Zm0-13c0 .5.004.641.024.744.099.496.486.883.982.982.103.02.243.024.744.024.5 0 .641-.004.744-.024a1.25 1.25 0 0 0 .982-.982c.02-.103.024-.243.024-.744v-2c0-.5-.004-.641-.024-.744a1.25 1.25 0 0 0-.982-.982c-.103-.02-.243-.024-.744-.024-.5 0-.641.004-.744.024a1.25 1.25 0 0 0-.982.982c-.02.103-.024.243-.024.744v2Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 6.5v-2c0-.465 0-.697.038-.89A2 2 0 0 1 4.61 2.038C4.803 2 5.035 2 5.5 2s.697 0 .89.038A2 2 0 0 1 7.962 3.61C8 3.803 8 4.035 8 4.5v.25h8V4.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C17.803 2 18.035 2 18.5 2s.697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89v2c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C19.197 9 18.965 9 18.5 9s-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C16 7.197 16 6.965 16 6.5v-.25h-3.25v11.5H16v-.25c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572c.193-.038.425-.038.89-.038s.697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89v2c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038s-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C16 20.197 16 19.965 16 19.5v-.25H8v.25c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C6.197 22 5.965 22 5.5 22s-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C3 20.197 3 19.965 3 19.5v-2c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C4.803 15 5.035 15 5.5 15s.697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89v.25h3.25V6.25H8v.25c0 .465 0 .697-.038.89A2 2 0 0 1 6.39 8.962C6.197 9 5.965 9 5.5 9s-.697 0-.89-.038A2 2 0 0 1 3.038 7.39C3 7.197 3 6.965 3 6.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12.75 17.75V6.25H16v-1.5H8v1.5h3.25v11.5H8v1.5h8v-1.5h-3.25Z" fill="currentColor" /><path d="M8 6.5v-2c0-.465 0-.697-.038-.89A2 2 0 0 0 6.39 2.038C6.197 2 5.965 2 5.5 2s-.697 0-.89.038A2 2 0 0 0 3.038 3.61C3 3.803 3 4.035 3 4.5v2c0 .465 0 .697.038.89A2 2 0 0 0 4.61 8.962C4.803 9 5.035 9 5.5 9s.697 0 .89-.038A2 2 0 0 0 7.962 7.39C8 7.197 8 6.965 8 6.5ZM21 6.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C19.197 2 18.965 2 18.5 2s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C16 3.803 16 4.035 16 4.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C21 7.197 21 6.965 21 6.5ZM8 19.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C6.197 15 5.965 15 5.5 15s-.697 0-.89.038a2 2 0 0 0-1.572 1.572C3 16.803 3 17.035 3 17.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C8 20.197 8 19.965 8 19.5ZM21 19.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C19.197 15 18.965 15 18.5 15s-.697 0-.89.038a2 2 0 0 0-1.572 1.572c-.038.193-.038.425-.038.89v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572c.038-.193.038-.425.038-.89Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Suspension