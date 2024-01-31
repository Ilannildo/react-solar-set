import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Pipette = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.531 19.291-.53-.53.53.53Zm.802-12.446.53-.53-.53.53Zm-1.092-1.092-.53.53.53-.53Zm2.184-2.183.53-.53-.53.53Zm1.091 1.091-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm1.456-1.455-.53-.53.53.53Zm4.367 7.278-.53-.53a.75.75 0 0 0 0 1.06l.53-.53Zm1.091 1.091-.53.53.53-.53Zm-17.978 7.79.53.53-.53-.53Zm.629-.63-.53-.53.53.53Zm1.555 2.813.53.53-.53-.53Zm.628-.629-.53-.53.53.53ZM3.78 16.747l-.746.082.746-.082Zm-.053-.476.745-.082-.745.082Zm3.527 3.95-.083.746.083-.746Zm.476.053.082-.745-.082.745Zm-2.214.404L6 21.25l-.485-.572Zm1.392-.488.022-.75-.022.75ZM3.88 14.426l-.663-.351.663.35Zm-.203.58-.737-.14.737.14Zm-.355 3.48L2.75 18l.572.485Zm.488-1.393.75-.022-.75.022Zm5.764 3.027.351.662-.35-.662Zm-.58.203.14.737-.14-.737Zm4.183-7.385A.75.75 0 0 0 12.117 14l1.06-1.06Zm-1.207 4.915a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-.793-2.915A.75.75 0 0 0 10.117 16l1.06-1.06Zm-2.558-6.44a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM6.71 12.53a.75.75 0 1 0-1.062-1.06l1.061 1.06Zm14.415-7.327a.75.75 0 1 0 1.444-.406l-1.444.406Zm.98 3.338a.75.75 0 0 0-1.3-.748l1.3.748Zm-10.24-2.227-1.092-1.091-1.061 1.06 1.092 1.092 1.06-1.06Zm6.913 6.914-1.091-1.091-1.061 1.06 1.092 1.092 1.06-1.06ZM11.894 4.1l1.092 1.092 1.06-1.06-1.091-1.093-1.06 1.061Zm2.153 1.092 1.455-1.456-1.06-1.06-1.456 1.455 1.06 1.06Zm6.217 3.306-1.456 1.455 1.06 1.061 1.457-1.456-1.061-1.06Zm-9.461-1.123 5.822 5.822 1.06-1.06-5.822-5.823-1.06 1.061Zm-7.82 12.52.628-.629-1.06-1.06-.63.628 1.062 1.06Zm2.183 2.183.629-.629-1.061-1.06-.629.628 1.06 1.061Zm-.642-5.414-.053-.476-1.49.166.052.476 1.491-.166Zm2.646 4.303.476.053.165-1.491-.475-.053-.166 1.49Zm-1.375.482c.133-.133.17-.17.205-.2l-.97-1.143c-.093.08-.18.167-.296.283l1.06 1.06Zm1.541-1.973c-.162-.018-.285-.032-.407-.036l-.044 1.5c.046 0 .098.006.285.027l.166-1.491ZM6 21.25c.247-.21.562-.32.885-.31l.044-1.5a2.808 2.808 0 0 0-1.9.666L6 21.25Zm-4.078.828a2.294 2.294 0 0 0 3.244 0l-1.06-1.06a.794.794 0 0 1-1.123 0l-1.061 1.06Zm2.257-9.14c-.424.424-.752.74-.962 1.137l1.326.702c.08-.15.207-.289.696-.778l-1.06-1.06Zm.292 3.25c-.076-.687-.09-.875-.058-1.042l-1.473-.28c-.084.44-.026.893.04 1.488l1.491-.165Zm-1.254-2.113a2.81 2.81 0 0 0-.277.792l1.473.279c.025-.129.068-.253.13-.369l-1.326-.702ZM15.502 3.736a3.367 3.367 0 0 1 4.762 0l1.06-1.06a4.867 4.867 0 0 0-6.882 0l1.06 1.06Zm4.398 9.492a.794.794 0 0 1-1.123 0l-1.06 1.061a2.294 2.294 0 0 0 3.244 0L19.9 13.23ZM3.61 19.266c.116-.116.204-.203.283-.295L2.75 18c-.03.035-.066.072-.2.205l1.061 1.061Zm-.578-2.436c.021.187.026.239.028.285l1.499-.044c-.004-.122-.018-.245-.036-.407l-1.49.165Zm.86 2.14c.45-.529.687-1.205.667-1.899l-1.5.044c.01.323-.1.638-.31.885l1.144.97ZM10.773 4.1a.794.794 0 0 1 1.122 0l1.061-1.06a2.294 2.294 0 0 0-3.244 0l1.06 1.06Zm-7.79 16.917a.794.794 0 0 1 0-1.122l-1.06-1.06a2.294 2.294 0 0 0 0 3.243l1.06-1.06Zm7.79-15.794a.794.794 0 0 1 0-1.123L9.71 3.04a2.294 2.294 0 0 0 0 3.243l1.06-1.06Zm10.189 9.066a2.294 2.294 0 0 0 0-3.244l-1.061 1.06c.31.31.31.813 0 1.123l1.06 1.061ZM10 18.761c-.489.489-.628.617-.778.696l.702 1.325c.396-.21.713-.537 1.136-.96l-1.06-1.061ZM7.646 21.02c.595.066 1.047.124 1.487.04l-.279-1.473c-.167.031-.355.018-1.043-.058l-.165 1.49Zm1.577-1.563a1.31 1.31 0 0 1-.369.13l.28 1.473c.276-.052.543-.146.791-.277l-.702-1.326Zm9.585-8.443 1.092 1.092 1.06-1.061-1.091-1.092-1.06 1.061Zm-7.746 8.807 3.968-3.968-1.06-1.061L10 18.761l1.062 1.06Zm3.968-3.968 2.656-2.656-1.061-1.06-2.655 2.655 1.06 1.06Zm0-1.061-1.853-1.854L12.117 14l1.853 1.854 1.06-1.061Zm-2 2-1.853-1.854L10.117 16l1.853 1.854 1.06-1.061ZM9.68 9.558l2.183-2.183-1.06-1.06-2.184 2.183 1.06 1.06ZM5.24 14l1.468-1.469-1.06-1.06-1.47 1.468L5.24 14ZM20.263 3.736c.424.424.71.93.86 1.467l1.444-.406a4.848 4.848 0 0 0-1.244-2.121l-1.06 1.06Zm.54 4.057a3.37 3.37 0 0 1-.54.705l1.06 1.06c.31-.31.571-.652.78-1.017l-1.3-.748Z" fill="currentColor" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.531 19.291-.53-.53.53.53Zm.802-12.446.53-.53-.53.53Zm-1.092-1.092-.53.53.53-.53Zm2.184-2.183.53-.53-.53.53Zm1.091 1.091-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm1.456-1.455-.53-.53.53.53Zm4.367 7.278-.53-.53a.75.75 0 0 0 0 1.06l.53-.53Zm1.091 1.091-.53.53.53-.53ZM4.71 13.47l-.53-.53.53.53Zm-2.257 5.896.53.53-.53-.53Zm.629-.63-.53-.53.53.53Zm1.555 2.813.53.53-.53-.53Zm.628-.629-.53-.53.53.53ZM3.78 16.747l-.746.082.746-.082Zm-.053-.476.745-.082-.745.082Zm3.527 3.95-.083.746.083-.746Zm.476.053.082-.745-.082.745Zm-2.214.404L6 21.25l-.485-.572Zm1.392-.488.022-.75-.022.75ZM3.88 14.426l-.663-.351.663.35Zm-.203.58-.737-.14.737.14Zm-.355 3.48L2.75 18l.572.485Zm.488-1.393.75-.022-.75.022Zm5.764 3.027.351.662-.35-.662Zm-.58.203.14.737-.14-.737Zm5.506-5-.53-.531.53.53Zm-2.637-9.009-1.091-1.091-1.061 1.06 1.092 1.092 1.06-1.06Zm6.914 6.914-1.091-1.091-1.061 1.06 1.092 1.092 1.06-1.06ZM11.894 4.1l1.092 1.092 1.06-1.06-1.091-1.093-1.06 1.061Zm2.153 1.092 1.455-1.456-1.06-1.06-1.456 1.455 1.06 1.06Zm6.217 3.306-1.456 1.455 1.06 1.061 1.457-1.456-1.061-1.06Zm-9.461-1.123 5.822 5.822 1.06-1.06-5.822-5.823-1.06 1.061ZM5.239 14l6.624-6.624-1.06-1.06-6.624 6.623L5.239 14Zm-2.256 5.896.628-.629-1.06-1.06-.63.628 1.062 1.06Zm2.183 2.183.629-.629-1.061-1.06-.629.628 1.06 1.061Zm-.642-5.414-.053-.476-1.49.166.052.476 1.491-.166Zm2.646 4.303.476.053.165-1.491-.475-.053-.166 1.49Zm-1.375.482c.133-.133.17-.17.205-.2l-.97-1.143c-.093.08-.18.167-.296.283l1.06 1.06Zm1.541-1.973c-.162-.018-.285-.032-.407-.036l-.044 1.5c.046 0 .098.006.285.027l.166-1.491ZM6 21.25c.247-.21.562-.32.885-.31l.044-1.5a2.808 2.808 0 0 0-1.9.666L6 21.25Zm-4.078.828a2.294 2.294 0 0 0 3.244 0l-1.06-1.06a.794.794 0 0 1-1.123 0l-1.061 1.06Zm2.257-9.14c-.424.424-.752.74-.962 1.137l1.326.702c.08-.15.207-.289.696-.778l-1.06-1.06Zm.292 3.25c-.076-.687-.09-.875-.058-1.042l-1.473-.28c-.084.44-.026.893.04 1.488l1.491-.165Zm-1.254-2.113a2.81 2.81 0 0 0-.277.792l1.473.279c.025-.129.068-.253.13-.369l-1.326-.702ZM20.264 3.736a3.367 3.367 0 0 1 0 4.762l1.06 1.06c1.901-1.9 1.901-4.982 0-6.883l-1.06 1.061Zm-4.762 0a3.367 3.367 0 0 1 4.762 0l1.06-1.06a4.867 4.867 0 0 0-6.882 0l1.06 1.06Zm4.398 9.492a.794.794 0 0 1-1.123 0l-1.06 1.061a2.294 2.294 0 0 0 3.244 0L19.9 13.23ZM3.61 19.266c.116-.116.204-.203.283-.295L2.75 18c-.03.035-.066.072-.2.205l1.061 1.061Zm-.578-2.436c.021.187.026.239.028.285l1.499-.044c-.004-.122-.018-.245-.036-.407l-1.49.165Zm.86 2.14c.45-.529.687-1.205.667-1.899l-1.5.044c.01.323-.1.638-.31.885l1.144.97ZM10.773 4.1a.794.794 0 0 1 1.122 0l1.061-1.06a2.294 2.294 0 0 0-3.244 0l1.06 1.06Zm-7.79 16.917a.794.794 0 0 1 0-1.122l-1.06-1.06a2.294 2.294 0 0 0 0 3.243l1.06-1.06Zm7.79-15.794a.794.794 0 0 1 0-1.123L9.71 3.04a2.294 2.294 0 0 0 0 3.243l1.06-1.06Zm10.189 9.066a2.294 2.294 0 0 0 0-3.244l-1.061 1.06c.31.31.31.813 0 1.123l1.06 1.061ZM10 18.761c-.489.489-.628.617-.778.696l.702 1.325c.396-.21.713-.537 1.136-.96l-1.06-1.061ZM7.646 21.02c.595.066 1.047.124 1.487.04l-.279-1.473c-.167.031-.355.018-1.043-.058l-.165 1.49Zm1.577-1.563a1.31 1.31 0 0 1-.369.13l.28 1.473c.276-.052.543-.146.791-.277l-.702-1.326Zm9.585-8.443 1.092 1.092 1.06-1.061-1.091-1.092-1.06 1.061Zm-7.746 8.807 3.968-3.968-1.06-1.061L10 18.761l1.062 1.06Zm3.968-3.968 2.656-2.656-1.061-1.06-2.655 2.655 1.06 1.06Z" fill="currentColor" /><path opacity={0.5} d="m14.5 15.322-1.854-1.853m-.146 3.853-1.854-1.853" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.531 19.291-.53-.53.53.53Zm.802-12.446.53-.53-.53.53Zm-1.092-1.092-.53.53.53-.53Zm2.184-2.183.53-.53-.53.53Zm1.091 1.091-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm1.456-1.455-.53-.53.53.53Zm4.367 7.278-.53-.53a.75.75 0 0 0 0 1.06l.53-.53Zm1.091 1.091-.53.53.53-.53ZM4.71 13.47l-.53-.53.53.53Zm-2.257 5.896.53.53-.53-.53Zm.629-.63-.53-.53.53.53Zm1.555 2.813.53.53-.53-.53Zm.628-.629-.53-.53.53.53ZM3.78 16.747l-.746.082.746-.082Zm-.053-.476.745-.082-.745.082Zm3.527 3.95-.083.746.083-.746Zm.476.053.082-.745-.082.745Zm-2.214.404L6 21.25l-.485-.572Zm1.392-.488.022-.75-.022.75ZM3.88 14.426l-.663-.351.663.35Zm-.203.58-.737-.14.737.14Zm-.355 3.48L2.75 18l.572.485Zm.488-1.393.75-.022-.75.022Zm5.764 3.027.351.662-.35-.662Zm-.58.203.14.737-.14-.737Zm4.183-7.385A.75.75 0 0 0 12.117 14l1.06-1.06Zm-1.207 4.915a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-.793-2.915A.75.75 0 0 0 10.117 16l1.06-1.06Zm.686-8.624-1.091-1.091-1.061 1.06 1.092 1.092 1.06-1.06Zm6.914 6.914-1.091-1.091-1.061 1.06 1.092 1.092 1.06-1.06ZM11.894 4.1l1.092 1.092 1.06-1.06-1.091-1.093-1.06 1.061Zm2.153 1.092 1.455-1.456-1.06-1.06-1.456 1.455 1.06 1.06Zm6.217 3.306-1.456 1.455 1.06 1.061 1.457-1.456-1.061-1.06Zm-9.461-1.123 5.822 5.822 1.06-1.06-5.822-5.823-1.06 1.061ZM5.239 14l6.624-6.624-1.06-1.06-6.624 6.623L5.239 14Zm-2.256 5.896.628-.629-1.06-1.06-.63.628 1.062 1.06Zm2.183 2.183.629-.629-1.061-1.06-.629.628 1.06 1.061Zm-.642-5.414-.053-.476-1.49.166.052.476 1.491-.166Zm2.646 4.303.476.053.165-1.491-.475-.053-.166 1.49Zm-1.375.482c.133-.133.17-.17.205-.2l-.97-1.143c-.093.08-.18.167-.296.283l1.06 1.06Zm1.541-1.973c-.162-.018-.285-.032-.407-.036l-.044 1.5c.046 0 .098.006.285.027l.166-1.491ZM6 21.25c.247-.21.562-.32.885-.31l.044-1.5a2.808 2.808 0 0 0-1.9.666L6 21.25Zm-4.078.828a2.294 2.294 0 0 0 3.244 0l-1.06-1.06a.794.794 0 0 1-1.123 0l-1.061 1.06Zm2.257-9.14c-.424.424-.752.74-.962 1.137l1.326.702c.08-.15.207-.289.696-.778l-1.06-1.06Zm.292 3.25c-.076-.687-.09-.875-.058-1.042l-1.473-.28c-.084.44-.026.893.04 1.488l1.491-.165Zm-1.254-2.113a2.81 2.81 0 0 0-.277.792l1.473.279c.025-.129.068-.253.13-.369l-1.326-.702ZM20.264 3.736a3.367 3.367 0 0 1 0 4.762l1.06 1.06c1.901-1.9 1.901-4.982 0-6.883l-1.06 1.061Zm-4.762 0a3.367 3.367 0 0 1 4.762 0l1.06-1.06a4.867 4.867 0 0 0-6.882 0l1.06 1.06Zm4.398 9.492a.794.794 0 0 1-1.123 0l-1.06 1.061a2.294 2.294 0 0 0 3.244 0L19.9 13.23ZM3.61 19.266c.116-.116.204-.203.283-.295L2.75 18c-.03.035-.066.072-.2.205l1.061 1.061Zm-.578-2.436c.021.187.026.239.028.285l1.499-.044c-.004-.122-.018-.245-.036-.407l-1.49.165Zm.86 2.14c.45-.529.687-1.205.667-1.899l-1.5.044c.01.323-.1.638-.31.885l1.144.97ZM10.773 4.1a.794.794 0 0 1 1.122 0l1.061-1.06a2.294 2.294 0 0 0-3.244 0l1.06 1.06Zm-7.79 16.917a.794.794 0 0 1 0-1.122l-1.06-1.06a2.294 2.294 0 0 0 0 3.243l1.06-1.06Zm7.79-15.794a.794.794 0 0 1 0-1.123L9.71 3.04a2.294 2.294 0 0 0 0 3.243l1.06-1.06Zm10.189 9.066a2.294 2.294 0 0 0 0-3.244l-1.061 1.06c.31.31.31.813 0 1.123l1.06 1.061ZM10 18.761c-.489.489-.628.617-.778.696l.702 1.325c.396-.21.713-.537 1.136-.96l-1.06-1.061ZM7.646 21.02c.595.066 1.047.124 1.487.04l-.279-1.473c-.167.031-.355.018-1.043-.058l-.165 1.49Zm1.577-1.563a1.31 1.31 0 0 1-.369.13l.28 1.473c.276-.052.543-.146.791-.277l-.702-1.326Zm9.585-8.443 1.092 1.092 1.06-1.061-1.091-1.092-1.06 1.061Zm-7.746 8.807 3.968-3.968-1.06-1.061L10 18.761l1.062 1.06Zm3.968-3.968 2.656-2.656-1.061-1.06-2.655 2.655 1.06 1.06Zm0-1.061-1.853-1.854L12.117 14l1.853 1.854 1.06-1.061Zm-2 2-1.853-1.854L10.117 16l1.853 1.854 1.06-1.061Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M20.264 3.736a3.367 3.367 0 0 0-4.762 0l-1.455 1.456a.75.75 0 0 1-1.061 0L11.894 4.1a.794.794 0 1 0-1.122 1.123l8.005 8.005a.794.794 0 0 0 1.123-1.122l-1.092-1.092a.75.75 0 0 1 0-1.06l1.456-1.456a3.367 3.367 0 0 0 0-4.762Zm-5.822-1.06a4.867 4.867 0 1 1 6.883 6.882l-.926.926.562.561a2.294 2.294 0 0 1-3.244 3.244l-.562-.561-6.094 6.093-.066.067c-.39.391-.695.696-1.07.894a2.809 2.809 0 0 1-.792.278c-.416.08-.844.032-1.393-.03a33.96 33.96 0 0 0-.094-.01l-.476-.053a3.947 3.947 0 0 0-.285-.027 1.308 1.308 0 0 0-.885.31c-.035.03-.072.066-.205.2l-.63.628a2.294 2.294 0 1 1-3.243-3.244l.629-.629c.133-.133.17-.17.2-.205.208-.247.319-.562.31-.885a3.989 3.989 0 0 0-.028-.285l-.053-.476a155.65 155.65 0 0 0-.01-.094c-.061-.549-.11-.977-.03-1.394a2.81 2.81 0 0 1 .277-.791c.2-.375.504-.68.895-1.07l.067-.067 6.093-6.093-.561-.562a2.294 2.294 0 1 1 3.244-3.244l.561.562.926-.925Zm-3.109 5.23-6.094 6.093c-.489.489-.617.628-.696.778-.062.116-.105.24-.13.369-.031.167-.018.355.058 1.043l.056.5c.017.15.03.267.033.382.02.694-.217 1.37-.666 1.9-.075.087-.158.17-.265.277l-.018.018-.628.629a.794.794 0 1 0 1.122 1.122l.647-.646c.107-.107.19-.19.277-.265a2.808 2.808 0 0 1 1.9-.666c.115.003.231.016.382.033l.5.056c.688.076.876.09 1.043.058a1.31 1.31 0 0 0 .369-.13c.15-.08.289-.207.778-.696l1.438-1.439L10.116 16a.75.75 0 0 1 1.06-1.06l1.324 1.323.94-.94L12.115 14a.75.75 0 0 1 1.06-1.06l1.324 1.323 1.595-1.595-4.762-4.762Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.241 5.753 8.006 8.006a1.544 1.544 0 0 0 2.183-2.184l-1.091-1.091 1.455-1.456a4.117 4.117 0 1 0-5.822-5.822L13.516 4.66 12.425 3.57a1.544 1.544 0 1 0-2.184 2.183ZM10.272 7.905 4.71 13.47c-.456.456-.684.684-.829.957a2.058 2.058 0 0 0-.203.58c-.058.304-.022.624.049 1.265l.053.476c.02.175.029.262.031.346a2.059 2.059 0 0 1-.488 1.392c-.054.064-.117.126-.241.25l-.629.63a1.544 1.544 0 0 0 2.184 2.183l.628-.629c.125-.124.187-.187.25-.24.389-.33.885-.504 1.393-.49.084.003.171.013.346.032l.476.053c.64.071.961.107 1.265.05a2.06 2.06 0 0 0 .58-.204c.273-.145.501-.373.957-.829l1.439-1.439L10.116 16a.75.75 0 1 1 1.06-1.06l1.854 1.853.94-.94L12.116 14a.75.75 0 0 1 1.06-1.06l1.854 1.853 1.065-1.064-5.823-5.823Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.241 5.753 1.092 1.092 5.822 5.822 1.092 1.092a1.544 1.544 0 0 0 2.183-2.184l-1.091-1.091 1.455-1.456a4.117 4.117 0 1 0-5.822-5.822L13.516 4.66 12.425 3.57a1.544 1.544 0 1 0-2.184 2.183Z" fill="currentColor" /><path opacity={0.5} d="M4.709 13.469c-.456.456-.684.684-.829.957a2.058 2.058 0 0 0-.203.58c-.058.304-.022.624.049 1.265l.053.476c.02.175.029.262.031.346a2.059 2.059 0 0 1-.488 1.392 4.506 4.506 0 0 1-.241.25l-.629.63a1.544 1.544 0 1 0 2.184 2.183l.628-.629c.125-.124.187-.187.25-.24.389-.33.885-.504 1.393-.49.084.003.171.013.346.032l.476.053c.64.071.961.107 1.265.05.202-.04.398-.108.58-.204.273-.145.501-.373.957-.829l1.439-1.439 1.06-1.06.94-.94 1.06-1.06 2.125-2.125-5.822-5.822-6.624 6.624Z" fill="currentColor" /><path d="m12.116 14 1.854 1.852 1.06-1.06-1.853-1.854A.75.75 0 1 0 12.117 14ZM10.116 16l1.854 1.852 1.06-1.06-1.853-1.854A.75.75 0 1 0 10.117 16Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Pipette