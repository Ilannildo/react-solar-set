import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const AlignVerticalCenter = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12h3m17 0h-3m-5 0h-4M5 13V7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 5 6.565 5 7.5 5s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C10 6.098 10 6.565 10 7.5v9c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C8.902 19 8.435 19 7.5 19s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.161-.28-.193-.636-.2-1.25" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M16.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12h3m17 0h-3m-5 0h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5ZM16.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12h3m17 0h-3m-5 0h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5ZM16.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.468 4.25h.064c.44 0 .82 0 1.13.028.33.03.656.096.963.273.342.198.626.482.824.824.177.307.243.633.273.962.028.312.028.691.028 1.13v3.783h2.5V9.468c0-.44 0-.82.028-1.13.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273.312-.028.691-.028 1.13-.028h.065c.44 0 .82 0 1.13.028.33.03.656.096.963.273.342.198.626.482.824.824.177.307.243.633.273.962.028.312.028.691.028 1.13v1.783H22a.75.75 0 0 1 0 1.5h-2.25v1.782c0 .44 0 .82-.028 1.13-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028-.33-.03-.656-.096-.963-.273a2.251 2.251 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962-.028-.312-.028-.691-.028-1.13V12.75h-2.5v3.782c0 .44 0 .82-.028 1.13-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962-.028-.312-.028-.691-.028-1.13V12.75H2a.75.75 0 0 1 0-1.5h2.25V7.468c0-.44 0-.82.028-1.13.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273.312-.028.691-.028 1.13-.028ZM5.75 12.001V7.5c0-.481 0-.792.022-1.027.02-.225.055-.307.078-.348a.75.75 0 0 1 .275-.275c.04-.023.123-.058.348-.078.235-.021.546-.022 1.027-.022.481 0 .792 0 1.027.022.225.02.307.055.348.078a.75.75 0 0 1 .275.275c.023.04.058.123.078.348.021.235.022.546.022 1.027v9c0 .481 0 .792-.022 1.027-.02.225-.055.307-.078.348a.75.75 0 0 1-.275.274c-.04.024-.123.058-.348.079-.235.021-.546.022-1.027.022-.481 0-.792 0-1.027-.022-.225-.02-.307-.055-.348-.079a.75.75 0 0 1-.275-.274c-.023-.04-.058-.123-.078-.348A12.81 12.81 0 0 1 5.75 16.5v-4.499Zm9 2.499c0 .481 0 .792.022 1.027.02.225.055.307.079.348a.75.75 0 0 0 .274.274c.04.024.123.058.348.079.235.021.546.022 1.027.022.481 0 .792 0 1.027-.022.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348.021-.235.022-.546.022-1.027v-5c0-.481 0-.792-.022-1.027-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 7.75c-.481 0-.792 0-1.027.022-.225.02-.307.055-.348.078a.75.75 0 0 0-.274.275c-.024.04-.059.123-.079.348-.021.235-.022.546-.022 1.027v5Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v3.75H2a.75.75 0 0 0 0 1.5h3v3.75c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-3.75h4v1.75c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-1.75h3a.75.75 0 0 0 0-1.5h-3V9.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v1.75h-4V7.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5Z" fill="currentColor" /><path d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M5 11.25H2a.75.75 0 0 0 0 1.5h3v-1.5ZM10 12.75h4v-1.5h-4v1.5ZM19 12.75h3a.75.75 0 0 0 0-1.5h-3v1.5Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default AlignVerticalCenter