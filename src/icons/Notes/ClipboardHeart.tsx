import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ClipboardHeart = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12 11.691-.519.542a.75.75 0 0 0 1.038 0L12 11.691Zm0 4.137v-.75.75Zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952.453.525 1.014.984 1.474 1.321l.887-1.21ZM9.75 12.697c0-.576.263-.827.492-.907.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776-.934.327-1.496 1.226-1.496 2.323h1.5Zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971-.348.403-.809.786-1.226 1.093l.887 1.21Zm2.35-3.273c0-1.097-.563-1.996-1.496-2.323-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443.228.08.491.33.491.907h1.5ZM10.6 15.97c.368.27.782.607 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287l-.887 1.21Zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608l-.886-1.21Z" fill="currentColor" /><path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z" stroke="currentColor" strokeWidth={1.5} /><path d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877-.769.768-.865 1.946-.877 4.121" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4" stroke="currentColor" strokeWidth={1.5} /><path d="m12 11.691-.519.542a.75.75 0 0 0 1.038 0L12 11.691Zm0 4.137v-.75.75Zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952.453.525 1.014.984 1.474 1.321l.887-1.21ZM9.75 12.697c0-.576.263-.827.492-.907.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776-.934.327-1.496 1.226-1.496 2.323h1.5Zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971-.348.403-.809.786-1.226 1.093l.887 1.21Zm2.35-3.273c0-1.097-.563-1.996-1.496-2.323-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443.228.08.491.33.491.907h1.5ZM10.6 15.97c.368.27.782.607 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287l-.887 1.21Zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608l-.886-1.21Z" fill="currentColor" /><path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4" stroke="currentColor" strokeWidth={1.5} /><path d="m12 11.691-.519.542a.75.75 0 0 0 1.038 0L12 11.691Zm0 4.137v-.75.75Zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952.453.525 1.014.984 1.474 1.321l.887-1.21ZM9.75 12.697c0-.576.263-.827.492-.907.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776-.934.327-1.496 1.226-1.496 2.323h1.5Zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971-.348.403-.809.786-1.226 1.093l.887 1.21Zm2.35-3.273c0-1.097-.563-1.996-1.496-2.323-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443.228.08.491.33.491.907h1.5ZM10.6 15.97c.368.27.782.607 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287l-.887 1.21Zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608l-.886-1.21Z" fill="currentColor" /><path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.263 3.259A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.009c.763.015 1.423.055 1.987.158.758.14 1.403.405 1.928.93.602.602.86 1.36.982 2.26.116.866.116 1.969.116 3.336v6.11c0 1.368 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116-.9-.121-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.336.12-.9.38-1.658.981-2.26.525-.525 1.17-.79 1.928-.93.564-.103 1.224-.143 1.987-.158Zm.002 1.5c-.718.015-1.272.052-1.718.134-.566.104-.895.27-1.138.514-.277.277-.457.666-.556 1.4-.101.755-.103 1.756-.103 3.191v6c0 1.436.002 2.437.103 3.192.099.734.28 1.122.556 1.4.277.276.665.457 1.4.555.754.102 1.756.103 3.191.103h6c1.435 0 2.436-.001 3.192-.103.734-.098 1.122-.279 1.399-.556.277-.276.457-.665.556-1.399.101-.755.103-1.756.103-3.192v-6c0-1.435-.002-2.436-.103-3.192-.099-.733-.28-1.122-.556-1.399-.244-.243-.572-.41-1.138-.514-.446-.082-1-.119-1.718-.134A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99ZM9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75h-5Zm.742 9.04c-.23.08-.492.33-.492.907 0 .214.141.545.51.971.348.403.809.786 1.226 1.093a4 4 0 0 0 .42.288c.054.029.07.029.094.029.024 0 .04 0 .094-.03a4 4 0 0 0 .42-.287c.417-.307.878-.69 1.227-1.093.368-.426.509-.757.509-.971 0-.576-.263-.827-.492-.907-.25-.088-.714-.06-1.24.443a.75.75 0 0 1-1.037 0c-.525-.503-.989-.531-1.24-.443ZM12 10.734c-.716-.471-1.525-.616-2.254-.36-.934.327-1.496 1.226-1.496 2.323 0 .77.441 1.45.875 1.952.453.525 1.014.984 1.474 1.321l.07.052c.352.26.752.556 1.331.556.58 0 .98-.296 1.33-.556l.07-.052c.46-.337 1.022-.796 1.475-1.32.434-.502.875-1.183.875-1.953 0-1.097-.563-1.996-1.496-2.323-.729-.256-1.538-.111-2.254.36Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-.463Zm4.543 11.329C10.165 14.72 9 13.68 9 12.696c0-1.672 1.65-2.297 3-1.005 1.35-1.292 3-.668 3 1.006 0 .984-1.165 2.024-2.043 2.669-.42.308-.63.462-.957.462-.328 0-.537-.154-.957-.462Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878.879-.88.879-2.293.879-5.122Z" fill="currentColor" /><path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1ZM9 12.697c0 .984 1.165 2.024 2.043 2.669.42.308.63.462.957.462.328 0 .537-.154.957-.462.878-.645 2.043-1.685 2.043-2.67 0-1.672-1.65-2.297-3-1.005-1.35-1.292-3-.668-3 1.006Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ClipboardHeart