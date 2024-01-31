import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const WaterSun = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 16.773c-1.588-.374-2.404-1.293-3.08-2.316-.424-.64-1.355-.601-1.815.014C16.055 15.876 14.485 17 12 17c-2.507 0-4.082-1.431-5.133-2.777-.44-.562-1.28-.555-1.665.046C4.5 15.366 3.684 16.376 2 16.773" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.917 11a6.002 6.002 0 0 0-11.834 0M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.393.393M5.322 5.322 4.93 4.93" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 22c-2.507 0-4.082-1.345-5.133-2.611-.44-.53-1.28-.522-1.665.043-.701 1.03-1.518 1.98-3.202 2.354m20 0c-1.588-.352-2.404-1.216-3.08-2.178-.424-.602-1.355-.566-1.815.013-.41.516-.899.99-1.49 1.379" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 16.773c-1.588-.374-2.404-1.293-3.08-2.316-.424-.64-1.355-.601-1.815.014C16.055 15.876 14.485 17 12 17c-2.507 0-4.082-1.431-5.133-2.777-.44-.562-1.28-.555-1.665.046C4.5 15.366 3.684 16.376 2 16.773" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M22 21.773c-1.588-.374-2.404-1.293-3.08-2.316-.424-.64-1.355-.601-1.815.014C16.055 20.876 14.485 22 12 22c-2.507 0-4.082-1.431-5.133-2.777-.44-.562-1.28-.555-1.665.046C4.5 20.366 3.684 21.376 2 21.773" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.917 11a6.002 6.002 0 0 0-11.834 0M12 2v1M22 12h-1M3 12H2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m19.07 4.93-.393.393M5.322 5.322 4.93 4.93" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 16.773c-1.588-.374-2.404-1.293-3.08-2.316-.424-.64-1.355-.601-1.815.014C16.055 15.876 14.485 17 12 17c-2.507 0-4.082-1.431-5.133-2.777-.44-.562-1.28-.555-1.665.046C4.5 15.366 3.684 16.376 2 16.773M22 21.773c-1.588-.374-2.404-1.293-3.08-2.316-.424-.64-1.355-.601-1.815.014C16.055 20.876 14.485 22 12 22c-2.507 0-4.082-1.431-5.133-2.777-.44-.562-1.28-.555-1.665.046C4.5 20.366 3.684 21.376 2 21.773" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.917 11a6.002 6.002 0 0 0-11.834 0M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.393.393M5.322 5.322 4.93 4.93" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.4 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.394-.393a.75.75 0 0 1 0-1.06Zm15.2 0a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0ZM12 6.75c-2.6 0-4.76 1.892-5.177 4.374a.75.75 0 0 1-1.48-.248 6.752 6.752 0 0 1 13.314 0 .75.75 0 1 1-1.48.248A5.252 5.252 0 0 0 12 6.75ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM4.57 13.866c.687-1.074 2.157-1.039 2.888-.104.99 1.267 2.372 2.488 4.542 2.488 2.209 0 3.57-.979 4.505-2.23.72-.961 2.286-1.119 3.04.024.626.945 1.304 1.687 2.627 1.998a.75.75 0 1 1-.344 1.46c-1.852-.436-2.807-1.533-3.534-2.631a.28.28 0 0 0-.253-.128.432.432 0 0 0-.335.176C16.54 16.48 14.76 17.75 12 17.75c-2.842 0-4.611-1.64-5.724-3.065a.304.304 0 0 0-.246-.125.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.365-3.662 2.828a.75.75 0 1 1-.344-1.46c1.401-.33 2.08-1.14 2.742-2.176Zm0 5c.687-1.074 2.157-1.039 2.888-.104.99 1.267 2.372 2.488 4.542 2.488 2.209 0 3.57-.979 4.505-2.23.72-.962 2.286-1.119 3.04.024.626.945 1.304 1.687 2.627 1.998a.75.75 0 1 1-.344 1.46c-1.852-.436-2.807-1.533-3.534-2.631a.28.28 0 0 0-.253-.128.432.432 0 0 0-.335.177C16.54 21.48 14.76 22.75 12 22.75c-2.842 0-4.611-1.64-5.724-3.065a.304.304 0 0 0-.246-.125.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.365-3.662 2.828a.75.75 0 1 1-.344-1.46c1.401-.33 2.08-1.14 2.742-2.176Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.4 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.394-.393a.75.75 0 0 1 0-1.06Zm15.2 0a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM4.57 18.866c.687-1.074 2.157-1.039 2.888-.104.99 1.267 2.372 2.488 4.542 2.488 2.209 0 3.57-.979 4.505-2.23.72-.962 2.286-1.119 3.04.024.626.945 1.304 1.687 2.627 1.998a.75.75 0 1 1-.344 1.46c-1.852-.436-2.807-1.533-3.534-2.631a.28.28 0 0 0-.253-.128.432.432 0 0 0-.335.177C16.54 21.48 14.76 22.75 12 22.75c-2.842 0-4.611-1.64-5.724-3.065a.304.304 0 0 0-.246-.125.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.365-3.662 2.828a.75.75 0 1 1-.344-1.46c1.401-.33 2.08-1.14 2.742-2.176Z" fill="currentColor" /><path d="M22.172 16.042c-1.323-.311-2.001-1.053-2.626-1.999a1.747 1.747 0 0 0-1.677-.79 6 6 0 1 0-11.775-.19 1.706 1.706 0 0 0-1.524.803c-.662 1.035-1.34 1.846-2.742 2.176a.75.75 0 1 0 .344 1.46c1.967-.463 2.922-1.672 3.662-2.828a.23.23 0 0 1 .196-.114.304.304 0 0 1 .246.125C7.389 16.11 9.158 17.75 12 17.75c2.76 0 4.539-1.27 5.706-2.83a.432.432 0 0 1 .335-.177.28.28 0 0 1 .253.127c.727 1.1 1.682 2.196 3.534 2.632a.75.75 0 0 0 .344-1.46Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path d="M22.172 16.042c-1.323-.311-2.001-1.053-2.626-1.999a1.747 1.747 0 0 0-1.677-.79 6 6 0 1 0-11.775-.19 1.706 1.706 0 0 0-1.524.803c-.662 1.035-1.34 1.846-2.742 2.176a.75.75 0 1 0 .344 1.46c1.967-.463 2.922-1.672 3.662-2.828a.23.23 0 0 1 .196-.114.304.304 0 0 1 .246.125C7.389 16.11 9.158 17.75 12 17.75c2.76 0 4.539-1.27 5.706-2.83a.432.432 0 0 1 .335-.177.28.28 0 0 1 .253.127c.727 1.1 1.682 2.196 3.534 2.632a.75.75 0 0 0 .344-1.46Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M4.4 4.398a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06ZM19.6 4.399a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0Z" /></g><path d="M4.57 18.866c.687-1.074 2.157-1.039 2.888-.104.99 1.267 2.372 2.488 4.542 2.488 2.209 0 3.57-.979 4.505-2.229.72-.962 2.286-1.12 3.04.023.626.945 1.304 1.687 2.627 1.999a.75.75 0 1 1-.344 1.46c-1.852-.437-2.807-1.534-3.534-2.632a.28.28 0 0 0-.253-.128.432.432 0 0 0-.335.177C16.54 21.48 14.76 22.75 12 22.75c-2.842 0-4.611-1.64-5.724-3.064a.304.304 0 0 0-.246-.126.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.365-3.662 2.829a.75.75 0 1 1-.344-1.46c1.401-.33 2.08-1.142 2.742-2.177Z" fill="currentColor" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default WaterSun