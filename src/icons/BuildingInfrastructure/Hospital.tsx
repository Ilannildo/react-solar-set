import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Hospital = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 22H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 22V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v16" stroke="currentColor" strokeWidth={1.5} /><path d="M12 22v-3M10 12h4M5.5 11H7M5.5 14H7M17 11h1.5M17 14h1.5M5.5 8H7M17 8h1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 9V5M14 7h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M20.25 8.5a.75.75 0 0 0 1.5 0h-1.5Zm-.139-3.163-.416.624.416-.624Zm.552.552-.624.417.624-.417ZM21.75 12.5a.75.75 0 0 0-1.5 0h1.5ZM17.5 5.75c.718 0 1.2 0 1.567.038.355.036.519.1.628.173l.833-1.248c-.396-.264-.835-.369-1.309-.417-.461-.047-1.032-.046-1.719-.046v1.5Zm4.25 2.75c0-.687 0-1.258-.046-1.719-.048-.473-.153-.913-.418-1.309l-1.247.834c.073.108.137.272.173.627.037.367.038.85.038 1.567h1.5Zm-2.055-2.54c.136.092.253.21.344.346l1.247-.834c-.2-.3-.458-.558-.758-.759l-.833 1.248Zm.555 6.54V22h1.5v-9.5h-1.5ZM3.889 5.337l.417.624-.417-.624Zm-.552.552.624.417-.624-.417ZM3.75 17a.75.75 0 0 0-1.5 0h1.5Zm-1.5-4a.75.75 0 0 0 1.5 0h-1.5ZM6.5 4.25c-.687 0-1.258 0-1.719.046-.473.048-.913.153-1.309.417l.834 1.248c.108-.073.272-.137.627-.173.367-.037.85-.038 1.567-.038v-1.5ZM3.75 8.5c0-.718 0-1.2.038-1.567.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.836-.417 1.309-.047.461-.046 1.032-.046 1.719h1.5Zm-.278-3.787c-.3.201-.558.459-.759.76l1.248.833a1.25 1.25 0 0 1 .345-.345l-.834-1.248ZM2.25 17v5h1.5v-5h-1.5Zm0-8.5V13h1.5V8.5h-1.5Z" fill="currentColor" /><path d="M10 15h.5m3.5 0h-1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 22H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 22V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v16" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M21 22V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5" stroke="currentColor" strokeWidth={1.5} /><path d="M12 22v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M10 12h4M5.5 11H7M5.5 14H7M17 11h1.5M17 14h1.5M5.5 8H7M17 8h1.5M10 15h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 9V5M14 7h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 22H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 22V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v16M21 22V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5" stroke="currentColor" strokeWidth={1.5} /><path d="M12 22v-3M10 12h4M5.5 11H7M5.5 14H7M17 11h1.5M17 14h1.5M5.5 8H7M17 8h1.5M10 15h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 9V5M14 7h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.948 1.25h2.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.023.17.04.351.05.545.59 0 1.088.004 1.499.046.473.048.913.153 1.309.417.3.201.558.459.759.76.264.395.369.835.417 1.308.046.452.046 1.011.046 1.68V21.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25V8.462c0-.67 0-1.229.046-1.681.048-.473.153-.913.417-1.309.201-.3.459-.558.76-.759.395-.264.835-.369 1.308-.417.41-.042.909-.046 1.498-.046.012-.194.028-.375.05-.544.085-.628.271-1.195.726-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08ZM6.25 5.75c-.583 0-.994.005-1.317.038-.355.036-.519.1-.627.173a1.25 1.25 0 0 0-.345.345c-.073.108-.137.272-.173.627-.037.367-.038.85-.038 1.567v12.75h2.5v-6.5H5.5a.75.75 0 0 1 0-1.5h.75v-1.5H5.5a.75.75 0 0 1 0-1.5h.75v-1.5H5.5a.75.75 0 1 1 0-1.5h.75v-1.5Zm1.5 15.5h3.5V19a.75.75 0 0 1 1.5 0v2.25h3.5V6c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C7.753 4.388 7.75 5.036 7.75 6v15.25Zm10-12.5h.75a.75.75 0 0 0 0-1.5h-.75v-1.5c.583 0 .994.005 1.317.038.355.036.519.1.628.173.136.09.253.208.344.345.073.108.137.272.173.627.037.367.038.85.038 1.567v12.75h-2.5v-6.5h.75a.75.75 0 0 0 0-1.5h-.75v-1.5h.75a.75.75 0 0 0 0-1.5h-.75v-1.5ZM12 4.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V9a.75.75 0 0 1-1.5 0V7.75H10a.75.75 0 1 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75ZM9.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M21.5 8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.441-.295-1.034-.332-2.115-.336.004.291.004.596.004.91V7.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5H17V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v15.25H5.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.91c0-.313 0-.618.004-.91-1.081.005-1.674.042-2.115.337a2 2 0 0 0-.552.552C2.5 6.393 2.5 7.096 2.5 8.5v12.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5V8.5ZM12 4.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V9a.75.75 0 0 1-1.5 0V7.75H10a.75.75 0 0 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75ZM9.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM12 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.75 2h2c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v15.25h5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h5V6c0-1.886 0-2.828.586-3.414C7.922 2 8.864 2 10.75 2Zm1 2.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5H12.5V9A.75.75 0 0 1 11 9V7.75H9.75a.75.75 0 0 1 0-1.5H11V5a.75.75 0 0 1 .75-.75ZM9 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 12Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 15Zm2.75 3.25a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path opacity={0.5} d="M20.913 5.889c.337.504.337 1.206.337 2.611v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 1 1 0-1.5h.5V8.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552c.441-.295 2.537-.332 3.618-.336-.004.291-.004.595-.004.91V7.25H4.25a.75.75 0 1 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v6.5h10v-6.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 0 0 0-1.5h-2.497V5.91c0-.314 0-.618-.004-.91 1.081.005 3.17.042 3.612.337a2 2 0 0 1 .552.552Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Hospital