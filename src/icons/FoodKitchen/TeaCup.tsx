import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const TeaCup = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.716 16.126A5.515 5.515 0 0 0 8.193 21h3.614a5.515 5.515 0 0 0 5.477-4.874l.4-3.428c.05-.427.075-.641.065-.817a2 2 0 0 0-1.646-1.85c-.174-.031-.39-.031-.82-.031H4.717c-.43 0-.645 0-.819.03a2 2 0 0 0-1.646 1.85c-.01.177.014.39.064.818" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 17h2a3 3 0 1 0 0-6h-1.5" stroke="currentColor" strokeWidth={1.5} /><path d="M10 2a1.414 1.414 0 0 0 0 2 1.414 1.414 0 0 1 0 2M5 7.5l.116-.116c.507-.507.564-1.31.134-1.884a1.441 1.441 0 0 1 .134-1.884L5.5 3.5M14.5 7.5l.116-.116c.507-.507.564-1.31.134-1.884a1.441 1.441 0 0 1 .134-1.884L15 3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.315 12.698c-.05-.427-.075-.641-.064-.817a2 2 0 0 1 1.646-1.85c.174-.031.389-.031.82-.031h10.567c.43 0 .645 0 .819.03a2 2 0 0 1 1.646 1.85c.01.177-.014.39-.064.818l-.401 3.428A5.515 5.515 0 0 1 11.807 21H8.193a5.515 5.515 0 0 1-5.477-4.874l-.4-3.428Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M17 17h2a3 3 0 1 0 0-6h-1.5" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M10 2a1.414 1.414 0 0 0 0 2 1.414 1.414 0 0 1 0 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="m5 7.5.116-.116c.507-.507.564-1.31.134-1.884a1.441 1.441 0 0 1 .134-1.884L5.5 3.5M14.5 7.5l.116-.116c.507-.507.564-1.31.134-1.884a1.441 1.441 0 0 1 .134-1.884L15 3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.315 12.698c-.05-.427-.075-.641-.064-.817a2 2 0 0 1 1.646-1.85c.174-.031.389-.031.82-.031h10.567c.43 0 .645 0 .819.03a2 2 0 0 1 1.646 1.85c.01.177-.014.39-.064.818l-.401 3.428A5.515 5.515 0 0 1 11.807 21H8.193a5.515 5.515 0 0 1-5.477-4.874l-.4-3.428Z" stroke="currentColor" strokeWidth={1.5} /><path d="M17 17h2a3 3 0 1 0 0-6h-1.5" stroke="currentColor" strokeWidth={1.5} /><path d="M10 2a1.414 1.414 0 0 0 0 2 1.414 1.414 0 0 1 0 2M5 7.5l.116-.116c.507-.507.565-1.31.134-1.884a1.441 1.441 0 0 1 .134-1.884L5.5 3.5M14.5 7.5l.116-.116c.508-.507.565-1.31.134-1.884a1.441 1.441 0 0 1 .134-1.884L15 3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.53 1.47a.75.75 0 0 1 0 1.06c-.26.26-.26.68 0 .94a2.164 2.164 0 0 1 0 3.06.75.75 0 0 1-1.06-1.06c.259-.26.259-.68 0-.94a2.164 2.164 0 0 1 0-3.06.75.75 0 0 1 1.06 0Zm-4.5 1.5a.75.75 0 0 1 0 1.06l-.116.116a.691.691 0 0 0-.064.904 2.191 2.191 0 0 1-.204 2.864l-.116.116a.75.75 0 0 1-1.06-1.06l.116-.116a.691.691 0 0 0 .064-.904 2.191 2.191 0 0 1 .203-2.864l.116-.116a.75.75 0 0 1 1.061 0Zm9.5 0a.75.75 0 0 1 0 1.06l-.116.116a.691.691 0 0 0-.064.904 2.191 2.191 0 0 1-.204 2.864l-.116.116a.75.75 0 1 1-1.06-1.06l.116-.116a.691.691 0 0 0 .064-.904 2.191 2.191 0 0 1 .203-2.864l.117-.116a.75.75 0 0 1 1.06 0ZM4.647 9.25h10.705c.363 0 .641 0 .882.042a2.746 2.746 0 0 1 1.64.958H19a3.75 3.75 0 1 1 0 7.5h-1.352a6.265 6.265 0 0 1-5.841 4H8.193a6.265 6.265 0 0 1-6.222-5.537l-.4-3.428-.009-.068c-.042-.36-.074-.637-.06-.88a2.75 2.75 0 0 1 2.264-2.545c.24-.042.519-.042.881-.042Zm11.821 7.221a.748.748 0 0 0-.201.69 4.764 4.764 0 0 1-4.46 3.089H8.193a4.765 4.765 0 0 1-4.732-4.211l-.4-3.428c-.055-.46-.067-.592-.062-.686a1.25 1.25 0 0 1 1.03-1.156c.091-.016.223-.019.687-.019h10.568c.463 0 .595.003.687.02.57.1.995.579 1.03 1.155.005.094-.008.225-.061.686l-.401 3.428c-.017.145-.04.29-.07.432Zm1.556-.221H19a2.25 2.25 0 0 0 0-4.5h-.509c.003.029.005.057.006.086.015.244-.017.52-.06.88l-.008.069-.4 3.428-.005.037Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 11.88c-.01.177.015.39.065.818l.401 3.428A5.515 5.515 0 0 0 8.193 21h3.614a5.515 5.515 0 0 0 5.028-3.25H19a3.75 3.75 0 1 0 0-7.5h-2.279a1.996 1.996 0 0 0-.618-.22c-.174-.03-.39-.03-.82-.03H4.717c-.43 0-.645 0-.819.03a2 2 0 0 0-1.646 1.85Zm15.487-.13c.005.043.01.087.012.13.01.177-.014.39-.064.818l-.401 3.428-.016.124H19a2.25 2.25 0 0 0 0-4.5h-1.263ZM10.53 1.47a.75.75 0 0 1 0 1.06c-.259.26-.259.68 0 .94a2.164 2.164 0 0 1 0 3.06.75.75 0 0 1-1.06-1.06c.26-.26.26-.68 0-.94a2.164 2.164 0 0 1 0-3.06.75.75 0 0 1 1.06 0ZM6.03 2.97a.75.75 0 0 1 0 1.06l-.116.116a.691.691 0 0 0-.064.904 2.191 2.191 0 0 1-.204 2.864l-.116.116a.75.75 0 0 1-1.06-1.06l.116-.116a.691.691 0 0 0 .064-.904 2.191 2.191 0 0 1 .204-2.864l.116-.116a.75.75 0 0 1 1.06 0ZM15.53 2.97a.75.75 0 0 1 0 1.06l-.116.116a.691.691 0 0 0-.064.904 2.191 2.191 0 0 1-.204 2.864l-.116.116a.75.75 0 1 1-1.06-1.06l.116-.116a.691.691 0 0 0 .064-.904 2.191 2.191 0 0 1 .204-2.864l.116-.116a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 11.88c-.01.177.015.39.065.818l.401 3.428A5.515 5.515 0 0 0 8.193 21h3.614a5.515 5.515 0 0 0 5.028-3.25H19a3.75 3.75 0 1 0 0-7.5h-2.279a1.996 1.996 0 0 0-.618-.22c-.174-.03-.39-.03-.82-.03H4.717c-.43 0-.645 0-.819.03a2 2 0 0 0-1.646 1.85Zm15.487-.13c.005.043.01.087.012.13.01.177-.014.39-.064.818l-.401 3.428-.016.124H19a2.25 2.25 0 0 0 0-4.5h-1.263Z" fill="currentColor" /><g opacity={0.5} fillRule="evenodd" clipRule="evenodd" fill="currentColor"><path d="M10.53 1.47a.75.75 0 0 1 0 1.06c-.259.26-.259.68 0 .94a2.164 2.164 0 0 1 0 3.06.75.75 0 0 1-1.06-1.06c.26-.26.26-.68 0-.94a2.164 2.164 0 0 1 0-3.06.75.75 0 0 1 1.06 0ZM6.03 2.97a.75.75 0 0 1 0 1.06l-.116.116a.691.691 0 0 0-.064.904 2.191 2.191 0 0 1-.203 2.864l-.116.116A.75.75 0 0 1 4.47 6.97l.116-.116a.691.691 0 0 0 .064-.904 2.191 2.191 0 0 1 .204-2.864l.116-.116a.75.75 0 0 1 1.06 0ZM15.53 2.97a.75.75 0 0 1 0 1.06l-.116.116a.691.691 0 0 0-.064.904 2.191 2.191 0 0 1-.203 2.864l-.117.116a.75.75 0 1 1-1.06-1.06l.116-.116a.691.691 0 0 0 .064-.904 2.191 2.191 0 0 1 .204-2.864l.116-.116a.75.75 0 0 1 1.06 0Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TeaCup