import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const KeyMinimalisticSquare2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m20.314 3.686.53-.53-.53.53Zm0 8.14.53.53-.53-.53Zm-9.86-1.769-.53-.53.53.53ZM7.362 13.15l.53.53-.53-.53Zm3.489 3.489-.53-.53.53.53Zm3.093-3.094-.53-.53.53.53Zm-6.935.614-.746.082.746-.082Zm.193 1.74-.745.083.745-.083Zm.9.9-.083.745.083-.745Zm1.74.193.083-.745-.083.745Zm-2.404-.602.53-.53-.53.53Zm.173.173-.53.53.53-.53Zm3.06-7.37-.726.186.726-.186Zm4.137 4.137-.186.726.186-.726Zm-3.854.3a.75.75 0 0 0-1.055 1.067l1.055-1.067Zm4.566-5.148a.917.917 0 0 1 0-1.297l-1.061-1.06a2.417 2.417 0 0 0 0 3.417l1.06-1.06Zm1.296 0a.917.917 0 0 1-1.297 0l-1.06 1.06a2.417 2.417 0 0 0 3.417 0l-1.06-1.06Zm0-1.297a.917.917 0 0 1 0 1.297l1.06 1.06a2.417 2.417 0 0 0 0-3.418l-1.06 1.061Zm1.06-1.06a2.417 2.417 0 0 0-3.417 0l1.06 1.06a.917.917 0 0 1 1.297 0l1.06-1.06Zm1.909-1.909a5.006 5.006 0 0 1 0 7.079l1.06 1.06a6.506 6.506 0 0 0 0-9.2l-1.06 1.061Zm1.06-1.06a6.506 6.506 0 0 0-9.2 0l1.061 1.06a5.006 5.006 0 0 1 7.079 0l1.06-1.06Zm-10.92 6.37L6.831 12.62l1.06 1.06 3.094-3.093-1.06-1.06Zm1.456 7.643 1.034-1.034-1.061-1.06-1.034 1.033 1.061 1.061Zm1.034-1.034 2.06-2.06-1.061-1.06-2.06 2.06 1.06 1.06Zm-6.152-1.894.194 1.741 1.49-.166-.193-1.74-1.49.165Zm1.756 3.303 1.74.194.166-1.491-1.74-.193-.166 1.49Zm-1.112-.624.174.174 1.06-1.061-.173-.174-1.06 1.061Zm1.278-.866a.072.072 0 0 1-.043-.021l-1.061 1.06c.252.253.583.412.938.451l.166-1.49Zm-1.728-.072c.039.355.198.686.45.938l1.061-1.06a.072.072 0 0 1-.02-.044l-1.491.166Zm3.863.126a.483.483 0 0 1-.395.139l-.165 1.49a1.984 1.984 0 0 0 1.621-.568l-1.06-1.06ZM6.831 12.62a1.984 1.984 0 0 0-.569 1.622l1.491-.166a.483.483 0 0 1 .139-.395L6.83 12.62Zm4.566-3.614a5.003 5.003 0 0 1 1.308-4.79l-1.06-1.06a6.503 6.503 0 0 0-1.701 6.223l1.453-.373Zm8.387 2.289a5.003 5.003 0 0 1-4.79 1.308l-.373 1.453a6.503 6.503 0 0 0 6.224-1.7l-1.061-1.061Zm-5.31 2.78a.09.09 0 0 1 .044-.022.218.218 0 0 1 .103.003l.373-1.453c-.527-.135-1.143-.026-1.581.412l1.06 1.06Zm-3.489-3.488c.438-.438.547-1.054.412-1.58l-1.453.372c.01.04.009.076.003.103a.09.09 0 0 1-.023.045l1.061 1.06Zm1.426 4.485-1.458-1.442-1.055 1.067 1.458 1.441 1.055-1.066Z" fill="currentColor" /><path d="M2 11.99c0 4.719 0 7.078 1.466 8.544C4.932 22 7.29 22 12.01 22s7.078 0 8.544-1.466c1.115-1.115 1.382-2.747 1.446-5.541M9.007 2c-2.794.064-4.426.33-5.541 1.446-.977.977-1.303 2.35-1.412 4.554" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m20.314 3.686.53-.53-.53.53Zm0 8.14.53.53-.53-.53Zm-8.14-8.14.531.53-.53-.53Zm-1.72 6.371-.53-.53.53.53ZM7.362 13.15l.53.53-.53-.53Zm3.489 3.489-.53-.53.53.53Zm1.033-1.034.53.53-.53-.53Zm2.06-2.06-.53-.53.53.53Zm-6.935.614-.746.082.746-.082Zm.193 1.74-.745.083.745-.083Zm.9.9-.083.745.083-.745Zm1.74.193.083-.745-.083.745Zm-2.404-.602.53-.53-.53.53Zm.173.173-.53.53.53-.53Zm3.06-7.37-.726.186.726-.186Zm4.137 4.137-.186.726.186-.726Zm-3.854.3a.75.75 0 0 0-1.055 1.067l1.055-1.067Zm8.83-9.414a5.006 5.006 0 0 1 0 7.079l1.062 1.06a6.506 6.506 0 0 0 0-9.2l-1.061 1.061Zm1.062-1.06a6.506 6.506 0 0 0-9.2 0l1.06 1.06a5.006 5.006 0 0 1 7.079 0l1.06-1.06Zm-10.92 6.37L6.83 12.62l1.06 1.06 3.094-3.093-1.06-1.06Zm1.455 7.643 1.034-1.034-1.061-1.06-1.034 1.033 1.061 1.061Zm1.034-1.034 2.06-2.06-1.061-1.06-2.06 2.06 1.06 1.06Zm-6.152-1.894.194 1.741 1.49-.166-.193-1.74-1.49.165Zm1.756 3.303 1.74.194.166-1.491-1.74-.193-.166 1.49Zm-1.112-.624.174.174 1.06-1.061-.173-.174-1.06 1.061Zm1.278-.866a.072.072 0 0 1-.043-.021l-1.061 1.06c.252.253.583.412.938.451l.166-1.49Zm-1.728-.072c.039.355.198.686.45.938l1.061-1.06a.072.072 0 0 1-.02-.044l-1.491.166Zm3.863.126a.483.483 0 0 1-.395.139l-.165 1.49a1.984 1.984 0 0 0 1.621-.568l-1.06-1.06ZM6.831 12.62a1.984 1.984 0 0 0-.569 1.622l1.491-.166a.483.483 0 0 1 .139-.395L6.83 12.62Zm4.566-3.614a5.003 5.003 0 0 1 1.308-4.79l-1.06-1.06a6.503 6.503 0 0 0-1.701 6.223l1.453-.373Zm8.387 2.289a5.003 5.003 0 0 1-4.79 1.308l-.373 1.453a6.503 6.503 0 0 0 6.224-1.7l-1.061-1.061Zm-5.31 2.78a.09.09 0 0 1 .044-.022.218.218 0 0 1 .103.003l.373-1.453c-.527-.135-1.143-.026-1.581.412l1.06 1.06Zm-3.489-3.488c.438-.438.547-1.054.412-1.58l-1.453.372c.01.04.009.076.003.103a.09.09 0 0 1-.023.045l1.061 1.06Zm1.426 4.485-1.458-1.442-1.055 1.067 1.458 1.441 1.055-1.066Z" fill="currentColor" /><path opacity={0.5} d="M15.518 8.482a.917.917 0 0 1 0-1.297l-1.06-1.06a2.417 2.417 0 0 0 0 3.418l1.06-1.061Zm1.297 0a.917.917 0 0 1-1.297 0l-1.06 1.06a2.417 2.417 0 0 0 3.417 0l-1.06-1.06Zm0-1.297a.917.917 0 0 1 0 1.297l1.06 1.06a2.417 2.417 0 0 0 0-3.417l-1.06 1.06Zm1.06-1.06a2.417 2.417 0 0 0-3.417 0l1.06 1.06a.917.917 0 0 1 1.297 0l1.06-1.06Z" fill="currentColor" /><path opacity={0.5} d="M22 14.993c-.064 2.794-.33 4.426-1.446 5.541C19.088 22 16.73 22 12.01 22s-7.078 0-8.544-1.466C2 19.068 2 16.71 2 11.99s0-7.078 1.466-8.544C4.58 2.33 6.213 2.064 9.007 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m20.314 3.686.53-.53-.53.53Zm0 8.14.53.53-.53-.53Zm-9.86-1.769-.53-.53.53.53ZM7.362 13.15l.53.53-.53-.53Zm3.489 3.489-.53-.53.53.53Zm3.093-3.094-.53-.53.53.53Zm-6.935.614-.746.082.746-.082Zm.193 1.74-.745.083.745-.083Zm.9.9-.083.745.083-.745Zm1.74.193.083-.745-.083.745Zm-2.404-.602.53-.53-.53.53Zm.173.173-.53.53.53-.53Zm3.06-7.37-.726.186.726-.186Zm4.137 4.137-.186.726.186-.726Zm-3.854.3a.75.75 0 0 0-1.055 1.067l1.055-1.067Zm4.566-5.148a.917.917 0 0 1 0-1.297l-1.061-1.06a2.417 2.417 0 0 0 0 3.417l1.06-1.06Zm1.296 0a.917.917 0 0 1-1.297 0l-1.06 1.06a2.417 2.417 0 0 0 3.417 0l-1.06-1.06Zm0-1.297a.917.917 0 0 1 0 1.297l1.06 1.06a2.417 2.417 0 0 0 0-3.418l-1.06 1.061Zm1.06-1.06a2.417 2.417 0 0 0-3.417 0l1.06 1.06a.917.917 0 0 1 1.297 0l1.06-1.06Zm1.909-1.909a5.006 5.006 0 0 1 0 7.079l1.06 1.06a6.506 6.506 0 0 0 0-9.2l-1.06 1.061Zm1.06-1.06a6.506 6.506 0 0 0-9.2 0l1.061 1.06a5.006 5.006 0 0 1 7.079 0l1.06-1.06Zm-10.92 6.37L6.831 12.62l1.06 1.06 3.094-3.093-1.06-1.06Zm1.456 7.643 1.034-1.034-1.061-1.06-1.034 1.033 1.061 1.061Zm1.034-1.034 2.06-2.06-1.061-1.06-2.06 2.06 1.06 1.06Zm-6.152-1.894.194 1.741 1.49-.166-.193-1.74-1.49.165Zm1.756 3.303 1.74.194.166-1.491-1.74-.193-.166 1.49Zm-1.112-.624.174.174 1.06-1.061-.173-.174-1.06 1.061Zm1.278-.866a.072.072 0 0 1-.043-.021l-1.061 1.06c.252.253.583.412.938.451l.166-1.49Zm-1.728-.072c.039.355.198.686.45.938l1.061-1.06a.072.072 0 0 1-.02-.044l-1.491.166Zm3.863.126a.483.483 0 0 1-.395.139l-.165 1.49a1.984 1.984 0 0 0 1.621-.568l-1.06-1.06ZM6.831 12.62a1.984 1.984 0 0 0-.569 1.622l1.491-.166a.483.483 0 0 1 .139-.395L6.83 12.62Zm4.566-3.614a5.003 5.003 0 0 1 1.308-4.79l-1.06-1.06a6.503 6.503 0 0 0-1.701 6.223l1.453-.373Zm8.387 2.289a5.003 5.003 0 0 1-4.79 1.308l-.373 1.453a6.503 6.503 0 0 0 6.224-1.7l-1.061-1.061Zm-5.31 2.78a.09.09 0 0 1 .044-.022.218.218 0 0 1 .103.003l.373-1.453c-.527-.135-1.143-.026-1.581.412l1.06 1.06Zm-3.489-3.488c.438-.438.547-1.054.412-1.58l-1.453.372c.01.04.009.076.003.103a.09.09 0 0 1-.023.045l1.061 1.06Zm1.426 4.485-1.458-1.442-1.055 1.067 1.458 1.441 1.055-1.066Z" fill="currentColor" /><path d="M22 14.993c-.064 2.794-.33 4.426-1.446 5.541C19.088 22 16.73 22 12.01 22s-7.078 0-8.544-1.466C2 19.068 2 16.71 2 11.99s0-7.078 1.466-8.544C4.58 2.33 6.213 2.064 9.007 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.757 1.983a.75.75 0 0 1-.733.767c-2.822.064-4.15.349-5.028 1.226-.57.57-.897 1.342-1.07 2.622-.174 1.301-.176 3.011-.176 5.392 0 2.38.002 4.09.177 5.392.172 1.28.499 2.051 1.07 2.622.57.57 1.341.897 2.621 1.07 1.301.174 3.011.176 5.392.176 2.38 0 4.09-.002 5.392-.177 1.28-.172 2.051-.499 2.622-1.07.877-.877 1.162-2.206 1.226-5.027a.75.75 0 1 1 1.5.034c-.063 2.766-.313 4.702-1.666 6.054-.895.896-2.036 1.302-3.482 1.496-1.413.19-3.224.19-5.535.19h-.114c-2.311 0-4.122 0-5.535-.19-1.446-.194-2.587-.6-3.482-1.496-.896-.895-1.302-2.036-1.496-3.482-.19-1.413-.19-3.224-.19-5.535v-.114c0-2.311 0-4.122.19-5.535.194-1.446.6-2.587 1.496-3.482C4.289 1.563 6.223 1.313 8.99 1.25a.75.75 0 0 1 .767.733Zm1.887 1.172a6.506 6.506 0 1 1 2.977 10.901.218.218 0 0 0-.103-.003.09.09 0 0 0-.044.022L11.38 17.17a1.984 1.984 0 0 1-1.621.569l-1.741-.194a1.572 1.572 0 0 1-.938-.45l-.174-.174a1.572 1.572 0 0 1-.45-.938l-.194-1.74a1.984 1.984 0 0 1 .569-1.622l3.093-3.093a.09.09 0 0 0 .023-.045.217.217 0 0 0-.003-.103 6.503 6.503 0 0 1 1.7-6.224Zm8.14 1.061a5.006 5.006 0 0 0-8.387 4.79c.135.527.026 1.143-.412 1.581l-3.093 3.094a.483.483 0 0 0-.139.395l.193 1.74c.002.017.01.032.021.043l.174.174a.073.073 0 0 0 .043.02l1.74.194a.483.483 0 0 0 .395-.139l.5-.5-.92-.911a.75.75 0 1 1 1.054-1.067l.927.917 1.533-1.532c.438-.438 1.054-.547 1.58-.412a5.006 5.006 0 0 0 4.79-8.387Zm-5.326 1.909a2.417 2.417 0 1 1 3.417 3.417 2.417 2.417 0 0 1-3.417-3.417Zm2.357 1.06a.917.917 0 1 0-1.297 1.296.917.917 0 0 0 1.297-1.296Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.62 18.98a3.234 3.234 0 0 0 2.644-.927l2.655-2.655A7.748 7.748 0 0 0 22 12.955c-.006 4.084-.101 6.218-1.463 7.58C19.07 22 16.713 22 12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.827 2.102 6.961 2.007 11.045 2a7.748 7.748 0 0 0-2.443 7.08l-2.655 2.656a3.233 3.233 0 0 0-.927 2.643l.193 1.741c.071.637.356 1.23.81 1.684l.173.174a2.823 2.823 0 0 0 1.684.809l1.74.193Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M21.963 8.412a5.73 5.73 0 0 1-1.649 3.413 5.753 5.753 0 0 1-5.507 1.505.9.9 0 0 0-.864.215l-1.53 1.53-.002-.003-1.458-1.442a.75.75 0 0 0-1.055 1.067l1.455 1.438-.503.504a1.233 1.233 0 0 1-1.009.353l-1.74-.193a.822.822 0 0 1-.49-.236l-.174-.173a.822.822 0 0 1-.236-.49l-.193-1.741a1.233 1.233 0 0 1 .353-1.009l3.094-3.093a.9.9 0 0 0 .215-.864 5.753 5.753 0 0 1 1.505-5.507 5.731 5.731 0 0 1 3.413-1.649c.906.034 1.68.097 2.348.216.87.267 1.69.744 2.378 1.433a5.73 5.73 0 0 1 1.433 2.378c.12.668.182 1.442.216 2.348Zm-6.975-1.757a1.667 1.667 0 1 1 2.357 2.357 1.667 1.667 0 0 1-2.357-2.357Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M21.963 8.413a5.73 5.73 0 0 1-1.649 3.413 5.753 5.753 0 0 1-5.507 1.504.9.9 0 0 0-.864.215l-1.53 1.53-.002-.003-1.458-1.441a.75.75 0 1 0-1.055 1.066l1.455 1.439-.503.503a1.233 1.233 0 0 1-1.009.354l-1.74-.194a.822.822 0 0 1-.49-.235l-.174-.174a.822.822 0 0 1-.236-.49l-.193-1.741a1.233 1.233 0 0 1 .353-1.008l3.094-3.094a.9.9 0 0 0 .215-.864 5.753 5.753 0 0 1 1.505-5.507 5.731 5.731 0 0 1 3.413-1.648c.906.033 1.68.096 2.348.215a5.73 5.73 0 0 1 2.378 1.433 5.73 5.73 0 0 1 1.433 2.378c.12.668.182 1.442.216 2.349Zm-6.975-1.758a1.667 1.667 0 1 1 2.357 2.357 1.667 1.667 0 0 1-2.357-2.357Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default KeyMinimalisticSquare2