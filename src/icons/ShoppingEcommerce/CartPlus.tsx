import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CartPlus = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" stroke="currentColor" strokeWidth={1.5} /><path d="M13 13v-2m0 0V9m0 2h2m-2 0h-2M2 3l.261.092c1.302.457 1.953.686 2.325 1.231.372.545.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" stroke="currentColor" strokeWidth={1.5} /><path d="m2.261 3.092.249-.708-.249.708Zm-.012-.8a.75.75 0 1 0-.498 1.416l.498-1.416Zm2.337 2.031.62-.423-.62.423Zm1.302 10.263-.545.516.545-.516Zm14.77-4.703.734.151.001-.004-.735-.147Zm-.5 2.425.735.15-.735-.15Zm.576-5.61-.594.456.595-.457Zm-1.6 8.352-.474-.581.474.581ZM5.708 9.76V7.038h-1.5V9.76h1.5ZM2.51 2.384l-.261-.092-.498 1.416.261.091.498-1.415Zm8.428 13.866h5.302v-1.5h-5.302v1.5Zm-5.23-9.212c0-.707.001-1.297-.05-1.776-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677.041.38.042.875.042 1.615h1.5ZM2.012 3.8c.668.235 1.107.39 1.43.55.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899-.42-.206-.958-.394-1.592-.617L2.012 3.8ZM4.208 9.76c0 1.453.014 2.5.15 3.3.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263-.11-.65-.129-1.558-.129-3.047h-1.5Zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026.87.124 1.98.122 3.351.122v-1.5Zm-5.98-7.88h12.13v-1.5H4.959v1.5Zm14.965 2.861-.5 2.425 1.47.303.5-2.425-1.47-.303ZM17.09 6.87c.856 0 1.61.001 2.205.067.295.034.517.08.672.134.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.616 4.616 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076v1.5Zm4.304 3.16c.17-.848.313-1.56.348-2.13.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654-.027.444-.144 1.037-.322 1.928l1.471.294Zm-5.153 6.22c.762 0 1.401.001 1.917-.062.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23-.403.05-.934.051-1.734.051v1.5Zm3.184-4.094c-.162.783-.27 1.303-.4 1.688-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309.166-.492.294-1.118.448-1.864l-1.47-.303Z" fill="currentColor" /><path opacity={0.5} d="M13 13v-2m0 0V9m0 2h2m-2 0h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" stroke="currentColor" strokeWidth={1.5} /><path d="m2.261 3.092.249-.708-.249.708Zm-.012-.8a.75.75 0 1 0-.498 1.416l.498-1.416Zm2.337 2.031.62-.423-.62.423Zm1.302 10.263-.545.516.545-.516Zm14.77-4.703.734.151.001-.004-.735-.147Zm-.5 2.425.735.15-.735-.15Zm.576-5.61-.594.456.595-.457Zm-1.6 8.352-.474-.581.474.581ZM5.708 9.76V7.038h-1.5V9.76h1.5ZM2.51 2.384l-.261-.092-.498 1.416.261.091.498-1.415Zm8.428 13.866h5.302v-1.5h-5.302v1.5Zm-5.23-9.212c0-.707.001-1.297-.05-1.776-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677.041.38.042.875.042 1.615h1.5ZM2.012 3.8c.668.235 1.107.39 1.43.55.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899-.42-.206-.958-.394-1.592-.617L2.012 3.8ZM4.208 9.76c0 1.453.014 2.5.15 3.3.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263-.11-.65-.129-1.558-.129-3.047h-1.5Zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026.87.124 1.98.122 3.351.122v-1.5Zm-5.98-7.88h12.13v-1.5H4.959v1.5Zm14.965 2.861-.5 2.425 1.47.303.5-2.425-1.47-.303ZM17.09 6.87c.856 0 1.61.001 2.205.067.295.034.517.08.672.134.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.616 4.616 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076v1.5Zm4.304 3.16c.17-.848.313-1.56.348-2.13.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654-.027.444-.144 1.037-.322 1.928l1.471.294Zm-5.153 6.22c.762 0 1.401.001 1.917-.062.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23-.403.05-.934.051-1.734.051v1.5Zm3.184-4.094c-.162.783-.27 1.303-.4 1.688-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309.166-.492.294-1.118.448-1.864l-1.47-.303Z" fill="currentColor" /><path d="M13 13v-2m0 0V9m0 2h2m-2 0h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.75 9a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25V9Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M1.293 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603.44.217.818.483 1.102.899.282.412.399.865.452 1.362l.011.108H17.12c.819 0 1.653 0 2.34.077.35.039.697.101 1.003.209.3.105.631.278.866.584.382.496.449 1.074.413 1.66-.035.558-.173 1.252-.338 2.077l-.01.053-.002.004-.508 2.47c-.15.726-.276 1.337-.439 1.82-.172.51-.41.96-.837 1.308-.427.347-.916.49-1.451.556-.505.062-1.13.062-1.87.062H10.88c-1.345 0-2.435 0-3.293-.122-.897-.127-1.65-.4-2.243-1.026-.547-.576-.839-1.188-.985-2.042-.137-.8-.15-1.848-.15-3.3V7.038c0-.74-.002-1.235-.043-1.615-.04-.363-.109-.545-.2-.677-.087-.129-.22-.25-.524-.398-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957ZM5.708 6.87v2.89c0 1.489.018 2.398.13 3.047.101.595.274.925.594 1.263.273.288.65.472 1.365.573.74.105 1.724.107 3.14.107h5.304c.799 0 1.33-.001 1.734-.05.382-.047.56-.129.685-.231.125-.102.24-.26.364-.625.13-.385.238-.905.4-1.688l.498-2.42v-.002c.178-.89.295-1.482.322-1.926.026-.421-.04-.569-.101-.65a.561.561 0 0 0-.177-.087 3.17 3.17 0 0 0-.672-.134c-.595-.066-1.349-.067-2.205-.067H5.709ZM5.25 19.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Zm2.25.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM14.25 19.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Zm2.25.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549.303.149.436.27.524.398.09.132.16.314.2.677.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9.033 9.033 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362-.284-.416-.662-.682-1.103-.899-.412-.202-.936-.386-1.552-.603l-.302-.106ZM13 8.25a.75.75 0 0 1 .75.75v1.25H15a.75.75 0 0 1 0 1.5h-1.25V13a.75.75 0 0 1-1.5 0v-1.25H11a.75.75 0 0 1 0-1.5h1.25V9a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="currentColor" /><path opacity={0.5} d="M2.084 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603.44.217.818.483 1.102.899.282.412.399.865.452 1.362.024.222.037.468.044.738H17.13c1.685 0 3.202 0 3.646.577.444.577.27 1.447-.077 3.186l-.5 2.425c-.315 1.528-.472 2.293-1.024 2.742-.552.45-1.332.45-2.893.45h-5.303c-2.79 0-4.184 0-5.05-.914-.866-.914-.93-1.884-.93-4.826V7.038c0-.74 0-1.235-.042-1.615-.04-.363-.109-.545-.2-.677-.087-.129-.22-.25-.524-.398-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957Z" fill="currentColor" /><path d="M13.75 9a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25V9Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CartPlus