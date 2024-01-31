import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const LetterOpened = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14c0-3.771 0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102m12 0c1.3.127 2.175.416 2.828 1.07.654.653.943 1.528 1.07 2.828M10 6h4M11 9h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 2.002c1.707.014 2.647.11 3.268.73.732.732.732 1.91.732 4.267v2.064c0 .46 0 .69-.094.892-.095.202-.272.35-.626.644l-.72.6M10 2.002c-1.707.014-2.647.11-3.268.73C6 3.464 6 4.642 6 6.999v2.064c0 .46 0 .69.094.892.095.202.272.35.626.644l1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295.65 0 1.239-.273 2-.82" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M18 6.102c1.3.127 2.175.416 2.828 1.07C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14c0-3.771 0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102" stroke="currentColor" strokeWidth={1.5} /><path d="M10 6h4M11 9h2M8.159 11.8l-.72-.6c-.707-.59-1.061-.885-1.25-1.288C6 9.508 6 9.048 6 8.126V7c0-2.357 0-3.536.732-4.268C7.464 2 8.643 2 11 2h2c2.357 0 3.535 0 4.268.732C18 3.464 18 4.643 18 7v1.127c0 .92 0 1.381-.189 1.785-.189.403-.543.698-1.25 1.287l-.72.6c-1.836 1.53-2.755 2.296-3.841 2.296-1.086 0-2.004-.765-3.841-2.296Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m6 10 2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295 1.086 0 2.005-.765 3.841-2.296L18 10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 6.102c1.3.127 2.175.416 2.828 1.07C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14c0-3.771 0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102" stroke="currentColor" strokeWidth={1.5} /><path d="M10 6h4M11 9h2M8.159 11.8l-.72-.6c-.707-.59-1.061-.885-1.25-1.288C6 9.508 6 9.048 6 8.126V7c0-2.357 0-3.536.732-4.268C7.464 2 8.643 2 11 2h2c2.357 0 3.535 0 4.268.732C18 3.464 18 4.643 18 7v1.127c0 .92 0 1.381-.189 1.785-.189.403-.543.698-1.25 1.287l-.72.6c-1.836 1.53-2.755 2.296-3.841 2.296-1.086 0-2.004-.765-3.841-2.296Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m6 10 2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295 1.086 0 2.005-.765 3.841-2.296L18 10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.946 1.25h2.108c1.133 0 2.058 0 2.79.098.763.103 1.425.325 1.954.854.529.529.751 1.19.854 1.955.05.376.075.803.087 1.283 1.058.17 1.925.507 2.62 1.201.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v.113c0 1.837 0 3.293-.153 4.432-.158 1.173-.49 2.122-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.748-1.08-1.697-1.238-2.87-.153-1.139-.153-2.595-.153-4.432v-.113c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.695-.694 1.562-1.03 2.62-1.2.012-.481.037-.908.087-1.284.103-.764.325-1.426.854-1.955.529-.529 1.19-.751 1.955-.854.73-.098 1.656-.098 2.79-.098ZM5.25 6.966c-.731.147-1.194.382-1.548.736-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.29 0 1.906.002 3.26.14 4.288.135 1.006.389 1.586.812 2.01.423.422 1.003.676 2.009.811 1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.001 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289 0-1.907-.002-3.261-.14-4.289-.135-1.006-.389-1.586-.812-2.009-.354-.354-.817-.59-1.548-.736v1.297c0 .786.002 1.409-.26 1.967-.26.557-.74.955-1.344 1.458l-.105.088-.757.63c-.887.74-1.605 1.338-2.24 1.746-.66.425-1.303.693-2.044.693-.741 0-1.384-.269-2.045-.693-.634-.408-1.352-1.007-2.239-1.745l-.757-.631c-.035-.03-.07-.06-.105-.088-.604-.503-1.083-.9-1.344-1.458-.262-.558-.26-1.18-.26-1.967V6.967Zm3.107-4.131c-.598.08-.89.224-1.094.428-.204.203-.348.496-.428 1.094C6.752 4.976 6.75 5.8 6.75 7v1.127c0 .99.017 1.25.118 1.466.101.217.29.396 1.051 1.03l.72.6c.933.777 1.58 1.315 2.128 1.667.529.34.888.455 1.233.455.345 0 .704-.114 1.233-.455.547-.352 1.195-.89 2.128-1.667l.72-.6c.761-.634.95-.813 1.051-1.03.101-.216.118-.475.118-1.466V7c0-1.2-.002-2.024-.085-2.643-.08-.598-.224-.89-.428-1.094-.203-.204-.496-.348-1.094-.428C15.024 2.752 14.2 2.75 13 2.75h-2c-1.2 0-2.024.002-2.643.085ZM9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6Zm1 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 22h4c3.771 0 5.657 0 6.828-1.171C22 19.657 22 17.77 22 14s0-5.657-1.172-6.828c-.362-.363-.794-.613-1.328-.786v2.773c.003.34.009.911-.236 1.433-.244.522-.686.884-.95 1.1-.026.02-.051.041-.073.06l-1.507 1.255c-.86.718-1.61 1.342-2.284 1.776-.725.466-1.51.812-2.45.812-.94 0-1.724-.346-2.45-.813-.674-.433-1.423-1.057-2.284-1.774l-1.507-1.256a13.705 13.705 0 0 0-.073-.06c-.264-.216-.705-.578-.95-1.1-.244-.522-.24-1.093-.237-1.433l.001-.096V6.385c-.534.173-.966.424-1.328.787C2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.829C4.343 22 6.229 22 10 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="m6.72 10.6 1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295 1.086 0 2.005-.765 3.841-2.296l1.44-1.2c.353-.294.53-.442.625-.643.094-.202.094-.432.094-.893V7c0-.32 0-.62-.002-.898-.012-1.771-.098-2.737-.73-3.37C16.536 2 15.358 2 13 2h-2c-2.357 0-3.535 0-4.268.732-.632.633-.72 1.599-.732 3.37-.002.279 0 .577 0 .898v2.063c0 .46 0 .691.095.893.094.201.27.349.625.644ZM9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6Zm1 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m6.72 10.6 1.439 1.2c1.836 1.53 2.755 2.295 3.84 2.295 1.087 0 2.005-.765 3.842-2.296l1.44-1.2c.353-.294.53-.442.624-.643.095-.202.095-.432.095-.893V7c0-.32 0-.62-.002-.898-.012-1.771-.098-2.737-.73-3.37C16.535 2 15.357 2 13 2h-2c-2.357 0-3.536 0-4.268.732-.633.633-.72 1.599-.732 3.37-.002.279 0 .577 0 .898v2.063c0 .46 0 .691.094.893.095.201.272.349.625.644ZM9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6Zm1 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path opacity={0.5} d="m8.159 11.8-1.44-1.2c-.353-.295-.53-.442-.625-.644C6 9.754 6 9.524 6 9.064V6.102c-1.3.128-2.175.417-2.828 1.07C2 8.343 2 10.23 2 14.002c0 3.77 0 5.656 1.172 6.827 1.171 1.172 3.057 1.172 6.828 1.172h4c3.771 0 5.657 0 6.828-1.172C22 19.659 22 17.773 22 14.002c0-3.771 0-5.658-1.172-6.83-.653-.653-1.529-.942-2.83-1.07.002.28.002.579.002.9v2.063c0 .46 0 .69-.095.892-.094.202-.27.35-.625.644l-1.44 1.2c-1.836 1.53-2.754 2.295-3.84 2.295-1.086 0-2.005-.765-3.841-2.296Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default LetterOpened