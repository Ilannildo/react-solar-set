import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Ticket = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="m14.008 19.003-.75-.002.75.002ZM14.014 17l.75.002V17h-.75ZM3.15 18.828l-.53.531.53-.53Zm0-13.656-.53-.531.53.53Zm-.197 5.082-.366.655.366-.655Zm-.942-1.265-.75-.031.75.031Zm.942 4.757-.366-.655.366.655Zm-.942 1.264.749-.031-.75.032Zm19.036-4.756.366.655-.366-.655Zm.942-1.265.75-.031-.75.031ZM20.85 5.172l.53-.531-.53.53Zm.197 8.574-.366.655.366-.655Zm.942 1.264.75.032-.75-.031Zm-1.139 3.818.53.531-.53-.53Zm1.094-4.496.654-.366-.654.366Zm0-4.664.654.366-.654-.366ZM2.056 14.332l-.654-.366.654.366Zm0-4.664.655-.366-.655.366ZM14.014 7h.75v-.002l-.75.002Zm-.008-2.501-.75.002.75-.002Zm2.522-.48.02-.75-.02.75Zm.506 15.945.031.75-.031-.75Zm-3.174-.11-.53-.531.53.531Zm.898-.849.006-2.003-1.5-.004L13.258 19l1.5.004Zm.258-2.255c.141 0 .253.114.253.25h1.5c0-.968-.787-1.75-1.753-1.75v1.5Zm0-1.5c-.966 0-1.752.782-1.752 1.75h1.5c0-.136.111-.25.252-.25v-1.5ZM9.995 4.75h3.51v-1.5h-3.51v1.5Zm3.013 14.5H9.995v1.5h3.013v-1.5Zm-3.013 0c-1.911 0-3.27-.002-4.3-.14-1.01-.135-1.591-.389-2.016-.813L2.62 19.36c.75.748 1.702 1.08 2.876 1.238 1.154.155 2.63.153 4.5.153v-1.5Zm0-16c-1.87 0-3.346-.002-4.5.153-1.174.158-2.125.49-2.875 1.238l1.06 1.062c.424-.424 1.006-.678 2.015-.813 1.03-.138 2.389-.14 4.3-.14v-1.5Zm-7.408 7.659c.386.215.643.624.643 1.091h1.5A2.749 2.749 0 0 0 3.32 9.599l-.732 1.31ZM2.76 9.02c.078-1.856.331-2.732.92-3.318L2.62 4.64C1.59 5.668 1.34 7.08 1.26 8.958l1.499.063ZM3.23 12c0 .467-.257.876-.643 1.091l.732 1.31A2.749 2.749 0 0 0 4.73 12h-1.5Zm-1.969 3.042c.08 1.876.33 3.29 1.359 4.317l1.06-1.062c-.589-.586-.842-1.462-.92-3.318l-1.499.063ZM20.77 12c0-.467.257-.876.643-1.091l-.732-1.31A2.749 2.749 0 0 0 19.27 12h1.5Zm1.969-3.042c-.08-1.876-.33-3.29-1.359-4.317l-1.06 1.062c.588.586.842 1.462.92 3.318l1.499-.063Zm-1.326 4.133A1.249 1.249 0 0 1 20.77 12h-1.5c0 1.034.571 1.932 1.411 2.401l.732-1.31Zm-.173 1.888c-.078 1.856-.331 2.732-.92 3.318l1.06 1.062c1.03-1.027 1.28-2.44 1.359-4.317l-1.499-.063Zm-.559-.578c.284.159.47.263.595.342.062.039.09.06.098.066.014.012-.037-.024-.085-.11l1.31-.733a1.12 1.12 0 0 0-.269-.312 2.432 2.432 0 0 0-.254-.18c-.167-.106-.396-.233-.663-.383l-.732 1.31Zm2.058.641c.007-.171.015-.348.009-.496a1.28 1.28 0 0 0-.15-.58l-1.309.732c-.05-.09-.043-.152-.04-.086.001.028.002.07 0 .134l-.009.233 1.499.063Zm-1.326-4.133c.267-.15.496-.277.663-.383.085-.054.174-.114.254-.18a1.12 1.12 0 0 0 .268-.312l-1.309-.732c.048-.087.099-.123.084-.111a1.048 1.048 0 0 1-.097.066c-.125.08-.31.183-.595.342l.732 1.31ZM21.24 9.02l.009.233c.002.064.001.106 0 .134-.003.066-.01.004.04-.086l1.31.732c.119-.213.142-.43.149-.58.006-.148-.002-.325-.01-.496l-1.498.063Zm-18.653 4.07c-.267.15-.496.277-.663.383a2.44 2.44 0 0 0-.254.18 1.12 1.12 0 0 0-.268.312l1.309.732c-.048.087-.099.123-.085.111.009-.007.036-.027.098-.066.125-.08.31-.183.595-.342l-.732-1.31Zm.173 1.888a15.117 15.117 0 0 1-.009-.233 2.03 2.03 0 0 1 0-.134c.003-.066.01-.004-.04.086l-1.31-.732a1.28 1.28 0 0 0-.149.58c-.006.148.002.325.01.496l1.498-.063Zm.559-5.38c-.284-.159-.47-.263-.595-.342a1.069 1.069 0 0 1-.098-.066c-.014-.012.037.024.085.11l-1.31.733c.084.148.195.25.269.312.08.066.169.126.254.18.167.106.396.233.663.383l.732-1.31ZM1.26 8.958c-.007.171-.015.348-.009.496.007.15.03.367.15.58l1.309-.732c.05.09.043.152.04.086a2.029 2.029 0 0 1 0-.134l.009-.233-1.499-.063Zm13.503-1.96-.008-2.502-1.5.005.008 2.501 1.5-.004Zm.252.252a.251.251 0 0 1-.252-.25h-1.5c0 .968.786 1.75 1.752 1.75v-1.5ZM15.27 7c0 .136-.112.25-.253.25v1.5c.966 0 1.753-.782 1.753-1.75h-1.5Zm0-2.484V7h1.5V4.516h-1.5Zm1.24.253c2.188.056 3.169.292 3.812.934l1.06-1.062c-1.113-1.11-2.687-1.316-4.834-1.372l-.039 1.5Zm.26-.253c0 .14-.116.256-.26.253l.038-1.5a1.247 1.247 0 0 0-1.278 1.247h1.5Zm-3.264.234a.25.25 0 0 1-.249-.25l1.5-.004a1.25 1.25 0 0 0-1.25-1.246v1.5Zm3.56 15.963c1.875-.079 3.288-.329 4.315-1.354l-1.06-1.062c-.586.586-1.464.84-3.318.918l.063 1.498ZM15.27 17v1.977h1.5V17h-1.5Zm-2.011 2c0 .121 0 .214-.003.293-.002.08-.006.126-.01.155-.004.028-.005.019.006-.01a.364.364 0 0 1 .079-.115l1.059 1.062a1.24 1.24 0 0 0 .342-.733c.027-.197.026-.433.027-.647l-1.5-.004Zm-.25 1.75c.214 0 .45.002.647-.025.219-.03.498-.105.734-.34l-1.06-1.062a.365.365 0 0 1 .117-.078c.028-.012.038-.01.01-.007a1.522 1.522 0 0 1-.156.01c-.08.002-.172.002-.292.002v1.5Zm3.994-1.535c-.12.005-.213.009-.292.01-.079.001-.125 0-.152-.003-.027-.003-.015-.005.015.007.037.014.08.04.119.076l-1.038 1.083c.244.234.529.304.757.326.202.02.44.009.654 0l-.063-1.5Zm-1.733-.238c0 .218-.002.46.026.663.031.226.112.511.359.748l1.038-1.083c.04.038.066.081.082.117.012.03.01.04.007.012a1.523 1.523 0 0 1-.01-.159c-.002-.08-.002-.175-.002-.298h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M14 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="m14.008 19.003-.75-.002.75.002ZM14.014 17l.75.002V17h-.75ZM3.15 18.828l-.53.531.53-.53Zm0-13.656-.53-.531.53.53Zm-.197 5.082-.366.655.366-.655Zm-.942-1.265-.75-.031.75.031Zm.942 4.757-.366-.655.366.655Zm-.942 1.264.749-.031-.75.032Zm19.036-4.756.366.655-.366-.655Zm.942-1.265.75-.031-.75.031ZM20.85 5.172l.53-.531-.53.53Zm.197 8.574-.366.655.366-.655Zm.942 1.264.75.032-.75-.031Zm-1.139 3.818.53.531-.53-.53Zm1.094-4.496.654-.366-.654.366Zm0-4.664.654.366-.654-.366ZM2.056 14.332l-.654-.366.654.366Zm0-4.664.655-.366-.655.366ZM14.014 7h.75v-.002l-.75.002Zm-.008-2.501-.75.002.75-.002Zm2.522-.48.02-.75-.02.75Zm.506 15.945.031.75-.031-.75Zm-3.174-.11-.53-.531.53.531Zm.898-.849.006-2.003-1.5-.004L13.258 19l1.5.004Zm.258-2.255c.141 0 .253.114.253.25h1.5c0-.968-.787-1.75-1.753-1.75v1.5Zm0-1.5c-.966 0-1.752.782-1.752 1.75h1.5c0-.136.111-.25.252-.25v-1.5ZM9.995 4.75h3.51v-1.5h-3.51v1.5Zm3.013 14.5H9.995v1.5h3.013v-1.5Zm-3.013 0c-1.911 0-3.27-.002-4.3-.14-1.01-.135-1.591-.389-2.016-.813L2.62 19.36c.75.748 1.702 1.08 2.876 1.238 1.154.155 2.63.153 4.5.153v-1.5Zm0-16c-1.87 0-3.346-.002-4.5.153-1.174.158-2.125.49-2.875 1.238l1.06 1.062c.424-.424 1.006-.678 2.015-.813 1.03-.138 2.389-.14 4.3-.14v-1.5Zm-7.408 7.659c.386.215.643.624.643 1.091h1.5A2.749 2.749 0 0 0 3.32 9.599l-.732 1.31ZM2.76 9.02c.078-1.856.331-2.732.92-3.318L2.62 4.64C1.59 5.668 1.34 7.08 1.26 8.958l1.499.063ZM3.23 12c0 .467-.257.876-.643 1.091l.732 1.31A2.749 2.749 0 0 0 4.73 12h-1.5Zm-1.969 3.042c.08 1.876.33 3.29 1.359 4.317l1.06-1.062c-.589-.586-.842-1.462-.92-3.318l-1.499.063ZM20.77 12c0-.467.257-.876.643-1.091l-.732-1.31A2.749 2.749 0 0 0 19.27 12h1.5Zm1.969-3.042c-.08-1.876-.33-3.29-1.359-4.317l-1.06 1.062c.588.586.842 1.462.92 3.318l1.499-.063Zm-1.326 4.133A1.249 1.249 0 0 1 20.77 12h-1.5c0 1.034.571 1.932 1.411 2.401l.732-1.31Zm-.173 1.888c-.078 1.856-.331 2.732-.92 3.318l1.06 1.062c1.03-1.027 1.28-2.44 1.359-4.317l-1.499-.063Zm-.559-.578c.284.159.47.263.595.342.062.039.09.06.098.066.014.012-.037-.024-.085-.11l1.31-.733a1.12 1.12 0 0 0-.269-.312 2.432 2.432 0 0 0-.254-.18c-.167-.106-.396-.233-.663-.383l-.732 1.31Zm2.058.641c.007-.171.015-.348.009-.496a1.28 1.28 0 0 0-.15-.58l-1.309.732c-.05-.09-.043-.152-.04-.086.001.028.002.07 0 .134l-.009.233 1.499.063Zm-1.326-4.133c.267-.15.496-.277.663-.383.085-.054.174-.114.254-.18a1.12 1.12 0 0 0 .268-.312l-1.309-.732c.048-.087.099-.123.084-.111a1.048 1.048 0 0 1-.097.066c-.125.08-.31.183-.595.342l.732 1.31ZM21.24 9.02l.009.233c.002.064.001.106 0 .134-.003.066-.01.004.04-.086l1.31.732c.119-.213.142-.43.149-.58.006-.148-.002-.325-.01-.496l-1.498.063Zm-18.653 4.07c-.267.15-.496.277-.663.383a2.44 2.44 0 0 0-.254.18 1.12 1.12 0 0 0-.268.312l1.309.732c-.048.087-.099.123-.085.111.009-.007.036-.027.098-.066.125-.08.31-.183.595-.342l-.732-1.31Zm.173 1.888a15.117 15.117 0 0 1-.009-.233 2.03 2.03 0 0 1 0-.134c.003-.066.01-.004-.04.086l-1.31-.732a1.28 1.28 0 0 0-.149.58c-.006.148.002.325.01.496l1.498-.063Zm.559-5.38c-.284-.159-.47-.263-.595-.342a1.069 1.069 0 0 1-.098-.066c-.014-.012.037.024.085.11l-1.31.733c.084.148.195.25.269.312.08.066.169.126.254.18.167.106.396.233.663.383l.732-1.31ZM1.26 8.958c-.007.171-.015.348-.009.496.007.15.03.367.15.58l1.309-.732c.05.09.043.152.04.086a2.029 2.029 0 0 1 0-.134l.009-.233-1.499-.063Zm13.503-1.96-.008-2.502-1.5.005.008 2.501 1.5-.004Zm.252.252a.251.251 0 0 1-.252-.25h-1.5c0 .968.786 1.75 1.752 1.75v-1.5ZM15.27 7c0 .136-.112.25-.253.25v1.5c.966 0 1.753-.782 1.753-1.75h-1.5Zm0-2.484V7h1.5V4.516h-1.5Zm1.24.253c2.188.056 3.169.292 3.812.934l1.06-1.062c-1.113-1.11-2.687-1.316-4.834-1.372l-.039 1.5Zm.26-.253c0 .14-.116.256-.26.253l.038-1.5a1.247 1.247 0 0 0-1.278 1.247h1.5Zm-3.264.234a.25.25 0 0 1-.249-.25l1.5-.004a1.25 1.25 0 0 0-1.25-1.246v1.5Zm3.56 15.963c1.875-.079 3.288-.329 4.315-1.354l-1.06-1.062c-.586.586-1.464.84-3.318.918l.063 1.498ZM15.27 17v1.977h1.5V17h-1.5Zm-2.011 2c0 .121 0 .214-.003.293-.002.08-.006.126-.01.155-.004.028-.005.019.006-.01a.364.364 0 0 1 .079-.115l1.059 1.062a1.24 1.24 0 0 0 .342-.733c.027-.197.026-.433.027-.647l-1.5-.004Zm-.25 1.75c.214 0 .45.002.647-.025.219-.03.498-.105.734-.34l-1.06-1.062a.365.365 0 0 1 .117-.078c.028-.012.038-.01.01-.007a1.522 1.522 0 0 1-.156.01c-.08.002-.172.002-.292.002v1.5Zm3.994-1.535c-.12.005-.213.009-.292.01-.079.001-.125 0-.152-.003-.027-.003-.015-.005.015.007.037.014.08.04.119.076l-1.038 1.083c.244.234.529.304.757.326.202.02.44.009.654 0l-.063-1.5Zm-1.733-.238c0 .218-.002.46.026.663.031.226.112.511.359.748l1.038-1.083c.04.038.066.081.082.117.012.03.01.04.007.012a1.523 1.523 0 0 1-.01-.159c-.002-.08-.002-.175-.002-.298h-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="m14.008 19.003-.75-.002.75.002ZM14.014 17l.75.002V17h-.75ZM3.15 18.828l-.53.531.53-.53Zm0-13.656-.53-.531.53.53Zm-.197 5.082-.366.655.366-.655Zm-.942-1.265-.75-.031.75.031Zm.942 4.757-.366-.655.366.655Zm-.942 1.264.749-.031-.75.032Zm19.036-4.756.366.655-.366-.655Zm.942-1.265.75-.031-.75.031ZM20.85 5.172l.53-.531-.53.53Zm.197 8.574-.366.655.366-.655Zm.942 1.264.75.032-.75-.031Zm-1.139 3.818.53.531-.53-.53Zm1.094-4.496.654-.366-.654.366Zm0-4.664.654.366-.654-.366ZM2.056 14.332l-.654-.366.654.366Zm0-4.664.655-.366-.655.366ZM14.014 7h.75v-.002l-.75.002Zm-.008-2.501-.75.002.75-.002Zm2.522-.48.02-.75-.02.75Zm.506 15.945.031.75-.031-.75Zm-3.174-.11-.53-.531.53.531Zm.898-.849.006-2.003-1.5-.004L13.258 19l1.5.004Zm.258-2.255c.141 0 .253.114.253.25h1.5c0-.968-.787-1.75-1.753-1.75v1.5Zm0-1.5c-.966 0-1.752.782-1.752 1.75h1.5c0-.136.111-.25.252-.25v-1.5ZM9.995 4.75h3.51v-1.5h-3.51v1.5Zm3.013 14.5H9.995v1.5h3.013v-1.5Zm-3.013 0c-1.911 0-3.27-.002-4.3-.14-1.01-.135-1.591-.389-2.016-.813L2.62 19.36c.75.748 1.702 1.08 2.876 1.238 1.154.155 2.63.153 4.5.153v-1.5Zm0-16c-1.87 0-3.346-.002-4.5.153-1.174.158-2.125.49-2.875 1.238l1.06 1.062c.424-.424 1.006-.678 2.015-.813 1.03-.138 2.389-.14 4.3-.14v-1.5Zm-7.408 7.659c.386.215.643.624.643 1.091h1.5A2.749 2.749 0 0 0 3.32 9.599l-.732 1.31ZM2.76 9.02c.078-1.856.331-2.732.92-3.318L2.62 4.64C1.59 5.668 1.34 7.08 1.26 8.958l1.499.063ZM3.23 12c0 .467-.257.876-.643 1.091l.732 1.31A2.749 2.749 0 0 0 4.73 12h-1.5Zm-1.969 3.042c.08 1.876.33 3.29 1.359 4.317l1.06-1.062c-.589-.586-.842-1.462-.92-3.318l-1.499.063ZM20.77 12c0-.467.257-.876.643-1.091l-.732-1.31A2.749 2.749 0 0 0 19.27 12h1.5Zm1.969-3.042c-.08-1.876-.33-3.29-1.359-4.317l-1.06 1.062c.588.586.842 1.462.92 3.318l1.499-.063Zm-1.326 4.133A1.249 1.249 0 0 1 20.77 12h-1.5c0 1.034.571 1.932 1.411 2.401l.732-1.31Zm-.173 1.888c-.078 1.856-.331 2.732-.92 3.318l1.06 1.062c1.03-1.027 1.28-2.44 1.359-4.317l-1.499-.063Zm-.559-.578c.284.159.47.263.595.342.062.039.09.06.098.066.014.012-.037-.024-.085-.11l1.31-.733a1.12 1.12 0 0 0-.269-.312 2.432 2.432 0 0 0-.254-.18c-.167-.106-.396-.233-.663-.383l-.732 1.31Zm2.058.641c.007-.171.015-.348.009-.496a1.28 1.28 0 0 0-.15-.58l-1.309.732c-.05-.09-.043-.152-.04-.086.001.028.002.07 0 .134l-.009.233 1.499.063Zm-1.326-4.133c.267-.15.496-.277.663-.383.085-.054.174-.114.254-.18a1.12 1.12 0 0 0 .268-.312l-1.309-.732c.048-.087.099-.123.084-.111a1.048 1.048 0 0 1-.097.066c-.125.08-.31.183-.595.342l.732 1.31ZM21.24 9.02l.009.233c.002.064.001.106 0 .134-.003.066-.01.004.04-.086l1.31.732c.119-.213.142-.43.149-.58.006-.148-.002-.325-.01-.496l-1.498.063Zm-18.653 4.07c-.267.15-.496.277-.663.383a2.44 2.44 0 0 0-.254.18 1.12 1.12 0 0 0-.268.312l1.309.732c-.048.087-.099.123-.085.111.009-.007.036-.027.098-.066.125-.08.31-.183.595-.342l-.732-1.31Zm.173 1.888a15.117 15.117 0 0 1-.009-.233 2.03 2.03 0 0 1 0-.134c.003-.066.01-.004-.04.086l-1.31-.732a1.28 1.28 0 0 0-.149.58c-.006.148.002.325.01.496l1.498-.063Zm.559-5.38c-.284-.159-.47-.263-.595-.342a1.069 1.069 0 0 1-.098-.066c-.014-.012.037.024.085.11l-1.31.733c.084.148.195.25.269.312.08.066.169.126.254.18.167.106.396.233.663.383l.732-1.31ZM1.26 8.958c-.007.171-.015.348-.009.496.007.15.03.367.15.58l1.309-.732c.05.09.043.152.04.086a2.029 2.029 0 0 1 0-.134l.009-.233-1.499-.063Zm13.503-1.96-.008-2.502-1.5.005.008 2.501 1.5-.004Zm.252.252a.251.251 0 0 1-.252-.25h-1.5c0 .968.786 1.75 1.752 1.75v-1.5ZM15.27 7c0 .136-.112.25-.253.25v1.5c.966 0 1.753-.782 1.753-1.75h-1.5Zm0-2.484V7h1.5V4.516h-1.5Zm1.24.253c2.188.056 3.169.292 3.812.934l1.06-1.062c-1.113-1.11-2.687-1.316-4.834-1.372l-.039 1.5Zm.26-.253c0 .14-.116.256-.26.253l.038-1.5a1.247 1.247 0 0 0-1.278 1.247h1.5Zm-3.264.234a.25.25 0 0 1-.249-.25l1.5-.004a1.25 1.25 0 0 0-1.25-1.246v1.5Zm3.56 15.963c1.875-.079 3.288-.329 4.315-1.354l-1.06-1.062c-.586.586-1.464.84-3.318.918l.063 1.498ZM15.27 17v1.977h1.5V17h-1.5Zm-2.011 2c0 .121 0 .214-.003.293-.002.08-.006.126-.01.155-.004.028-.005.019.006-.01a.364.364 0 0 1 .079-.115l1.059 1.062a1.24 1.24 0 0 0 .342-.733c.027-.197.026-.433.027-.647l-1.5-.004Zm-.25 1.75c.214 0 .45.002.647-.025.219-.03.498-.105.734-.34l-1.06-1.062a.365.365 0 0 1 .117-.078c.028-.012.038-.01.01-.007a1.522 1.522 0 0 1-.156.01c-.08.002-.172.002-.292.002v1.5Zm3.994-1.535c-.12.005-.213.009-.292.01-.079.001-.125 0-.152-.003-.027-.003-.015-.005.015.007.037.014.08.04.119.076l-1.038 1.083c.244.234.529.304.757.326.202.02.44.009.654 0l-.063-1.5Zm-1.733-.238c0 .218-.002.46.026.663.031.226.112.511.359.748l1.038-1.083c.04.038.066.081.082.117.012.03.01.04.007.012a1.523 1.523 0 0 1-.01-.159c-.002-.08-.002-.175-.002-.298h-1.5Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="m14.008 19.003-.75-.002.75.002ZM14.014 17l.75.002V17h-.75ZM3.15 18.828l-.53.531.53-.53Zm0-13.656-.53-.531.53.53Zm-.197 5.082-.366.655.366-.655Zm-.942-1.265-.75-.031.75.031Zm.942 4.757-.366-.655.366.655Zm-.942 1.264.749-.031-.75.032Zm19.036-4.756.366.655-.366-.655Zm.942-1.265.75-.031-.75.031ZM20.85 5.172l.53-.531-.53.53Zm.197 8.574-.366.655.366-.655Zm.942 1.264.75.032-.75-.031Zm-1.139 3.818.53.531-.53-.53Zm1.094-4.496.654-.366-.654.366Zm0-4.664.654.366-.654-.366ZM2.056 14.332l-.654-.366.654.366Zm0-4.664.655-.366-.655.366ZM14.014 7h.75v-.002l-.75.002Zm-.008-2.501-.75.002.75-.002Zm2.522-.48.02-.75-.02.75Zm.506 15.945.031.75-.031-.75Zm-3.174-.11-.53-.531.53.531Zm.898-.849.006-2.003-1.5-.004L13.258 19l1.5.004Zm.258-2.255c.141 0 .253.114.253.25h1.5c0-.968-.787-1.75-1.753-1.75v1.5Zm0-1.5c-.966 0-1.752.782-1.752 1.75h1.5c0-.136.111-.25.252-.25v-1.5ZM9.995 4.75h3.51v-1.5h-3.51v1.5Zm3.013 14.5H9.995v1.5h3.013v-1.5Zm-3.013 0c-1.911 0-3.27-.002-4.3-.14-1.01-.135-1.591-.389-2.016-.813L2.62 19.36c.75.748 1.702 1.08 2.876 1.238 1.154.155 2.63.153 4.5.153v-1.5Zm0-16c-1.87 0-3.346-.002-4.5.153-1.174.158-2.125.49-2.875 1.238l1.06 1.062c.424-.424 1.006-.678 2.015-.813 1.03-.138 2.389-.14 4.3-.14v-1.5Zm-7.408 7.659c.386.215.643.624.643 1.091h1.5A2.749 2.749 0 0 0 3.32 9.599l-.732 1.31ZM2.76 9.02c.078-1.856.331-2.732.92-3.318L2.62 4.64C1.59 5.668 1.34 7.08 1.26 8.958l1.499.063ZM3.23 12c0 .467-.257.876-.643 1.091l.732 1.31A2.749 2.749 0 0 0 4.73 12h-1.5Zm-1.969 3.042c.08 1.876.33 3.29 1.359 4.317l1.06-1.062c-.589-.586-.842-1.462-.92-3.318l-1.499.063ZM20.77 12c0-.467.257-.876.643-1.091l-.732-1.31A2.749 2.749 0 0 0 19.27 12h1.5Zm1.969-3.042c-.08-1.876-.33-3.29-1.359-4.317l-1.06 1.062c.588.586.842 1.462.92 3.318l1.499-.063Zm-1.326 4.133A1.249 1.249 0 0 1 20.77 12h-1.5c0 1.034.571 1.932 1.411 2.401l.732-1.31Zm-.173 1.888c-.078 1.856-.331 2.732-.92 3.318l1.06 1.062c1.03-1.027 1.28-2.44 1.359-4.317l-1.499-.063Zm-.559-.578c.284.159.47.263.595.342.062.039.09.06.098.066.014.012-.037-.024-.085-.11l1.31-.733a1.12 1.12 0 0 0-.269-.312 2.432 2.432 0 0 0-.254-.18c-.167-.106-.396-.233-.663-.383l-.732 1.31Zm2.058.641c.007-.171.015-.348.009-.496a1.28 1.28 0 0 0-.15-.58l-1.309.732c-.05-.09-.043-.152-.04-.086.001.028.002.07 0 .134l-.009.233 1.499.063Zm-1.326-4.133c.267-.15.496-.277.663-.383.085-.054.174-.114.254-.18a1.12 1.12 0 0 0 .268-.312l-1.309-.732c.048-.087.099-.123.084-.111a1.048 1.048 0 0 1-.097.066c-.125.08-.31.183-.595.342l.732 1.31ZM21.24 9.02l.009.233c.002.064.001.106 0 .134-.003.066-.01.004.04-.086l1.31.732c.119-.213.142-.43.149-.58.006-.148-.002-.325-.01-.496l-1.498.063Zm-18.653 4.07c-.267.15-.496.277-.663.383a2.44 2.44 0 0 0-.254.18 1.12 1.12 0 0 0-.268.312l1.309.732c-.048.087-.099.123-.085.111.009-.007.036-.027.098-.066.125-.08.31-.183.595-.342l-.732-1.31Zm.173 1.888a15.117 15.117 0 0 1-.009-.233 2.03 2.03 0 0 1 0-.134c.003-.066.01-.004-.04.086l-1.31-.732a1.28 1.28 0 0 0-.149.58c-.006.148.002.325.01.496l1.498-.063Zm.559-5.38c-.284-.159-.47-.263-.595-.342a1.069 1.069 0 0 1-.098-.066c-.014-.012.037.024.085.11l-1.31.733c.084.148.195.25.269.312.08.066.169.126.254.18.167.106.396.233.663.383l.732-1.31ZM1.26 8.958c-.007.171-.015.348-.009.496.007.15.03.367.15.58l1.309-.732c.05.09.043.152.04.086a2.029 2.029 0 0 1 0-.134l.009-.233-1.499-.063Zm13.503-1.96-.008-2.502-1.5.005.008 2.501 1.5-.004Zm.252.252a.251.251 0 0 1-.252-.25h-1.5c0 .968.786 1.75 1.752 1.75v-1.5ZM15.27 7c0 .136-.112.25-.253.25v1.5c.966 0 1.753-.782 1.753-1.75h-1.5Zm0-2.484V7h1.5V4.516h-1.5Zm1.24.253c2.188.056 3.169.292 3.812.934l1.06-1.062c-1.113-1.11-2.687-1.316-4.834-1.372l-.039 1.5Zm.26-.253c0 .14-.116.256-.26.253l.038-1.5a1.247 1.247 0 0 0-1.278 1.247h1.5Zm-3.264.234a.25.25 0 0 1-.249-.25l1.5-.004a1.25 1.25 0 0 0-1.25-1.246v1.5Zm3.56 15.963c1.875-.079 3.288-.329 4.315-1.354l-1.06-1.062c-.586.586-1.464.84-3.318.918l.063 1.498ZM15.27 17v1.977h1.5V17h-1.5Zm-2.011 2c0 .121 0 .214-.003.293-.002.08-.006.126-.01.155-.004.028-.005.019.006-.01a.364.364 0 0 1 .079-.115l1.059 1.062a1.24 1.24 0 0 0 .342-.733c.027-.197.026-.433.027-.647l-1.5-.004Zm-.25 1.75c.214 0 .45.002.647-.025.219-.03.498-.105.734-.34l-1.06-1.062a.365.365 0 0 1 .117-.078c.028-.012.038-.01.01-.007a1.522 1.522 0 0 1-.156.01c-.08.002-.172.002-.292.002v1.5Zm3.994-1.535c-.12.005-.213.009-.292.01-.079.001-.125 0-.152-.003-.027-.003-.015-.005.015.007.037.014.08.04.119.076l-1.038 1.083c.244.234.529.304.757.326.202.02.44.009.654 0l-.063-1.5Zm-1.733-.238c0 .218-.002.46.026.663.031.226.112.511.359.748l1.038-1.083c.04.038.066.081.082.117.012.03.01.04.007.012a1.523 1.523 0 0 1-.01-.159c-.002-.08-.002-.175-.002-.298h-1.5Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.008 19.003 14.014 17a1.001 1.001 0 0 1 2.005 0v1.977c0 .481 0 .722.154.87.155.147.39.137.863.117 1.863-.079 3.008-.33 3.814-1.136.81-.806 1.061-1.951 1.14-3.817.015-.37.023-.556-.046-.679-.07-.123-.345-.277-.897-.586a1.999 1.999 0 0 1 0-3.492c.552-.308.828-.463.897-.586.069-.123.061-.308.045-.679-.078-1.866-.33-3.01-1.139-3.817-.877-.876-2.155-1.097-4.322-1.153a.497.497 0 0 0-.51.497V7a1.001 1.001 0 0 1-2.005 0l-.007-2.501a.5.5 0 0 0-.5-.499H9.994c-3.78 0-5.67 0-6.845 1.172-.81.806-1.061 1.951-1.14 3.817-.015.37-.023.556.046.679.07.123.345.278.897.586a1.999 1.999 0 0 1 0 3.492c-.552.309-.828.463-.897.586-.069.123-.061.308-.045.678.078 1.867.33 3.012 1.139 3.818C4.324 20 6.214 20 9.995 20h3.01c.472 0 .707 0 .854-.146.147-.146.148-.38.149-.851ZM16.018 13v-2a1.001 1.001 0 0 0-2.005 0v2c0 .552.45 1 1.003 1 .554 0 1.003-.448 1.003-1Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m14.014 17-.006 2.003c-.001.47-.002.705-.149.851-.147.146-.382.146-.854.146h-3.01c-3.78 0-5.67 0-6.845-1.172-.81-.806-1.061-1.951-1.14-3.817-.015-.37-.023-.556.046-.679.07-.123.345-.277.897-.586a1.999 1.999 0 0 0 0-3.492c-.552-.308-.828-.463-.897-.586-.069-.123-.061-.308-.045-.679.078-1.866.33-3.01 1.139-3.817C4.324 4 6.214 4 9.995 4h3.51a.5.5 0 0 1 .501.499L14.014 7c0 .552.449 1 1.002 1v2c-.553 0-1.002.448-1.002 1v2c0 .552.449 1 1.002 1v2c-.553 0-1.002.448-1.002 1Z" fill="currentColor" /><path opacity={0.5} d="M15.017 16c.553 0 1.002.448 1.002 1v1.976c0 .482 0 .723.155.87.154.148.39.138.863.118 1.863-.079 3.007-.331 3.814-1.136.809-.806 1.06-1.952 1.139-3.818.015-.37.023-.555-.046-.678-.069-.124-.345-.278-.897-.586a1.999 1.999 0 0 1 0-3.492c.552-.309.828-.463.897-.586.07-.124.061-.309.046-.679-.079-1.866-.33-3.011-1.14-3.818-.877-.875-2.154-1.096-4.322-1.152a.497.497 0 0 0-.509.497V7c0 .552-.449 1-1.002 1v2c.553 0 1.002.447 1.002 1v2c0 .552-.449 1-1.002 1v2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Ticket