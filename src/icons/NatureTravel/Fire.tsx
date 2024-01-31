import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Fire = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 13.111C3 20.222 8.289 22 10.933 22c1.354 0 3.315-.357 5.067-1.39M18.72 18c.782-1.246 1.28-2.848 1.28-4.889 0-4.527-2.835-7.76-5.398-9.613C13.444 2.66 12 3.58 12 5.01v.323c0 1.442-.606 4.074-2.29 5.169-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971A7.467 7.467 0 0 0 3.97 9.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555 0-1.102-.59-1.845-1.16-2.274-.398-.299-.957-.03-1.094.449-.178.624-.823 1.016-1.152.456-.3-.512-.3-1.28-.3-1.743 0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 13.111C20 20.222 13.956 22 10.933 22 8.29 22 3 20.222 3 13.111c0-2.782 1.461-4.65 2.86-5.716.778-.594 1.77-.003 1.87.971l.086.838c.105 1.02 1.033 1.857 1.893 1.298C11.394 9.407 12 6.775 12 5.333V5.01c0-1.43 1.444-2.35 2.602-1.512C17.165 5.35 20 8.584 20 13.11Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555 0-1.102-.59-1.845-1.16-2.274-.398-.299-.957-.03-1.094.449-.178.624-.823 1.016-1.152.456-.3-.512-.3-1.28-.3-1.743 0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 13.111C20 20.222 13.956 22 10.933 22 8.29 22 3 20.222 3 13.111c0-2.782 1.461-4.65 2.86-5.716.778-.594 1.77-.003 1.87.971l.086.838c.105 1.02 1.033 1.857 1.893 1.298C11.394 9.407 12 6.775 12 5.333V5.01c0-1.43 1.444-2.35 2.602-1.512C17.165 5.35 20 8.584 20 13.11Z" stroke="currentColor" strokeWidth={1.5} /><path d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555 0-1.102-.59-1.845-1.16-2.274-.398-.299-.957-.03-1.094.449-.178.624-.823 1.016-1.152.456-.3-.512-.3-1.28-.3-1.743 0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.48 2.76c.752-.451 1.728-.473 2.562.13 2.66 1.924 5.708 5.355 5.708 10.221 0 3.806-1.635 6.254-3.718 7.724-1.279.903-2.709 1.426-3.999 1.69a4.128 4.128 0 0 1-1.3.225c-.102 0-.212-.004-.327-.013a9.018 9.018 0 0 1-.473.013c-1.46 0-3.62-.484-5.429-1.944-1.841-1.486-3.254-3.929-3.254-7.695 0-3.077 1.625-5.146 3.155-6.313a1.813 1.813 0 0 1 2.004-.164c.584.319.993.934 1.067 1.656l.086.837c.033.322.198.59.37.72a.37.37 0 0 0 .19.083c.036.003.094-.002.179-.057.653-.425 1.149-1.188 1.482-2.086.33-.89.467-1.82.467-2.454V5.01c0-.973.494-1.807 1.23-2.25Zm.151 18.317a9.496 9.496 0 0 1-1.204.157c-.484-.05-1.093-.214-1.603-.564-.585-.4-1.074-1.064-1.074-2.226 0-1.402.868-2.467 1.79-3.149a.16.16 0 0 1 .004.038v.011c0 .228 0 .573.043.931.043.357.134.795.36 1.18.158.269.4.496.729.593.323.095.63.035.87-.078.457-.215.783-.665.92-1.14.412.336.784.86.784 1.615 0 1.203-.447 1.87-.938 2.254-.214.168-.45.291-.68.378Zm2.887-1.055c.22-.126.438-.263.65-.412 1.695-1.197 3.082-3.194 3.082-6.499 0-4.187-2.622-7.223-5.087-9.006-.325-.234-.65-.215-.91-.059-.276.166-.503.507-.503.964v.323c0 .809-.167 1.916-.56 2.976-.391 1.052-1.04 2.151-2.072 2.822-.734.477-1.526.34-2.091-.088-.534-.403-.886-1.064-.957-1.763l-.086-.838c-.026-.252-.162-.42-.294-.491-.112-.061-.234-.068-.375.04-1.267.967-2.565 2.634-2.565 5.12 0 3.345 1.232 5.346 2.696 6.527.397.321.817.585 1.241.8-.273-.55-.437-1.21-.437-1.993 0-2.104 1.32-3.573 2.448-4.393a1.428 1.428 0 0 1 1.6-.076c.454.274.746.783.746 1.357 0 .235 0 .5.032.764.005.043.011.084.018.124.16-.369.454-.654.803-.806.418-.18.95-.177 1.394.157.7.526 1.459 1.47 1.459 2.873 0 .593-.084 1.118-.232 1.578Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69 0-5.291-3.873-8.815-6.659-10.434-.617-.36-1.341.113-1.341.828v1.828c0 1.442-.606 4.074-2.29 5.169-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11c0 7.111 5.289 8.89 7.933 8.89.154 0 .316-.006.484-.015C10.111 21.874 8 21.064 8 18.444c0-2.05 1.495-3.435 2.631-4.11.306-.18.663.055.663.41v.59c0 .45.175 1.155.59 1.637.47.546 1.159-.026 1.214-.744.018-.226.246-.37.442-.256.641.375 1.46 1.175 1.46 2.473 0 2.048-1.129 2.99-2.168 3.357Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69 0-5.291-3.873-8.815-6.659-10.434-.617-.36-1.341.113-1.341.828v1.828c0 1.442-.606 4.074-2.29 5.169-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11c0 7.111 5.289 8.89 7.933 8.89.154 0 .316-.006.484-.015.446-.056 0 .099 1.415-.185Z" fill="currentColor" /><path d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473-.196-.115-.424.03-.441.256-.056.718-.746 1.29-1.215.744-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Fire