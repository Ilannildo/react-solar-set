import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const LightbulbBolt = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307.123-.763.144-.812.631-1.412.151-.186.711-.688 1.832-1.692A7.481 7.481 0 0 0 19.5 9.5c0-.877-.15-1.718-.427-2.5M14.5 19.5c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75m0 0c0-.713 0-1.07-.038-1.307-.123-.763-.144-.812-.631-1.412-.151-.186-.712-.688-1.832-1.692A7.5 7.5 0 0 1 15.744 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.396 8.936a.75.75 0 0 0-1.22-.872l1.22.872ZM10.643 11.5l-.61-.436a.75.75 0 0 0 .61 1.186v-.75Zm3 0 .61.436a.75.75 0 0 0-.61-1.186v.75Zm-2.753 2.564a.75.75 0 1 0 1.22.872l-1.22-.872Zm1.285-6-2.143 3 1.221.872 2.143-3-1.22-.872Zm-1.532 4.186h3v-1.5h-3v1.5Zm2.39-1.186-2.143 3 1.22.872 2.143-3-1.22-.872Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4.5 9.5a7.5 7.5 0 1 1 12.501 5.59c-1.12 1.003-1.68 1.505-1.832 1.69-.487.601-.508.65-.63 1.413-.039.237-.039.593-.039 1.307 0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75 0-.713 0-1.07-.038-1.307-.123-.763-.144-.812-.631-1.412-.151-.186-.712-.688-1.832-1.692A7.482 7.482 0 0 1 4.5 9.5Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M14.5 19.5h-5" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M13.396 8.936a.75.75 0 0 0-1.22-.872l1.22.872ZM10.643 11.5l-.61-.436a.75.75 0 0 0 .61 1.186v-.75Zm3 0 .61.436a.75.75 0 0 0-.61-1.186v.75Zm-2.754 2.564a.75.75 0 1 0 1.221.872l-1.22-.872Zm1.286-6-2.143 3 1.22.872 2.144-3-1.22-.872Zm-1.532 4.186h3v-1.5h-3v1.5Zm2.39-1.186-2.143 3 1.22.872 2.143-3-1.22-.872Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307.123-.763.144-.812.631-1.412.151-.186.711-.688 1.832-1.692A7.5 7.5 0 1 0 7 15.09c1.12 1.004 1.68 1.505 1.832 1.692.487.6.508.649.63 1.412.039.237.039.593.039 1.307m5 0c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75" stroke="currentColor" strokeWidth={1.5} /><path d="M13.396 8.936a.75.75 0 1 0-1.22-.872l1.22.872ZM10.643 11.5l-.61-.436a.75.75 0 0 0 .61 1.186v-.75Zm3 0 .61.436a.75.75 0 0 0-.61-1.186v.75Zm-2.753 2.564a.75.75 0 1 0 1.22.872l-1.22-.872Zm1.285-6-2.142 3 1.22.872 2.143-3-1.22-.872Zm-1.532 4.186h3v-1.5h-3v1.5Zm2.39-1.186-2.143 3 1.22.872 2.143-3-1.22-.872Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a6.75 6.75 0 0 0-4.5 11.78l.003.004c.557.499.98.877 1.282 1.155.285.26.51.474.629.62l.012.015c.222.273.414.511.542.796.127.284.175.587.231.934l.003.02c.029.178.04.396.045.676h3.506c.005-.28.016-.498.045-.676l.003-.02c.056-.347.104-.65.231-.934.128-.285.32-.523.542-.796l.012-.015c.119-.146.344-.36.629-.62.302-.278.725-.656 1.282-1.155l.004-.004A6.75 6.75 0 0 0 12 2.75Zm1.744 17.5h-3.488c.004.104.009.195.016.277.02.225.055.307.079.348a.75.75 0 0 0 .274.274c.04.024.123.058.348.079.235.021.546.022 1.027.022.481 0 .792 0 1.027-.022.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.059-.123.079-.348.007-.082.012-.173.016-.277ZM3.75 9.5a8.25 8.25 0 1 1 13.752 6.148 169.1 169.1 0 0 0-1.274 1.146 16.373 16.373 0 0 0-.44.42 1.259 1.259 0 0 0-.036.039c-.26.321-.317.404-.35.479-.034.075-.058.172-.123.58-.026.161-.029.437-.029 1.188v.032c0 .44 0 .82-.028 1.13-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962-.028-.312-.028-.691-.028-1.13V19.5c0-.75-.003-1.027-.029-1.188-.065-.408-.09-.505-.123-.58-.033-.075-.09-.158-.35-.48l-.01-.01a16.46 16.46 0 0 0-.467-.448c-.294-.27-.71-.643-1.273-1.146A8.231 8.231 0 0 1 3.75 9.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.222 7.89a.75.75 0 0 1 .174 1.046L12.1 10.75h1.543a.75.75 0 0 1 .61 1.186l-2.143 3a.75.75 0 1 1-1.22-.872l1.295-1.814h-1.542a.75.75 0 0 1-.61-1.186l2.142-3a.75.75 0 0 1 1.046-.174Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.5 2C7.358 2 4 5.436 4 9.674c0 2.273.966 4.315 2.499 5.72.51.467.889.814 1.157 1.066a14.896 14.896 0 0 1 .4.39 1.02 1.02 0 0 1 .033.036c.237.3.288.376.318.446.03.07.053.16.112.54.024.15.026.406.026 1.105v.03c0 .409 0 .762.026 1.051.027.306.087.61.248.895.18.319.438.583.75.767.278.165.575.226.874.254.283.026.628.026 1.028.026h.058c.4 0 .745 0 1.028-.026.3-.028.595-.09.875-.254a2.07 2.07 0 0 0 .748-.767c.162-.285.222-.588.249-.895.026-.29.026-.642.025-1.051v-.03c0-.699.003-.955.026-1.105.06-.38.082-.47.113-.54.03-.07.081-.147.318-.446l.008-.01.025-.026a14.926 14.926 0 0 1 .4-.39c.268-.252.647-.599 1.157-1.067A7.736 7.736 0 0 0 19 9.674C19 5.436 15.642 2 11.5 2Zm1.585 17.674h-3.17c.003.097.007.182.014.258.019.21.05.286.071.324a.69.69 0 0 0 .25.255c.037.022.111.054.316.073.214.02.497.02.934.02.437 0 .72 0 .934-.02.205-.019.279-.05.316-.073a.69.69 0 0 0 .25-.255c.021-.038.052-.114.07-.324.008-.076.012-.16.015-.258ZM12.61 8.176c.307.224.378.66.159.974l-1.178 1.687h1.402a.68.68 0 0 1 .607.379.711.711 0 0 1-.052.724L11.6 14.731a.672.672 0 0 1-.951.162.708.708 0 0 1-.158-.973l1.178-1.687h-1.403a.68.68 0 0 1-.606-.379.711.711 0 0 1 .051-.725l1.948-2.79a.672.672 0 0 1 .951-.163Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M4 9.674C4 5.436 7.358 2 11.5 2 15.642 2 19 5.436 19 9.674a7.736 7.736 0 0 1-2.499 5.72c-.51.467-.889.814-1.157 1.066a14.926 14.926 0 0 0-.4.39l-.025.027-.008.01c-.237.298-.288.375-.318.445-.03.07-.053.16-.113.54-.023.15-.026.406-.026 1.105v.03c0 .409 0 .762-.025 1.051-.027.306-.087.61-.248.895a2.07 2.07 0 0 1-.75.767c-.278.165-.575.226-.874.254-.283.026-.628.026-1.028.026h-.058c-.4 0-.745 0-1.028-.026-.3-.028-.596-.09-.875-.254a2.07 2.07 0 0 1-.749-.767c-.16-.285-.22-.588-.248-.895-.026-.29-.026-.642-.026-1.051v-.03c0-.699-.002-.955-.026-1.105-.06-.38-.081-.47-.112-.54-.03-.07-.081-.147-.318-.446l-.008-.01a14.896 14.896 0 0 0-.425-.417c-.268-.25-.647-.598-1.157-1.066A7.736 7.736 0 0 1 4 9.674Z" fill="currentColor" /><path d="M13.085 19.675h-3.17c.003.097.007.181.014.258.018.21.05.285.071.323a.69.69 0 0 0 .25.256c.037.021.111.054.316.072.214.02.496.021.934.021.437 0 .72 0 .934-.02.204-.02.279-.052.316-.073a.69.69 0 0 0 .25-.256c.02-.038.052-.114.07-.323.007-.076.012-.161.015-.258ZM12.61 8.177c.307.224.378.66.159.973l-1.178 1.688h1.402a.68.68 0 0 1 .606.378.711.711 0 0 1-.051.725L11.6 14.73a.672.672 0 0 1-.951.163.708.708 0 0 1-.159-.973l1.178-1.688h-1.402a.68.68 0 0 1-.606-.379.711.711 0 0 1 .051-.724l1.948-2.79a.672.672 0 0 1 .951-.163Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default LightbulbBolt