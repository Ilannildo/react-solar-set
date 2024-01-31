import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Widget6 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.5 6.5a4 4 0 0 0 4 4h2.667c.31 0 .465 0 .592-.034a1 1 0 0 0 .707-.707c.034-.127.034-.282.034-.592V6.5a4 4 0 0 0-4-4M17.5 21.5a4 4 0 0 1-4-4v-2.667c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034H17.5a4 4 0 0 1 4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.5 17.5a4 4 0 0 1 4-4h2.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.4a4 4 0 0 1-8 0ZM13.5 6.5a4 4 0 1 1 4 4h-2.857c-.133 0-.2 0-.255-.006a1 1 0 0 1-.882-.882c-.006-.056-.006-.122-.006-.255V6.5Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2.5 6.5a4 4 0 1 1 8 0v2.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H6.5a4 4 0 0 1-4-4ZM13.5 14.833c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034H17.5a4 4 0 1 1-4 4v-2.667Z" stroke="currentColor" strokeWidth={1.5} /><path d="M2.5 17.5a4 4 0 0 1 4-4h2.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.4a4 4 0 0 1-8 0ZM13.5 6.5a4 4 0 1 1 4 4h-2.857c-.133 0-.2 0-.255-.006a1 1 0 0 1-.882-.882c-.006-.056-.006-.122-.006-.255V6.5Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.5 6.5a4 4 0 1 1 8 0v2.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H6.5a4 4 0 0 1-4-4ZM13.5 14.833c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034H17.5a4 4 0 1 1-4 4v-2.667ZM2.5 17.5a4 4 0 0 1 4-4h2.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.4a4 4 0 0 1-8 0ZM13.5 6.5a4 4 0 1 1 4 4h-2.857c-.133 0-.2 0-.255-.006a1 1 0 0 1-.882-.882c-.006-.056-.006-.122-.006-.255V6.5Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.75 6.5a4.75 4.75 0 0 1 9.5 0v2.731c0 .242.001.495-.06.722a1.75 1.75 0 0 1-1.237 1.237c-.227.061-.48.06-.722.06H6.5A4.75 4.75 0 0 1 1.75 6.5ZM6.5 3.25a3.25 3.25 0 1 0 0 6.5h2.667c.161 0 .258 0 .33-.003a.66.66 0 0 0 .07-.006.25.25 0 0 0 .174-.174.66.66 0 0 0 .006-.07 8.23 8.23 0 0 0 .003-.33V6.5A3.25 3.25 0 0 0 6.5 3.25ZM14.77 12.75h2.73a4.75 4.75 0 1 1-4.75 4.75v-2.731c0-.242-.001-.495.06-.722a1.75 1.75 0 0 1 1.237-1.237c.227-.061.48-.06.722-.06Zm-.337 1.51a.25.25 0 0 0-.174.173.662.662 0 0 0-.005.07 8.215 8.215 0 0 0-.004.33V17.5a3.25 3.25 0 1 0 3.25-3.25h-2.667c-.162 0-.258 0-.33.004a.662.662 0 0 0-.07.005ZM9.496 14.261a8.374 8.374 0 0 0-.596-.011H6.5a3.25 3.25 0 1 0 3.25 3.25v-2.4c0-.292 0-.467-.011-.596a.626.626 0 0 0-.018-.12.25.25 0 0 0-.104-.105.638.638 0 0 0-.121-.018Zm.123.019h-.001.001Zm.101.1v.002-.001Zm-.102-1.614c.213.018.446.057.676.175.33.167.598.435.765.764.118.23.158.464.175.677.016.198.016.434.016.692V17.5a4.75 4.75 0 1 1-4.75-4.75h2.426c.258 0 .494 0 .692.016ZM12.75 6.5a4.75 4.75 0 1 1 4.75 4.75H14.615c-.104 0-.212 0-.31-.011a1.75 1.75 0 0 1-1.544-1.543 2.826 2.826 0 0 1-.011-.311V6.5Zm4.75-3.25a3.25 3.25 0 0 0-3.25 3.25v2.999l.002.03a.25.25 0 0 0 .25.22l.14.001H17.5a3.25 3.25 0 0 0 0-6.5Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 6.5a4.5 4.5 0 0 1 9 0v3c0 .349 0 .523-.038.666a1.125 1.125 0 0 1-.796.796C10.023 11 9.85 11 9.5 11h-3A4.5 4.5 0 0 1 2 6.5ZM13 14.5c0-.349 0-.523.038-.666.104-.388.408-.692.796-.796.143-.038.317-.038.666-.038h3a4.5 4.5 0 1 1-4.5 4.5v-3ZM2 17.5A4.5 4.5 0 0 1 6.5 13h2.7c.63 0 .945 0 1.186.123.211.107.384.28.491.491.123.24.123.556.123 1.186v2.7a4.5 4.5 0 1 1-9 0ZM13 6.5a4.5 4.5 0 1 1 4.5 4.5h-3.214c-.15 0-.224 0-.287-.007a1.125 1.125 0 0 1-.992-.992C13 9.938 13 9.864 13 9.714V6.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 17.5A4.5 4.5 0 0 1 6.5 13h2.7c.63 0 .945 0 1.186.123.211.107.384.28.491.491.123.24.123.556.123 1.186v2.7a4.5 4.5 0 1 1-9 0ZM13 6.5a4.5 4.5 0 1 1 4.5 4.5h-3.214c-.15 0-.224 0-.287-.007a1.125 1.125 0 0 1-.992-.992C13 9.938 13 9.864 13 9.714V6.5Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M2 6.5a4.5 4.5 0 0 1 9 0v3c0 .349 0 .523-.038.666a1.125 1.125 0 0 1-.796.796C10.023 11 9.85 11 9.5 11h-3A4.5 4.5 0 0 1 2 6.5ZM13 14.5c0-.349 0-.523.038-.666.104-.388.408-.692.796-.796.143-.038.317-.038.666-.038h3a4.5 4.5 0 1 1-4.5 4.5v-3Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Widget6