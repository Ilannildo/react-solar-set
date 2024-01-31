import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RulerPen = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 7V6c0-1.886 0-2.828-.586-3.414C20.828 2 19.886 2 18 2h-2c-1.886 0-2.828 0-3.414.586C12 3.172 12 4.114 12 6v12c0 1.886 0 2.828.586 3.414C13.172 22 14.114 22 16 22h2c1.886 0 2.828 0 3.414-.586C22 20.828 22 19.886 22 18v-7M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3M2 6V5a3 3 0 0 1 6 0v1M2 6s1.125 1 3 1 3-1 3-1M2 6v4.546M8 6v9.194c0 .622 0 .934-.038 1.239a5 5 0 0 1-.25 1.057c-.102.29-.241.569-.52 1.126l-1.18 2.36m0 0-.288.577a.809.809 0 0 1-1.448 0l-.288-.577m2.024 0H3.988m0 0-1.18-2.36c-.279-.557-.418-.836-.52-1.126a5 5 0 0 1-.25-1.057C2 16.128 2 15.816 2 15.193v-.87" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 22c-1.886 0-2.828 0-3.414-.586C12 20.828 12 19.886 12 18V6c0-1.886 0-2.828.586-3.414C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22h-2Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m6.012 21.027-.288.548A.814.814 0 0 1 5 22a.814.814 0 0 1-.724-.425l-.288-.548m2.024 0H3.988m2.024 0 1.18-2.242c.279-.53.418-.794.52-1.07.122-.325.206-.661.25-1.004.038-.29.038-.586.038-1.177V4.85C8 3.276 6.657 2 5 2S2 3.276 2 4.85v10.684c0 .591 0 .887.038 1.177.044.343.128.68.25 1.005.102.275.241.54.52 1.069l1.18 2.242" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M2 5.8s1.125.95 3 .95 3-.95 3-.95" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 22c-1.886 0-2.828 0-3.414-.586C12 20.828 12 19.886 12 18V6c0-1.886 0-2.828.586-3.414C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22h-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 5.8v-.95C2 3.276 3.343 2 5 2s3 1.276 3 2.85v.95m-6 0s1.125.95 3 .95 3-.95 3-.95m-6 0v9.734c0 .591 0 .887.038 1.177.044.343.128.68.25 1.005.102.275.241.54.52 1.069l1.18 2.242M8 5.8v9.734c0 .591 0 .887-.038 1.177-.044.343-.128.68-.25 1.005-.102.275-.241.54-.52 1.069l-1.18 2.242m0 0-.288.548A.814.814 0 0 1 5 22a.814.814 0 0 1-.724-.425l-.288-.548m2.024 0H3.988" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M15.948 1.25h2.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v12.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.725 1.65-.456.456-1.023.642-1.65.726-.595.08-1.345.08-2.243.08h-2.104c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.343-.08-2.242V5.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.726-1.65.455-.456 1.022-.642 1.65-.726.594-.08 1.344-.08 2.242-.08Zm-3.198 8.5H15a.75.75 0 0 0 0-1.5h-2.25v-1.5H14a.75.75 0 0 0 0-1.5h-1.248c.004-.57.018-1 .064-1.345.063-.461.17-.659.3-.789.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066h2c.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095v12c0 .964-.002 1.612-.067 2.095-.062.461-.169.659-.3.789-.13.13-.327.237-.788.3-.483.064-1.131.066-2.095.066h-2c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3-.13-.13-.237-.327-.3-.788-.046-.346-.06-.776-.064-1.345H14a.75.75 0 0 0 0-1.5h-1.25v-1.5H15a.75.75 0 0 0 0-1.5h-2.25v-1.5H14a.75.75 0 0 0 0-1.5h-1.25v-1.5Zm-11.5-4.9c0-2.024 1.716-3.6 3.75-3.6s3.75 1.576 3.75 3.6v10.735c0 .543 0 .884-.044 1.223-.052.4-.15.792-.29 1.17-.12.32-.28.625-.537 1.111l-1.492 2.835c-.273.52-.817.826-1.387.826-.57 0-1.114-.306-1.387-.826L2.12 19.09c-.256-.486-.417-.79-.536-1.111a5.302 5.302 0 0 1-.291-1.17c-.044-.339-.044-.68-.044-1.223V4.85ZM5 2.75c-1.28 0-2.25.976-2.25 2.1v.555c.096.057.217.123.36.189C3.549 5.795 4.192 6 5 6c.809 0 1.452-.205 1.89-.406.143-.066.264-.132.36-.189V4.85c0-1.124-.97-2.1-2.25-2.1Zm2.25 4.321A6.036 6.036 0 0 1 5 7.5c-.916 0-1.677-.2-2.25-.429v8.463c0 .61.001.85.031 1.08.038.286.107.567.209.84.082.22.195.436.482.982l.969 1.841h1.118l.97-1.841c.286-.546.399-.762.481-.983.102-.271.171-.553.209-.838.03-.231.031-.471.031-1.081V7.07ZM2.48 5.223l.001.002-.001-.002Zm5.038.002.002-.002-.002.002Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.586 21.414C13.172 22 14.114 22 16 22h2c1.886 0 2.828 0 3.414-.586C22 20.828 22 19.886 22 18V6c0-1.886 0-2.828-.586-3.414C20.828 2 19.886 2 18 2h-2c-1.886 0-2.828 0-3.414.586-.503.502-.574 1.267-.584 2.664H14a.75.75 0 0 1 0 1.5h-2v1.5h3a.75.75 0 0 1 0 1.5h-3v1.5h2a.75.75 0 0 1 0 1.5h-2v1.5h3a.75.75 0 0 1 0 1.5h-3v1.5h2a.75.75 0 0 1 0 1.5h-1.998c.01 1.397.081 2.162.584 2.664ZM8 15.194v-7.98a7.85 7.85 0 0 1-3 .59 7.85 7.85 0 0 1-3-.59v7.98c0 .622 0 .934.038 1.239a5 5 0 0 0 .25 1.057c.102.29.241.569.52 1.126l1.468 2.937a.809.809 0 0 0 1.448 0l1.468-2.937c.279-.557.418-.836.52-1.126a5 5 0 0 0 .25-1.057C8 16.128 8 15.816 8 15.193ZM8 5a3 3 0 0 0-6 0v.957l.08.04c.681.33 1.675.662 2.92.662a6.678 6.678 0 0 0 3-.702V5Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M16 22c-1.886 0-2.828 0-3.414-.586-.503-.502-.574-1.267-.584-2.664L12 17.25V6.75l.002-1.5c.01-1.397.081-2.162.584-2.664C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414C20.828 22 19.886 22 18 22h-2Z" fill="currentColor" /><path d="M15 8.25h-3v1.5h3a.75.75 0 0 0 0-1.5ZM14 5.25h-1.998L12 6.75h2a.75.75 0 0 0 0-1.5ZM14 11.25h-2v1.5h2a.75.75 0 0 0 0-1.5ZM15 14.25h-3v1.5h3a.75.75 0 0 0 0-1.5ZM14 17.25h-2l.002 1.5H14a.75.75 0 0 0 0-1.5ZM8 14.98V7a7.85 7.85 0 0 1-3 .59A7.85 7.85 0 0 1 2 7v7.98c0 .622 0 .934.038 1.24a5 5 0 0 0 .25 1.056c.102.29.241.569.52 1.126l1.468 2.937a.809.809 0 0 0 1.448 0l1.468-2.937c.279-.557.418-.835.52-1.126a5 5 0 0 0 .25-1.057C8 15.914 8 15.602 8 14.98Z" fill="currentColor" /><path opacity={0.5} d="M5 2a3 3 0 0 1 3 3v2a7.85 7.85 0 0 1-3 .589A7.85 7.85 0 0 1 2 7V5a3 3 0 0 1 3-3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RulerPen