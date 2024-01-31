import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MedalRibbonsStar = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.146 7.023C11.526 6.34 11.716 6 12 6c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176ZM12 16.068l-3.771 3.905c-.54.56-.81.839-1.04.935-.52.22-1.099.032-1.373-.448-.12-.21-.158-.59-.232-1.35-.043-.43-.064-.644-.128-.824a1.433 1.433 0 0 0-.835-.864c-.173-.067-.38-.088-.795-.132-.734-.078-1.101-.117-1.305-.241-.463-.284-.646-.883-.433-1.422.094-.237.364-.517.904-1.076L5.456 12M12 16.068l3.771 3.905c.54.56.81.839 1.04.935.52.22 1.099.032 1.373-.448.12-.21.157-.59.232-1.35.043-.43.064-.644.128-.824.144-.402.446-.715.835-.864.173-.067.38-.088.795-.132.734-.078 1.101-.117 1.305-.241.463-.284.646-.883.433-1.422-.094-.237-.364-.517-.904-1.076L18.544 12" stroke="currentColor" strokeWidth={1.5} /><path d="M5.5 6.397A7 7 0 1 0 9.397 2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M11.146 7.023C11.526 6.34 11.716 6 12 6c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z" stroke="currentColor" strokeWidth={1.5} /><path d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m12 16.068-3.771 3.905c-.54.56-.81.839-1.04.935-.52.22-1.099.032-1.373-.448-.12-.21-.158-.59-.232-1.35-.043-.43-.064-.644-.128-.824a1.433 1.433 0 0 0-.835-.864c-.173-.067-.38-.088-.795-.132-.734-.078-1.101-.117-1.305-.241-.463-.284-.646-.883-.433-1.422.094-.237.364-.517.904-1.076L5.456 12M12 16.068l3.771 3.905c.54.56.81.839 1.04.935.52.22 1.099.032 1.373-.448.12-.21.157-.59.232-1.35.043-.43.064-.644.128-.824.144-.402.446-.715.835-.864.173-.067.38-.088.795-.132.734-.078 1.101-.117 1.305-.241.463-.284.646-.883.433-1.422-.094-.237-.364-.517-.904-1.076L18.544 12" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.146 7.023C11.526 6.34 11.716 6 12 6c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z" stroke="currentColor" strokeWidth={1.5} /><path d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="m12 16.068-3.771 3.905c-.54.56-.81.839-1.04.935-.52.22-1.099.032-1.373-.448-.12-.21-.158-.59-.232-1.35-.043-.43-.064-.644-.128-.824a1.433 1.433 0 0 0-.835-.864c-.173-.067-.38-.088-.795-.132-.734-.078-1.101-.117-1.305-.241-.463-.284-.646-.883-.433-1.422.094-.237.364-.517.904-1.076L5.456 12M12 16.068l3.771 3.905c.54.56.81.839 1.04.935.52.22 1.099.032 1.373-.448.12-.21.157-.59.232-1.35.043-.43.064-.644.128-.824.144-.402.446-.715.835-.864.173-.067.38-.088.795-.132.734-.078 1.101-.117 1.305-.241.463-.284.646-.883.433-1.422-.094-.237-.364-.517-.904-1.076L18.544 12" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5ZM4.25 9a7.75 7.75 0 1 1 15.025 2.677l2.288 2.368c.257.267.471.489.631.674.158.182.32.39.415.632.334.845.066 1.845-.739 2.337-.23.142-.494.2-.72.238-.232.04-.526.07-.873.107l-.024.002c-.459.049-.546.064-.605.087a.683.683 0 0 0-.397.417c-.026.07-.041.173-.088.644l-.002.022c-.036.361-.066.664-.103.902-.036.23-.09.494-.223.725-.47.822-1.459 1.13-2.317.767-.241-.102-.446-.273-.62-.435-.18-.166-.393-.388-.65-.655l-.02-.02L12 17.09l-3.232 3.405-.015.015c-.257.267-.471.489-.65.655-.175.162-.38.333-.62.435-.86.363-1.848.055-2.318-.767-.132-.231-.187-.494-.223-.726-.037-.237-.067-.54-.102-.9l-.003-.023c-.046-.471-.062-.573-.087-.644a.683.683 0 0 0-.397-.417c-.06-.023-.147-.038-.606-.087l-.023-.002c-.347-.037-.641-.068-.873-.107-.226-.037-.49-.096-.721-.238-.804-.492-1.072-1.492-.739-2.337.096-.242.257-.45.415-.632.16-.185.374-.407.632-.674l2.287-2.368A7.735 7.735 0 0 1 4.25 9Zm1.178 4.109-1.896 1.963c-.276.286-.462.478-.592.629a1.21 1.21 0 0 0-.154.2c-.09.23 0 .424.119.503.009.003.06.02.194.043.18.03.43.057.806.097l.075.008c.34.035.641.067.91.17.599.23 1.057.71 1.272 1.312.096.269.126.573.16.927l.008.075c.038.389.064.649.094.84.026.162.046.214.047.217.08.135.244.201.425.125 0 0 .05-.027.186-.154.145-.134.33-.325.605-.61l.002-.002 2.72-2.866a7.758 7.758 0 0 1-4.981-3.477Zm8.163 3.478a7.758 7.758 0 0 0 4.982-3.478l1.896 1.963c.276.286.461.478.591.629.123.14.151.195.154.2.09.23 0 .424-.118.503-.01.003-.06.02-.194.043-.181.03-.43.057-.807.097l-.075.008c-.339.035-.641.067-.91.17-.598.23-1.057.71-1.272 1.312-.096.269-.126.573-.16.927l-.008.075c-.038.389-.064.649-.094.84-.025.162-.046.214-.046.217-.08.135-.245.202-.427.125h.002s-.05-.027-.187-.154c-.145-.134-.33-.325-.605-.61l-.002-.002-2.72-2.866Zm-1.59-9.553c-.059.101-.124.217-.2.354l-.098.176a4.966 4.966 0 0 0-.022.04c-.079.144-.209.382-.426.547-.221.168-.488.226-.643.26l-.043.009-.191.043c-.176.04-.318.072-.44.103.079.097.182.219.316.376l.13.152.03.034c.108.125.283.325.363.585.08.256.052.52.035.686a3.802 3.802 0 0 0-.005.047l-.02.203c-.018.188-.032.338-.041.46.104-.046.222-.1.363-.165l.179-.082.04-.02c.144-.067.394-.184.672-.184.279 0 .528.117.672.185l.04.019.18.082c.14.065.258.12.363.165-.01-.122-.024-.272-.042-.46l-.02-.203a3.802 3.802 0 0 0-.005-.047c-.017-.167-.044-.43.035-.686.08-.26.255-.46.363-.585l.03-.034.13-.152c.134-.157.237-.279.317-.376-.122-.03-.265-.063-.44-.103l-.191-.043-.043-.01c-.156-.033-.422-.091-.644-.26-.217-.164-.347-.402-.425-.545l-.023-.041-.098-.176c-.076-.137-.14-.253-.199-.354ZM11.013 5.8c.172-.225.485-.55.986-.55.502 0 .815.325.987.55.164.214.33.511.5.816l.022.041.099.177.056.1.099.023.19.043.048.01c.328.075.653.148.903.247.277.109.65.32.795.785.142.455-.037.841-.193 1.09-.145.23-.364.486-.59.749l-.03.035-.13.153-.082.097.012.135.02.203.004.046c.035.352.068.692.055.964-.012.286-.08.718-.468 1.011-.4.304-.84.238-1.12.157-.258-.073-.562-.214-.87-.355l-.043-.02-.179-.083a31.303 31.303 0 0 0-.085-.039l-.085.04-.178.082-.044.02c-.307.141-.612.282-.87.355-.28.08-.72.147-1.12-.157-.387-.293-.455-.725-.468-1.01-.012-.273.02-.613.055-.965l.005-.046.02-.203.012-.135a9.946 9.946 0 0 0-.083-.097l-.13-.153-.03-.035c-.225-.263-.445-.52-.59-.75-.156-.248-.334-.634-.193-1.09.145-.463.519-.675.795-.784.25-.099.576-.172.904-.246l.046-.01.191-.044.1-.023.056-.1.098-.177.023-.041c.17-.305.335-.602.5-.816Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z" fill="currentColor" /><path d="M4.495 12.995 2.992 14.55c-.54.56-.81.839-.904 1.076-.213.54-.03 1.138.433 1.422.204.124.57.163 1.305.24.414.044.622.066.795.133.389.149.69.462.835.864.064.18.085.394.127.823.075.76.113 1.14.233 1.351.274.48.853.669 1.374.448.228-.096.498-.376 1.039-.935l2.482-2.57a8.508 8.508 0 0 1-6.216-4.408ZM13.29 17.403l2.482 2.57c.54.56.81.839 1.038.936.521.22 1.1.031 1.374-.449.12-.21.157-.59.232-1.35.043-.43.064-.644.128-.824.144-.402.446-.715.835-.864.173-.067.38-.088.795-.132.734-.078 1.101-.117 1.305-.241.463-.284.646-.883.433-1.422-.094-.237-.364-.517-.904-1.076l-1.503-1.556a8.508 8.508 0 0 1-6.216 4.408Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="m12 16.068-3.771 3.905c-.54.559-.81.839-1.04.935-.52.22-1.099.032-1.373-.448-.12-.21-.158-.59-.232-1.35-.043-.43-.064-.644-.128-.824a1.433 1.433 0 0 0-.835-.864c-.173-.067-.38-.089-.795-.133-.734-.077-1.101-.116-1.305-.24-.463-.284-.646-.883-.433-1.422.094-.237.364-.517.904-1.076L5.456 12l1.238-1.238L12 16.068l5.306-5.306L18.544 12l2.464 2.55c.54.56.81.84.904 1.076.213.54.03 1.139-.433 1.423-.204.124-.57.163-1.305.24-.414.044-.622.066-.795.133-.389.149-.69.462-.835.864-.064.18-.085.394-.128.823-.075.76-.112 1.14-.232 1.351-.274.48-.853.669-1.374.448-.228-.096-.498-.376-1.038-.935L12 16.068Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MedalRibbonsStar