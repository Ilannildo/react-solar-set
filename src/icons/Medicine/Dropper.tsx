import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Dropper = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10h-4M22 13h-3M16 21v1M2 22v-2M18.5 2l-.523.523A2.993 2.993 0 0 1 16 3.436M16 2v1.436m0 0V6m0-2.564a2.994 2.994 0 0 1-2.07-.66l-.078-.066-.034-.028A3 3 0 0 0 11.935 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M10 10c0-1.886 0-2.828.586-3.414C11.172 6 12.114 6 14 6h4c1.886 0 2.828 0 3.414.586C22 7.172 22 8.114 22 10v6.507c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.334 2.334 0 0 1 10 16.507V14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10h-4M22 13h-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028.079.065a2.994 2.994 0 0 0 2.069.66M18.5 2l-.523.523A2.993 2.993 0 0 1 16 3.436M16 2v1.436m0 0V6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 16.507V10c0-1.886 0-2.828-.586-3.414C20.828 6 19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586C10 7.172 10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.334 2.334 0 0 0 22 16.507Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10h-4M22 13h-3M16 21v1M2 22V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h3.935a3 3 0 0 1 1.883.682l.034.028.079.065a2.994 2.994 0 0 0 2.069.66M18.5 2l-.523.523A2.993 2.993 0 0 1 16 3.436M16 2v1.436m0 0V6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M22 16.507V10c0-1.886 0-2.828-.586-3.414C20.828 6 19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586C10 7.172 10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.78 7.78 0 0 0 10.474 0A2.334 2.334 0 0 0 22 16.507Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10h-4M22 13h-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path fillRule="evenodd" clipRule="evenodd" d="M11.94 1.25a3.75 3.75 0 0 1 2.354.852l.003.003.035.029.07.058c.257.207.546.35.848.428V2a.75.75 0 0 1 1.5 0v.489c.229-.104.443-.248.632-.432l.065-.065.523-.522a.75.75 0 1 1 1.06 1.06l-.527.527a3.74 3.74 0 0 1-1.753 1.016V5.25h1.302c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.344.08 2.243v6.559c0 .868-.366 1.696-1.008 2.28a8.503 8.503 0 0 1-4.992 2.19.6.6 0 0 1 0 .023v1a.75.75 0 0 1-1.5 0v-1a.6.6 0 0 1 0-.023 8.503 8.503 0 0 1-4.992-2.19 3.084 3.084 0 0 1-1.008-2.28V9.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.726-1.65.455-.456 1.022-.642 1.65-.726.594-.08 1.344-.08 2.242-.08h1.302V4.149a3.739 3.739 0 0 1-1.79-.79l-.083-.069-.004-.003-.031-.026-.002-.001a2.25 2.25 0 0 0-1.408-.51H8l-3.192.103c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4C2.752 5.562 2.75 6.564 2.75 8v14.25a.75.75 0 0 1-1.5 0V7.945c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117h3.996Zm-.035 5.567c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.064.483-.066 1.131-.066 2.095v6.507c0 .446.188.871.518 1.171a7.03 7.03 0 0 0 9.464 0c.33-.3.518-.725.518-1.171V10c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.067Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10.75v1.5h-3a.75.75 0 0 0 0 1.5h3v2.757c0 .657-.277 1.284-.763 1.726a7.754 7.754 0 0 1-4.487 1.99v1.027a.75.75 0 0 1-1.5 0v-1.027a7.754 7.754 0 0 1-4.487-1.99A2.334 2.334 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414C11.172 6 12.114 6 14 6h4c1.886 0 2.828 0 3.414.586.503.502.574 1.267.584 2.664H18a.75.75 0 0 0 0 1.5h4Z" fill="currentColor" /><path d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001.03.026.005.003.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.243 2.243 0 0 1-.848-.428l-.07-.058-.035-.03-.003-.002Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 13.75v2.757c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.334 2.334 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414C11.172 6 12.114 6 14 6h4c1.886 0 2.828 0 3.414.586.503.502.574 1.267.584 2.664H18a.75.75 0 0 0 0 1.5h4v1.5h-3a.75.75 0 0 0 0 1.5h3Z" fill="currentColor" /><path opacity={0.5} d="M15.25 20.224v1.026a.75.75 0 1 0 1.5 0v-1.026a7.814 7.814 0 0 1-1.5 0ZM14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001.03.026.005.003.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.243 2.243 0 0 1-.848-.428l-.07-.058-.035-.03-.003-.002Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Dropper