import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Dialog2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.87 21.51.645.382-.646-.382Zm.259-.438-.646-.382.646.382Zm-2.258 0 .646-.382-.646.382Zm.26.438-.646.382.646-.382ZM1.25 12.8a.75.75 0 0 0 1.5 0h-1.5Zm1.747 4.044a.75.75 0 0 0-1.385.574l1.385-.574Zm3.292 2.741.024-.75-.024.75Zm-1.82-.29-.287.693.287-.692Zm13.226-2.164.693.287-.693-.287Zm-3.984 2.454-.024-.75.024.75Zm1.82-.29.287.693-.287-.692ZM3.91 6.59l-.392-.639.392.64ZM2.59 7.91l-.64-.392.64.392Zm5.326 11.912-.381.646.381-.646Zm6.932-12.908a.75.75 0 1 0 .304-1.47l-.304 1.47Zm3.707 1.934a.75.75 0 1 0-1.469.304l1.47-.304Zm-7.04 13.044.26-.438-1.292-.764-.26.438 1.292.764Zm-3.29-.438.26.438 1.291-.764-.26-.438-1.29.764Zm1.999-.326a.25.25 0 0 1-.224.122.25.25 0 0 1-.224-.122l-1.29.764c.676 1.144 2.352 1.144 3.029 0l-1.291-.764ZM8.8 6.75h2.4v-1.5H8.8v1.5Zm8.45 6.05v.8h1.5v-.8h-1.5ZM6.313 18.835c-.792-.025-1.223-.094-1.557-.232l-.574 1.385c.597.248 1.255.32 2.083.347l.048-1.5Zm-4.701-1.417a4.75 4.75 0 0 0 2.57 2.57l.574-1.385a3.25 3.25 0 0 1-1.759-1.76l-1.385.575ZM17.25 13.6c0 .942 0 1.611-.036 2.138-.036.52-.103.845-.211 1.106l1.385.574c.197-.474.281-.982.322-1.578.04-.59.04-1.318.04-2.24h-1.5Zm-3.515 6.735c.828-.027 1.486-.1 2.083-.347l-.574-1.385c-.335.138-.765.207-1.557.232l.048 1.5Zm3.268-3.491a3.25 3.25 0 0 1-1.76 1.759l.575 1.385a4.75 4.75 0 0 0 2.57-2.57l-1.385-.574ZM8.8 5.25c-1.295 0-2.319 0-3.137.077-.83.079-1.526.244-2.145.623l.784 1.279c.343-.21.783-.34 1.503-.409.73-.07 1.671-.07 2.995-.07v-1.5ZM2.75 12.8c0-1.324 0-2.264.07-2.995.069-.72.199-1.16.409-1.503L1.95 7.518c-.38.619-.544 1.315-.623 2.145-.078.818-.077 1.842-.077 3.137h1.5Zm.768-6.85A4.75 4.75 0 0 0 1.95 7.518l1.279.784a3.25 3.25 0 0 1 1.073-1.073L3.518 5.95Zm5.999 14.74c-.201-.34-.377-.638-.548-.874a2.23 2.23 0 0 0-.67-.64l-.764 1.292c.046.027.11.077.22.23.12.165.256.393.47.756l1.292-.764Zm-3.252-.355c.446.014.73.024.947.05.204.025.281.058.323.083l.763-1.291c-.29-.171-.594-.243-.905-.28-.298-.037-.661-.048-1.08-.062l-.048 1.5Zm5.51 1.119c.214-.363.35-.591.47-.756.11-.153.174-.203.22-.23l-.763-1.291a2.23 2.23 0 0 0-.67.64c-.172.235-.348.534-.549.873l1.291.764Zm1.912-2.619c-.419.014-.782.025-1.08.061-.31.038-.616.11-.905.28l.763 1.292c.042-.025.119-.058.323-.083.216-.026.501-.036.947-.05l-.048-1.5ZM11.2 6.75c1.798 0 2.873.004 3.648.164l.304-1.47c-.963-.198-2.227-.194-3.952-.194v1.5Zm7.55 6.05c0-1.725.004-2.989-.195-3.952l-1.469.304c.16.775.164 1.85.164 3.648h1.5Z" fill="currentColor" /><path d="M7.033 6c.052-.992.183-1.661.52-2.21A3.75 3.75 0 0 1 8.79 2.554C9.692 2 10.92 2 13.375 2h2.25c1.528 0 2.58 0 3.375.133m-1 12.602c.748-.025 1.253-.091 1.685-.27a3.75 3.75 0 0 0 2.03-2.03c.285-.689.285-1.563.285-3.31v-.75c0-1.528 0-2.58-.133-3.375" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6.51 13h.008M10 13h.009m3.482 0h.009" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.87 21.51.645.382-.646-.382Zm.259-.438-.646-.382.646.382Zm-2.258 0 .646-.382-.646.382Zm.26.438-.646.382.646-.382Zm-6.827-4.38.693-.286-.693.287Zm3.985 2.455.024-.75-.024.75Zm-1.82-.29-.287.693.287-.692Zm13.226-2.164.693.287-.693-.287Zm-3.984 2.454-.024-.75.024.75Zm1.82-.29.287.693-.287-.692ZM16.09 6.59l.392-.639-.392.64Zm1.32 1.321.64-.392-.64.392ZM3.91 6.59l-.392-.64.392.64ZM2.59 7.91l-.64-.392.64.392Zm5.326 11.912-.381.646.381-.646Zm3.599 2.07.26-.438-1.292-.764-.26.438 1.292.764Zm-3.29-.438.26.438 1.291-.764-.26-.438-1.29.764Zm1.999-.326a.25.25 0 0 1-.224.122.25.25 0 0 1-.224-.122l-1.29.764c.676 1.144 2.352 1.144 3.029 0l-1.291-.764ZM8.8 6.75h2.4v-1.5H8.8v1.5Zm8.45 6.05v.8h1.5v-.8h-1.5Zm-14.5.8v-.8h-1.5v.8h1.5Zm-1.5 0c0 .922 0 1.65.04 2.24.04.596.125 1.104.322 1.578l1.385-.574c-.108-.261-.175-.587-.21-1.106-.037-.527-.037-1.196-.037-2.138h-1.5Zm5.063 5.235c-.792-.025-1.223-.094-1.557-.232l-.574 1.385c.597.248 1.255.32 2.083.347l.048-1.5Zm-4.701-1.417a4.75 4.75 0 0 0 2.57 2.57l.574-1.385a3.25 3.25 0 0 1-1.759-1.76l-1.385.575ZM17.25 13.6c0 .942 0 1.611-.036 2.138-.036.52-.103.845-.211 1.106l1.385.574c.197-.474.281-.982.322-1.578.04-.59.04-1.318.04-2.24h-1.5Zm-3.515 6.735c.828-.027 1.486-.1 2.083-.347l-.574-1.385c-.335.138-.765.207-1.557.232l.048 1.5Zm3.268-3.491a3.25 3.25 0 0 1-1.76 1.759l.575 1.385a4.75 4.75 0 0 0 2.57-2.57l-1.385-.574ZM11.2 6.75c1.324 0 2.264 0 2.995.07.72.069 1.16.199 1.503.409l.784-1.279c-.619-.38-1.315-.544-2.145-.623-.818-.078-1.842-.077-3.137-.077v1.5Zm7.55 6.05c0-1.295 0-2.319-.077-3.137-.079-.83-.244-1.526-.623-2.145l-1.279.784c.21.343.34.783.409 1.503.07.73.07 1.671.07 2.995h1.5Zm-3.052-5.571a3.25 3.25 0 0 1 1.073 1.073l1.279-.784a4.75 4.75 0 0 0-1.568-1.568l-.784 1.279ZM8.8 5.25c-1.295 0-2.319 0-3.137.077-.83.079-1.526.244-2.145.623l.784 1.279c.343-.21.783-.34 1.503-.409.73-.07 1.671-.07 2.995-.07v-1.5ZM2.75 12.8c0-1.324 0-2.264.07-2.995.069-.72.199-1.16.409-1.503L1.95 7.518c-.38.619-.544 1.315-.623 2.145-.078.818-.077 1.842-.077 3.137h1.5Zm.768-6.85A4.75 4.75 0 0 0 1.95 7.518l1.279.784a3.25 3.25 0 0 1 1.073-1.073L3.518 5.95Zm5.999 14.74c-.201-.34-.377-.638-.548-.874a2.23 2.23 0 0 0-.67-.64l-.764 1.292c.046.027.11.077.22.23.12.165.256.393.47.756l1.292-.764Zm-3.252-.355c.446.014.73.024.947.05.204.025.281.058.323.083l.763-1.291c-.29-.171-.594-.243-.905-.28-.298-.037-.661-.048-1.08-.062l-.048 1.5Zm5.51 1.119c.214-.363.35-.591.47-.756.11-.153.174-.203.22-.23l-.763-1.291a2.23 2.23 0 0 0-.67.64c-.172.235-.348.534-.549.873l1.291.764Zm1.912-2.619c-.419.014-.782.025-1.08.061-.31.038-.616.11-.905.28l.763 1.292c.042-.025.119-.058.323-.083.216-.026.501-.036.947-.05l-.048-1.5Z" fill="currentColor" /><path opacity={0.5} d="m21.715 12.435.692.287-.692-.287Zm-2.03 2.03.287.693-.287-.693Zm.524-11.912-.392.64.392-.64Zm1.238 1.238.64-.392-.64.392ZM8.791 2.553l-.392-.64.392.64ZM7.553 3.79l-.64-.392.64.392Zm5.822-1.041h2.25v-1.5h-2.25v1.5Zm7.875 5.625v.75h1.5v-.75h-1.5Zm0 .75c0 .884 0 1.51-.034 2-.033.486-.096.785-.194 1.023l1.385.574c.187-.451.267-.933.305-1.494.038-.554.038-1.24.038-2.103h-1.5Zm-.228 3.023a3 3 0 0 1-1.624 1.624l.574 1.386a4.5 4.5 0 0 0 2.435-2.436l-1.385-.574ZM15.625 2.75c1.242 0 2.12 0 2.804.066.671.064 1.075.184 1.388.376l.784-1.279c-.588-.36-1.249-.516-2.03-.59-.77-.074-1.733-.073-2.946-.073v1.5Zm7.125 5.625c0-1.213 0-2.175-.073-2.946-.074-.781-.23-1.442-.59-2.03l-1.28.784c.193.313.313.717.377 1.388.065.683.066 1.562.066 2.804h1.5Zm-2.933-5.183a3 3 0 0 1 .99.99l1.28-.783A4.5 4.5 0 0 0 20.6 1.913l-.784 1.28ZM13.375 1.25c-1.213 0-2.175 0-2.946.072-.781.075-1.442.23-2.03.591l.783 1.28c.314-.193.718-.313 1.39-.377.682-.065 1.56-.066 2.803-.066v-1.5Zm-4.976.663A4.5 4.5 0 0 0 6.913 3.4l1.279.784a3 3 0 0 1 .99-.99L8.4 1.912ZM7.782 6.04c.05-.96.175-1.473.41-1.856l-1.279-.784c-.437.713-.576 1.538-.629 2.562l1.498.078Zm10.243 9.446c.767-.026 1.384-.094 1.947-.327l-.574-1.386c-.302.125-.694.19-1.423.214l.05 1.499Z" fill="currentColor" /><path opacity={0.5} d="M6.51 13h.008M10 13h.009m3.482 0h.009" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.87 21.51.645.382-.646-.382Zm.259-.438-.646-.382.646.382Zm-2.258 0 .646-.382-.646.382Zm.26.438-.646.382.646-.382Zm-6.827-4.38.693-.286-.693.287Zm3.985 2.455.024-.75-.024.75Zm-1.82-.29-.287.693.287-.692Zm13.226-2.164.693.287-.693-.287Zm-3.984 2.454-.024-.75.024.75Zm1.82-.29.287.693-.287-.692ZM16.09 6.59l.392-.639-.392.64Zm1.32 1.321.64-.392-.64.392ZM3.91 6.59l-.392-.64.392.64ZM2.59 7.91l-.64-.392.64.392Zm5.326 11.912-.381.646.381-.646Zm3.599 2.07.26-.438-1.292-.764-.26.438 1.292.764Zm-3.29-.438.26.438 1.291-.764-.26-.438-1.29.764Zm1.999-.326a.25.25 0 0 1-.224.122.25.25 0 0 1-.224-.122l-1.29.764c.676 1.144 2.352 1.144 3.029 0l-1.291-.764ZM8.8 6.75h2.4v-1.5H8.8v1.5Zm8.45 6.05v.8h1.5v-.8h-1.5Zm-14.5.8v-.8h-1.5v.8h1.5Zm-1.5 0c0 .922 0 1.65.04 2.24.04.596.125 1.104.322 1.578l1.385-.574c-.108-.261-.175-.587-.21-1.106-.037-.527-.037-1.196-.037-2.138h-1.5Zm5.063 5.235c-.792-.025-1.223-.094-1.557-.232l-.574 1.385c.597.248 1.255.32 2.083.347l.048-1.5Zm-4.701-1.417a4.75 4.75 0 0 0 2.57 2.57l.574-1.385a3.25 3.25 0 0 1-1.759-1.76l-1.385.575ZM17.25 13.6c0 .942 0 1.611-.036 2.138-.036.52-.103.845-.211 1.106l1.385.574c.197-.474.281-.982.322-1.578.04-.59.04-1.318.04-2.24h-1.5Zm-3.515 6.735c.828-.027 1.486-.1 2.083-.347l-.574-1.385c-.335.138-.765.207-1.557.232l.048 1.5Zm3.268-3.491a3.25 3.25 0 0 1-1.76 1.759l.575 1.385a4.75 4.75 0 0 0 2.57-2.57l-1.385-.574ZM11.2 6.75c1.324 0 2.264 0 2.995.07.72.069 1.16.199 1.503.409l.784-1.279c-.619-.38-1.315-.544-2.145-.623-.818-.078-1.842-.077-3.137-.077v1.5Zm7.55 6.05c0-1.295 0-2.319-.077-3.137-.079-.83-.244-1.526-.623-2.145l-1.279.784c.21.343.34.783.409 1.503.07.73.07 1.671.07 2.995h1.5Zm-3.052-5.571a3.25 3.25 0 0 1 1.073 1.073l1.279-.784a4.75 4.75 0 0 0-1.568-1.568l-.784 1.279ZM8.8 5.25c-1.295 0-2.319 0-3.137.077-.83.079-1.526.244-2.145.623l.784 1.279c.343-.21.783-.34 1.503-.409.73-.07 1.671-.07 2.995-.07v-1.5ZM2.75 12.8c0-1.324 0-2.264.07-2.995.069-.72.199-1.16.409-1.503L1.95 7.518c-.38.619-.544 1.315-.623 2.145-.078.818-.077 1.842-.077 3.137h1.5Zm.768-6.85A4.75 4.75 0 0 0 1.95 7.518l1.279.784a3.25 3.25 0 0 1 1.073-1.073L3.518 5.95Zm5.999 14.74c-.201-.34-.377-.638-.548-.874a2.23 2.23 0 0 0-.67-.64l-.764 1.292c.046.027.11.077.22.23.12.165.256.393.47.756l1.292-.764Zm-3.252-.355c.446.014.73.024.947.05.204.025.281.058.323.083l.763-1.291c-.29-.171-.594-.243-.905-.28-.298-.037-.661-.048-1.08-.062l-.048 1.5Zm5.51 1.119c.214-.363.35-.591.47-.756.11-.153.174-.203.22-.23l-.763-1.291a2.23 2.23 0 0 0-.67.64c-.172.235-.348.534-.549.873l1.291.764Zm1.912-2.619c-.419.014-.782.025-1.08.061-.31.038-.616.11-.905.28l.763 1.292c.042-.025.119-.058.323-.083.216-.026.501-.036.947-.05l-.048-1.5Z" fill="currentColor" /><path d="m21.715 12.435.692.287-.692-.287Zm-2.03 2.03.287.693-.287-.693Zm.524-11.912-.392.64.392-.64Zm1.238 1.238.64-.392-.64.392ZM8.791 2.553l-.392-.64.392.64ZM7.553 3.79l-.64-.392.64.392Zm5.822-1.041h2.25v-1.5h-2.25v1.5Zm7.875 5.625v.75h1.5v-.75h-1.5Zm0 .75c0 .884 0 1.51-.034 2-.033.486-.096.785-.194 1.023l1.385.574c.187-.451.267-.933.305-1.494.038-.554.038-1.24.038-2.103h-1.5Zm-.228 3.023a3 3 0 0 1-1.624 1.624l.574 1.386a4.5 4.5 0 0 0 2.435-2.436l-1.385-.574ZM15.625 2.75c1.242 0 2.12 0 2.804.066.671.064 1.075.184 1.388.376l.784-1.279c-.588-.36-1.249-.516-2.03-.59-.77-.074-1.733-.073-2.946-.073v1.5Zm7.125 5.625c0-1.213 0-2.175-.073-2.946-.074-.781-.23-1.442-.59-2.03l-1.28.784c.193.313.313.717.377 1.388.065.683.066 1.562.066 2.804h1.5Zm-2.933-5.183a3 3 0 0 1 .99.99l1.28-.783A4.5 4.5 0 0 0 20.6 1.913l-.784 1.28ZM13.375 1.25c-1.213 0-2.175 0-2.946.072-.781.075-1.442.23-2.03.591l.783 1.28c.314-.193.718-.313 1.39-.377.682-.065 1.56-.066 2.803-.066v-1.5Zm-4.976.663A4.5 4.5 0 0 0 6.913 3.4l1.279.784a3 3 0 0 1 .99-.99L8.4 1.912ZM7.782 6.04c.05-.96.175-1.473.41-1.856l-1.279-.784c-.437.713-.576 1.538-.629 2.562l1.498.078Zm10.243 9.446c.767-.026 1.384-.094 1.947-.327l-.574-1.386c-.302.125-.694.19-1.423.214l.05 1.499Z" fill="currentColor" /><path d="M6.51 13h.008M10 13h.009m3.482 0h.009" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.336 1.25h2.327c1.195 0 2.146 0 2.908.072.781.075 1.442.23 2.03.591A4.5 4.5 0 0 1 22.087 3.4c.36.588.516 1.249.59 2.03.073.762.073 1.713.073 2.908v.815c0 .85 0 1.527-.038 2.076-.038.561-.118 1.043-.305 1.494a4.5 4.5 0 0 1-2.435 2.436c-.38.157-.783.239-1.241.284-.006.14-.012.272-.02.398-.041.596-.126 1.104-.323 1.578a4.75 4.75 0 0 1-2.57 2.57c-.597.248-1.255.32-2.083.347-.446.014-.73.024-.947.05-.204.025-.281.058-.323.083-.046.027-.11.077-.22.23-.12.165-.256.393-.47.756l-.26.438c-.677 1.144-2.353 1.144-3.03 0l-.26-.438c-.214-.363-.35-.591-.47-.756-.11-.153-.174-.203-.22-.23-.042-.025-.119-.058-.323-.083a11.93 11.93 0 0 0-.947-.05c-.828-.027-1.486-.1-2.083-.347a4.75 4.75 0 0 1-2.57-2.57c-.197-.474-.282-.982-.322-1.578-.04-.584-.04-1.304-.04-2.213v-.866c0-1.276 0-2.288.077-3.098.079-.83.244-1.526.623-2.145A4.75 4.75 0 0 1 3.518 5.95c.619-.38 1.315-.544 2.145-.623.21-.02.435-.035.675-.046.08-.72.24-1.334.575-1.882A4.5 4.5 0 0 1 8.4 1.913c.588-.36 1.249-.516 2.03-.59.762-.073 1.713-.073 2.907-.073ZM7.853 5.251l.908-.001h2.478c1.276 0 2.288 0 3.098.077.83.079 1.526.244 2.145.623a4.75 4.75 0 0 1 1.568 1.568c.38.619.544 1.315.623 2.145.077.81.077 1.822.077 3.098v1.169a2.5 2.5 0 0 0 .648-.158 3 3 0 0 0 1.624-1.624c.098-.238.16-.537.194-1.022.034-.492.034-1.117.034-2.001v-.75c0-1.242 0-2.12-.066-2.804-.064-.671-.184-1.075-.376-1.388a3 3 0 0 0-.99-.99c-.314-.193-.718-.313-1.39-.377-.682-.065-1.561-.066-2.803-.066h-2.25c-1.242 0-2.121 0-2.804.066-.671.064-1.075.184-1.389.376a3 3 0 0 0-.99.99c-.16.263-.27.585-.339 1.07Zm-2.048 1.57c-.72.068-1.16.198-1.503.408a3.25 3.25 0 0 0-1.073 1.073c-.21.343-.34.783-.409 1.503-.07.73-.07 1.671-.07 2.995v.8c0 .942 0 1.611.036 2.138.036.52.103.845.211 1.106a3.25 3.25 0 0 0 1.76 1.759c.333.138.764.207 1.556.232l.031.001c.406.013.758.025 1.05.06.31.038.615.11.904.28.285.17.491.393.67.64.167.23.338.519.533.847l.275.465a.25.25 0 0 0 .224.122.25.25 0 0 0 .224-.122l.275-.465c.194-.328.366-.618.532-.847a2.23 2.23 0 0 1 .67-.64c.29-.17.595-.242.905-.28a12.59 12.59 0 0 1 1.05-.06h.03c.793-.026 1.223-.095 1.558-.233a3.25 3.25 0 0 0 1.759-1.76c.108-.26.175-.586.21-1.105.037-.527.037-1.196.037-2.138v-.8c0-1.324 0-2.264-.07-2.995-.069-.72-.199-1.16-.409-1.503a3.25 3.25 0 0 0-1.073-1.073c-.343-.21-.783-.34-1.503-.409-.73-.07-1.671-.07-2.995-.07H8.8c-1.324 0-2.264 0-2.995.07Z" fill="currentColor" /><path d="M7.5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM14.5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m10.549 21.528.25-.423c.4-.677.6-1.015.92-1.204.32-.189.736-.202 1.568-.229.781-.025 1.306-.093 1.755-.279a3.855 3.855 0 0 0 2.086-2.086c.294-.709.294-1.607.294-3.403v-.772c0-2.524 0-3.786-.568-4.713a3.855 3.855 0 0 0-1.273-1.273c-.927-.568-2.19-.568-4.713-.568H8.553c-2.524 0-3.786 0-4.713.568A3.855 3.855 0 0 0 2.568 8.42C2 9.346 2 10.61 2 13.132v.771c0 1.797 0 2.695.293 3.404a3.855 3.855 0 0 0 2.087 2.086c.449.186.973.254 1.754.28.833.026 1.25.039 1.569.228.319.189.52.527.92 1.204l.25.423a.98.98 0 0 0 1.676 0Zm2.535-7.239a.964.964 0 1 0 0-1.928.964.964 0 0 0 0 1.928Zm-2.41-.964a.964.964 0 1 1-1.927 0 .964.964 0 0 1 1.928 0Zm-4.337.964a.964.964 0 1 0 0-1.928.964.964 0 0 0 0 1.928Z" fill="currentColor" /><path d="M15.17 2c1.151 0 2.067 0 2.802.07.753.071 1.39.222 1.957.57A4.337 4.337 0 0 1 21.36 4.07c.348.567.498 1.204.57 1.957C22 6.763 22 7.678 22 8.83v.787c0 .82 0 1.472-.036 2-.037.541-.114 1.006-.294 1.44a4.337 4.337 0 0 1-2.428 2.38c-.128.049-.238.09-.334.122.014-.469.014-1.003.014-1.605v-.893c0-1.201 0-2.208-.078-3.026-.082-.857-.259-1.66-.712-2.4a5.355 5.355 0 0 0-1.768-1.768c-.738-.452-1.542-.63-2.4-.711-.817-.078-1.824-.078-3.026-.078H8.483c-.816 0-1.542 0-2.18.024.03-.103.07-.22.118-.36.081-.235.184-.458.315-.67a4.337 4.337 0 0 1 1.431-1.433c.568-.347 1.205-.498 1.958-.57C10.859 2 11.775 2 12.927 2h2.243Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m10.404 22.48.275-.465c.44-.745.66-1.117 1.012-1.325.351-.207.81-.222 1.725-.252.859-.027 1.436-.102 1.93-.306a4.241 4.241 0 0 0 2.295-2.296c.323-.779.323-1.767.323-3.743v-.848c0-2.777 0-4.165-.625-5.185-.35-.57-.83-1.05-1.4-1.4-1.02-.625-2.408-.625-5.185-.625H8.21c-2.777 0-4.165 0-5.185.625-.57.35-1.05.83-1.4 1.4C1 9.08 1 10.468 1 13.245v.848c0 1.976 0 2.964.323 3.744a4.241 4.241 0 0 0 2.295 2.295c.494.204 1.07.28 1.93.306.916.03 1.374.045 1.725.252.35.208.571.58 1.012 1.325l.275.465c.41.692 1.434.692 1.844 0Zm2.789-7.963a1.06 1.06 0 1 0 0-2.12 1.06 1.06 0 0 0 0 2.12Zm-2.65-1.06a1.06 1.06 0 1 1-2.121 0 1.06 1.06 0 0 1 2.12 0Zm-4.772 1.06a1.06 1.06 0 1 0 0-2.12 1.06 1.06 0 0 0 0 2.12Z" fill="currentColor" /><path opacity={0.5} d="M15.486 1c1.267 0 2.274 0 3.082.077.829.079 1.53.244 2.153.626a4.77 4.77 0 0 1 1.575 1.575c.383.624.548 1.325.627 2.153.076.808.076 1.816.076 3.082v.866c0 .901 0 1.619-.04 2.2-.04.595-.125 1.106-.323 1.584a4.77 4.77 0 0 1-2.67 2.617c-.141.054-.262.1-.368.135h-1.65c.016-.499.016-1.093.016-1.822v-.848c0-2.777 0-4.165-.625-5.185-.35-.57-.83-1.05-1.4-1.4-1.02-.625-2.408-.625-5.185-.625H8.21c-.986 0-1.796 0-2.478.028v-1.65c.033-.114.078-.244.13-.396.09-.26.203-.505.346-.739a4.771 4.771 0 0 1 1.576-1.575c.624-.382 1.324-.547 2.153-.626C10.745 1 11.752 1 13.019 1h2.467Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Dialog2