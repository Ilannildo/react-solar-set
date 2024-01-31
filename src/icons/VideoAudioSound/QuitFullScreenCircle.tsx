import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const QuitFullScreenCircle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268-.62.62-1.561.716-3.268.73M9.998 17.997c-.015-1.706-.11-2.647-.73-3.267-.62-.62-1.561-.716-3.268-.73M14 6c.014 1.707.11 2.648.73 3.268.62.62 1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267.62-.62 1.56-.716 3.267-.73" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268-.62.62-1.561.716-3.268.73M9.998 17.997c-.015-1.706-.11-2.647-.73-3.267-.62-.62-1.561-.716-3.268-.73M14 6c.014 1.707.11 2.648.73 3.268.62.62 1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267.62-.62 1.56-.716 3.267-.73" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268-.62.62-1.561.716-3.268.73M9.998 17.997c-.015-1.706-.11-2.647-.73-3.267-.62-.62-1.561-.716-3.268-.73M14 6c.014 1.707.11 2.648.73 3.268.62.62 1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267.62-.62 1.56-.716 3.267-.73" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm8.754-6.75a.75.75 0 0 1 .744.757c-.008.85-.034 1.576-.152 2.179-.122.623-.352 1.166-.798 1.612-.446.446-.99.676-1.612.798-.603.118-1.329.144-2.18.152a.75.75 0 1 1-.012-1.5c.856-.008 1.453-.036 1.903-.124.429-.084.666-.212.84-.386.175-.175.303-.412.387-.84.088-.45.116-1.048.124-1.904a.75.75 0 0 1 .756-.744Zm3.99 0a.75.75 0 0 1 .756.744c.007.856.036 1.453.124 1.903.084.429.212.666.386.84.174.175.412.303.84.387.45.088 1.048.116 1.904.124a.75.75 0 0 1-.013 1.5c-.85-.008-1.577-.034-2.179-.152-.623-.122-1.167-.352-1.613-.798-.446-.446-.675-.99-.797-1.612-.118-.603-.145-1.329-.152-2.18a.75.75 0 0 1 .744-.756ZM5.25 13.994a.75.75 0 0 1 .757-.744c.85.007 1.576.034 2.179.152.623.122 1.166.351 1.612.797.446.446.676.99.798 1.613.118.602.144 1.328.152 2.179a.75.75 0 0 1-1.5.013c-.008-.856-.036-1.454-.124-1.904-.084-.428-.212-.666-.386-.84-.175-.174-.412-.302-.84-.386-.45-.088-1.048-.117-1.904-.124a.75.75 0 0 1-.744-.756Zm13.497 0a.75.75 0 0 1-.743.756c-.856.007-1.454.036-1.904.124-.428.084-.666.212-.84.386-.174.174-.302.412-.386.84-.088.45-.117 1.048-.124 1.904a.75.75 0 0 1-1.5-.013c.007-.85.034-1.577.152-2.179.122-.623.351-1.167.797-1.613.446-.446.99-.675 1.613-.797.602-.118 1.328-.145 2.179-.152a.75.75 0 0 1 .756.744Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM10.004 5.251a.75.75 0 0 1 .743.756c-.007.851-.033 1.577-.151 2.18-.122.623-.352 1.166-.798 1.612-.446.446-.99.676-1.613.798-.602.118-1.328.144-2.179.151a.75.75 0 1 1-.012-1.5c.856-.007 1.453-.035 1.903-.123.429-.084.666-.212.84-.387.175-.174.303-.411.387-.84.088-.45.116-1.048.123-1.903a.75.75 0 0 1 .757-.744Zm3.99 0a.75.75 0 0 1 .756.744c.007.855.035 1.453.123 1.903.084.429.213.666.387.84.174.175.411.303.84.387.45.088 1.048.116 1.904.123a.75.75 0 0 1-.013 1.5c-.85-.007-1.577-.033-2.18-.151-.623-.122-1.166-.352-1.612-.798-.446-.446-.675-.99-.798-1.613-.118-.602-.144-1.328-.151-2.179a.75.75 0 0 1 .743-.756Zm-7.988 8a.75.75 0 0 0-.012 1.5c.856.007 1.453.035 1.903.123.429.084.666.212.84.386.175.175.303.412.387.84.088.45.116 1.048.123 1.904a.75.75 0 0 0 1.5-.013c-.007-.85-.033-1.576-.151-2.179-.122-.623-.352-1.166-.798-1.612-.446-.446-.99-.676-1.613-.798-.602-.118-1.328-.144-2.179-.152Zm12.741.743a.75.75 0 0 1-.743.756c-.856.008-1.454.036-1.904.124-.429.084-.666.212-.84.386-.175.175-.303.412-.387.84-.088.45-.116 1.048-.123 1.904a.75.75 0 1 1-1.5-.013c.007-.85.033-1.576.151-2.179.123-.623.352-1.166.798-1.612.446-.446.99-.676 1.613-.798.602-.118 1.328-.144 2.179-.152a.75.75 0 0 1 .756.744Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="currentColor" /><path d="M5.25 13.994a.75.75 0 0 1 .756-.744c.851.008 1.577.034 2.18.152.623.122 1.166.352 1.612.798.446.446.676.989.798 1.612.118.603.144 1.329.151 2.18a.75.75 0 0 1-1.5.012c-.007-.856-.035-1.454-.123-1.903-.084-.43-.212-.666-.387-.84-.174-.175-.411-.303-.84-.387-.45-.088-1.047-.116-1.903-.124a.75.75 0 0 1-.744-.756ZM10.004 5.251a.75.75 0 0 1 .743.756c-.007.851-.033 1.577-.151 2.18-.122.623-.352 1.166-.798 1.612-.446.446-.99.676-1.613.798-.602.118-1.328.144-2.179.151a.75.75 0 1 1-.012-1.5c.856-.007 1.453-.035 1.903-.123.429-.084.666-.212.84-.387.175-.174.303-.411.387-.84.088-.45.116-1.048.123-1.903a.75.75 0 0 1 .757-.744ZM13.993 5.251a.75.75 0 0 1 .757.744c.007.855.035 1.453.123 1.903.084.429.213.666.387.84.174.175.411.303.84.387.45.088 1.048.116 1.904.123a.75.75 0 0 1-.013 1.5c-.85-.007-1.577-.033-2.18-.151-.623-.122-1.166-.352-1.612-.798-.446-.446-.675-.99-.798-1.613-.118-.602-.144-1.328-.151-2.179a.75.75 0 0 1 .743-.756ZM18.747 13.994a.75.75 0 0 1-.743.756c-.856.008-1.454.036-1.904.124-.429.084-.666.212-.84.386-.175.175-.303.412-.387.84-.088.45-.116 1.048-.123 1.904a.75.75 0 1 1-1.5-.013c.007-.85.033-1.576.151-2.179.123-.623.352-1.166.798-1.612.446-.446.99-.676 1.613-.798.602-.118 1.328-.144 2.179-.152a.75.75 0 0 1 .756.744Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default QuitFullScreenCircle