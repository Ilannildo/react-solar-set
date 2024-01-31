import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ScreenShare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 16c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-1c-2.828 0-4.243 0-5.121-.879C8 20.243 8 18.828 8 16V8c0-2.828 0-4.243.879-5.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v4M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5V14m5-9.5c-2.357 0-3.536 0-4.268.732C3 5.964 3 7.143 3 9.5v.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14.5 16V8m0 0 2.5 2.5M14.5 8 12 10.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 8c0-2.828 0-4.243.879-5.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-1c-2.828 0-4.243 0-5.121-.879C8 20.243 8 18.828 8 16V8Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268C4.464 4.5 5.643 4.5 8 4.5" stroke="currentColor" strokeWidth={1.5} /><path d="M14.5 16V8m0 0 2.5 2.5M14.5 8 12 10.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 8c0-2.828 0-4.243.879-5.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-1c-2.828 0-4.243 0-5.121-.879C8 20.243 8 18.828 8 16V8ZM8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268C4.464 4.5 5.643 4.5 8 4.5" stroke="currentColor" strokeWidth={1.5} /><path d="M14.5 16V8m0 0 2.5 2.5M14.5 8 12 10.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.03 7.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V16a.75.75 0 0 0 1.5 0V9.81l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.945 1.25h1.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-1.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.4-.4-.648-.869-.805-1.402-.951-.001-1.744-.012-2.386-.098-.764-.103-1.426-.325-1.955-.854-.529-.529-.751-1.19-.854-1.955-.098-.73-.098-1.656-.098-2.79V9.447c0-1.133 0-2.058.098-2.79.103-.763.325-1.425.854-1.954.529-.529 1.19-.751 1.955-.854.642-.086 1.435-.097 2.386-.098.157-.533.406-1.002.805-1.402.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117ZM7.25 16.055c0 1.05 0 1.943.053 2.694-.835-.003-1.455-.018-1.946-.084-.598-.08-.89-.224-1.094-.428-.204-.203-.348-.496-.428-1.094-.083-.619-.085-1.443-.085-2.643v-5c0-1.2.002-2.024.085-2.643.08-.598.224-.89.428-1.094.203-.204.496-.348 1.094-.428.491-.066 1.111-.08 1.946-.084C7.25 6 7.25 6.895 7.25 7.945v8.11Zm3.558-13.202c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4C8.752 5.562 8.75 6.564 8.75 8v8c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.755.101 1.756.103 3.191.103h1c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103h-1c-1.435 0-2.437.002-3.192.103Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.623 4.508c-1.471.027-2.318.151-2.89.725C3 5.965 3 7.143 3 9.5v5c0 2.357 0 3.536.732 4.268.573.573 1.42.698 2.891.725-.123-.918-.123-2.064-.123-3.394V7.902c0-1.33 0-2.477.123-3.394Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.879 2.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879Zm6.151 4.59a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.061l1.22-1.22V16a.75.75 0 0 0 1.5 0V9.81l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M8.141 4.5C8 5.343 8 6.462 8 8v8c0 1.538 0 2.657.141 3.5H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268C4.464 4.5 5.643 4.5 8 4.5h.141Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.879 2.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879Zm6.151 4.59a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.061l1.22-1.22V16a.75.75 0 0 0 1.5 0V9.81l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ScreenShare