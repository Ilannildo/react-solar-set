import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CaseRound = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.17 4a3.001 3.001 0 0 1 5.66 0" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 22.25a.75.75 0 0 0 0 1.5v-1.5Zm-7.682-.422.498-.56-.498.56Zm15.364 0-.498-.56.498.56ZM7.955 23.684a.75.75 0 1 0 .09-1.498l-.09 1.498ZM2.25 13c0 1.874 0 3.83.169 5.466.085.82.215 1.589.422 2.244.203.646.503 1.256.979 1.679l.996-1.121c-.183-.163-.377-.478-.545-1.008-.164-.52-.28-1.178-.36-1.948-.16-1.543-.161-3.415-.161-5.312h-1.5ZM12 23.75c2.102 0 3.746.001 5.027-.152 1.293-.154 2.33-.477 3.153-1.209l-.996-1.121c-.495.44-1.178.703-2.335.84-1.17.14-2.709.142-4.849.142v1.5Zm-3.955-1.564c-1.714-.103-2.614-.371-3.229-.918l-.996 1.121c1.016.903 2.363 1.188 4.135 1.295l.09-1.498Zm12.205-8.799c0 1.832-.013 3.616-.178 5.08-.082.731-.2 1.353-.36 1.845-.164.5-.352.799-.528.956l.996 1.121c.46-.409.755-.993.957-1.61.206-.628.338-1.362.426-2.144.176-1.562.186-3.432.187-5.247h-1.5Z" fill="#1C274D" /><path d="m14.66 15 3.004-.783M9.34 15l-6.008-1.567c-.595-.155-.893-.233-1.082-.419a.891.891 0 0 1-.1-.116C2 12.688 2 12.417 2 11.876c0-2.13 0-3.195.673-3.914.13-.138.275-.264.434-.377C3.934 7 5.159 7 7.609 7h8.782c2.45 0 3.675 0 4.502.585.16.113.305.239.434.377.673.72.673 1.784.673 3.914 0 .54 0 .811-.15 1.022a.885.885 0 0 1-.1.116c-.15.148-.369.227-.75.331" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 13.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.465V14a.5.5 0 0 0-.5-.5Z" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.172C21 19.657 21 15.771 21 12" stroke="#1C274D" strokeWidth={1.5} /><path d="m14.66 14.202 6.198-1.86c.41-.123.616-.184.768-.306a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824 0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 6 18.88 6 17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307l6.197 1.859" stroke="#1C274D" strokeWidth={1.5} /><path d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M9.17 4a3.001 3.001 0 0 1 5.66 0" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.172C21 19.657 21 15.771 21 12" stroke="#1C274D" strokeWidth={1.5} /><path d="m14.66 14.202 6.198-1.86c.41-.123.616-.184.768-.306a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824 0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 6 18.88 6 17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307l6.197 1.859" stroke="#1C274D" strokeWidth={1.5} /><path d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5ZM9.17 4a3.001 3.001 0 0 1 5.66 0" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.775 5.25h10.45c.816 0 1.474 0 2.007.044.55.045 1.031.14 1.477.368.7.359 1.27.929 1.629 1.629.228.446.323.928.368 1.477.044.533.044 1.191.044 2.007v.119c.001.338.002.698-.128 1.02a1.75 1.75 0 0 1-.526.706 1.633 1.633 0 0 1-.347.21c-.003 1.612-.023 3.24-.168 4.636-.085.82-.215 1.589-.422 2.244-.203.646-.504 1.256-.979 1.679-.823.732-1.86 1.055-3.153 1.21-1.27.151-2.898.151-4.976.151h-.102c-2.078 0-3.706 0-4.976-.152-1.294-.154-2.33-.477-3.153-1.209-.476-.422-.776-1.033-.98-1.678-.206-.656-.336-1.425-.421-2.245-.145-1.395-.166-3.024-.169-4.637a1.634 1.634 0 0 1-.346-.209 1.75 1.75 0 0 1-.526-.706c-.13-.322-.13-.682-.128-1.02v-.119c0-.816 0-1.474.044-2.007.045-.55.14-1.031.368-1.477a3.75 3.75 0 0 1 1.629-1.629c.445-.228.927-.323 1.476-.368.534-.044 1.192-.044 2.008-.044Zm-3.023 8.059c.007 1.437.036 2.817.159 4.003.08.77.196 1.427.36 1.948.168.53.361.845.545 1.008.495.44 1.178.703 2.335.84 1.17.14 2.709.142 4.849.142s3.678-.001 4.849-.141c1.157-.138 1.84-.402 2.335-.841.183-.163.377-.478.544-1.008.164-.52.281-1.178.361-1.948.123-1.186.152-2.567.159-4.003l-4.998 1.499v.354c0 .51-.311.97-.786 1.16l-.7.28a4.75 4.75 0 0 1-3.528 0l-.7-.28a1.25 1.25 0 0 1-.786-1.16v-.354l-4.998-1.5Zm4.998-.067-5.393-1.618a7.34 7.34 0 0 1-.43-.137.538.538 0 0 1-.085-.037.25.25 0 0 1-.073-.099.538.538 0 0 1-.012-.091 7.29 7.29 0 0 1-.007-.452c0-.856 0-1.453.039-1.918.037-.456.107-.717.208-.915a2.25 2.25 0 0 1 .977-.978c.199-.101.46-.17.916-.208.465-.038 1.061-.039 1.918-.039h10.384c.856 0 1.453 0 1.918.039.455.037.717.107.915.208.42.215.762.557.978.978.101.198.17.46.208.915.038.465.039 1.062.039 1.918 0 .225 0 .355-.008.452a.539.539 0 0 1-.011.091.251.251 0 0 1-.074.099.54.54 0 0 1-.084.037 7.355 7.355 0 0 1-.43.137l-5.393 1.618V13c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v.242Zm12.41-1.793-.003.001.002-.001Zm.07-.096.001-.002v.002Zm-18.46 0-.001-.002v.002Zm.07.096.002.001-.001-.001Zm7.41 1.801v1.742l.543.217c.775.31 1.639.31 2.414 0l.543-.217V13.25h-3.5ZM12 2.75c-.979 0-1.813.625-2.122 1.5a.75.75 0 0 1-1.414-.5 3.751 3.751 0 0 1 7.072 0 .75.75 0 0 1-1.414.5A2.251 2.251 0 0 0 12 2.75Z" fill="#1C274D" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75c-.978 0-1.813.625-2.122 1.5a.75.75 0 0 1-1.414-.5 3.751 3.751 0 0 1 7.073 0 .75.75 0 1 1-1.415.5A2.251 2.251 0 0 0 12 2.75Z" fill="#1C274D" /><path d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z" fill="#1C274D" /><path d="m8.01 15.37-5.004-1.502c.03 3.114.212 5.982 1.312 6.96C5.636 22 7.758 22 12 22c4.242 0 6.364 0 7.682-1.172 1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65ZM7.609 5h8.782c2.45 0 3.675 0 4.502.673.16.13.305.275.434.434.673.827.673 2.052.673 4.502 0 .622 0 .932-.15 1.175a.996.996 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1.002 1.002 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502.13-.16.275-.305.434-.434C3.934 5 5.159 5 7.609 5Z" fill="#1C274D" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307L8.5 13.95v1.213c0 .765.46 1.471 1.187 1.767l.56.227a4.654 4.654 0 0 0 3.506 0l.56-.227a1.906 1.906 0 0 0 1.187-1.767V13.95l5.358-1.607c.41-.124.616-.185.768-.307a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824 0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 6 18.88 6 17.192 6ZM13.6 13h-3.2c-.22 0-.4.182-.4.406v1.757c0 .166.1.315.251.377l.56.228c.764.31 1.614.31 2.377 0l.56-.228a.407.407 0 0 0 .252-.377v-1.757a.403.403 0 0 0-.4-.406Z" fill="#1C274D" /><path opacity={0.5} d="m20.958 12.313-.034.01L15.5 13.95v1.213c0 .765-.46 1.471-1.187 1.767l-.56.227a4.654 4.654 0 0 1-3.506 0l-.56-.227A1.906 1.906 0 0 1 8.5 15.163V13.95L3 12.3c0 3.675.035 7.388 1.318 8.528C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.172 1.283-1.14 1.317-4.853 1.318-8.528l-.042.013Z" fill="#1C274D" /><path opacity={0.5} d="M9.17 4a3.001 3.001 0 0 1 5.66 0" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CaseRound