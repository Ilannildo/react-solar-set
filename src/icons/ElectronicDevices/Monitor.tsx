import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Monitor = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 2.252c-.774.169-1.359.45-1.828.92C2 4.343 2 6.229 2 10v1c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11v-1c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2H9M16 22H8M12 17v5M22 13h-6M2 13h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M16 22H8m4-5v5M22 13H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1Z" stroke="currentColor" strokeWidth={1.5} /><path d="M16 22H8M12 17v5M22 13H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v1.11c0 .663 0 1.264-.013 1.805a.751.751 0 0 1-.01.327c-.017.444-.045.845-.093 1.206-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116H12.75v3.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-3.5H7.945c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.049-.36-.077-.762-.094-1.206a.751.751 0 0 1-.01-.327c-.013-.541-.013-1.142-.013-1.804V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm-7.137 12.5c.012.156.028.303.046.442.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4a8.31 8.31 0 0 0 .046-.441H2.807Zm18.44-1.5H2.753c-.004-.376-.004-.791-.004-1.25v-1c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289v1c0 .459 0 .874-.004 1.25Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 17c-2.828 0-4.243 0-5.121-.879-.57-.569-.77-1.363-.84-2.621h19.923c-.07 1.258-.271 2.052-.84 2.621C20.241 17 18.827 17 16 17h-3.25v4H16a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 21h3.25v-4H8ZM10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v1c0 .552 0 1.05-.006 1.5H2.007C2 12.05 2 11.552 2 11v-1c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v1c0 .552 0 1.55-.006 2H2.007C2 12.55 2 11.552 2 11v-1c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2Z" fill="currentColor" /><path d="M7.985 17.5c-2.84 0-4.26 0-5.141-.879C2.272 16.052 2.07 15.258 2 14v-1h20v1c-.07 1.258-.272 2.052-.844 2.621-.882.879-2.301.879-5.14.879h-3.263v4h3.262c.416 0 .753.336.753.75s-.337.75-.753.75h-8.03a.751.751 0 0 1-.753-.75c0-.414.337-.75.753-.75h3.262v-4H7.985Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Monitor