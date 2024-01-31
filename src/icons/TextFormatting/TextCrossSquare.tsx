import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const TextCrossSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.25 9.222a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 1 0 1.5 0h-1.5Zm4 .278a.75.75 0 0 0 1.5 0h-1.5Zm0 7.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2.5a.75.75 0 0 0-1.5 0h1.5Zm2.957-7.175-.557.502.557-.502ZM9.5 16.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-5h2v-1.5h-2v1.5Zm2 0h2v-1.5h-2v1.5Zm.75 1.75V7h-1.5v2.5h1.5Zm0 7.5v-2.5h-1.5V17h1.5ZM14 7.75c.495 0 .782.002.986.032.092.014.135.03.152.037.01.005.01.006.012.008l1.115-1.003c-.305-.339-.686-.47-1.057-.525-.34-.051-.76-.049-1.208-.049v1.5Zm2.75 1.472c0-.504.001-.95-.042-1.31-.045-.371-.149-.761-.443-1.088L15.15 7.827c.002.003.01.012.023.045.014.038.032.105.046.221.03.247.031.586.031 1.13h1.5ZM10 6.25c-.448 0-.868-.002-1.208.049-.371.055-.752.186-1.057.525L8.85 7.827c.002-.002.002-.003.012-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032v-1.5ZM8.75 9.222c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.034.02-.043.023-.046L7.735 6.824c-.294.327-.398.717-.443 1.089-.043.358-.042.805-.042 1.31h1.5Zm.75 8.528h5v-1.5h-5v1.5Zm-1.5-5h8v-1.5H8v1.5Z" fill="currentColor" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.25 9.222a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 1 0 1.5 0h-1.5Zm4 .278a.75.75 0 0 0 1.5 0h-1.5Zm0 7.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2.5a.75.75 0 0 0-1.5 0h1.5Zm2.957-7.175-.557.502.557-.502ZM9.5 16.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-5h2v-1.5h-2v1.5Zm2 0h2v-1.5h-2v1.5Zm.75 1.75V7h-1.5v2.5h1.5Zm0 7.5v-2.5h-1.5V17h1.5ZM14 7.75c.495 0 .782.002.986.032.092.014.135.03.152.037.01.005.01.006.012.008l1.115-1.003c-.305-.339-.686-.47-1.057-.525-.34-.051-.76-.049-1.208-.049v1.5Zm2.75 1.472c0-.504.001-.95-.042-1.31-.045-.371-.149-.761-.443-1.088L15.15 7.827c.002.003.01.012.023.045.014.038.032.105.046.221.03.247.031.586.031 1.13h1.5ZM10 6.25c-.448 0-.868-.002-1.208.049-.371.055-.752.186-1.057.525L8.85 7.827c.002-.002.002-.003.012-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032v-1.5ZM8.75 9.222c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.034.02-.043.023-.046L7.735 6.824c-.294.327-.398.717-.443 1.089-.043.358-.042.805-.042 1.31h1.5Zm.75 8.528h5v-1.5h-5v1.5Zm-1.5-5h8v-1.5H8v1.5Z" fill="currentColor" /><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.25 9.222a.75.75 0 0 0 1.5 0h-1.5Zm-8 0a.75.75 0 1 0 1.5 0h-1.5Zm4 .278a.75.75 0 0 0 1.5 0h-1.5Zm0 7.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2.5a.75.75 0 0 0-1.5 0h1.5Zm2.957-7.175-.557.502.557-.502ZM9.5 16.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-5h2v-1.5h-2v1.5Zm2 0h2v-1.5h-2v1.5Zm.75 1.75V7h-1.5v2.5h1.5Zm0 7.5v-2.5h-1.5V17h1.5ZM14 7.75c.495 0 .782.002.986.032.092.014.135.03.152.037.01.005.01.006.012.008l1.115-1.003c-.305-.339-.686-.47-1.057-.525-.34-.051-.76-.049-1.208-.049v1.5Zm2.75 1.472c0-.504.001-.95-.042-1.31-.045-.371-.149-.761-.443-1.088L15.15 7.827c.002.003.01.012.023.045.014.038.032.105.046.221.03.247.031.586.031 1.13h1.5ZM10 6.25c-.448 0-.868-.002-1.208.049-.371.055-.752.186-1.057.525L8.85 7.827c.002-.002.002-.003.012-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032v-1.5ZM8.75 9.222c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.034.02-.043.023-.046L7.735 6.824c-.294.327-.398.717-.443 1.089-.043.358-.042.805-.042 1.31h1.5Zm.75 8.528h5v-1.5h-5v1.5Zm-1.5-5h8v-1.5H8v1.5Z" fill="currentColor" /><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.952 6.25c-.43 0-.832 0-1.16.049-.371.055-.752.186-1.057.525-.294.327-.398.717-.443 1.089-.042.348-.042.78-.042 1.267v.042a.75.75 0 1 0 1.5 0c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.033.02-.043.023-.046h.001c.001-.002.002-.003.011-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032h1.25V9.5a.75.75 0 0 0 1.5 0V7.75H14c.495 0 .782.002.986.032.092.014.135.03.152.037l.011.007v.001a.13.13 0 0 1 .024.045c.014.038.032.105.046.221.03.247.031.586.031 1.13a.75.75 0 0 0 1.5 0V9.18c0-.488 0-.919-.042-1.267-.045-.372-.149-.762-.443-1.09-.305-.338-.686-.469-1.057-.524-.328-.05-.73-.05-1.16-.049H9.952ZM8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8ZM12.75 14.5a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75V14.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM9.952 6.25c-.43 0-.832 0-1.16.049-.371.055-.752.186-1.057.525-.294.327-.398.717-.443 1.089-.042.348-.042.78-.042 1.267v.042a.75.75 0 1 0 1.5 0c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.033.02-.043.023-.046h.001c.001-.002.002-.003.011-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032h1.25V9.5a.75.75 0 0 0 1.5 0V7.75H14c.495 0 .782.002.986.032.092.014.135.03.152.037l.011.007v.001a.13.13 0 0 1 .024.045c.014.038.032.105.046.221.03.247.031.586.031 1.13a.75.75 0 0 0 1.5 0V9.18c0-.488 0-.919-.042-1.267-.045-.372-.149-.762-.443-1.09-.305-.338-.686-.469-1.057-.524-.328-.05-.73-.05-1.16-.049H9.952ZM8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Zm4.75 3.25a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75V14.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path d="M9.952 6.25c-.43 0-.832 0-1.16.049-.371.055-.752.186-1.057.525-.294.327-.398.717-.443 1.089-.042.348-.042.78-.042 1.267v.042a.75.75 0 1 0 1.5 0c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.033.02-.043.023-.046h.001c.001-.002.002-.003.011-.008a.592.592 0 0 1 .152-.037c.204-.03.491-.032.986-.032h1.25V9.5a.75.75 0 0 0 1.5 0V7.75H14c.495 0 .782.002.986.032.092.014.135.03.152.037l.011.007v.001a.127.127 0 0 1 .024.045c.014.038.032.105.046.221.03.247.031.586.031 1.13a.75.75 0 0 0 1.5 0V9.18c0-.488 0-.919-.042-1.267-.045-.372-.149-.762-.443-1.09-.305-.338-.686-.469-1.057-.524-.328-.05-.73-.05-1.16-.049H9.952ZM8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8ZM12.75 14.5a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75V14.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TextCrossSquare