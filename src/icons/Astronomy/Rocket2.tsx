import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Rocket2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.078 13.417a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-2.222 1.16-.53-.531.53.53ZM2.32 13.04l-.53-.53.53.53Zm.683.377a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm8.604 5.57a.75.75 0 1 0-1.06-1.061l1.06 1.061Zm-2.222 1.159.53.53-.53-.53Zm1.538 1.536.53.53-.53-.53Zm.684.377a.75.75 0 1 0-1.06-1.061l1.06 1.061Zm-.973-4.873a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM7.47 18.228a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm.387-3.814a.75.75 0 1 0-1.06-1.061l1.06 1.06ZM4.68 15.47a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm2.781 2.112a.75.75 0 0 0-1.048-1.073l1.048 1.073Zm-2.758.6a.75.75 0 1 0 1.049 1.072L4.702 18.18Zm.316-5.826-1.692 1.69 1.06 1.061 1.692-1.69-1.06-1.06Zm-2.17 1.215.154-.154-1.06-1.06-.153.153 1.06 1.061Zm0 .475a.335.335 0 0 1 0-.475l-1.06-1.061a1.835 1.835 0 0 0 0 2.597l1.06-1.061Zm.478 0a.338.338 0 0 1-.477 0l-1.06 1.061c.717.717 1.88.717 2.597 0l-1.06-1.061Zm7.22 3.88-1.692 1.69 1.06 1.06 1.692-1.689-1.06-1.061Zm.906 4.287.154-.154-1.06-1.061-.154.153 1.06 1.062Zm-2.598 0c.717.716 1.88.716 2.598 0l-1.06-1.062a.338.338 0 0 1-.478 0l-1.06 1.062Zm0-2.598a1.835 1.835 0 0 0 0 2.598l1.06-1.062a.335.335 0 0 1 0-.474l-1.06-1.062Zm.718-3.49L7.47 18.228l1.06 1.06 2.103-2.102-1.06-1.06Zm-2.776-2.772L4.68 15.47l1.061 1.06 2.117-2.116-1.06-1.061Zm-.384 3.156-1.71 1.672 1.049 1.073 1.71-1.672-1.05-1.073ZM9.743 13.057l.53-.532-.53.532Zm0-4.656-.53-.531.53.531Zm5.837 5.82.53.53-.53-.53Zm-4.67 0-.53.53.53-.53Zm9.64-4.956-.53-.53.53.53Zm-4.595-7.77a.75.75 0 0 0 .573 1.386l-.573-1.386ZM9.797 13.107a.75.75 0 0 0 1.06 1.063l-1.06-1.063Zm2.81-.683a.75.75 0 1 0-1.059-1.062l1.06 1.062Zm1.08 3.362.258.704-.259-.704Zm-5.5-5.535-.696-.28.696.28Zm6.268-5.488a.75.75 0 1 0-1.06-1.063l1.06 1.063Zm5.565 3.971-4.97 4.955 1.06 1.063 4.969-4.955-1.059-1.063Zm-8.58 4.955-1.167-1.164-1.06 1.063 1.168 1.164 1.059-1.063ZM18.215 2.75h.483v-1.5h-.483v1.5Zm3.035 2.542v.482h1.5v-.482h-1.5ZM18.698 2.75c.8 0 1.324.002 1.712.054.367.049.498.13.577.21l1.06-1.063c-.405-.403-.905-.563-1.438-.634-.51-.069-1.154-.067-1.91-.067v1.5Zm4.052 2.542c0-.755.002-1.396-.067-1.906-.072-.532-.232-1.032-.637-1.435l-1.059 1.062c.079.079.16.208.21.573.052.387.053.909.053 1.706h1.5Zm-12.477 7.233c-.566-.563-.935-.934-1.173-1.244-.224-.293-.258-.442-.258-.552h-1.5c0 .571.241 1.038.567 1.464.313.409.77.861 1.304 1.395l1.06-1.063Zm.108 2.226c.535.534.989.989 1.399 1.3.427.326.894.565 1.465.565v-1.5c-.113 0-.263-.035-.557-.258-.311-.237-.683-.605-1.248-1.169l-1.06 1.063Zm10.698-4.954c.672-.67 1.166-1.144 1.425-1.768l-1.385-.575c-.118.283-.34.523-1.099 1.28l1.059 1.063Zm.171-4.023c0 1.07-.013 1.396-.131 1.68l1.385.575c.26-.624.246-1.307.246-2.255h-1.5ZM18.215 1.25c-.951 0-1.635-.013-2.26.245l.573 1.386c.285-.118.614-.131 1.687-.131v-1.5Zm-7.359 12.92 1.751-1.746-1.059-1.062-1.75 1.745 1.058 1.063Zm4.194-.48c-.436.434-.76.756-1.037.995-.278.24-.456.35-.586.397l.518 1.408c.383-.141.723-.388 1.049-.67.327-.282.694-.648 1.115-1.069L15.05 13.69Zm-1.623 1.392a.508.508 0 0 1-.182.034v1.5c.244 0 .476-.044.7-.126l-.518-1.408ZM9.213 7.87c-.411.41-.77.768-1.05 1.087-.279.318-.524.648-.672 1.015l1.392.56c.053-.133.168-.312.408-.586.239-.273.557-.59.982-1.014L9.213 7.87ZM7.491 9.972c-.096.24-.149.49-.149.757h1.5a.51.51 0 0 1 .041-.198l-1.392-.56Zm2.782-1.04 4.182-4.17-1.06-1.062-4.182 4.17 1.06 1.062Z" fill="currentColor" /><path d="m8.037 10.102.53-.53V9.57l-.53.53Zm3.634-3.398a.75.75 0 1 0 .812-1.262l-.812 1.262Zm-.13-.975.407-.631-.406.63ZM9.359 4.608l.11-.742-.11.742ZM5.19 7.12l.53.531-.53-.531Zm2.647-2.318.288.693-.287-.693Zm-2.104 3.51-.277.698.277-.698Zm-.181.736a.75.75 0 1 0 .571-1.387l-.571 1.387Zm-.141-.863.276-.697-.276.697Zm2.245 2.597a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm.502-1.618a.75.75 0 0 0-1.06 1.062l1.06-1.062Zm4.324-3.722-.535-.344-.812 1.261.535.345.812-1.262Zm-.535-.344c-.527-.34-.958-.617-1.33-.817-.38-.205-.745-.355-1.15-.415l-.22 1.484c.169.025.36.09.66.251.308.167.682.407 1.228.758l.812-1.261ZM5.72 7.651c.479-.477.99-.987 1.45-1.406.229-.21.436-.388.613-.524.188-.145.299-.208.342-.226L7.55 4.109a3.197 3.197 0 0 0-.683.424c-.223.172-.464.38-.708.604-.489.445-1.025.98-1.498 1.452L5.72 7.65Zm3.746-3.785a3.623 3.623 0 0 0-1.916.243l.575 1.386c.365-.152.753-.2 1.122-.145l.22-1.484ZM5.136 8.882l.321.128.553-1.395-.322-.127-.552 1.394Zm.321.128.096.038.571-1.387-.114-.046-.553 1.395Zm-.795-2.421a1.4 1.4 0 0 0 .474 2.293l.552-1.394a.1.1 0 0 1 .033.163L4.66 6.59Zm2.845 4.043.15.15 1.06-1.06-.15-.15-1.06 1.06Zm-.408-.406.409.407L8.567 9.57l-.408-.407-1.06 1.062ZM13.925 16.025l-.53.53a.759.759 0 0 0 .035.034l.495-.564Zm4.62-4.54a.75.75 0 0 0-1.26.816l1.26-.815Zm-.285.942-.63.407.63-.407Zm1.124 2.177.742-.11-.742.11Zm-2.52 4.154-.53-.53.53.53Zm2.325-2.639-.692-.289.692.289Zm-2.656 2.242a.75.75 0 1 0-1.393.555l1.393-.555Zm-2.658-1.382a.75.75 0 1 0 .989-1.128l-.99 1.128Zm2.918 1.85.53.531-.53-.53Zm-2.577-3.573a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.07-2.955.344.533 1.26-.815-.346-.533-1.259.815Zm-.951 5.926-.072.071 1.06 1.063.071-.072-1.06-1.062Zm1.295-5.393c.353.545.594.918.76 1.225.162.298.227.489.252.656l1.484-.22c-.06-.407-.21-.77-.417-1.15-.2-.371-.48-.8-.82-1.326l-1.259.815Zm-.236 6.455c.473-.471 1.01-1.006 1.456-1.493.224-.244.434-.484.606-.706.163-.21.328-.45.425-.682l-1.384-.578a1.894 1.894 0 0 1-.227.34 10.08 10.08 0 0 1-.525.612c-.42.457-.931.968-1.41 1.445l1.059 1.062Zm1.248-4.574c.055.366.007.752-.145 1.115l1.384.578c.254-.608.34-1.27.245-1.914l-1.484.22Zm-3.778 1.136-.445-.39-.989 1.128.445.39.989-1.128Zm1.4 2.447a.164.164 0 0 1 .144-.045.178.178 0 0 1 .125.108l-1.393.555c.356.895 1.515 1.11 2.183.444l-1.06-1.062Zm-1.81-2.803-.238-.24-1.06 1.061.238.24 1.06-1.061ZM15.05 9.414a.75.75 0 0 0 1.059-1.062l-1.06 1.062Zm2.335-1.062a.75.75 0 0 0 1.059 1.062l-1.06-1.062Zm1.059-2.328a2.404 2.404 0 0 0-3.394 0l1.059 1.062a.904.904 0 0 1 1.276 0l1.059-1.062Zm-3.394 0a2.393 2.393 0 0 0 0 3.39l1.059-1.062a.893.893 0 0 1 0-1.266l-1.06-1.062Zm3.394 3.39a2.392 2.392 0 0 0 0-3.39l-1.06 1.062c.351.35.351.916 0 1.266l1.06 1.062Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 5.365h.75H22ZM9.455 13.303l.529-.532-.53.532Zm0-4.76.529.532-.53-.531Zm5.974 5.95-.53-.532.53.532Zm-4.78 0-.529.531.53-.531Zm9.866-5.066.53.532-.53-.532ZM22 5.858h-.75.75Zm-7.459-2.38-.529-.531.53.531Zm-1.05 12.615-.26-.704.26.704Zm-5.629-5.658.696.28-.696-.28Zm12.124-1.54L14.9 13.962l1.059 1.063 5.087-5.065-1.059-1.063Zm-8.807 5.066-1.195-1.19-1.059 1.063 1.195 1.19 1.059-1.063ZM9.984 9.075 15.07 4.01l-1.058-1.063-5.087 5.065 1.059 1.063Zm8.142-6.325h.495v-1.5h-.495v1.5Zm3.124 2.615v.493h1.5v-.493h-1.5ZM18.62 2.75c.818 0 1.356.002 1.755.055.378.05.516.135.601.22l1.058-1.064c-.41-.408-.917-.57-1.46-.643-.521-.07-1.178-.068-1.953-.068v1.5Zm4.13 2.615c0-.772.002-1.426-.069-1.946-.073-.542-.236-1.049-.647-1.458l-1.058 1.063c.084.084.168.22.219.595.053.397.055.932.055 1.746h1.5ZM9.984 12.771c-.578-.575-.958-.955-1.201-1.273-.231-.301-.268-.457-.268-.575h-1.5c0 .58.244 1.053.577 1.487.32.417.785.878 1.333 1.424l1.059-1.063Zm.136 2.253c.548.546 1.012 1.01 1.43 1.328.436.331.91.573 1.489.573v-1.5c-.121 0-.279-.038-.581-.268-.32-.242-.701-.62-1.28-1.196l-1.058 1.063ZM21.045 9.96c.689-.686 1.19-1.168 1.455-1.802l-1.385-.576c-.122.294-.353.542-1.129 1.315l1.059 1.063Zm.205-4.101c0 1.093-.013 1.43-.135 1.723l1.385.576c.263-.634.25-1.329.25-2.299h-1.5ZM15.07 4.01c.776-.773 1.026-1.002 1.322-1.125L15.82 1.5c-.636.262-1.119.762-1.808 1.448L15.07 4.01Zm3.056-2.76c-.975 0-1.67-.013-2.306.249l.572 1.386c.296-.122.637-.135 1.734-.135v-1.5Zm-3.227 12.711c-.445.444-.777.774-1.062 1.02-.285.246-.47.358-.605.408l.517 1.408c.389-.143.735-.394 1.068-.68.334-.29.709-.663 1.14-1.093L14.9 13.961Zm-1.667 1.428a.54.54 0 0 1-.193.036v1.5c.248 0 .483-.044.71-.128l-.518-1.408ZM8.925 8.012c-.421.42-.788.785-1.074 1.111-.285.324-.534.66-.684 1.032l1.391.56c.056-.138.174-.322.42-.603.245-.279.571-.604 1.006-1.037L8.925 8.012Zm-1.758 2.143a2.034 2.034 0 0 0-.152.768h1.5c0-.065.011-.13.043-.208l-1.391-.56Z" fill="currentColor" /><path opacity={0.5} d="m7.709 10.283.53-.531V9.75l-.53.532Zm3.729-3.488a.75.75 0 1 0 .81-1.262l-.81 1.262Zm-.142-.983-.406.63.406-.63ZM9.06 4.666l.11-.742-.11.742ZM4.796 7.234l.53.532-.53-.532Zm2.71-2.37.286.694-.287-.693ZM5.35 8.455l.276-.698-.276.697Zm.107.042-.285.694.285-.694Zm1.415.954.53-.531-.53.531Zm-.082-.08-.522.538.522-.539Zm-1.77-1.047-.275.697.276-.697Zm8.714 8.015-.53.53a.759.759 0 0 0 .036.034l.494-.564Zm4.713-4.632a.75.75 0 0 0-1.258.816l1.258-.816Zm-.276.954-.629.408.63-.409Zm1.151 2.226.742-.11-.742.11Zm-2.579 4.246.53.531-.53-.531Zm2.38-2.698.692.29-.692-.29Zm-3.432 2.576.696-.279-.696.279Zm-.413-.95-.657.362.657-.361Zm-1.09-1.324.53-.531-.017-.017-.018-.016-.494.564Zm.713.753.59-.463-.59.463Zm1.769 1.716-.53-.532.53.532Zm-2.65-3.642a.75.75 0 1 0-1.06 1.061l1.06-1.061Zm-6.689-4.597a.75.75 0 0 0 1.06-1.061l-1.06 1.061Zm4.917-5.433L11.7 5.18l-.81 1.262.547.352.81-1.262ZM11.7 5.18c-.539-.347-.979-.63-1.359-.835-.389-.209-.76-.36-1.172-.422l-.22 1.484c.176.026.374.094.681.26.317.17.7.416 1.26.775l.81-1.262ZM5.325 7.766c.49-.488 1.014-1.01 1.484-1.438.235-.214.448-.397.63-.537.192-.148.307-.214.353-.234l-.574-1.385c-.236.098-.479.265-.695.43-.227.176-.474.39-.724.617-.5.455-1.048 1.001-1.532 1.484l1.058 1.063ZM9.17 3.924a3.694 3.694 0 0 0-1.952.248l.574 1.386a2.194 2.194 0 0 1 1.159-.15l.219-1.484ZM4.746 9.02l.329.13.552-1.394-.33-.13-.551 1.394Zm1.598.962.836.832L8.238 9.75l-.836-.832-1.058 1.063ZM5.075 9.15l.098.039.57-1.388-.116-.046-.552 1.395Zm2.327-.232-.089-.088-1.044 1.077.075.074 1.058-1.063Zm-2.23.27c.409.169.781.412 1.097.719L7.313 8.83a4.976 4.976 0 0 0-1.57-1.029l-.57 1.388Zm-.905-2.486a1.414 1.414 0 0 0 .479 2.317l.552-1.395a.086.086 0 0 1 .027.14L4.267 6.704Zm12.923 5.82.353.545 1.259-.816-.354-.546-1.258.816Zm-.975 6.078-.073.072 1.058 1.063.073-.073-1.058-1.063Zm1.328-5.533c.36.556.608.938.779 1.253.166.305.233.502.26.675l1.483-.22c-.062-.413-.215-.783-.425-1.17-.205-.38-.49-.817-.838-1.354l-1.259.816Zm-.27 6.595c.485-.482 1.033-1.028 1.49-1.526.23-.249.443-.494.62-.72.166-.216.334-.458.433-.694l-1.384-.578c-.02.045-.085.16-.235.351-.14.18-.323.393-.538.627-.43.468-.954.99-1.444 1.477l1.058 1.063Zm1.308-4.667c.056.377.007.775-.15 1.149l1.385.578a3.66 3.66 0 0 0 .249-1.948l-1.484.221Zm-3.897 1.176-.455-.398-.988 1.128.455.398.988-1.128Zm1.704 2.56c-.186-.466-.3-.757-.452-1.032l-1.314.722c.097.176.174.367.373.866l1.393-.556Zm-2.727-1.464c.38.379.526.526.65.684l1.18-.926c-.193-.247-.416-.467-.772-.821l-1.058 1.063Zm2.276.432a4.94 4.94 0 0 0-.445-.674l-1.18.926c.116.148.22.305.31.47l1.315-.722Zm.205.973a.15.15 0 0 1 .131-.041c.038.007.09.038.115.1l-1.393.556c.36.904 1.53 1.12 2.205.448l-1.058-1.063Zm-1.877-2.866-.245-.244-1.06 1.061.245.245 1.06-1.062Zm-7.086-4.994.153.153 1.06-1.061-.153-.153-1.06 1.061Z" fill="currentColor" /><path d="m5.548 13-1.692 1.69a1.088 1.088 0 0 1-1.537 0 1.085 1.085 0 0 1 0-1.536L2.472 13m8.604 5.57-1.692 1.69a1.085 1.085 0 0 0 0 1.535 1.089 1.089 0 0 0 1.538 0l.154-.153m-4.14-4.483-1.71 1.672" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M10.633 17.186a.75.75 0 0 0-1.06-1.061l1.06 1.06ZM7.47 18.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm.387-3.814a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM4.68 15.47a.75.75 0 1 0 1.06 1.061l-1.06-1.06Zm4.892.656L7.47 18.227l1.06 1.06 2.103-2.101-1.06-1.061Zm-2.775-2.773L4.68 15.47l1.06 1.061 2.117-2.117-1.06-1.06ZM12.373 12.645a.75.75 0 1 0-1.058-1.063l1.058 1.063Zm-1.792 1.785 1.792-1.785-1.058-1.063-1.792 1.785 1.058 1.063Zm6.708-6.417a.945.945 0 0 1-1.331 0l-1.059 1.063a2.445 2.445 0 0 0 3.448 0L17.29 8.013Zm-1.331 0a.928.928 0 0 1 0-1.317l-1.059-1.063a2.428 2.428 0 0 0 0 3.443l1.059-1.063Zm0-1.317a.945.945 0 0 1 1.33 0l1.06-1.063a2.445 2.445 0 0 0-3.449 0l1.059 1.063Zm1.33 0a.928.928 0 0 1 0 1.317l1.06 1.063a2.428 2.428 0 0 0 0-3.443l-1.06 1.063Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 5.365h.75H22ZM9.455 13.303l.529-.532-.53.532Zm0-4.76.529.532-.53-.531Zm5.974 5.95-.53-.532.53.532Zm-4.78 0-.529.531.53-.531Zm9.866-5.066.53.532-.53-.532ZM22 5.858h-.75.75Zm-7.459-2.38-.529-.531.53.531Zm-2.168 9.167a.75.75 0 1 0-1.058-1.063l1.058 1.063ZM7.71 10.282l.53-.53V9.75l-.53.531Zm3.729-3.488a.75.75 0 1 0 .81-1.262l-.81 1.262Zm-.142-.983-.406.631.406-.63ZM9.06 4.666l.11-.742-.11.742ZM4.796 7.234l.53.531-.53-.531Zm2.71-2.37.287.693-.288-.693ZM5.35 8.453l.276-.698-.276.698Zm.107.043-.285.693.285-.693Zm1.415.954.53-.532-.53.532Zm-.082-.081-.522.538.522-.538Zm-1.77-1.047-.275.698.276-.698Zm8.714 8.015-.53.531a.713.713 0 0 0 .036.034l.494-.565Zm4.713-4.631a.75.75 0 1 0-1.258.816l1.258-.816Zm-.276.953-.629.408.63-.408Zm1.151 2.226.742-.11-.742.11Zm-2.579 4.246.53.532-.53-.532Zm2.38-2.698.692.29-.692-.29Zm-3.432 2.576.696-.278-.696.278Zm-.413-.949-.657.361.657-.36Zm-1.089-1.324.53-.532-.018-.017-.018-.015-.494.564Zm.712.753.59-.463-.59.463Zm1.769 1.715-.53-.531.53.531Zm-3.18-3.11-.26-.705.26.704Zm-5.629-5.659.696.28-.696-.28Zm-1.784 2.982a.75.75 0 0 0-1.06-1.061l1.06 1.061Zm-2.222 1.16-.53-.531.53.53ZM2.32 13.04l-.53-.53.53.53Zm.683.377a.75.75 0 0 0-1.06-1.061l1.06 1.061Zm8.604 5.57a.75.75 0 1 0-1.06-1.061l1.06 1.06Zm-2.222 1.159.53.53-.53-.53Zm1.538 1.536.53.53-.53-.53Zm.684.377a.75.75 0 1 0-1.06-1.061l1.06 1.06Zm-.973-4.873a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM7.47 18.227a.75.75 0 0 0 1.06 1.061l-1.06-1.06Zm.387-3.814a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM4.68 15.47a.75.75 0 1 0 1.061 1.06l-1.06-1.06ZM7.46 17.58a.75.75 0 1 0-1.048-1.072l1.048 1.072Zm-2.758.6a.75.75 0 1 0 1.049 1.072l-1.049-1.072Zm15.284-9.285L14.9 13.96l1.059 1.063 5.086-5.065-1.058-1.063Zm-8.808 5.065-1.194-1.19-1.059 1.063 1.195 1.19 1.059-1.063ZM9.985 9.075 15.07 4.01l-1.058-1.063-5.087 5.065 1.059 1.063Zm8.142-6.325h.495v-1.5h-.495v1.5Zm3.124 2.615v.493h1.5v-.493h-1.5ZM18.62 2.75c.818 0 1.356.002 1.755.055.378.05.516.135.6.22l1.06-1.064c-.41-.408-.918-.57-1.46-.643-.522-.07-1.179-.068-1.954-.068v1.5Zm4.13 2.615c0-.772.002-1.426-.069-1.946-.073-.542-.236-1.049-.647-1.458l-1.058 1.063c.084.084.168.22.219.595.053.397.055.932.055 1.746h1.5ZM9.984 12.771c-.579-.575-.958-.955-1.201-1.273-.231-.301-.268-.457-.268-.575h-1.5c0 .58.244 1.053.577 1.487.32.417.785.878 1.333 1.424l1.059-1.063Zm.136 2.253c.548.546 1.012 1.01 1.43 1.328.436.331.91.573 1.489.573v-1.5c-.121 0-.279-.038-.581-.268-.32-.242-.701-.62-1.28-1.196l-1.058 1.063ZM21.045 9.96c.688-.686 1.19-1.168 1.454-1.802l-1.384-.576c-.123.294-.353.542-1.129 1.315l1.058 1.063Zm.205-4.101c0 1.093-.013 1.43-.135 1.723l1.385.576c.263-.634.25-1.329.25-2.299h-1.5ZM15.07 4.01c.776-.773 1.026-1.002 1.322-1.125L15.82 1.5c-.636.262-1.119.762-1.808 1.448L15.07 4.01Zm3.056-2.76c-.975 0-1.671-.013-2.306.249l.572 1.386c.296-.122.637-.135 1.734-.135v-1.5ZM10.58 14.43l1.792-1.785-1.058-1.063-1.792 1.784 1.058 1.063Zm1.668-8.898-.548-.351-.81 1.261.547.352.81-1.262Zm-.548-.351c-.539-.347-.979-.63-1.359-.835-.389-.21-.76-.361-1.172-.422l-.22 1.484c.176.026.374.094.681.259.317.17.7.416 1.26.775l.81-1.261ZM5.325 7.765c.49-.488 1.014-1.01 1.485-1.438.234-.214.447-.396.628-.536.193-.148.308-.215.355-.234l-.575-1.386c-.236.098-.479.265-.695.431-.227.175-.474.389-.724.616-.5.456-1.048 1.002-1.532 1.484l1.058 1.063ZM9.17 3.924a3.694 3.694 0 0 0-1.952.247l.575 1.386a2.194 2.194 0 0 1 1.158-.15l.219-1.483ZM4.746 9.02l.33.13.551-1.395-.33-.13-.551 1.395Zm1.598.961.836.832 1.058-1.062-.836-.833-1.058 1.063Zm-1.269-.83.098.038.57-1.387-.116-.047-.552 1.395Zm2.327-.233-.089-.088L6.27 9.907l.075.074 1.058-1.063Zm-2.23.271c.409.168.781.412 1.097.718L7.313 8.83a4.976 4.976 0 0 0-1.57-1.028l-.57 1.387Zm-.905-2.487a1.414 1.414 0 0 0 .479 2.318l.552-1.395a.086.086 0 0 1 .027.14L4.267 6.702Zm12.923 5.82.353.545 1.259-.816-.354-.545-1.258.816Zm-.975 6.078-.073.073 1.058 1.063.073-.073-1.058-1.063Zm1.328-5.533c.36.556.608.938.779 1.253.166.306.233.502.26.676l1.483-.221c-.062-.413-.215-.783-.425-1.17-.205-.379-.49-.817-.838-1.354l-1.259.816Zm-.27 6.596c.485-.482 1.033-1.029 1.49-1.526.23-.249.443-.495.62-.721.166-.215.334-.457.433-.693l-1.384-.579c-.02.046-.085.16-.235.352-.14.18-.323.392-.538.626-.43.468-.954.99-1.444 1.478l1.058 1.063Zm1.308-4.667c.056.377.007.775-.15 1.148l1.385.579a3.658 3.658 0 0 0 .249-1.948l-1.484.22Zm-3.897 1.176-.455-.399-.988 1.129.455.398.988-1.128Zm1.704 2.56c-.186-.467-.3-.758-.451-1.033l-1.315.722c.097.177.174.368.373.866l1.393-.556Zm-2.727-1.465c.38.38.526.526.65.685l1.18-.926c-.193-.247-.416-.467-.772-.822l-1.058 1.063Zm2.276.432a4.966 4.966 0 0 0-.445-.673l-1.18.926c.116.148.22.305.31.47l1.315-.723Zm1.352-9.687a.945.945 0 0 1-1.331 0l-1.059 1.063a2.445 2.445 0 0 0 3.448 0L17.29 8.012Zm-1.331 0a.928.928 0 0 1 0-1.316l-1.059-1.063a2.428 2.428 0 0 0 0 3.442l1.059-1.063Zm0-1.316a.945.945 0 0 1 1.331 0l1.058-1.063a2.445 2.445 0 0 0-3.448 0l1.059 1.063Zm1.331 0a.928.928 0 0 1 0 1.316l1.058 1.063a2.428 2.428 0 0 0 0-3.442L17.29 6.696Zm-1.147 11.977a.15.15 0 0 1 .131-.042c.038.008.09.039.115.1l-1.393.556c.361.904 1.53 1.12 2.205.449l-1.058-1.063Zm-1.243-4.712c-.445.444-.777.774-1.062 1.02-.285.246-.47.358-.605.408l.517 1.408c.389-.143.735-.394 1.068-.68.334-.29.709-.663 1.14-1.093L14.9 13.961Zm-1.667 1.428a.54.54 0 0 1-.193.036v1.5c.247 0 .483-.044.71-.128l-.518-1.408Zm1.033.418-.245-.245-1.06 1.062.245.244 1.06-1.061Zm-5.34-7.795c-.421.42-.789.785-1.074 1.111-.285.324-.535.66-.684 1.032l1.391.56c.056-.138.174-.322.42-.603.245-.279.571-.604 1.006-1.037L8.925 8.012Zm-1.759 2.143a2.034 2.034 0 0 0-.151.768h1.5c0-.065.011-.13.043-.208l-1.391-.56Zm.013.658.153.153 1.06-1.061-.153-.154-1.06 1.062Zm-2.16 1.543-1.693 1.69 1.06 1.06 1.692-1.689-1.06-1.061Zm-2.17 1.215.153-.154-1.06-1.061-.153.153 1.06 1.062Zm0 .475a.335.335 0 0 1 0-.475l-1.06-1.062a1.835 1.835 0 0 0 0 2.598l1.06-1.061Zm.477 0a.338.338 0 0 1-.477 0l-1.06 1.06c.717.717 1.88.717 2.597 0l-1.06-1.06Zm7.22 3.88-1.692 1.69 1.06 1.06 1.692-1.69-1.06-1.06Zm.906 4.287.154-.154-1.06-1.061-.154.153 1.06 1.061Zm-2.598 0c.717.716 1.88.716 2.598 0l-1.06-1.062a.338.338 0 0 1-.478 0l-1.06 1.061Zm0-2.598a1.835 1.835 0 0 0 0 2.598l1.06-1.062a.335.335 0 0 1 0-.475l-1.06-1.06Zm.718-3.49L7.47 18.227l1.06 1.061 2.103-2.102-1.06-1.06Zm-2.776-2.772L4.68 15.47l1.061 1.06 2.117-2.117-1.06-1.06Zm-.384 3.156-1.71 1.672 1.049 1.072 1.71-1.672-1.05-1.072Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.003 12.357a.75.75 0 0 1 0 1.06l-.154.154a.335.335 0 0 0 0 .475.338.338 0 0 0 .477 0l1.692-1.69a.75.75 0 1 1 1.06 1.061l-1.692 1.69a1.838 1.838 0 0 1-2.597 0 1.835 1.835 0 0 1 0-2.597l.153-.154a.75.75 0 0 1 1.061 0ZM7.857 13.353a.75.75 0 0 1 0 1.06L5.74 16.53a.75.75 0 0 1-1.06-1.06l2.116-2.117a.75.75 0 0 1 1.061 0ZM10.633 16.125a.75.75 0 0 1 0 1.06L8.53 19.289a.75.75 0 1 1-1.06-1.06l2.102-2.103a.75.75 0 0 1 1.06 0ZM7.472 16.521a.75.75 0 0 1-.012 1.06l-1.71 1.673a.75.75 0 0 1-1.048-1.073l1.71-1.672a.75.75 0 0 1 1.06.012ZM11.606 17.926a.75.75 0 0 1 0 1.06l-1.692 1.69a.335.335 0 0 0 0 .475.338.338 0 0 0 .478 0l.154-.153a.75.75 0 1 1 1.06 1.061l-.154.154a1.838 1.838 0 0 1-2.598 0 1.835 1.835 0 0 1 0-2.598l1.692-1.69a.75.75 0 0 1 1.06.001Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.992 1.25h.679c.753 0 1.393 0 1.903.068.543.073 1.05.235 1.46.643.41.41.574.916.647 1.458.07.508.069 1.146.069 1.896v.677c0 .901.001 1.56-.25 2.165-.252.605-.72 1.07-1.36 1.707l-.096.095-2.265 2.256.039.06c.34.527.62.957.822 1.33.21.387.363.757.425 1.17.098.656.01 1.33-.25 1.948a3.242 3.242 0 0 1-.433.693c-.176.226-.39.472-.619.721-.455.495-1 1.038-1.483 1.52l-.007.006-.073.073c-.674.671-1.844.455-2.205-.449-.199-.498-.276-.69-.373-.865a3.456 3.456 0 0 0-.31-.47c-.123-.156-.266-.301-.634-.668l-.423-.37a2.026 2.026 0 0 1-.216.011c-.579 0-1.053-.242-1.489-.573-.41-.311-.862-.762-1.394-1.292l-1.267-1.261c-.532-.53-.985-.981-1.297-1.389-.333-.434-.577-.907-.577-1.487 0-.087.005-.173.016-.257l-.687-.685a3.476 3.476 0 0 0-1.269-.831l-.33-.13a1.414 1.414 0 0 1-.478-2.318l.007-.006a50.196 50.196 0 0 1 1.525-1.477c.25-.228.497-.441.724-.616.216-.167.46-.334.695-.432a3.694 3.694 0 0 1 1.952-.247c.413.06.783.213 1.172.422.374.201.807.48 1.335.819l.066.042 2.269-2.26.095-.094c.64-.638 1.107-1.104 1.713-1.354.606-.25 1.266-.25 2.172-.249Zm-.3 12.047c.281.435.483.754.63 1.023.166.306.233.502.26.676.055.377.006.775-.15 1.149-.02.045-.085.159-.235.351-.14.18-.323.392-.538.626-.405.44-.893.929-1.357 1.392a7.33 7.33 0 0 0-.365-.815 4.966 4.966 0 0 0-.445-.673c-.188-.24-.403-.453-.74-.788l-.036-.036a8.77 8.77 0 0 0 .101-.086c.33-.284.699-.652 1.123-1.075l1.752-1.744Zm.434-10.547c-1.097 0-1.438.013-1.734.136-.296.122-.546.352-1.322 1.124L9.984 9.075c-.435.433-.76.758-1.006 1.037-.246.281-.364.465-.42.603a.536.536 0 0 0-.043.208c0 .118.037.274.268.575.243.318.622.698 1.2 1.274l.069.067 1.263-1.257a.75.75 0 0 1 1.058 1.063l-1.258 1.253.063.063c.579.576.96.954 1.28 1.197.302.23.46.267.58.267.063 0 .123-.01.194-.036.136-.05.32-.162.605-.409.285-.245.617-.575 1.062-1.019l5.087-5.065c.776-.773 1.006-1.02 1.129-1.315.122-.293.135-.63.135-1.723v-.493c0-.814-.002-1.35-.055-1.746-.05-.374-.135-.51-.22-.595-.084-.084-.222-.168-.6-.219-.399-.053-.937-.055-1.754-.055h-.495Zm.221 2.883a2.445 2.445 0 0 0-3.448 0 2.428 2.428 0 0 0 0 3.442 2.445 2.445 0 0 0 3.448 0 2.428 2.428 0 0 0 0-3.442Zm-2.39 1.063a.945.945 0 0 1 1.332 0 .928.928 0 0 1 0 1.316.945.945 0 0 1-1.331 0 .928.928 0 0 1 0-1.316Zm-5.303-.405a16.741 16.741 0 0 0-1.023-.624c-.307-.165-.505-.233-.68-.26a2.194 2.194 0 0 0-1.158.15c-.047.02-.162.086-.355.234-.18.14-.394.322-.628.536-.441.402-.929.885-1.392 1.346l.209.082.005.002.112.045c.583.24 1.116.59 1.57 1.028l.085.085.34.339a7.26 7.26 0 0 1 .112-.13c.282-.322.643-.683 1.058-1.096l1.745-1.737Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.774 12.481a.759.759 0 0 1 0 1.074l-.156.155a.34.34 0 0 0 0 .48c.133.134.35.134.483 0l1.713-1.71a.76.76 0 0 1 1.072 1.075l-1.712 1.71a1.86 1.86 0 0 1-2.629 0 1.857 1.857 0 0 1 0-2.629l.156-.155a.76.76 0 0 1 1.073 0Zm4.913 1.009a.76.76 0 0 1 0 1.073l-2.143 2.143a.76.76 0 0 1-1.073-1.074l2.142-2.142a.76.76 0 0 1 1.074 0Zm2.809 2.805a.76.76 0 0 1 0 1.074l-2.128 2.128a.76.76 0 0 1-1.073-1.074l2.127-2.128a.76.76 0 0 1 1.074 0Zm-3.199.401c.293.3.288.78-.012 1.073l-1.73 1.692a.759.759 0 0 1-1.061-1.085l1.73-1.692a.759.759 0 0 1 1.073.012Zm4.184 1.422a.76.76 0 0 1 0 1.074l-1.713 1.71a.34.34 0 0 0 0 .48c.134.133.35.133.484 0l.156-.155A.759.759 0 0 1 11.48 22.3l-.155.155a1.86 1.86 0 0 1-2.63 0 1.857 1.857 0 0 1 0-2.629l1.713-1.71a.759.759 0 0 1 1.073.001Z" fill="currentColor" /><path d="M10.846 5.41 8.66 7.59c-.402.401-.771.769-1.063 1.101a5.23 5.23 0 0 0-.532.706l-.021-.022-.081-.08a4.178 4.178 0 0 0-1.318-.864l-.106-.043-.326-.129a.658.658 0 0 1-.223-1.077c.963-.961 2.12-2.114 2.679-2.346a2.907 2.907 0 0 1 1.537-.197c.47.07.915.311 1.641.77ZM14.582 16.893c.176.18.293.305.399.44.14.179.265.368.373.567.123.223.218.462.408.939.155.388.67.491.969.193l.072-.072c.963-.96 2.12-2.114 2.353-2.671.205-.49.273-1.021.197-1.533-.07-.468-.312-.912-.772-1.636l-2.195 2.189c-.411.41-.788.786-1.13 1.08a5.164 5.164 0 0 1-.674.504Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="m15.502 14.367 5.03-5.014c.724-.722 1.087-1.083 1.277-1.543C22 7.351 22 6.84 22 5.82V5.33c0-1.57 0-2.355-.49-2.843C21.022 2 20.235 2 18.659 2h-.489c-1.024 0-1.537 0-1.997.19-.46.19-.823.551-1.547 1.274l-5.03 5.014c-.846.844-1.371 1.367-1.574 1.873-.064.16-.097.317-.097.483 0 .69.557 1.245 1.671 2.356l.15.149 1.754-1.78a.645.645 0 0 1 .919.906l-1.76 1.785.119.117c1.114 1.11 1.67 1.666 2.362 1.666.153 0 .3-.027.447-.081.519-.191 1.048-.72 1.916-1.585Zm2.363-5.888c-.652.65-1.71.65-2.363 0a1.662 1.662 0 0 1 0-2.356c.653-.65 1.71-.65 2.363 0s.653 1.705 0 2.356Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m15.502 14.367 5.03-5.014c.724-.722 1.087-1.083 1.277-1.543C22 7.351 22 6.84 22 5.82V5.33c0-1.57 0-2.355-.49-2.843C21.022 2 20.235 2 18.659 2h-.489c-1.024 0-1.537 0-1.997.19-.46.19-.823.551-1.547 1.274l-5.03 5.014c-.846.844-1.371 1.367-1.574 1.873-.064.16-.097.317-.097.483 0 .69.557 1.245 1.671 2.356l.15.149 1.754-1.78a.645.645 0 0 1 .919.906l-1.76 1.785.119.117c1.114 1.11 1.67 1.666 2.362 1.666.153 0 .3-.027.447-.081.519-.191 1.048-.72 1.916-1.585Zm2.363-5.888c-.652.65-1.71.65-2.363 0a1.662 1.662 0 0 1 0-2.356c.653-.65 1.71-.65 2.363 0s.653 1.705 0 2.356ZM2.774 12.481a.759.759 0 0 1 0 1.074l-.156.155a.34.34 0 0 0 0 .48c.133.134.35.134.483 0l1.713-1.71a.76.76 0 0 1 1.072 1.075l-1.712 1.71a1.86 1.86 0 0 1-2.629 0 1.857 1.857 0 0 1 0-2.629l.156-.155a.76.76 0 0 1 1.073 0Zm4.523 4.215c.293.3.288.78-.012 1.073l-1.73 1.692a.759.759 0 0 1-1.061-1.085l1.73-1.692a.759.759 0 0 1 1.073.012Zm4.184 1.422a.76.76 0 0 1 0 1.074l-1.713 1.71a.34.34 0 0 0 0 .48c.134.133.35.133.484 0l.156-.155A.759.759 0 0 1 11.48 22.3l-.155.155a1.86 1.86 0 0 1-2.63 0 1.857 1.857 0 0 1 0-2.629l1.713-1.71a.759.759 0 0 1 1.073.001Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M10.846 5.41 8.658 7.59c-.402.401-.77.769-1.062 1.101a5.231 5.231 0 0 0-.532.706l-.022-.021-.08-.08a4.178 4.178 0 0 0-1.319-.865l-.106-.042-.325-.13a.658.658 0 0 1-.223-1.077c.963-.96 2.12-2.114 2.679-2.346a2.907 2.907 0 0 1 1.537-.197c.47.07.915.311 1.641.77ZM14.582 16.893c.176.18.293.306.399.44.14.179.264.368.373.567.123.223.218.462.408.939.155.388.67.491.968.193l.073-.072c.963-.96 2.12-2.114 2.353-2.67.204-.492.273-1.022.197-1.534-.07-.468-.312-.912-.772-1.636l-2.195 2.189c-.411.41-.789.786-1.13 1.08a5.179 5.179 0 0 1-.674.504Z" /></g><g opacity={0.5} fill="currentColor"><path d="M7.686 14.563a.759.759 0 1 0-1.073-1.073L4.47 15.632a.759.759 0 1 0 1.074 1.074l2.142-2.143ZM10.495 17.369a.759.759 0 1 0-1.073-1.073l-2.128 2.127a.76.76 0 0 0 1.074 1.074l2.127-2.128Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Rocket2