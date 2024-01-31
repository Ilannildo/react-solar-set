import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HeartAngle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12 5.5-.54.52.01.011.53-.53ZM8.962 18.91l-.465.59.465-.59Zm6.076 0-.464-.588.464.589Zm-8.037-2.49a.75.75 0 0 0-.954 1.16l.954-1.16Zm-4.659-3.009a.75.75 0 1 0 1.316-.72l-1.316.72Zm11.128-5.38a.75.75 0 1 0 1.06-1.062L13.47 8.03ZM2.75 9.136c0-2.15 1.215-3.954 2.874-4.713 1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06 2.786 4.073 1.25 6.425 1.25 9.137h1.5ZM8.497 19.5c.513.404 1.063.834 1.62 1.16.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385-.453-.264-.922-.628-1.448-1.043L8.497 19.5Zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024 1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.197-.9 3.891-2.188 5.343-1.315 1.48-2.972 2.647-4.488 3.842l.929 1.178ZM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596 1.659.759 2.874 2.562 2.874 4.713h1.5Zm-8.176 9.185c-.526.415-.995.779-1.448 1.043-.452.264-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59.558-.326 1.107-.756 1.62-1.16l-.929-1.178Zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92l.93-1.177Zm-5.768-5.63a7.252 7.252 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.274l1.316-.72Zm7.812-6.66 2 1.998 1.06-1.06-2-2-1.06 1.061Z" fill="currentColor" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="m12 5.501 2 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m8.962 18.91.464-.588-.464.589ZM12 5.5l-.54.52a.75.75 0 0 0 1.08 0L12 5.5Zm3.038 13.41.465.59-.465-.59Zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48 3.65 13.028 2.75 11.334 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339 1.43 1.61 3.254 2.9 4.68 4.024l.93-1.178ZM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713 1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06 2.786 4.073 1.25 6.425 1.25 9.137h1.5ZM8.497 19.5c.513.404 1.063.834 1.62 1.16.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385-.453-.264-.922-.628-1.448-1.043L8.497 19.5Zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024 1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.197-.9 3.891-2.188 5.343-1.315 1.48-2.972 2.647-4.488 3.842l.929 1.178ZM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596 1.659.759 2.874 2.562 2.874 4.713h1.5Zm-8.176 9.185c-.526.415-.995.779-1.448 1.043-.452.264-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59.558-.326 1.107-.756 1.62-1.16l-.929-1.178Z" fill="currentColor" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m8.962 18.91.464-.588-.464.589ZM12 5.5l-.54.52.01.011.53-.53Zm3.038 13.41.465.59-.465-.59ZM13.47 8.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9.426 18.322C7.91 17.127 6.253 15.96 4.938 14.48 3.65 13.028 2.75 11.334 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339 1.43 1.61 3.254 2.9 4.68 4.024l.93-1.178ZM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713 1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06 2.786 4.073 1.25 6.425 1.25 9.137h1.5ZM8.497 19.5c.513.404 1.063.834 1.62 1.16.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385-.453-.264-.922-.628-1.448-1.043L8.497 19.5Zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024 1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.197-.9 3.891-2.188 5.343-1.315 1.48-2.972 2.647-4.488 3.842l.929 1.178ZM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596 1.659.759 2.874 2.562 2.874 4.713h1.5Zm-8.176 9.185c-.526.415-.995.779-1.448 1.043-.452.264-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59.558-.326 1.107-.756 1.62-1.16l-.929-1.178ZM11.47 6.032l2 1.998 1.06-1.06-2-2-1.06 1.061Z" fill="currentColor" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343 1.063 1.196 2.349 2.188 3.603 3.154.298.23.594.459.885.688.526.415.995.778 1.448 1.043.452.264.816.385 1.126.385.31 0 .674-.12 1.126-.385.453-.265.922-.628 1.448-1.043.29-.23.587-.458.885-.688 1.254-.966 2.54-1.958 3.603-3.154 1.289-1.452 2.188-3.146 2.188-5.343 0-2.15-1.215-3.955-2.874-4.713-1.474-.673-3.41-.568-5.304 1.088L14.53 6.97a.75.75 0 1 1-1.06 1.061l-2-1.999-.01-.01C9.402 3.882 7.236 3.687 5.624 4.424ZM12 4.46C9.688 2.39 7.099 2.1 5 3.059 2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339 1.166 1.313 2.593 2.412 3.854 3.382.286.22.563.434.826.642.513.404 1.063.834 1.62 1.16.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16.263-.208.54-.422.826-.642 1.26-.97 2.688-2.07 3.854-3.382 1.457-1.64 2.567-3.674 2.567-6.339 0-2.712-1.535-5.064-3.75-6.077-2.099-.96-4.688-.67-7 1.399Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137 2 4.274 7.5.825 12 5.501l2 1.998a.75.75 0 0 0 1.06-1.06L13.13 4.506C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.946-6.106 9.11-.292.225-.579.445-.856.664C14 19.729 13 20.5 12 20.5s-2-.77-3.038-1.59c-.277-.218-.564-.438-.856-.663Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M2 9.137c0 4.405 3.298 6.946 6.106 9.11.292.225.579.445.856.664C10 19.729 11 20.5 12 20.5v-15C7.5.826 2 4.275 2 9.138Z" fill="currentColor" /><path d="m14 7.5-2-2v15c1 0 2-.77 3.038-1.59.277-.218.564-.438.856-.663C18.702 16.083 22 13.542 22 9.137c0-4.462-4.631-7.734-8.871-4.63l1.931 1.931A.75.75 0 0 1 14 7.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HeartAngle