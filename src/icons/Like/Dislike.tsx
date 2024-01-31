import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Dislike = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m20.975 11.815-.739.128.74-.128Zm-.705-4.08-.74.128.74-.128ZM6.938 3.523l-.747-.065.747.065Zm-.812 9.393.747.064-.747-.064Zm7.869 5.863.74-.122-.74.122Zm-.663-4.045.74-.121-.74.121Zm-6.634-.412-.49.569.49-.569Zm1.439 1.24.49-.568-.49.568Zm2.381 3.654-.726.189.726-.189Zm.476 1.834.726-.188-.726.188Zm1.674.886-.23-.714.23.714Zm.145-.047.229.714-.23-.714Zm-2.951-4.352.662-.353-.662.353Zm4.043 3.216-.726-.189.726.189Zm-2.23 1.115-.326.675.325-.675ZM3.971 2.529l-.748-.064.748.064ZM3 13.766l.747.064a.75.75 0 0 1-1.497-.064H3Zm17.236-1.823-.705-4.08 1.478-.256.705 4.08-1.478.256ZM13.245 2.75H8.596v-1.5h4.649v1.5Zm-5.56.838-.812 9.392-1.495-.129.813-9.393 1.494.13Zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357l-1.478.256ZM13.255 18.9l-.663-4.045 1.48-.242.663 4.044-1.48.243Zm-6.067-5.146 1.438 1.24-.979 1.137-1.438-1.24.979-1.137Zm4.056 5.274.476 1.834-1.452.376-.476-1.833 1.452-.377Zm1.194 2.194.145-.047.459 1.428-.145.047-.459-1.428Zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A6.877 6.877 0 0 0 9.2 17.89l1.324-.707Zm2.06 3.991a.885.885 0 0 0 .596-.61l1.452.376a2.385 2.385 0 0 1-1.589 1.662l-.459-1.428Zm-.863-.313c.035.135.132.259.28.33l-.651 1.351a2.014 2.014 0 0 1-1.081-1.305l1.452-.376Zm.28.33a.596.596 0 0 0 .438.03l.459 1.428a2.096 2.096 0 0 1-1.548-.107l.65-1.351Zm2.154-8.176h5.18v1.5h-5.18v-1.5ZM4.719 2.594 3.747 13.83l-1.494-.129.971-11.236 1.495.129Zm-.969-.107v11.279h-1.5V2.487h1.5Zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344l-1.495-.13Zm11.511 16.192c.125.76.09 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664l1.48-.243ZM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25v1.5Zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.897-1.196-1.553-1.76l.98-1.137Zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073l1.478-.256ZM3.487 2.75a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237v1.5Zm9.105 12.105a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098l-1.48.242Zm-5.72-1.875a.918.918 0 0 0 .316.774l-.98 1.137a2.418 2.418 0 0 1-.83-2.04l1.495.13Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m20.975 11.815-.739.128.74-.128Zm-.705-4.08-.74.128.74-.128ZM6.938 3.523l-.747-.065.747.065Zm-.812 9.393.747.064-.747-.064Zm7.869 5.863.74-.122-.74.122Zm-.663-4.045.74-.121-.74.121Zm-6.634-.412-.49.569.49-.569Zm1.439 1.24.49-.568-.49.568Zm2.381 3.654-.726.189.726-.189Zm.476 1.834.726-.188-.726.188Zm1.674.886-.23-.714.23.714Zm.145-.047.229.714-.23-.714Zm-2.951-4.352.662-.353-.662.353Zm4.043 3.216-.726-.189.726.189Zm-2.23 1.115-.326.675.325-.675Zm8.561-9.925-.705-4.08 1.478-.256.705 4.08-1.478.256ZM13.245 2.75H8.596v-1.5h4.649v1.5Zm-5.56.838-.812 9.392-1.495-.129.813-9.393 1.494.13Zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357l-1.478.256ZM13.255 18.9l-.663-4.045 1.48-.242.663 4.044-1.48.243Zm-6.067-5.146 1.438 1.24-.979 1.137-1.438-1.24.979-1.137Zm4.056 5.274.476 1.834-1.452.376-.476-1.833 1.452-.377Zm1.194 2.194.145-.047.459 1.428-.145.047-.459-1.428Zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A6.877 6.877 0 0 0 9.2 17.89l1.324-.707Zm2.06 3.991a.885.885 0 0 0 .596-.61l1.452.376a2.384 2.384 0 0 1-1.59 1.662l-.458-1.428Zm-.863-.313c.035.135.132.259.28.33l-.651 1.351a2.014 2.014 0 0 1-1.081-1.305l1.452-.376Zm.28.33a.596.596 0 0 0 .438.03l.459 1.428a2.096 2.096 0 0 1-1.548-.107l.65-1.351Zm2.154-8.176h5.18v1.5h-5.18v-1.5Zm.581 5.641c.125.76.089 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664l1.48-.243ZM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25v1.5Zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.898-1.196-1.553-1.76l.98-1.137Zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073l1.478-.256Zm-9.122 3.168a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098l-1.48.242Zm-5.72-1.875a.918.918 0 0 0 .316.774l-.98 1.137a2.418 2.418 0 0 1-.83-2.04l1.495.13Z" fill="currentColor" /><path opacity={0.5} d="m3.972 2.53-.748-.065.748.064ZM3 13.765l.747.064a.75.75 0 0 1-1.497-.064H3ZM4.719 2.594 3.747 13.83l-1.494-.129.971-11.236 1.495.129Zm-.969-.107v11.279h-1.5V2.487h1.5Zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344l-1.495-.13Zm.263.285a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237v1.5Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m20.975 11.815-.739.128.74-.128Zm-.705-4.08-.74.128.74-.128ZM6.938 3.523l-.747-.065.747.065Zm-.812 9.393.747.064-.747-.064Zm7.869 5.863.74-.122-.74.122Zm-.663-4.045.74-.121-.74.121Zm-6.634-.412-.49.569.49-.569Zm1.439 1.24.49-.568-.49.568Zm2.381 3.654-.726.189.726-.189Zm.476 1.834.726-.188-.726.188Zm1.674.886-.23-.714.23.714Zm.145-.047.229.714-.23-.714Zm-2.951-4.352.662-.353-.662.353Zm4.043 3.216-.726-.189.726.189Zm-2.23 1.115-.326.675.325-.675ZM3.971 2.529l-.748-.064.748.064ZM3 13.766l.747.064a.75.75 0 0 1-1.497-.064H3Zm17.236-1.823-.705-4.08 1.478-.256.705 4.08-1.478.256ZM13.245 2.75H8.596v-1.5h4.649v1.5Zm-5.56.838-.812 9.392-1.495-.129.813-9.393 1.494.13Zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357l-1.478.256ZM13.255 18.9l-.663-4.045 1.48-.242.663 4.044-1.48.243Zm-6.067-5.146 1.438 1.24-.979 1.137-1.438-1.24.979-1.137Zm4.056 5.274.476 1.834-1.452.376-.476-1.833 1.452-.377Zm1.194 2.194.145-.047.459 1.428-.145.047-.459-1.428Zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A6.877 6.877 0 0 0 9.2 17.89l1.324-.707Zm2.06 3.991a.885.885 0 0 0 .596-.61l1.452.376a2.385 2.385 0 0 1-1.589 1.662l-.459-1.428Zm-.863-.313c.035.135.132.259.28.33l-.651 1.351a2.014 2.014 0 0 1-1.081-1.305l1.452-.376Zm.28.33a.596.596 0 0 0 .438.03l.459 1.428a2.096 2.096 0 0 1-1.548-.107l.65-1.351Zm2.154-8.176h5.18v1.5h-5.18v-1.5ZM4.719 2.594 3.747 13.83l-1.494-.129.971-11.236 1.495.129Zm-.969-.107v11.279h-1.5V2.487h1.5Zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344l-1.495-.13Zm11.511 16.192c.125.76.09 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664l1.48-.243ZM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25v1.5Zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.897-1.196-1.553-1.76l.98-1.137Zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073l1.478-.256ZM3.487 2.75a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237v1.5Zm9.105 12.105a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098l-1.48.242Zm-5.72-1.875a.918.918 0 0 0 .316.774l-.98 1.137a2.418 2.418 0 0 1-.83-2.04l1.495.13Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.438 21.222a.596.596 0 0 1-.438-.03.515.515 0 0 1-.28-.33l-.476-1.834a8.378 8.378 0 0 0-.72-1.844c-.485-.907-1.218-1.604-1.898-2.19l-1.438-1.24a.918.918 0 0 1-.315-.774l.812-9.392a.916.916 0 0 1 .911-.838h4.649c3.136 0 5.779 2.182 6.286 5.113l.705 4.08a.916.916 0 0 1-.901 1.073h-5.181c-.977 0-1.72.876-1.562 1.84l.663 4.044c.09.554.065 1.12-.076 1.664a.885.885 0 0 1-.596.611l-.145.047.23.714-.23-.714Zm-1.09 1.321c.483.233 1.04.27 1.549.107l.145-.047-.23-.714.23.714a2.385 2.385 0 0 0 1.589-1.662 5.533 5.533 0 0 0 .104-2.284l-.663-4.044a.083.083 0 0 1 .082-.097h5.18c1.5 0 2.636-1.352 2.38-2.829l-.705-4.08C20.37 3.92 17.07 1.25 13.245 1.25H8.596c-1.253 0-2.297.96-2.405 2.208l-.813 9.393a2.418 2.418 0 0 0 .83 2.04l1.44 1.24c.655.564 1.206 1.111 1.552 1.76.257.48.456.988.592 1.514l.476 1.833c.149.576.549 1.049 1.08 1.305Zm-8.38-8.028a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m20.27 8.485.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045c.108.657.077 1.329-.09 1.974-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.264 1.264 0 0 1-.68-.818l-.476-1.834a7.627 7.627 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.668 1.668 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m20.27 8.485.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.182a.833.833 0 0 0-.821.969l.663 4.045c.107.657.077 1.329-.09 1.974-.14.533-.551.962-1.093 1.136l-.145.047c-.327.105-.684.08-.993-.068a1.264 1.264 0 0 1-.68-.818l-.476-1.834a7.628 7.628 0 0 0-.656-1.679c-.416-.777-1.058-1.4-1.725-1.975l-1.44-1.24a1.668 1.668 0 0 1-.572-1.406l.813-9.393A1.666 1.666 0 0 1 8.596 2.75h4.649c3.481 0 6.452 2.426 7.024 5.735Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Dislike