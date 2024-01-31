import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const PlaybackSpeed = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="4 3" /><path d="M13.888 9.935C14.963 10.812 15.5 11.25 15.5 12s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66-.237.167-.506.339-.784.508-1.073.652-1.609.978-2.09.617-.48-.36-.524-1.116-.612-2.628-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628.481-.361 1.018-.035 2.09.617.278.169.547.341.784.508.27.19.565.418.862.66Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M12 22C6.477 22 2 17.523 2 12S6.977 2 12.5 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="4 3" /><path d="M13.888 9.935C14.963 10.812 15.5 11.25 15.5 12s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66-.237.167-.506.339-.784.508-1.073.652-1.609.978-2.09.617-.48-.36-.524-1.116-.612-2.628-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628.481-.361 1.018-.035 2.09.617.278.169.547.341.784.508.27.19.565.418.862.66Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="4 3" /><path d="M13.888 9.935C14.963 10.812 15.5 11.25 15.5 12s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66-.237.167-.506.339-.784.508-1.073.652-1.609.978-2.09.617-.48-.36-.524-1.116-.612-2.628-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628.481-.361 1.018-.035 2.09.617.278.169.547.341.784.508.27.19.565.418.862.66Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m12.573 8.09.059.036c.287.175.57.356.825.535.29.204.6.444.905.693l.046.037c.498.406.945.771 1.258 1.135.354.413.584.877.584 1.474s-.23 1.06-.584 1.474c-.313.364-.76.729-1.258 1.135l-.046.037c-.305.25-.615.49-.905.693-.255.179-.538.36-.825.535l-.06.036c-.484.295-.942.574-1.343.718-.223.08-.478.138-.754.118a1.451 1.451 0 0 1-.773-.296c-.459-.344-.643-.843-.74-1.34-.091-.472-.126-1.081-.167-1.793l-.003-.052c-.026-.436-.042-.87-.042-1.265a22.399 22.399 0 0 1 .045-1.317c.04-.712.076-1.32.168-1.793.096-.497.28-.996.74-1.34.225-.17.483-.274.772-.296.276-.02.531.038.754.118.4.144.859.423 1.344.718Zm-1.973.661c-.024.019-.1.086-.165.424-.07.362-.1.868-.146 1.646-.024.419-.039.823-.039 1.179 0 .356.015.76.04 1.179.044.777.075 1.284.145 1.646.066.339.14.405.165.424a.601.601 0 0 0 .122-.033c.24-.086.565-.28 1.13-.624.27-.163.524-.327.743-.48.25-.177.53-.393.819-.628.558-.456.899-.737 1.114-.988.183-.213.222-.343.222-.496 0-.153-.04-.283-.222-.496-.215-.251-.556-.532-1.114-.988a14.642 14.642 0 0 0-.819-.627c-.22-.155-.474-.318-.743-.481-.566-.344-.89-.538-1.13-.624a.601.601 0 0 0-.122-.033Z" fill="currentColor" /><path d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75-.822 0-1.622.092-2.392.267A.75.75 0 1 0 9.94 2.98a9.25 9.25 0 1 1 0 18.04.75.75 0 1 0-.332 1.463c.77.175 1.57.267 2.392.267 5.937 0 10.75-4.813 10.75-10.75ZM4.166 16.921a.75.75 0 0 0-1.27.8 10.804 10.804 0 0 0 3.383 3.382.75.75 0 0 0 .8-1.27 9.302 9.302 0 0 1-2.913-2.912ZM2.98 9.94a.75.75 0 1 0-1.463-.332c-.175.77-.267 1.57-.267 2.392 0 .822.092 1.622.267 2.393a.75.75 0 0 0 1.463-.333A9.283 9.283 0 0 1 2.75 12c0-.709.08-1.398.23-2.06ZM7.079 4.166a.75.75 0 0 0-.8-1.27A10.803 10.803 0 0 0 2.897 6.28a.75.75 0 1 0 1.27.8 9.303 9.303 0 0 1 2.912-2.913Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.608 1.517c.77-.175 1.57-.267 2.392-.267 5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.622-.092-2.392-.267a.75.75 0 1 1 .332-1.463 9.25 9.25 0 1 0 0-18.04.75.75 0 1 1-.332-1.463ZM7.314 3.132a.75.75 0 0 1-.235 1.034A9.303 9.303 0 0 0 4.166 7.08a.75.75 0 0 1-1.27-.8A10.803 10.803 0 0 1 6.28 2.897a.75.75 0 0 1 1.035.235ZM2.98 9.94a.75.75 0 1 0-1.463-.332c-.175.77-.267 1.57-.267 2.392 0 .822.092 1.622.267 2.393a.75.75 0 0 0 1.463-.333A9.283 9.283 0 0 1 2.75 12c0-.709.08-1.398.23-2.06ZM3.132 16.686a.75.75 0 0 1 1.034.235 9.302 9.302 0 0 0 2.913 2.913.75.75 0 0 1-.8 1.27 10.804 10.804 0 0 1-3.382-3.383.75.75 0 0 1 .235-1.035Z" fill="currentColor" /><path d="M15.5 12c0-.75-.537-1.188-1.612-2.065-.297-.242-.591-.47-.862-.66a14.484 14.484 0 0 0-.784-.508c-1.073-.652-1.609-.978-2.09-.617-.48.36-.524 1.116-.612 2.628-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.132 2.267.612 2.628.481.361 1.018.035 2.09-.617.278-.169.547-.341.784-.508.27-.19.565-.418.862-.66C14.963 13.188 15.5 12.75 15.5 12Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M9.607 1.517c.77-.175 1.571-.267 2.393-.267 5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.623-.092-2.393-.267a.75.75 0 1 1 .333-1.463 9.25 9.25 0 1 0 0-18.04.75.75 0 1 1-.333-1.463Z" fill="currentColor" /><path d="M7.313 3.132a.75.75 0 0 1-.235 1.034 9.302 9.302 0 0 0-2.912 2.912.75.75 0 0 1-1.27-.799A10.803 10.803 0 0 1 6.28 2.897a.75.75 0 0 1 1.034.235ZM3.132 16.686a.75.75 0 0 1 1.034.235 9.303 9.303 0 0 0 2.912 2.913.75.75 0 1 1-.799 1.269 10.802 10.802 0 0 1-3.382-3.383.75.75 0 0 1 .235-1.034Z" fill="currentColor" /><path opacity={0.5} d="M2.98 9.94a.75.75 0 1 0-1.463-.333c-.175.77-.267 1.571-.267 2.393 0 .821.092 1.622.267 2.392a.75.75 0 0 0 1.463-.332A9.283 9.283 0 0 1 2.75 12c0-.709.08-1.398.23-2.06Z" fill="currentColor" /><path d="M15.5 12c0-.75-.537-1.188-1.612-2.065-.297-.242-.591-.47-.862-.66a14.484 14.484 0 0 0-.784-.508c-1.073-.652-1.609-.978-2.09-.617-.48.36-.524 1.116-.612 2.628-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.132 2.267.612 2.628.481.361 1.018.035 2.09-.617.278-.169.547-.341.784-.508.27-.19.565-.418.862-.66C14.963 13.188 15.5 12.75 15.5 12Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PlaybackSpeed