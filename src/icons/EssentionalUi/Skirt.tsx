import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Skirt = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m2.08 17.953-.717-.217.718.217Zm19.84 0 .717-.217-.718.217ZM2.733 19.829l.386-.643-.385.643Zm18.532 0-.386-.643.386.643Zm-10.7-13.736a.75.75 0 1 0-1.489-.186l1.489.186ZM7.147 21.407a.75.75 0 0 0 1.489.186l-1.489-.186Zm7.776-15.5a.75.75 0 0 0-1.489.186l1.489-.186Zm.441 15.686a.75.75 0 0 0 1.488-.186l-1.488.186Zm4.572-12.81a.75.75 0 0 0-1.436.434l1.436-.434Zm-16.85 8.434a.75.75 0 1 0-1.436-.434l1.436.434Zm-.23-4.434a.75.75 0 1 0 1.437.434l-1.436-.434ZM7.893 2.75h8.216v-1.5H7.892v1.5ZM17.412 4v1h1.5V4h-1.5Zm.25.75H5.838v1.5h11.824v-1.5ZM6.588 5.5V4h-1.5v1.5h1.5Zm9.52-2.75c.505 0 .81.002 1.03.03a.773.773 0 0 1 .198.048l.002.002 1.047-1.074c-.314-.306-.693-.416-1.052-.463-.34-.045-.761-.043-1.225-.043v1.5ZM18.912 4c0-.45.002-.864-.044-1.2-.05-.36-.167-.736-.483-1.044L17.338 2.83h.001l.001.003.005.01a.68.68 0 0 1 .037.162c.029.21.03.502.03.995h1.5ZM7.892 1.25c-.464 0-.885-.002-1.225.043-.359.047-.738.157-1.052.463L6.662 2.83a.775.775 0 0 1 .2-.05c.22-.028.525-.03 1.03-.03v-1.5ZM6.588 4c0-.493.001-.786.03-.995a.676.676 0 0 1 .043-.174L5.616 1.755c-.316.308-.433.685-.483 1.044-.046.336-.044.75-.044 1.2h1.5Zm-4.24 16.472c1.533.92 4.649 2.278 9.652 2.278v-1.5c-4.717 0-7.567-1.276-8.88-2.064l-.771 1.286ZM12 22.75c5.003 0 8.119-1.358 9.651-2.278l-.771-1.286c-1.313.788-4.163 2.064-8.88 2.064v1.5Zm9.201-4.58c.136.45-.017.833-.321 1.016l.771 1.286c1-.6 1.282-1.755.986-2.736l-1.436.433Zm-19.838-.434c-.296.982-.014 2.136.986 2.736l.771-1.286c-.304-.183-.457-.566-.321-1.017l-1.436-.433ZM9.077 5.907l-1.93 15.5 1.489.186 1.93-15.5-1.489-.186Zm4.357.186 1.93 15.5 1.488-.186-1.93-15.5-1.488.186Zm9.203 11.643-2.7-8.953-1.437.434 2.701 8.952 1.436-.433ZM1.65 16.783l-.287.953 1.436.433.287-.952-1.436-.434Zm3.47-11.5-2.263 7.5 1.436.434 2.263-7.5-1.436-.434ZM17.412 5a.25.25 0 0 1 .25-.25v1.5c.69 0 1.25-.56 1.25-1.25h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.162 5.5h-.75v.11l.032.107.718-.217Zm-12.324 0 .718.217.032-.106V5.5h-.75ZM2.08 17.953l-.718-.217.718.217Zm19.838 0 .718-.217-.718.217ZM2.735 19.829l.385-.643-.385.643Zm18.53 0-.385-.643.386.643ZM7.893 2.75h8.216v-1.5H7.892v1.5ZM17.412 4v1.5h1.5V4h-1.5ZM6.588 5.5V4h-1.5v1.5h1.5Zm9.52-2.75c.505 0 .81.002 1.03.03a.773.773 0 0 1 .198.048l.002.002 1.047-1.074c-.314-.306-.693-.416-1.052-.463-.34-.045-.761-.043-1.225-.043v1.5ZM18.912 4c0-.45.002-.864-.044-1.2-.05-.36-.167-.736-.483-1.044L17.338 2.83h.001l.001.003.005.01a.68.68 0 0 1 .037.162c.029.21.03.502.03.995h1.5ZM7.892 1.25c-.464 0-.885-.002-1.225.043-.359.047-.738.157-1.052.463L6.662 2.83a.775.775 0 0 1 .2-.05c.22-.028.525-.03 1.03-.03v-1.5ZM6.588 4c0-.493.001-.786.03-.995a.676.676 0 0 1 .043-.174L5.616 1.755c-.316.308-.433.685-.483 1.044-.046.336-.044.75-.044 1.2h1.5ZM5.12 5.283 1.363 17.736l1.436.433L6.556 5.717 5.12 5.283Zm17.517 12.453L18.881 5.283l-1.437.434 3.757 12.453 1.436-.434ZM2.35 20.472c1.532.92 4.647 2.278 9.651 2.278v-1.5c-4.717 0-7.567-1.276-8.88-2.064l-.771 1.286ZM12 22.75c5.003 0 8.119-1.358 9.651-2.278l-.771-1.286c-1.313.788-4.163 2.064-8.88 2.064v1.5Zm9.201-4.58c.136.45-.017.833-.321 1.016l.771 1.286c1-.6 1.282-1.755.986-2.736l-1.436.433Zm-19.838-.434c-.296.982-.014 2.136.986 2.736l.771-1.286c-.304-.183-.457-.566-.321-1.017l-1.436-.433Z" fill="currentColor" /><path opacity={0.5} d="M10.566 6.093a.75.75 0 1 0-1.489-.186l1.489.186ZM7.146 21.407a.75.75 0 0 0 1.489.186l-1.489-.186Zm7.776-15.5a.75.75 0 0 0-1.489.186l1.489-.186Zm.44 15.686a.75.75 0 0 0 1.49-.186l-1.49.186ZM9.078 5.907l-1.93 15.5 1.489.186 1.93-15.5-1.489-.186Zm4.357.186 1.93 15.5 1.488-.186-1.93-15.5-1.488.186Zm4.729-1.343H5.838v1.5h12.325v-1.5Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m2.08 17.953-.717-.217.718.217Zm19.84 0 .717-.217-.718.217ZM2.733 19.829l.386-.643-.385.643Zm18.532 0-.386-.643.386.643ZM10.743 5.598a.75.75 0 0 0-1.488-.196l1.488.196ZM7.148 21.402a.75.75 0 1 0 1.487.196l-1.487-.196Zm7.596-16a.75.75 0 0 0-1.488.196l1.488-.196Zm.62 16.196a.75.75 0 0 0 1.488-.196l-1.487.196ZM7.893 2.75h8.216v-1.5H7.892v1.5ZM17.412 4v1.5h1.5V4h-1.5Zm.75.75H5.838v1.5h12.324v-1.5ZM6.588 5.5V4h-1.5v1.5h1.5Zm9.52-2.75c.505 0 .81.002 1.03.03a.773.773 0 0 1 .198.048l.002.002 1.047-1.074c-.314-.306-.693-.416-1.052-.463-.34-.045-.761-.043-1.225-.043v1.5ZM18.912 4c0-.45.002-.864-.044-1.2-.05-.36-.167-.736-.483-1.044L17.338 2.83h.001l.001.003.005.01a.68.68 0 0 1 .037.162c.029.21.03.502.03.995h1.5ZM7.892 1.25c-.464 0-.885-.002-1.225.043-.359.047-.738.157-1.052.463L6.662 2.83a.775.775 0 0 1 .2-.05c.22-.028.525-.03 1.03-.03v-1.5ZM6.588 4c0-.493.001-.786.03-.995a.676.676 0 0 1 .043-.174L5.616 1.755c-.316.308-.433.685-.483 1.044-.046.336-.044.75-.044 1.2h1.5ZM5.12 5.283 1.363 17.736l1.436.433L6.556 5.717 5.12 5.283Zm17.517 12.453L18.881 5.283l-1.437.434 3.757 12.453 1.436-.434ZM2.35 20.472c1.532.92 4.647 2.278 9.651 2.278v-1.5c-4.717 0-7.567-1.276-8.88-2.064l-.771 1.286ZM12 22.75c5.003 0 8.119-1.358 9.651-2.278l-.771-1.286c-1.313.788-4.163 2.064-8.88 2.064v1.5Zm9.201-4.58c.136.45-.017.833-.321 1.016l.771 1.286c1-.6 1.282-1.755.986-2.736l-1.436.433Zm-19.838-.434c-.296.982-.014 2.136.986 2.736l.771-1.286c-.304-.183-.457-.566-.321-1.017l-1.436-.433ZM9.256 5.402l-2.108 16 1.487.196 2.109-16-1.488-.196Zm4 .196 2.109 16 1.487-.196-2.108-16-1.488.196Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.847 1.25h8.305c.446 0 .852 0 1.18.043.36.047.739.157 1.053.463.316.308.433.685.483 1.044.044.324.044.722.044 1.154V5.39l3.725 12.347c.296.982.014 2.136-.986 2.736-1.532.92-4.648 2.278-9.651 2.278-5.004 0-8.119-1.358-9.652-2.278-1-.6-1.282-1.755-.986-2.736L5.087 5.39V3.954c0-.432 0-.83.045-1.154.05-.36.166-.736.483-1.044.314-.306.693-.416 1.052-.463.329-.043.734-.043 1.18-.043Zm-1.453 5L2.8 18.17c-.136.45.017.833.321 1.016.79.474 2.135 1.124 4.109 1.567L9.034 6.25h-2.64Zm4.152 0-1.84 14.774c.977.14 2.073.226 3.294.226 1.22 0 2.317-.085 3.293-.226L13.453 6.25h-2.907Zm4.42 0 1.805 14.503c1.973-.443 3.319-1.093 4.108-1.567.305-.183.458-.566.322-1.017L17.605 6.25h-2.64Zm2.446-1.5V4c0-.493-.001-.786-.03-.995a.68.68 0 0 0-.038-.162l-.004-.01-.001-.002a.774.774 0 0 0-.201-.05c-.22-.03-.525-.031-1.03-.031H7.892c-.505 0-.81.002-1.03.03a.775.775 0 0 0-.198.048l-.003.002-.001.003a.675.675 0 0 0-.042.172c-.029.21-.03.502-.03.995v.75h10.824Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.108 2H7.892c-.969 0-1.453 0-1.754.293-.3.293-.3.764-.3 1.707v.75h12.324V4c0-.943 0-1.414-.3-1.707C17.56 2 17.077 2 16.108 2ZM2.08 17.953 5.612 6.25h3.423L7.147 21.407a.756.756 0 0 0-.005.095C5.046 21.041 3.6 20.35 2.734 19.83c-.652-.391-.87-1.16-.653-1.876ZM8.593 21.765C9.606 21.912 10.74 22 12 22c1.26 0 2.393-.088 3.407-.235a.756.756 0 0 1-.043-.172L13.454 6.25h-2.908l-1.91 15.343a.753.753 0 0 1-.043.172ZM14.966 6.25l1.886 15.157a.767.767 0 0 1 .006.096c2.096-.462 3.541-1.154 4.407-1.674.653-.391.87-1.16.654-1.876L18.39 6.25h-3.423Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.6} d="M10 5.5h4l1.96 16.178A23.377 23.377 0 0 1 12 22c-1.495 0-2.813-.125-3.962-.322L10 5.5Z" fill="currentColor" /><path opacity={0.4} d="M5.838 5.5 2.08 17.953c-.216.716.001 1.485.654 1.876.984.591 2.717 1.404 5.304 1.849L9.999 5.5H5.839Z" fill="currentColor" /><path opacity={0.7} d="M21.266 19.83c.652-.392.87-1.161.654-1.877L18.162 5.5H14l1.96 16.178c2.587-.444 4.32-1.258 5.306-1.849Z" fill="currentColor" /><path d="M16.109 2H7.892c-.968 0-1.452 0-1.753.293-.301.293-.301.764-.301 1.707v1.5h12.325V4c0-.943 0-1.414-.301-1.707C17.562 2 17.077 2 16.109 2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Skirt