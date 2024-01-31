import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Dumbbells = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.94 10.513-.383.639.384-.64Zm-.53-2.491.743.103a.766.766 0 0 0-.652-.848l-.09.745Zm-.094 1.622-.725.173.725-.173Zm3.776.526.66.365-.66-.365Zm-.81.668.217.723-.218-.723Zm.834-6.884.383-.639-.383.64Zm.624.869.726-.173-.726.173Zm-2.964-1.194-.219-.723.219.723Zm-1.107 2.263-.09.744c.41.057.783-.23.833-.64l-.743-.104Zm.296-1.595-.66-.365.66.365ZM2.832 9.106l-.383.639.383-.639Zm-.624-.868-.726.172.726-.172Zm4.071-1.07.09-.744a.734.734 0 0 0-.833.641l.743.104Zm-.296 1.595.66.365-.66-.365Zm-.81.669.217.722-.218-.722Zm.834-6.884.384-.64-.384.64Zm.53 2.49-.742-.103c-.05.411.242.791.652.848l.09-.744Zm.095-1.622.725-.173-.725.173ZM3.667 2.222l-.218-.723.218.723Zm-.81.669-.66-.366.66.366Zm13.09 3.096-.345 2.84 1.486.207.344-2.84-1.486-.207Zm-1.759 4.052c-.32-.044-.52-.073-.67-.105a.647.647 0 0 1-.194-.06l-.767 1.278c.22.135.45.204.673.252.216.046.48.083.777.124l.181-1.489Zm-2.52-2.12c-.04.326-.083.68-.107.989-.02.27-.04.632.03.909l1.45-.345c.006.02-.002-.001-.002-.096 0-.084.004-.194.014-.327.021-.27.06-.588.1-.924l-1.485-.207Zm1.656 1.955a.655.655 0 0 1-.282-.402l-1.45.345c.138.55.479 1.035.965 1.335l.767-1.278Zm2.278-1.047c-.041.34-.069.56-.1.728a.885.885 0 0 1-.07.25l1.32.73c.117-.219.178-.448.222-.679.041-.225.075-.501.114-.822l-1.486-.207Zm-1.595 2.701c.299.042.562.079.782.093.228.015.466.01.71-.06l-.436-1.445a.635.635 0 0 1-.202.005c-.153-.01-.353-.037-.673-.082l-.18 1.49Zm1.425-1.724a.623.623 0 0 1-.369.312l.436 1.445a2.085 2.085 0 0 0 1.253-1.026l-1.32-.73Zm-.563-5.376c.32.044.52.073.67.105.142.03.183.054.194.06l.766-1.278a2.08 2.08 0 0 0-.672-.252c-.216-.047-.48-.083-.778-.124l-.18 1.489Zm2.563 1.766c.039-.322.073-.598.086-.827.013-.235.009-.473-.052-.717l-1.451.345a.897.897 0 0 1 .009.26c-.01.171-.036.391-.078.732l1.486.207Zm-1.7-1.6a.655.655 0 0 1 .283.401l1.45-.345a2.192 2.192 0 0 0-.966-1.335l-.766 1.278Zm-.683-1.655c-.298-.042-.561-.079-.781-.093a2.034 2.034 0 0 0-.71.06l.436 1.445a.633.633 0 0 1 .202-.005c.153.01.353.037.673.082l.18-1.49Zm-1.637 3.056c.04-.335.08-.654.123-.92.022-.132.044-.24.064-.32.024-.092.036-.111.026-.092l-1.32-.731c-.133.248-.201.605-.246.87-.05.306-.093.66-.133.986l1.486.207Zm.145-3.089a2.085 2.085 0 0 0-1.252 1.026l1.32.73a.623.623 0 0 1 .369-.31l-.437-1.446ZM3.002 7.074l.344-2.84-1.486-.207-.344 2.84 1.486.207Zm1.077 1.558c-.32-.044-.52-.072-.67-.105a.645.645 0 0 1-.194-.06L2.45 9.745c.22.135.448.205.672.253.216.046.48.082.778.123l.18-1.489ZM1.516 6.867c-.039.321-.073.597-.086.826a2.34 2.34 0 0 0 .052.717l1.45-.345a.897.897 0 0 1-.008-.26c.01-.17.036-.391.078-.731l-1.486-.207Zm1.7 1.6a.655.655 0 0 1-.283-.402l-1.45.345c.138.55.48 1.035.966 1.335l.766-1.278Zm2.32-1.402c-.04.336-.08.655-.123.92-.022.132-.044.24-.064.32-.024.092-.036.111-.026.093l1.32.73c.133-.248.202-.604.246-.87.05-.305.093-.66.133-.986l-1.486-.207ZM3.9 10.121c.298.042.56.079.781.093.228.015.466.011.71-.06L4.954 8.71a.632.632 0 0 1-.202.005 10.5 10.5 0 0 1-.673-.082l-.18 1.49Zm1.424-1.723a.623.623 0 0 1-.369.311l.436 1.445a2.085 2.085 0 0 0 1.253-1.026l-1.32-.73ZM4.76 3.02c.32.045.52.073.67.105.142.03.183.054.194.06l.767-1.277a2.08 2.08 0 0 0-.673-.253c-.216-.046-.48-.082-.778-.124l-.18 1.49Zm2.52 2.12c.04-.325.083-.68.107-.988.02-.27.04-.633-.03-.91l-1.45.346c-.006-.021.001 0 .002.095 0 .085-.004.194-.015.328-.02.269-.059.588-.1.923l1.486.207ZM5.624 3.188a.655.655 0 0 1 .282.402l1.45-.346a2.192 2.192 0 0 0-.965-1.334l-.767 1.278ZM4.94 1.532c-.298-.041-.56-.078-.78-.093a2.034 2.034 0 0 0-.711.06l.436 1.446a.632.632 0 0 1 .202-.006c.153.01.353.038.673.082l.18-1.489ZM3.346 4.233c.041-.34.068-.56.1-.728a.882.882 0 0 1 .07-.249l-1.32-.73c-.117.218-.178.447-.222.678-.042.225-.075.501-.114.823l1.486.206ZM3.45 1.5a2.085 2.085 0 0 0-1.253 1.026l1.32.731a.623.623 0 0 1 .369-.311l-.436-1.446Zm2.998 4.284 6.132.853.18-1.489-6.131-.853-.18 1.49Zm6.054 1.494-6.132-.853-.18 1.49 6.131.852.18-1.489ZM11.33 21.012l.457.583-.456-.583Zm.219-2.544-.721.207c-.1-.402.14-.82.539-.935l.182.728Zm.293 1.595.738.072-.738-.072Zm-4.802.07c-.1-.402.141-.82.54-.935a.72.72 0 0 1 .902.52l-1.442.414Zm1.125.985-.605.458.605-.458Zm.886.548-.123.75.123-.75Zm-1.677-6.705-.457-.583.457.583Zm.226 1.02a.773.773 0 0 1-.83.682.728.728 0 0 1-.646-.825l1.476.144Zm2.053-1.674.124-.75-.124.75Zm1.377 2.086.182.728a.72.72 0 0 1-.903-.521l.72-.207Zm-.49-1.538.605-.458-.605.458Zm10.637 3.33.457.584-.457-.583Zm.512-.948.737.072-.737-.072Zm-4.168-.483-.182-.728a.72.72 0 0 1 .903.52l-.72.208Zm.49 1.538-.605.457.605-.457Zm.886.548-.123.75.123-.75Zm-1.677-6.705-.457-.583.457.583Zm-.218 2.544.72-.207c.101.402-.14.82-.538.934l-.182-.727Zm-.294-1.595-.737-.072.737.072Zm2.792-1.603.123-.75-.123.75Zm.886.548.605-.458-.605.458Zm-10.35 8.688c.31-.09.506-.146.65-.2a.664.664 0 0 0 .188-.088l.913 1.166c-.2.164-.417.265-.633.344-.208.076-.464.15-.755.233l-.364-1.455Zm2.234-2.456c.08.318.166.663.227.966.054.264.118.622.083.907l-1.475-.143c-.003.022.002 0-.01-.094a4.054 4.054 0 0 0-.054-.321 22.349 22.349 0 0 0-.213-.901l1.442-.414Zm-1.396 2.168a.67.67 0 0 0 .23-.438l1.476.143a2.244 2.244 0 0 1-.793 1.46l-.913-1.165Zm-2.392-.71c.083.331.137.546.189.707a.86.86 0 0 0 .1.235l-1.211.915a2.26 2.26 0 0 1-.305-.644c-.07-.218-.136-.487-.215-.8l1.442-.413Zm1.917 2.453c-.29.083-.546.157-.762.203-.224.047-.46.076-.71.04l.248-1.498c.013.002.06.006.203-.024.15-.031.346-.087.657-.176l.364 1.455ZM8.77 20.66c.107.15.256.235.405.256l-.247 1.498a2.035 2.035 0 0 1-1.368-.84l1.21-.914Zm-.1-5.405c-.312.09-.507.146-.652.2a.663.663 0 0 0-.188.088l-.913-1.166c.2-.165.418-.265.633-.344.209-.077.465-.15.755-.233l.364 1.455Zm-.84.288a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.349-1.095.793-1.46l.913 1.166Zm.475-1.743c.29-.084.547-.158.763-.203.223-.047.459-.076.709-.04l-.247 1.498a.637.637 0 0 0-.204.023c-.15.032-.346.088-.657.177l-.364-1.455ZM10.31 16.6c-.082-.327-.16-.638-.236-.894a4.043 4.043 0 0 0-.103-.308c-.034-.088-.049-.104-.036-.086l1.21-.915c.165.229.276.573.353.83.088.296.174.641.254.96l-1.442.413Zm-.532-3.043a2.035 2.035 0 0 1 1.368.84l-1.21.915a.607.607 0 0 0-.405-.256l.247-1.499Zm10.984 2.638-.692-2.767 1.441-.414.692 2.767-1.441.414Zm-.88 1.696c.312-.09.507-.146.652-.2a.662.662 0 0 0 .187-.088l.914 1.166c-.2.164-.418.265-.634.344-.208.076-.464.15-.754.233l-.364-1.455Zm2.321-2.11c.079.313.146.582.188.807.042.232.067.469.036.72l-1.475-.143a.891.891 0 0 0-.024-.257 12.78 12.78 0 0 0-.166-.713l1.441-.414Zm-1.482 1.822a.67.67 0 0 0 .23-.438l1.476.143a2.244 2.244 0 0 1-.792 1.46l-.914-1.165Zm-2.478-1.056c.082.326.16.637.236.894.038.128.072.23.103.308.034.087.049.104.036.086l-1.211.915c-.164-.229-.275-.573-.352-.831-.088-.295-.174-.64-.254-.958l1.442-.414Zm2.004 2.799c-.29.083-.547.157-.763.203-.223.047-.459.076-.71.04l.248-1.498c.013.002.06.006.203-.024.151-.031.346-.087.658-.176l.364 1.455Zm-1.63-1.511c.108.15.257.235.405.256l-.247 1.498a2.034 2.034 0 0 1-1.368-.84l1.21-.914Zm-.1-5.405c-.312.09-.507.146-.652.2a.665.665 0 0 0-.187.088l-.914-1.166c.2-.165.418-.265.634-.344.208-.077.464-.15.755-.233l.363 1.455Zm-2.235 2.456c-.08-.318-.166-.663-.227-.966-.054-.264-.118-.622-.083-.908l1.475.144c.003-.023-.002 0 .01.093.01.084.027.191.054.322.054.264.131.574.213.901l-1.442.414Zm1.396-2.168a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.348-1.095.792-1.46l.914 1.166Zm.474-1.743c.29-.083.547-.157.763-.203.223-.047.459-.076.71-.04l-.248 1.498a.637.637 0 0 0-.203.023c-.15.032-.346.088-.657.177l-.364-1.455Zm1.918 2.453a12.758 12.758 0 0 0-.189-.707.861.861 0 0 0-.1-.235l1.211-.915c.144.202.233.42.305.644.07.217.136.486.214.8l-1.441.413Zm-.446-2.697a2.035 2.035 0 0 1 1.368.84l-1.21.915a.607.607 0 0 0-.405-.256l.247-1.499Zm-2.439 4.675-5.972 1.715-.364-1.455 5.972-1.715.364 1.455Zm-5.817 2.334 5.972-1.714.364 1.455-5.972 1.714-.364-1.455Z" fill="currentColor" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.94 10.513-.383.639.384-.64Zm-.53-2.491.743.103a.766.766 0 0 0-.652-.848l-.09.745Zm-.094 1.622-.725.173.725-.173Zm3.776.526.66.365-.66-.365Zm-.81.668.217.723-.218-.723Zm.834-6.884.383-.639-.383.64Zm.624.869.726-.173-.726.173Zm-2.964-1.194-.219-.723.219.723Zm-1.107 2.263-.09.744c.41.057.783-.23.833-.64l-.743-.104Zm.296-1.595-.66-.365.66.365ZM2.832 9.106l-.383.639.383-.639Zm-.624-.868-.726.172.726-.172Zm4.071-1.07.09-.744a.734.734 0 0 0-.833.641l.743.104Zm-.296 1.595.66.365-.66-.365Zm-.81.669.217.722-.218-.722Zm.834-6.884.384-.64-.384.64Zm.53 2.49-.742-.103c-.05.411.242.791.652.848l.09-.744Zm.095-1.622.725-.173-.725.173ZM3.667 2.222l-.218-.723.218.723Zm-.81.669-.66-.366.66.366Zm13.09 3.096-.345 2.84 1.486.207.344-2.84-1.486-.207Zm-1.759 4.052c-.32-.044-.52-.073-.67-.105a.647.647 0 0 1-.194-.06l-.767 1.278c.22.135.45.204.673.252.216.046.48.083.777.124l.181-1.489Zm-2.52-2.12c-.04.326-.083.68-.107.989-.02.27-.04.632.03.909l1.45-.345c.006.02-.002-.001-.002-.096 0-.084.004-.194.014-.327.021-.27.06-.588.1-.924l-1.485-.207Zm1.656 1.955a.655.655 0 0 1-.282-.402l-1.45.345c.138.55.479 1.035.965 1.335l.767-1.278Zm2.278-1.047c-.041.34-.069.56-.1.728a.885.885 0 0 1-.07.25l1.32.73c.117-.219.178-.448.222-.679.041-.225.075-.501.114-.822l-1.486-.207Zm-1.595 2.701c.299.042.562.079.782.093.228.015.466.01.71-.06l-.436-1.445a.635.635 0 0 1-.202.005c-.153-.01-.353-.037-.673-.082l-.18 1.49Zm1.425-1.724a.623.623 0 0 1-.369.312l.436 1.445a2.085 2.085 0 0 0 1.253-1.026l-1.32-.73Zm-.563-5.376c.32.044.52.073.67.105.142.03.183.054.194.06l.766-1.278a2.08 2.08 0 0 0-.672-.252c-.216-.047-.48-.083-.778-.124l-.18 1.489Zm2.563 1.766c.039-.322.073-.598.086-.827.013-.235.009-.473-.052-.717l-1.451.345a.897.897 0 0 1 .009.26c-.01.171-.036.391-.078.732l1.486.207Zm-1.7-1.6a.655.655 0 0 1 .283.401l1.45-.345a2.192 2.192 0 0 0-.966-1.335l-.766 1.278Zm-.683-1.655c-.298-.042-.561-.079-.781-.093a2.034 2.034 0 0 0-.71.06l.436 1.445a.633.633 0 0 1 .202-.005c.153.01.353.037.673.082l.18-1.49Zm-1.637 3.056c.04-.335.08-.654.123-.92.022-.132.044-.24.064-.32.024-.092.036-.111.026-.092l-1.32-.731c-.133.248-.201.605-.246.87-.05.306-.093.66-.133.986l1.486.207Zm.145-3.089a2.085 2.085 0 0 0-1.252 1.026l1.32.73a.623.623 0 0 1 .369-.31l-.437-1.446ZM3.002 7.074l.344-2.84-1.486-.207-.344 2.84 1.486.207Zm1.077 1.558c-.32-.044-.52-.072-.67-.105a.645.645 0 0 1-.194-.06L2.45 9.745c.22.135.448.205.672.253.216.046.48.082.778.123l.18-1.489ZM1.516 6.867c-.039.321-.073.597-.086.826a2.34 2.34 0 0 0 .052.717l1.45-.345a.897.897 0 0 1-.008-.26c.01-.17.036-.391.078-.731l-1.486-.207Zm1.7 1.6a.655.655 0 0 1-.283-.402l-1.45.345c.138.55.48 1.035.966 1.335l.766-1.278Zm2.32-1.402c-.04.336-.08.655-.123.92-.022.132-.044.24-.064.32-.024.092-.036.111-.026.093l1.32.73c.133-.248.202-.604.246-.87.05-.305.093-.66.133-.986l-1.486-.207ZM3.9 10.121c.298.042.56.079.781.093.228.015.466.011.71-.06L4.954 8.71a.632.632 0 0 1-.202.005 10.5 10.5 0 0 1-.673-.082l-.18 1.49Zm1.424-1.723a.623.623 0 0 1-.369.311l.436 1.445a2.085 2.085 0 0 0 1.253-1.026l-1.32-.73ZM4.76 3.02c.32.045.52.073.67.105.142.03.183.054.194.06l.767-1.277a2.08 2.08 0 0 0-.673-.253c-.216-.046-.48-.082-.778-.124l-.18 1.49Zm2.52 2.12c.04-.325.083-.68.107-.988.02-.27.04-.633-.03-.91l-1.45.346c-.006-.021.001 0 .002.095 0 .085-.004.194-.015.328-.02.269-.059.588-.1.923l1.486.207ZM5.624 3.188a.655.655 0 0 1 .282.402l1.45-.346a2.192 2.192 0 0 0-.965-1.334l-.767 1.278ZM4.94 1.532c-.298-.041-.56-.078-.78-.093a2.034 2.034 0 0 0-.711.06l.436 1.446a.632.632 0 0 1 .202-.006c.153.01.353.038.673.082l.18-1.489ZM3.346 4.233c.041-.34.068-.56.1-.728a.882.882 0 0 1 .07-.249l-1.32-.73c-.117.218-.178.447-.222.678-.042.225-.075.501-.114.823l1.486.206ZM3.45 1.5a2.085 2.085 0 0 0-1.253 1.026l1.32.731a.623.623 0 0 1 .369-.311l-.436-1.446Zm2.998 4.284 6.132.853.18-1.489-6.131-.853-.18 1.49Zm6.054 1.494-6.132-.853-.18 1.49 6.131.852.18-1.489Z" fill="currentColor" /><path opacity={0.5} d="m11.33 21.012.457.583-.456-.583Zm.219-2.544-.721.207c-.1-.402.14-.82.539-.935l.182.728Zm.293 1.595.738.072-.738-.072Zm-3.677 1.055-.605.458.605-.458Zm.886.548-.123.75.123-.75Zm-1.677-6.705-.457-.583.457.583Zm-.512.949-.738-.072.738.072Zm2.791-1.603.124-.75-.124.75Zm1.377 2.086.182.728a.72.72 0 0 1-.903-.521l.72-.207Zm-.49-1.538.605-.458-.605.458Zm10.637 3.33.457.584-.457-.583Zm.512-.948.737.072-.737-.072Zm-4.168-.483-.182-.728a.72.72 0 0 1 .903.52l-.72.208Zm.49 1.538-.605.457.605-.457Zm.886.548-.123.75.123-.75Zm-1.677-6.705-.457-.583.457.583Zm-.218 2.544.72-.207c.101.402-.14.82-.538.934l-.182-.727Zm-.294-1.595-.737-.072.737.072Zm2.792-1.603.123-.75-.123.75Zm.886.548.605-.458-.605.458ZM7.79 16.952l.692 2.767-1.442.413-.692-2.766 1.442-.414Zm2.245 3.765c.312-.09.507-.146.652-.2a.664.664 0 0 0 .187-.088l.913 1.166c-.2.164-.417.265-.633.344-.208.076-.464.15-.755.233l-.364-1.455Zm2.235-2.456c.08.318.166.663.227.966.054.264.118.622.083.907l-1.475-.143c-.003.022.002 0-.01-.094a4.054 4.054 0 0 0-.054-.321 22.349 22.349 0 0 0-.213-.901l1.442-.414Zm-1.396 2.168a.67.67 0 0 0 .23-.438l1.476.143a2.244 2.244 0 0 1-.793 1.46l-.913-1.165Zm-2.392-.71c.083.331.137.546.189.707a.86.86 0 0 0 .1.235l-1.211.915a2.26 2.26 0 0 1-.305-.644c-.07-.218-.136-.487-.215-.8l1.442-.413Zm1.917 2.453c-.29.083-.546.157-.762.203-.224.047-.46.076-.71.04l.248-1.498c.013.002.06.006.203-.024.15-.031.346-.087.657-.176l.364 1.455ZM8.77 20.66c.107.15.256.235.405.256l-.247 1.498a2.035 2.035 0 0 1-1.368-.84l1.21-.914Zm-.1-5.405c-.312.09-.507.146-.652.2a.663.663 0 0 0-.188.088l-.913-1.166c.2-.165.418-.265.633-.344.209-.077.465-.15.755-.233l.364 1.455Zm-2.322 2.11c-.078-.313-.146-.582-.187-.807a2.35 2.35 0 0 1-.037-.72l1.476.143a.891.891 0 0 0 .023.257c.03.167.084.382.167.713l-1.442.414Zm1.482-1.822a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.349-1.095.793-1.46l.913 1.166Zm.475-1.743c.29-.084.547-.158.763-.203.223-.047.459-.076.709-.04l-.247 1.498a.637.637 0 0 0-.204.023c-.15.032-.346.088-.657.177l-.364-1.455ZM10.31 16.6c-.082-.327-.16-.638-.236-.894a4.043 4.043 0 0 0-.103-.308c-.034-.088-.049-.104-.036-.086l1.21-.915c.165.229.276.573.353.83.088.296.174.641.254.96l-1.442.413Zm-.532-3.043a2.035 2.035 0 0 1 1.368.84l-1.21.915a.607.607 0 0 0-.405-.256l.247-1.499Zm10.984 2.638-.692-2.767 1.441-.414.692 2.767-1.441.414Zm-.88 1.696c.312-.09.507-.146.652-.2a.662.662 0 0 0 .187-.088l.914 1.166c-.2.164-.418.265-.634.344-.208.076-.464.15-.754.233l-.364-1.455Zm2.321-2.11c.079.313.146.582.188.807.042.232.067.469.036.72l-1.475-.143a.891.891 0 0 0-.024-.257 12.78 12.78 0 0 0-.166-.713l1.441-.414Zm-1.482 1.822a.67.67 0 0 0 .23-.438l1.476.143a2.244 2.244 0 0 1-.792 1.46l-.914-1.165Zm-2.478-1.056c.082.326.16.637.236.894.038.128.072.23.103.308.034.087.049.104.036.086l-1.211.915c-.164-.229-.275-.573-.352-.831-.088-.295-.174-.64-.254-.958l1.442-.414Zm2.004 2.799c-.29.083-.547.157-.763.203-.223.047-.459.076-.71.04l.248-1.498c.013.002.06.006.203-.024.151-.031.346-.087.658-.176l.364 1.455Zm-1.63-1.511c.108.15.257.235.405.256l-.247 1.498a2.034 2.034 0 0 1-1.368-.84l1.21-.914Zm-.1-5.405c-.312.09-.507.146-.652.2a.665.665 0 0 0-.187.088l-.914-1.166c.2-.165.418-.265.634-.344.208-.077.464-.15.755-.233l.363 1.455Zm-2.235 2.456c-.08-.318-.166-.663-.227-.966-.054-.264-.118-.622-.083-.908l1.475.144c.003-.023-.002 0 .01.093.01.084.027.191.054.322.054.264.131.574.213.901l-1.442.414Zm1.396-2.168a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.348-1.095.792-1.46l.914 1.166Zm.474-1.743c.29-.083.547-.157.763-.203.223-.047.459-.076.71-.04l-.248 1.498a.637.637 0 0 0-.203.023c-.15.032-.346.088-.657.177l-.364-1.455Zm1.918 2.453a12.758 12.758 0 0 0-.189-.707.861.861 0 0 0-.1-.235l1.211-.915c.144.202.233.42.305.644.07.217.136.486.214.8l-1.441.413Zm-.446-2.697a2.035 2.035 0 0 1 1.368.84l-1.21.915a.607.607 0 0 0-.405-.256l.247-1.499Zm-2.439 4.675-5.972 1.715-.364-1.455 5.972-1.715.364 1.455Zm-5.817 2.334 5.972-1.714.364 1.455-5.972 1.714-.364-1.455Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.94 10.513-.383.639.383-.64Zm-.53-2.491.743.103a.766.766 0 0 0-.652-.848l-.09.745Zm-.094 1.622-.725.173.725-.173Zm3.775.526.66.365-.66-.365Zm-.81.668.218.723-.218-.723Zm.835-6.884.383-.639-.383.64Zm.624.869.725-.173-.725.173Zm-2.965-1.194-.218-.723.218.723ZM12.67 5.892l-.09.744c.41.057.783-.23.832-.64l-.742-.104Zm.296-1.595-.66-.365.66.365ZM2.832 9.106l-.384.639.384-.639Zm-.625-.868-.725.172.725-.172Zm4.072-1.07.09-.744a.734.734 0 0 0-.833.641l.743.104Zm-.296 1.595.66.365-.66-.365Zm-.81.669.217.722-.218-.722Zm.834-6.884.383-.64-.383.64Zm.53 2.49-.743-.103c-.05.411.243.791.653.848l.09-.744Zm.094-1.622.726-.173-.726.173ZM3.667 2.222l-.218-.723.218.723Zm-.811.669-.66-.366.66.366Zm13.09 3.096-.344 2.84 1.485.207.345-2.84-1.486-.207Zm-1.758 4.052a10.48 10.48 0 0 1-.67-.105.644.644 0 0 1-.194-.06l-.767 1.278c.22.135.449.204.673.252.216.046.48.083.777.124l.18-1.489Zm-2.52-2.12c-.04.326-.083.68-.107.989-.02.27-.04.632.03.909l1.45-.345c.006.02-.002-.001-.002-.096 0-.084.004-.194.014-.327.02-.27.06-.588.1-.924l-1.486-.207Zm1.656 1.955a.655.655 0 0 1-.283-.402l-1.45.345c.138.55.48 1.035.966 1.335l.767-1.278Zm2.278-1.047c-.042.34-.069.56-.1.728a.88.88 0 0 1-.07.25l1.32.73c.117-.219.178-.448.221-.679.042-.225.075-.501.114-.822l-1.485-.207Zm-1.595 2.701c.298.042.561.079.782.093.227.015.465.01.71-.06l-.436-1.445a.634.634 0 0 1-.202.005c-.153-.01-.353-.037-.673-.082l-.18 1.49Zm1.425-1.724a.623.623 0 0 1-.37.312l.437 1.445a2.085 2.085 0 0 0 1.252-1.026l-1.32-.73Zm-.564-5.376c.32.044.52.073.67.105.143.03.184.054.194.06l.767-1.278a2.08 2.08 0 0 0-.672-.252c-.217-.047-.48-.083-.778-.124l-.18 1.489Zm2.564 1.766c.039-.322.073-.598.086-.827.013-.235.009-.473-.053-.717l-1.45.345a.897.897 0 0 1 .008.26c-.01.171-.036.391-.077.732l1.486.207Zm-1.7-1.6a.655.655 0 0 1 .283.401l1.45-.345a2.191 2.191 0 0 0-.966-1.335l-.766 1.278Zm-.683-1.655c-.298-.042-.561-.079-.781-.093a2.035 2.035 0 0 0-.71.06l.435 1.445a.631.631 0 0 1 .203-.005c.153.01.353.037.672.082l.181-1.49Zm-1.637 3.056c.04-.335.08-.654.123-.92.022-.132.044-.24.064-.32.023-.092.036-.111.026-.092l-1.32-.731c-.134.248-.202.605-.246.87-.05.306-.094.66-.133.986l1.486.207Zm.145-3.089a2.084 2.084 0 0 0-1.252 1.026l1.32.73a.623.623 0 0 1 .368-.31l-.436-1.446ZM3.001 7.074l.345-2.84-1.486-.207-.344 2.84L3 7.074ZM4.08 8.632c-.32-.044-.52-.072-.67-.105a.644.644 0 0 1-.194-.06l-.767 1.278c.22.135.45.205.673.253.216.046.48.082.777.123l.181-1.489ZM1.516 6.867c-.04.321-.073.597-.086.826-.014.235-.01.473.052.717l1.45-.345a.898.898 0 0 1-.008-.26c.01-.17.036-.391.077-.731l-1.485-.207Zm1.699 1.6a.655.655 0 0 1-.282-.402l-1.45.345c.138.55.479 1.035.965 1.335l.767-1.278Zm2.321-1.402c-.04.336-.08.655-.124.92a4.09 4.09 0 0 1-.064.32c-.023.092-.035.111-.025.093l1.32.73c.133-.248.201-.604.246-.87.05-.305.093-.66.133-.986l-1.486-.207Zm-1.638 3.056c.298.042.562.079.782.093.228.015.466.011.71-.06L4.954 8.71a.632.632 0 0 1-.202.005 10.5 10.5 0 0 1-.673-.082l-.18 1.49Zm1.425-1.723a.623.623 0 0 1-.369.311l.436 1.445a2.085 2.085 0 0 0 1.253-1.026l-1.32-.73ZM4.76 3.02c.32.045.52.073.67.105.142.03.183.054.194.06L6.39 1.91a2.08 2.08 0 0 0-.672-.253c-.216-.046-.48-.082-.778-.124l-.18 1.49Zm2.52 2.12c.04-.325.083-.68.106-.988.021-.27.04-.633-.03-.91l-1.45.346c-.005-.021.002 0 .003.095 0 .085-.005.194-.015.328a22.5 22.5 0 0 1-.1.923l1.486.207ZM5.624 3.188a.655.655 0 0 1 .282.402l1.45-.346A2.192 2.192 0 0 0 6.39 1.91l-.766 1.278ZM4.94 1.532c-.298-.041-.561-.078-.781-.093a2.035 2.035 0 0 0-.71.06l.436 1.446a.632.632 0 0 1 .202-.006c.153.01.353.038.673.082l.18-1.489ZM3.346 4.233c.041-.34.068-.56.1-.728a.882.882 0 0 1 .07-.249l-1.32-.73c-.118.218-.179.447-.222.678-.042.225-.075.501-.114.823l1.486.206ZM3.449 1.5a2.085 2.085 0 0 0-1.253 1.026l1.32.731a.623.623 0 0 1 .369-.311l-.436-1.446Zm2.998 4.284 6.131.853.181-1.489-6.132-.853-.18 1.49ZM12.5 7.277l-6.132-.853-.18 1.49 6.131.852.18-1.489ZM11.33 21.012l.457.583-.456-.583Zm.219-2.544-.721.207c-.1-.402.14-.82.539-.935l.182.728Zm.293 1.595.738.072-.738-.072Zm-3.677 1.055-.605.458.605-.458Zm.886.548-.123.75.123-.75Zm-1.677-6.705-.457-.583.457.583Zm-.512.949-.738-.072.738.072Zm2.791-1.603.124-.75-.124.75Zm1.377 2.086.182.728a.72.72 0 0 1-.903-.521l.72-.207Zm-.49-1.538.605-.458-.605.458Zm10.637 3.33.457.584-.457-.583Zm.512-.948.737.072-.737-.072Zm-4.168-.483-.182-.728a.72.72 0 0 1 .903.52l-.72.208Zm.49 1.538-.605.457.605-.457Zm.886.548-.123.75.123-.75Zm-1.677-6.705-.457-.583.457.583Zm-.218 2.544.72-.207c.101.402-.14.82-.538.934l-.182-.727Zm-.294-1.595-.737-.072.737.072Zm2.792-1.603.123-.75-.123.75Zm.886.548.605-.458-.605.458ZM7.79 16.952l.692 2.767-1.442.413-.692-2.766 1.442-.414Zm2.245 3.765c.312-.09.507-.146.652-.2a.664.664 0 0 0 .187-.088l.913 1.166c-.2.164-.417.265-.633.344-.208.076-.464.15-.755.233l-.364-1.455Zm2.235-2.456c.08.318.166.663.227.966.054.264.118.622.083.907l-1.475-.143c-.003.022.002 0-.01-.094a4.054 4.054 0 0 0-.054-.321 22.349 22.349 0 0 0-.213-.901l1.442-.414Zm-1.396 2.168a.67.67 0 0 0 .23-.438l1.476.143a2.244 2.244 0 0 1-.793 1.46l-.913-1.165Zm-2.392-.71c.083.331.137.546.189.707a.86.86 0 0 0 .1.235l-1.211.915a2.26 2.26 0 0 1-.305-.644c-.07-.218-.136-.487-.215-.8l1.442-.413Zm1.917 2.453c-.29.083-.546.157-.762.203-.224.047-.46.076-.71.04l.248-1.498c.013.002.06.006.203-.024.15-.031.346-.087.657-.176l.364 1.455ZM8.77 20.66c.107.15.256.235.405.256l-.247 1.498a2.035 2.035 0 0 1-1.368-.84l1.21-.914Zm-.1-5.405c-.312.09-.507.146-.652.2a.663.663 0 0 0-.188.088l-.913-1.166c.2-.165.418-.265.633-.344.209-.077.465-.15.755-.233l.364 1.455Zm-2.322 2.11c-.078-.313-.146-.582-.187-.807a2.35 2.35 0 0 1-.037-.72l1.476.143a.891.891 0 0 0 .023.257c.03.167.084.382.167.713l-1.442.414Zm1.482-1.822a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.349-1.095.793-1.46l.913 1.166Zm.475-1.743c.29-.084.547-.158.763-.203.223-.047.459-.076.709-.04l-.247 1.498a.637.637 0 0 0-.204.023c-.15.032-.346.088-.657.177l-.364-1.455ZM10.31 16.6c-.082-.327-.16-.638-.236-.894a4.043 4.043 0 0 0-.103-.308c-.034-.088-.049-.104-.036-.086l1.21-.915c.165.229.276.573.353.83.088.296.174.641.254.96l-1.442.413Zm-.532-3.043a2.035 2.035 0 0 1 1.368.84l-1.21.915a.607.607 0 0 0-.405-.256l.247-1.499Zm10.984 2.638-.692-2.767 1.441-.414.692 2.767-1.441.414Zm-.88 1.696c.312-.09.507-.146.652-.2a.662.662 0 0 0 .187-.088l.914 1.166c-.2.164-.418.265-.634.344-.208.076-.464.15-.754.233l-.364-1.455Zm2.321-2.11c.079.313.146.582.188.807.042.232.067.469.036.72l-1.475-.143a.891.891 0 0 0-.024-.257 12.78 12.78 0 0 0-.166-.713l1.441-.414Zm-1.482 1.822a.67.67 0 0 0 .23-.438l1.476.143a2.244 2.244 0 0 1-.792 1.46l-.914-1.165Zm-2.478-1.056c.082.326.16.637.236.894.038.128.072.23.103.308.034.087.049.104.036.086l-1.211.915c-.164-.229-.275-.573-.352-.831-.088-.295-.174-.64-.254-.958l1.442-.414Zm2.004 2.799c-.29.083-.547.157-.763.203-.223.047-.459.076-.71.04l.248-1.498c.013.002.06.006.203-.024.151-.031.346-.087.658-.176l.364 1.455Zm-1.63-1.511c.108.15.257.235.405.256l-.247 1.498a2.034 2.034 0 0 1-1.368-.84l1.21-.914Zm-.1-5.405c-.312.09-.507.146-.652.2a.665.665 0 0 0-.187.088l-.914-1.166c.2-.165.418-.265.634-.344.208-.077.464-.15.755-.233l.363 1.455Zm-2.235 2.456c-.08-.318-.166-.663-.227-.966-.054-.264-.118-.622-.083-.908l1.475.144c.003-.023-.002 0 .01.093.01.084.027.191.054.322.054.264.131.574.213.901l-1.442.414Zm1.396-2.168a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.348-1.095.792-1.46l.914 1.166Zm.474-1.743c.29-.083.547-.157.763-.203.223-.047.459-.076.71-.04l-.248 1.498a.637.637 0 0 0-.203.023c-.15.032-.346.088-.657.177l-.364-1.455Zm1.918 2.453a12.758 12.758 0 0 0-.189-.707.861.861 0 0 0-.1-.235l1.211-.915c.144.202.233.42.305.644.07.217.136.486.214.8l-1.441.413Zm-.446-2.697a2.035 2.035 0 0 1 1.368.84l-1.21.915a.607.607 0 0 0-.405-.256l.247-1.499Zm-2.439 4.675-5.972 1.715-.364-1.455 5.972-1.715.364 1.455Zm-5.817 2.334 5.972-1.714.364 1.455-5.972 1.714-.364-1.455Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m4.929 1.53.049.007c.288.04.542.075.753.12.224.048.452.118.67.252.482.297.82.777.958 1.324.069.274.05.636.03.906l-.024.257 4.657.648.035-.228c.044-.266.112-.623.247-.874a2.103 2.103 0 0 1 1.263-1.034c.247-.071.486-.076.714-.06.214.013.469.049.757.089l.048.007c.288.04.543.075.753.12.225.048.452.117.67.251.482.298.82.778.958 1.324.061.243.066.48.052.715-.012.224-.045.492-.083.804l-.35 2.885c-.037.311-.07.58-.111.8-.043.23-.104.46-.223.681a2.103 2.103 0 0 1-1.263 1.035 2.043 2.043 0 0 1-.714.06c-.214-.014-.468-.05-.756-.09l-.05-.006c-.287-.04-.542-.076-.752-.12a2.071 2.071 0 0 1-.67-.252 2.172 2.172 0 0 1-.958-1.324c-.07-.275-.05-.636-.03-.907.007-.082.014-.169.023-.257l-4.656-.648-.036.229c-.044.266-.112.623-.246.873a2.103 2.103 0 0 1-1.264 1.035 2.044 2.044 0 0 1-.713.06c-.214-.014-.47-.05-.757-.09l-.049-.006c-.288-.04-.543-.075-.753-.12a2.072 2.072 0 0 1-.67-.252 2.173 2.173 0 0 1-.958-1.323 2.334 2.334 0 0 1-.052-.715c.013-.224.045-.492.083-.804l.35-2.885c.038-.312.07-.58.112-.8.043-.23.104-.46.222-.681A2.103 2.103 0 0 1 3.458 1.5c.247-.071.486-.075.714-.06.214.014.469.05.757.09Zm-.855 1.407a.63.63 0 0 0-.2.005.604.604 0 0 0-.357.303.878.878 0 0 0-.07.247c-.031.167-.058.388-.1.728l-.344 2.84c-.041.34-.068.56-.077.731-.01.165 0 .23.009.263a.674.674 0 0 0 .29.413.648.648 0 0 0 .197.062c.15.032.35.06.67.105.32.044.52.072.673.082a.63.63 0 0 0 .199-.005.603.603 0 0 0 .354-.296c0-.002.012-.03.029-.097.02-.08.042-.188.064-.32.044-.265.083-.585.123-.92a.75.75 0 0 1 .848-.653l6.132.854a.75.75 0 0 1 .64.833c-.04.335-.078.654-.099.923a4.13 4.13 0 0 0-.015.328c0 .074.006.104.005.104a.673.673 0 0 0 .289.407.647.647 0 0 0 .197.061c.15.033.35.06.67.105.32.045.52.072.673.082a.63.63 0 0 0 .199-.005.604.604 0 0 0 .358-.302.874.874 0 0 0 .07-.247c.03-.168.058-.388.099-.728L15.944 6c.042-.34.068-.561.078-.732.01-.164-.001-.23-.01-.262a.674.674 0 0 0-.29-.413.647.647 0 0 0-.197-.062c-.15-.032-.35-.06-.67-.105-.32-.045-.52-.072-.672-.082a.63.63 0 0 0-.2.005.603.603 0 0 0-.354.295c0 .003-.011.03-.028.097a4.13 4.13 0 0 0-.064.32 22.38 22.38 0 0 0-.124.92.75.75 0 0 1-.848.653l-6.131-.853a.75.75 0 0 1-.641-.833c.04-.336.079-.655.1-.924.01-.133.015-.243.014-.327 0-.074-.005-.104-.005-.105a.672.672 0 0 0-.288-.406.648.648 0 0 0-.197-.062c-.15-.032-.35-.06-.67-.105a10.5 10.5 0 0 0-.673-.082Zm15.123 9.309c-.15.032-.345.087-.657.177-.311.089-.506.145-.652.199a.672.672 0 0 0-.192.091.706.706 0 0 0-.243.455s0 .03.009.105c.01.084.028.191.054.322.054.264.132.574.213.901a.75.75 0 0 1-.52.903l-5.973 1.714a.75.75 0 0 1-.934-.539c-.082-.327-.16-.637-.236-.894a4.041 4.041 0 0 0-.103-.307c-.024-.061-.038-.087-.04-.09a.57.57 0 0 0-.375-.234.627.627 0 0 0-.197.023c-.15.032-.346.087-.657.177-.311.089-.507.145-.652.199a.67.67 0 0 0-.192.091.707.707 0 0 0-.244.462.901.901 0 0 0 .024.262c.03.167.083.382.166.713l.692 2.767c.083.331.137.546.189.707.05.155.082.209.097.23a.572.572 0 0 0 .381.243c.01.001.054.006.198-.024.15-.031.346-.087.657-.176.311-.09.506-.146.652-.2a.672.672 0 0 0 .192-.091.707.707 0 0 0 .243-.455s0-.03-.008-.105a4.093 4.093 0 0 0-.055-.322 22.309 22.309 0 0 0-.213-.9.75.75 0 0 1 .52-.904l5.973-1.714a.75.75 0 0 1 .934.539c.082.327.16.637.236.894.038.128.073.23.103.308.024.06.038.086.04.09a.57.57 0 0 0 .375.234c.01.001.054.006.197-.024.15-.031.346-.087.657-.176.312-.09.507-.146.652-.2a.67.67 0 0 0 .193-.091.707.707 0 0 0 .243-.462.9.9 0 0 0-.023-.262c-.031-.167-.084-.382-.167-.713l-.692-2.767a12.78 12.78 0 0 0-.189-.706.854.854 0 0 0-.097-.231.571.571 0 0 0-.381-.242.631.631 0 0 0-.198.023Zm-.308-1.468a2.04 2.04 0 0 1 .715-.04c.565.079 1.062.393 1.391.853.146.204.236.425.307.648.068.212.133.474.21.777l.702 2.81c.076.304.142.566.182.786.042.232.067.467.037.716a2.206 2.206 0 0 1-.78 1.437 2.1 2.1 0 0 1-.628.34c-.203.075-.45.146-.731.227l-.048.013c-.28.08-.528.152-.738.196a2.043 2.043 0 0 1-.716.041 2.07 2.07 0 0 1-1.39-.854c-.167-.231-.279-.578-.355-.835l-.06-.207-4.54 1.303c.02.09.04.177.057.262.054.265.117.621.082.902a2.206 2.206 0 0 1-.78 1.438 2.096 2.096 0 0 1-.628.34c-.202.075-.45.146-.73.227l-.048.013c-.28.08-.528.152-.739.196a2.043 2.043 0 0 1-.715.041 2.07 2.07 0 0 1-1.391-.854 2.275 2.275 0 0 1-.307-.648c-.068-.212-.133-.474-.21-.777l-.702-2.81c-.076-.304-.142-.566-.182-.786a2.335 2.335 0 0 1-.037-.715 2.206 2.206 0 0 1 .78-1.437c.197-.162.413-.262.628-.341.203-.075.45-.146.732-.226l.047-.014c.28-.08.528-.152.738-.196a2.04 2.04 0 0 1 .716-.04 2.07 2.07 0 0 1 1.39.853c.167.232.279.579.355.835l.06.207 4.54-1.303c-.02-.09-.04-.177-.056-.261-.055-.266-.118-.622-.083-.903a2.206 2.206 0 0 1 .78-1.437 2.1 2.1 0 0 1 .628-.341c.202-.075.45-.146.73-.226l.048-.014c.28-.08.529-.152.739-.196Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m16.345 8.93.344-2.84c.08-.662.12-.992.051-1.267a1.423 1.423 0 0 0-.624-.869c-.23-.142-.54-.185-1.157-.27-.618-.087-.927-.13-1.184-.055-.342.099-.634.34-.81.668-.133.247-.216.933-.296 1.595l-6.132-.853c.08-.662.164-1.348.094-1.623a1.423 1.423 0 0 0-.624-.868c-.23-.142-.54-.185-1.157-.271-.618-.086-.927-.13-1.183-.055-.343.099-.634.34-.811.669-.133.247-.173.577-.253 1.24l-.344 2.84c-.08.66-.12.992-.052 1.267.093.366.317.679.625.868.23.142.54.185 1.157.27.618.087.926.13 1.183.056.342-.1.634-.34.81-.669.133-.247.217-.933.297-1.594l6.131.853c-.08.661-.163 1.347-.094 1.622.092.367.317.68.624.869.231.142.54.185 1.158.27.617.087.926.13 1.183.055.342-.099.634-.34.81-.668.133-.247.173-.578.253-1.24ZM7.761 19.925 7.07 17.16c-.161-.644-.242-.967-.207-1.249.046-.377.23-.718.512-.95.21-.173.511-.259 1.113-.432.602-.172.903-.259 1.166-.221.352.05.67.246.886.548.162.226.33.894.49 1.538l5.973-1.714c-.161-.645-.328-1.313-.294-1.595.047-.377.23-.718.512-.95.211-.173.512-.259 1.114-.432.601-.172.902-.259 1.166-.221.351.05.67.246.886.548.162.226.242.548.404 1.192l.692 2.767c.16.644.241.966.207 1.249-.047.376-.23.718-.512.949-.21.173-.512.26-1.113.432-.602.173-.903.26-1.167.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.329-.894-.49-1.538l-5.972 1.714c.16.644.328 1.312.293 1.595-.046.376-.23.718-.511.949-.211.173-.512.26-1.114.432-.601.173-.902.26-1.166.222a1.321 1.321 0 0 1-.886-.548c-.162-.226-.243-.548-.404-1.192Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m16.345 8.93.344-2.84c.08-.662.12-.992.051-1.267a1.423 1.423 0 0 0-.624-.869c-.23-.142-.54-.185-1.157-.27-.618-.087-.927-.13-1.184-.055-.342.099-.634.34-.81.668-.133.247-.216.933-.296 1.595l-6.132-.853c.08-.662.164-1.348.094-1.623a1.423 1.423 0 0 0-.624-.868c-.23-.142-.54-.185-1.157-.271-.618-.086-.927-.13-1.183-.055-.343.099-.634.34-.811.669-.133.247-.173.577-.253 1.24l-.344 2.84c-.08.66-.12.992-.052 1.267.093.366.317.679.625.868.23.142.54.185 1.157.27.618.087.926.13 1.183.056.342-.1.634-.34.81-.669.133-.247.217-.933.297-1.594l6.131.853c-.08.661-.163 1.347-.094 1.622.092.367.317.68.624.869.231.142.54.185 1.158.27.617.087.926.13 1.183.055.342-.099.634-.34.81-.668.133-.247.173-.578.253-1.24Z" fill="currentColor" /><path opacity={0.5} d="M7.761 19.925 7.07 17.16c-.161-.644-.242-.967-.207-1.249.046-.377.23-.718.512-.95.21-.173.511-.259 1.113-.432.602-.172.903-.259 1.166-.221.352.05.67.246.886.548.162.226.33.894.49 1.538l5.973-1.714c-.161-.645-.328-1.313-.294-1.595.047-.377.23-.718.512-.95.211-.173.512-.259 1.114-.432.601-.172.902-.259 1.166-.221.351.05.67.246.886.548.162.226.242.548.404 1.192l.692 2.767c.16.644.241.966.207 1.249-.047.376-.23.718-.512.949-.21.173-.512.26-1.113.432-.602.173-.903.26-1.167.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.329-.894-.49-1.538l-5.972 1.714c.16.644.328 1.312.293 1.595-.046.376-.23.718-.511.949-.211.173-.512.26-1.114.432-.601.173-.902.26-1.166.222a1.321 1.321 0 0 1-.886-.548c-.162-.226-.243-.548-.404-1.192Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Dumbbells