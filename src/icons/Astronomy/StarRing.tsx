import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const StarRing = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.673 15.684c.673 1.066 1.01 1.6.78 2.035-.229.436-.872.487-2.158.587l-.333.026c-.365.029-.548.043-.708.127-.16.084-.278.228-.515.516l-.216.263c-.836 1.014-1.254 1.522-1.73 1.456-.476-.065-.696-.66-1.135-1.848l-.114-.308c-.125-.338-.187-.507-.31-.63-.123-.122-.292-.185-.63-.31l-.307-.113c-1.19-.44-1.784-.66-1.849-1.136-.065-.476.442-.894 1.457-1.73l.262-.215c.288-.238.433-.356.517-.516.084-.16.098-.342.126-.708l.026-.333c.1-1.286.15-1.929.587-2.158.436-.23.97.107 2.036.78l.276.174c.303.191.454.287.629.31.174.025.352-.026.707-.127l.324-.092c1.251-.355 1.877-.533 2.212-.198.335.334.157.96-.199 2.211M21.83 19.982c-.49 1.044-1.97 1.259-3.981.763m3.98-.763c.533-1.136-.21-3.029-1.829-5.13m1.83 5.13c-.631 1.344-2.897 1.314-5.83.166m5.83-.166c.868-1.852-1.656-5.713-5.83-9.21M2.17 6.018c-.532 1.136.211 3.028 1.83 5.129m-1.83-5.13c.49-1.044 1.97-1.258 3.981-.763m-3.98.764c-.707 1.506.83 4.341 3.675 7.229M2.17 6.017C3.079 4.083 7.385 4.999 12.186 8M18.895 3.395c.099.924.486 1.79 1.105 2.47m-1.105-2.47c-.93.767-1.23.909-2.402 1.135m2.402-1.135L19.204 3m-1.607 4a4.352 4.352 0 0 0-1.105-2.47m0 0L16 4.514" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.395 11.734c1.251-.355 1.877-.533 2.212-.198.335.334.157.96-.199 2.211l-.092.324c-.1.355-.151.533-.127.708.024.174.12.326.31.629l.174.276c.673 1.066 1.01 1.6.78 2.035-.229.436-.872.487-2.158.587l-.333.026c-.365.029-.548.043-.708.127-.16.084-.278.228-.515.516l-.216.263c-.836 1.014-1.254 1.522-1.73 1.456-.476-.065-.696-.66-1.135-1.848l-.114-.308c-.125-.338-.187-.507-.31-.63-.123-.122-.292-.185-.63-.31l-.307-.113c-1.19-.44-1.784-.66-1.849-1.136-.065-.476.442-.894 1.457-1.73l.262-.215c.288-.238.433-.356.517-.516.084-.16.098-.342.126-.708l.026-.333c.1-1.286.15-1.929.587-2.158.436-.23.97.107 2.036.78l.276.174c.303.191.454.287.629.31.174.025.352-.026.707-.127l.324-.092Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M21.83 19.982c1.01-2.155-2.57-7.028-8-10.884C8.403 5.242 3.183 3.863 2.17 6.018m19.66 13.964c-.49 1.044-1.97 1.259-3.981.763m3.98-.763c.533-1.136-.21-3.029-1.829-5.13m1.83 5.13c-.631 1.344-2.897 1.314-5.83.166M2.17 6.018c-.532 1.136.211 3.028 1.83 5.129m-1.83-5.13c.49-1.044 1.97-1.258 3.981-.763m-3.98.764c-.707 1.506.83 4.341 3.675 7.229" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M18.895 3.395c.099.924.486 1.79 1.105 2.47m-1.105-2.47c-.93.767-1.23.909-2.402 1.135m2.402-1.135L19.204 3m-1.607 4a4.352 4.352 0 0 0-1.105-2.47m0 0L16 4.514" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.395 11.734c1.251-.355 1.877-.533 2.212-.198.335.334.157.96-.199 2.211l-.092.324c-.1.355-.151.533-.127.708.024.174.12.326.31.629l.174.276c.673 1.066 1.01 1.6.78 2.035-.229.436-.872.487-2.158.587l-.333.026c-.365.029-.548.043-.708.127-.16.084-.278.228-.515.516l-.216.263c-.836 1.014-1.254 1.522-1.73 1.456-.476-.065-.696-.66-1.135-1.848l-.114-.308c-.125-.338-.187-.507-.31-.63-.123-.122-.292-.185-.63-.31l-.307-.113c-1.19-.44-1.784-.66-1.849-1.136-.065-.476.442-.894 1.457-1.73l.262-.215c.288-.238.433-.356.517-.516.084-.16.098-.342.126-.708l.026-.333c.1-1.286.15-1.929.587-2.158.436-.23.97.107 2.036.78l.276.174c.303.191.454.287.629.31.174.025.352-.026.707-.127l.324-.092Z" stroke="currentColor" strokeWidth={1.5} /><path d="M21.83 19.982c1.01-2.155-2.57-7.028-8-10.884C8.403 5.242 3.183 3.863 2.17 6.018m19.66 13.964c-.49 1.044-1.97 1.259-3.981.763m3.98-.763c.533-1.136-.21-3.029-1.829-5.13m1.83 5.13c-.631 1.344-2.897 1.314-5.83.166M2.17 6.018c-.532 1.136.211 3.028 1.83 5.129m-1.83-5.13c.49-1.044 1.97-1.258 3.981-.763m-3.98.764c-.707 1.506.83 4.341 3.675 7.229M18.895 3.395c.099.924.486 1.79 1.105 2.47m-1.105-2.47c-.93.767-1.23.909-2.402 1.135m2.402-1.135L19.204 3m-1.607 4a4.352 4.352 0 0 0-1.105-2.47m0 0L16 4.514" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m9.859 10.835-.048-.03c-.492-.31-.933-.59-1.308-.752-.4-.174-.912-.3-1.43-.028-.509.268-.704.755-.8 1.18-.078.339-.12.764-.158 1.243a21.882 21.882 0 0 1-1.518-1.755l-.003-.004A13.555 13.555 0 0 1 3.45 8.97a9.239 9.239 0 0 1-.106-.2l-.03-.056a6.714 6.714 0 0 1-.33-.75 4.473 4.473 0 0 1-.157-.516c-.118-.503-.089-.871.024-1.11a.813.813 0 0 1 .36-.372c.13-.071.297-.13.513-.168.538-.096 1.296-.049 2.25.186l.01.002.17.044c1.997.528 4.578 1.787 7.244 3.68 2.514 1.787 4.608 3.785 6.005 5.596l.004.006a14.113 14.113 0 0 1 1.113 1.663l.011.02a7.473 7.473 0 0 1 .53 1.162c.086.257.14.483.168.681.05.369.01.64-.078.827-.076.162-.221.32-.484.43a1.894 1.894 0 0 1-.389.11c-.538.095-1.296.048-2.249-.187l-.007-.002a14.164 14.164 0 0 1-1.748-.565.75.75 0 1 0-.546 1.397c.944.37 1.847.637 2.671.781.327.057.642.095.943.112a6.118 6.118 0 0 0 .554.006c.225-.008.44-.03.647-.066.242-.044.476-.11.695-.2.545-.223.999-.599 1.271-1.18.372-.79.278-1.724-.028-2.626a8.532 8.532 0 0 0-.4-.953c-.316-.642-.733-1.31-1.23-1.987-1.505-2.046-3.819-4.283-6.585-6.247-2.763-1.963-5.507-3.321-7.729-3.908-1.106-.293-2.137-.408-2.997-.272-.32.05-.628.139-.908.271A2.31 2.31 0 0 0 1.491 5.7c-.294.629-.3 1.35-.124 2.096.054.229.124.457.207.684a8.197 8.197 0 0 0 .437.98 11.291 11.291 0 0 0 .443.78 14.546 14.546 0 0 0 .69 1.017 23.16 23.16 0 0 0 2.168 2.517c.073.075.159.131.25.169l-.134.1-.042.034c-.472.388-.887.73-1.168 1.037-.291.318-.592.761-.513 1.338.08.593.505.927.882 1.136.356.198.848.38 1.396.582l.054.02.307.113c.18.067.274.102.339.132l.017.008.008.018c.03.065.066.158.132.338l.114.308.02.053c.202.549.384 1.04.581 1.396.21.377.544.802 1.136.883.577.079 1.02-.222 1.338-.513.308-.282.65-.697 1.038-1.168l.25-.305a5.71 5.71 0 0 1 .25-.292.58.58 0 0 1 .036-.036.595.595 0 0 1 .045-.008c.076-.012.178-.02.373-.036l.387-.03c.596-.047 1.124-.088 1.529-.18.426-.097.912-.292 1.18-.801.272-.518.146-1.03-.028-1.43-.162-.374-.44-.815-.751-1.307l-.03-.048-.175-.276a5.04 5.04 0 0 1-.198-.333 5.517 5.517 0 0 1 .103-.4l.091-.322.016-.054c.164-.58.31-1.093.365-1.502.056-.423.049-.97-.373-1.391-.422-.422-.969-.43-1.391-.373-.41.054-.923.2-1.502.365l-.054.015-.324.092a5.55 5.55 0 0 1-.399.103l-.024-.012a5.04 5.04 0 0 1-.308-.187l-.276-.174Zm-2.145.533h.01-.01Zm.191.06a1.182 1.182 0 0 0-.125-.047 1.211 1.211 0 0 0-.045.157c-.065.284-.1.7-.151 1.368l-.026.333-.006.073c-.021.288-.046.623-.205.925-.157.3-.418.512-.645.698l-.058.048-.263.216c-.526.433-.856.707-1.056.927a1.456 1.456 0 0 0-.088.104 1.4 1.4 0 0 0 .077.045c.243.135.623.278 1.243.507l.307.113.07.026c.263.095.586.213.83.457.244.244.362.568.458.83l.025.07.114.308c.229.62.371.999.506 1.242.017.031.033.057.046.077.027-.02.061-.048.104-.087.22-.201.493-.53.926-1.057l.216-.262.048-.058c.186-.228.4-.489.698-.646.302-.158.637-.183.925-.205l.074-.005.332-.026c.668-.053 1.084-.087 1.368-.151.074-.017.124-.033.157-.045a1.18 1.18 0 0 0-.047-.126c-.111-.255-.325-.597-.675-1.153l-.174-.276-.04-.061c-.15-.236-.333-.524-.38-.866-.046-.337.049-.665.129-.942l.02-.073.093-.323c.184-.65.298-1.056.336-1.344l.01-.089a1.602 1.602 0 0 0-.09.01c-.287.038-.693.151-1.343.336l-.324.092-.073.02c-.276.08-.604.175-.941.13-.343-.048-.63-.23-.866-.381l-.062-.04-.276-.173c-.555-.35-.897-.564-1.153-.675Zm-2.746 4.74.005.007-.005-.006Zm.03.136c-.001.005-.003.007-.003.007l.003-.007Zm3.642 3.652.007-.002-.007.002Zm.136.022.007.006s-.003-.001-.007-.006Zm4.808-2.55v-.01.01Zm.037-.089.008-.005-.008.005ZM7.803 11.33a.034.034 0 0 1 .006-.008l-.006.008ZM19.665 2.409a.75.75 0 0 1 .13 1.053l-.111.142c.123.658.425 1.267.87 1.756a.75.75 0 0 1-1.108 1.01 5.069 5.069 0 0 1-1.021-1.697 3.713 3.713 0 0 1-.687.32c.326.591.532 1.247.605 1.927a.75.75 0 0 1-1.492.16 3.614 3.614 0 0 0-.718-1.811l-.158-.006a.75.75 0 0 1 .05-1.499l.408.014c.526-.104.797-.18 1.031-.29.235-.112.47-.275.891-.62l.258-.33a.75.75 0 0 1 1.052-.13Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.273 19.45c.63.246 1.215.434 1.748.566l.007.001c.954.235 1.711.282 2.25.186.151-.027.28-.064.388-.109.263-.11.408-.268.484-.43.088-.187.129-.458.078-.827a3.729 3.729 0 0 0-.21-.8 7.473 7.473 0 0 0-.488-1.043l-.01-.02a14.113 14.113 0 0 0-1.113-1.663l-.005-.006c-1.397-1.811-3.49-3.809-6.005-5.595C10.73 7.816 8.15 6.557 6.153 6.029l-.17-.044-.01-.002c-.954-.235-1.712-.282-2.25-.186a1.666 1.666 0 0 0-.513.168.813.813 0 0 0-.36.371c-.113.24-.142.608-.024 1.111.037.157.088.329.157.516a6.714 6.714 0 0 0 .33.75l.03.057.106.199c.293.534.676 1.112 1.145 1.72l.003.004a22.467 22.467 0 0 0 1.783 2.028l.432.434.024-.308c.1-1.286.15-1.929.587-2.158.436-.23.97.107 2.036.78l.276.174c.303.191.454.287.629.31.174.025.352-.026.707-.127l.324-.092c1.251-.355 1.877-.533 2.212-.198.335.334.157.96-.199 2.211l-.092.324c-.1.355-.151.533-.127.708.024.174.12.326.31.629l.174.276c.673 1.066 1.01 1.6.78 2.035-.229.436-.872.487-2.158.587l-.333.026c-.365.029-.548.043-.708.127-.16.084-.278.228-.515.516l-.216.263c-.836 1.014-1.254 1.522-1.73 1.456-.476-.065-.696-.66-1.135-1.848l-.114-.308c-.125-.338-.187-.507-.31-.63-.123-.122-.292-.185-.63-.31l-.307-.113c-1.19-.44-1.784-.66-1.849-1.136-.065-.476.442-.894 1.457-1.729l.139-.115a60.931 60.931 0 0 1-.732-.732 23.16 23.16 0 0 1-2.169-2.517 16.748 16.748 0 0 1-.689-1.018 12.816 12.816 0 0 1-.443-.779 8.197 8.197 0 0 1-.436-.98 5.965 5.965 0 0 1-.208-.684c-.176-.746-.17-1.467.125-2.096A2.31 2.31 0 0 1 2.63 4.58c.28-.133.588-.221.908-.272.86-.136 1.89-.02 2.997.272 2.222.587 4.966 1.945 7.73 3.908 2.765 1.964 5.08 4.2 6.583 6.247.498.677.916 1.345 1.231 1.986a8.532 8.532 0 0 1 .4.954c.306.902.4 1.835.028 2.627-.272.58-.726.956-1.27 1.179-.22.09-.454.156-.696.2a4.597 4.597 0 0 1-.752.07c-.145.002-.295-.002-.45-.01a8.148 8.148 0 0 1-.942-.112c-.824-.144-1.727-.412-2.671-.781a.75.75 0 1 1 .546-1.397Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19.665 2.409a.75.75 0 0 1 .13 1.053l-.111.142c.123.658.425 1.267.87 1.756a.75.75 0 0 1-1.108 1.01 5.069 5.069 0 0 1-1.021-1.697 3.713 3.713 0 0 1-.687.32c.326.591.532 1.247.605 1.927a.75.75 0 0 1-1.492.16 3.614 3.614 0 0 0-.718-1.811l-.158-.006a.75.75 0 0 1 .05-1.499l.408.014c.526-.104.797-.18 1.031-.29.235-.112.47-.275.891-.62l.258-.33a.75.75 0 0 1 1.052-.13Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m9.811 10.805.048.03.276.174a5.06 5.06 0 0 0 .333.199 5.506 5.506 0 0 0 .4-.103l.322-.092.054-.015c.58-.165 1.093-.31 1.502-.365.423-.056.97-.05 1.391.373.422.421.43.968.373 1.39-.054.41-.2.923-.365 1.503l-.015.053-.092.324a5.573 5.573 0 0 0-.103.4 5.04 5.04 0 0 0 .199.332l.174.276.03.048c.31.491.59.933.752 1.307.174.4.3.912.028 1.43-.268.51-.755.704-1.18.801-.405.092-.934.133-1.53.18l-.387.03a5.412 5.412 0 0 0-.372.036.547.547 0 0 0-.045.008.598.598 0 0 0-.037.036c-.055.057-.123.14-.25.292l-.25.305c-.388.471-.73.886-1.037 1.168-.318.29-.762.592-1.338.513-.593-.081-.927-.506-1.136-.883-.198-.356-.38-.847-.582-1.395l-.02-.054-.113-.308a5.102 5.102 0 0 0-.14-.355 5.14 5.14 0 0 0-.356-.14l-.308-.114-.054-.02c-.548-.203-1.04-.384-1.395-.582-.377-.209-.802-.543-.883-1.136-.079-.577.222-1.02.513-1.338.282-.308.697-.65 1.168-1.037l.042-.035.263-.216a5.82 5.82 0 0 0 .292-.249.574.574 0 0 0 .036-.037.54.54 0 0 0 .008-.045c.012-.075.02-.178.036-.372l.026-.333.004-.055c.047-.596.088-1.124.18-1.528.097-.426.292-.913.801-1.18.518-.273 1.03-.147 1.43.027.374.163.815.441 1.307.752Zm-3.795 2.744v-.002.002Zm5.58 5.578h-.002.002Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M18.02 20.015a14.148 14.148 0 0 1-1.747-.565.75.75 0 0 0-.546 1.397c.944.37 1.847.637 2.671.781.327.057.642.095.943.112a6.118 6.118 0 0 0 .554.006c.225-.008.44-.03.647-.066.242-.044.476-.11.695-.2.545-.223.999-.599 1.271-1.18.372-.791.278-1.724-.028-2.626a8.512 8.512 0 0 0-.4-.953c-.316-.642-.733-1.31-1.23-1.987-1.505-2.046-3.819-4.283-6.585-6.247-2.763-1.963-5.507-3.321-7.729-3.908-1.106-.293-2.137-.408-2.997-.272-.32.05-.628.139-.908.271A2.31 2.31 0 0 0 1.491 5.7c-.294.629-.3 1.35-.124 2.096.054.229.124.457.207.684a8.197 8.197 0 0 0 .437.98 11.291 11.291 0 0 0 .443.779 14.548 14.548 0 0 0 .69 1.018 23.17 23.17 0 0 0 2.168 2.517.75.75 0 0 0 1.068-1.052 22.454 22.454 0 0 1-1.786-2.032A13.555 13.555 0 0 1 3.45 8.97a9.238 9.238 0 0 1-.185-.355 6.714 6.714 0 0 1-.281-.651 4.474 4.474 0 0 1-.157-.516c-.118-.503-.089-.871.024-1.11a.813.813 0 0 1 .36-.372c.13-.071.297-.13.513-.168.538-.096 1.296-.049 2.25.186a11.156 11.156 0 0 1 .18.046c1.997.528 4.578 1.787 7.244 3.68 2.514 1.787 4.608 3.785 6.005 5.596l.004.006a14.134 14.134 0 0 1 1.113 1.663l.011.02a7.473 7.473 0 0 1 .53 1.162c.086.257.14.483.168.681.05.369.01.64-.078.827-.076.162-.221.32-.484.43a1.888 1.888 0 0 1-.389.109c-.538.096-1.296.05-2.249-.186-.002 0-.005 0-.007-.002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19.665 2.409a.75.75 0 0 1 .13 1.053l-.111.142c.123.658.425 1.267.87 1.756a.75.75 0 0 1-1.108 1.01 5.068 5.068 0 0 1-1.021-1.697 3.713 3.713 0 0 1-.687.32c.326.591.532 1.247.605 1.927a.75.75 0 0 1-1.492.16 3.614 3.614 0 0 0-.718-1.811l-.158-.006a.75.75 0 0 1 .05-1.499l.408.014c.526-.104.797-.18 1.031-.29.235-.112.47-.275.891-.62l.258-.33a.75.75 0 0 1 1.052-.13Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default StarRing