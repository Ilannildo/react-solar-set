import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const PauseCircle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 8 9.034 8 9.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 16 9.966 16 9.5 16s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 15.199 8 14.966 8 14.5v-5ZM13 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 8 14.034 8 14.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 15.199 13 14.966 13 14.5v-5Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M8 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 8 9.034 8 9.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 16 9.966 16 9.5 16s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 15.199 8 14.966 8 14.5v-5ZM13 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 8 14.034 8 14.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 15.199 13 14.966 13 14.5v-5Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M8 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 8 9.034 8 9.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 16 9.966 16 9.5 16s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 15.199 8 14.966 8 14.5v-5ZM13 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 8 14.034 8 14.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 15.199 13 14.966 13 14.5v-5Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm8.228-4.75h.044c.214 0 .41 0 .576.011.178.012.373.04.572.122.428.178.77.519.947.947.082.199.11.394.122.572.011.165.011.362.011.576v5.044c0 .214 0 .41-.011.576-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.199.082-.394.11-.572.122-.165.011-.362.011-.576.011h-.044c-.214 0-.41 0-.576-.011a1.781 1.781 0 0 1-.572-.122 1.75 1.75 0 0 1-.947-.947 1.781 1.781 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576V9.478c0-.214 0-.41.011-.576.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122.165-.011.362-.011.576-.011Zm-.577 1.52a.25.25 0 0 0-.13.131.642.642 0 0 0-.013.103 8.289 8.289 0 0 0-.008.496v5c0 .243 0 .388.008.496.004.067.01.095.012.103a.25.25 0 0 0 .131.13.63.63 0 0 0 .103.013c.108.008.253.008.496.008s.388 0 .496-.008a.632.632 0 0 0 .103-.012.25.25 0 0 0 .13-.131.632.632 0 0 0 .013-.103c.008-.108.008-.253.008-.496v-5c0-.243 0-.388-.008-.496a.63.63 0 0 0-.012-.103.25.25 0 0 0-.131-.13.641.641 0 0 0-.103-.013A8.289 8.289 0 0 0 9.5 8.75c-.243 0-.388 0-.496.008a.642.642 0 0 0-.103.012Zm5.577-1.52h.044c.214 0 .41 0 .576.011.178.012.373.04.572.122.429.178.77.519.947.947.082.199.11.394.122.572.011.165.011.362.011.576v5.044c0 .214 0 .41-.011.576-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.199.082-.394.11-.572.122-.165.011-.362.011-.576.011h-.044c-.214 0-.41 0-.576-.011a1.781 1.781 0 0 1-.572-.122 1.75 1.75 0 0 1-.947-.947 1.781 1.781 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576V9.478c0-.214 0-.41.011-.576.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122.165-.011.362-.011.576-.011Zm-.577 1.52a.25.25 0 0 0-.13.131.63.63 0 0 0-.013.103 8.258 8.258 0 0 0-.008.496v5c0 .243 0 .388.008.496.004.067.01.095.012.103a.25.25 0 0 0 .131.13.632.632 0 0 0 .103.013c.108.008.253.008.496.008s.388 0 .496-.008a.632.632 0 0 0 .103-.012.25.25 0 0 0 .13-.131.632.632 0 0 0 .013-.103c.008-.108.008-.253.008-.496v-5c0-.243 0-.388-.008-.496a.63.63 0 0 0-.012-.103.25.25 0 0 0-.131-.13.644.644 0 0 0-.103-.013 8.29 8.29 0 0 0-.496-.008c-.243 0-.388 0-.496.008a.643.643 0 0 0-.103.012Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM8.076 8.617C8 8.801 8 9.034 8 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 8 9.966 8 9.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541Zm5 0C13 8.801 13 9.034 13 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 8 14.966 8 14.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" fill="currentColor" /><path d="M8.076 8.617C8 8.801 8 9.034 8 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 8 9.966 8 9.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541ZM13.076 8.617C13 8.801 13 9.034 13 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 8 14.966 8 14.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PauseCircle