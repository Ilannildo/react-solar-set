import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ShieldStar = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.861 8.363C11.368 7.454 11.621 7 12 7s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473.112.085.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71.117.377-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472-.043.138-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803-.306.233-.767.02-1.688-.403l-.239-.11c-.261-.12-.392-.181-.531-.181s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404-.306-.232-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584-.043-.138-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.176-.889-1.553.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18.112-.085.184-.214.328-.473l.131-.235Z" stroke="currentColor" strokeWidth={1.5} /><path d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473.579-.252 1.231-.58 1.899-.994" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" stroke="currentColor" strokeWidth={1.5} /><path d="M10.861 8.363C11.368 7.454 11.621 7 12 7s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473.112.085.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71.117.377-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472-.043.138-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803-.306.233-.767.02-1.688-.403l-.239-.11c-.261-.12-.392-.181-.531-.181s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404-.306-.232-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584-.043-.138-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.176-.889-1.553.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18.112-.085.184-.214.328-.473l.131-.235Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" stroke="currentColor" strokeWidth={1.5} /><path d="M10.861 8.363C11.368 7.454 11.621 7 12 7s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473.112.085.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71.117.377-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472-.043.138-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803-.306.233-.767.02-1.688-.403l-.239-.11c-.261-.12-.392-.181-.531-.181s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404-.306-.232-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584-.043-.138-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.176-.889-1.553.117-.376.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18.112-.085.184-.214.328-.473l.131-.235Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75c-.658 0-1.305.212-2.92.764l-.572.196c-1.513.518-2.616.896-3.39 1.21a7.137 7.137 0 0 0-.864.404 1.648 1.648 0 0 0-.208.139.386.386 0 0 0-.055.05.409.409 0 0 0-.032.074c-.02.056-.042.136-.063.248a7.438 7.438 0 0 0-.1.958c-.046.841-.046 2.015-.046 3.624v1.574c0 5.175 3.87 7.723 6.449 8.849.371.162.586.254.825.315.228.059.506.095.976.095s.748-.036.976-.095c.24-.06.454-.153.825-.315 2.58-1.127 6.449-3.674 6.449-8.849v-1.574c0-1.609 0-2.783-.046-3.624a7.423 7.423 0 0 0-.1-.958 1.738 1.738 0 0 0-.063-.248.408.408 0 0 0-.032-.074.385.385 0 0 0-.055-.05 1.64 1.64 0 0 0-.208-.14 7.135 7.135 0 0 0-.864-.402c-.774-.315-1.877-.693-3.39-1.21l-.573-.197C13.305 2.962 12.658 2.75 12 2.75Zm-3.277-.699c1.444-.494 2.34-.801 3.277-.801.938 0 1.833.307 3.277.801l.128.044.599.205c1.481.507 2.625.899 3.443 1.231.412.167.767.33 1.052.495.275.16.55.359.737.626.185.263.281.587.341.9.063.324.1.713.125 1.16.048.886.048 2.102.048 3.678v1.601c0 6.101-4.608 9.026-7.348 10.224l-.027.011c-.34.149-.66.288-1.027.382-.387.1-.799.142-1.348.142-.55 0-.96-.042-1.348-.142-.367-.094-.687-.233-1.027-.382l-.027-.011C6.858 21.017 2.25 18.092 2.25 11.99V10.39c0-1.576 0-2.792.048-3.679.025-.446.062-.835.125-1.16.06-.312.156-.636.34-.9.188-.266.463-.465.738-.625.285-.165.64-.328 1.052-.495.818-.332 1.962-.724 3.443-1.23l.599-.206.128-.044ZM12 7.901a13.05 13.05 0 0 0-.484.828l-.13.235-.03.054c-.11.198-.257.466-.5.65-.249.189-.548.255-.762.302l-.058.013-.255.057c-.465.106-.755.173-.95.241.12.181.323.42.651.803l.174.203.04.047c.147.17.344.398.434.69.09.29.06.589.037.817a7.679 7.679 0 0 0-.006.062l-.027.271c-.047.484-.075.797-.075 1.018.193-.068.456-.188.858-.373l.238-.11.055-.025c.198-.093.478-.224.79-.224.312 0 .592.131.79.224l.055.026.238.11c.402.184.665.304.858.372 0-.221-.028-.534-.075-1.018l-.027-.27a7.679 7.679 0 0 0-.006-.063c-.023-.228-.053-.527.037-.817.09-.292.287-.52.435-.69a5.02 5.02 0 0 0 .04-.047l.173-.203c.328-.383.53-.622.65-.803-.194-.068-.484-.135-.95-.24l-.254-.058-.058-.013c-.214-.047-.513-.113-.761-.302-.244-.184-.391-.452-.5-.65l-.03-.054-.131-.235A13.05 13.05 0 0 0 12 7.9Zm2.153 6.35h.002-.002Zm-4.308 0h.002-.002Zm1.038-7.366c.216-.282.568-.635 1.117-.635s.901.353 1.117.635c.207.271.42.653.651 1.067l.026.046.13.235a12.302 12.302 0 0 0 .133.23l.065.017.173.04.255.057.052.012c.447.101.864.195 1.179.32.34.134.753.376.912.887.157.503-.036.937-.23 1.246-.183.29-.465.62-.771.978l-.034.04-.174.202-.118.14a2.188 2.188 0 0 0-.057.071 5.1 5.1 0 0 0 .024.286l.03.321c.047.48.09.917.074 1.261-.016.358-.1.838-.526 1.16-.437.333-.926.268-1.273.168-.325-.093-.715-.272-1.133-.465l-.049-.022-.238-.11a10.443 10.443 0 0 0-.218-.098 10.443 10.443 0 0 0-.218.098l-.238.11-.049.022c-.418.193-.808.372-1.133.465-.347.1-.836.165-1.273-.168-.426-.322-.51-.802-.526-1.16-.016-.344.027-.781.073-1.26l.005-.052.026-.27c.015-.152.022-.23.024-.286a12.532 12.532 0 0 0-.175-.211l-.174-.203a19.548 19.548 0 0 1-.034-.039c-.306-.358-.588-.688-.77-.978-.195-.309-.388-.743-.231-1.246.159-.51.571-.753.912-.887.315-.125.732-.219 1.18-.32l.051-.012.255-.057a11.463 11.463 0 0 0 .239-.057l.04-.069.091-.16.131-.236.026-.046c.23-.414.444-.796.651-1.067Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2c-.811 0-1.595.268-3.162.805L8.265 3C5.258 4.03 3.755 4.545 3.378 5.082Zm7.483 3.281-.13.235c-.145.259-.217.388-.329.473-.112.085-.252.117-.532.18l-.254.058c-.984.222-1.476.334-1.593.71-.117.377.218.769.889 1.553l.174.203c.19.223.285.334.328.472.043.138.029.287 0 .584l-.026.27c-.102 1.047-.152 1.57.154 1.803.306.233.767.02 1.688-.403l.239-.11c.261-.12.392-.181.531-.181s.27.06.531.18l.239.11c.92.425 1.382.637 1.688.404.306-.232.256-.756.154-1.802l-.026-.271c-.029-.297-.043-.446 0-.584.043-.138.138-.25.328-.472l.174-.203c.67-.784 1.006-1.176.889-1.553-.117-.376-.609-.488-1.593-.71l-.254-.058c-.28-.063-.42-.095-.532-.18-.112-.085-.184-.214-.328-.473l-.131-.235C12.632 7.454 12.379 7 12 7s-.632.454-1.139 1.363Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2c-.811 0-1.595.268-3.162.805L8.265 3C5.258 4.03 3.755 4.545 3.378 5.082Z" fill="currentColor" /><path d="m10.861 8.363-.13.235c-.145.259-.217.388-.329.473-.112.085-.252.117-.532.18l-.254.058c-.984.222-1.476.334-1.593.71-.117.377.218.769.889 1.553l.174.203c.19.223.285.334.328.472.043.138.029.287 0 .584l-.026.27c-.102 1.047-.152 1.57.154 1.803.306.233.767.02 1.688-.403l.239-.11c.261-.12.392-.181.531-.181s.27.06.531.18l.239.11c.92.425 1.382.637 1.688.404.306-.232.256-.756.154-1.802l-.026-.271c-.029-.297-.043-.446 0-.584.043-.138.138-.25.328-.472l.174-.203c.67-.784 1.006-1.176.889-1.553-.117-.376-.609-.488-1.593-.71l-.254-.058c-.28-.063-.42-.095-.532-.18-.112-.085-.184-.214-.328-.472l-.131-.236C12.632 7.454 12.379 7 12 7s-.632.454-1.139 1.363Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ShieldStar