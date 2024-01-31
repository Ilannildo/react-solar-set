import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Crown = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.433 14.173a.75.75 0 0 0-1.491-.16l1.49.16Zm-16.12-.08-.746.08.746-.08Zm-.184-1.705.746-.08-.746.08Zm4.631-1.454.655.365-.655-.365Zm1.79-3.209-.655-.365.655.365Zm2.9 0-.655.366.655-.366Zm1.79 3.209.655-.365-.655.365Zm.764 1.025-.303.687.303-.687Zm1.466-.714-.529-.531.53.531Zm-1.017.777-.102-.743.102.743Zm-9.924-.777L6 11.777l.53-.532Zm1.018.777.102-.743-.102.743Zm.45-.063.301.687-.302-.687Zm-2.285 8.194.5-.559-.5.56Zm12.576 0-.5-.559.5.56Zm1.694-9.653-.008.75.008-.75Zm-1.117-.52.567-.49-.567.49Zm-5.957-3.197-.341-.668.34.668Zm-1.816 0 .341-.668-.34.668Zm1.996 13.467h-2.176v1.5h2.176v-1.5Zm-8.03-6.237-.183-1.705-1.491.16.183 1.705 1.492-.16Zm4.357-2.714 1.79-3.208-1.31-.73-1.79 3.208 1.31.73Zm3.38-3.208 1.79 3.208 1.31-.73-1.79-3.209-1.31.73Zm1.79 3.208c.162.29.31.56.455.765.149.211.351.445.662.582l.604-1.373c.056.024.046.05-.039-.071a8.22 8.22 0 0 1-.372-.633l-1.31.73Zm2.356-.585c-.258.258-.412.41-.533.507-.115.093-.117.066-.057.058l.205 1.486c.336-.047.595-.216.796-.378.195-.158.412-.376.648-.61l-1.059-1.063Zm-1.24 1.932c.269.118.565.159.855.119l-.205-1.486a.083.083 0 0 1-.045-.006l-.605 1.373Zm-9.7-.87c.235.235.452.453.647.61.201.164.46.332.796.379l.205-1.486c.06.008.058.035-.057-.058a8.265 8.265 0 0 1-.533-.507L6 11.777Zm2.104-1.207a8.23 8.23 0 0 1-.373.633c-.084.12-.094.095-.038.07l.604 1.374c.31-.137.514-.37.662-.582.144-.206.293-.475.455-.765l-1.31-.73Zm-.661 2.196c.29.04.586-.001.854-.12l-.604-1.372a.083.083 0 0 1-.045.006l-.205 1.486Zm3.468 7.485c-1.438 0-2.445-.001-3.213-.1-.748-.095-1.17-.273-1.487-.556l-1 1.118c.63.564 1.39.81 2.296.926.886.113 2.006.112 3.404.112v-1.5Zm-7.345-6.077c.148 1.378.266 2.727.466 3.821.101.552.229 1.072.405 1.523.175.448.417.875.774 1.195l1-1.118c-.116-.104-.248-.294-.377-.623-.127-.326-.234-.741-.326-1.247-.188-1.022-.297-2.28-.45-3.711l-1.492.16Zm15.375-.16c-.154 1.431-.264 2.689-.45 3.71-.093.507-.2.922-.327 1.248-.129.329-.261.52-.377.623l1 1.118c.357-.32.599-.747.774-1.195.176-.451.304-.971.405-1.523.2-1.094.318-2.443.466-3.82l-1.491-.161Zm-5.854 7.737c1.398 0 2.518.001 3.404-.112.907-.116 1.666-.362 2.296-.926l-1-1.118c-.317.283-.739.46-1.487.556-.768.099-1.775.1-3.213.1v1.5ZM10.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 5h1.5ZM12 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 2.25v1.5ZM20.75 9a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.25 9h-1.5Zm-1.5 0a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 17.75 9h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 20 6.75v1.5ZM4 9.75A.75.75 0 0 1 3.25 9h-1.5A2.25 2.25 0 0 0 4 11.25v-1.5ZM3.25 9A.75.75 0 0 1 4 8.25v-1.5A2.25 2.25 0 0 0 1.75 9h1.5ZM4 8.25a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 4 6.75v1.5Zm16 1.5a.9.9 0 0 1-.009 0l-.017 1.5H20v-1.5Zm-.009 0a.747.747 0 0 1-.559-.26l-1.135.98c.406.47 1.006.772 1.677.78l.017-1.5Zm-.559-.26A.744.744 0 0 1 19.25 9h-1.5c0 .561.207 1.076.547 1.47l1.135-.98ZM18 11.777c.677-.675 1.026-1.015 1.258-1.159l-.787-1.276c-.42.26-.924.768-1.53 1.372L18 11.777ZM4.75 9a.744.744 0 0 1-.182.49l1.135.98c.34-.394.547-.909.547-1.47h-1.5Zm2.309 1.714c-.606-.604-1.11-1.113-1.53-1.372l-.787 1.276c.232.144.58.484 1.258 1.159l1.059-1.063ZM4.568 9.49a.747.747 0 0 1-.559.26l.017 1.5c.67-.008 1.271-.31 1.677-.78l-1.135-.98Zm-.559.26a.91.91 0 0 1-.009 0v1.5h.026l-.017-1.5Zm.866 2.558c-.05-.46-.088-.822-.109-1.116a3.204 3.204 0 0 1-.005-.592l-1.487-.2a4.556 4.556 0 0 0-.004.898c.023.328.065.72.114 1.17l1.491-.16ZM13.25 5c0 .485-.276.907-.683 1.115l.681 1.336A2.75 2.75 0 0 0 14.75 5h-1.5Zm-.683 1.115c-.17.086-.361.135-.567.135v1.5c.448 0 .873-.108 1.248-.3l-.681-1.335Zm1.538 1.245c-.206-.37-.391-.703-.561-.975l-1.272.795c.146.234.31.53.523.91l1.31-.73ZM12 6.25c-.206 0-.398-.05-.567-.135l-.681 1.336c.375.191.8.299 1.248.299v-1.5Zm-.567-.135A1.25 1.25 0 0 1 10.75 5h-1.5a2.75 2.75 0 0 0 1.502 2.45l.681-1.335Zm-.228 1.976c.212-.382.377-.677.523-.91l-1.272-.796c-.17.272-.355.605-.561.975l1.31.73Z" fill="currentColor" /><path d="M5 17.5h14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.87 12.388-.745-.08.746.08Zm-.183 1.705.746.08-.746-.08Zm-15.374 0-.746.08.746-.08Zm-.184-1.705.746-.08-.746.08Zm4.631-1.454.655.365-.655-.365Zm1.79-3.209-.655-.365.655.365Zm2.9 0-.655.366.655-.366Zm1.79 3.209.655-.365-.655.365Zm.764 1.025-.303.687.303-.687Zm1.466-.714-.529-.531.53.531Zm-1.017.777-.102-.743.102.743Zm-9.924-.777L6 11.777l.53-.532Zm1.018.777.102-.743-.102.743Zm.45-.063.301.687-.302-.687Zm-2.285 8.194.5-.559-.5.56Zm12.576 0-.5-.559.5.56Zm.576-10.173.568-.49-.567.49Zm-5.956-3.197-.341-.668.34.668Zm-1.816 0 .341-.668-.34.668Zm8.033 5.525-.183 1.705 1.49.16.184-1.704-1.491-.16Zm-6.037 7.942h-2.176v1.5h2.176v-1.5Zm-8.03-6.237-.183-1.705-1.491.16.183 1.705 1.492-.16Zm4.357-2.714 1.79-3.208-1.31-.73-1.79 3.208 1.31.73Zm3.38-3.208 1.79 3.208 1.31-.73-1.79-3.209-1.31.73Zm1.79 3.208c.162.29.31.56.455.765.149.211.351.445.662.582l.604-1.373c.056.024.046.05-.039-.071a8.22 8.22 0 0 1-.372-.633l-1.31.73Zm2.356-.585c-.258.258-.412.41-.533.507-.115.093-.117.066-.057.058l.205 1.486c.336-.047.595-.216.796-.378.195-.158.412-.376.648-.61l-1.059-1.063Zm-1.24 1.932c.269.118.565.159.855.119l-.205-1.486a.083.083 0 0 1-.045-.006l-.605 1.373Zm-9.7-.87c.235.235.452.453.647.61.201.164.46.332.796.379l.205-1.486c.06.008.058.035-.057-.058a8.265 8.265 0 0 1-.533-.507L6 11.777Zm2.104-1.207a8.23 8.23 0 0 1-.373.633c-.084.12-.094.095-.038.07l.604 1.374c.31-.137.514-.37.662-.582.144-.206.293-.475.455-.765l-1.31-.73Zm-.661 2.196c.29.04.586-.001.854-.12l-.604-1.372a.083.083 0 0 1-.045.006l-.205 1.486Zm3.468 7.485c-1.438 0-2.445-.001-3.213-.1-.748-.095-1.17-.273-1.487-.556l-1 1.118c.63.564 1.39.81 2.296.926.886.113 2.006.112 3.404.112v-1.5Zm-7.345-6.077c.148 1.378.266 2.727.466 3.821.101.552.229 1.072.405 1.523.175.448.417.875.774 1.195l1-1.118c-.116-.104-.248-.294-.377-.623-.127-.326-.234-.741-.326-1.247-.188-1.022-.297-2.28-.45-3.711l-1.492.16Zm15.375-.16c-.154 1.431-.264 2.689-.45 3.71-.093.507-.2.922-.327 1.248-.129.329-.261.52-.377.623l1 1.118c.357-.32.599-.747.774-1.195.176-.451.304-.971.405-1.523.2-1.094.318-2.443.466-3.82l-1.491-.161Zm-5.854 7.737c1.398 0 2.518.001 3.404-.112.907-.116 1.666-.362 2.296-.926l-1-1.118c-.317.283-.739.46-1.487.556-.768.099-1.775.1-3.213.1v1.5ZM10.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 5h1.5ZM12 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 2.25v1.5ZM20.75 9a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.25 9h-1.5Zm-1.5 0a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 17.75 9h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 20 6.75v1.5ZM4 9.75A.75.75 0 0 1 3.25 9h-1.5A2.25 2.25 0 0 0 4 11.25v-1.5ZM3.25 9A.75.75 0 0 1 4 8.25v-1.5A2.25 2.25 0 0 0 1.75 9h1.5ZM4 8.25a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 4 6.75v1.5Zm16 1.5a.9.9 0 0 1-.009 0l-.017 1.5H20v-1.5Zm.616 2.719c.049-.45.091-.843.114-1.171a4.55 4.55 0 0 0-.004-.898l-1.487.2c.015.11.016.29-.005.592-.02.294-.06.657-.11 1.116l1.492.16Zm-.625-2.719a.747.747 0 0 1-.559-.26l-1.135.98c.406.47 1.006.772 1.677.78l.017-1.5Zm-.559-.26A.744.744 0 0 1 19.25 9h-1.5c0 .561.207 1.076.547 1.47l1.135-.98ZM18 11.777c.677-.675 1.026-1.015 1.258-1.159l-.787-1.276c-.42.26-.924.768-1.53 1.372L18 11.777ZM4.75 9a.744.744 0 0 1-.182.49l1.135.98c.34-.394.547-.909.547-1.47h-1.5Zm2.309 1.714c-.606-.604-1.11-1.113-1.53-1.372l-.787 1.276c.232.144.58.484 1.258 1.159l1.059-1.063ZM4.568 9.49a.747.747 0 0 1-.559.26l.017 1.5c.67-.008 1.271-.31 1.677-.78l-1.135-.98Zm-.559.26a.91.91 0 0 1-.009 0v1.5h.026l-.017-1.5Zm.866 2.558c-.05-.46-.088-.822-.109-1.116a3.204 3.204 0 0 1-.005-.592l-1.487-.2a4.556 4.556 0 0 0-.004.898c.023.328.065.72.114 1.17l1.491-.16ZM13.25 5c0 .485-.276.907-.683 1.115l.681 1.336A2.75 2.75 0 0 0 14.75 5h-1.5Zm-.683 1.115c-.17.086-.361.135-.567.135v1.5c.448 0 .873-.108 1.248-.3l-.681-1.335Zm1.538 1.245c-.206-.37-.391-.703-.561-.975l-1.272.795c.146.234.31.53.523.91l1.31-.73ZM12 6.25c-.206 0-.398-.05-.567-.135l-.681 1.336c.375.191.8.299 1.248.299v-1.5Zm-.567-.135A1.25 1.25 0 0 1 10.75 5h-1.5a2.75 2.75 0 0 0 1.502 2.45l.681-1.335Zm-.228 1.976c.212-.382.377-.677.523-.91l-1.272-.796c-.17.272-.355.605-.561.975l1.31.73Z" fill="currentColor" /><path opacity={0.5} d="M5 17.5h14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.87 12.388-.745-.08.746.08Zm-.183 1.705.746.08-.746-.08Zm-15.374 0-.746.08.746-.08Zm-.184-1.705.746-.08-.746.08Zm4.631-1.454.655.365-.655-.365Zm1.79-3.209-.655-.365.655.365Zm2.9 0-.655.366.655-.366Zm1.79 3.209.655-.365-.655.365Zm.764 1.025-.303.687.303-.687Zm1.466-.714-.529-.531.53.531Zm-1.017.777-.102-.743.102.743Zm-9.924-.777L6 11.777l.53-.532Zm1.018.777.102-.743-.102.743Zm.45-.063.301.687-.302-.687Zm-2.285 8.194.5-.559-.5.56Zm12.576 0-.5-.559.5.56Zm.576-10.173.568-.49-.567.49Zm-5.956-3.197-.341-.668.34.668Zm-1.816 0 .341-.668-.34.668Zm8.033 5.525-.183 1.705 1.49.16.184-1.704-1.491-.16Zm-6.037 7.942h-2.176v1.5h2.176v-1.5Zm-8.03-6.237-.183-1.705-1.491.16.183 1.705 1.492-.16Zm4.357-2.714 1.79-3.208-1.31-.73-1.79 3.208 1.31.73Zm3.38-3.208 1.79 3.208 1.31-.73-1.79-3.209-1.31.73Zm1.79 3.208c.162.29.31.56.455.765.149.211.351.445.662.582l.604-1.373c.056.024.046.05-.039-.071a8.22 8.22 0 0 1-.372-.633l-1.31.73Zm2.356-.585c-.258.258-.412.41-.533.507-.115.093-.117.066-.057.058l.205 1.486c.336-.047.595-.216.796-.378.195-.158.412-.376.648-.61l-1.059-1.063Zm-1.24 1.932c.269.118.565.159.855.119l-.205-1.486a.083.083 0 0 1-.045-.006l-.605 1.373Zm-9.7-.87c.235.235.452.453.647.61.201.164.46.332.796.379l.205-1.486c.06.008.058.035-.057-.058a8.265 8.265 0 0 1-.533-.507L6 11.777Zm2.104-1.207a8.23 8.23 0 0 1-.373.633c-.084.12-.094.095-.038.07l.604 1.374c.31-.137.514-.37.662-.582.144-.206.293-.475.455-.765l-1.31-.73Zm-.661 2.196c.29.04.586-.001.854-.12l-.604-1.372a.083.083 0 0 1-.045.006l-.205 1.486Zm3.468 7.485c-1.438 0-2.445-.001-3.213-.1-.748-.095-1.17-.273-1.487-.556l-1 1.118c.63.564 1.39.81 2.296.926.886.113 2.006.112 3.404.112v-1.5Zm-7.345-6.077c.148 1.378.266 2.727.466 3.821.101.552.229 1.072.405 1.523.175.448.417.875.774 1.195l1-1.118c-.116-.104-.248-.294-.377-.623-.127-.326-.234-.741-.326-1.247-.188-1.022-.297-2.28-.45-3.711l-1.492.16Zm15.375-.16c-.154 1.431-.264 2.689-.45 3.71-.093.507-.2.922-.327 1.248-.129.329-.261.52-.377.623l1 1.118c.357-.32.599-.747.774-1.195.176-.451.304-.971.405-1.523.2-1.094.318-2.443.466-3.82l-1.491-.161Zm-5.854 7.737c1.398 0 2.518.001 3.404-.112.907-.116 1.666-.362 2.296-.926l-1-1.118c-.317.283-.739.46-1.487.556-.768.099-1.775.1-3.213.1v1.5ZM10.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 5h1.5ZM12 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 2.25v1.5ZM20.75 9a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.25 9h-1.5Zm-1.5 0a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 17.75 9h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 20 6.75v1.5ZM4 9.75A.75.75 0 0 1 3.25 9h-1.5A2.25 2.25 0 0 0 4 11.25v-1.5ZM3.25 9A.75.75 0 0 1 4 8.25v-1.5A2.25 2.25 0 0 0 1.75 9h1.5ZM4 8.25a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 4 6.75v1.5Zm16 1.5a.9.9 0 0 1-.009 0l-.017 1.5H20v-1.5Zm.616 2.719c.049-.45.091-.843.114-1.171a4.55 4.55 0 0 0-.004-.898l-1.487.2c.015.11.016.29-.005.592-.02.294-.06.657-.11 1.116l1.492.16Zm-.625-2.719a.747.747 0 0 1-.559-.26l-1.135.98c.406.47 1.006.772 1.677.78l.017-1.5Zm-.559-.26A.744.744 0 0 1 19.25 9h-1.5c0 .561.207 1.076.547 1.47l1.135-.98ZM18 11.777c.677-.675 1.026-1.015 1.258-1.159l-.787-1.276c-.42.26-.924.768-1.53 1.372L18 11.777ZM4.75 9a.744.744 0 0 1-.182.49l1.135.98c.34-.394.547-.909.547-1.47h-1.5Zm2.309 1.714c-.606-.604-1.11-1.113-1.53-1.372l-.787 1.276c.232.144.58.484 1.258 1.159l1.059-1.063ZM4.568 9.49a.747.747 0 0 1-.559.26l.017 1.5c.67-.008 1.271-.31 1.677-.78l-1.135-.98Zm-.559.26a.91.91 0 0 1-.009 0v1.5h.026l-.017-1.5Zm.866 2.558c-.05-.46-.088-.822-.109-1.116a3.204 3.204 0 0 1-.005-.592l-1.487-.2a4.556 4.556 0 0 0-.004.898c.023.328.065.72.114 1.17l1.491-.16ZM13.25 5c0 .485-.276.907-.683 1.115l.681 1.336A2.75 2.75 0 0 0 14.75 5h-1.5Zm-.683 1.115c-.17.086-.361.135-.567.135v1.5c.448 0 .873-.108 1.248-.3l-.681-1.335Zm1.538 1.245c-.206-.37-.391-.703-.561-.975l-1.272.795c.146.234.31.53.523.91l1.31-.73ZM12 6.25c-.206 0-.398-.05-.567-.135l-.681 1.336c.375.191.8.299 1.248.299v-1.5Zm-.567-.135A1.25 1.25 0 0 1 10.75 5h-1.5a2.75 2.75 0 0 0 1.502 2.45l.681-1.335Zm-.228 1.976c.212-.382.377-.677.523-.91l-1.272-.796c-.17.272-.355.605-.561.975l1.31.73Z" fill="currentColor" /><path d="M5 17.5h14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.25a2.75 2.75 0 0 0-1.898 4.74l-.2.356-1.797 3.223a8.23 8.23 0 0 1-.373.633.84.84 0 0 1-.06.077.854.854 0 0 1-.08-.058 8.265 8.265 0 0 1-.533-.507l-.08-.079a24.07 24.07 0 0 0-.872-.844 2.25 2.25 0 1 0-2.848 1.334l.01.173c.024.325.066.714.113 1.158l.185 1.717.087.83c.112 1.083.22 2.118.38 2.991.1.552.228 1.072.404 1.523.175.448.417.875.774 1.195.63.564 1.39.81 2.296.926.875.112 1.978.112 3.352.112h2.28c1.374 0 2.477 0 3.352-.112.907-.116 1.666-.362 2.296-.926.357-.32.599-.747.774-1.195.176-.451.304-.971.405-1.523.16-.873.267-1.908.379-2.99l.087-.83.185-1.717c.047-.445.09-.834.112-1.159l.011-.173a2.25 2.25 0 1 0-2.848-1.334c-.264.237-.554.526-.873.844l-.079.079c-.258.258-.412.41-.533.507a.853.853 0 0 1-.08.058.852.852 0 0 1-.06-.077 8.22 8.22 0 0 1-.373-.633l-1.797-3.223-.2-.356A2.75 2.75 0 0 0 12 2.25ZM10.75 5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm.455 3.09c.08-.145.155-.278.224-.4a2.756 2.756 0 0 0 1.142 0c.07.122.143.255.224.4l1.807 3.24c.155.278.298.535.438.734.149.211.351.445.662.582.268.118.564.159.854.119.336-.047.595-.216.796-.378.188-.153.397-.361.624-.586l.024-.024c.375-.374.65-.645.86-.837.12.07.246.13.379.178l-.005.074c-.02.294-.06.657-.11 1.116l-.182 1.705-.092.87c-.07.67-.134 1.295-.209 1.867H5.359a71.753 71.753 0 0 1-.21-1.868c-.028-.282-.059-.572-.09-.87l-.184-1.704a33.475 33.475 0 0 1-.114-1.19c.133-.048.26-.108.38-.178.21.192.484.463.86.837l.023.024c.227.225.436.433.624.586.201.162.46.331.796.378.29.04.586-.001.854-.12.31-.136.514-.37.662-.581.14-.199.283-.456.438-.735l1.807-3.238ZM5.618 18.25c.065.276.137.516.217.72.13.33.261.52.377.624.317.283.739.46 1.487.556.768.099 1.775.1 3.213.1h2.176c1.438 0 2.445-.001 3.213-.1.748-.095 1.17-.273 1.487-.556.116-.104.248-.294.377-.623.08-.205.152-.445.217-.721H5.618ZM3.25 9a.75.75 0 1 1 .759.75H4A.75.75 0 0 1 3.25 9Zm16 0a.75.75 0 1 1 .75.75h-.009A.747.747 0 0 1 19.25 9Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.687 14.093.184-1.705c.097-.91.162-1.51.111-1.888H20a1.5 1.5 0 1 0-1.136-.52c-.326.201-.752.626-1.393 1.265-.495.493-.742.739-1.018.777a.833.833 0 0 1-.45-.063c-.254-.112-.424-.416-.763-1.025l-1.79-3.209c-.209-.375-.384-.69-.542-.942a2 2 0 1 0-1.816 0c-.158.253-.333.567-.543.942L8.76 10.934c-.34.609-.51.913-.764 1.025a.833.833 0 0 1-.45.063c-.275-.038-.522-.284-1.017-.777-.641-.639-1.067-1.064-1.393-1.265A1.5 1.5 0 1 0 4 10.5h.018c-.051.378.014.979.111 1.888l.184 1.705c.102.946.186 1.847.29 2.657h14.794c.104-.81.188-1.71.29-2.657ZM10.912 21h2.176c2.836 0 4.254 0 5.2-.847.413-.37.674-1.036.863-1.903H4.849c.189.867.45 1.534.863 1.903.946.847 2.364.847 5.2.847Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="m19.687 14.093.184-1.704c.097-.91.162-1.51.111-1.889a1.497 1.497 0 0 1-1.117-.52c-.327.201-.753.626-1.394 1.265-.495.493-.742.739-1.018.777a.832.832 0 0 1-.45-.063c-.254-.112-.424-.416-.763-1.025l-1.79-3.209c-.209-.375-.384-.69-.542-.942-.273.139-.581.217-.908.217-.327 0-.635-.078-.908-.217-.158.253-.333.567-.543.942L8.76 10.934c-.34.609-.51.913-.764 1.025a.832.832 0 0 1-.45.063c-.275-.038-.522-.284-1.017-.777-.641-.639-1.067-1.064-1.393-1.265a1.497 1.497 0 0 1-1.118.52c-.051.378.014.979.111 1.889l.184 1.704.089.85c.252 2.435.46 4.45 1.31 5.21.946.847 2.364.847 5.2.847h2.176c2.836 0 4.254 0 5.2-.847.85-.76 1.058-2.775 1.31-5.21.029-.278.058-.562.09-.85Z" fill="currentColor" /><path d="M20 10.5a1.5 1.5 0 1 0-.018 0H20ZM12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2.5 9A1.5 1.5 0 0 0 4 10.5h.018A1.497 1.497 0 0 0 5.5 9a1.5 1.5 0 1 0-3 0ZM4.849 18.25a17.79 17.79 0 0 1-.246-1.5h14.794c-.07.545-.148 1.05-.246 1.5H4.849Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Crown