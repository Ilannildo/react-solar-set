import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HeadphonesRound = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 17v-5c0-1.84-.552-3.551-1.5-4.977M3 17v-5a9 9 0 0 1 13-8.064M22 15.5v2M2 15.5v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 13.845c0-.765 0-1.147-.175-1.413a1.015 1.015 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048-1.232.121-1.848.182-2.29.514a2.055 2.055 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406.106.184.238.35.392.492.413.38 1.014.5 2.218.736.847.167 1.271.251 1.584.075a1.01 1.01 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01v-5.165ZM16 13.845c0-.765 0-1.147.175-1.413.088-.133.204-.244.34-.322.271-.156.637-.12 1.368-.048 1.232.121 1.848.182 2.29.514.223.169.41.383.55.63.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406-.105.184-.238.35-.392.492-.413.38-1.014.5-2.218.736-.847.167-1.271.251-1.584.075a1.008 1.008 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01v-5.165Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M21 17v-5a9 9 0 1 0-18 0v5" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M22 15.5v2M2 15.5v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 13.845c0-.765 0-1.147-.175-1.413a1.015 1.015 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048-1.232.121-1.848.182-2.29.514a2.055 2.055 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406.106.184.238.35.392.492.413.38 1.014.5 2.218.736.847.167 1.271.251 1.584.075a1.01 1.01 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01v-5.165ZM16 13.845c0-.765 0-1.147.175-1.413.088-.133.204-.244.34-.322.271-.156.637-.12 1.368-.048 1.232.121 1.848.182 2.29.514.223.169.41.383.55.63.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406-.105.184-.238.35-.392.492-.413.38-1.014.5-2.218.736-.847.167-1.271.251-1.584.075a1.008 1.008 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01v-5.165Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 17v-5a9 9 0 1 0-18 0v5" stroke="currentColor" strokeWidth={1.5} /><path d="M22 15.5v2M2 15.5v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 13.845c0-.765 0-1.147-.175-1.413a1.015 1.015 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048-1.232.121-1.848.182-2.29.514a2.055 2.055 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406.106.184.238.35.392.492.413.38 1.014.5 2.218.736.847.167 1.271.251 1.584.075a1.01 1.01 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01v-5.165ZM16 13.845c0-.765 0-1.147.175-1.413.088-.133.204-.244.34-.322.271-.156.637-.12 1.368-.048 1.232.121 1.848.182 2.29.514.223.169.41.383.55.63.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406-.105.184-.238.35-.392.492-.413.38-1.014.5-2.218.736-.847.167-1.271.251-1.584.075a1.008 1.008 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01v-5.165Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v2.793a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.008.704c-.006.2-.015.386-.03.555-.04.435-.128.836-.343 1.212-.143.25-.323.477-.535.672-.32.295-.692.463-1.103.588-.388.117-.871.213-1.443.325l-.074.015c-.39.077-.744.147-1.04.17-.317.025-.675.008-1.017-.185a1.76 1.76 0 0 1-.524-.45c-.237-.304-.316-.65-.35-.97-.033-.3-.033-.672-.033-1.088v-5.236c0-.354 0-.672.025-.933.027-.279.09-.58.273-.859.151-.23.354-.422.593-.56.295-.17.603-.208.88-.21.257-.002.565.029.901.062l.07.007c.586.057 1.079.106 1.478.185.274.054.533.128.776.245a8.25 8.25 0 0 0-16.492 0c.243-.117.502-.19.776-.245.4-.079.892-.127 1.478-.185l.07-.007c.336-.033.644-.064.9-.062.278.002.586.04.88.21.24.138.443.33.594.56.183.28.245.58.273.859.025.26.025.579.025.933v5.236c0 .416 0 .787-.032 1.088-.035.32-.114.666-.351.97a1.76 1.76 0 0 1-.524.45c-.342.193-.7.21-1.018.185a9.796 9.796 0 0 1-1.04-.17l-.073-.015c-.572-.112-1.055-.208-1.443-.325-.411-.125-.783-.293-1.103-.588a2.816 2.816 0 0 1-.535-.672c-.215-.376-.302-.777-.343-1.212a8.633 8.633 0 0 1-.03-.555.75.75 0 0 1-1.008-.704v-2a.75.75 0 0 1 1-.707V12Zm1.5 5.193c0 .652 0 1.09.032 1.427.03.326.084.49.15.606.069.118.153.224.25.314.092.085.228.166.522.255.308.094.717.175 1.333.297.442.087.71.138.906.154a.678.678 0 0 0 .171-.001.261.261 0 0 0 .07-.062.684.684 0 0 0 .042-.207c.023-.211.024-.5.024-.966v-5.165c0-.398 0-.641-.018-.82a.65.65 0 0 0-.034-.182.268.268 0 0 0-.083-.08.648.648 0 0 0-.147-.013 8.557 8.557 0 0 0-.777.058c-.631.062-1.05.104-1.37.168-.305.06-.447.128-.542.2-.14.105-.26.24-.35.4-.064.114-.118.278-.147.609-.031.341-.032.785-.032 1.443v1.565Zm16.5-1.565c0-.658 0-1.102-.032-1.443-.03-.33-.083-.495-.147-.61-.09-.158-.21-.294-.35-.4-.095-.071-.237-.139-.542-.2-.32-.063-.739-.105-1.37-.167a8.56 8.56 0 0 0-.777-.058.648.648 0 0 0-.147.012.268.268 0 0 0-.083.081.647.647 0 0 0-.034.181c-.017.18-.018.423-.018.82v5.166c0 .466.001.755.024.965a.684.684 0 0 0 .042.208c.021.026.045.047.07.062.016.003.064.01.17 0 .198-.015.465-.066.907-.153.616-.122 1.025-.203 1.333-.297.294-.089.43-.17.522-.255.097-.09.181-.196.25-.314.066-.117.12-.28.15-.606.031-.338.032-.775.032-1.427v-1.565Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12.124C2 6.533 6.477 2 12 2s10 4.533 10 10.124v5.243c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.458.22-1.004.307-1.801.434l-.13.02a13.35 13.35 0 0 1-.727.105c-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35 2.23 2.23 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.103 2.103 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007.11.01c.783.062 1.32.104 1.775.275.32.12.616.284.883.487v-1.174c0-4.811-3.853-8.711-8.605-8.711-4.752 0-8.605 3.9-8.605 8.711v1.174c.267-.203.563-.368.883-.487.455-.17.992-.213 1.775-.276l.11-.009.093-.007c.42-.034.78-.063 1.096.01a2.103 2.103 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35 2.148 2.148 0 0 1-.641.017c-.201-.02-.444-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188c-.118-.405-.139-.857-.142-1.461L2 17.58v-5.456Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v2.793a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.5 0V17h-1v-5a8.25 8.25 0 0 0-16.5 0v5h-1v.5a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1-.707V12Z" fill="currentColor" /><path d="M8 14.05c0-.85 0-1.274-.21-1.57a1.185 1.185 0 0 0-.409-.358c-.325-.174-.763-.134-1.64-.053-1.48.134-2.218.202-2.748.571a2.346 2.346 0 0 0-.661.7C2 13.885 2 14.6 2 16.03v1.74c0 1.417 0 2.126.338 2.673.127.205.286.39.471.547.495.423 1.217.555 2.662.818 1.016.186 1.525.279 1.9.083.138-.072.26-.17.36-.287C8 21.285 8 20.786 8 19.789v-5.74ZM16 14.05c0-.85 0-1.274.21-1.57.105-.148.245-.271.409-.358.325-.174.763-.134 1.64-.053 1.48.134 2.218.202 2.748.571.268.188.493.426.661.7.332.544.332 1.26.332 2.69v1.74c0 1.417 0 2.126-.338 2.673-.127.205-.286.39-.471.547-.495.423-1.217.555-2.662.818-1.016.186-1.525.279-1.9.083a1.193 1.193 0 0 1-.36-.287C16 21.285 16 20.786 16 19.789v-5.74Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HeadphonesRound