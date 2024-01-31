import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const DiagramDown = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19 15-3.118-3.926c-.477-.602-.716-.903-.99-1.05a1.5 1.5 0 0 0-1.357-.029c-.28.135-.531.425-1.035 1.005-.503.58-.755.87-1.035 1.005a1.5 1.5 0 0 1-1.356-.03c-.274-.146-.513-.447-.99-1.048L6 7M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V9m0-7v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m19 15-3.118-3.926c-.477-.602-.716-.903-.99-1.05a1.5 1.5 0 0 0-1.357-.029c-.28.135-.531.425-1.035 1.005-.503.58-.755.87-1.035 1.005a1.5 1.5 0 0 1-1.356-.03c-.274-.146-.513-.447-.99-1.048L6 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m19 15-3.118-3.926c-.477-.602-.716-.903-.99-1.05a1.5 1.5 0 0 0-1.357-.029c-.28.135-.531.425-1.035 1.005-.503.58-.755.87-1.035 1.005a1.5 1.5 0 0 1-1.356-.03c-.274-.146-.513-.447-.99-1.048L6 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386V2Z" fill="currentColor" /><path d="M19.587 14.534a.75.75 0 1 1-1.174.932l-3.118-3.926c-.245-.309-.406-.51-.539-.656-.13-.143-.19-.183-.218-.198a.75.75 0 0 0-.678-.014c-.028.013-.09.05-.227.187-.138.14-.308.335-.566.633l-.017.018c-.237.274-.44.508-.62.688-.185.187-.389.362-.64.483a2.25 2.25 0 0 1-2.035-.044 2.34 2.34 0 0 1-.62-.51c-.17-.188-.363-.43-.589-.715L5.413 7.466a.75.75 0 0 1 1.174-.932l3.119 3.926c.245.309.406.51.538.656.13.143.19.183.218.198a.75.75 0 0 0 .678.014c.029-.013.091-.05.227-.187.139-.14.308-.335.567-.633l.016-.018c.238-.274.44-.508.62-.688.185-.187.389-.362.64-.483a2.25 2.25 0 0 1 2.035.044c.247.132.442.316.62.51.17.188.363.43.59.715l3.133 3.946Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386V2Z" fill="currentColor" /><path d="M6.587 6.534a.75.75 0 0 0-1.174.932l3.133 3.946c.226.284.418.527.59.714.177.196.373.379.62.51a2.25 2.25 0 0 0 2.033.045c.252-.121.456-.296.642-.483.179-.18.382-.414.62-.688l.016-.018c.258-.298.428-.493.566-.633.136-.136.199-.174.227-.188a.75.75 0 0 1 .678.015c.028.015.088.056.218.198.133.145.294.347.539.656l3.118 3.926a.75.75 0 0 0 1.174-.932l-3.133-3.946a14.75 14.75 0 0 0-.589-.714 2.338 2.338 0 0 0-.62-.51 2.25 2.25 0 0 0-2.034-.045c-.252.121-.456.296-.642.483-.179.18-.381.414-.62.688l-.015.018c-.259.298-.428.493-.567.633-.136.136-.198.174-.227.188a.75.75 0 0 1-.678-.015c-.027-.015-.088-.055-.218-.198a14.049 14.049 0 0 1-.538-.656L6.587 6.534Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386V2Z" fill="currentColor" /><path d="M6.587 6.534a.75.75 0 1 0-1.174.932l3.133 3.946c.226.284.418.527.59.714.177.196.373.379.62.51a2.25 2.25 0 0 0 2.033.045c.252-.121.456-.296.642-.483.179-.18.382-.414.62-.688l.016-.018c.258-.298.428-.493.566-.633.136-.136.199-.174.227-.187a.75.75 0 0 1 .678.014c.028.015.088.056.218.198.133.145.294.347.539.656l3.118 3.926a.75.75 0 1 0 1.174-.932l-3.133-3.946c-.226-.284-.418-.527-.589-.714a2.336 2.336 0 0 0-.62-.51 2.25 2.25 0 0 0-2.034-.045c-.252.121-.456.296-.642.483-.178.18-.381.414-.62.688l-.015.018c-.259.298-.428.493-.567.633-.136.136-.198.174-.227.188a.75.75 0 0 1-.678-.015c-.027-.015-.088-.055-.218-.198a14.158 14.158 0 0 1-.538-.656L6.587 6.534Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default DiagramDown