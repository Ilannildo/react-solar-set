import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Dumbbell = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m17.235 16.848-.287.693.287-.693ZM16 13.5h.75a.75.75 0 0 0-.75-.75v.75Zm.152 2.265-.693.287.693-.287Zm5.696 0 .693.287-.693-.287Zm-1.083 1.083-.287-.693.287.693Zm0-9.696-.287.693.287-.693Zm.39 1.37a.75.75 0 1 0 1.386-.574l-1.386.574Zm-3.92-1.37-.287-.693.287.693ZM16 10.5v.75a.75.75 0 0 0 .75-.75H16Zm.152-2.265-.693-.287.693.287ZM3.235 16.848l-.287.693.287-.693Zm-1.083-1.083-.693.287.693-.287ZM8 13.5v-.75a.75.75 0 0 0-.75.75H8Zm-.152 2.265.693.287-.693-.287Zm-1.083 1.083.287.693-.287-.693Zm0-9.696.287-.693-.287.693ZM8 10.5h-.75c0 .414.336.75.75.75v-.75Zm-.152-2.265.693-.287-.693.287ZM3.235 7.152l-.287-.693.287.693ZM2.152 8.235l-.693-.287.693.287ZM22.75 12a.75.75 0 0 0-1.5 0h1.5ZM19 16.25c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188.31.021.69.021 1.145.021v-1.5Zm-3.75-2.75c0 .461 0 .954.02 1.38.01.213.026.421.051.609.024.176.063.382.138.563l1.386-.574-.012-.045a1.739 1.739 0 0 1-.026-.147 5.623 5.623 0 0 1-.039-.477 29.644 29.644 0 0 1-.018-1.309h-1.5Zm2.272 2.655a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489l.574-1.386ZM21.25 14c0 .476 0 .796-.017 1.043-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907.021-.31.021-.69.021-1.145h-1.5ZM19 17.75c.456 0 .835 0 1.145-.02.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017v1.5Zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489l-1.386-.574ZM19 7.75c.476 0 .796 0 1.043.017.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188-.31-.021-.69-.021-1.145-.021v1.5Zm1.478.095c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489l-.574 1.386ZM19 6.25c-.456 0-.835 0-1.145.02a2.823 2.823 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078.247-.017.567-.017 1.043-.017v-1.5Zm-2.25 4.25c0-.47 0-.926.018-1.309.01-.19.022-.35.04-.477.008-.063.017-.11.025-.147l.012-.045-1.386-.574a2.326 2.326 0 0 0-.138.563 7.035 7.035 0 0 0-.051.61c-.02.425-.02.918-.02 1.379h1.5Zm.198-4.04a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677l-.574-1.386ZM2.75 14v-4h-1.5v4h1.5ZM5 16.25c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188.31.021.69.021 1.145.021v-1.5ZM1.25 14c0 .456 0 .835.02 1.145.022.318.07.617.19.907l1.385-.574c-.032-.077-.061-.194-.078-.435A17.091 17.091 0 0 1 2.75 14h-1.5Zm2.272 2.155a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489l.574-1.386ZM7.25 13.5c0 .47 0 .926-.018 1.309-.01.19-.022.35-.04.477a1.706 1.706 0 0 1-.025.147l-.012.045 1.386.574c.075-.181.114-.387.138-.563.025-.188.041-.396.051-.61.02-.425.02-.918.02-1.379h-1.5ZM5 17.75c.456 0 .835 0 1.145-.02.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078A17.07 17.07 0 0 1 5 16.25v1.5Zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489l-1.386-.574ZM5 7.75c.476 0 .796 0 1.043.017.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188-.31-.021-.69-.021-1.145-.021v1.5Zm3.75 2.75c0-.461 0-.954-.02-1.38a7.058 7.058 0 0 0-.051-.609 2.323 2.323 0 0 0-.138-.563l-1.386.574.012.045c.008.036.017.084.026.147a5.6 5.6 0 0 1 .039.477c.018.383.018.838.018 1.309h1.5ZM6.478 7.845c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489l-.574 1.386ZM5 6.25c-.456 0-.835 0-1.145.02a2.823 2.823 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078A17.09 17.09 0 0 1 5 7.75v-1.5ZM2.75 10c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435L1.46 7.948c-.12.29-.167.59-.188.907-.021.31-.021.69-.021 1.145h1.5Zm.198-3.54a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677L2.948 6.46ZM8 11.25h8v-1.5H8v1.5Zm8 1.5H8v1.5h8v-1.5Zm5.25-.75v2h1.5v-2h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m17.235 16.848-.287.693.287-.693ZM16 13.5h.75a.75.75 0 0 0-.75-.75v.75Zm.152 2.265-.693.287.693-.287Zm5.696 0 .693.287-.693-.287Zm-1.083 1.083-.287-.693.287.693Zm0-9.696-.287.693.287-.693Zm1.083 1.083.693-.287-.693.287Zm-4.613-1.083-.287-.693.287.693ZM16 10.5v.75a.75.75 0 0 0 .75-.75H16Zm.152-2.265-.693-.287.693.287ZM3.235 16.848l-.287.693.287-.693Zm-1.083-1.083-.693.287.693-.287ZM8 13.5v-.75a.75.75 0 0 0-.75.75H8Zm-.152 2.265.693.287-.693-.287Zm-1.083 1.083.287.693-.287-.693Zm0-9.696.287-.693-.287.693ZM8 10.5h-.75c0 .414.336.75.75.75v-.75Zm-.152-2.265.693-.287-.693.287ZM3.235 7.152l-.287-.693.287.693ZM2.152 8.235l-.693-.287.693.287ZM21.25 10v4h1.5v-4h-1.5ZM19 16.25c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188.31.021.69.021 1.145.021v-1.5Zm-3.75-2.75c0 .461 0 .954.02 1.38.01.213.026.421.051.609.024.176.063.382.138.563l1.386-.574-.012-.045a1.739 1.739 0 0 1-.026-.147 5.623 5.623 0 0 1-.039-.477 29.644 29.644 0 0 1-.018-1.309h-1.5Zm2.272 2.655a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489l.574-1.386ZM21.25 14c0 .476 0 .796-.017 1.043-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907.021-.31.021-.69.021-1.145h-1.5ZM19 17.75c.456 0 .835 0 1.145-.02.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017v1.5Zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489l-1.386-.574ZM19 7.75c.476 0 .796 0 1.043.017.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188-.31-.021-.69-.021-1.145-.021v1.5ZM22.75 10c0-.456 0-.835-.02-1.145a2.822 2.822 0 0 0-.19-.907l-1.385.574c.032.077.061.194.078.435.017.247.017.567.017 1.043h1.5Zm-2.272-2.155c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489l-.574 1.386ZM19 6.25c-.456 0-.835 0-1.145.02a2.823 2.823 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078.247-.017.567-.017 1.043-.017v-1.5Zm-2.25 4.25c0-.47 0-.926.018-1.309.01-.19.022-.35.04-.477.008-.063.017-.11.025-.147l.012-.045-1.386-.574a2.326 2.326 0 0 0-.138.563 7.035 7.035 0 0 0-.051.61c-.02.425-.02.918-.02 1.379h1.5Zm.198-4.04a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677l-.574-1.386ZM2.75 14v-4h-1.5v4h1.5ZM5 16.25c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188.31.021.69.021 1.145.021v-1.5ZM1.25 14c0 .456 0 .835.02 1.145.022.318.07.617.19.907l1.385-.574c-.032-.077-.061-.194-.078-.435A17.091 17.091 0 0 1 2.75 14h-1.5Zm2.272 2.155a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489l.574-1.386ZM7.25 13.5c0 .47 0 .926-.018 1.309-.01.19-.022.35-.04.477a1.706 1.706 0 0 1-.025.147l-.012.045 1.386.574c.075-.181.114-.387.138-.563.025-.188.041-.396.051-.61.02-.425.02-.918.02-1.379h-1.5ZM5 17.75c.456 0 .835 0 1.145-.02.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078A17.07 17.07 0 0 1 5 16.25v1.5Zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489l-1.386-.574ZM5 7.75c.476 0 .796 0 1.043.017.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188-.31-.021-.69-.021-1.145-.021v1.5Zm3.75 2.75c0-.461 0-.954-.02-1.38a7.058 7.058 0 0 0-.051-.609 2.323 2.323 0 0 0-.138-.563l-1.386.574.012.045c.008.036.017.084.026.147a5.6 5.6 0 0 1 .039.477c.018.383.018.838.018 1.309h1.5ZM6.478 7.845c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489l-.574 1.386ZM5 6.25c-.456 0-.835 0-1.145.02a2.823 2.823 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078A17.09 17.09 0 0 1 5 7.75v-1.5ZM2.75 10c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435L1.46 7.948c-.12.29-.167.59-.188.907-.021.31-.021.69-.021 1.145h1.5Zm.198-3.54a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677L2.948 6.46ZM8 11.25h8v-1.5H8v1.5Zm8 1.5H8v1.5h8v-1.5Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m17.235 16.848-.287.693.287-.693ZM16 13.5h.75a.75.75 0 0 0-.75-.75v.75Zm.152 2.265-.693.287.693-.287Zm5.696 0 .693.287-.693-.287Zm-1.083 1.083-.287-.693.287.693Zm0-9.696-.287.693.287-.693Zm1.083 1.083.693-.287-.693.287Zm-4.613-1.083-.287-.693.287.693ZM16 10.5v.75a.75.75 0 0 0 .75-.75H16Zm.152-2.265-.693-.287.693.287ZM3.235 16.848l-.287.693.287-.693Zm-1.083-1.083-.693.287.693-.287ZM8 13.5v-.75a.75.75 0 0 0-.75.75H8Zm-.152 2.265.693.287-.693-.287Zm-1.083 1.083.287.693-.287-.693Zm0-9.696.287-.693-.287.693ZM8 10.5h-.75c0 .414.336.75.75.75v-.75Zm-.152-2.265.693-.287-.693.287ZM3.235 7.152l-.287-.693.287.693ZM2.152 8.235l-.693-.287.693.287ZM21.25 10v4h1.5v-4h-1.5ZM19 16.25c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188.31.021.69.021 1.145.021v-1.5Zm-3.75-2.75c0 .461 0 .954.02 1.38.01.213.026.421.051.609.024.176.063.382.138.563l1.386-.574-.012-.045a1.739 1.739 0 0 1-.026-.147 5.623 5.623 0 0 1-.039-.477 29.644 29.644 0 0 1-.018-1.309h-1.5Zm2.272 2.655a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489l.574-1.386ZM21.25 14c0 .476 0 .796-.017 1.043-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907.021-.31.021-.69.021-1.145h-1.5ZM19 17.75c.456 0 .835 0 1.145-.02.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017v1.5Zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489l-1.386-.574ZM19 7.75c.476 0 .796 0 1.043.017.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188-.31-.021-.69-.021-1.145-.021v1.5ZM22.75 10c0-.456 0-.835-.02-1.145a2.822 2.822 0 0 0-.19-.907l-1.385.574c.032.077.061.194.078.435.017.247.017.567.017 1.043h1.5Zm-2.272-2.155c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489l-.574 1.386ZM19 6.25c-.456 0-.835 0-1.145.02a2.823 2.823 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078.247-.017.567-.017 1.043-.017v-1.5Zm-2.25 4.25c0-.47 0-.926.018-1.309.01-.19.022-.35.04-.477.008-.063.017-.11.025-.147l.012-.045-1.386-.574a2.326 2.326 0 0 0-.138.563 7.035 7.035 0 0 0-.051.61c-.02.425-.02.918-.02 1.379h1.5Zm.198-4.04a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677l-.574-1.386ZM2.75 14v-4h-1.5v4h1.5ZM5 16.25c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188.31.021.69.021 1.145.021v-1.5ZM1.25 14c0 .456 0 .835.02 1.145.022.318.07.617.19.907l1.385-.574c-.032-.077-.061-.194-.078-.435A17.091 17.091 0 0 1 2.75 14h-1.5Zm2.272 2.155a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489l.574-1.386ZM7.25 13.5c0 .47 0 .926-.018 1.309-.01.19-.022.35-.04.477a1.706 1.706 0 0 1-.025.147l-.012.045 1.386.574c.075-.181.114-.387.138-.563.025-.188.041-.396.051-.61.02-.425.02-.918.02-1.379h-1.5ZM5 17.75c.456 0 .835 0 1.145-.02.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078A17.07 17.07 0 0 1 5 16.25v1.5Zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489l-1.386-.574ZM5 7.75c.476 0 .796 0 1.043.017.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188-.31-.021-.69-.021-1.145-.021v1.5Zm3.75 2.75c0-.461 0-.954-.02-1.38a7.058 7.058 0 0 0-.051-.609 2.323 2.323 0 0 0-.138-.563l-1.386.574.012.045c.008.036.017.084.026.147a5.6 5.6 0 0 1 .039.477c.018.383.018.838.018 1.309h1.5ZM6.478 7.845c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489l-.574 1.386ZM5 6.25c-.456 0-.835 0-1.145.02a2.823 2.823 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078A17.09 17.09 0 0 1 5 7.75v-1.5ZM2.75 10c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435L1.46 7.948c-.12.29-.167.59-.188.907-.021.31-.021.69-.021 1.145h1.5Zm.198-3.54a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677L2.948 6.46ZM8 11.25h8v-1.5H8v1.5Zm8 1.5H8v1.5h8v-1.5Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.975 6.25h.05c.445 0 .816 0 1.12.02.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.075.181.114.387.138.563.025.188.041.396.051.61.01.198.014.411.017.629h6.506c.003-.218.008-.431.017-.63.01-.213.026-.421.051-.609.024-.176.063-.382.138-.563a2.75 2.75 0 0 1 1.489-1.489c.29-.12.59-.167.907-.188.304-.021.675-.021 1.12-.021h.05c.445 0 .816 0 1.12.02.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907.021.304.021.675.021 1.12v4.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907 2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188-.304.021-.675.021-1.12.021h-.05c-.445 0-.816 0-1.12-.02a2.822 2.822 0 0 1-.907-.19 2.75 2.75 0 0 1-1.489-1.488 2.328 2.328 0 0 1-.138-.563 7.039 7.039 0 0 1-.051-.61c-.01-.198-.014-.411-.017-.629H8.747c-.003.218-.008.431-.017.63-.01.213-.026.421-.051.609a2.325 2.325 0 0 1-.138.563 2.75 2.75 0 0 1-1.489 1.489c-.29.12-.59.167-.907.188-.304.021-.675.021-1.12.021h-.05c-.445 0-.816 0-1.12-.02a2.822 2.822 0 0 1-.907-.19 2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907-.021-.304-.021-.675-.021-1.12v-4.05c0-.445 0-.816.02-1.12.022-.317.07-.617.19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188.304-.021.675-.021 1.12-.021ZM3.957 7.767c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435A17.09 17.09 0 0 0 2.75 10v4c0 .476 0 .796.017 1.043.017.241.046.358.078.435.127.307.37.55.677.677.077.032.194.061.435.078.247.017.567.017 1.043.017s.796 0 1.043-.017c.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677 0 0 .005-.012.012-.045.008-.036.017-.085.026-.147.017-.126.03-.286.039-.477.018-.383.018-.838.018-1.309a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75c0 .47 0 .926.018 1.309.01.19.022.35.04.477.008.063.017.11.025.147.008.033.013.046.013.046.126.307.37.549.676.676.077.032.194.061.435.078.247.017.567.017 1.043.017s.796 0 1.043-.017c.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043v-4c0-.476 0-.796-.017-1.043-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.091 17.091 0 0 0 19 7.75c-.476 0-.796 0-1.043.017-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677s-.005.013-.012.045a1.731 1.731 0 0 0-.026.147c-.017.126-.03.286-.039.477-.018.383-.018.838-.018 1.309a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75c0-.47 0-.926-.018-1.309a5.6 5.6 0 0 0-.04-.477 1.699 1.699 0 0 0-.025-.147c-.007-.032-.013-.046-.013-.046a1.248 1.248 0 0 0-.676-.676c-.077-.032-.194-.061-.435-.078A17.09 17.09 0 0 0 5 7.75c-.476 0-.796 0-1.043.017Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 14v-4c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 7 19.932 7 19 7c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C16 8.602 16 9.568 16 10.5H8c0-.932 0-1.898-.152-2.265a2 2 0 0 0-1.083-1.083C6.398 7 5.932 7 5 7c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 8.602 2 9.068 2 10v4c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 17 4.068 17 5 17c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C8 15.398 8 14.432 8 13.5h8c0 .932 0 1.898.152 2.265a2 2 0 0 0 1.083 1.083C17.602 17 18.068 17 19 17c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 15.398 22 14.932 22 14Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 10v4c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 17 19.932 17 19 17c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C16 15.398 16 14.432 16 13.5v-3c0-.932 0-1.898.152-2.265a2 2 0 0 1 1.083-1.083C17.602 7 18.068 7 19 7c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 8.602 22 9.068 22 10Zm-14 .5v3c0 .932 0 1.898-.152 2.265a2 2 0 0 1-1.083 1.083C6.398 17 5.932 17 5 17c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 15.398 2 14.932 2 14v-4c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 7 4.068 7 5 7c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C8 8.602 8 9.568 8 10.5Z" fill="currentColor" /><path opacity={0.5} d="M16 10.5H8v3h8v-3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Dumbbell