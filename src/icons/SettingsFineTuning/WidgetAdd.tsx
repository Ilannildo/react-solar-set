import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const WidgetAdd = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3M2.55 15.5c.065-.65.21-1.088.536-1.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586-.31-.31-.456-.718-.524-1.313" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.5 6.5c0-1.886 0-2.828.586-3.414C3.672 2.5 4.614 2.5 6.5 2.5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C2.5 9.328 2.5 8.386 2.5 6.5ZM13.5 17.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.5 6.5c0-1.886 0-2.828.586-3.414C3.672 2.5 4.614 2.5 6.5 2.5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C2.5 9.328 2.5 8.386 2.5 6.5ZM13.5 17.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M2.5 17.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C2.5 20.328 2.5 19.386 2.5 17.5Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.5 6.5c0-1.886 0-2.828.586-3.414C3.672 2.5 4.614 2.5 6.5 2.5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C2.5 9.328 2.5 8.386 2.5 6.5ZM13.5 17.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414ZM2.5 17.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586 1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414 0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586-1.886 0-2.828 0-3.414-.586C2.5 20.328 2.5 19.386 2.5 17.5Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.448 1.75c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.104c0 .898 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.344.08-2.242v-.104c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08h-.104ZM3.616 3.616c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095 0 .964-.002 1.612-.067 2.095-.062.461-.169.659-.3.789-.13.13-.327.237-.788.3-.483.064-1.131.066-2.095.066-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3-.13-.13-.237-.327-.3-.788-.064-.483-.066-1.131-.066-2.095 0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789Z" fill="currentColor" /><path d="M18.25 3.5a.75.75 0 0 0-1.5 0v2.25H14.5a.75.75 0 0 0 0 1.5h2.25V9.5a.75.75 0 0 0 1.5 0V7.25h2.25a.75.75 0 0 0 0-1.5h-2.25V3.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.448 12.75h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.726-1.65.455-.456 1.022-.642 1.65-.726.594-.08 1.343-.08 2.242-.08Zm-2.043 1.566c-.461.063-.659.17-.789.3-.13.13-.237.328-.3.79-.064.482-.066 1.13-.066 2.094s.002 1.612.066 2.095c.063.461.17.659.3.789.13.13.328.237.79.3.482.064 1.13.066 2.094.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3.13-.13.237-.327.3-.788.064-.483.066-1.131.066-2.095 0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066-.964 0-1.612.002-2.095.066ZM6.448 12.75c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.726-.456.455-.642 1.022-.726 1.65-.08.594-.08 1.343-.08 2.242v.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242v-.104c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08h-.104Zm-2.832 1.866c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3.13.13.237.328.3.79.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789-.13.13-.327.237-.788.3-.483.064-1.131.066-2.095.066-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3-.13-.13-.237-.327-.3-.788-.064-.483-.066-1.131-.066-2.095 0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.5 2.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25V9.5a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1 0-1.5h2.25V3.5a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path d="M2 6.5c0-2.121 0-3.182.659-3.841C3.318 2 4.379 2 6.5 2c2.121 0 3.182 0 3.841.659C11 3.318 11 4.379 11 6.5c0 2.121 0 3.182-.659 3.841C9.682 11 8.621 11 6.5 11c-2.121 0-3.182 0-3.841-.659C2 9.682 2 8.621 2 6.5ZM13 17.5c0-2.121 0-3.182.659-3.841C14.318 13 15.379 13 17.5 13c2.121 0 3.182 0 3.841.659.659.659.659 1.72.659 3.841 0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659-2.121 0-3.182 0-3.841-.659C13 20.682 13 19.621 13 17.5ZM2 17.5c0-2.121 0-3.182.659-3.841C3.318 13 4.379 13 6.5 13c2.121 0 3.182 0 3.841.659.659.659.659 1.72.659 3.841 0 2.121 0 3.182-.659 3.841C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.659C2 20.682 2 19.621 2 17.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.5 2.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25V9.5a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1 0-1.5h2.25V3.5a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path d="M2 6.5c0-2.121 0-3.182.659-3.841C3.318 2 4.379 2 6.5 2c2.121 0 3.182 0 3.841.659C11 3.318 11 4.379 11 6.5c0 2.121 0 3.182-.659 3.841C9.682 11 8.621 11 6.5 11c-2.121 0-3.182 0-3.841-.659C2 9.682 2 8.621 2 6.5ZM13 17.5c0-2.121 0-3.182.659-3.841C14.318 13 15.379 13 17.5 13c2.121 0 3.182 0 3.841.659.659.659.659 1.72.659 3.841 0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659-2.121 0-3.182 0-3.841-.659C13 20.682 13 19.621 13 17.5Z" fill="currentColor" /><path opacity={0.5} d="M2 17.5c0-2.121 0-3.182.659-3.841C3.318 13 4.379 13 6.5 13c2.121 0 3.182 0 3.841.659.659.659.659 1.72.659 3.841 0 2.121 0 3.182-.659 3.841C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.659C2 20.682 2 19.621 2 17.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default WidgetAdd