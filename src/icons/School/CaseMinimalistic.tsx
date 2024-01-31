import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CaseMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 14c0-3.771 0-5.657-1.172-6.828-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6h-4c-1.356 0-2.468 0-3.39.054-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172.654-.653.943-1.528 1.07-2.828" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.007 1.354 1.83 1.374" stroke="#1C274D" strokeWidth={1.5} /><path d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2M16 11v2" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 6h-4c-1.356 0-2.468 0-3.39.054-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14c0-3.771 0-5.657-1.172-6.828-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6Z" stroke="#1C274D" strokeWidth={1.5} /><path opacity={0.5} d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.007 1.354 1.83 1.374" stroke="#1C274D" strokeWidth={1.5} /><path opacity={0.5} d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 11v2M16 11v2" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 6h-4c-1.356 0-2.468 0-3.39.054-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14c0-3.771 0-5.657-1.172-6.828-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6Z" stroke="#1C274D" strokeWidth={1.5} /><path d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.007 1.354 1.83 1.374" stroke="#1C274D" strokeWidth={1.5} /><path d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2M16 11v2" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.561 2.25h2.879c.113 0 .201 0 .285.005a2.75 2.75 0 0 1 2.385 1.72c.032.077.06.16.095.268l.032.097a4 4 0 0 0 .03.085c.177.49.613.83 1.068.875l.1.006c1.677.099 2.966.378 3.924 1.335.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.958-.957 2.248-1.236 3.924-1.335l.1-.006c.455-.044.892-.385 1.07-.875l.028-.085.032-.097c.036-.107.064-.191.095-.269a2.75 2.75 0 0 1 2.385-1.719c.084-.005.172-.005.286-.005Zm-3.92 4.554c.045-.002.09-.004.133-.008C7.647 6.75 8.697 6.75 10 6.75h4c1.303 0 2.353 0 3.226.046.044.004.088.006.132.008 1.604.095 2.398.356 2.94.898a2.3 2.3 0 0 1 .477.7c-1.827 1.186-3.028 1.95-4.038 2.456A.75.75 0 0 0 15.25 11v.458c-2.12.64-4.38.64-6.5 0V11a.75.75 0 0 0-1.487-.142c-1.01-.505-2.21-1.27-4.038-2.457a2.3 2.3 0 0 1 .477-.7c.542-.541 1.336-.802 2.94-.897Zm-3.78 3.149c-.11.996-.111 2.286-.111 4.047 0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289 0-1.76-.001-3.05-.11-4.047-1.887 1.223-3.181 2.032-4.39 2.552V13a.75.75 0 0 1-1.5.016 12.75 12.75 0 0 1-6.5 0A.75.75 0 0 1 7.25 13v-.495c-1.208-.52-2.503-1.33-4.39-2.552Zm12.131-4.702-.971-.001H9.009a2.843 2.843 0 0 0 .174-.428l.003-.008.026-.077c.045-.136.058-.173.07-.203a1.25 1.25 0 0 1 1.084-.782c.032-.002.072-.002.215-.002h2.838c.143 0 .183 0 .215.002.482.03.904.334 1.085.782.012.03.024.067.07.203l.028.085m.039.113c.039.108.084.214.136.316l-.136-.316Z" fill="#1C274D" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2.162 8.5C2 9.603 2 11.05 2 13c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13c0-1.95 0-3.396-.162-4.5-2.277 1.48-3.736 2.424-5.088 3.005V12a.75.75 0 0 1-1.5.017 12.75 12.75 0 0 1-6.5 0A.75.75 0 0 1 7.25 12v-.495C5.898 10.923 4.44 9.98 2.162 8.5Z" fill="#1C274D" /><path fillRule="evenodd" clipRule="evenodd" d="M10.581 2.25h-.02c-.114 0-.202 0-.286.005a2.75 2.75 0 0 0-2.385 1.72 7.913 7.913 0 0 0-.12.343l-.004.012a1.63 1.63 0 0 1-.504.695c-.228.008-.445.017-.653.03-1.644.096-2.687.366-3.437 1.117-.245.244-.439.52-.592.838.058.02.114.046.167.081 2.1 1.365 3.42 2.22 4.517 2.767A.75.75 0 0 1 8.75 10v.458c2.12.64 4.38.64 6.5 0V10a.75.75 0 0 1 1.487-.142c1.096-.548 2.416-1.402 4.516-2.767a.753.753 0 0 1 .167-.081 3.024 3.024 0 0 0-.592-.838c-.75-.75-1.793-1.02-3.437-1.118-.197-.011-.403-.02-.618-.028a1.881 1.881 0 0 1-.565-.774l-.003-.009c-.036-.107-.063-.191-.095-.269a2.75 2.75 0 0 0-2.385-1.719 4.82 4.82 0 0 0-.285-.005H10.58Zm4.237 2.566-.005-.011-.005-.012-.004-.012-.004-.01-.002-.005-.004-.012-.004-.012-.002-.006-.003-.008-.002-.007-.002-.006a3.544 3.544 0 0 0-.063-.181 1.25 1.25 0 0 0-1.084-.782 4.191 4.191 0 0 0-.215-.002h-2.838c-.143 0-.183 0-.215.002a1.25 1.25 0 0 0-1.084.782l-.003.007-.008.021a5.709 5.709 0 0 0-.077.23l-.002.006-.003.007-.002.008-.002.006-.004.012-.004.012-.002.005-.004.01-.004.012-.005.012-.004.01-.001.001a2.859 2.859 0 0 1-.044.108L10 5h4.896a3.024 3.024 0 0 1-.078-.184Z" fill="#1C274D" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.581 2.25h-.02c-.114 0-.202 0-.286.005a2.75 2.75 0 0 0-2.385 1.72 7.913 7.913 0 0 0-.12.343l-.004.012a1.63 1.63 0 0 1-.505.695c-.227.008-.444.017-.652.03-1.644.096-2.687.366-3.438 1.117-.244.244-.438.52-.59.838.057.02.113.046.166.081 2.1 1.365 3.42 2.22 4.516 2.767A.75.75 0 0 1 8.75 10v.458c2.12.64 4.38.64 6.5 0V10a.75.75 0 0 1 1.486-.142c1.097-.548 2.417-1.402 4.517-2.767a.754.754 0 0 1 .167-.081 3.022 3.022 0 0 0-.592-.838c-.75-.75-1.793-1.02-3.437-1.118-.197-.011-.403-.02-.618-.028a1.881 1.881 0 0 1-.564-.774l-.004-.009c-.036-.107-.064-.191-.095-.269a2.75 2.75 0 0 0-2.385-1.719 4.816 4.816 0 0 0-.286-.005h-2.858Zm4.237 2.566-.005-.011-.005-.012-.005-.012-.003-.01-.002-.005-.004-.012-.004-.012-.002-.006-.003-.008-.002-.007-.002-.006a3.782 3.782 0 0 0-.063-.181 1.25 1.25 0 0 0-1.084-.782 4.194 4.194 0 0 0-.215-.002h-2.838c-.143 0-.183 0-.215.002a1.25 1.25 0 0 0-1.084.782l-.003.007-.008.021a5.52 5.52 0 0 0-.078.23l-.001.006-.003.007-.002.008-.002.006-.004.012-.005.012-.001.005-.004.01-.005.012-.004.012-.005.01v.001a2.859 2.859 0 0 1-.044.108L10 5h4.896a3.024 3.024 0 0 1-.079-.184Z" fill="#1C274D" /><path opacity={0.5} d="M2.162 8.5C2 9.603 2 11.05 2 13c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13c0-1.95 0-3.397-.162-4.5-2.277 1.48-3.736 2.423-5.088 3.005V12a.75.75 0 0 1-1.5.016 12.75 12.75 0 0 1-6.5 0A.75.75 0 0 1 7.25 12v-.496C5.898 10.924 4.44 9.98 2.162 8.5Z" fill="#1C274D" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CaseMinimalistic