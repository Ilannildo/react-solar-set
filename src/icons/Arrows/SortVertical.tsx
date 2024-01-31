import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SortVertical = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.25 18a.75.75 0 0 0 1.5 0h-1.5ZM16 6l.538-.522a.75.75 0 0 0-1.076 0L16 6Zm3.462 4.647a.75.75 0 1 0 1.076-1.044l-1.076 1.044Zm-8-1.044a.75.75 0 1 0 1.076 1.044l-1.076-1.044ZM16.75 16a.75.75 0 0 0-1.5 0h1.5Zm-1.5-3a.75.75 0 0 0 1.5 0h-1.5Zm.212-6.478 4 4.125 1.076-1.044-4-4.125-1.076 1.044Zm0-1.044-4 4.125 1.076 1.044 4-4.125-1.076-1.044ZM16.75 18v-2h-1.5v2h1.5Zm0-5V6h-1.5v7h1.5ZM8 18l-.538.522a.75.75 0 0 0 1.076 0L8 18Zm4.538-3.603a.75.75 0 1 0-1.076-1.044l1.076 1.044Zm-8-1.044a.75.75 0 1 0-1.076 1.044l1.076-1.044ZM8.75 6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5 3a.75.75 0 0 0-1.5 0h1.5Zm-.212 7.522 4-4.125-1.076-1.044-4 4.125 1.076 1.044Zm0-1.044-4-4.125-1.076 1.044 4 4.125 1.076-1.044ZM7.25 6v2h1.5V6h-1.5Zm0 5v7h1.5v-7h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M15.25 18a.75.75 0 0 0 1.5 0h-1.5ZM16 6l.538-.522a.75.75 0 0 0-1.076 0L16 6Zm3.462 4.647a.75.75 0 1 0 1.076-1.044l-1.076 1.044Zm-8-1.044a.75.75 0 1 0 1.076 1.044l-1.076-1.044ZM16.75 18V6h-1.5v12h1.5ZM15.462 6.522l4 4.125 1.076-1.044-4-4.125-1.076 1.044Zm0-1.044-4 4.125 1.076 1.044 4-4.125-1.076-1.044Z" fill="currentColor" /><path d="M7.25 6a.75.75 0 0 1 1.5 0h-1.5ZM8 18l.538.522a.75.75 0 0 1-1.076 0L8 18Zm3.462-4.647a.75.75 0 1 1 1.076 1.044l-1.076-1.044Zm-8 1.044a.75.75 0 1 1 1.076-1.044l-1.076 1.044ZM8.75 6v12h-1.5V6h1.5ZM7.462 17.478l4-4.125 1.076 1.044-4 4.125-1.076-1.044Zm0 1.044-4-4.125 1.076-1.044 4 4.125-1.076 1.044Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.25 18a.75.75 0 0 0 1.5 0h-1.5ZM16 6l.538-.522a.75.75 0 0 0-1.076 0L16 6Zm3.462 4.647a.75.75 0 1 0 1.076-1.044l-1.076 1.044Zm-8-1.044a.75.75 0 1 0 1.076 1.044l-1.076-1.044ZM16.75 18V6h-1.5v12h1.5ZM15.462 6.522l4 4.125 1.076-1.044-4-4.125-1.076 1.044Zm0-1.044-4 4.125 1.076 1.044 4-4.125-1.076-1.044ZM7.25 6a.75.75 0 0 1 1.5 0h-1.5ZM8 18l.538.522a.75.75 0 0 1-1.076 0L8 18Zm3.462-4.647a.75.75 0 1 1 1.076 1.044l-1.076-1.044Zm-8 1.044a.75.75 0 1 1 1.076-1.044l-1.076 1.044ZM8.75 6v12h-1.5V6h1.5ZM7.462 17.478l4-4.125 1.076 1.044-4 4.125-1.076-1.044Zm0 1.044-4-4.125 1.076-1.044 4 4.125-1.076 1.044Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M16 5.25a.75.75 0 0 1 .538.228l4 4.125a.75.75 0 1 1-1.076 1.044L16.75 7.851V18a.75.75 0 0 1-1.5 0V7.85l-2.712 2.797a.75.75 0 1 1-1.076-1.044l4-4.125A.75.75 0 0 1 16 5.25Zm-8 0a.75.75 0 0 1 .75.75v10.15l2.712-2.797a.75.75 0 1 1 1.076 1.044l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125a.75.75 0 1 1 1.076-1.044l2.712 2.796V6A.75.75 0 0 1 8 5.25Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 13.125a.75.75 0 0 1 .538 1.272l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125A.75.75 0 0 1 4 13.125h3.25V6a.75.75 0 1 1 1.5 0v7.125H12Z" fill="currentColor" /><path d="M20 10.875a.75.75 0 0 0 .538-1.272l-4-4.125a.75.75 0 0 0-1.076 0l-4 4.125A.75.75 0 0 0 12 10.875h3.25V18a.75.75 0 0 0 1.5 0v-7.125H20Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 10.875a.75.75 0 0 0 .538-1.272l-4-4.125a.75.75 0 0 0-1.076 0l-4 4.125A.75.75 0 0 0 12 10.875h3.25V18a.75.75 0 0 0 1.5 0v-7.125H20Z" fill="currentColor" /><path opacity={0.5} d="M12 13.125a.75.75 0 0 1 .538 1.272l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125A.75.75 0 0 1 4 13.125h3.25V6a.75.75 0 1 1 1.5 0v7.125H12Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SortVertical