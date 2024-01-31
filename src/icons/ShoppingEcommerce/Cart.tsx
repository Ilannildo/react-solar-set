import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Cart = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635.813-.636 1.086-1.727 1.631-3.91.858-3.432 1.287-5.147.387-6.301C19.622 9 17.852 9 14.316 9H9.684c-3.538 0-5.306 0-6.207 1.154-.529.677-.6 1.548-.394 2.846" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m19.5 9.5-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" stroke="currentColor" strokeWidth={1.5} /><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154.901 1.153.472 2.87-.386 6.301-.546 2.183-.818 3.274-1.632 3.91-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635-.814-.636-1.087-1.727-1.632-3.91Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m19.5 9.5-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" stroke="currentColor" strokeWidth={1.5} /><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154.901 1.153.472 2.87-.386 6.301-.546 2.183-.818 3.274-1.632 3.91-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635-.814-.636-1.087-1.727-1.632-3.91Z" stroke="currentColor" strokeWidth={1.5} /><path d="m19.5 9.5-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" stroke="currentColor" strokeWidth={1.5} /><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.418 3.25c.28-.59.883-1 1.582-1h4c.698 0 1.301.41 1.582 1 .683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.493.539 1.127.776 1.998l.037.136.59 2.167a2.98 2.98 0 0 1 1.01.828c.622.797.732 1.746.622 2.834-.108 1.056-.44 2.386-.856 4.051l-.027.105c-.263 1.053-.477 1.908-.73 2.575-.266.696-.602 1.266-1.157 1.699-.554.433-1.189.62-1.928.71-.709.084-1.59.084-2.675.084H9.638c-1.085 0-1.967 0-2.675-.085-.74-.088-1.374-.276-1.929-.71-.554-.432-.89-1.002-1.156-1.698-.254-.667-.467-1.522-.73-2.575l-.027-.105c-.416-1.665-.749-2.995-.856-4.05-.11-1.09 0-2.038.621-2.835.283-.362.622-.63 1.01-.828l.59-2.167.038-.136c.237-.871.409-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222Zm.001 1.502c-.662.007-.927.032-1.147.118a1.75 1.75 0 0 0-.768.587c-.176.237-.28.568-.57 1.635L5.58 8.389c1.038-.139 2.378-.139 4.042-.139h4.755c1.665 0 3.005 0 4.042.139l-.353-1.297c-.291-1.067-.394-1.398-.57-1.635a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998ZM10 3.75a.25.25 0 0 0 0 .5h4a.25.25 0 0 0 0-.5h-4ZM5.7 9.886c-.91.132-1.351.372-1.63.73-.28.357-.405.842-.312 1.758.095.936.4 2.16.834 3.9.278 1.108.47 1.876.69 2.45.21.554.417.847.677 1.05.259.202.593.331 1.183.402.61.073 1.4.074 2.544.074h4.63c1.143 0 1.935-.001 2.544-.074.59-.07.924-.2 1.183-.402.26-.203.466-.496.678-1.05.218-.574.411-1.342.688-2.45.435-1.74.74-2.964.834-3.9.094-.916-.032-1.402-.311-1.759s-.72-.597-1.631-.729c-.93-.134-2.192-.136-3.985-.136h-4.63c-1.793 0-3.055.002-3.985.136Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1 .683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.742 2.722.28.841.024.03c.901 1.154.472 2.87-.386 6.301-.546 2.183-.818 3.274-1.632 3.91-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635-.814-.636-1.087-1.727-1.632-3.91-.858-3.431-1.287-5.147-.386-6.301l.024-.03.28-.841.742-2.722c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222Zm.002 1.502c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.28.568-.57 1.635l-.57 2.089C6.384 9 7.778 9 9.684 9h4.631c1.907 0 3.3 0 4.32.18l-.569-2.089c-.29-1.067-.394-1.398-.57-1.635a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M10.023 2a1.75 1.75 0 0 0 0 3.5h4a1.75 1.75 0 1 0 0-3.5h-4ZM3.887 16.205C3.029 12.773 2.6 11.058 3.5 9.904 4.4 8.75 6.17 8.75 9.708 8.75h4.63c3.538 0 5.306 0 6.207 1.154.901 1.153.472 2.87-.386 6.301-.546 2.183-.818 3.274-1.632 3.91-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635-.814-.636-1.087-1.727-1.632-3.91Z" fill="currentColor" /><path d="M15.604 4.502a1.743 1.743 0 0 0 .002-1.501c.683.005 1.216.036 1.691.222a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.777 1.999l.046.17.513 2.963c-.409-.282-.936-.45-1.618-.55l-.36-2.087c-.285-1.04-.388-1.367-.562-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.485-.11-1.147-.118ZM8.441 3.001a1.743 1.743 0 0 0 .002 1.501c-.662.007-.927.032-1.147.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.561-.561 1.6l-.361 2.089c-.682.1-1.209.267-1.618.548l.513-2.962.046-.17c.237-.872.41-1.505.777-2A3.25 3.25 0 0 1 6.75 3.224c.475-.186 1.008-.217 1.691-.222Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Cart