import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const InboxArchive = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 15h2.301c.809 0 1.213 0 1.576.148.033.013.065.027.098.043.354.167.628.464 1.175 1.059l.035.038c.513.557.769.835 1.096 1 .061.03.124.058.188.082.343.13.72.13 1.477.13.715 0 1.073 0 1.4-.117.061-.022.121-.047.18-.075.314-.148.567-.401 1.073-.907l.23-.23c.577-.577.866-.866 1.234-1.019.368-.152.776-.152 1.594-.152H20M5 15v-1.5A1.5 1.5 0 0 1 6.5 12h8.25m2.75 0a1.5 1.5 0 0 1 1.5 1.5V15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5 14v-3.5A1.5 1.5 0 0 1 6.5 9H10m9 5v-3.5A1.5 1.5 0 0 0 17.5 9H14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5 11V7.5A1.5 1.5 0 0 1 6.5 6M19 11V7.5A1.5 1.5 0 0 0 17.5 6H9.25" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M4 14.25a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5.401.651-.53-.53.53.53Zm.23-.23-.53-.53.53.53Zm-5.679.079-.552.508.552-.508Zm.035.038.552-.507-.552.507Zm1.096 1-.336.67.336-.67Zm.188.082.266-.701-.266.701Zm3.057-.062-.32-.678.32.678Zm-.18.075.253.706-.253-.706Zm2.717-2.23-.287-.694.287.693Zm-8.186-.005.283-.695-.283.695Zm.098.043-.32.678.32-.678ZM4.25 15a.75.75 0 0 0 1.5 0h-1.5Zm14 0a.75.75 0 0 0 1.5 0h-1.5ZM4 15.75h2.301v-1.5H4v1.5Zm13.657 0H20v-1.5h-2.343v1.5Zm-2.528 1.182.23-.23-1.06-1.06-.23.229 1.06 1.06Zm-6.53-.174.035.038 1.103-1.015-.035-.039-1.104 1.016Zm.035.038c.473.515.832.922 1.31 1.162l.673-1.34c-.176-.089-.33-.24-.88-.837l-1.103 1.015Zm3.312-.046c-.813 0-1.027-.011-1.211-.081l-.531 1.403c.5.19 1.042.178 1.742.178v-1.5Zm-2.001 1.208c.084.042.17.08.258.114l.532-1.403a1.24 1.24 0 0 1-.118-.052l-.672 1.341Zm4.123-2.087c-.543.543-.693.68-.862.76l.64 1.355c.46-.217.815-.586 1.283-1.054l-1.06-1.061Zm-2.122 2.379c.662 0 1.175.01 1.653-.161l-.506-1.412c-.176.063-.379.073-1.147.073v1.5Zm1.26-1.62a1.243 1.243 0 0 1-.113.047l.506 1.412c.084-.03.167-.064.248-.103l-.641-1.356Zm4.45-2.38c-.755 0-1.342-.013-1.88.21l.574 1.385c.198-.082.428-.095 1.307-.095v-1.5Zm-2.297 2.452c.621-.621.793-.775.991-.857l-.574-1.386c-.537.223-.943.648-1.478 1.182l1.06 1.06ZM6.3 15.75c.87 0 1.098.013 1.293.092l.566-1.389c-.53-.216-1.11-.203-1.859-.203v1.5Zm3.401-.008c-.506-.55-.89-.986-1.408-1.23l-.639 1.357c.19.09.355.25.943.889l1.104-1.016Zm-2.108.1.061.027.64-1.357a2.75 2.75 0 0 0-.135-.059l-.566 1.39ZM6.5 12.75h11v-1.5h-11v1.5Zm11 0a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-11.75.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-3.75h11v-1.5h-11v1.5Zm11 0a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-11.75.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm0 0v-3h-1.5v3h1.5Zm.75-3.75h11v-1.5h-11v1.5Zm11.75.75v3h1.5v-3h-1.5Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5ZM5.75 7.5a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 4.25 7.5h1.5Zm0 7.5v-1.5h-1.5V15h1.5Zm12.5-1.5V15h1.5v-1.5h-1.5Zm-12.5 0v-3h-1.5v3h1.5Zm12.5-3v3h1.5v-3h-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M4 15h2.301c.809 0 1.213 0 1.576.148.033.013.065.027.098.043.354.167.628.464 1.175 1.059l.035.038c.513.557.769.835 1.096 1 .061.03.124.058.188.082.343.13.72.13 1.477.13.715 0 1.073 0 1.4-.117.061-.022.121-.047.18-.075.314-.148.567-.401 1.073-.907l.23-.23c.577-.577.866-.866 1.234-1.019.368-.152.776-.152 1.594-.152H20M5 15v-1.5A1.5 1.5 0 0 1 6.5 12h11a1.5 1.5 0 0 1 1.5 1.5V15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5 14v-3.5A1.5 1.5 0 0 1 6.5 9h11a1.5 1.5 0 0 1 1.5 1.5V14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5 11V7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5V11" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176ZM6.5 6.75a.75.75 0 0 0-.75.75v.878c.235-.083.487-.128.75-.128h11c.263 0 .515.045.75.128V7.5a.75.75 0 0 0-.75-.75h-11Zm13.25.75a2.25 2.25 0 0 0-2.25-2.25h-11A2.25 2.25 0 0 0 4.25 7.5v6.75H4a.75.75 0 0 0 0 1.5h2.301c.87 0 1.098.013 1.293.092l.061.027c.19.09.355.25.943.889l.036.038.075.083c.438.476.783.852 1.236 1.08.084.041.17.08.258.113.474.18.985.179 1.631.178h.218c.611 0 1.094.001 1.547-.161.084-.03.167-.064.248-.103.434-.205.775-.547 1.207-.98l.075-.074.23-.23c.621-.621.793-.775.991-.857.198-.082.428-.095 1.307-.095H20a.75.75 0 0 0 0-1.5h-.25V7.5Zm-1.5 3a.75.75 0 0 0-.75-.75h-11a.75.75 0 0 0-.75.75v.878c.235-.083.487-.128.75-.128h11c.263 0 .515.045.75.128V10.5Zm0 3a.75.75 0 0 0-.75-.75h-11a.75.75 0 0 0-.75.75v.75h.671c.69 0 1.237-.001 1.739.203.045.019.09.038.134.06.49.23.86.632 1.327 1.141l.08.088.036.039c.55.598.704.748.88.836.038.02.078.037.118.052.184.07.398.081 1.211.081.768 0 .971-.01 1.147-.073.038-.014.076-.03.113-.047.169-.08.32-.216.862-.76l.23-.229.085-.085c.494-.495.885-.886 1.393-1.097.509-.21 1.061-.21 1.76-.21l.12.001h.594v-.75Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Zm3-3.5v-1A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v1a2.489 2.489 0 0 0-1.5-.5h-11c-.563 0-1.082.186-1.5.5Zm0 2v1a2.49 2.49 0 0 1 1.5-.5h11a2.49 2.49 0 0 1 1.5.5v-1A1.5 1.5 0 0 0 17.5 9h-11A1.5 1.5 0 0 0 5 10.5Zm15 3.75a.75.75 0 1 1 0 1.5h-2.343c-.879 0-1.11.013-1.307.095-.198.082-.37.236-.991.857l-.305.305c-.432.432-.773.774-1.207.98-.081.038-.164.072-.248.102-.453.162-.936.162-1.547.161h-.218c-.646 0-1.157.001-1.63-.178a2.74 2.74 0 0 1-.26-.114c-.452-.227-.797-.603-1.235-1.079l-.11-.121c-.59-.64-.753-.799-.944-.889-.02-.01-.04-.018-.061-.027-.195-.079-.424-.092-1.293-.092H4a.75.75 0 0 1 0-1.5h1.02v-1A1.5 1.5 0 0 1 6.5 12h11a1.5 1.5 0 0 1 1.48 1.25v1H20Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Z" fill="currentColor" /><path d="M5 8.5v-1A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v1a2.489 2.489 0 0 0-1.5-.5h-11c-.563 0-1.082.186-1.5.5ZM5 11.5v-1A1.5 1.5 0 0 1 6.5 9h11a1.5 1.5 0 0 1 1.5 1.5v1a2.49 2.49 0 0 0-1.5-.5h-11a2.49 2.49 0 0 0-1.5.5ZM20.75 15a.75.75 0 0 0-.75-.75h-1.02v-1A1.5 1.5 0 0 0 17.5 12h-11a1.5 1.5 0 0 0-1.48 1.25v1H4a.75.75 0 0 0 0 1.5h2.301c.87 0 1.098.013 1.293.092l.061.027c.19.09.355.25.943.889l.036.038.075.083c.438.476.783.852 1.236 1.08.084.041.17.08.258.113.474.18.985.179 1.631.178h.218c.611 0 1.094.001 1.547-.161.084-.03.167-.064.248-.103.434-.205.775-.547 1.207-.98l.075-.074.23-.23c.621-.621.793-.775.991-.857.198-.082.428-.095 1.307-.095H20a.75.75 0 0 0 .75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default InboxArchive