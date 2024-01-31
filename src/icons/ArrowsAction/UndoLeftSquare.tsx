import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UndoLeftSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m6.5 9.5-.509-.55a.75.75 0 0 0 0 1.101l.509-.55Zm3 6.173a.75.75 0 0 0 0 1.5v-1.5Zm-.241-7.699A.75.75 0 0 0 8.24 6.872L9.26 7.974ZM8.24 12.128a.75.75 0 0 0 1.018-1.102L8.24 12.128Zm9.259.834h.75-.75Zm-.32 2.547-.63-.407.63.407Zm-.594.594-.407-.63.407.63Zm.594-5.689-.63.408.63-.408Zm-.594-.593.407-.63-.407.63Zm-2.547-1.07H6.5v1.5h7.539v-1.5Zm0 6.922H9.5v1.5h4.539v-1.5Zm-7.03-5.622 2.25-2.077L8.24 6.872 5.991 8.95l1.018 1.102Zm-1.018 0 2.25 2.077 1.018-1.102-2.25-2.077-1.018 1.102Zm10.759 2.91c0 .7 0 1.17-.036 1.528-.035.346-.095.507-.164.613l1.26.814c.251-.389.35-.818.396-1.28.045-.449.044-1.005.044-1.674h-1.5Zm-2.711 4.212c.668 0 1.225.001 1.674-.043.462-.046.89-.146 1.28-.397l-.814-1.26c-.107.069-.267.13-.614.164-.358.035-.827.036-1.526.036v1.5Zm2.51-2.071a1.249 1.249 0 0 1-.37.371l.814 1.26a2.75 2.75 0 0 0 .816-.817l-1.26-.814Zm1.701-2.14c0-.669 0-1.226-.044-1.675-.046-.462-.145-.89-.397-1.28l-1.26.815c.07.106.13.267.165.613.035.358.036.828.036 1.527h1.5Zm-4.211-2.712c.699 0 1.168.001 1.526.037.347.034.507.095.614.164l.814-1.26c-.39-.252-.818-.351-1.28-.397-.45-.045-1.006-.044-1.674-.044v1.5Zm3.77-.243a2.749 2.749 0 0 0-.816-.816l-.814 1.26c.148.096.275.222.37.37l1.26-.814Z" fill="currentColor" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m6.5 9.5-.509-.55a.75.75 0 0 0 0 1.101l.509-.55Zm3 6.173a.75.75 0 0 0 0 1.5v-1.5Zm-.241-7.699A.75.75 0 0 0 8.24 6.872L9.26 7.974ZM8.24 12.128a.75.75 0 0 0 1.018-1.102L8.24 12.128Zm9.259.834h.75-.75Zm-.32 2.547-.63-.407.63.407Zm-.594.594-.407-.63.407.63Zm.594-5.689-.63.408.63-.408Zm-.594-.593.407-.63-.407.63Zm-2.547-1.07H6.5v1.5h7.539v-1.5Zm0 6.922H9.5v1.5h4.539v-1.5Zm-7.03-5.622 2.25-2.077L8.24 6.872 5.991 8.95l1.018 1.102Zm-1.018 0 2.25 2.077 1.018-1.102-2.25-2.077-1.018 1.102Zm10.759 2.91c0 .7 0 1.17-.036 1.528-.035.346-.095.507-.164.613l1.26.814c.251-.389.35-.818.396-1.28.045-.449.044-1.005.044-1.674h-1.5Zm-2.711 4.212c.668 0 1.225.001 1.674-.043.462-.046.89-.146 1.28-.397l-.814-1.26c-.107.069-.267.13-.614.164-.358.035-.827.036-1.526.036v1.5Zm2.51-2.071a1.249 1.249 0 0 1-.37.371l.814 1.26a2.75 2.75 0 0 0 .816-.817l-1.26-.814Zm1.701-2.14c0-.669 0-1.226-.044-1.675-.046-.462-.145-.89-.397-1.28l-1.26.815c.07.106.13.267.165.613.035.358.036.828.036 1.527h1.5Zm-4.211-2.712c.699 0 1.168.001 1.526.037.347.034.507.095.614.164l.814-1.26c-.39-.252-.818-.351-1.28-.397-.45-.045-1.006-.044-1.674-.044v1.5Zm3.77-.243a2.749 2.749 0 0 0-.816-.816l-.814 1.26c.148.096.275.222.37.37l1.26-.814Z" fill="currentColor" /><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m6.5 9.5-.509-.55a.75.75 0 0 0 0 1.101l.509-.55Zm3 6.173a.75.75 0 0 0 0 1.5v-1.5Zm-.241-7.699A.75.75 0 0 0 8.24 6.872L9.26 7.974ZM8.24 12.128a.75.75 0 0 0 1.018-1.102L8.24 12.128Zm9.259.834h.75-.75Zm-.32 2.547-.63-.407.63.407Zm-.594.594-.407-.63.407.63Zm.594-5.689-.63.408.63-.408Zm-.594-.593.407-.63-.407.63Zm-2.547-1.07H6.5v1.5h7.539v-1.5Zm0 6.922H9.5v1.5h4.539v-1.5Zm-7.03-5.622 2.25-2.077L8.24 6.872 5.991 8.95l1.018 1.102Zm-1.018 0 2.25 2.077 1.018-1.102-2.25-2.077-1.018 1.102Zm10.759 2.91c0 .7 0 1.17-.036 1.528-.035.346-.095.507-.164.613l1.26.814c.251-.389.35-.818.396-1.28.045-.449.044-1.005.044-1.674h-1.5Zm-2.711 4.212c.668 0 1.225.001 1.674-.043.462-.046.89-.146 1.28-.397l-.814-1.26c-.107.069-.267.13-.614.164-.358.035-.827.036-1.526.036v1.5Zm2.51-2.071a1.249 1.249 0 0 1-.37.371l.814 1.26a2.75 2.75 0 0 0 .816-.817l-1.26-.814Zm1.701-2.14c0-.669 0-1.226-.044-1.675-.046-.462-.145-.89-.397-1.28l-1.26.815c.07.106.13.267.165.613.035.358.036.828.036 1.527h1.5Zm-4.211-2.712c.699 0 1.168.001 1.526.037.347.034.507.095.614.164l.814-1.26c-.39-.252-.818-.351-1.28-.397-.45-.045-1.006-.044-1.674-.044v1.5Zm3.77-.243a2.749 2.749 0 0 0-.816-.816l-.814 1.26c.148.096.275.222.37.37l1.26-.814Z" fill="currentColor" /><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.259 7.974A.75.75 0 1 0 8.24 6.872l-2.25 2.077a.75.75 0 0 0 0 1.102l2.25 2.077a.75.75 0 1 0 1.018-1.102l-.84-.776h5.62c.699 0 1.168 0 1.526.036.347.034.507.095.614.164.148.096.275.223.37.371.07.106.13.267.165.614.035.358.036.827.036 1.526 0 .7 0 1.169-.036 1.527-.035.346-.095.507-.164.614a1.25 1.25 0 0 1-.371.37c-.107.07-.267.13-.614.165-.358.035-.827.036-1.526.036H9.5a.75.75 0 1 0 0 1.5h4.576c.652 0 1.196 0 1.637-.044.462-.046.89-.145 1.28-.397.327-.211.605-.49.816-.816.252-.39.351-.818.397-1.28.044-.441.044-.985.044-1.637v-.075c0-.652 0-1.196-.044-1.637-.046-.462-.145-.891-.397-1.28a2.748 2.748 0 0 0-.816-.817c-.39-.251-.818-.35-1.28-.396-.44-.044-.985-.044-1.637-.044H8.418l.84-.776Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.715 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm5.795 4.51A.75.75 0 1 0 8.24 6.872l-2.25 2.077a.75.75 0 0 0 0 1.102l2.25 2.077a.75.75 0 1 0 1.018-1.102l-.84-.776h5.62c.699 0 1.168 0 1.526.036.347.034.507.095.614.164.148.096.275.223.37.371.07.106.13.267.165.614.035.358.036.827.036 1.526 0 .7 0 1.169-.036 1.527-.035.346-.095.507-.164.614a1.25 1.25 0 0 1-.371.37c-.107.07-.267.13-.614.165-.358.035-.827.036-1.526.036H9.5a.75.75 0 1 0 0 1.5h4.576c.652 0 1.196 0 1.637-.044.462-.046.89-.145 1.28-.397.327-.211.605-.49.816-.816.252-.39.351-.818.397-1.28.044-.441.044-.985.044-1.637v-.075c0-.652 0-1.196-.044-1.637-.046-.462-.145-.891-.397-1.28a2.748 2.748 0 0 0-.816-.817c-.39-.251-.818-.35-1.28-.396-.44-.044-.985-.044-1.637-.044H8.418l.84-.776Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.301 6.915a.75.75 0 0 1-.042 1.06l-.84.775h5.657c.652 0 1.196 0 1.637.044.462.046.89.145 1.28.397.327.211.605.49.816.816.252.39.351.819.397 1.28.044.441.044.985.044 1.637V13c0 .652 0 1.196-.044 1.638-.046.461-.145.89-.397 1.28-.21.326-.49.604-.816.816-.39.251-.818.35-1.28.397-.44.043-.985.043-1.637.043H9.5a.75.75 0 1 1 0-1.5h4.539c.699 0 1.168 0 1.526-.036.347-.034.507-.095.614-.164a1.25 1.25 0 0 0 .37-.371c.07-.106.13-.267.165-.613.035-.359.036-.828.036-1.527 0-.7 0-1.169-.036-1.527-.035-.346-.096-.507-.164-.613a1.249 1.249 0 0 0-.371-.371c-.107-.07-.267-.13-.614-.164-.358-.036-.827-.037-1.526-.037h-5.62l.84.776a.75.75 0 1 1-1.018 1.102l-2.25-2.077a.75.75 0 0 1 0-1.102l2.25-2.077a.75.75 0 0 1 1.06.043Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UndoLeftSquare