import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MoveToFolder = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828M2 12V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.079.07.154.145.224.224.57.633.718 1.52.757 3.006" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 14.25a.75.75 0 0 0 0 1.5v-1.5ZM13 15l.441.607a.75.75 0 0 0 0-1.214L13 15Zm-3.684-3.607a.75.75 0 0 0-.882 1.214l.882-1.214Zm-.882 6a.75.75 0 0 0 .882 1.214l-.882-1.214ZM2 15.75H13v-1.5H2v1.5Zm11.441-1.357-4.125-3-.882 1.214 4.125 3 .882-1.214Zm-.882 0-4.125 3 .882 1.214 4.125-3-.882-1.214Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.079.07.154.145.224.224.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 14.25a.75.75 0 0 0 0 1.5v-1.5ZM13 15l.441.607a.75.75 0 0 0 0-1.214L13 15Zm-3.684-3.607a.75.75 0 0 0-.882 1.214l.882-1.214Zm-.882 6a.75.75 0 0 0 .882 1.214l-.882-1.214ZM2 15.75H13v-1.5H2v1.5Zm11.441-1.357-4.125-3-.882 1.214 4.125 3 .882-1.214Zm-.882 0-4.125 3 .882 1.214 4.125-3-.882-1.214Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.079.07.154.145.224.224.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 14.25a.75.75 0 0 0 0 1.5v-1.5ZM13 15l.441.607a.75.75 0 0 0 0-1.214L13 15Zm-3.684-3.607a.75.75 0 0 0-.882 1.214l.882-1.214Zm-.882 6a.75.75 0 0 0 .882 1.214l-.882-1.214ZM2 15.75H13v-1.5H2v1.5Zm11.441-1.357-4.125-3-.882 1.214 4.125 3 .882-1.214Zm-.882 0-4.125 3 .882 1.214 4.125-3-.882-1.214Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37.218.121.449.217.689.286.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102.841.106 1.556.332 2.144.86.098.088.192.182.28.28.529.588.754 1.303.86 2.144.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.835-.835-1.152-1.92-1.286-3.286a.75.75 0 0 1 1.493-.146c.121 1.234.382 1.9.854 2.371.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.268-.09-2.975-.087-.689-.246-1.06-.487-1.328a2.238 2.238 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182-.35-.1-.689-.24-1.008-.417-.58-.324-1.058-.802-1.8-1.543l-.077-.078-.55-.55a8.025 8.025 0 0 0-.503-.482 3.25 3.25 0 0 0-1.771-.734 8.029 8.029 0 0 0-.696-.014c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V12a.75.75 0 0 1-1.5 0V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082Zm1.408 10.309a.75.75 0 0 1 1.048-.165l4.125 3a.75.75 0 0 1 0 1.213l-4.125 3a.75.75 0 0 1-.882-1.213l2.26-1.644H2a.75.75 0 0 1 0-1.5h8.694l-2.26-1.643a.75.75 0 0 1-.166-1.048Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 11.798V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172-.975-.974-1.139-2.442-1.166-5.078h8.688l-2.26 1.643a.75.75 0 0 0 .882 1.214l4.125-3a.75.75 0 0 0 0-1.213l-4.125-3a.75.75 0 1 0-.882 1.213l2.26 1.643H2v-7.3c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495.268.15.553.268.848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.079.07.154.145.225.224.769.855.769 2.172.769 4.804Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3.005 3.005 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4.003 4.003 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95v7.3l.006 1.5c.027 2.636.191 4.104 1.166 5.078C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14Z" fill="currentColor" /><path d="M9.316 11.393a.75.75 0 0 0-.882 1.214l2.26 1.643H2l.006 1.5h8.688l-2.26 1.643a.75.75 0 0 0 .882 1.214l4.125-3a.75.75 0 0 0 0-1.213l-4.125-3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MoveToFolder