import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const EmojiFunnySquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.913 15.934c1.258.315 2.685.315 4.122-.07 1.437-.385 2.673-1.099 3.605-2.001" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={14.509} cy={9.774} rx={1} ry={1.5} transform="rotate(-15 14.51 9.774)" fill="currentColor" /><ellipse cx={8.714} cy={11.328} rx={1} ry={1.5} transform="rotate(-15 8.714 11.328)" fill="currentColor" /><path d="M20.796 9.643c1.111 4.147 1.667 6.22.724 7.853-.943 1.634-3.016 2.19-7.163 3.3-4.147 1.111-6.22 1.667-7.853.724-1.634-.943-2.19-3.016-3.3-7.163-1.112-4.147-1.667-6.22-.724-7.853.943-1.634 3.016-2.19 7.163-3.3 4.147-1.112 6.22-1.667 7.853-.724 1.009.582 1.606 1.595 2.177 3.26" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.913 15.934c1.258.315 2.685.315 4.122-.07 1.437-.385 2.673-1.099 3.605-2.001" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={14.509} cy={9.774} rx={1} ry={1.5} transform="rotate(-15 14.51 9.774)" fill="currentColor" /><ellipse cx={8.714} cy={11.328} rx={1} ry={1.5} transform="rotate(-15 8.714 11.328)" fill="currentColor" /><path opacity={0.5} d="M3.204 14.357c-1.112-4.147-1.667-6.22-.724-7.853.943-1.634 3.016-2.19 7.163-3.3 4.147-1.112 6.22-1.667 7.853-.724 1.634.943 2.19 3.016 3.3 7.163 1.111 4.147 1.667 6.22.724 7.853-.943 1.634-3.016 2.19-7.163 3.3-4.147 1.111-6.22 1.667-7.853.724-1.634-.943-2.19-3.016-3.3-7.163Z" stroke="currentColor" strokeWidth={1.5} /><path d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.913 15.934c1.258.315 2.685.315 4.122-.07 1.437-.385 2.673-1.099 3.605-2.001" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={14.509} cy={9.774} rx={1} ry={1.5} transform="rotate(-15 14.51 9.774)" fill="currentColor" /><ellipse cx={8.714} cy={11.328} rx={1} ry={1.5} transform="rotate(-15 8.714 11.328)" fill="currentColor" /><path d="M3.204 14.357c-1.112-4.147-1.667-6.22-.724-7.853.943-1.634 3.016-2.19 7.163-3.3 4.147-1.112 6.22-1.667 7.853-.724 1.634.943 2.19 3.016 3.3 7.163 1.111 4.147 1.667 6.22.724 7.853-.943 1.634-3.016 2.19-7.163 3.3-4.147 1.111-6.22 1.667-7.853.724-1.634-.943-2.19-3.016-3.3-7.163Z" stroke="currentColor" strokeWidth={1.5} /><path d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.475 9.516c.215.8-.044 1.564-.577 1.707-.534.143-1.14-.39-1.355-1.19-.214-.8.045-1.564.578-1.707.534-.143 1.14.39 1.354 1.19ZM9.68 11.069c.214.8-.044 1.565-.578 1.708-.533.143-1.14-.39-1.354-1.19-.214-.8.044-1.565.578-1.708.533-.143 1.14.39 1.354 1.19Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.608 2.815c-1.18.152-2.677.552-4.77 1.113-2.095.561-3.592.964-4.689 1.422-1.077.45-1.663.911-2.02 1.529-.356.617-.463 1.355-.314 2.513.152 1.18.552 2.677 1.113 4.77.561 2.095.964 3.592 1.422 4.689.45 1.077.911 1.663 1.529 2.02.617.356 1.355.463 2.513.314 1.18-.152 2.677-.552 4.77-1.113 2.095-.561 3.592-.964 4.689-1.422 1.077-.45 1.663-.911 2.02-1.529.356-.617.463-1.355.314-2.513-.152-1.18-.552-2.677-1.113-4.77-.561-2.095-.964-3.592-1.422-4.689-.45-1.077-.911-1.663-1.529-2.02-.617-.356-1.355-.463-2.513-.314Zm-.192-1.487c1.324-.171 2.44-.084 3.455.502 1.016.587 1.65 1.51 2.163 2.741.502 1.201.929 2.796 1.472 4.823l.03.11c.543 2.027.97 3.621 1.136 4.912.171 1.324.084 2.44-.503 3.455-.586 1.016-1.508 1.65-2.74 2.163-1.201.502-2.796.929-4.823 1.472l-.11.03c-2.027.543-3.622.97-4.912 1.136-1.324.171-2.44.084-3.455-.503-1.016-.586-1.65-1.508-2.163-2.74-.502-1.201-.93-2.796-1.472-4.823l-.03-.11c-.543-2.027-.97-3.622-1.136-4.912-.171-1.324-.084-2.44.502-3.455.587-1.016 1.51-1.65 2.741-2.163 1.201-.502 2.796-.93 4.823-1.472l.11-.03c2.027-.543 3.622-.97 4.912-1.136ZM17.18 13.34a.75.75 0 0 1-.017 1.06 8.24 8.24 0 0 1-.536.476l.218.444a2.25 2.25 0 0 1-4.04 1.983l-.273-.556a8.876 8.876 0 0 1-3.8-.088.75.75 0 1 1 .364-1.454c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.06.017Zm-3.174 3.004.146.298a.75.75 0 0 0 1.347-.66l-.127-.259a9.294 9.294 0 0 1-1.366.62Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.48 6.504c-.943 1.633-.388 3.706.724 7.853 1.11 4.147 1.666 6.22 3.3 7.163 1.633.943 3.706.387 7.853-.724 4.147-1.11 6.22-1.666 7.163-3.3.943-1.633.387-3.706-.724-7.853-1.11-4.147-1.666-6.22-3.3-7.163-1.633-.943-3.706-.388-7.853.724-4.147 1.11-6.22 1.666-7.163 3.3Zm5.705 9.247a.75.75 0 0 1 .91-.545c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.278-1.815a.75.75 0 1 1 1.043 1.077 8.4 8.4 0 0 1-1.15.93l.159.32a1.5 1.5 0 1 1-2.693 1.323l-.196-.4-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91Zm7.29-6.235c.215.8-.044 1.565-.577 1.707-.534.143-1.14-.39-1.354-1.19-.215-.8.044-1.564.577-1.707.534-.143 1.14.39 1.354 1.19Zm-6.373 3.26c.534-.143.792-.907.578-1.707-.214-.8-.82-1.333-1.354-1.19-.534.143-.792.907-.578 1.707.214.8.82 1.333 1.354 1.19Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M6.504 21.52c1.633.943 3.706.387 7.853-.724 4.147-1.11 6.22-1.666 7.163-3.3.943-1.633.387-3.706-.724-7.853-1.11-4.147-1.666-6.22-3.3-7.163-1.633-.943-3.706-.388-7.853.724-4.147 1.11-6.22 1.666-7.163 3.3-.943 1.633-.388 3.706.724 7.853 1.11 4.147 1.666 6.22 3.3 7.163Z" fill="currentColor" /><path d="M14.898 11.224c.533-.143.792-.908.578-1.708-.215-.8-.821-1.333-1.355-1.19-.533.143-.792.907-.577 1.708.214.8.82 1.333 1.354 1.19ZM9.102 12.777c.534-.143.792-.908.578-1.708-.214-.8-.82-1.333-1.354-1.19-.534.143-.792.907-.578 1.708.215.8.82 1.333 1.354 1.19ZM8.185 15.751a.75.75 0 0 1 .91-.545c1.13.283 2.428.287 3.746-.066 1.318-.354 2.44-1.006 3.278-1.816a.75.75 0 1 1 1.043 1.078 8.398 8.398 0 0 1-1.15.928l.159.322a1.5 1.5 0 1 1-2.693 1.322l-.196-.4-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default EmojiFunnySquare