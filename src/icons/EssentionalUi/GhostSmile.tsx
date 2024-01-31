import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const GhostSmile = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={15} cy={9.5} rx={1} ry={1.5} fill="currentColor" /><ellipse cx={9} cy={9.5} rx={1} ry={1.5} fill="currentColor" /><path d="M22 12.3C22 6.613 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186 2.822 2.822 0 0 0 3.208 0l.353-.242a1.836 1.836 0 0 1 2.086 0l.353.242a2.822 2.822 0 0 0 3.208 0 2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591v-3.711" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={15} cy={9.5} rx={1} ry={1.5} fill="currentColor" /><ellipse cx={9} cy={9.5} rx={1} ry={1.5} fill="currentColor" /><path opacity={0.5} d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186 2.822 2.822 0 0 0 3.208 0l.353-.242a1.836 1.836 0 0 1 2.086 0l.353.242a2.822 2.822 0 0 0 3.208 0 2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={15} cy={9.5} rx={1} ry={1.5} fill="currentColor" /><ellipse cx={9} cy={9.5} rx={1} ry={1.5} fill="currentColor" /><path d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186 2.822 2.822 0 0 0 3.208 0l.353-.242a1.836 1.836 0 0 1 2.086 0l.353.242a2.822 2.822 0 0 0 3.208 0 2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 9.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 8 9 8s1 .672 1 1.5ZM15 11c.552 0 1-.672 1-1.5S15.552 8 15 8s-1 .672-1 1.5.448 1.5 1 1.5ZM9.447 14.398a.75.75 0 1 0-.894 1.204A5.766 5.766 0 0 0 12 16.75a5.766 5.766 0 0 0 3.447-1.148.75.75 0 1 0-.894-1.204A4.267 4.267 0 0 1 12 15.25a4.267 4.267 0 0 1-2.553-.852Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.042 1.25 1.25 6.219 1.25 12.3v7.423c0 1.847 1.912 3.123 3.593 2.258a2.07 2.07 0 0 1 2.129.137 3.572 3.572 0 0 0 4.056 0l.353-.242a1.085 1.085 0 0 1 1.238 0l.353.242a3.572 3.572 0 0 0 4.056 0 2.07 2.07 0 0 1 2.13-.137c1.68.865 3.592-.412 3.592-2.258v-7.422C22.75 6.219 17.958 1.25 12 1.25ZM2.75 12.3c0-5.295 4.162-9.55 9.25-9.55s9.25 4.255 9.25 9.55v7.423c0 .798-.79 1.242-1.406.924a3.57 3.57 0 0 0-3.665.235 2.071 2.071 0 0 1-2.358 0l-.353-.243a2.585 2.585 0 0 0-2.936 0l-.353.242a2.071 2.071 0 0 1-2.358 0 3.57 3.57 0 0 0-3.665-.234c-.617.318-1.406-.126-1.406-.924v-7.422Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 12v7.206a1.727 1.727 0 0 1-2.5 1.544 2.891 2.891 0 0 0-2.896.18 2.892 2.892 0 0 1-3.208 0l-.353-.234a1.881 1.881 0 0 0-2.086 0l-.353.235a2.892 2.892 0 0 1-3.208 0 2.891 2.891 0 0 0-2.897-.18A1.727 1.727 0 0 1 2 19.205V12C2 6.477 6.477 2 12 2s10 4.477 10 10ZM9.447 14.398a.75.75 0 1 0-.894 1.204A5.766 5.766 0 0 0 12 16.75a5.766 5.766 0 0 0 3.447-1.148.75.75 0 1 0-.894-1.204A4.267 4.267 0 0 1 12 15.25a4.267 4.267 0 0 1-2.553-.852ZM16 9.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM9 11c.552 0 1-.672 1-1.5S9.552 8 9 8s-1 .672-1 1.5.448 1.5 1 1.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 12v7.206a1.727 1.727 0 0 1-2.5 1.544 2.891 2.891 0 0 0-2.896.18 2.892 2.892 0 0 1-3.208 0l-.353-.234a1.881 1.881 0 0 0-2.086 0l-.353.235a2.892 2.892 0 0 1-3.208 0 2.891 2.891 0 0 0-2.897-.18A1.727 1.727 0 0 1 2 19.205V12C2 6.477 6.477 2 12 2s10 4.477 10 10Z" fill="currentColor" /><path d="M9.447 14.398a.75.75 0 1 0-.894 1.204A5.766 5.766 0 0 0 12 16.75a5.766 5.766 0 0 0 3.447-1.148.75.75 0 1 0-.894-1.204A4.267 4.267 0 0 1 12 15.25a4.267 4.267 0 0 1-2.553-.852ZM16 9.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM9 11c.552 0 1-.672 1-1.5S9.552 8 9 8s-1 .672-1 1.5.448 1.5 1 1.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default GhostSmile