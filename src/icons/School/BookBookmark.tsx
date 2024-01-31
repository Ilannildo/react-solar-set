import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BookBookmark = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" stroke="#1C274D" strokeWidth={1.5} /><path d="M8 7h8M8 10.5h5M13 16v3.53c0 .276 0 .414-.095.47-.095.056-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062-.047 0-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z" stroke="#1C274D" strokeWidth={1.5} /><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" stroke="#1C274D" strokeWidth={1.5} /><path opacity={0.5} d="M8 7h8M8 10.5h5M13 16v3.53c0 .276 0 .414-.095.47-.095.056-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062-.047 0-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z" stroke="#1C274D" strokeWidth={1.5} /><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" stroke="#1C274D" strokeWidth={1.5} /><path d="M8 7h8M8 10.5h5M13 16v3.53c0 .276 0 .414-.095.47-.095.056-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062-.047 0-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.945 1.25h4.11c1.368 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337-.121.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.601-.602-.86-1.36-.981-2.26a11.487 11.487 0 0 1-.082-.943.746.746 0 0 1-.016-.392 65.809 65.809 0 0 1-.019-2.002v-8.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.982-2.26.601-.602 1.36-.86 2.26-.981.866-.117 1.969-.117 3.336-.117Zm-5.168 17c.015.353.039.664.076.942.099.734.28 1.122.556 1.399.277.277.666.457 1.4.556.755.101 1.756.103 3.191.103h4c1.436 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.4-.556.276-.277.456-.665.555-1.4.083-.615.1-1.395.102-2.441H13.75v2.808c0 .111 0 .27-.02.406a.937.937 0 0 1-.445.683.958.958 0 0 1-.783.072c-.13-.04-.272-.109-.378-.159l-.024-.012-1.1-.522-1.1.522-.024.012c-.106.05-.248.118-.378.159a.957.957 0 0 1-.783-.072.937.937 0 0 1-.444-.683c-.021-.136-.021-.295-.02-.406V16.75h-.353c-.978 0-1.32.006-1.582.077a2.25 2.25 0 0 0-1.54 1.422Zm4.973-1.5v2.21l.75-.357.008-.004a1.13 1.13 0 0 1 .492-.13c.236 0 .443.105.492.13l.009.004.75.356V16.75h-2.5Zm-1.852-1.5h-.116c-.818 0-1.376 0-1.855.128a3.748 3.748 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.666-.457 1.4-.556.755-.101 1.756-.103 3.191-.103h4c1.436 0 2.437.002 3.192.103.734.099 1.122.28 1.4.556.276.277.456.665.555 1.4.102.754.103 1.756.103 3.191v7.25H7.898ZM7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7Zm0 3.5A.75.75 0 0 1 8 9.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" fill="#1C274D" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.271 2.112c-.81.106-1.238.301-1.544.6-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.172 4.172 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451-.109-.793-.308-1.213-.613-1.513-.306-.299-.734-.494-1.544-.6-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112Zm.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81Zm.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81.82.82 0 0 0-.828-.811H7.586Z" fill="#1C274D" /><path d="M8.69 17.135H7.473c-1.079 0-1.456.007-1.746.083a2.464 2.464 0 0 0-1.697 1.538c.016.382.043.719.084 1.019.109.793.308 1.213.613 1.513.306.299.734.494 1.544.6.834.11 1.938.112 3.522.112h4.414c1.584 0 2.688-.002 3.522-.111.81-.107 1.238-.302 1.544-.601.305-.3.504-.72.613-1.513.092-.666.11-1.51.113-2.64h-6.896v3.007c0 .298 0 .447-.104.507-.105.06-.248-.007-.534-.14l-1.371-.638c-.097-.045-.145-.067-.197-.067-.053 0-.101.022-.198.067l-1.37.638c-.287.133-.43.2-.535.14-.104-.06-.104-.21-.104-.507v-3.007Z" fill="#1C274D" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 20.028V18H8v2.028c0 .277 0 .416.095.472.095.056.224-.006.484-.13l1.242-.593c.088-.042.132-.063.179-.063.047 0 .091.02.179.063l1.242.593c.26.124.39.186.484.13.095-.056.095-.195.095-.472Z" fill="#1C274D" /><path d="M8 18h-.574c-1.084 0-1.462.006-1.753.068-.513.11-.96.347-1.285.667-.11.108-.164.161-.291.505-.127.343-.107.489-.066.78l.022.15c.11.653.31.998.616 1.244.307.246.737.407 1.55.494.837.09 1.946.092 3.536.092h4.43c1.59 0 2.7-.001 3.536-.092.813-.087 1.243-.248 1.55-.494.306-.246.506-.591.616-1.243.091-.548.11-1.241.113-2.171h-8v2.028c0 .277 0 .416-.095.472-.095.056-.224-.006-.484-.13l-1.242-.593c-.088-.042-.132-.063-.179-.063-.047 0-.091.02-.179.063l-1.242.593c-.26.124-.39.186-.484.13C8 20.444 8 20.305 8 20.028V18Z" fill="#1C274D" /><path opacity={0.5} d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115.81.11 1.238.31 1.544.618.305.308.504.74.613 1.557.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068-.513.11-.96.347-1.285.667-.11.108-.164.161-.291.505A1.273 1.273 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552.109-.816.308-1.249.613-1.557Z" fill="#1C274D" /><path d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7ZM8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H8Z" fill="#1C274D" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BookBookmark