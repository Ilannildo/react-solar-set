import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const StreetsNavigation = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 16.92c1.14-.099 1.922-.323 2.538-.828.202-.166.388-.352.554-.554C22 14.43 22 12.788 22 9.5c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C19.43 2 17.788 2 14.5 2h-5c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c.616.505 1.398.73 2.538.829M20.5 15.5l-6.5-5M3.5 3l3 2.143m14-1.643-6.5 7m0 0L9.5 7.286" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m15.267 19.2-1.335-2.67C13.089 14.842 12.668 14 12 14c-.668 0-1.089.843-1.932 2.53L8.733 19.2c-.512 1.024-.768 1.537-.73 1.859.057.465.407.842.868.93.318.062.847-.157 1.905-.595.39-.162.587-.243.787-.284.288-.06.586-.06.874 0 .2.041.396.122.787.284 1.058.438 1.586.657 1.905.596.46-.09.81-.465.867-.931.04-.323-.217-.835-.729-1.858Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 16.92c1.14-.099 1.922-.323 2.538-.828.202-.166.388-.352.554-.554C22 14.43 22 12.788 22 9.5c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C19.43 2 17.788 2 14.5 2h-5c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c.616.505 1.398.73 2.538.829" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m20.5 15.5-6.5-5M3.5 3 14 10.5m6.5-7-6.5 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m15.267 19.2-1.335-2.67C13.089 14.842 12.668 14 12 14c-.668 0-1.089.843-1.932 2.53L8.733 19.2c-.512 1.024-.768 1.537-.73 1.859.057.465.407.842.868.93.318.062.847-.157 1.905-.595.39-.162.587-.243.787-.284.288-.06.586-.06.874 0 .2.041.396.122.787.284 1.058.438 1.586.657 1.905.596.46-.09.81-.465.867-.931.04-.323-.217-.835-.729-1.858Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 16.92c1.14-.099 1.922-.323 2.538-.828.202-.166.388-.352.554-.554C22 14.43 22 12.788 22 9.5c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C19.43 2 17.788 2 14.5 2h-5c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c.616.505 1.398.73 2.538.829M20.5 15.5l-6.5-5M3.5 3 14 10.5m6.5-7-6.5 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m15.267 19.2-1.335-2.67C13.089 14.842 12.668 14 12 14c-.668 0-1.089.843-1.932 2.53L8.733 19.2c-.512 1.024-.768 1.537-.73 1.859.057.465.407.842.868.93.318.062.847-.157 1.905-.595.39-.162.587-.243.787-.284.288-.06.586-.06.874 0 .2.041.396.122.787.284 1.058.438 1.586.657 1.905.596.46-.09.81-.465.867-.931.04-.323-.217-.835-.729-1.858Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.451 1.25h5.098c1.602 0 2.872 0 3.876.119 1.03.122 1.88.377 2.588.96.24.197.461.417.659.658.582.709.837 1.557.96 2.588.118 1.004.118 2.274.118 3.876v.098c0 1.602 0 2.872-.119 3.876-.122 1.03-.377 1.88-.96 2.588-.197.24-.417.461-.658.659-.789.647-1.752.892-2.948.996a.75.75 0 1 1-.13-1.494c.776-.068 1.304-.192 1.704-.39l-6.086-4.681-10.052-7.18-.013.015c-.326.398-.525.924-.63 1.813-.107.906-.108 2.087-.108 3.749s.001 2.843.108 3.749c.105.889.304 1.415.63 1.813.135.164.286.315.45.45.443.364 1.044.567 2.127.662a.75.75 0 1 1-.13 1.494c-1.196-.104-2.16-.349-2.948-.996a4.751 4.751 0 0 1-.659-.659c-.582-.709-.837-1.557-.96-2.588-.118-1.005-.118-2.274-.118-3.876V9.45c0-1.602 0-2.872.119-3.876.122-1.03.377-1.88.96-2.588a4.75 4.75 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 1.25 7.85 1.25 9.451 1.25ZM4.837 3.033l9.062 6.473 5.809-6.255c-.354-.19-.81-.316-1.46-.393-.905-.107-2.086-.108-3.748-.108h-5c-1.662 0-2.843.001-3.749.108a5.61 5.61 0 0 0-.914.175ZM20.763 4.32l-5.653 6.088 5.624 4.327c.198-.357.329-.82.408-1.485.107-.906.108-2.087.108-3.749s-.001-2.843-.108-3.749c-.075-.633-.197-1.082-.38-1.432Zm-8.79 10.448c-.05.036-.134.117-.258.295-.255.365-.543.937-.976 1.803l-1.335 2.671c-.262.522-.439.878-.55 1.145-.087.21-.1.293-.103.304a.33.33 0 0 0 .246.265c.012-.002.096-.01.311-.082.273-.091.641-.243 1.18-.467.02-.007.038-.015.056-.023.338-.14.596-.247.867-.303.389-.08.79-.08 1.178 0 .271.056.53.163.867.303l.055.023c.54.224.908.376 1.18.467.216.072.3.08.312.082a.33.33 0 0 0 .246-.265c-.003-.011-.016-.094-.103-.304a20.9 20.9 0 0 0-.55-1.145l-1.335-2.671c-.433-.866-.72-1.438-.976-1.803a1.249 1.249 0 0 0-.258-.295.173.173 0 0 0-.027-.017.173.173 0 0 0-.027.017ZM12 14.75h-.003H12Zm-1.515-.547c.33-.473.798-.953 1.515-.953.717 0 1.185.48 1.515.953.326.467.662 1.14 1.06 1.936l1.376 2.753c.245.49.447.892.58 1.213.125.3.255.67.21 1.044a1.83 1.83 0 0 1-1.47 1.577c-.368.072-.747-.032-1.055-.135-.33-.11-.746-.283-1.252-.493l-.027-.01c-.417-.174-.537-.22-.652-.244a1.41 1.41 0 0 0-.57 0c-.115.024-.235.07-.652.243l-.027.011c-.506.21-.922.383-1.252.493-.308.103-.687.206-1.056.135A1.83 1.83 0 0 1 7.26 21.15c-.045-.373.085-.743.21-1.044.133-.32.335-.724.58-1.213l1.376-2.753c.398-.796.734-1.469 1.06-1.936Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 2h-5c-2.616 0-4.191 0-5.283.458l9.689 7.046 6.366-6.79C19.168 2 17.534 2 14.5 2ZM21.323 3.786l-6.216 6.63 6.18 4.855C22 14.168 22 12.534 22 9.5c0-2.982 0-4.611-.677-5.714ZM2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c.616.505 1.398.73 2.538.829.608.053 1.317.07 2.157.076l.57-1.138.045-.092c.382-.764.74-1.48 1.098-1.993.366-.524 1.03-1.274 2.13-1.274 1.1 0 1.764.75 2.13 1.274.358.513.716 1.23 1.098 1.993l.046.092.569 1.138c.84-.006 1.55-.023 2.157-.076.944-.082 1.642-.25 2.204-.592l-6.656-5.23-10.587-7.7-.053.063C2 4.57 2 6.212 2 9.5Z" fill="currentColor" /><path d="m15.267 19.2-1.335-2.67C13.089 14.842 12.668 14 12 14c-.668 0-1.089.843-1.932 2.53L8.733 19.2c-.512 1.024-.768 1.537-.73 1.859.057.465.407.842.868.93.318.062.847-.157 1.905-.595.39-.162.587-.243.787-.284.288-.06.586-.06.874 0 .2.041.396.122.787.284 1.058.438 1.586.657 1.905.596.46-.09.81-.465.867-.931.04-.323-.217-.835-.729-1.858Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m21.323 3.786-6.216 6.63 6.18 4.855C22 14.168 22 12.534 22 9.502c0-2.983 0-4.612-.677-5.715ZM15.267 19.2l-1.335-2.67C13.089 14.842 12.668 14 12 14c-.668 0-1.089.843-1.932 2.53L8.733 19.2c-.512 1.024-.768 1.537-.73 1.859.057.465.407.842.868.93.318.062.847-.157 1.905-.595.39-.162.587-.243.787-.284.288-.06.586-.06.874 0 .2.041.396.122.787.284 1.058.438 1.586.657 1.905.596.46-.09.81-.465.867-.931.04-.323-.217-.835-.729-1.858Z" fill="currentColor" /><path opacity={0.5} d="M2 9.5v.04c0 3.26.004 4.896.908 5.998.166.203.352.388.554.554.181.149.377.273.591.377C5.15 17 6.75 17 9.497 17H14.5l1.343-.003c.84-.005 1.55-.023 2.157-.076.944-.082 1.642-.25 2.204-.592l-6.656-5.23-10.587-7.7-.053.064C2 4.569 2 6.213 2 9.5Z" fill="currentColor" /><path d="M14.5 2h-5c-2.616 0-4.191 0-5.283.458l9.689 7.046 6.366-6.79C19.168 2 17.534 2 14.5 2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default StreetsNavigation