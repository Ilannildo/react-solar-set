import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Tshirt = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.224 10c.003-.494.02-.777.13-1.03.132-.301.379-.524.872-.969l.186-.167c1.056-.952 1.584-1.429 1.588-2.118.004-.69-.465-1.122-1.401-1.988a7.963 7.963 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.052 2.052 0 0 0-1.567-.205l-.49.129a1.612 1.612 0 0 0-.949.703c-1.202 1.897-3.852 1.897-5.054 0-.222-.35-.56-.601-.948-.703l-.49-.129a2.052 2.052 0 0 0-1.568.205c-.51.298-1.176.712-1.648 1.09a7.951 7.951 0 0 0-.418.362C3.464 4.594 2.996 5.027 3 5.716c.004.69.532 1.166 1.588 2.118l.186.167c.493.445.74.668.871.968.132.3.132.643.132 1.327v7.969c0 1.323 0 1.985.449 2.547.448.562.985.66 2.058.858.992.182 2.248.33 3.716.33 1.467 0 2.724-.148 3.716-.33 1.073-.198 1.61-.296 2.059-.858.448-.562.448-1.224.448-2.547V14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.777 10.296v7.969c0 1.323 0 1.985.449 2.547.448.562.985.66 2.058.858.992.182 2.248.33 3.716.33 1.467 0 2.724-.148 3.716-.33 1.073-.198 1.61-.296 2.059-.858.448-.562.448-1.224.448-2.547v-7.97c0-.683 0-1.025.132-1.326.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118.004-.69-.465-1.122-1.401-1.988a7.963 7.963 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.052 2.052 0 0 0-1.567-.205l-.49.129a1.612 1.612 0 0 0-.949.703c-1.202 1.897-3.852 1.897-5.054 0-.222-.35-.56-.601-.948-.703l-.49-.129a2.052 2.052 0 0 0-1.568.205c-.51.298-1.176.712-1.648 1.09a7.951 7.951 0 0 0-.418.362C3.464 4.594 2.996 5.027 3 5.716c.004.69.532 1.166 1.588 2.118l.186.167c.493.445.74.668.871.968.132.3.132.643.132 1.327Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.777 10.296v7.969c0 1.323 0 1.985.449 2.547.448.562.985.66 2.058.858.992.182 2.248.33 3.716.33 1.467 0 2.724-.148 3.716-.33 1.073-.198 1.61-.296 2.059-.858.448-.562.448-1.224.448-2.547v-7.97c0-.683 0-1.025.132-1.326.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118.004-.69-.465-1.122-1.401-1.988a7.963 7.963 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.052 2.052 0 0 0-1.567-.205l-.49.129a1.612 1.612 0 0 0-.949.703c-1.202 1.897-3.852 1.897-5.054 0-.222-.35-.56-.601-.948-.703l-.49-.129a2.052 2.052 0 0 0-1.568.205c-.51.298-1.176.712-1.648 1.09a7.951 7.951 0 0 0-.418.362C3.464 4.594 2.996 5.027 3 5.716c.004.69.532 1.166 1.588 2.118l.186.167c.493.445.74.668.871.968.132.3.132.643.132 1.327Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.088 1.628a2.802 2.802 0 0 1 2.137-.282l.49.129A2.362 2.362 0 0 1 10.106 2.5c.908 1.433 2.88 1.433 3.788 0 .32-.504.813-.874 1.39-1.026l.49-.13a2.802 2.802 0 0 1 2.138.283c.515.302 1.221.738 1.738 1.153.152.122.306.256.458.396l.04.038c.434.4.825.762 1.098 1.115.308.399.507.838.504 1.39-.003.572-.237 1.024-.568 1.43-.302.37-.734.76-1.228 1.205l-.225.203c-.542.489-.635.594-.687.712-.054.123-.069.276-.069 1.026v8.016c0 .621 0 1.162-.063 1.616-.07.496-.22.94-.55 1.352-.626.784-1.428.93-2.38 1.104l-.128.023A21.34 21.34 0 0 1 12 22.75c-1.518 0-2.82-.153-3.852-.343l-.128-.023c-.952-.174-1.754-.32-2.38-1.104-.33-.413-.48-.856-.55-1.352-.063-.454-.063-.995-.063-1.616v-8.017c0-.75-.015-.902-.069-1.025-.052-.118-.145-.223-.687-.712l-.185-.167a129.76 129.76 0 0 1-.04-.036C3.552 7.91 3.12 7.52 2.818 7.15c-.33-.407-.565-.859-.568-1.43-.003-.553.196-.992.504-1.391.273-.353.664-.715 1.098-1.115l.04-.038c.152-.14.306-.274.458-.396.517-.415 1.223-.851 1.738-1.153Zm1.756 1.168a1.303 1.303 0 0 0-.998.127c-.506.296-1.132.687-1.558 1.028a7.202 7.202 0 0 0-.378.328c-.487.45-.782.726-.969.968-.159.206-.192.328-.191.465 0 .117.033.248.23.49.22.27.565.583 1.11 1.075l.186.167.083.075c.411.37.776.697.973 1.15.196.448.196.943.195 1.512v8.084c0 .682.001 1.117.049 1.455.042.305.116.474.236.623.243.305.47.38 1.608.589.952.175 2.163.318 3.58.318 1.417 0 2.628-.143 3.58-.318 1.139-.21 1.365-.284 1.608-.588.12-.15.194-.319.236-.624.048-.338.05-.773.05-1.455V10.18c-.002-.57-.002-1.064.194-1.512.198-.453.562-.78.973-1.15l.083-.075.185-.167c.546-.492.89-.805 1.11-1.075.198-.242.23-.373.231-.49 0-.137-.032-.26-.191-.465-.187-.242-.482-.518-.97-.968a7.198 7.198 0 0 0-.377-.328c-.426-.341-1.052-.732-1.558-1.028a1.302 1.302 0 0 0-.998-.127l-.49.13a.862.862 0 0 0-.505.378 3.706 3.706 0 0 1-6.322 0 .862.862 0 0 0-.505-.379l-.49-.129Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.777 10.296v7.969c0 1.323 0 1.985.449 2.547.448.562.985.66 2.058.858.992.182 2.248.33 3.716.33 1.467 0 2.724-.148 3.716-.33 1.073-.198 1.61-.296 2.059-.858.448-.562.448-1.224.448-2.547v-7.97c0-.683 0-1.025.132-1.326.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118.004-.69-.465-1.122-1.401-1.988a7.963 7.963 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.052 2.052 0 0 0-1.567-.205l-.49.129a1.612 1.612 0 0 0-.949.703c-1.202 1.897-3.852 1.897-5.054 0-.222-.35-.56-.601-.948-.703l-.49-.129a2.052 2.052 0 0 0-1.568.205c-.51.298-1.176.712-1.648 1.09a7.951 7.951 0 0 0-.418.362C3.464 4.594 2.996 5.027 3 5.716c.004.69.532 1.166 1.588 2.118l.186.167c.493.445.74.668.871.968.132.3.132.643.132 1.327Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.777 18.265v-7.97c0-.683 0-1.025-.132-1.326-.131-.3-.378-.523-.871-.968l-.186-.167C3.532 6.882 3.004 6.405 3 5.716c-.004-.69.464-1.122 1.401-1.988.142-.13.283-.253.418-.362.472-.378 1.138-.792 1.648-1.09a2.052 2.052 0 0 1 1.567-.205l.49.129c.389.102.727.353.949.703.6.948 1.564 1.423 2.527 1.423V22c-1.467 0-2.724-.148-3.716-.33-1.073-.198-1.61-.296-2.058-.858-.45-.562-.45-1.224-.45-2.547Z" fill="currentColor" /><path opacity={0.5} d="M18.223 18.265v-7.97c0-.683 0-1.025.132-1.326.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118.004-.69-.465-1.122-1.401-1.988a7.963 7.963 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.052 2.052 0 0 0-1.567-.205l-.49.129a1.612 1.612 0 0 0-.949.703c-.6.948-1.564 1.423-2.527 1.423V22c1.467 0 2.724-.148 3.716-.33 1.073-.198 1.61-.296 2.059-.858.448-.562.448-1.224.448-2.547Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Tshirt