import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Server = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21h-1M11 2h7c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6c0 1.886 0 2.828-.586 3.414C20.828 10 19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586C2 8.828 2 7.886 2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h1M11 6h7M6 6h2M11 17h7M6 17h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17ZM2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h12c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6c0 1.886 0 2.828-.586 3.414C20.828 10 19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586C2 8.828 2 7.886 2 6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11 6h7M6 6h2M11 17h7M6 17h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17ZM2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h12c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6c0 1.886 0 2.828-.586 3.414C20.828 10 19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586C2 8.828 2 7.886 2 6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11 6h7M6 6h2M11 17h7M6 17h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.948 1.5h12.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v.104c0 .898 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.104c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726C4.3 1.5 5.05 1.5 5.949 1.5ZM3.905 3.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.064.483-.066 1.131-.066 2.095 0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h12c.964 0 1.612-.002 2.095-.067.461-.062.659-.169.789-.3.13-.13.237-.327.3-.788.064-.483.066-1.131.066-2.095 0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3C19.612 3.003 18.964 3 18 3H6c-.964 0-1.612.002-2.095.067ZM5.25 6.25A.75.75 0 0 1 6 5.5h2A.75.75 0 1 1 8 7H6a.75.75 0 0 1-.75-.75Zm5 0A.75.75 0 0 1 11 5.5h7A.75.75 0 0 1 18 7h-7a.75.75 0 0 1-.75-.75ZM5.948 12.5h12.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08Zm-2.043 1.566c-.461.063-.659.17-.789.3-.13.13-.237.328-.3.79-.064.482-.066 1.13-.066 2.094s.002 1.612.067 2.095c.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h12c.964 0 1.612-.002 2.095-.067.461-.062.659-.169.789-.3.13-.13.237-.327.3-.788.064-.483.066-1.131.066-2.095 0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3C19.612 14.002 18.964 14 18 14H6c-.964 0-1.612.002-2.095.066ZM5.25 17.25A.75.75 0 0 1 6 16.5h2A.75.75 0 0 1 8 18H6a.75.75 0 0 1-.75-.75Zm5 0a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2 7c0-1.886 0-2.828.586-3.414C3.172 3 4.114 3 6 3h12c1.886 0 2.828 0 3.414.586C22 4.172 22 5.114 22 7c0 1.886 0 2.828-.586 3.414C20.828 11 19.886 11 18 11H6c-1.886 0-2.828 0-3.414-.586C2 9.828 2 8.886 2 7Zm4-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H6Zm4.25.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75ZM2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17Zm4-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H6Zm4.25.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g opacity={0.5} fill="currentColor"><path d="M6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13ZM6 3h12c1.886 0 2.828 0 3.414.586C22 4.172 22 5.114 22 7c0 1.886 0 2.828-.586 3.414C20.828 11 19.886 11 18 11H6c-1.886 0-2.828 0-3.414-.586C2 9.828 2 8.886 2 7c0-1.886 0-2.828.586-3.414C3.172 3 4.114 3 6 3Z" /></g><path d="M10.25 7a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75ZM5.25 7A.75.75 0 0 1 6 6.25h2a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 7ZM10.25 17a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75ZM5.25 17a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Server