import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const VerifiedCheck = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.03 11.97a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm1.47 2.53-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm5.53-4.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-8.06 3 2 2 1.06-1.06-2-2-1.06 1.06Zm3.06 2 5-5-1.06-1.06-5 5 1.06 1.06Z" fill="currentColor" /><path d="M3.03 13.078a2.5 2.5 0 0 1 0-2.157c.14-.294.38-.576.86-1.14.192-.225.288-.337.368-.457a2.5 2.5 0 0 0 .376-.907c.028-.142.04-.289.063-.583.059-.738.088-1.107.197-1.416A2.5 2.5 0 0 1 6.42 4.894c.308-.109.677-.139 1.416-.197.294-.024.44-.036.582-.064a2.5 2.5 0 0 0 .908-.376c.12-.08.232-.175.456-.367.564-.48.846-.72 1.14-.861a2.5 2.5 0 0 1 2.157 0c.295.14.577.38 1.14.861.225.192.337.287.457.367a2.5 2.5 0 0 0 .908.376c.141.028.288.04.582.064.739.058 1.108.088 1.416.197a2.5 2.5 0 0 1 1.525 1.524M4.894 17.581a2.5 2.5 0 0 0 1.525 1.524c.308.11.677.139 1.416.197.294.024.44.036.582.064a2.5 2.5 0 0 1 .908.376c.12.08.232.175.456.367.564.48.846.72 1.14.861a2.5 2.5 0 0 0 2.157 0c.295-.14.577-.38 1.14-.861a5.25 5.25 0 0 1 .457-.367 2.5 2.5 0 0 1 .908-.376c.141-.028.288-.04.582-.064.739-.058 1.108-.088 1.416-.197a2.5 2.5 0 0 0 1.525-1.524c.109-.308.138-.678.197-1.416.023-.294.035-.441.063-.583.064-.324.192-.633.376-.907.08-.12.176-.232.367-.457.48-.564.721-.846.862-1.14a2.5 2.5 0 0 0 0-2.157" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M9.781 3.89c.564-.48.846-.72 1.14-.861a2.5 2.5 0 0 1 2.157 0c.295.14.577.38 1.14.861.225.192.337.287.457.367a2.5 2.5 0 0 0 .908.376c.141.028.288.04.582.064.739.058 1.108.088 1.416.197a2.5 2.5 0 0 1 1.525 1.524c.109.309.138.678.197 1.416.023.294.035.441.063.583.064.324.192.633.376.907.08.12.176.232.367.457.48.564.721.846.862 1.14a2.5 2.5 0 0 1 0 2.157c-.14.294-.381.576-.862 1.14a5.25 5.25 0 0 0-.367.457 2.497 2.497 0 0 0-.376.907c-.028.142-.04.289-.063.583-.059.738-.088 1.108-.197 1.416a2.5 2.5 0 0 1-1.525 1.524c-.308.11-.677.139-1.416.197-.294.024-.44.036-.582.064a2.5 2.5 0 0 0-.908.376 5.25 5.25 0 0 0-.456.367c-.564.48-.846.72-1.14.861a2.5 2.5 0 0 1-2.157 0c-.295-.14-.577-.38-1.14-.861a5.263 5.263 0 0 0-.457-.367 2.5 2.5 0 0 0-.908-.376 5.277 5.277 0 0 0-.582-.064c-.739-.058-1.108-.088-1.416-.197a2.5 2.5 0 0 1-1.525-1.524c-.109-.308-.138-.678-.197-1.416-.023-.294-.035-.441-.063-.583a2.5 2.5 0 0 0-.376-.907c-.08-.12-.176-.232-.367-.457-.48-.564-.721-.846-.862-1.14a2.5 2.5 0 0 1 0-2.157c.141-.294.381-.576.862-1.14.191-.225.287-.337.367-.457a2.5 2.5 0 0 0 .376-.907c.028-.142.04-.289.063-.583.059-.738.088-1.107.197-1.416A2.5 2.5 0 0 1 6.42 4.894c.308-.109.677-.139 1.416-.197.294-.024.44-.036.582-.064a2.5 2.5 0 0 0 .908-.376c.12-.08.232-.175.456-.367Z" stroke="currentColor" strokeWidth={1.5} /><path d="M9.03 11.97a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm1.47 2.53-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm5.53-4.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-8.06 3 2 2 1.06-1.06-2-2-1.06 1.06Zm3.06 2 5-5-1.06-1.06-5 5 1.06 1.06Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.781 3.89c.564-.48.846-.72 1.14-.861a2.5 2.5 0 0 1 2.157 0c.295.14.577.38 1.14.861.225.192.337.287.457.367a2.5 2.5 0 0 0 .908.376c.141.028.288.04.582.064.739.058 1.108.088 1.416.197a2.5 2.5 0 0 1 1.525 1.524c.109.309.138.678.197 1.416.023.294.035.441.063.583.064.324.192.633.376.907.08.12.176.232.367.457.48.564.721.846.862 1.14a2.5 2.5 0 0 1 0 2.157c-.14.294-.381.576-.862 1.14a5.25 5.25 0 0 0-.367.457 2.497 2.497 0 0 0-.376.907c-.028.142-.04.289-.063.583-.059.738-.088 1.108-.197 1.416a2.5 2.5 0 0 1-1.525 1.524c-.308.11-.677.139-1.416.197-.294.024-.44.036-.582.064a2.5 2.5 0 0 0-.908.376 5.25 5.25 0 0 0-.456.367c-.564.48-.846.72-1.14.861a2.5 2.5 0 0 1-2.157 0c-.295-.14-.577-.38-1.14-.861a5.263 5.263 0 0 0-.457-.367 2.5 2.5 0 0 0-.908-.376 5.277 5.277 0 0 0-.582-.064c-.739-.058-1.108-.088-1.416-.197a2.5 2.5 0 0 1-1.525-1.524c-.109-.308-.138-.678-.197-1.416-.023-.294-.035-.441-.063-.583a2.5 2.5 0 0 0-.376-.907c-.08-.12-.176-.232-.367-.457-.48-.564-.721-.846-.862-1.14a2.5 2.5 0 0 1 0-2.157c.141-.294.381-.576.862-1.14.191-.225.287-.337.367-.457a2.5 2.5 0 0 0 .376-.907c.028-.142.04-.289.063-.583.059-.738.088-1.107.197-1.416A2.5 2.5 0 0 1 6.42 4.894c.308-.109.677-.139 1.416-.197.294-.024.44-.036.582-.064a2.5 2.5 0 0 0 .908-.376c.12-.08.232-.175.456-.367Z" stroke="currentColor" strokeWidth={1.5} /><path d="M9.03 11.97a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm1.47 2.53-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm5.53-4.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-8.06 3 2 2 1.06-1.06-2-2-1.06 1.06Zm3.06 2 5-5-1.06-1.06-5 5 1.06 1.06Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.594 2.319a3.261 3.261 0 0 1 2.812 0c.387.185.74.487 1.231.905l.078.066c.238.203.313.265.389.316.193.13.41.219.637.264.09.018.187.027.499.051l.101.008c.642.051 1.106.088 1.51.23.93.33 1.66 1.06 1.99 1.99.142.404.178.868.23 1.51l.008.101c.024.312.033.41.051.499.045.228.135.445.264.638.051.075.113.15.316.388l.066.078c.419.49.72.844.905 1.23.425.89.425 1.924 0 2.813-.184.387-.486.74-.905 1.231l-.066.078a4.758 4.758 0 0 0-.316.389c-.13.193-.219.41-.264.637-.018.09-.026.187-.051.499l-.009.101c-.05.642-.087 1.106-.23 1.51a3.26 3.26 0 0 1-1.989 1.99c-.404.142-.868.178-1.51.23l-.101.008a4.757 4.757 0 0 0-.499.051 1.755 1.755 0 0 0-.637.264c-.076.051-.151.113-.39.316l-.077.066c-.49.419-.844.72-1.23.905a3.261 3.261 0 0 1-2.813 0c-.387-.184-.74-.486-1.231-.905a95.175 95.175 0 0 0-.078-.066 4.779 4.779 0 0 0-.388-.316c-.193-.13-.41-.219-.638-.264a4.759 4.759 0 0 0-.499-.051l-.101-.009c-.642-.05-1.106-.087-1.51-.23a3.261 3.261 0 0 1-1.99-1.989c-.142-.404-.179-.868-.23-1.51l-.008-.101a4.76 4.76 0 0 0-.051-.499 1.756 1.756 0 0 0-.264-.637 4.74 4.74 0 0 0-.316-.39l-.066-.077c-.418-.49-.72-.844-.905-1.23a3.261 3.261 0 0 1 0-2.813c.185-.387.487-.74.905-1.231l.066-.078a4.76 4.76 0 0 0 .316-.388c.13-.193.219-.41.264-.638.018-.09.027-.187.051-.499l.008-.101c.051-.642.088-1.106.23-1.51a3.261 3.261 0 0 1 1.99-1.99c.404-.142.868-.179 1.51-.23l.101-.008c.312-.024.41-.033.499-.051.228-.045.445-.135.638-.264.075-.051.15-.113.388-.316l.078-.066c.49-.418.844-.72 1.23-.905Zm2.163 1.358a1.756 1.756 0 0 0-1.514 0c-.185.088-.38.247-.981.758l-.03.025c-.197.168-.34.291-.497.396-.359.24-.761.407-1.185.49-.185.037-.373.052-.632.073l-.038.003c-.787.063-1.036.089-1.23.157-.5.177-.894.57-1.07 1.071-.07.194-.095.443-.158 1.23l-.003.038c-.02.259-.036.447-.072.632-.084.424-.25.826-.49 1.185-.106.157-.229.3-.397.498l-.025.029c-.511.6-.67.796-.758.98a1.756 1.756 0 0 0 0 1.515c.088.185.247.38.758.981l.025.03c.168.197.291.34.396.497.24.359.407.761.49 1.184.037.186.052.374.073.633l.003.038c.063.787.089 1.036.157 1.23.177.5.57.894 1.071 1.07.194.07.443.095 1.23.158l.038.003c.259.02.447.036.632.072.424.084.826.25 1.185.49.157.106.3.229.498.397l.029.025c.6.511.796.67.98.758a1.756 1.756 0 0 0 1.515 0c.185-.088.38-.247.981-.758l.03-.025c.197-.168.34-.291.497-.396.359-.24.761-.407 1.184-.49a5.53 5.53 0 0 1 .633-.073l.038-.003c.787-.063 1.036-.089 1.23-.157.5-.177.894-.57 1.07-1.071.07-.194.095-.444.158-1.23l.003-.038a5.53 5.53 0 0 1 .072-.633c.084-.423.25-.825.49-1.184.106-.157.229-.3.397-.498l.025-.029c.511-.6.67-.796.758-.98a1.756 1.756 0 0 0 0-1.515c-.088-.185-.247-.38-.758-.981l-.025-.03c-.168-.197-.291-.34-.396-.497a3.262 3.262 0 0 1-.49-1.185 5.531 5.531 0 0 1-.073-.632l-.003-.038c-.063-.787-.089-1.036-.157-1.23-.177-.5-.57-.894-1.071-1.07-.194-.07-.444-.095-1.23-.158l-.038-.003c-.259-.02-.447-.036-.633-.072a3.262 3.262 0 0 1-1.184-.49c-.157-.106-.3-.229-.498-.397l-.029-.025c-.6-.511-.796-.67-.98-.758Zm3.287 5.282a.752.752 0 0 1 0 1.065l-5.017 5.017a.753.753 0 0 1-1.064 0l-2.007-2.007A.753.753 0 1 1 9.02 11.97l1.475 1.474L14.98 8.96a.753.753 0 0 1 1.064 0Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.592 3.2c-.243.208-.365.312-.495.399-.298.2-.633.338-.985.408-.153.03-.313.043-.632.068-.801.064-1.202.096-1.536.214a2.713 2.713 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536-.025.319-.038.479-.068.632-.07.352-.208.687-.408.985-.087.13-.191.252-.399.495-.521.612-.782.918-.935 1.238-.353.74-.353 1.6 0 2.34.153.32.414.626.935 1.238.208.243.312.365.399.495.2.298.338.633.408.985.03.153.043.313.068.632.064.801.096 1.202.214 1.536a2.713 2.713 0 0 0 1.655 1.655c.334.118.735.15 1.536.214.319.025.479.038.632.068.352.07.687.209.985.408.13.087.252.191.495.399.612.521.918.782 1.238.935.74.353 1.6.353 2.34 0 .32-.153.626-.414 1.238-.935.243-.208.365-.312.495-.399.298-.2.633-.338.985-.408.153-.03.313-.043.632-.068.801-.064 1.202-.096 1.536-.214a2.713 2.713 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536.025-.319.038-.479.068-.632.07-.352.209-.687.408-.985.087-.13.191-.252.399-.495.521-.612.782-.918.935-1.238.353-.74.353-1.6 0-2.34-.153-.32-.414-.626-.935-1.238-.208-.243-.312-.365-.399-.495a2.713 2.713 0 0 1-.408-.985 5.72 5.72 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.713 2.713 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214-.319-.025-.479-.038-.632-.068a2.713 2.713 0 0 1-.985-.408 5.73 5.73 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.713 2.713 0 0 0-2.34 0c-.32.153-.626.414-1.238.935Zm6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0l5.427-5.425Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M9.592 3.2a5.727 5.727 0 0 1-.495.399c-.298.2-.633.338-.985.408-.153.03-.313.043-.632.068-.801.064-1.202.096-1.536.214a2.713 2.713 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536-.025.319-.038.479-.068.632-.07.352-.208.687-.408.985-.087.13-.191.252-.399.495-.521.612-.782.918-.935 1.238-.353.74-.353 1.6 0 2.34.153.32.414.626.935 1.238.208.243.312.365.399.495.2.298.338.633.408.985.03.153.043.313.068.632.064.801.096 1.202.214 1.536a2.713 2.713 0 0 0 1.655 1.655c.334.118.735.15 1.536.214.319.025.479.038.632.068.352.07.687.209.985.408.13.087.252.191.495.399.612.521.918.782 1.238.935.74.353 1.6.353 2.34 0 .32-.153.626-.414 1.238-.935.243-.208.365-.312.495-.399.298-.2.633-.338.985-.408.153-.03.313-.043.632-.068.801-.064 1.202-.096 1.536-.214a2.713 2.713 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536.025-.319.038-.479.068-.632.07-.352.209-.687.408-.985.087-.13.191-.252.399-.495.521-.612.782-.918.935-1.238.353-.74.353-1.6 0-2.34-.153-.32-.414-.626-.935-1.238-.208-.243-.312-.365-.399-.495a2.713 2.713 0 0 1-.408-.985 5.72 5.72 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.713 2.713 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214-.319-.025-.479-.038-.632-.068a2.713 2.713 0 0 1-.985-.408 5.73 5.73 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.713 2.713 0 0 0-2.34 0c-.32.153-.626.414-1.238.935Z" fill="currentColor" /><path d="M16.374 9.863a.814.814 0 0 0-1.151-1.151l-4.85 4.85-1.595-1.595a.814.814 0 0 0-1.151 1.151l2.17 2.17a.814.814 0 0 0 1.15 0l5.427-5.425Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default VerifiedCheck