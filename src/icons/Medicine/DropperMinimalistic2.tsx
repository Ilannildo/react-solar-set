import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const DropperMinimalistic2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 16h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.862.862 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 21v1M14 4a2 2 0 1 0-4 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5 8c0-1.886 0-2.828.586-3.414C6.172 4 7.114 4 9 4h6c1.886 0 2.828 0 3.414.586C19 5.172 19 6.114 19 8v7.883c0 .76-.32 1.487-.88 2.001a9.053 9.053 0 0 1-12.24 0 2.716 2.716 0 0 1-.88-2V12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19 15.883V8c0-1.886 0-2.828-.586-3.414C17.828 4 16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586C5 5.172 5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM14 16h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.862.862 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M12 21v1M14 4a2 2 0 1 0-4 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19 15.883V8c0-1.886 0-2.828-.586-3.414C17.828 4 16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586C5 5.172 5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2ZM14 16h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.862.862 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 21v1M14 4a2 2 0 1 0-4 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.175 8.101a1.612 1.612 0 0 0-2.35 0 9.225 9.225 0 0 0-.986 1.215c-.285.43-.589 1.008-.589 1.6 0 1.536 1.203 2.834 2.75 2.834s2.75-1.298 2.75-2.833c0-.593-.304-1.17-.589-1.601a9.228 9.228 0 0 0-.986-1.215Zm-1.261 1.032c.029-.03.06-.04.086-.04.027 0 .057.01.086.04.28.294.588.653.823 1.01.254.383.341.646.341.774 0 .765-.588 1.333-1.25 1.333s-1.25-.568-1.25-1.333c0-.128.087-.39.34-.775.236-.356.545-.715.824-1.009Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.354 3.25a2.751 2.751 0 0 1 5.293 0h.405c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v7.935c0 .97-.407 1.897-1.123 2.554a9.771 9.771 0 0 1-5.877 2.551V22a.75.75 0 0 1-1.5 0v-1.012a9.771 9.771 0 0 1-5.877-2.551 3.466 3.466 0 0 1-1.123-2.554V7.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08h.406Zm1.646 0a1.248 1.248 0 0 1 2 0h-2Zm4 1.5c.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095v7.883c0 .55-.231 1.076-.637 1.448a8.303 8.303 0 0 1-11.226 0 1.966 1.966 0 0 1-.637-1.448V8c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3C7.388 4.753 8.036 4.75 9 4.75h6Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M19 8v7.883c0 .76-.32 1.487-.88 2.001a9.024 9.024 0 0 1-5.37 2.352v1.014a.75.75 0 0 1-1.5 0v-1.014a9.024 9.024 0 0 1-5.37-2.352 2.716 2.716 0 0 1-.88-2V8c0-1.886 0-2.828.586-3.414C6.172 4 7.114 4 9 4h6c1.886 0 2.828 0 3.414.586C19 5.172 19 6.114 19 8Zm-7 5c1.105 0 2-.933 2-2.083 0-.72-.783-1.681-1.37-2.3a.862.862 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3 0 1.15.895 2.083 2 2.083Zm-2.75 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path d="M13.732 3a2 2 0 0 0-3.464 0h3.464Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M19 15.883V8c0-1.886 0-2.828-.586-3.414C17.828 4 16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586C5 5.172 5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0 0 12.24 0c.56-.514.88-1.24.88-2Z" fill="currentColor" /><path d="M18.998 7.25H17a.75.75 0 0 0 0 1.5h2V8c0-.269 0-.518-.002-.75ZM19 10.25h-2a.75.75 0 0 0 0 1.5h2v-1.5ZM19 13.25h-2a.75.75 0 0 0 0 1.5h2v-1.5ZM14 4a2 2 0 1 0-4 0h4ZM11.25 20.235c.5.042 1 .042 1.5 0v1.015a.75.75 0 0 1-1.5 0v-1.015Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.862.862 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default DropperMinimalistic2