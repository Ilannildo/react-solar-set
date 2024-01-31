import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BookMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" stroke="#1C274D" strokeWidth={1.5} /><path d="M7 16V2.5M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z" stroke="#1C274D" strokeWidth={1.5} /><path opacity={0.5} d="m6.121 16.102-.194-.724.194.724ZM3.276 18.03a.75.75 0 0 0 1.448.389l-1.448-.389ZM6.25 16a.75.75 0 0 0 1.5 0h-1.5Zm1.5-13.5a.75.75 0 0 0-1.5 0h1.5Zm.148 14.25h12v-1.5h-12v1.5Zm0-1.5c-.882 0-1.47-.006-1.97.128l.387 1.449c.263-.07.605-.077 1.583-.077v-1.5Zm-1.97.128a3.75 3.75 0 0 0-2.652 2.651l1.448.389a2.25 2.25 0 0 1 1.591-1.591l-.388-1.45ZM7.75 16V2.5h-1.5V16h1.5Z" fill="#1C274D" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z" stroke="#1C274D" strokeWidth={1.5} /><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" stroke="#1C274D" strokeWidth={1.5} /><path d="M7 16V2.5" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.945 1.25h4.11c1.368 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337-.121.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.601-.602-.86-1.36-.981-2.26a11.487 11.487 0 0 1-.082-.943.746.746 0 0 1-.016-.392 65.809 65.809 0 0 1-.019-2.002v-8.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.982-2.26.601-.602 1.36-.86 2.26-.981.866-.117 1.969-.117 3.336-.117Zm-5.168 17c.015.353.039.664.076.942.099.734.28 1.122.556 1.399.277.277.666.457 1.4.556.755.101 1.756.103 3.191.103h4c1.436 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.4-.556.276-.277.456-.665.555-1.4.083-.615.1-1.395.102-2.441H7.898c-.978 0-1.32.006-1.582.077a2.25 2.25 0 0 0-1.54 1.422Zm14.473-3V8c0-1.435-.001-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.399-.556-.755-.101-1.756-.103-3.192-.103h-4c-.908 0-1.642 0-2.25.027V15.25h11.5Zm-13 .061c-.112.017-.22.04-.323.067a3.748 3.748 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.197-.196.45-.344.841-.449v12.351Z" fill="#1C274D" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.655 2.227c-.433.113-.711.273-.928.485-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.172 4.172 0 0 1 1.299-.593 3.29 3.29 0 0 1 .356-.072V2.227ZM7.31 15.514H20V7.676c0-1.552-.002-2.634-.114-3.451-.109-.793-.308-1.213-.613-1.513-.306-.299-.734-.494-1.544-.6-.834-.11-1.938-.112-3.522-.112H9.793c-1.002 0-1.812 0-2.483.029v13.485ZM7.473 17.135c-1.079 0-1.456.007-1.746.083a2.464 2.464 0 0 0-1.697 1.538c.016.382.043.719.084 1.019.109.793.308 1.213.613 1.513.306.299.734.494 1.544.6.834.11 1.938.112 3.522.112h4.414c1.584 0 2.688-.002 3.522-.111.81-.107 1.238-.302 1.544-.601.305-.3.504-.72.613-1.513.092-.666.11-1.51.113-2.64H7.473Z" fill="#1C274D" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17-.11.653-.31.998-.616 1.244-.307.246-.737.407-1.55.494-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092-.813-.087-1.243-.248-1.55-.494-.306-.246-.506-.591-.616-1.243a5.233 5.233 0 0 1-.022-.151c-.04-.291-.06-.437.066-.78.127-.344.181-.397.291-.505.326-.32.772-.556 1.285-.667.29-.062.67-.068 1.753-.068Z" fill="#1C274D" /><path opacity={0.5} d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115.81.11 1.238.31 1.544.618.305.308.504.74.613 1.557.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068-.513.11-.96.347-1.285.667-.11.108-.164.161-.291.505A1.273 1.273 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552.109-.816.308-1.249.613-1.557Z" fill="#1C274D" /><path d="M7.31 16.23H20V7.977c0-1.634-.002-2.774-.114-3.634-.109-.835-.308-1.278-.613-1.593-.306-.315-.734-.52-1.544-.633C16.895 2.002 15.791 2 14.207 2H9.793c-1.002 0-1.812 0-2.483.03v14.2ZM5.655 2.24c-.433.119-.711.287-.928.51-.305.316-.504.758-.613 1.593-.112.86-.114 2-.114 3.634V17c.389-.28.827-.494 1.299-.624a3.17 3.17 0 0 1 .356-.076V2.24Z" fill="#1C274D" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BookMinimalistic