import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const StopwatchPause = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 9 9.034 9 9.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 17 9.966 17 9.5 17s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 16.199 8 15.966 8 15.5v-5ZM13 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 16.199 13 15.966 13 15.5v-5Z" stroke="currentColor" strokeWidth={1.5} /><path d="M10 2h4M7.5 5.204A9 9 0 1 1 4.204 8.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={13} r={9} stroke="currentColor" strokeWidth={1.5} /><path d="M8 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 9 9.034 9 9.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 17 9.966 17 9.5 17s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 16.199 8 15.966 8 15.5v-5ZM13 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 16.199 13 15.966 13 15.5v-5Z" stroke="currentColor" strokeWidth={1.5} /><path d="M10 2h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={13} r={9} stroke="currentColor" strokeWidth={1.5} /><path d="M8 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 9 9.034 9 9.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 17 9.966 17 9.5 17s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 16.199 8 15.966 8 15.5v-5ZM13 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 16.199 13 15.966 13 15.5v-5Z" stroke="currentColor" strokeWidth={1.5} /><path d="M10 2h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2ZM12 4.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.559 8.239h-.044c-.214 0-.41 0-.576.011-.178.012-.373.04-.572.122a1.75 1.75 0 0 0-.947.947c-.082.199-.11.394-.122.572a8.939 8.939 0 0 0-.011.576v5.043c0 .215 0 .412.011.577.012.178.04.373.122.572.178.428.518.769.947.947.199.082.394.11.572.121.165.012.362.012.576.012h.044c.214 0 .41 0 .576-.012.178-.012.373-.04.572-.121a1.75 1.75 0 0 0 .947-.948 1.78 1.78 0 0 0 .122-.571c.011-.165.011-.362.011-.576v-5.044c0-.214 0-.411-.011-.576a1.779 1.779 0 0 0-.122-.572 1.75 1.75 0 0 0-.947-.947 1.782 1.782 0 0 0-.572-.122c-.165-.011-.362-.011-.576-.011Zm-.62 1.52a.25.25 0 0 0-.132.131.636.636 0 0 0-.012.103 8.37 8.37 0 0 0-.008.496v5c0 .243 0 .388.008.496.004.067.01.095.012.102a.25.25 0 0 0 .131.131.655.655 0 0 0 .103.013c.108.007.253.008.496.008s.388 0 .496-.008a.66.66 0 0 0 .103-.013.25.25 0 0 0 .13-.13.66.66 0 0 0 .013-.103c.008-.108.008-.253.008-.496v-5c0-.244 0-.388-.008-.496a.658.658 0 0 0-.012-.103.25.25 0 0 0-.131-.13.642.642 0 0 0-.103-.013 8.29 8.29 0 0 0-.496-.008c-.243 0-.388 0-.496.008a.64.64 0 0 0-.103.012ZM10.098 8.261a9.009 9.009 0 0 0-.576-.011h-.044c-.214 0-.41 0-.576.011-.178.012-.373.04-.572.122a1.75 1.75 0 0 0-.947.947c-.082.199-.11.394-.122.572-.011.165-.011.362-.011.576v5.044c0 .214 0 .41.011.576.012.178.04.373.122.572.178.428.519.769.947.947.199.082.394.11.572.122.165.01.362.01.576.01h.044c.214 0 .41 0 .576-.01.178-.012.373-.04.572-.122a1.75 1.75 0 0 0 .947-.947c.082-.199.11-.394.122-.572.011-.165.011-.362.011-.576v-5.044c0-.214 0-.411-.011-.576a1.781 1.781 0 0 0-.122-.572 1.75 1.75 0 0 0-.947-.947 1.781 1.781 0 0 0-.572-.122Zm-1.197 1.51a.25.25 0 0 0-.13.13.64.64 0 0 0-.013.103 8.287 8.287 0 0 0-.008.496v5c0 .243 0 .388.008.496.004.067.01.095.012.103a.25.25 0 0 0 .131.13.658.658 0 0 0 .103.013c.108.008.253.008.496.008s.388 0 .496-.008a.66.66 0 0 0 .103-.012.25.25 0 0 0 .13-.131.632.632 0 0 0 .013-.103c.008-.108.008-.253.008-.496v-5c0-.243 0-.388-.008-.496a.63.63 0 0 0-.012-.103.25.25 0 0 0-.131-.13.642.642 0 0 0-.103-.013A8.29 8.29 0 0 0 9.5 9.75c-.243 0-.388 0-.496.008a.64.64 0 0 0-.103.012Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M21 13.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-10 2.5v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077s-.699 0-.883.076a1 1 0 0 0-.54.541C8 10.551 8 10.784 8 11.25v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883Zm5 0v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077s-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883Z" fill="currentColor" /><path d="M10 2a.75.75 0 0 0 0 1.5h4A.75.75 0 0 0 14 2h-4Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.25 2.75A.75.75 0 0 1 10 2h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path opacity={0.5} d="M12 23a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" fill="currentColor" /><path d="M11 16.5v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 10 9.966 10 9.5 10s-.699 0-.883.076a1 1 0 0 0-.54.541C8 10.801 8 11.034 8 11.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883ZM16 16.5v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 10 14.966 10 14.5 10s-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default StopwatchPause