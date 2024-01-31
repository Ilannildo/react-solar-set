import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Scanner = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 22H9m-7-7c0 3.771 0 4.657 1.172 5.828.653.654 1.528.943 2.828 1.07M22 15c0 3.771 0 4.657-1.172 5.828C19.657 22 17.771 22 14 22M14 2h1m7 7c0-3.771 0-4.657-1.172-5.828-.653-.654-1.528-.943-2.828-1.07M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 5.229 2 9M2 12h6m14 0H12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 18.771 2 15M22 15c0 3.771 0 4.657-1.172 5.828C19.657 22 17.771 22 14 22M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 5.229 22 9M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 5.229 2 9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 12h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 18.771 2 15M22 15c0 3.771 0 4.657-1.172 5.828C19.657 22 17.771 22 14 22M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 5.229 22 9M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 5.229 2 9M2 12h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 2.75c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.487.487.7.865.817 1.538.132.759.135 1.84.135 3.76a.75.75 0 0 0 1.5 0v-.096c0-1.8 0-3.018-.158-3.922-.175-1.005-.549-1.656-1.233-2.34-.749-.75-1.698-1.081-2.87-1.239-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5ZM2 14.25a.75.75 0 0 1 .75.75c0 1.92.003 3.001.135 3.76.118.673.33 1.051.817 1.538.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.684-.685-1.058-1.336-1.233-2.341-.158-.904-.158-2.123-.158-3.922V15a.75.75 0 0 1 .75-.75ZM22 14.25a.75.75 0 0 1 .75.75v.096c0 1.8 0 3.018-.158 3.922-.175 1.005-.549 1.656-1.233 2.34-.749.75-1.698 1.081-2.87 1.239-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.487-.487.7-.865.817-1.538.132-.759.135-1.84.135-3.76a.75.75 0 0 1 .75-.75ZM9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.487.487-.7.865-.817 1.538-.132.759-.135 1.84-.135 3.76a.75.75 0 1 1-1.5 0v-.096c0-1.8 0-3.018.158-3.922.175-1.005.549-1.656 1.233-2.34.749-.75 1.698-1.081 2.87-1.239 1.14-.153 2.595-.153 4.433-.153ZM2 11.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H2Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Zm8.004-6.248a.75.75 0 1 0-.008-1.5c-1.082.005-1.98.03-2.713.158-.752.132-1.395.382-1.922.884-.455.433-.76.872-.925 1.503-.15.571-.177 1.275-.184 2.197a.75.75 0 1 0 1.5.012c.008-.949.04-1.466.135-1.828.08-.303.206-.51.509-.798.242-.23.572-.392 1.145-.492.592-.104 1.37-.13 2.463-.136Zm4-1.5a.75.75 0 0 0-.008 1.5c1.093.006 1.871.032 2.463.136.573.1.903.262 1.145.492.303.288.43.495.509.798.095.362.128.879.135 1.828a.75.75 0 0 0 1.5-.012c-.007-.922-.034-1.626-.184-2.197-.166-.63-.47-1.07-.925-1.503-.527-.502-1.17-.752-1.922-.884-.733-.128-1.631-.153-2.713-.158ZM5 11.25a.75.75 0 1 0 0 1.5h14a.75.75 0 0 0 0-1.5H5Zm.752 3.744a.75.75 0 0 0-1.5.012c.007.923.034 1.626.184 2.197.166.63.47 1.07.925 1.503.527.502 1.17.752 1.922.884.733.128 1.631.153 2.713.158a.75.75 0 0 0 .008-1.5c-1.093-.005-1.871-.032-2.463-.136-.573-.1-.903-.261-1.145-.492-.303-.288-.43-.495-.509-.798-.095-.361-.127-.879-.135-1.828Zm13.996.012a.75.75 0 1 0-1.5-.012c-.008.95-.04 1.467-.135 1.828-.08.303-.206.51-.509.798-.242.23-.572.392-1.145.492-.592.104-1.37.13-2.463.136a.75.75 0 0 0 .008 1.5c1.082-.005 1.98-.03 2.713-.158.752-.132 1.395-.382 1.922-.884.455-.433.76-.872.925-1.503.15-.571.177-1.274.184-2.197Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z" fill="currentColor" /><path d="M10.004 5.752a.75.75 0 1 0-.008-1.5c-1.082.006-1.98.03-2.713.159-.752.131-1.395.382-1.922.883-.455.433-.76.872-.925 1.503-.15.572-.177 1.275-.184 2.198a.75.75 0 1 0 1.5.011c.008-.949.04-1.466.135-1.828.08-.303.206-.51.509-.798.242-.23.572-.392 1.145-.492.592-.103 1.37-.13 2.463-.136ZM14.004 4.252a.75.75 0 0 0-.008 1.5c1.093.006 1.871.033 2.463.136.573.1.903.262 1.145.492.303.289.43.495.509.798.095.362.128.88.135 1.828a.75.75 0 0 0 1.5-.011c-.007-.923-.034-1.626-.184-2.198-.166-.63-.47-1.07-.925-1.503-.527-.501-1.17-.752-1.922-.883-.733-.129-1.631-.153-2.713-.159ZM5 11.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5H5ZM5.752 14.995a.75.75 0 1 0-1.5.011c.007.923.034 1.626.184 2.198.166.63.47 1.07.925 1.503.527.5 1.17.751 1.922.883.733.128 1.631.153 2.713.159a.75.75 0 0 0 .008-1.5c-1.093-.006-1.871-.033-2.463-.137-.573-.1-.903-.261-1.145-.492-.303-.288-.43-.495-.509-.797-.095-.362-.127-.88-.135-1.828ZM19.748 15.006a.75.75 0 1 0-1.5-.011c-.008.948-.04 1.466-.135 1.828-.08.302-.206.509-.509.797-.242.23-.572.392-1.145.492-.592.104-1.37.13-2.463.137a.75.75 0 1 0 .008 1.5c1.082-.006 1.98-.03 2.713-.16.752-.13 1.395-.381 1.922-.882.455-.434.76-.873.925-1.503.15-.572.177-1.275.184-2.198Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Scanner