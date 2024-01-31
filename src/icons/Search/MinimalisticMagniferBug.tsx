import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MinimalisticMagniferBug = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.5 15.5a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0h-6m6.072 1H16m-9 0h1.5m6 2.5 1 .5m-7-.5-1 .5m7-5.5 1-.5m-7 .5-1-.5M20 20l2 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6.75 3.27a9.5 9.5 0 1 1-3.48 3.48" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={11.5} cy={11.5} r={9.5} stroke="#8E93A6" strokeWidth={1.5} /><path d="M11.5 15.5a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0h-6m6.072 1H16m-9 0h1.5m6 2.5 1 .5m-7-.5-1 .5m7-5.5 1-.5m-7 .5-1-.5M20 20l2 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={11.5} cy={11.5} r={9.5} stroke="currentColor" strokeWidth={1.5} /><path d="M11.5 15.5a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0h-6m6.072 1H16m-9 0h1.5m6 2.5 1 .5m-7-.5-1 .5m7-5.5 1-.5m-7 .5-1-.5M20 20l2 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5ZM1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5 17.16 21.75 11.5 21.75 1.25 17.16 1.25 11.5Zm7.299-3.314A3.743 3.743 0 0 1 11.5 6.75c1.198 0 2.264.562 2.951 1.436l.714-.357a.75.75 0 1 1 .67 1.342l-.712.356c.083.31.127.637.127.973v.25H16a.75.75 0 0 1 0 1.5h-.75v.25c0 .336-.044.662-.127.973l.712.356a.75.75 0 1 1-.67 1.342l-.714-.357A3.743 3.743 0 0 1 11.5 16.25a3.743 3.743 0 0 1-2.951-1.436l-.714.357a.75.75 0 1 1-.67-1.342l.712-.356a3.756 3.756 0 0 1-.127-.973v-.25H7a.75.75 0 0 1 0-1.5h.75v-.25c0-.336.044-.663.127-.973l-.712-.356a.75.75 0 0 1 .67-1.342l.714.357Zm.701 3.064v1.25c0 .98.626 1.813 1.5 2.122V11.25h-1.5Zm3 0v3.372a2.251 2.251 0 0 0 1.5-2.122v-1.25h-1.5Zm1.372-1.5H9.378a2.25 2.25 0 0 1 4.244 0Zm5.848 9.72a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023ZM8.857 11.947c0 .929.596 1.718 1.429 2.01v-3.194H8.857v1.184Zm4.164-2.605A2.143 2.143 0 0 0 11 7.921c-.933 0-1.727.593-2.02 1.421h4.04Zm.122 1.421h-1.429v3.195a2.133 2.133 0 0 0 1.429-2.01v-1.185Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313ZM8.189 7.86A3.572 3.572 0 0 1 11 6.5c1.14 0 2.157.532 2.81 1.36l.68-.338a.716.716 0 0 1 .958.318.709.709 0 0 1-.319.953l-.679.338c.08.294.121.603.121.922v.236h.715c.394 0 .714.319.714.711 0 .392-.32.71-.714.71h-.715v.237c0 .32-.042.628-.12.922l.678.338a.709.709 0 0 1 .32.953.716.716 0 0 1-.959.318l-.68-.338A3.572 3.572 0 0 1 11 15.5a3.572 3.572 0 0 1-2.81-1.36l-.68.338a.716.716 0 0 1-.958-.318.709.709 0 0 1 .319-.953l.679-.338a3.54 3.54 0 0 1-.121-.922v-.236h-.715A.712.712 0 0 1 6 11c0-.392.32-.71.714-.71h.715v-.237c0-.32.042-.628.12-.922l-.678-.338a.709.709 0 0 1-.32-.953.716.716 0 0 1 .959-.318l.68.338Zm2.097 6.098a2.133 2.133 0 0 1-1.429-2.01v-1.185h1.429v3.195ZM11 7.92c.933 0 1.727.593 2.02 1.421H8.98A2.143 2.143 0 0 1 11 7.921Zm.714 2.842h1.429v1.184c0 .929-.596 1.718-1.429 2.01v-3.194Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18.839 18.839a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022Z" fill="currentColor" /><path opacity={0.5} d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11 6.5c-1.14 0-2.157.532-2.81 1.36l-.68-.338a.716.716 0 0 0-.958.318.709.709 0 0 0 .319.953l.679.338a3.54 3.54 0 0 0-.121.922v.236h-.715A.712.712 0 0 0 6 11c0 .392.32.71.714.71h.715v.237c0 .32.042.628.12.922l-.678.338a.709.709 0 0 0-.32.953c.177.35.606.493.959.318l.68-.338A3.572 3.572 0 0 0 11 15.5c1.14 0 2.157-.532 2.81-1.36l.68.338a.716.716 0 0 0 .958-.318.709.709 0 0 0-.319-.953l-.679-.338c.08-.294.121-.603.121-.922v-.236h.715A.712.712 0 0 0 16 11c0-.392-.32-.71-.714-.71h-.715v-.237c0-.32-.042-.628-.12-.922l.678-.338a.709.709 0 0 0 .32-.953.716.716 0 0 0-.959-.318l-.68.338A3.572 3.572 0 0 0 11 6.5Zm0 1.42c-.933 0-1.726.594-2.02 1.422h4.041a2.143 2.143 0 0 0-2.02-1.421Zm-2.143 4.027v-1.184h1.429v3.194a2.133 2.133 0 0 1-1.429-2.01Zm2.858 2.01v-3.194h1.428v1.184c0 .928-.596 1.718-1.428 2.01Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MinimalisticMagniferBug