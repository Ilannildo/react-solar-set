import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const PostsCarouselVertical = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.874 9c-.084-.387-.225-.68-.46-.914C17.828 7.5 16.886 7.5 15 7.5H9c-1.886 0-2.828 0-3.414.586C5 8.672 5 9.614 5 11.5v1c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h6c1.886 0 2.828 0 3.414-.586.532-.531.581-1.357.585-2.914M19 2v.5A2.5 2.5 0 0 1 16.5 5h-9A2.5 2.5 0 0 1 5 2.5V2M19 22v-.5a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 5 21.5v.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 11.5c0-1.886 0-2.828.586-3.414C6.172 7.5 7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586C19 8.672 19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586H9c-1.886 0-2.828 0-3.414-.586C5 15.328 5 14.386 5 12.5v-1Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M19 2v.5A2.5 2.5 0 0 1 16.5 5h-9A2.5 2.5 0 0 1 5 2.5V2M19 22v-.5a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 5 21.5v.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 11.5c0-1.886 0-2.828.586-3.414C6.172 7.5 7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586C19 8.672 19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586H9c-1.886 0-2.828 0-3.414-.586C5 15.328 5 14.386 5 12.5v-1Z" stroke="currentColor" strokeWidth={1.5} /><path d="M19 2v.5A2.5 2.5 0 0 1 16.5 5h-9A2.5 2.5 0 0 1 5 2.5V2M19 22v-.5a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 5 21.5v.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 1.25a.75.75 0 0 1 .75.75v.5c0 .966.784 1.75 1.75 1.75h9a1.75 1.75 0 0 0 1.75-1.75V2a.75.75 0 0 1 1.5 0v.5a3.25 3.25 0 0 1-3.25 3.25h-9A3.25 3.25 0 0 1 4.25 2.5V2A.75.75 0 0 1 5 1.25Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.948 6.75h6.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v1.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08H8.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-1.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08ZM6.905 8.317c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.064.483-.066 1.131-.066 2.095v1c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h6c.964 0 1.612-.002 2.095-.066.461-.063.659-.17.789-.3.13-.13.237-.328.3-.79.064-.482.066-1.13.066-2.094v-1c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066H9c-.964 0-1.612.002-2.095.067Z" fill="currentColor" /><path d="M7.5 18.25a3.25 3.25 0 0 0-3.25 3.25v.5a.75.75 0 0 0 1.5 0v-.5c0-.966.784-1.75 1.75-1.75h9c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 0 1.5 0v-.5a3.25 3.25 0 0 0-3.25-3.25h-9Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 5.5h8a3 3 0 0 0 3-3 .5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5 3 3 0 0 0 3 3ZM5 11.5c0-1.886 0-2.828.586-3.414C6.172 7.5 7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586C19 8.672 19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586H9c-1.886 0-2.828 0-3.414-.586C5 15.328 5 14.386 5 12.5v-1ZM16 18.5H8a3 3 0 0 0-3 3 .5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5 3 3 0 0 0-3-3Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g opacity={0.5} fill="currentColor"><path d="M8 5.5h8a3 3 0 0 0 3-3 .5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5 3 3 0 0 0 3 3ZM16 18.5H8a3 3 0 0 0-3 3 .5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5 3 3 0 0 0-3-3Z" /></g><path d="M5 11.5c0-1.886 0-2.828.586-3.414C6.172 7.5 7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586C19 8.672 19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586H9c-1.886 0-2.828 0-3.414-.586C5 15.328 5 14.386 5 12.5v-1Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PostsCarouselVertical