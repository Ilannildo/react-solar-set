import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const VolumeLoud = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 6s1.5 1.8 1.5 6-1.5 6-1.5 6M18 9s.5.9.5 3-.5 3-.5 3M1.959 8.577a3.215 3.215 0 0 1 1.381-1.3C3.94 7 4.626 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295.923.648.993 2.157 1.133 5.174A68.21 68.21 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.313 2.313 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395-.011-.179-.02-.356-.026-.528" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.215 3.215 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295.922.648.993 2.157 1.133 5.174A68.21 68.21 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.314 2.314 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17.127 17.127 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.4} d="M20 6s1.5 1.8 1.5 6-1.5 6-1.5 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.7} d="M18 9s.5.9.5 3-.5 3-.5 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.215 3.215 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295.922.648.993 2.157 1.133 5.174A68.21 68.21 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.314 2.314 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17.127 17.127 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z" stroke="currentColor" strokeWidth={1.5} /><path d="M20 6s1.5 1.8 1.5 6-1.5 6-1.5 6M18 9s.5.9.5 3-.5 3-.5 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.14 4.91c-.714.347-1.62.942-2.909 1.792l-.219.144-.05.033c-.38.25-.643.424-.931.552a3.75 3.75 0 0 1-.89.267c-.31.052-.626.052-1.082.052H6c-1.444 0-1.93.016-2.345.208a2.47 2.47 0 0 0-1.036.975c-.218.405-.259.82-.336 2.084-.02.347-.033.68-.033.983 0 .303.012.636.033.983.077 1.264.118 1.68.336 2.084.209.389.635.79 1.036.975.414.192.901.208 2.345.208h.06c.455 0 .77 0 1.081.052.307.052.605.142.89.267.288.128.552.301.932.552l.05.033.218.144c1.29.85 2.195 1.445 2.91 1.792.711.346 1.068.36 1.317.275.137-.047.272-.115.39-.199.217-.152.415-.447.553-1.218.14-.775.191-1.847.263-3.377.052-1.12.086-2.06.086-2.571 0-.512-.034-1.451-.086-2.57-.072-1.531-.123-2.603-.262-3.378-.14-.771-.337-1.066-.553-1.218a1.569 1.569 0 0 0-.391-.2c-.25-.084-.606-.07-1.318.276Zm-.655-1.35c.826-.4 1.64-.624 2.457-.345.272.093.534.226.769.391.706.497 1.005 1.28 1.167 2.18.159.884.213 2.056.281 3.516l.003.058c.052 1.115.088 2.088.088 2.64s-.036 1.525-.088 2.64l-.003.058c-.068 1.46-.122 2.632-.281 3.516-.162.9-.461 1.683-1.167 2.18a3.066 3.066 0 0 1-.769.39c-.818.28-1.631.057-2.457-.345-.814-.395-1.8-1.046-3.032-1.857l-.267-.176c-.447-.295-.602-.394-.76-.464-.171-.076-.35-.13-.535-.16-.171-.03-.354-.032-.89-.032h-.162c-1.217 0-2.062.001-2.814-.347a3.962 3.962 0 0 1-1.727-1.624c-.392-.729-.438-1.49-.504-2.575l-.008-.13A17.876 17.876 0 0 1 .75 12c0-.341.014-.706.036-1.074l.008-.13C.86 9.712.906 8.95 1.298 8.22a3.962 3.962 0 0 1 1.727-1.624c.752-.348 1.597-.348 2.814-.347H6c.537 0 .72-.002.891-.031a2.25 2.25 0 0 0 .534-.16c.16-.07.314-.17.761-.465l.267-.176c1.231-.811 2.218-1.462 3.032-1.857Zm8.035 1.864a.75.75 0 0 1 1.056.096L20 6l.576-.48.001.001.002.002.003.004.007.009a2.395 2.395 0 0 1 .086.114 4.7 4.7 0 0 1 .203.311c.161.27.368.665.572 1.195.408 1.061.8 2.653.8 4.844 0 2.192-.392 3.783-.8 4.845a7.7 7.7 0 0 1-.572 1.194 4.677 4.677 0 0 1-.268.399l-.013.017-.008.01-.007.009-.003.003-.002.002L20 18l.576.48a.75.75 0 0 1-1.156-.955m0 0 .003-.005.031-.041a3.28 3.28 0 0 0 .137-.212c.12-.198.288-.516.459-.961.342-.889.7-2.297.7-4.306 0-2.008-.358-3.417-.7-4.306a6.212 6.212 0 0 0-.459-.961 3.274 3.274 0 0 0-.171-.257l.003.004-.001-.002-.002-.002a.75.75 0 0 1 .1-1.052m-1.884 2.92a.75.75 0 0 1 1.02.292l-.628.349.628-.349v.001l.001.002.002.003.004.007.01.018.026.054c.02.043.046.1.075.174.06.147.132.356.203.631.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474c-.071.275-.144.484-.203.631a2.947 2.947 0 0 1-.102.228l-.01.019-.003.007-.002.003v.001s-.001.002-.63-.347l.629.348a.75.75 0 0 1-1.317-.719l.005-.01a3.665 3.665 0 0 0 .18-.534c.108-.424.226-1.11.226-2.1s-.118-1.678-.227-2.102a3.662 3.662 0 0 0-.179-.534l-.005-.01a.75.75 0 0 1 .297-1.01Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.003 11.716c.037-1.843.056-2.764.668-3.552.112-.144.276-.315.413-.431.752-.636 1.746-.636 3.733-.636.71 0 1.065 0 1.403-.092.07-.02.14-.042.209-.067.33-.121.627-.33 1.22-.746 2.338-1.645 3.508-2.467 4.489-2.11.188.069.37.168.533.29.848.635.913 2.115 1.042 5.073.048 1.096.08 2.034.08 2.555 0 .521-.032 1.46-.08 2.555-.13 2.958-.194 4.438-1.042 5.073-.163.122-.345.221-.533.29-.982.357-2.15-.465-4.49-2.11-.592-.416-.889-.625-1.22-.746a2.61 2.61 0 0 0-.208-.067c-.338-.092-.693-.092-1.403-.092-1.987 0-2.98 0-3.733-.636a3.145 3.145 0 0 1-.413-.43c-.612-.79-.63-1.71-.668-3.553a14.06 14.06 0 0 1 0-.569Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19.49 5.552a.66.66 0 0 1 .97.094l-.529.471.53-.47.002.002.003.004.007.009a2.572 2.572 0 0 1 .079.112c.047.071.111.173.186.305.149.264.339.652.526 1.171C21.64 8.291 22 9.851 22 12c0 2.15-.36 3.71-.736 4.75-.187.52-.377.907-.526 1.172a4.655 4.655 0 0 1-.265.417l-.007.009-.003.003-.001.002s-.001.001-.531-.47l.53.471a.66.66 0 0 1-.971.094.77.77 0 0 1-.09-1.035l.03-.041c.026-.04.07-.11.125-.207a6.28 6.28 0 0 0 .422-.943c.314-.871.644-2.253.644-4.222 0-1.97-.33-3.35-.644-4.222a6.28 6.28 0 0 0-.422-.942 3.152 3.152 0 0 0-.157-.253M17.757 8.416c.333-.197.753-.07.938.286l-.603.357.603-.357.001.002.002.003.003.007.01.018.024.053c.018.042.042.099.07.17.053.145.12.35.185.62.13.54.252 1.337.252 2.425 0 1.089-.122 1.886-.252 2.426-.065.27-.132.475-.186.619a3.04 3.04 0 0 1-.094.223l-.009.018-.003.007-.002.003v.002s-.001.001-.604-.356l.603.357c-.185.355-.605.483-.938.286-.33-.196-.45-.638-.272-.991l.004-.01.035-.085c.032-.086.08-.23.13-.438.1-.416.208-1.09.208-2.06 0-.971-.108-1.645-.208-2.06a3.757 3.757 0 0 0-.165-.524l-.004-.01c-.179-.354-.058-.795.272-.991Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.003 11.716c.037-1.843.056-2.764.668-3.552.112-.144.276-.315.413-.431.752-.636 1.746-.636 3.733-.636.71 0 1.065 0 1.403-.092.07-.02.14-.042.209-.067.33-.121.627-.33 1.22-.746 2.338-1.645 3.508-2.467 4.489-2.11.188.069.37.168.533.29.848.635.913 2.115 1.042 5.073.048 1.096.08 2.034.08 2.555 0 .521-.032 1.46-.08 2.555-.13 2.958-.194 4.438-1.042 5.073-.163.122-.345.221-.533.29-.982.357-2.15-.465-4.49-2.11-.592-.416-.889-.625-1.22-.746a2.61 2.61 0 0 0-.208-.067c-.338-.092-.693-.092-1.403-.092-1.987 0-2.98 0-3.733-.636a3.145 3.145 0 0 1-.413-.43c-.612-.79-.63-1.71-.668-3.553a14.06 14.06 0 0 1 0-.569Z" fill="currentColor" /><path opacity={0.4} fillRule="evenodd" clipRule="evenodd" d="M19.49 5.552a.66.66 0 0 1 .97.094l-.53.471.53-.47h.002v.002l.004.004.007.009a2.572 2.572 0 0 1 .078.112 4.6 4.6 0 0 1 .187.305c.149.265.339.652.526 1.171C21.64 8.291 22 9.851 22 12c0 2.15-.36 3.71-.736 4.75-.187.52-.377.907-.526 1.172a4.605 4.605 0 0 1-.265.417l-.007.009-.003.003-.001.002s-.001.001-.531-.47l.53.471a.66.66 0 0 1-.972.094.77.77 0 0 1-.091-1.03l.003-.005.028-.04a3.2 3.2 0 0 0 .126-.208c.11-.195.264-.506.422-.943.314-.871.643-2.252.643-4.222 0-1.969-.329-3.35-.643-4.222a6.268 6.268 0 0 0-.422-.942 3.208 3.208 0 0 0-.126-.207l-.028-.041-.003-.004" fill="currentColor" /><path opacity={0.7} fillRule="evenodd" clipRule="evenodd" d="M17.757 8.416c.333-.197.753-.07.938.286l-.603.357.603-.357.001.002.002.003.003.007.01.018.024.053c.018.042.042.099.07.17.053.145.12.35.185.62.13.54.252 1.337.252 2.425 0 1.089-.122 1.886-.252 2.426-.065.27-.132.475-.186.619a3.036 3.036 0 0 1-.094.223l-.009.018-.003.007-.002.003v.002s-.001.001-.604-.356l.603.357c-.185.355-.605.483-.938.286-.33-.196-.45-.638-.272-.991l.004-.01a3.774 3.774 0 0 0 .165-.523c.1-.416.208-1.09.208-2.06 0-.971-.108-1.645-.208-2.061a3.772 3.772 0 0 0-.165-.523l-.004-.01c-.179-.354-.058-.796.272-.991Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default VolumeLoud