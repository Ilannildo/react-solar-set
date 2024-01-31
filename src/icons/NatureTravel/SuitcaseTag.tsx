import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SuitcaseTag = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6" stroke="currentColor" strokeWidth={1.5} /><path d="M10 15H6c-.471 0-.707 0-.854.146C5 15.293 5 15.53 5 16v1c0 .471 0 .707.146.854C5.293 18 5.53 18 6 18h4c.471 0 .707 0 .854-.146C11 17.707 11 17.47 11 17v-1c0-.471 0-.707-.146-.854C10.707 15 10.47 15 10 15Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /><path d="M6 6.5V15m0 6.5v-3M18 6.5V10m0 11.5V14M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6" stroke="currentColor" strokeWidth={1.5} /><path d="M10 15H6c-.471 0-.707 0-.854.146C5 15.293 5 15.53 5 16v1c0 .471 0 .707.146.854C5.293 18 5.53 18 6 18h4c.471 0 .707 0 .854-.146C11 17.707 11 17.47 11 17v-1c0-.471 0-.707-.146-.854C10.707 15 10.47 15 10 15Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /><path opacity={0.5} d="M6 6.5V15m0 6.5v-3M18 6.5v15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14ZM16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6" stroke="currentColor" strokeWidth={1.5} /><path d="M10 15H6c-.471 0-.707 0-.854.146C5 15.293 5 15.53 5 16v1c0 .471 0 .707.146.854C5.293 18 5.53 18 6 18h4c.471 0 .707 0 .854-.146C11 17.707 11 17.47 11 17v-1c0-.471 0-.707-.146-.854C10.707 15 10.47 15 10 15Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /><path d="M6 6.5V15m0 6.5v-3M18 6.5v15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.06.44.075.964.079 1.57.648.021 1.226.06 1.74.128 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238.514-.069 1.092-.107 1.74-.128.004-.606.02-1.13.079-1.57.084-.627.27-1.194.725-1.65.456-.455 1.023-.64 1.65-.725.595-.08 1.345-.08 2.243-.08ZM8.752 5.252c.378-.002.775-.002 1.192-.002h4.112c.417 0 .814 0 1.192.002-.004-.57-.018-1-.064-1.347-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.046.346-.06.776-.064 1.347ZM5.25 6.966c-.73.147-1.194.382-1.548.736-.423.423-.677 1.003-.812 2.009-.138 1.027-.14 2.382-.14 4.289 0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.354.354.817.59 1.548.736v-2.326a1.195 1.195 0 0 1-.634-.324 1.239 1.239 0 0 1-.341-.735c-.025-.188-.025-.41-.025-.615v-1.068c0-.206 0-.427.025-.615.03-.219.105-.5.341-.735.2-.2.434-.285.634-.324V6.966Zm1.5-.168v7.452h3.284c.206 0 .427 0 .615.025.219.03.5.105.735.341.236.236.311.516.341.735.025.188.025.41.025.615v1.068c0 .206 0 .427-.025.615-.03.219-.105.5-.341.735a1.239 1.239 0 0 1-.735.341 4.845 4.845 0 0 1-.615.025H6.75v2.452c.867.047 1.925.048 3.25.048h4c1.325 0 2.383 0 3.25-.048V6.798c-.867-.047-1.925-.048-3.25-.048h-4c-1.325 0-2.383 0-3.25.048Zm12 .168v14.068c.73-.147 1.194-.382 1.548-.736.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289 0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.354-.354-.817-.59-1.548-.736ZM5.751 15.75 5.75 16v1l.001.249.249.001h4l.249-.001.001-.249v-1l-.001-.249L10 15.75H6l-.249.001Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.078a25.86 25.86 0 0 0-.5.02v8.204h3.284c.206 0 .427 0 .615.025.219.03.5.105.735.341.236.236.311.516.341.735.025.188.025.41.025.615v1.069c0 .205 0 .426-.025.614-.03.219-.105.5-.341.735a1.239 1.239 0 0 1-.735.341 4.844 4.844 0 0 1-.614.025H6.75v3.203C7.645 22 8.712 22 10 22h4c1.288 0 2.355 0 3.25-.047V6.047a25.853 25.853 0 0 0-.5-.021v-.078c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08Zm3.198 4.752V6c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C8.753 4.388 8.75 5.036 8.75 6v.002C9.142 6 9.558 6 10 6h4c.442 0 .858 0 1.25.002Z" fill="currentColor" /><path d="M20.828 20.828c-.518.52-1.177.808-2.078.97V6.202c.9.16 1.56.45 2.078.969C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828ZM3.172 7.172c.518-.52 1.177-.808 2.078-.97v8.09c-.2.039-.433.123-.634.324a1.239 1.239 0 0 0-.341.735c-.025.188-.025.41-.025.615v1.069c0 .205 0 .426.025.614.03.219.105.5.341.735.2.2.434.285.634.324v3.09c-.9-.162-1.56-.45-2.078-.97C2 19.657 2 17.771 2 14c0-3.771 0-5.657 1.172-6.828ZM5.751 15.751 5.75 16v1l.001.249.249.001h4l.249-.001.001-.249v-1l-.001-.249L10 15.75H6l-.249.001Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14Z" fill="currentColor" /><path d="M11.948 1.25c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243V6h1.5c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3.483-.064 1.131-.066 2.095-.066.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095h1.5v-.052c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08h-.104ZM10 15H6c-.471 0-.707 0-.854.146C5 15.293 5 15.53 5 16v1c0 .471 0 .707.146.854C5.293 18 5.53 18 6 18h4c.471 0 .707 0 .854-.146C11 17.707 11 17.47 11 17v-1c0-.471 0-.707-.146-.854C10.707 15 10.47 15 10 15Z" fill="currentColor" /><path d="M5.25 21.797c.439.079.935.127 1.5.156V18H6c-.374 0-.6 0-.75-.073v3.87ZM5.25 15.073v-8.87c.439-.079.935-.127 1.5-.156V15H6c-.374 0-.6 0-.75.073ZM17.25 21.953a12.25 12.25 0 0 0 1.5-.156V6.203a12.232 12.232 0 0 0-1.5-.156v15.906Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SuitcaseTag