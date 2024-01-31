import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const WiFiRouterMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M13 20H6c-1.886 0-2.828 0-3.414-.586C2 18.828 2 17.886 2 16c0-1.886 0-2.828.586-3.414C3.172 12 4.114 12 6 12h12c1.886 0 2.828 0 3.414.586C22 13.172 22 14.114 22 16c0 1.886 0 2.828-.586 3.414C20.828 20 19.886 20 18 20h-1M16.5 12V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.4} d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.7} d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><g opacity={0.5} fill="currentColor"><path d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></g><path d="M2 16c0-1.886 0-2.828.586-3.414C3.172 12 4.114 12 6 12h12c1.886 0 2.828 0 3.414.586C22 13.172 22 14.114 22 16c0 1.886 0 2.828-.586 3.414C20.828 20 19.886 20 18 20H6c-1.886 0-2.828 0-3.414-.586C2 18.828 2 17.886 2 16Z" stroke="currentColor" strokeWidth={1.5} /><path d="M16.5 12V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M2 16c0-1.886 0-2.828.586-3.414C3.172 12 4.114 12 6 12h12c1.886 0 2.828 0 3.414.586C22 13.172 22 14.114 22 16c0 1.886 0 2.828-.586 3.414C20.828 20 19.886 20 18 20H6c-1.886 0-2.828 0-3.414-.586C2 18.828 2 17.886 2 16Z" stroke="currentColor" strokeWidth={1.5} /><path d="M16.5 12V9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.5 4.75a4.752 4.752 0 0 0-4.391 2.934.75.75 0 1 1-1.386-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574A4.752 4.752 0 0 0 16.5 4.75Z" fill="currentColor" /><path d="M16.5 7.25a2.251 2.251 0 0 0-2.16 1.618.75.75 0 1 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.251 2.251 0 0 0 16.5 7.25ZM6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.948 11.25h9.802V9a.75.75 0 0 1 1.5 0v2.25h.802c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08ZM18 12.75c.964 0 1.612.002 2.095.066.461.063.659.17.789.3.13.13.237.328.3.79.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789-.13.13-.327.237-.788.3-.483.064-1.131.066-2.095.066H6c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3-.13-.13-.237-.327-.3-.788-.064-.483-.066-1.131-.066-2.095 0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3.483-.064 1.131-.066 2.095-.066h12Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.11 7.434a4.752 4.752 0 0 1 8.78 0 .75.75 0 0 0 1.386-.574 6.252 6.252 0 0 0-11.553 0 .75.75 0 0 0 1.386.574Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.586 12.336C2 12.922 2 13.864 2 15.75c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414 0-1.886 0-2.828-.586-3.414-.586-.586-1.528-.586-3.414-.586h-.75v-3a.75.75 0 0 0-1.5 0v3H6c-1.886 0-2.828 0-3.414.586ZM6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /><path d="M14.34 8.618a2.251 2.251 0 0 1 4.32 0 .75.75 0 1 0 1.44-.42 3.751 3.751 0 0 0-7.2 0 .75.75 0 0 0 1.44.42Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.4} fillRule="evenodd" clipRule="evenodd" d="M16.5 4.5a4.752 4.752 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574A4.752 4.752 0 0 0 16.5 4.5Z" fill="currentColor" /><path opacity={0.7} fillRule="evenodd" clipRule="evenodd" d="M16.5 7a2.251 2.251 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.251 2.251 0 0 0 16.5 7Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 15.75c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586h12c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586H6c-1.886 0-2.828 0-3.414-.586C2 18.578 2 17.636 2 15.75Zm4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /><path d="M17.25 8.75a.75.75 0 0 0-1.5 0v3h1.5v-3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default WiFiRouterMinimalistic