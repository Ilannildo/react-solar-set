import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Running2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={18.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="m9 17-1 1.2c-.738.886-1.107 1.328-1.61 1.564C5.885 20 5.31 20 4.157 20H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.65 22a.75.75 0 0 0 1.5 0h-1.5Zm-1.085-5.754.453-.598-.453.598Zm1.184 1.015.587-.466-.587.466Zm.557 1.12.727-.186-.727.187Zm-.802-6.826a.75.75 0 0 0-1.009-1.11l1.01 1.11Zm-2.652 1.61.703.26-.703-.26Zm.07 1.555-.677.323.677-.323Zm2.728 5.219v2.06h1.5v-2.06h-1.5Zm-1.538-3.095c.663.502.887.679 1.05.884l1.174-.934c-.308-.387-.717-.69-1.319-1.146l-.905 1.196Zm3.038 3.095c0-.755.006-1.264-.117-1.744l-1.454.373c.066.254.071.538.071 1.37h1.5Zm-1.988-2.211c.197.247.339.534.417.84l1.454-.373a3.75 3.75 0 0 0-.697-1.4l-1.174.933Zm-.667-7.283c-.42.381-.945.836-1.354 1.224-.21.198-.41.398-.573.586-.149.172-.327.4-.42.649l1.407.521c-.007.021.014-.035.146-.187.116-.134.276-.295.471-.48.4-.38.865-.778 1.332-1.203l-1.009-1.11Zm.523 5.203c-.488-.37-.818-.62-1.056-.832-.233-.208-.32-.33-.363-.418l-1.354.645c.167.35.423.63.72.894.292.26.679.552 1.147.907l.905-1.196Zm-2.87-2.744a2.75 2.75 0 0 0 .097 2.139l1.354-.645a1.25 1.25 0 0 1-.044-.973l-1.406-.521ZM5.806 9.472a.75.75 0 1 0-.74-1.304l.74 1.304ZM3.63 8.984a.75.75 0 1 0 .742 1.304l-.742-1.304Zm9.778-1.627-.286.693.286-.693Zm-2.96-.715-.055-.748.055.748ZM21 12.75a.75.75 0 1 0 0-1.5v1.5Zm-5.232-3.213-.67.335.67-.335Zm-7.03-3.264a.75.75 0 0 0 .524 1.406l-.524-1.406ZM5.065 8.168l-1.436.816.742 1.304 1.435-.816-.74-1.304Zm8.627-1.505c-1.344-.553-2.08-.857-3.3-.769l.11 1.496c.823-.06 1.255.099 2.62.66l.57-1.387Zm6.063 6.086H21v-1.5h-1.245v1.5Zm-4.658-2.878a5.207 5.207 0 0 0 4.658 2.878v-1.5A3.707 3.707 0 0 1 16.439 9.2l-1.342.671Zm1.342-.67a5.334 5.334 0 0 0-2.747-2.538l-.57 1.387c.86.354 1.564 1 1.975 1.821l1.342-.67ZM9.262 7.677a4.388 4.388 0 0 1 1.24-.288l-.11-1.496a5.88 5.88 0 0 0-1.654.378l.524 1.406Z" fill="currentColor" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={18.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="m9 17-1 1.2c-.738.886-1.107 1.328-1.61 1.564C5.885 20 5.31 20 4.157 20H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M13.65 22a.75.75 0 0 0 1.5 0h-1.5Zm-1.085-5.754.453-.598-.453.598Zm1.184 1.015.587-.466-.587.466Zm.557 1.12.727-.186-.727.187Zm-.802-6.826a.75.75 0 0 0-1.009-1.11l1.01 1.11Zm-2.652 1.61.703.26-.703-.26Zm.07 1.555-.677.323.677-.323Zm2.728 5.219v2.06h1.5v-2.06h-1.5Zm-1.538-3.095c.663.502.887.679 1.05.884l1.174-.934c-.308-.387-.717-.69-1.319-1.146l-.905 1.196Zm3.038 3.095c0-.755.006-1.264-.117-1.744l-1.454.373c.066.254.071.538.071 1.37h1.5Zm-1.988-2.211c.197.247.339.534.417.84l1.454-.373a3.75 3.75 0 0 0-.697-1.4l-1.174.933Zm-.667-7.283c-.42.381-.945.836-1.354 1.224-.21.198-.41.398-.573.586-.149.172-.327.4-.42.649l1.407.521c-.007.021.014-.035.146-.187.116-.134.276-.295.471-.48.4-.38.865-.778 1.332-1.203l-1.009-1.11Zm.523 5.203c-.488-.37-.818-.62-1.056-.832-.233-.208-.32-.33-.363-.418l-1.354.645c.167.35.423.63.72.894.292.26.679.552 1.147.907l.905-1.196Zm-2.87-2.744a2.75 2.75 0 0 0 .097 2.139l1.354-.645a1.25 1.25 0 0 1-.044-.973l-1.406-.521Z" fill="currentColor" /><path d="m5.436 8.82-.37-.652.37.652Zm-1.807.164a.75.75 0 1 0 .742 1.304l-.742-1.304Zm9.778-1.627-.286.693.286-.693Zm-2.96-.715-.055-.748.055.748ZM21 12.75a.75.75 0 1 0 0-1.5v1.5Zm-5.232-3.213-.67.335.67-.335ZM5.065 8.168l-1.436.816.742 1.304 1.435-.816-.74-1.304Zm8.627-1.505c-1.344-.553-2.08-.857-3.3-.769l.11 1.496c.823-.06 1.255.099 2.62.66l.57-1.387Zm-7.886 2.81c2.502-1.422 3.552-2 4.695-2.083l-.109-1.496c-1.56.114-2.949.923-5.327 2.274l.741 1.304Zm13.949 3.276H21v-1.5h-1.245v1.5Zm-4.658-2.878a5.207 5.207 0 0 0 4.658 2.878v-1.5A3.707 3.707 0 0 1 16.439 9.2l-1.342.671Zm1.342-.67a5.334 5.334 0 0 0-2.747-2.538l-.57 1.387c.86.354 1.564 1 1.975 1.821l1.342-.67Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={18.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="m9 17-1 1.2c-.738.886-1.107 1.328-1.61 1.564C5.885 20 5.31 20 4.157 20H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.65 22a.75.75 0 0 0 1.5 0h-1.5Zm-1.086-5.754.453-.598-.453.598Zm1.185 1.015.587-.466-.587.466Zm.557 1.12.726-.186-.726.187Zm-.802-6.826a.75.75 0 0 0-1.009-1.11l1.009 1.11Zm-2.652 1.61.703.26-.703-.26Zm.07 1.555-.678.323.678-.323Zm2.728 5.219v2.06h1.5v-2.06h-1.5Zm-1.539-3.095c.664.502.888.679 1.05.884l1.175-.934c-.308-.387-.717-.69-1.319-1.146l-.905 1.196Zm3.039 3.095c0-.755.005-1.264-.118-1.744l-1.453.373c.065.254.07.538.07 1.37h1.5Zm-1.989-2.211c.197.247.34.534.418.84l1.453-.373a3.75 3.75 0 0 0-.696-1.4l-1.175.933Zm-.666-7.283c-.42.381-.945.836-1.354 1.224-.21.198-.41.398-.573.586-.149.172-.327.4-.42.649l1.407.521c-.008.021.014-.035.146-.187.116-.134.276-.295.471-.48.4-.38.865-.778 1.332-1.203l-1.009-1.11Zm.522 5.203c-.487-.37-.817-.62-1.055-.832-.234-.208-.321-.33-.363-.418l-1.355.645c.168.35.424.63.72.894.293.26.68.552 1.147.907l.906-1.196Zm-2.868-2.744a2.75 2.75 0 0 0 .095 2.139l1.355-.645a1.25 1.25 0 0 1-.044-.973l-1.406-.521ZM5.436 8.82l-.37-.652.37.652Zm-1.807.164a.75.75 0 1 0 .742 1.304l-.742-1.304Zm9.778-1.627-.286.693.286-.693Zm-2.96-.715-.055-.748.055.748ZM21 12.75a.75.75 0 1 0 0-1.5v1.5Zm-5.232-3.213-.67.335.67-.335ZM5.065 8.168l-1.436.816.742 1.304 1.435-.816-.74-1.304Zm8.627-1.505c-1.344-.553-2.08-.857-3.3-.769l.11 1.496c.823-.06 1.255.099 2.62.66l.57-1.387Zm-7.886 2.81c2.502-1.422 3.552-2 4.695-2.083l-.109-1.496c-1.56.114-2.949.923-5.327 2.274l.741 1.304Zm13.949 3.276H21v-1.5h-1.245v1.5Zm-4.658-2.878a5.207 5.207 0 0 0 4.658 2.878v-1.5A3.707 3.707 0 0 1 16.439 9.2l-1.342.671Zm1.342-.67a5.334 5.334 0 0 0-2.747-2.538l-.57 1.387c.86.354 1.564 1 1.975 1.821l1.342-.67Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM15.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-1.563 2.161.005.003A5.334 5.334 0 0 1 16.44 9.2a3.707 3.707 0 0 0 3.316 2.049H21a.75.75 0 0 1 0 1.5h-1.245a5.207 5.207 0 0 1-4.658-2.878 3.834 3.834 0 0 0-1.976-1.821c-1.364-.562-1.796-.72-2.62-.66-1.143.083-2.193.66-4.695 2.082l-1.435.815a.75.75 0 1 1-.742-1.304l1.436-.815.172-.098c2.274-1.293 3.634-2.066 5.155-2.176 1.218-.089 1.954.215 3.295.766Zm-.132 3.835a.75.75 0 0 1-.05 1.06l-.535.478c-.28.25-.551.49-.798.724a7.19 7.19 0 0 0-.471.48 1.53 1.53 0 0 0-.146.187 1.25 1.25 0 0 0 .044.973c.042.089.13.21.363.418.238.212.568.463 1.055.832l.075.056c.56.425.949.719 1.244 1.09.328.413.565.89.696 1.401.118.46.118.947.118 1.65V22a.75.75 0 0 1-1.5 0v-2.061c0-.833-.005-1.117-.07-1.37a2.25 2.25 0 0 0-.418-.841c-.163-.205-.387-.382-1.05-.884l-.024-.019c-.458-.346-.836-.633-1.123-.888-.297-.264-.553-.543-.72-.894a2.75 2.75 0 0 1-.096-2.14c.092-.248.27-.476.419-.647.163-.189.364-.39.573-.587.26-.246.565-.518.861-.782.171-.152.34-.302.493-.442a.75.75 0 0 1 1.06.05ZM9.48 16.424a.75.75 0 0 1 .096 1.056l-1 1.201-.097.116c-.642.771-1.113 1.338-1.771 1.646-.658.308-1.395.308-2.4.307H3a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.75 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="m13.437 6.661.005.003A5.334 5.334 0 0 1 16.19 9.2a3.707 3.707 0 0 0 3.316 2.049h1.245a.75.75 0 0 1 0 1.5h-1.245a5.207 5.207 0 0 1-4.658-2.878 3.834 3.834 0 0 0-1.976-1.821c-1.364-.562-1.796-.72-2.62-.66-1.143.083-2.193.66-4.695 2.082l-1.435.815a.75.75 0 1 1-.742-1.304l1.436-.815.172-.098c2.274-1.293 3.634-2.066 5.155-2.176 1.218-.089 1.954.215 3.295.766Zm-.132 3.835a.75.75 0 0 1-.05 1.06l-.535.478c-.28.25-.551.49-.798.724a7.19 7.19 0 0 0-.471.48 1.53 1.53 0 0 0-.146.187 1.25 1.25 0 0 0 .044.973c.042.089.13.21.363.418.238.212.568.463 1.055.832l.075.056c.56.425.949.719 1.244 1.09.328.413.565.89.696 1.401.118.46.118.947.118 1.65V22a.75.75 0 0 1-1.5 0v-2.061c0-.833-.005-1.117-.07-1.37a2.25 2.25 0 0 0-.418-.841c-.163-.205-.387-.382-1.05-.884l-.024-.019c-.458-.346-.836-.633-1.123-.888-.297-.264-.553-.543-.72-.894a2.75 2.75 0 0 1-.096-2.14c.092-.248.27-.476.419-.647.163-.189.364-.39.573-.587.26-.246.565-.518.861-.782.172-.152.34-.302.493-.442a.75.75 0 0 1 1.06.05ZM9.23 16.424a.75.75 0 0 1 .096 1.056l-1 1.201-.097.116c-.642.771-1.113 1.338-1.771 1.646-.658.308-1.395.308-2.4.307H2.75a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.75 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="m13.437 6.661.005.003A5.334 5.334 0 0 1 16.19 9.2a3.707 3.707 0 0 0 3.316 2.049h1.245a.75.75 0 0 1 0 1.5h-1.245a5.207 5.207 0 0 1-4.658-2.878 3.834 3.834 0 0 0-1.976-1.821c-1.364-.562-1.796-.72-2.62-.66-1.143.083-2.193.66-4.695 2.082l-1.435.815a.75.75 0 1 1-.742-1.304l1.436-.815.172-.098c2.274-1.293 3.634-2.066 5.155-2.176 1.218-.089 1.954.215 3.295.766ZM9.23 16.424a.75.75 0 0 1 .096 1.056l-1 1.201-.097.116c-.642.771-1.113 1.338-1.771 1.646-.658.308-1.395.308-2.4.307H2.75a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096Z" fill="currentColor" /><path d="M13.304 10.495a.75.75 0 0 1-.05 1.06c-.18.163-.36.323-.534.479-.281.25-.552.49-.798.724a7.212 7.212 0 0 0-.472.48c-.094.109-.132.168-.143.186a1.25 1.25 0 0 0 .041.974c.043.088.13.21.363.418.238.212.568.463 1.056.832l.074.056c.561.425.95.719 1.245 1.09.328.413.565.89.696 1.401.118.46.118.947.117 1.65V22a.75.75 0 1 1-1.5 0v-2.06c0-.833-.005-1.117-.07-1.37a2.25 2.25 0 0 0-.418-.841c-.163-.205-.386-.382-1.05-.884l-.024-.019a19.673 19.673 0 0 1-1.123-.888c-.297-.264-.553-.543-.72-.894a2.75 2.75 0 0 1-.096-2.14c.093-.248.27-.476.42-.648.163-.188.363-.388.572-.586.26-.246.566-.518.862-.782.17-.153.339-.302.492-.442a.75.75 0 0 1 1.06.05Z" fill="currentColor" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Running2