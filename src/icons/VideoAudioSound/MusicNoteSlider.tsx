import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MusicNoteSlider = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.998 17c-.012 2.175-.108 3.353-.877 4.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891A2.5 2.5 0 0 0 19.89 4.53C19.697 4.5 19.465 4.5 19 4.5" stroke="currentColor" strokeWidth={1.5} /><path d="M13 14V8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={11} cy={14} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M15 10a2 2 0 0 1-2-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5 19.5c-.465 0-.697 0-.891-.03A2.5 2.5 0 0 1 2.03 17.39C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53C4.303 4.5 4.535 4.5 5 4.5" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891A2.5 2.5 0 0 0 19.89 4.53C19.697 4.5 19.465 4.5 19 4.5" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M13 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0V8a2 2 0 0 0 2 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M5 19.5c-.465 0-.697 0-.891-.03A2.5 2.5 0 0 1 2.03 17.39C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53C4.303 4.5 4.535 4.5 5 4.5" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8ZM19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891A2.5 2.5 0 0 0 19.89 4.53C19.697 4.5 19.465 4.5 19 4.5" stroke="currentColor" strokeWidth={1.5} /><path d="M13 14V8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={11} cy={14} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M15 10a2 2 0 0 1-2-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5 19.5c-.465 0-.697 0-.891-.03A2.5 2.5 0 0 1 2.03 17.39C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53C4.303 4.5 4.535 4.5 5 4.5" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.945 1.25h2.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.4.4.648.87.806 1.404.211.003.388.012.55.038a3.25 3.25 0 0 1 2.702 2.702c.04.253.04.542.04.943V16.565c0 .401 0 .69-.04.943a3.25 3.25 0 0 1-2.702 2.702c-.162.026-.339.035-.55.038-.158.534-.406 1.003-.806 1.404-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.4-.4-.648-.87-.806-1.404a3.922 3.922 0 0 1-.55-.038 3.25 3.25 0 0 1-2.702-2.702c-.04-.253-.04-.542-.04-.943V7.435c0-.401 0-.69.04-.943A3.25 3.25 0 0 1 3.992 3.79c.162-.026.339-.035.55-.038.158-.534.406-1.003.806-1.404.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117ZM4.302 5.262a1.75 1.75 0 0 0-1.53 1.464c-.02.122-.022.28-.022.774v9c0 .493.002.652.022.774a1.75 1.75 0 0 0 1.53 1.464c-.052-.749-.052-1.639-.052-2.683v-8.11c0-1.044 0-1.934.052-2.683Zm15.396 13.476.076-.01a1.75 1.75 0 0 0 1.454-1.454c.02-.122.022-.28.022-.774v-9c0-.493-.002-.652-.021-.774a1.75 1.75 0 0 0-1.53-1.464c.051.749.051 1.639.051 2.683v8.11c0 1.044 0 1.934-.052 2.683ZM7.808 2.853c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4C5.752 5.562 5.75 6.564 5.75 8v8c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103Zm5.942 7.597V14a2.75 2.75 0 1 1-1.5-2.45v-2.8A.75.75 0 0 1 13 8c.414 0 .734.364.968.706.225.328.604.544 1.032.544a.75.75 0 0 1 0 1.5c-.45 0-.875-.108-1.25-.3ZM11 12.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.419 8c0-2.828 0-4.243.817-5.121C8.053 2 9.369 2 12 2c2.631 0 3.947 0 4.764.879.817.878.817 2.293.817 5.121v8c0 2.828 0 4.243-.817 5.121C15.947 22 14.631 22 12 22c-2.631 0-3.947 0-4.764-.879-.817-.878-.817-2.293-.817-5.121V8Zm7.331 0a.75.75 0 0 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25Z" fill="currentColor" /><path d="M5.023 7.901V16.1c0 .982 0 1.865.046 2.629.017.27.039.524.069.764.013.107.029.214.046.32.036.217-.131.42-.35.401-.43-.037-.82-.118-1.183-.317a3.146 3.146 0 0 1-1.321-1.42c-.186-.391-.26-.81-.296-1.273C2 16.756 2 16.205 2 15.531V8.47c0-.674 0-1.224.034-1.672.035-.463.11-.882.296-1.272a3.146 3.146 0 0 1 1.32-1.42c.364-.2.753-.28 1.184-.318.219-.02.386.184.35.4a8.396 8.396 0 0 0-.046.321c-.03.24-.052.495-.069.764-.046.764-.046 1.646-.046 2.63ZM18.977 7.901V16.1c0 .982 0 1.865-.047 2.629-.016.27-.038.524-.068.764a8.313 8.313 0 0 1-.046.32c-.036.217.131.42.35.401.43-.037.82-.118 1.183-.317a3.147 3.147 0 0 0 1.322-1.42c.185-.391.26-.81.295-1.273.034-.447.034-.998.034-1.671V8.468c0-.674 0-1.225-.034-1.672-.035-.463-.11-.882-.296-1.272a3.147 3.147 0 0 0-1.32-1.42c-.364-.2-.753-.28-1.184-.318-.219-.02-.386.184-.35.4a11.992 11.992 0 0 1 .115 1.085c.046.764.046 1.646.046 2.63Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g opacity={0.5} fill="currentColor"><path d="M6.724 3.762H5.268a8.29 8.29 0 0 0-.434.025c-.43.038-.82.119-1.183.318a3.146 3.146 0 0 0-1.321 1.42c-.186.39-.26.809-.296 1.272C2 7.245 2 7.796 2 8.47v7.063c0 .673 0 1.224.034 1.671.035.464.11.882.296 1.273.29.611.752 1.108 1.32 1.42.364.2.753.28 1.184.318.135.012.279.02.434.025h1.456C6.42 19.341 6.42 18.037 6.42 16V8c0-2.037 0-3.34.305-4.238ZM17.276 20.239c.306-.898.306-2.202.306-4.239V8c0-2.037 0-3.34-.305-4.238h1.455c.155.005.3.013.434.025.43.038.82.119 1.183.318a3.147 3.147 0 0 1 1.322 1.42c.185.39.26.809.295 1.272.034.448.034.999.034 1.672v7.063c0 .673 0 1.224-.034 1.671-.035.464-.11.882-.296 1.273a3.146 3.146 0 0 1-1.32 1.42c-.364.2-.753.28-1.184.318a8.28 8.28 0 0 1-.434.025h-1.456Z" /></g><path d="M11 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.419 8c0-2.828 0-4.243.817-5.121C8.054 2 9.37 2 12 2c2.631 0 3.947 0 4.764.879.818.878.818 2.293.818 5.121v8c0 2.828 0 4.243-.818 5.121C15.947 22 14.631 22 12 22c-2.63 0-3.946 0-4.764-.879-.817-.878-.817-2.293-.817-5.121V8Zm7.331 0a.75.75 0 1 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 1 0 0-1.5c-.69 0-1.25-.56-1.25-1.25Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MusicNoteSlider