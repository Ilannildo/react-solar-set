import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Clouds = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12.353c0-2.472-1.607-4.573-3.845-5.338M6.285 18C3.92 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 0 1 1.55.634M17.048 15.142c.387-.13.804-.2 1.238-.2.425 0 .834.067 1.215.192m-7.176 1.622a2.948 2.948 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353 9 20.815 10.247 22 11.786 22h6.5C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.175 1.622a3.367 3.367 0 0 1-.23-1.227c0-1.949 1.663-3.529 3.714-3.529 1.911 0 3.485 1.371 3.692 3.134m-7.176 1.622c.367.068.708.205 1.008.396" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 12.353c0-2.472-1.607-4.573-3.845-5.338M6.285 18C3.92 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 0 1 1.55.634" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17.048 15.142c.387-.13.804-.2 1.238-.2.425 0 .834.067 1.215.192m-7.176 1.622a2.948 2.948 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353 9 20.815 10.247 22 11.786 22h6.5C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.175 1.622a3.367 3.367 0 0 1-.23-1.227c0-1.949 1.663-3.529 3.714-3.529 1.911 0 3.485 1.371 3.692 3.134m-7.176 1.622c.367.068.708.205 1.008.396" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12.353c0-2.472-1.607-4.573-3.845-5.338M6.285 18C3.92 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 0 1 1.55.634M17.048 15.142c.387-.13.804-.2 1.238-.2.425 0 .834.067 1.215.192m-7.176 1.622a2.948 2.948 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353 9 20.815 10.247 22 11.786 22h6.5C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.175 1.622a3.367 3.367 0 0 1-.23-1.227c0-1.949 1.663-3.529 3.714-3.529 1.911 0 3.485 1.371 3.692 3.134m-7.176 1.622c.367.068.708.205 1.008.396" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.331.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25 3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486 0 1.916 1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985 0-2.705 2.17-4.893 4.864-4.983a6.366 6.366 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397 3.158 0 5.796 2.244 6.355 5.221 2.3.977 3.919 3.238 3.919 5.882a.75.75 0 1 1-1.5 0c0-2.137-1.39-3.962-3.338-4.628a5.018 5.018 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416 6.517 6.517 0 0 1 3.024-.305 4.962 4.962 0 0 0-4.682-3.264Zm3.333 10c-1.673 0-2.964 1.28-2.964 2.78 0 .207.024.409.07.603.292.095.568.225.82.386a.75.75 0 0 1-.804 1.266 2.1 2.1 0 0 0-1.145-.33c-1.161 0-2.036.886-2.036 1.898s.875 1.897 2.036 1.897h6.5c1.673 0 2.964-1.28 2.964-2.78 0-1.19-.807-2.236-1.983-2.623a3.136 3.136 0 0 0-.981-.156c-.353 0-.689.058-1 .162a.75.75 0 1 1-.477-1.422 4.634 4.634 0 0 1 1.599-.238c-.499-.85-1.462-1.443-2.599-1.443Zm4.357 1.838c-.452-1.934-2.254-3.338-4.357-3.338-2.428 0-4.464 1.88-4.464 4.28 0 .151.008.301.025.45-1.73.196-3.12 1.601-3.12 3.373 0 1.912 1.62 3.397 3.536 3.397h6.5c2.429 0 4.464-1.88 4.464-4.28 0-1.737-1.074-3.208-2.584-3.882Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.286 22C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336C19.295 13.371 17.72 12 15.81 12c-2.052 0-3.715 1.58-3.715 3.53 0 .43.082.844.23 1.226a2.948 2.948 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353 9 20.815 10.247 22 11.786 22h6.5Z" fill="currentColor" /><path d="M21.551 14.55a5.261 5.261 0 0 0-.751-.486c-.66-2.101-2.686-3.564-4.99-3.564-2.754 0-5.124 2.1-5.212 4.87-1.321.37-2.41 1.342-2.867 2.63H6.286C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353c0 .78-.16 1.522-.449 2.197Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M16.286 18C19.442 18 22 15.472 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2 9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.356 4.356 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765 2 16.104 3.919 18 6.286 18h10Z" fill="currentColor" /><path d="M18.286 22C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336C19.295 13.371 17.72 12 15.81 12c-2.052 0-3.715 1.58-3.715 3.53 0 .43.082.844.23 1.226a2.948 2.948 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353 9 20.815 10.247 22 11.786 22h6.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Clouds